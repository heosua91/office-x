# Database Design - Office X (Phase 1)

## 1. Overview
This document outlines the database schema for the Office X system. The design prioritizes scalability, data integrity, and support for future AI-driven features.

**Database Engine:** PostgreSQL (Recommended for structured data, JSONB support for flexibility, and vector extension support for future AI RAG).

## 2. Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        ORGANIZATION & USERS                             │
│                                                                         │
│  companies ──┬── departments (tree: parent_id)                          │
│              ├── company_master_data (vendors, floors, etc.)            │
│              ├── company_media (logos, signage ads)                     │
│              ├── users ──┬── verification_codes (OTP)                   │
│              │           └── user_availability (personal schedule)      │
│              └── subscription_plans (link to pricing)                   │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        FACILITIES & DEVICES                             │
│                                                                         │
│  meeting_rooms ──┬── resource_availability (working hours)              │
│                  └── reception_devices (reception/room tablets)         │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        MEETINGS & VISITS                                │
│                                                                         │
│  meetings (QR/PIN/Invite Token)                                         │
│     ├── meeting_participants ──┬── users                                │
│     │                          └── guests ── client_companies           │
│     ├── visit_logs (check-in/out logs)                                  │
│     ├── meeting_documents (files/Google Drive links)                    │
│     └── meeting_permissions (sharing scope)                             │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        AI & INTELLIGENCE                                │
│                                                                         │
│  meetings                                                               │
│     ├── meeting_recordings ── meeting_transcripts                       │
│     │                           └── transcript_segments (time-synced)   │
│     ├── meeting_events (reactions, pins)                                │
│     ├── meeting_summaries (AI summary, decisions)                       │
│     ├── action_items ── users (assignee)                                │
│     └── meeting_ai_templates (prompts)                                  │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                        BILLING & USAGE                                  │
│                                                                         │
│  subscriptions ──┬── subscription_plans                                 │
│                  ├── promo_codes                                        │
│                  └── subscription_requests (slot expansions)            │
│  payment_methods ── invoices                                            │
│  ai_credit_purchases (prepaid minutes)                                  │
│  usage_quotas ── usage_logs (AI minutes, storage tracking)              │
│  device_catalog (hardware rental/purchase pricing)                      │
└─────────────────────────────────────────────────────────────────────────┘
 
┌─────────────────────────────────────────────────────────────────────────┐
│                        SYSTEM MONITORING                                │
│                                                                         │
│  audit_logs (admin actions)                                             │
│  access_logs (login history)                                            │
│  csv_import_logs (CSV import history)                                   │
│  monitoring_rules (security alerts)                                     │
│  notification_integrations (Slack, Teams, etc.)                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Schema Definitions

### 3.1. Organization & Users (Multi-tenant Foundation)

#### `companies`
Stores core identification, basic configurations, and quota policies for companies (Tenants) using the system.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `name` | VARCHAR(255) | NOT NULL | Company name |
| `code` | VARCHAR(50) | NOT NULL | Unique code for company identification/login |
| `address` | TEXT | | |
| `contact_person` | VARCHAR(255) | | |
| `contact_phone` | VARCHAR(50) | | |
| `contact_email` | VARCHAR(255) | | |
| `billing_email` | VARCHAR(255) | | |
| `expected_users` | INT | | Initially declared users |
| `subscription_plan_id` | UUID | FK -> subscription_plans.id | Reference to the master plan |
| `user_limit_override` | INT | | Individual cap for ADM-002 |
| `ai_minutes_limit_override` | INT | | Individual cap for ADM-002 |
| `ai_overage_unit_price_override`| DECIMAL(10, 2) | | For ADM-002 |
| `ai_limit_policy` | VARCHAR(50) | DEFAULT 'auto_postpaid' | 'auto_postpaid', 'force_stop' (ADMX-027) |
| `settings` | JSONB | | Company-specific settings (Theme, Logo URL, Rules) |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `departments`
Manages the organizational structure and departments within a company for permission control and personnel organization.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `name` | VARCHAR(255) | NOT NULL | |
| `parent_id` | UUID | FK -> departments.id | For organizational hierarchy |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `company_master_data`
Stores custom data categories for companies such as Vendors, Visit Purposes, Floors, Equipment, etc. (Supports ADMX-010).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `category` | VARCHAR(50) | NOT NULL | 'vendor', 'purpose', 'floor', 'equipment' |
| `value` | VARCHAR(255) | NOT NULL | Display text |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `display_order` | INT | DEFAULT 0 | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

