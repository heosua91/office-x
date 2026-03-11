# List tables

| # | Tên bảng |
| :--- | :--- |
| 1 | companies |
| 2 | departments |
| 3 | company_master_data |
| 4 | company_media |
| 5 | users |
| 6 | verification_codes |
| 7 | meeting_rooms |
| 8 | reception_devices |
| 9 | resource_availability |
| 10 | user_availability |
| 11 | meetings |
| 12 | guests |
| 13 | meeting_participants |
| 14 | visit_logs |
| 15 | meeting_documents |
| 16 | meeting_permissions |
| 17 | meeting_recordings |
| 18 | meeting_transcripts |
| 19 | transcript_segments |
| 20 | meeting_events |
| 21 | meeting_summaries |
| 22 | action_items |
| 23 | meeting_ai_templates |
| 24 | subscriptions |
| 25 | subscription_requests |
| 26 | subscription_plans |
| 27 | promo_codes |
| 28 | payment_methods |
| 29 | invoices |
| 30 | ai_credit_purchases |
| 31 | device_catalog |
| 32 | audit_logs |
| 33 | access_logs |
| 34 | csv_import_logs |
| 35 | client_companies |
| 36 | usage_quotas |
| 37 | usage_logs |
| 38 | monitoring_rules |
| 39 | notification_integrations |

# Table Details

## companies

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | name | VARCHAR(255) | NOT NULL |  |
| 3 | code | VARCHAR(50) | NOT NULL |  |
| 4 | address | TEXT |  |  |
| 5 | contact_person | VARCHAR(255) |  |  |
| 6 | contact_phone | VARCHAR(50) |  |  |
| 7 | contact_email | VARCHAR(255) |  |  |
| 8 | billing_email | VARCHAR(255) |  |  |
| 9 | expected_users | INT |  |  |
| 10 | subscription_plan_id | UUID | FK -> subscription_plans.id |  |
| 11 | user_limit_override | INT |  |  |
| 12 | ai_minutes_limit_override | INT |  |  |
| 13 | ai_overage_unit_price_override | DECIMAL(10, 2) |  |  |
| 14 | ai_limit_policy | VARCHAR(50) |  | 'auto_postpaid' |
| 15 | settings | JSONB |  |  |
| 16 | created_at | TIMESTAMP |  |  |
| 17 | updated_at | TIMESTAMP |  | NOW() |
| 18 | deleted_at | TIMESTAMP |  |  |

## departments

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | name | VARCHAR(255) | NOT NULL |  |
| 4 | parent_id | UUID | FK -> departments.id |  |
| 5 | created_at | TIMESTAMP |  | NOW() |
| 6 | updated_at | TIMESTAMP |  | NOW() |
| 7 | deleted_at | TIMESTAMP |  |  |

## company_master_data

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | category | VARCHAR(50) | NOT NULL |  |
| 4 | value | VARCHAR(255) | NOT NULL |  |
| 5 | is_active | BOOLEAN |  | TRUE |
| 6 | is_reject | BOOLEAN |  | FALSE |
| 7 | reject_message | TEXT |  |  |
| 8 | display_order | INT |  | 0 |
| 9 | created_at | TIMESTAMP |  | NOW() |

## company_media

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | type | VARCHAR(50) | NOT NULL |  |
| 4 | url | TEXT | NOT NULL |  |
| 5 | display_order | INT |  |  |
| 6 | play_interval_seconds | INT |  |  |
| 7 | duration_seconds | INT |  |  |
| 8 | is_active | BOOLEAN |  | TRUE |
| 9 | created_at | TIMESTAMP |  | NOW() |
| 10 | updated_at | TIMESTAMP |  | NOW() |

