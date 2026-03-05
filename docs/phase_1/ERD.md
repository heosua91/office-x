# Entity Relationship Diagram (ERD) - Office X

This document represents the database schema defined in `Database_EN.md` using Mermaid notation.

```mermaid
erDiagram
    %% Core Entities
    companies ||--o{ departments : "has"
    companies ||--o{ users : "employs"
    companies ||--o{ meeting_rooms : "owns"
    companies ||--o{ company_media : "manages assets"
    companies ||--o{ client_companies : "tracks visitor orgs"
    companies ||--o{ subscriptions : "purchases"
    companies ||--o{ payment_methods : "stores"
    companies ||--o{ invoices : "issued"
    companies ||--o{ usage_quotas : "has limits"
    companies ||--o{ usage_logs : "tracks consumption"
    companies ||--o{ monitoring_rules : "configures"
    companies ||--o{ meeting_ai_templates : "defines"
    companies ||--o{ ai_credit_purchases : "buys"
    companies ||--o{ verification_codes : "verifies emails"
    companies ||--o{ notification_integrations : "configures"
    companies ||--o{ csv_import_logs : "tracks data imports"
    companies ||--o{ subscription_requests : "requests upgrades"
    companies ||--o{ company_master_data : "defines"
    users ||--o{ csv_import_logs : "performs imports"
    
    meetings ||--o{ visit_logs : "associated with"
    guests ||--o{ visit_logs : "checks in"
    meetings ||--o{ meeting_documents : "contains"

    users ||--o{ notification_integrations : "owns personal"
    reception_devices ||--o{ notification_integrations : "triggers"

    subscription_plans ||--o{ companies : "assigned to"

    promo_codes ||--o{ subscriptions : "applied to"
    meetings ||--o{ meeting_ai_templates : "used by"

    departments ||--o{ departments : "parent of"
    departments ||--o{ users : "contains"
    
    users ||--o{ user_availability : "defines schedule"
    meetings ||--o{ meeting_permissions : "has granular permissions"
    departments ||--o{ meeting_permissions : "grants access to"
    users ||--o{ meeting_permissions : "grants access to"

    companies {
        UUID id PK
        VARCHAR name
        VARCHAR code
        TEXT address
        VARCHAR contact_email
        VARCHAR billing_email
        UUID subscription_plan_id FK
        INT user_limit_override
        INT ai_minutes_limit_override
        DECIMAL ai_overage_unit_price_override
        JSONB settings
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    subscription_plans {
        UUID id PK
        VARCHAR name
        DECIMAL price_monthly
        INT user_limit
        INT ai_minutes_limit
        JSONB features
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    promo_codes {
        UUID id PK
        VARCHAR code
        VARCHAR discount_type
        DECIMAL discount_value
        TIMESTAMP expires_at
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    meeting_ai_templates {
        UUID id PK
        UUID company_id FK
        VARCHAR name
        VARCHAR type
        TEXT prompt_text
        TEXT output_format
        BOOLEAN is_default
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    departments {
        UUID id PK
        UUID company_id FK
        VARCHAR name
        UUID parent_id FK
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    company_master_data {
        UUID id PK
        UUID company_id FK
        VARCHAR category
        VARCHAR value
        BOOLEAN is_active
        BOOLEAN is_reject
        TEXT reject_message
        INT display_order
        TIMESTAMP created_at
    }

    company_media {
        UUID id PK
        UUID company_id FK
        VARCHAR type
        TEXT url
        INT display_order
        INT play_interval_seconds
        INT duration_seconds
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    users {
        UUID id PK
        UUID company_id FK
        UUID department_id FK
        VARCHAR email
        VARCHAR password
        VARCHAR full_name
        VARCHAR role
        TEXT calendar_integration_token
        TEXT google_drive_token
        TEXT google_drive_refresh_token
        TEXT avatar_url
        VARCHAR status
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    verification_codes {
        UUID id PK
        VARCHAR email
        VARCHAR code
        VARCHAR purpose
        TIMESTAMP expires_at
        TIMESTAMP used_at
        TIMESTAMP created_at
    }

    %% Facilities & Resources
    companies ||--o{ reception_devices : "deploys"
    companies ||--o{ resource_availability : "defines rules"
    meeting_rooms ||--o{ resource_availability : "has specific rules"

    device_catalog ||--o{ reception_devices : "master model for"

    meeting_rooms {
        UUID id PK
        UUID company_id FK
        VARCHAR name
        INT capacity
        VARCHAR location
        JSONB equipment
        VARCHAR calendar_resource_id
        BOOLEAN is_multi_device
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    reception_devices {
        UUID id PK
        UUID company_id FK
        VARCHAR device_identifier
        VARCHAR password
        VARCHAR name
        VARCHAR location
        VARCHAR purpose
        VARCHAR status
        JSONB settings
        TEXT auth_token_hash
        TIMESTAMP auth_token_expires_at
        TIMESTAMP last_active_at
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    device_catalog {
        UUID id PK
        VARCHAR model_name
        VARCHAR type
        INT rental_price_jpy
        INT purchase_price_jpy
        JSONB specifications
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    resource_availability {
        UUID id PK
        UUID company_id FK
        UUID resource_id FK
        INT day_of_week
        TIME start_time
        TIME end_time
        BOOLEAN is_available
        VARCHAR reason
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    %% Reservations & Reception
    users ||--o{ meetings : "hosts"
    meeting_rooms ||--o{ meetings : "located in"

    
    meetings ||--o{ guests : "invites"
    meetings ||--o{ meeting_participants : "includes"
    users ||--o{ meeting_participants : "attends"
    guests ||--o{ meeting_participants : "attends"
    
    meetings ||--o{ visit_logs : "associated with"
    guests ||--o{ visit_logs : "checks in"
    meetings ||--o{ meeting_documents : "contains"


    
    client_companies ||--o{ guests : "employs"

    meetings {
        UUID id PK
        UUID company_id FK
        UUID host_user_id FK
        UUID meeting_room_id FK
        VARCHAR title
        TEXT description
        TIMESTAMP start_time
        TIMESTAMP end_time
        VARCHAR status
        TEXT meeting_url
        VARCHAR qr_code_hash
        VARCHAR booking_code
        VARCHAR booking_timezone
        UUID ai_template_id FK
        TIMESTAMP thank_you_email_sent_at
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }


    guests {
        UUID id PK
        UUID client_company_id FK
        VARCHAR email
        VARCHAR name
        VARCHAR company_name
        VARCHAR phone
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    meeting_participants {
        UUID id PK
        UUID meeting_id FK
        UUID user_id FK
        UUID guest_id FK
        VARCHAR role
        VARCHAR rsvp_status
        VARCHAR seat_position
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }


    visit_logs {
        UUID id PK
        UUID meeting_id FK
        UUID guest_id FK
        TIMESTAMP check_in_time
        TIMESTAMP check_out_time
        VARCHAR check_in_method
        UUID purpose_id FK
        UUID department_id FK
        UUID vendor_id FK
        UUID host_user_id FK
        TIMESTAMP created_at
    }


    meeting_documents {
        UUID id PK
        UUID meeting_id FK
        UUID uploader_user_id FK
        UUID uploader_guest_id FK
        VARCHAR file_name
        VARCHAR source
        TEXT file_url
        VARCHAR external_file_id
        VARCHAR file_type
        BIGINT file_size_bytes
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }



    client_companies {
        UUID id PK
        UUID company_id FK
        VARCHAR name
        TEXT address
        VARCHAR phone
        VARCHAR contact_person
        VARCHAR industry
        VARCHAR status
        INT visit_count
        TIMESTAMP last_visit
        TEXT notes
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    meetings ||--o{ meeting_documents : "contains"
    users ||--o{ meeting_documents : "uploads"
    guests ||--o{ meeting_documents : "uploads"
    
    %% AI & Meeting Intelligence
    meetings ||--o{ meeting_recordings : "recorded in"
    meetings ||--o{ meeting_transcripts : "has"
    meetings ||--o{ meeting_summaries : "has"
    meeting_transcripts ||--o{ transcript_segments : "has"
    meetings ||--o{ meeting_events : "has"
    meetings ||--o{ action_items : "generates"

    users ||--o{ meeting_events : "triggers"
    users ||--o{ action_items : "assigned to"

    users ||--o{ meeting_recordings : "owns individual stream"
    guests ||--o{ meeting_recordings : "owns individual stream"

    meeting_recordings {
        UUID id PK
        UUID meeting_id FK
        UUID user_id FK
        UUID guest_id FK
        TEXT file_url
        VARCHAR file_type
        INT duration_seconds
        BIGINT file_size_bytes
        VARCHAR status
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    meeting_transcripts {
        UUID id PK
        UUID meeting_id FK
        TEXT s3_audio_path
        TEXT transcript_text
        TIMESTAMP processed_at
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    transcript_segments {
        UUID id PK
        UUID transcript_id FK
        UUID speaker_user_id FK
        UUID speaker_guest_id FK
        VARCHAR speaker_name
        INT start_time_ms
        INT end_time_ms
        TEXT text_content
        FLOAT confidence_score
        BOOLEAN is_edited
        INT display_order
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }


    meeting_events {
        UUID id PK
        UUID meeting_id FK
        UUID user_id FK
        VARCHAR event_type
        TEXT content
        INT timestamp_in_meeting
        TIMESTAMP created_at
    }

    meeting_summaries {
        UUID id PK
        UUID meeting_id FK
        TEXT summary_text
        TEXT internal_notes
        BOOLEAN is_shared_with_client
        JSONB key_decisions
        FLOAT sentiment_score
        JSONB analysis_data
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }


    action_items {
        UUID id PK
        UUID meeting_id FK
        UUID assignee_id FK
        TEXT content
        DATE due_date
        VARCHAR status
        VARCHAR external_task_id
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    %% System & Billing
    ai_credit_purchases {
        UUID id PK
        UUID company_id FK
        INT amount_minutes
        DECIMAL amount_paid
        TIMESTAMP purchase_date
        VARCHAR payment_token
        VARCHAR status
        TIMESTAMP created_at
    }

    subscriptions {
        UUID id PK
        UUID company_id FK
        VARCHAR plan_type
        DATE start_date
        DATE end_date
        VARCHAR status
        UUID promo_code_id FK
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    payment_methods {
        UUID id PK
        UUID company_id FK
        VARCHAR type
        VARCHAR provider_token
        VARCHAR last4
        VARCHAR expiry
        BOOLEAN is_default
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    invoices {
        UUID id PK
        UUID company_id FK
        DECIMAL amount
        VARCHAR currency
        VARCHAR status
        DATE billing_period_start
        DATE billing_period_end
        DATE issued_date
        DATE due_date
        TEXT pdf_url
        TIMESTAMP created_at
        TIMESTAMP updated_at
        TIMESTAMP deleted_at
    }

    audit_logs {
        UUID id PK
        UUID admin_user_id FK
        VARCHAR action
        VARCHAR target_resource
        JSONB changes
        TIMESTAMP timestamp
    }

    access_logs {
        UUID id PK
        UUID user_id FK
        VARCHAR ip_address
        TEXT user_agent
        VARCHAR action
        VARCHAR status
        TIMESTAMP timestamp
    }

    usage_quotas {
        UUID id PK
        UUID company_id FK
        VARCHAR feature_name
        INT limit_amount
        VARCHAR period
        DATE reset_date
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    usage_logs {
        UUID id PK
        UUID company_id FK
        UUID user_id FK
        VARCHAR feature_name
        DECIMAL amount_used
        VARCHAR context
        TIMESTAMP timestamp
    }

    monitoring_rules {
        UUID id PK
        UUID company_id FK
        VARCHAR rule_type
        INT threshold
        INT time_window_seconds
        VARCHAR notification_target
        VARCHAR notification_frequency
        VARCHAR integration_type
        VARCHAR notification_email
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    subscription_requests {
        UUID id PK
        UUID company_id FK
        VARCHAR request_type
        INT requested_quantity
        DECIMAL prorated_amount
        VARCHAR status
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }


    notification_integrations {
        UUID id PK
        UUID user_id FK
        UUID company_id FK
        UUID device_id FK
        VARCHAR integration_type
        TEXT webhook_url
        TEXT api_key
        BOOLEAN is_active
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    user_availability {
        UUID id PK
        UUID user_id FK
        INT day_of_week
        TIME start_time
        TIME end_time
        BOOLEAN is_available
        VARCHAR reason
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    meeting_permissions {
        UUID id PK
        UUID meeting_id FK
        VARCHAR grantee_type
        UUID grantee_id
        VARCHAR permission_level
        TIMESTAMP created_at
        TIMESTAMP updated_at
    }

    csv_import_logs {
        UUID id PK
        UUID company_id FK
        UUID admin_user_id FK
        VARCHAR import_type
        VARCHAR file_name
        TEXT file_url
        INT total_rows
        INT success_count
        INT failure_count
        JSONB error_details
        VARCHAR status
        TIMESTAMP created_at
    }
```