#### `company_media`
Manages digital assets (Logos, Videos, Backgrounds) displayed on Reception Tablets or company standby screens.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `type` | VARCHAR(50) | NOT NULL | 'logo', 'background', 'slide_image', 'slide_video' |
| `url` | TEXT | NOT NULL | S3/Storage URL |
| `display_order` | INT | | Sequence for slides |
| `play_interval_seconds` | INT | | Interval for screen saver (ADMX-012) |
| `duration_seconds` | INT | | Display duration for images |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `users`
Information about company user accounts (Employees, Admins), including permission data and Calendar/Drive integration links.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `department_id` | UUID | FK -> departments.id | |
| `email` | VARCHAR(255) | NOT NULL | Login ID |
| `password` | VARCHAR(255) | NOT NULL | |
| `full_name` | VARCHAR(255) | NOT NULL | |
| `role` | VARCHAR(50) | NOT NULL | 'admin', 'user', 'reception' |
| `calendar_integration_token`| TEXT | | OAuth token for Google/Outlook |
| `google_drive_token` | TEXT | | OAuth token for Google Drive integration |
| `google_drive_refresh_token`| TEXT | | |
| `avatar_url` | TEXT | | |
| `signature_text` | TEXT | | |
| `status` | VARCHAR(20) | | 'active', 'inactive', 'invited' |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `verification_codes`
Stores OTP verification codes sent via Email for new registration or password reset processes.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `email` | VARCHAR(255) | NOT NULL | |
| `code` | VARCHAR(6) | NOT NULL | 6-digit verification code |
| `purpose` | VARCHAR(20) | | 'registration', 'password_reset' |
| `expires_at` | TIMESTAMP | NOT NULL | |
| `used_at` | TIMESTAMP | | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

### 3.2. Facilities & Resources

#### `meeting_rooms`
List of physical meeting rooms with capacity configurations, equipment, and operating modes (Single/Multi-device).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `name` | VARCHAR(255) | NOT NULL | |
| `capacity` | INT | | |
| `location` | VARCHAR(255) | | Floor, Building |
| `equipment` | JSONB | | Arrays of tags ['projector', 'whiteboard'] |
| `calendar_resource_id` | VARCHAR(255)| | ID for External Calendar sync |
| `is_multi_device` | BOOLEAN | DEFAULT FALSE | Supports ENTR-004 flow |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `reception_devices`
Manages physical Tablet devices assigned for Reception or directly linked with meeting rooms (ENTR-001).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `meeting_room_id` | UUID | FK -> meeting_rooms.id | Nullable, bound to room (ENTR-001) |
| `device_identifier` | VARCHAR(255) | NOT NULL | Device ID for login |
| `password` | VARCHAR(255) | NOT NULL | |
| `name` | VARCHAR(255) | | Friendly name (e.g., "Lobby iPad 1") |
| `location` | VARCHAR(255) | | Physical location |
| `purpose` | VARCHAR(50) | | 'reception', 'room_display' |
| `status` | VARCHAR(20) | | 'online', 'offline', 'maintenance' |
| `settings` | JSONB | | Device-specific config (notifications, linked rooms) |
| `auth_token_hash` | TEXT | | Persistent token for UKET-001 |
| `auth_token_expires_at` | TIMESTAMP | | Expiry for persistent login |
| `last_active_at` | TIMESTAMP | | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `resource_availability`
Detailed rules for available time slots, closing times, or periodic maintenance schedules for resources (Meeting Rooms).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `resource_id` | UUID | FK -> meeting_rooms.id | Nullable (if global rule) |
| `day_of_week` | INT | NOT NULL | 0=Sunday, 1=Monday... |
| `start_time` | TIME | NOT NULL | |
| `end_time` | TIME | NOT NULL | |
| `is_available` | BOOLEAN | DEFAULT TRUE | |
| `reason` | VARCHAR(255) | | 'cleaning', 'maintenance' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `user_availability`
Manages the availability schedule of individual users (Employees) for external or internal meeting bookings (OFX-020).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `user_id` | UUID | FK -> users.id | |
| `day_of_week` | INT | NOT NULL | 0=Sunday, 1=Monday... |
| `start_time` | TIME | NOT NULL | |
| `end_time` | TIME | NOT NULL | |
| `is_available` | BOOLEAN | DEFAULT TRUE | |
| `reason` | VARCHAR(255) | | E.g., 'vacation', 'private' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