## users

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | department_id | UUID | FK -> departments.id |  |
| 4 | email | VARCHAR(255) | NOT NULL |  |
| 5 | password | VARCHAR(255) | NOT NULL |  |
| 6 | full_name | VARCHAR(255) | NOT NULL |  |
| 7 | role | VARCHAR(50) | NOT NULL |  |
| 8 | calendar_integration_token | TEXT |  |  |
| 9 | google_drive_token | TEXT |  |  |
| 10 | google_drive_refresh_token | TEXT |  |  |
| 11 | avatar_url | TEXT |  |  |
| 12 | signature_text | TEXT |  |  |
| 13 | status | VARCHAR(20) |  |  |
| 14 | created_at | TIMESTAMP |  |  |
| 15 | updated_at | TIMESTAMP |  | NOW() |
| 16 | deleted_at | TIMESTAMP |  |  |

## verification_codes

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | email | VARCHAR(255) | NOT NULL |  |
| 3 | code | VARCHAR(6) | NOT NULL |  |
| 4 | purpose | VARCHAR(20) |  |  |
| 5 | expires_at | TIMESTAMP | NOT NULL |  |
| 6 | used_at | TIMESTAMP |  |  |
| 7 | created_at | TIMESTAMP |  | NOW() |

## meeting_rooms

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | name | VARCHAR(255) | NOT NULL |  |
| 4 | capacity | INT |  |  |
| 5 | location | VARCHAR(255) |  |  |
| 6 | equipment | JSONB |  |  |
| 7 | calendar_resource_id | VARCHAR(255) |  |  |
| 8 | is_multi_device | BOOLEAN |  | FALSE |
| 9 | is_active | BOOLEAN |  | TRUE |
| 10 | created_at | TIMESTAMP |  | NOW() |
| 11 | updated_at | TIMESTAMP |  | NOW() |
| 12 | deleted_at | TIMESTAMP |  |  |

## reception_devices

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | meeting_room_id | UUID | FK -> meeting_rooms.id |  |
| 4 | device_identifier | VARCHAR(255) | NOT NULL |  |
| 5 | password | VARCHAR(255) | NOT NULL |  |
| 6 | name | VARCHAR(255) |  |  |
| 7 | location | VARCHAR(255) |  |  |
| 8 | purpose | VARCHAR(50) |  |  |
| 9 | status | VARCHAR(20) |  |  |
| 10 | settings | JSONB |  |  |
| 11 | auth_token_hash | TEXT |  |  |
| 12 | auth_token_expires_at | TIMESTAMP |  |  |
| 13 | last_active_at | TIMESTAMP |  |  |
| 14 | created_at | TIMESTAMP |  | NOW() |
| 15 | updated_at | TIMESTAMP |  | NOW() |
| 16 | deleted_at | TIMESTAMP |  |  |

## resource_availability

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | resource_id | UUID | FK -> meeting_rooms.id |  |
| 4 | day_of_week | INT | NOT NULL |  |
| 5 | start_time | TIME | NOT NULL |  |
| 6 | end_time | TIME | NOT NULL |  |
| 7 | is_available | BOOLEAN |  | TRUE |
| 8 | reason | VARCHAR(255) |  |  |
| 9 | created_at | TIMESTAMP |  | NOW() |
| 10 | updated_at | TIMESTAMP |  | NOW() |

## user_availability

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | user_id | UUID | FK -> users.id |  |
| 3 | day_of_week | INT | NOT NULL |  |
| 4 | start_time | TIME | NOT NULL |  |
| 5 | end_time | TIME | NOT NULL |  |
| 6 | is_available | BOOLEAN |  | TRUE |
| 7 | reason | VARCHAR(255) |  |  |
| 8 | created_at | TIMESTAMP |  | NOW() |
| 9 | updated_at | TIMESTAMP |  | NOW() |

