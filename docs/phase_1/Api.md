# API Documentation - Office X (Phase 1)

This document lists the required API endpoints for the Office X system, mapped from the functional requirements in `Screens_Detail.md` and supported by the schema in `Database_EN.md`.

## 1. Authentication & Registration (`/auth`)
Endpoints for user onboarding, security, and identity management.

| Method | Endpoint | Screen ID | Description | Key Tables |
| :--- | :--- | :--- | :--- | :--- |
| POST | `/auth/register/verify-email` | REG-002 | Send 6-digit verification code to email. | `verification_codes` |
| POST | `/auth/register/resend-code` | REG-004 | Resend 6-digit verification code to email. | `verification_codes` |
| POST | `/auth/register/verify-code` | REG-004 | Validate 6-digit code against DB. | `verification_codes` |
| GET | `/auth/register/terms` | REG-001 | Fetch Terms & Conditions and Privacy Policy. | N/A |
| POST | `/auth/register/company` | REG-006 | Initial company & first admin registration. | `companies`, `users` |
| GET | `/auth/register/plans` | REG-007 | Fetch available subscription plans. | `subscription_plans` |
| POST | `/auth/register/check-promo`| REG-007 | Validate promotion code during registration. | `promo_codes` |
| POST | `/auth/register/payment` | REG-008 | Register payment method via service (Paid). | `payment_methods` |
| POST | `/auth/register/finalize` | REG-009 | Finalize registration & trigger onboarding email. | `companies` |
| POST | `/auth/login` | AUTH-001/002 | User/Admin login (returns JWT). | `users` |
| PATCH | `/auth/profile` | OFX-017 | Update user profile details and password. | `users` |
| POST | `/auth/password-reset/request`| AUTH-003 | Request reset link via email. | `verification_codes` |
| POST | `/auth/password-reset/confirm`| AUTH-005 | Set new password using token. | `users` |

## 2. Office User Workspace (`/office`)
Endpoints for daily operations by company employees.

| Method | Endpoint | Screen ID | Description | Key Tables |
| :--- | :--- | :--- | :--- | :--- |
| GET | `/office/dashboard` | OFX-001 | Fetch schedule, room status, and AI usage widgets. | `reservations`, `usage_logs` |
| GET | `/office/meetings` | OFX-002 | List active and historical meetings. | `meetings` |
| POST | `/office/meetings/smart-url`| OFX-003/008 | Create guest booking link with AI templates. | `meetings`, `meeting_ai_templates` |
| PATCH | `/office/meetings/:id` | OFX-004/009 | Update meeting details, participants, or seat map. | `meetings`, `meeting_participants` |
| GET | `/office/meetings/:id/permissions` | OFX-014 | List granular sharing permissions for a meeting. | `meeting_permissions` |
| POST | `/office/meetings/:id/permissions` | OFX-014 | Grant meeting access to users/departments. | `meeting_permissions` |
| GET | `/office/schedule/gantt` | OFX-005 | Fetch timeline data for all company rooms. | `meeting_rooms`, `reservations` |
| GET | `/office/customers` | OFX-010 | Search/List client companies. | `client_companies` |
| GET | `/office/customers/:id` | OFX-011 | Detailed profile, visit timeline, and AI insights. | `client_companies`, `reservations`, `meeting_summaries` |
| PATCH | `/office/customers/:id` | OFX-012 | Update client company profile details. | `client_companies` |
| GET | `/office/meetings/:id/ai` | OFX-013 | Fetch transcript, segments, summary, and action items. | `meeting_transcripts`, `transcript_segments`, `meeting_summaries`, `action_items` |
| PATCH | `/office/meetings/:id/summary` | OFX-014 | Edit AI generated summary/notes. | `meeting_summaries` |
| PATCH | `/office/meetings/segments/:id` | OFX-013 | Correct transcript segment text/speaker. | `transcript_segments` |
| POST | `/office/meetings/:id/email` | OFX-015 | Generate AI draft for thank-you email. | `meeting_summaries`, `users` (signatures) |
| GET | `/office/google-drive/files` | OFX-022 | Proxy to fetch Google Drive files (Read-only). | `users` (tokens) |
| PATCH | `/office/settings/privacy` | OFX-019 | Set summary visibility (Internal vs Client). | `users` |
| GET | `/office/settings/integrations` | OFX-021 | Get Slack/Teams/Email integrations. | `notification_integrations` |
| POST | `/office/settings/integrations` | OFX-021 | Link/Update Slack/Teams/Email integration. | `notification_integrations` |
| GET | `/office/settings/availability` | OFX-020 | Get personal availability schedule. | `user_availability` |
| POST | `/office/settings/availability` | OFX-020 | Update personal availability schedule. | `user_availability` |