### 3.3. Meetings & Reception

#### `meetings`
Detailed information for scheduled meetings, including time, location, status, and check-in identifiers (QR/PIN).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `host_user_id` | UUID | FK -> users.id | The organizer |
| `meeting_room_id` | UUID | FK -> meeting_rooms.id | Nullable (if external meeting) |
| `invite_token` | VARCHAR(255) | UNIQUE | Random hash for guest information entry (Smart URL) |
| `title` | VARCHAR(255) | NOT NULL | |
| `description` | TEXT | | |
| `start_time` | TIMESTAMP | NOT NULL | |
| `end_time` | TIMESTAMP | NOT NULL | |
| `status` | VARCHAR(50) | | 'scheduled', 'ongoing', 'completed', 'cancelled' |
| `meeting_url` | TEXT | | Online meeting link |
| `qr_code_hash` | VARCHAR(255) | | For reception check-in (UKET-004) |
| `booking_code` | VARCHAR(20) | | PIN Code for manual reception entry (UKET-005) |
| `ai_template_id` | UUID | FK -> meeting_ai_templates.id | AI prompt/format preference |
| `thank_you_email_sent_at`| TIMESTAMP | | Track for OFX-015 |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `guests`
Information about external visitors or partners participating in meetings or visiting the company.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `client_company_id` | UUID | FK -> client_companies.id | Nullable |
| `email` | VARCHAR(255) | | |
| `name` | VARCHAR(255) | NOT NULL | |
| `company_name` | VARCHAR(255) | | |
| `phone` | VARCHAR(50) | | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `meeting_participants`
Linking table managing the list of participants (Users & Guests) for each meeting, including RSVP status and seat positions.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `user_id` | UUID | FK -> users.id | Nullable (if external user) |
| `guest_id` | UUID | FK -> guests.id | Nullable (if internal user) |
| `role` | VARCHAR(20) | | 'organizer', 'attendee' |
| `rsvp_status` | VARCHAR(20) | | 'accepted', 'declined', 'pending' |
| `seat_position` | VARCHAR(50) | | Position or ID for Multi-device seat adjustment (ENTR-006) |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `visit_logs`
Detailed logs of guest visits, including Check-in/Check-out times and authentication methods at Reception.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `guest_id` | UUID | FK -> guests.id | |
| `check_in_time` | TIMESTAMP | | |
| `check_out_time` | TIMESTAMP | | Time the guest left or meeting ended |
| `check_in_method` | VARCHAR(50) | | 'qr_code', 'manual_code', 'receptionist' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

#### `meeting_documents`
Manages documents uploaded directly or linked from Google Drive to support meeting preparation and execution.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `uploader_user_id` | UUID | FK -> users.id | Nullable |
| `uploader_guest_id`| UUID | FK -> guests.id | Nullable |
| `file_name` | VARCHAR(255) | NOT NULL | |
| `source` | VARCHAR(50) | NOT NULL | 'local_upload', 'google_drive' |
| `file_url` | TEXT | | S3/Storage URL or Google Drive WebContentLink |
| `external_file_id` | VARCHAR(255) | | Google Drive File ID |
| `file_type` | VARCHAR(100) | | MIME type (e.g., 'application/pdf', 'image/jpeg') |
| `file_size_bytes` | BIGINT | | Helpful for quotas if local_upload |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `meeting_permissions`
Handles granular sharing and permission control (View/Edit) for meetings based on users or departments (OFX-014).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `grantee_type` | VARCHAR(50) | NOT NULL | 'user', 'department', 'all_participants' |
| `grantee_id` | UUID | | FK -> users.id or departments.id |
| `permission_level` | VARCHAR(20) | NOT NULL | 'view', 'edit' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

### 3.4. AI & Meeting Intelligence

