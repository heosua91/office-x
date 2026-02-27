# Database Design - Office X (Phase 1)

## 1. Overview
This document outlines the database schema for the Office X system. The design prioritizes scalability, data integrity, and support for future AI-driven features.

**Database Engine:** PostgreSQL (Recommended for structured data, JSONB support for flexibility, and vector extension support for future AI RAG).

## 2. Entity-Relationship Diagram (ERD) Concepts

### Core Entities
- **Company**: The tenant/organization using the system.
- **User**: Employees, Admins, Receptionists belonging to a Company.
- **MeetingRoom**: Physical resources managed by the Company.
- **Reservation**: The core transaction linking Users, MeetingRooms, and Guests.
- **Guest/Visitor**: External users interacting via Reception/QR.

### AI & Data Analysis Features
- **MeetingTranscript**: Raw speech-to-text data.
- **MeetingSummary**: AI-generated summaries.
- **ActionItem**: Extracted tasks from meetings.

---

## 3. Schema Definitions

### 3.1. Organization & Users (Multi-tenant Foundation)

#### `companies`
Stores tenant information.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `name` | VARCHAR(255) | NOT NULL | Company name |
| `code` | VARCHAR(50) | NOT NULL | Unique code for company identification/login |
| `address` | TEXT | | |
| `contact_email` | VARCHAR(255) | | |
| `billing_email` | VARCHAR(255) | | |
| `subscription_plan_id` | UUID | FK -> subscription_plans.id | Reference to the master plan |
| `user_limit_override` | INT | | Individual cap for ADM-002 |
| `ai_minutes_limit_override` | INT | | Individual cap for ADM-002 |
| `ai_overage_unit_price_override`| DECIMAL(10, 2) | | For ADM-002 |
| `settings` | JSONB | | Company-specific settings (Theme, Logo URL, Rules) |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `departments`
Hierarchy within a company.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `name` | VARCHAR(255) | NOT NULL | |
| `parent_id` | UUID | FK -> departments.id | For organizational hierarchy |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `company_media`
Assets for reception screens/tablets (Logos, Slides, Videos).
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
System users (Employees, Admins).
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
| `status` | VARCHAR(20) | | 'active', 'inactive', 'invited' |
| `created_at` | TIMESTAMP | | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |
| `created_at` | TIMESTAMP | | |

#### `verification_codes`
Required for `REG-002` and `REG-004` (Email verification flow).
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
Tablets and screens managed by the company.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
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
Detailed availability rules for rooms/resources.
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

### 3.3. Reservations & Reception

#### `reservations`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `host_user_id` | UUID | FK -> users.id | The organizer |
| `meeting_room_id` | UUID | FK -> meeting_rooms.id | Nullable (if external meeting) |
| `title` | VARCHAR(255) | NOT NULL | |
| `description` | TEXT | | |
| `start_time` | TIMESTAMP | NOT NULL | |
| `end_time` | TIMESTAMP | NOT NULL | |
| `status` | VARCHAR(50) | | 'scheduled', 'ongoing', 'completed', 'cancelled' |
| `meeting_url` | TEXT | | Online meeting link |
| `qr_code_hash` | VARCHAR(255) | | For reception check-in |
| `ai_template_id` | UUID | FK -> meeting_ai_templates.id | AI prompt/format preference |
| `thank_you_email_sent_at`| TIMESTAMP | | Track for OFX-015 |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |



#### `guests`
External visitors.
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

#### `reservation_participants`
Linking Users and Guests to Reservations.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `user_id` | UUID | FK -> users.id | Nullable (if external user) |
| `guest_id` | UUID | FK -> guests.id | Nullable (if internal user) |
| `role` | VARCHAR(20) | | 'organizer', 'attendee' |
| `rsvp_status` | VARCHAR(20) | | 'accepted', 'declined', 'pending' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |

#### `check_in_logs`
Logs of reception interactions.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `guest_id` | UUID | FK -> guests.id | |
| `check_in_time` | TIMESTAMP | | |
| `check_in_method` | VARCHAR(50) | | 'qr_code', 'manual_code', 'receptionist' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

