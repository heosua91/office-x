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
| `code` | VARCHAR(50) | UNIQUE, NOT NULL | Unique code for company identification/login |
| `address` | TEXT | | |
| `contact_email` | VARCHAR(255) | | |
| `billing_email` | VARCHAR(255) | | |
| `subscription_plan` | VARCHAR(50) | | e.g., 'Starter', 'Business', 'Enterprise' |
| `settings` | JSONB | | Company-specific settings (Theme, Logo URL, Rules) |
| `created_at` | TIMESTAMP | | |

#### `departments`
Hierarchy within a company.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `name` | VARCHAR(255) | NOT NULL | |
| `parent_id` | UUID | FK -> departments.id | For organizational hierarchy |

#### `company_media`
Assets for reception screens/tablets (Logos, Slides, Videos).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `type` | VARCHAR(50) | NOT NULL | 'logo', 'background', 'slide_image', 'slide_video' |
| `url` | TEXT | NOT NULL | S3/Storage URL |
| `display_order` | INT | | Sequence for slides |
| `duration_seconds` | INT | | Display duration for images |
| `is_active` | BOOLEAN | DEFAULT TRUE | |

#### `users`
System users (Employees, Admins).
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `department_id` | UUID | FK -> departments.id | |
| `email` | VARCHAR(255) | UNIQUE, NOT NULL | Login ID |
| `password` | VARCHAR(255) | NOT NULL | |
| `full_name` | VARCHAR(255) | NOT NULL | |
| `role` | VARCHAR(50) | NOT NULL | 'admin', 'user', 'reception' |
| `calendar_integration_token`| TEXT | | OAuth token for Google/Outlook |
| `avatar_url` | TEXT | | |
| `status` | VARCHAR(20) | | 'active', 'inactive', 'invited' |
| `created_at` | TIMESTAMP | | |

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
| `is_active` | BOOLEAN | DEFAULT TRUE | |

#### `reception_devices`
Tablets and screens managed by the company.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `company_id` | UUID | FK -> companies.id | |
| `device_identifier` | VARCHAR(255) | UNIQUE, NOT NULL | Device ID for login |
| `password` | VARCHAR(255) | NOT NULL | |
| `name` | VARCHAR(255) | | Friendly name (e.g., "Lobby iPad 1") |
| `location` | VARCHAR(255) | | Physical location |
| `purpose` | VARCHAR(50) | | 'reception', 'room_display' |
| `status` | VARCHAR(20) | | 'online', 'offline', 'maintenance' |
| `settings` | JSONB | | Device-specific config (notifications, linked rooms) |
| `last_active_at` | TIMESTAMP | | |

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
| `qr_code_hash` | VARCHAR(255) | UNIQUE | For reception check-in |



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

#### `reservation_participants`
Linking Users and Guests to Reservations.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `user_id` | UUID | FK -> users.id | Nullable (if external guest) |
| `guest_id` | UUID | FK -> guests.id | Nullable (if internal user) |
| `role` | VARCHAR(20) | | 'organizer', 'attendee' |
| `rsvp_status` | VARCHAR(20) | | 'accepted', 'declined', 'pending' |

#### `check_in_logs`
Logs of reception interactions.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `guest_id` | UUID | FK -> guests.id | |
| `check_in_time` | TIMESTAMP | | |
| `check_in_method` | VARCHAR(50) | | 'qr_code', 'manual_code', 'receptionist' |

### 3.4. AI & Meeting Intelligence

#### `meeting_recordings`
Storage for raw video/audio files.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `file_url` | TEXT | NOT NULL | S3/Storage URL |
| `file_type` | VARCHAR(50) | NOT NULL | 'video/mp4', 'audio/mp3' |
| `duration_seconds` | INT | | |
| `file_size_bytes` | BIGINT | | For quota calculation |
| `status` | VARCHAR(20) | | 'processing', 'available', 'failed' |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

#### `meeting_transcripts`
Raw audio/text data from meetings.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | |
| `reservation_id` | UUID | FK -> reservations.id | |
| `s3_audio_path` | TEXT | | Path to audio file |
| `transcript_text` | TEXT | | Full extracted text |
| `processed_at` | TIMESTAMP | | |

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
| `key_decisions` | JSONB | | List of decisions |
| `sentiment_score` | FLOAT | | -1.0 to 1.0 (Future usage) |

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
| `notification_email` | VARCHAR(255) | | Recipient for alerts |
| `is_active` | BOOLEAN | DEFAULT TRUE | |

## 4. Scalability & extensibility
- **JSONB Columns**: Used in `users.settings`, `companies.settings`, `meeting_summaries.key_decisions` to allow adding new fields without schema migration.
- **UUID Keys**: Used for all Primary Keys to prevent enumeration attacks and easier data distribution properties.
- **Indexes**:
  - `users(email)`: Fast login lookups.
  - `reservations(start_time, end_time)`: Efficient conflict checking.
  - `reservations(qr_code_hash)`: Fast reception scan lookups.
  - `companies(code)`: Fast tenant resolution.