## 3. Company Administration (`/admin`)
Endpoints for company-level setup and billing management.

| Method | Endpoint | Screen ID | Description | Key Tables |
| :--- | :--- | :--- | :--- | :--- |
| GET | `/admin/dashboard` | ADMX-002 | High-level analytics for the entire organization. | `usage_logs`, `companies` |
| GET | `/admin/users` | ADMX-003/004 | List users in the company. | `users` |
| POST | `/admin/users` | ADMX-003/004 | Register new user (Manual). | `users` |
| GET | `/admin/users/:id` | ADMX-006 | View details of a specific user. | `users` |
| PATCH | `/admin/users/:id` | ADMX-006 | Update details of a specific user. | `users` |
| DELETE | `/admin/users/:id` | ADMX-006 | Deactivate or delete a specific user. | `users` |
| POST | `/admin/users/:id/password-reset`| ADMX-006 | Force reset password and send email notification. | `users` |
| POST | `/admin/users/import` | ADMX-003 | Bulk import users via CSV. | `csv_import_logs`, `users` |
| GET | `/admin/rooms` | ADMX-007 | List all meeting rooms. | `meeting_rooms` |
| POST | `/admin/rooms` | ADMX-008 | Register new room and generate device QR. | `meeting_rooms` |
| GET | `/admin/rooms/:id` | ADMX-009 | View, Update, or Delete meeting room. | `meeting_rooms` |
| PATCH | `/admin/rooms/:id` | ADMX-009 | View, Update, or Delete meeting room. | `meeting_rooms` |
| DELETE | `/admin/rooms/:id` | ADMX-009 | View, Update, or Delete meeting room. | `meeting_rooms` |
| GET | `/admin/master/:type` | ADMX-010 | Fetch or Create master data (Vendors, depts, etc). | `departments`, `floors` etc. |
| POST | `/admin/master/:type` | ADMX-010 | Fetch or Create master data (Vendors, depts, etc). | `departments`, `floors` etc. |
| PATCH | `/admin/master/:type/:id`| ADMX-010 | Update or Delete specific master data record. | `departments` etc. |
| DELETE | `/admin/master/:type/:id`| ADMX-010 | Update or Delete specific master data record. | `departments` etc. |
| PUT | `/admin/master/:type/sort` | ADMX-010 | Update display order (Drag & Drop). | `departments` etc. |
| GET | `/admin/settings/branding` | ADMX-011/012 | Manage logo, background, and signage slides. | `company_media` |
| PATCH | `/admin/settings/branding` | ADMX-011/012 | Manage logo, background, and signage slides. | `company_media` |
| GET | `/admin/reception-devices` | ADMX-013/014 | List or Register foyer tablets. | `reception_devices` |
| POST | `/admin/reception-devices` | ADMX-013/014 | List or Register foyer tablets. | `reception_devices` |
| GET | `/admin/reception-devices/:id`| ADMX-015 | View detail, Update or Delete foyer tablet. | `reception_devices` |
| PATCH | `/admin/reception-devices/:id`| ADMX-015 | View detail, Update or Delete foyer tablet. | `reception_devices` |
| DELETE | `/admin/reception-devices/:id`| ADMX-015 | View detail, Update or Delete foyer tablet. | `reception_devices` |
| GET | `/admin/billing/status` | ADMX-017 | View current plan, AI quota, and billing summary. | `companies`, `usage_quotas` |
| PATCH | `/admin/billing/status` | ADMX-018 | Update company info and AI limit/alert settings. | `companies` |
| GET | `/admin/billing/plans` | ADMX-022 | Fetch available plans for upgrade/downgrade. | `subscription_plans` |
| POST | `/admin/billing/plans/change`| ADMX-022 | Submit request to change subscription plan. | `subscription_requests` |
| POST | `/admin/billing/promo/validate`| ADMX-022 | Validate promotion code for plan change. | `promo_codes` |
| POST | `/admin/billing/user-slots`| ADMX-004-1 | Purchase additional user slots (pro-rated). | `subscription_requests` |
| GET | `/admin/settings/payment-methods`| ADMX-019 | Manage company credit cards or billing info. | `payment_methods` |
| POST | `/admin/settings/payment-methods`| ADMX-019 | Manage company credit cards or billing info. | `payment_methods` |
| GET | `/admin/billing/invoices` | ADMX-020 | List monthly invoices. | `invoices` |
| GET | `/admin/billing/invoices/:id` | ADMX-021 | Detailed breakdown of a specific invoice. | `invoices` |
| GET | `/admin/billing/ai-quota` | ADMX-024 | Detailed AI usage status (Free/Pre/Post). | `usage_logs` |
| GET | `/admin/billing/ai-quota/details`| ADMX-029 | Granular AI usage logs for auditing. | `usage_logs` |
| GET | `/admin/billing/ai-quota/details/export`| ADMX-029 | Export granular AI usage logs to CSV. | `usage_logs` |
| GET | `/admin/billing/pricing` | ADMX-025 | Fetch unit prices for AI credit purchase. | N/A |
| POST | `/admin/billing/ai-credits` | ADMX-025 | Purchase pre-paid AI minutes. | `ai_credit_purchases` |
| GET | `/admin/visit-history` | ADMX-023 | Search historical visitor logs. | `visit_logs` |
| GET | `/admin/visit-history/export` | ADMX-023 | Export filtered visit logs to CSV. | `visit_logs` |
| GET | `/admin/ai-templates` | ADMX-030/031 | List or Create AI prompt templates. | `meeting_ai_templates` |
| POST | `/admin/ai-templates` | ADMX-030/031 | List or Create AI prompt templates. | `meeting_ai_templates` |
| GET | `/admin/ai-templates/:id` | ADMX-031 | View, Update or Delete specific AI template. | `meeting_ai_templates` |
| PATCH | `/admin/ai-templates/:id` | ADMX-031 | View, Update or Delete specific AI template. | `meeting_ai_templates` |
| DELETE | `/admin/ai-templates/:id` | ADMX-031 | View, Update or Delete specific AI template. | `meeting_ai_templates` |
| GET | `/admin/users/import/history` | ADMX-003 | List CSV import history and errors. | `csv_import_logs` |
| GET | `/admin/dictionary` | ADMX-032 | CRUD organization-wide dictionary terms. | `organization_dictionary` |
| POST | `/admin/dictionary` | ADMX-032 | CRUD organization-wide dictionary terms. | `organization_dictionary` |
| PATCH | `/admin/dictionary` | ADMX-032 | CRUD organization-wide dictionary terms. | `organization_dictionary` |
| DELETE | `/admin/dictionary` | ADMX-032 | CRUD organization-wide dictionary terms. | `organization_dictionary` |
| POST | `/admin/dictionary/import` | ADMX-032 | Bulk import dictionary terms via CSV. | `organization_dictionary` |
| GET | `/admin/dictionary/recommendations` | ADMX-033 | Fetch AI-suggested dictionary terms. | `usage_logs` |
| POST | `/admin/dictionary/bulk-approve` | ADMX-033 | Approve and register suggested terms. | `organization_dictionary` |
| POST | `/admin/dictionary/recommendations/exclude` | ADMX-033 | Exclude suggested terms from future lists. | `usage_logs` |
| PATCH | `/admin/ai/rules` | ADMX-027/028 | Set AI quota thresholds and notify targets. | `monitoring_rules` |
| POST | `/admin/monitoring/rules` | LOG-003 | Create automated monitoring/alert rules. | `monitoring_rules` |