### 3.4. AI & Meeting Intelligence

#### `meeting_recordings`
Storage for raw video/audio files.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
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
Raw audio/text data from meetings.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `s3_audio_path` | TEXT | | Path to audio file |
| `transcript_text` | TEXT | | Full extracted text |
| `processed_at` | TIMESTAMP | | |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `meeting_events`
Granular events during a meeting (Reactions, Comments, Pins).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `user_id` | UUID | FK -> users.id | Nullable (if guest) |
| `event_type` | VARCHAR(50) | NOT NULL | 'reaction', 'comment', 'pin', 'section_marker' |
| `content` | TEXT | | Comment text or reaction type |
| `timestamp_in_meeting` | INT | | Offset in seconds from start |
| `created_at` | TIMESTAMP | | |

#### `meeting_summaries`
AI-generated insights.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `summary_text` | TEXT | | |
| `internal_notes` | TEXT | | Private company notes (OFX-019) |
| `is_shared_with_client` | BOOLEAN | DEFAULT FALSE | Visibility control (OFX-019) |
| `key_decisions` | JSONB | | List of decisions |
| `sentiment_score` | FLOAT | | -1.0 to 1.0 (Future usage) |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `action_items`
Tasks extracted from meetings.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `assignee_id` | UUID | FK -> users.id | |
| `content` | TEXT | NOT NULL | |
| `due_date` | DATE | | |
| `status` | VARCHAR(20) | | 'pending', 'completed' |
| `external_task_id`| VARCHAR(255)| | ID in Jira/Slack if synced |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | |
| `deleted_at` | TIMESTAMP | | Soft delete |

#### `meeting_ai_templates`
AI prompt/format definitions for summaries and emails (ADMX-030, 031).
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
Billing management.
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

#### `subscription_plans`
Master table for plan definitions (ADM-006).
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
Management of discount codes (ADM-008).
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
stored payment information.
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
Billing history.
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
Tracking pre-paid AI minutes/units (ADMX-025, 026).
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
Master list of hardware provided by TNG (ADM-009).
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
Security and activity tracking.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `admin_user_id` | UUID | FK -> users.id | |
| `action` | VARCHAR(100) | | e.g., 'create_user', 'update_company' |
| `target_resource` | VARCHAR(100) | | Table/ID affected |
| `changes` | JSONB | | Before/After values |
| `timestamp` | TIMESTAMP | DEFAULT NOW()| |

#### `access_logs`
Login and access history.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `user_id` | UUID | FK -> users.id | Nullable |
| `ip_address` | VARCHAR(45) | | |
| `user_agent` | TEXT | | Browser/Device info |
| `action` | VARCHAR(50) | | 'login', 'logout', 'failed_login' |
| `status` | VARCHAR(20) | | 'success', 'failure' |
| `timestamp` | TIMESTAMP | DEFAULT NOW()| |

### 3.6. Client Management (CRM)

#### `client_companies`
External organizations visiting the office.
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
Limits for the company's subscription plan.
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
Tracking actual consumption.
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
Rules for system alerts (e.g., suspicious activity).
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

## 4. Scalability & extensibility
- **Partial Unique Indexes**: For tables using Soft Delete, uniqueness on critical fields (e.g., `users.email`) MUST be enforced via partial indexes: `CREATE UNIQUE INDEX idx_user_email_active ON users(email) WHERE deleted_at IS NULL`.
- **JSONB Columns**: Used in `users.settings`, `companies.settings`, `meeting_summaries.key_decisions` to allow adding new fields without schema migration.
- **UUID Keys**: Used for all Primary Keys to prevent enumeration attacks and easier data distribution properties.
- **Indexes**:
  - `users(email)`: Fast login lookups.
  - `reservations(start_time, end_time)`: Efficient conflict checking.
  - `reservations(qr_code_hash)`: Fast reception scan lookups.
  - `companies(code)`: Fast tenant resolution.