## meetings

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | host_user_id | UUID | FK -> users.id |  |
| 4 | meeting_room_id | UUID | FK -> meeting_rooms.id |  |
| 5 | invite_token | VARCHAR(255) | UNIQUE |  |
| 6 | title | VARCHAR(255) | NOT NULL |  |
| 7 | description | TEXT |  |  |
| 8 | start_time | TIMESTAMP | NOT NULL |  |
| 9 | end_time | TIMESTAMP | NOT NULL |  |
| 10 | status | VARCHAR(50) |  |  |
| 11 | meeting_url | TEXT |  |  |
| 12 | qr_code_hash | VARCHAR(255) |  |  |
| 13 | booking_code | VARCHAR(20) |  |  |
| 14 | booking_timezone | VARCHAR(50) |  |  |
| 15 | ai_template_id | UUID | FK -> meeting_ai_templates.id |  |
| 16 | thank_you_email_sent_at | TIMESTAMP |  |  |
| 17 | created_at | TIMESTAMP |  | NOW() |
| 18 | updated_at | TIMESTAMP |  | NOW() |
| 19 | deleted_at | TIMESTAMP |  |  |

## guests

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | client_company_id | UUID | FK -> client_companies.id |  |
| 3 | email | VARCHAR(255) |  |  |
| 4 | name | VARCHAR(255) | NOT NULL |  |
| 5 | company_name | VARCHAR(255) |  |  |
| 6 | phone | VARCHAR(50) |  |  |
| 7 | created_at | TIMESTAMP |  | NOW() |
| 8 | updated_at | TIMESTAMP |  | NOW() |
| 9 | deleted_at | TIMESTAMP |  |  |

## meeting_participants

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | user_id | UUID | FK -> users.id |  |
| 4 | guest_id | UUID | FK -> guests.id |  |
| 5 | role | VARCHAR(20) |  |  |
| 6 | rsvp_status | VARCHAR(20) |  |  |
| 7 | seat_position | VARCHAR(50) |  |  |
| 8 | created_at | TIMESTAMP |  | NOW() |
| 9 | updated_at | TIMESTAMP |  | NOW() |

## visit_logs

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | guest_id | UUID | FK -> guests.id |  |
| 4 | check_in_time | TIMESTAMP |  |  |
| 5 | check_out_time | TIMESTAMP |  |  |
| 6 | check_in_method | VARCHAR(50) |  |  |
| 7 | purpose_id | UUID | FK -> company_master_data.id |  |
| 8 | department_id | UUID | FK -> departments.id |  |
| 9 | vendor_id | UUID | FK -> company_master_data.id |  |
| 10 | host_user_id | UUID | FK -> users.id |  |
| 11 | created_at | TIMESTAMP |  | NOW() |

## meeting_documents

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | uploader_user_id | UUID | FK -> users.id |  |
| 4 | uploader_guest_id | UUID | FK -> guests.id |  |
| 5 | file_name | VARCHAR(255) | NOT NULL |  |
| 6 | source | VARCHAR(50) | NOT NULL |  |
| 7 | file_url | TEXT |  |  |
| 8 | external_file_id | VARCHAR(255) |  |  |
| 9 | file_type | VARCHAR(100) |  |  |
| 10 | file_size_bytes | BIGINT |  |  |
| 11 | created_at | TIMESTAMP |  | NOW() |
| 12 | updated_at | TIMESTAMP |  | NOW() |
| 13 | deleted_at | TIMESTAMP |  |  |

## meeting_permissions

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | grantee_type | VARCHAR(50) | NOT NULL |  |
| 4 | grantee_id | UUID |  |  |
| 5 | permission_level | VARCHAR(20) | NOT NULL |  |
| 6 | created_at | TIMESTAMP |  | NOW() |
| 7 | updated_at | TIMESTAMP |  | NOW() |

## meeting_recordings

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | user_id | UUID | FK -> users.id |  |
| 4 | guest_id | UUID | FK -> guests.id |  |
| 5 | file_url | TEXT | NOT NULL |  |
| 6 | file_type | VARCHAR(50) | NOT NULL |  |
| 7 | duration_seconds | INT |  |  |
| 8 | file_size_bytes | BIGINT |  |  |
| 9 | status | VARCHAR(20) |  |  |
| 10 | created_at | TIMESTAMP |  | NOW() |
| 11 | updated_at | TIMESTAMP |  | NOW() |
| 12 | deleted_at | TIMESTAMP |  |  |