#### `meeting_recordings`
Information for managing audio or video files (S3 paths, duration, processing status) for each meeting.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `user_id` | UUID | FK -> users.id | individual stream owner (ENTR-008) |
| `guest_id` | UUID | FK -> guests.id | individual stream owner (ENTR-008) |
| `file_url` | TEXT | NOT NULL | S3/Storage URL |
| `file_type` | VARCHAR(50) | NOT NULL | 'video/mp4', 'audio/mp3' |
| `duration_seconds` | INT | | |
| `file_size_bytes` | BIGINT | | For quota calculation |
| `status` | VARCHAR(20) | | 'processing', 'available', 'failed' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `meeting_transcripts`
Raw text data describing the entire meeting content after processing through the Speech-to-Text (STT) system.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `s3_audio_path` | TEXT | | Path to audio file |
| `transcript_text` | TEXT | | Full extracted text (fallback) |
| `processed_at` | TIMESTAMP | | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `transcript_segments`
Detailed dialogue segments mapped to timestamps, supporting synchronized audio playback and manual corrections.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `transcript_id` | UUID | FK -> meeting_transcripts.id | |
| `speaker_user_id`| UUID | FK -> users.id | Nullable |
| `speaker_guest_id`| UUID | FK -> guests.id | Nullable |
| `speaker_name` | VARCHAR(255) | | Fallback if ID is unknown |
| `start_time_ms` | INT | NOT NULL | Milliseconds from recording start |
| `end_time_ms` | INT | NOT NULL | |
| `text_content` | TEXT | NOT NULL | |
| `confidence_score`| FLOAT | | STT confidence |
| `is_edited` | BOOLEAN | DEFAULT FALSE| Flag for manual edits |
| `display_order` | INT | | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `meeting_events`
Stores real-time interaction events during the meeting such as Reactions, Comments, Pinned content, or Markers.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `user_id` | UUID | FK -> users.id | Nullable (if guest) |
| `event_type` | VARCHAR(50) | NOT NULL | 'reaction', 'comment', 'pin', 'section_marker', 'memo' |
| `content` | TEXT | | Comment text, reaction type, or memo content |
| `timestamp_in_meeting` | INT | | Offset in seconds from start |
| `created_at` | TIMESTAMP | | |


#### `meeting_summaries`
AI-generated analysis results including content summaries, internal notes, key decisions, and sharing permissions.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `summary_text` | TEXT | | |
| `internal_notes` | TEXT | | Private company notes (OFX-019) |
| `is_shared_with_client` | BOOLEAN | DEFAULT FALSE | Visibility control (OFX-019) |
| `shared_with_departments`| JSONB | | Array of department UUIDs allowed to view (OFX-014) |
| `shared_with_users` | JSONB | | Array of user UUIDs allowed to view (OFX-014) |
| `key_decisions` | JSONB | | List of decisions |
| `sentiment_score` | FLOAT | | -1.0 to 1.0 (Future usage) |
| `analysis_data` | JSONB | | AI Analysis data (OFX-011) |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `action_items`
List of tasks or Todo items extracted from meetings and assigned to specific individuals.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `meeting_id` | UUID | FK -> meetings.id | |
| `assignee_id` | UUID | FK -> users.id | |
| `content` | TEXT | NOT NULL | |
| `due_date` | DATE | | |
| `status` | VARCHAR(20) | | 'pending', 'completed' |
| `external_task_id`| VARCHAR(255)| | ID in Jira/Slack if synced |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `meeting_ai_templates`
Manages AI Prompts and output format definitions for generating meeting minutes or automated emails.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `name` | VARCHAR(100) | NOT NULL | Template name (e.g., 'Concise', 'Formal') |
| `type` | VARCHAR(50) | NOT NULL | 'summary', 'thank_you_email' |
| `prompt_text` | TEXT | NOT NULL | The system prompt or instructions for AI |
| `output_format` | TEXT | | Markdown/JSON structure requirements |
| `is_default` | BOOLEAN | DEFAULT FALSE | |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

### 3.5. System & Billing