## 4. Reception & Visitor (`/guest`, `/reception`)
Endpoints used by guests and foyer tablets.

| Method | Endpoint | Screen ID | Description | Key Tables |
| :--- | :--- | :--- | :--- | :--- |
| POST | `/guest/reserve` | GRES-004 | Guest self-booking via smart link. | `meetings`, `guests` |
| POST | `/reception/auth` | UKET-001 | Device authentication for Tablet foyer. | `reception_devices` (tokens) |
| GET | `/reception/signage` | UKET-002 | Fetch media slides for digital signage. | `company_media` |
| POST | `/reception/check-in/qr` | UKET-004/005 | Validate guest QR/Code and trigger notifications. | `meetings`, `visit_logs` |
| POST | `/reception/notify-host` | UKET-008 | Send Slack/Teams/Email alert to host. | `users`, `meetings`, `notification_integrations` |
| POST | `/reception/check-in/no-appointment`| UKET-006 | Walk-in visitor registration. | `visit_logs`, `meetings` |
| POST | `/reception/check-in/vendor` | UKET-007 | Logistics/Delivery vendor registration. | `visit_logs` |
| POST | `/reception/calls/signal` | UKET-009 | WebRTC signaling for Audio/Video calls. | N/A (Redis/Socket) |
| GET | `/reception/map/:room_id` | UKET-010 | Fetch guiding map for visitor path. | `meeting_rooms` |
| GET | `/guest/availability` | GRES-001 | Check room and host availability for guests. | `meetings`, `user_availability` |