## meeting_transcripts

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | s3_audio_path | TEXT |  |  |
| 4 | transcript_text | TEXT |  |  |
| 5 | processed_at | TIMESTAMP |  |  |
| 6 | created_at | TIMESTAMP |  | NOW() |
| 7 | updated_at | TIMESTAMP |  | NOW() |
| 8 | deleted_at | TIMESTAMP |  |  |

## transcript_segments

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | transcript_id | UUID | FK -> meeting_transcripts.id |  |
| 3 | speaker_user_id | UUID | FK -> users.id |  |
| 4 | speaker_guest_id | UUID | FK -> guests.id |  |
| 5 | speaker_name | VARCHAR(255) |  |  |
| 6 | start_time_ms | INT | NOT NULL |  |
| 7 | end_time_ms | INT | NOT NULL |  |
| 8 | text_content | TEXT | NOT NULL |  |
| 9 | confidence_score | FLOAT |  |  |
| 10 | is_edited | BOOLEAN |  | FALSE |
| 11 | display_order | INT |  |  |
| 12 | created_at | TIMESTAMP |  | NOW() |
| 13 | updated_at | TIMESTAMP |  | NOW() |

## meeting_events

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | user_id | UUID | FK -> users.id |  |
| 4 | event_type | VARCHAR(50) | NOT NULL |  |
| 5 | content | TEXT |  |  |
| 6 | timestamp_in_meeting | INT |  |  |
| 7 | created_at | TIMESTAMP |  |  |

## meeting_summaries

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | summary_text | TEXT |  |  |
| 4 | internal_notes | TEXT |  |  |
| 5 | is_shared_with_client | BOOLEAN |  | FALSE |
| 6 | shared_with_departments | JSONB |  |  |
| 7 | shared_with_users | JSONB |  |  |
| 8 | key_decisions | JSONB |  |  |
| 9 | sentiment_score | FLOAT |  |  |
| 10 | analysis_data | JSONB |  |  |
| 11 | created_at | TIMESTAMP |  | NOW() |
| 12 | updated_at | TIMESTAMP |  | NOW() |
| 13 | deleted_at | TIMESTAMP |  |  |

## action_items

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | meeting_id | UUID | FK -> meetings.id |  |
| 3 | assignee_id | UUID | FK -> users.id |  |
| 4 | content | TEXT | NOT NULL |  |
| 5 | due_date | DATE |  |  |
| 6 | status | VARCHAR(20) |  |  |
| 7 | external_task_id | VARCHAR(255) |  |  |
| 8 | created_at | TIMESTAMP |  | NOW() |
| 9 | updated_at | TIMESTAMP |  | NOW() |
| 10 | deleted_at | TIMESTAMP |  |  |

## meeting_ai_templates

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | name | VARCHAR(100) | NOT NULL |  |
| 4 | type | VARCHAR(50) | NOT NULL |  |
| 5 | prompt_text | TEXT | NOT NULL |  |
| 6 | output_format | TEXT |  |  |
| 7 | is_default | BOOLEAN |  | FALSE |
| 8 | is_active | BOOLEAN |  | TRUE |
| 9 | created_at | TIMESTAMP |  | NOW() |
| 10 | updated_at | TIMESTAMP |  | NOW() |
| 11 | deleted_at | TIMESTAMP |  |  |

## subscriptions

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | plan_type | VARCHAR(50) |  |  |
| 4 | start_date | DATE |  |  |
| 5 | end_date | DATE |  |  |
| 6 | status | VARCHAR(20) |  |  |
| 7 | promo_code_id | UUID | FK -> promo_codes.id |  |
| 8 | created_at | TIMESTAMP |  | NOW() |
| 9 | updated_at | TIMESTAMP |  | NOW() |
| 10 | deleted_at | TIMESTAMP |  |  |