#### `subscriptions`
Manages service subscription status, current plan, and contract validity periods for a company.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `plan_type` | VARCHAR(50) | | |
| `start_date` | DATE | | |
| `end_date` | DATE | | |
| `status` | VARCHAR(20) | | 'active', 'cancelled', 'expired' |
| `promo_code_id` | UUID | FK -> promo_codes.id | Nullable |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `subscription_requests`
Records requests for plan changes or user slot expansions awaiting processing or approval.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `request_type` | VARCHAR(50) | NOT NULL | 'add_user_slots', 'change_plan' |
| `requested_quantity` | INT | | e.g. 5 extra users |
| `prorated_amount` | DECIMAL(10, 2) | | Calculated amount for current month |
| `status` | VARCHAR(20) | DEFAULT 'pending' | 'pending', 'approved', 'applied', 'rejected' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `subscription_plans`
Master table defining the provided service plans (Standard, Pro, Enterprise) with default feature quotas.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `name` | VARCHAR(50) | NOT NULL | 'Standard', 'Pro', 'Enterprise' |
| `price_monthly` | DECIMAL(10, 2) | | Base monthly cost |
| `user_limit` | INT | | Max users allowed |
| `ai_minutes_limit` | INT | | AI summary quota |
| `features` | JSONB | | Flags for specific features |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `promo_codes`
Manages promotional codes and discounts applicable to companies during registration or plan upgrades.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `code` | VARCHAR(50) | NOT NULL| |
| `discount_type` | VARCHAR(20) | | 'percentage', 'fixed_amount' |
| `discount_value` | DECIMAL(10, 2) | | |
| `expires_at` | TIMESTAMP | | |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `payment_methods`
Stored information for available payment methods (Cards, Transfers) helping facilitate automated transactions.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `type` | VARCHAR(50) | NOT NULL | 'credit_card', 'bank_transfer' |
| `provider_token` | VARCHAR(255) | | Stripe/Gateway customer/card ID |
| `last4` | VARCHAR(4) | | |
| `expiry` | VARCHAR(7) | | MM/YYYY |
| `is_default` | BOOLEAN | DEFAULT FALSE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `invoices`
Monthly billing history, amount details, and payment status for each company.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `amount` | DECIMAL(10, 2) | NOT NULL | |
| `currency` | VARCHAR(3) | DEFAULT 'JPY' | |
| `status` | VARCHAR(20) | | 'paid', 'unpaid', 'overdue', 'void' |
| `billing_period_start`| DATE | | |
| `billing_period_end` | DATE | | |
| `issued_date` | DATE | | |
| `due_date` | DATE | | |
| `pdf_url` | TEXT | | Link to invoice PDF |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `ai_credit_purchases`
Tracks prepaid AI minutes purchased by companies when they exceed default quotas.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `amount_minutes` | INT | NOT NULL | Minutes purchased |
| `amount_paid` | DECIMAL(10, 2) | NOT NULL | |
| `purchase_date` | TIMESTAMP | DEFAULT NOW() | |
| `payment_token` | VARCHAR(255) | | Link to invoice/transaction |
| `status` | VARCHAR(20) | | 'pending', 'applied', 'cancelled' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

#### `device_catalog`
Master list of hardware devices (Tablets, Mics...) provided by TNG with rental/purchase unit prices.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `model_name` | VARCHAR(100) | NOT NULL | e.g., 'iPad Pro 11"', 'Jabra Mic' |
| `type` | VARCHAR(50) | | 'tablet', 'microphone', 'camera' |
| `rental_price_jpy` | INT | | Monthly rental fee |
| `purchase_price_jpy`| INT | | One-time purchase cost |
| `specifications` | JSONB | | Hardware specs |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `audit_logs`
Records history of important Admin actions (C/U/D) on system data for control and auditing.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `admin_user_id` | UUID | FK -> users.id | |
| `action` | VARCHAR(100) | | e.g., 'create_user', 'update_company' |
| `target_resource` | VARCHAR(100) | | Table/ID affected |
| `changes` | JSONB | | Before/After values |
| `timestamp` | TIMESTAMP | DEFAULT NOW()| |

#### `access_logs`
Stores login/logout logs and visitor device information for security monitoring.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `user_id` | UUID | FK -> users.id | Nullable |
| `ip_address` | VARCHAR(45) | | |
| `user_agent` | TEXT | | Browser/Device info |
| `action` | VARCHAR(50) | | 'login', 'logout', 'failed_login' |
| `status` | VARCHAR(20) | | 'success', 'failure' |
| `timestamp` | TIMESTAMP | DEFAULT NOW()| |

#### `csv_import_logs`
Tracks history of bulk CSV imports for users or other master data (ADMX-003).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `admin_user_id` | UUID | FK -> users.id | Who performed the import |
| `import_type` | VARCHAR(50) | NOT NULL | 'user_import', 'master_data_import' |
| `file_name` | VARCHAR(255) | | |
| `file_url` | TEXT | | S3 path to the original file |
| `total_rows` | INT | | |
| `success_count` | INT | | |
| `failure_count` | INT | | |
| `error_details` | JSONB | | Array of row-level errors |
| `status` | VARCHAR(20) | | 'processing', 'completed', 'failed' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |


### 3.6. Client Management (CRM)

#### `client_companies`
List of external client companies or partners frequently interacting with the Tenant.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | The host company |
| `name` | VARCHAR(255) | NOT NULL | |
| `address` | TEXT | | |
| `phone` | VARCHAR(50) | | |
| `contact_person` | VARCHAR(255) | | Primary contact |
| `industry` | VARCHAR(100) | | |
| `status` | VARCHAR(20) | | 'active', 'inactive', 'prospect' |
| `visit_count` | INT | DEFAULT 0 | Aggregated stats |
| `last_visit` | TIMESTAMP | | |
| `notes` | TEXT | | Internal notes |
| `created_at` | TIMESTAMP | DEFAULT NOW()| |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

### 3.7. Usage & Quotas

#### `usage_quotas`
Manages resource usage limits (AI, Storage, User seats) allocated according to the company's subscription plan.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `feature_name` | VARCHAR(50) | NOT NULL | 'ai_summary_minutes', 'storage_gb', 'user_seats' |
| `limit_amount` | INT | NOT NULL | Max allowed quantity |
| `period` | VARCHAR(20) | | 'monthly', 'total' |
| `reset_date` | DATE | | Next reset cycle |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `usage_logs`
Tracks actual resource consumption per user session for billing and quota statistics.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `user_id` | UUID | FK -> users.id | Who consumed the resource |
| `feature_name` | VARCHAR(50) | NOT NULL | 'ai_summary_minutes', 'storage_gb' |
| `amount_used` | DECIMAL(10, 2)| NOT NULL | Consumption value |
| `context` | VARCHAR(255) | | e.g., 'meeting_id:xyz' |
| `timestamp` | TIMESTAMP | DEFAULT NOW()| |

#### `monitoring_rules`
Defines automated monitoring rules and triggers Alerts when abnormal behavior or limit thresholds are detected.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | Nullable (if global rule) |
| `rule_type` | VARCHAR(100) | NOT NULL | 'mass_deletion', 'consecutive_failures' |
| `threshold` | INT | | Count limit |
| `time_window_seconds`| INT | | Duration to check |
| `notification_target` | VARCHAR(50) | | 'admin', 'all_users' (ADMX-028) |
| `notification_frequency`| VARCHAR(50) | | 'once', 'daily', 'weekly' |
| `integration_type` | VARCHAR(50) | | 'email', 'slack', 'teams' |
| `notification_email` | VARCHAR(255) | | Recipient for alerts |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

### 3.8. Notifications & Integrations

#### `notification_integrations`
Manages external communication channels (Slack, Microsoft Teams, Email) for delivering system notifications and alerts to users or companies.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `user_id` | UUID | FK -> users.id | Nullable (for personal notifications) |
| `company_id` | UUID | FK -> companies.id | |
| `device_id` | UUID | FK -> reception_devices.id| Nullable (if bound to a specific device) |
| `integration_type` | VARCHAR(50) | NOT NULL | 'slack', 'teams', 'email' |
| `webhook_url` | TEXT | | For webhook-based integrations |
| `api_key` | TEXT | | For API-based authentication |
| `is_active` | BOOLEAN | DEFAULT TRUE | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

## 4. Scalability & extensibility
- **Partial Unique Indexes**: For tables using Soft Delete, uniqueness on critical fields (e.g., `users.email`) MUST be enforced via partial indexes: `CREATE UNIQUE INDEX idx_user_email_active ON users(email) WHERE deleted_at IS NULL`.
- **JSONB Columns**: Used in `users.settings`, `companies.settings`, `meeting_summaries.key_decisions` to allow adding new fields without schema migration.
- **UUID Keys**: Used for all Primary Keys to prevent enumeration attacks and easier data distribution properties.
- **Indexes**:
  - `users(email)`: Fast login lookups.
  - `reservations(start_time, end_time)`: Efficient conflict checking.
  - `reservations(qr_code_hash)`: Fast reception scan lookups.
  - `companies(code)`: Fast tenant resolution.
  - `notification_integrations(company_id, is_active)`: Fast lookup for active integrations.