## 5. Meeting Room Device (`/room`)
Real-time endpoints for meeting room tablets.

| Method | Endpoint | Screen ID | Description | Key Tables |
| :--- | :--- | :--- | :--- | :--- |
| POST | `/room/:id/link` | ENTR-001 | Link device to a specific meeting room. | `meeting_rooms` |
| GET | `/room/:id/status` | ENTR-002 | Fetch current/next meeting status. | `meetings` |
| POST | `/room/:id/start` | ENTR-003/008 | Initialize meeting and recording handshake. | `meetings` |
| GET | `/room/:id/participants` | ENTR-004/005 | Fetch attendees for room initialization. | `meeting_participants` |
| POST | `/room/:id/seats` | ENTR-006 | Save final seat map positions. | `meeting_participants` |
| POST | `/room/:id/consent` | ENTR-008 | Capture participant consent for recording. | `meeting_participants` |
| POST | `/room/:id/stream` | ENTR-008 | Upload individual participant audio stream. | `meeting_recordings` |
| GET | `/room/:id/live` | ENTR-009 | WebSocket/SSE for real-time transcript & sync. | `meeting_events` |
| POST | `/room/:id/event` | ENTR-009 | Log reactions, comments, or markers during meeting. | `meeting_events` |
| PATCH | `/room/:id/extend` | ENTR-009 | Quick-extend meeting duration by 15 mins. | `meetings` |

## 6. Global TNG Admin (`/tng`)
Endpoints for platform owners to manage multi-tenancy.

| Method | Endpoint | Screen ID | Description | Key Tables |
| :--- | :--- | :--- | :--- | :--- |
| GET | `/tng/companies` | ADM-001 | Dashboard of all active tenants and health. | `companies` |
| PATCH | `/tng/companies/:id/quota` | ADM-002 | Override limits (users, AI minutes) per company. | `companies` |
| GET | `/tng/billing/invoices` | ADM-004/005 | List system-wide invoices for all tenants. | `invoices` |
| GET | `/tng/plans` | ADM-006 | Manage global subscription tiers and pricing. | `subscription_plans` |
| POST | `/tng/plans` | ADM-006 | Manage global subscription tiers and pricing. | `subscription_plans` |
| GET | `/tng/promo-codes` | ADM-007 | Manage system-wide discount codes. | `promo_codes` |
| POST | `/tng/promo-codes` | ADM-007 | Manage system-wide discount codes. | `promo_codes` |
| GET | `/tng/catalog/devices` | ADM-009 | Manage global equipment rental/purchase prices. | `device_catalog` |
| POST | `/tng/catalog/devices` | ADM-009 | Manage global equipment rental/purchase prices. | `device_catalog` |
| GET | `/tng/analytics/usage` | ADM-010 | Fetch multi-tenant AI usage analytics. | `usage_logs` |
| PATCH | `/tng/settings/policy` | ADM-011 | Set global AI limit and overage policies. | `companies` |
| GET | `/tng/logs/audit` | LOG-001 | Search system-wide access and audit logs. | `audit_logs`, `access_logs` |
| POST | `/tng/ai/approve-overage` | ADM-012 | Finalize and approve AI overage for billing. | `usage_logs`, `invoices` |