## subscription_requests

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | request_type | VARCHAR(50) | NOT NULL |  |
| 4 | requested_quantity | INT |  |  |
| 5 | prorated_amount | DECIMAL(10, 2) |  |  |
| 6 | status | VARCHAR(20) |  | 'pending' |
| 7 | created_at | TIMESTAMP |  | NOW() |
| 8 | updated_at | TIMESTAMP |  | NOW() |

## subscription_plans

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | name | VARCHAR(50) | NOT NULL |  |
| 3 | price_monthly | DECIMAL(10, 2) |  |  |
| 4 | user_limit | INT |  |  |
| 5 | ai_minutes_limit | INT |  |  |
| 6 | features | JSONB |  |  |
| 7 | created_at | TIMESTAMP |  | NOW() |
| 8 | updated_at | TIMESTAMP |  | NOW() |
| 9 | deleted_at | TIMESTAMP |  |  |

## promo_codes

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | code | VARCHAR(50) | NOT NULL |  |
| 3 | discount_type | VARCHAR(20) |  |  |
| 4 | discount_value | DECIMAL(10, 2) |  |  |
| 5 | expires_at | TIMESTAMP |  |  |
| 6 | is_active | BOOLEAN |  | TRUE |
| 7 | created_at | TIMESTAMP |  | NOW() |
| 8 | updated_at | TIMESTAMP |  | NOW() |
| 9 | deleted_at | TIMESTAMP |  |  |

## payment_methods

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | type | VARCHAR(50) | NOT NULL |  |
| 4 | provider_token | VARCHAR(255) |  |  |
| 5 | last4 | VARCHAR(4) |  |  |
| 6 | expiry | VARCHAR(7) |  |  |
| 7 | is_default | BOOLEAN |  | FALSE |
| 8 | created_at | TIMESTAMP |  | NOW() |
| 9 | updated_at | TIMESTAMP |  | NOW() |
| 10 | deleted_at | TIMESTAMP |  |  |

## invoices

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | amount | DECIMAL(10, 2) | NOT NULL |  |
| 4 | currency | VARCHAR(3) |  | 'JPY' |
| 5 | status | VARCHAR(20) |  |  |
| 6 | billing_period_start | DATE |  |  |
| 7 | billing_period_end | DATE |  |  |
| 8 | issued_date | DATE |  |  |
| 9 | due_date | DATE |  |  |
| 10 | pdf_url | TEXT |  |  |
| 11 | created_at | TIMESTAMP |  | NOW() |
| 12 | updated_at | TIMESTAMP |  | NOW() |
| 13 | deleted_at | TIMESTAMP |  |  |

## ai_credit_purchases

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | amount_minutes | INT | NOT NULL |  |
| 4 | amount_paid | DECIMAL(10, 2) | NOT NULL |  |
| 5 | purchase_date | TIMESTAMP |  | NOW() |
| 6 | payment_token | VARCHAR(255) |  |  |
| 7 | status | VARCHAR(20) |  |  |
| 8 | created_at | TIMESTAMP |  | NOW() |

## device_catalog

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | model_name | VARCHAR(100) | NOT NULL |  |
| 3 | type | VARCHAR(50) |  |  |
| 4 | rental_price_jpy | INT |  |  |
| 5 | purchase_price_jpy | INT |  |  |
| 6 | specifications | JSONB |  |  |
| 7 | is_active | BOOLEAN |  | TRUE |
| 8 | created_at | TIMESTAMP |  | NOW() |
| 9 | updated_at | TIMESTAMP |  | NOW() |

## audit_logs

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | admin_user_id | UUID | FK -> users.id |  |
| 3 | action | VARCHAR(100) |  |  |
| 4 | target_resource | VARCHAR(100) |  |  |
| 5 | changes | JSONB |  |  |
| 6 | timestamp | TIMESTAMP |  | NOW() |

## access_logs

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | user_id | UUID | FK -> users.id |  |
| 3 | ip_address | VARCHAR(45) |  |  |
| 4 | user_agent | TEXT |  |  |
| 5 | action | VARCHAR(50) |  |  |
| 6 | status | VARCHAR(20) |  |  |
| 7 | timestamp | TIMESTAMP |  | NOW() |

## csv_import_logs

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | admin_user_id | UUID | FK -> users.id |  |
| 4 | import_type | VARCHAR(50) | NOT NULL |  |
| 5 | file_name | VARCHAR(255) |  |  |
| 6 | file_url | TEXT |  |  |
| 7 | total_rows | INT |  |  |
| 8 | success_count | INT |  |  |
| 9 | failure_count | INT |  |  |
| 10 | error_details | JSONB |  |  |
| 11 | status | VARCHAR(20) |  |  |
| 12 | created_at | TIMESTAMP |  | NOW() |

## client_companies

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | name | VARCHAR(255) | NOT NULL |  |
| 4 | address | TEXT |  |  |
| 5 | phone | VARCHAR(50) |  |  |
| 6 | contact_person | VARCHAR(255) |  |  |
| 7 | industry | VARCHAR(100) |  |  |
| 8 | status | VARCHAR(20) |  |  |
| 9 | visit_count | INT |  | 0 |
| 10 | last_visit | TIMESTAMP |  |  |
| 11 | notes | TEXT |  |  |
| 12 | created_at | TIMESTAMP |  | NOW() |
| 13 | updated_at | TIMESTAMP |  | NOW() |
| 14 | deleted_at | TIMESTAMP |  |  |

## usage_quotas

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | feature_name | VARCHAR(50) | NOT NULL |  |
| 4 | limit_amount | INT | NOT NULL |  |
| 5 | period | VARCHAR(20) |  |  |
| 6 | reset_date | DATE |  |  |
| 7 | created_at | TIMESTAMP |  | NOW() |
| 8 | updated_at | TIMESTAMP |  | NOW() |

## usage_logs

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | user_id | UUID | FK -> users.id |  |
| 4 | feature_name | VARCHAR(50) | NOT NULL |  |
| 5 | amount_used | DECIMAL(10, 2) | NOT NULL |  |
| 6 | context | VARCHAR(255) |  |  |
| 7 | timestamp | TIMESTAMP |  | NOW() |

## monitoring_rules

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | company_id | UUID | FK -> companies.id |  |
| 3 | rule_type | VARCHAR(100) | NOT NULL |  |
| 4 | threshold | INT |  |  |
| 5 | time_window_seconds | INT |  |  |
| 6 | notification_target | VARCHAR(50) |  |  |
| 7 | notification_frequency | VARCHAR(50) |  |  |
| 8 | integration_type | VARCHAR(50) |  |  |
| 9 | notification_email | VARCHAR(255) |  |  |
| 10 | is_active | BOOLEAN |  | TRUE |
| 11 | created_at | TIMESTAMP |  | NOW() |
| 12 | updated_at | TIMESTAMP |  | NOW() |

## notification_integrations

| # | Column | Type | Constraints | Default Value |
| :--- | :--- | :--- | :--- | :--- |
| 1 | id | UUID | PK |  |
| 2 | user_id | UUID | FK -> users.id |  |
| 3 | company_id | UUID | FK -> companies.id |  |
| 4 | device_id | UUID | FK -> reception_devices.id |  |
| 5 | integration_type | VARCHAR(50) | NOT NULL |  |
| 6 | webhook_url | TEXT |  |  |
| 7 | api_key | TEXT |  |  |
| 8 | is_active | BOOLEAN |  | TRUE |
| 9 | created_at | TIMESTAMP |  | NOW() |
| 10 | updated_at | TIMESTAMP |  | NOW() |

