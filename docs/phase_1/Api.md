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
| GET/POST | `/office/settings/integrations` | OFX-021 | Management of Slack/Teams/Email integrations. | `notification_integrations` |
| GET/POST | `/office/settings/availability` | OFX-020 | Personal availability schedule & blackout dates. | `user_availability` |

## 3. Company Administration (`/admin`)
Endpoints for company-level setup and billing management.

| Method | Endpoint | Screen ID | Description | Key Tables |
| :--- | :--- | :--- | :--- | :--- |
| GET | `/admin/dashboard` | ADMX-002 | High-level analytics for the entire organization. | `usage_logs`, `companies` |
| GET/POST | `/admin/users` | ADMX-003/004 | CRUD for company employees. | `users` |
| POST | `/admin/users/import` | ADMX-003 | Bulk import users via CSV. | `csv_import_logs`, `users` |
| GET | `/admin/users/import/history` | ADMX-003 | List CSV import history and errors. | `csv_import_logs` |
| GET/POST | `/admin/rooms` | ADMX-007/008 | Manage meeting rooms and generate device QRs. | `meeting_rooms` |
| GET/POST | `/admin/master/:type` | ADMX-010 | CRUD for Departments, Tools, Floors, Contractors. | `departments`, `floors` etc. |
| GET/PATCH | `/admin/settings/branding` | ADMX-011/012 | Update logos, backgrounds, and signage slides. | `company_media` |
| GET/POST | `/admin/reception-devices` | ADMX-013/014 | Manage and secure foyer tablets. | `reception_devices` |
| GET | `/admin/billing/status` | ADMX-017 | View current plan, AI quota, and overage fees. | `companies`, `usage_quotas` |
| PATCH | `/admin/billing/status` | ADMX-018 | Update AI usage limits and alert thresholds. | `companies` |
| POST | `/admin/billing/user-slots`| ADMX-004-1 | Purchase additional user slots (pro-rated). | `subscription_requests` |
| GET/POST| `/admin/settings/payment-methods`| ADMX-019 | Manage company credit cards or billing methods. | `payment_methods` |
| GET | `/admin/billing/invoices` | ADMX-020 | List monthly PDF invoices. | `invoices` |
| POST | `/admin/billing/ai-credits` | ADMX-025 | Purchase pre-paid AI minutes. | `ai_credit_purchases`, `companies` |
| GET | `/admin/visit-logs` | ADMX-023 | Search and export historical visitor logs. | `visit_logs` |
| PATCH | `/admin/ai/rules` | ADMX-027/028 | Set AI quota thresholds and notify targets. | `monitoring_rules` |
| POST | `/admin/monitoring/rules` | LOG-003 | Create automated monitoring/alert rules. | `monitoring_rules` |
| GET/POST | `/admin/ai-templates` | ADMX-030/031 | Manage custom prompts for meeting summaries. | `meeting_ai_templates` |

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
| GET/POST | `/tng/plans` | ADM-006 | Manage global subscription tiers and pricing. | `subscription_plans` |
| GET/POST | `/tng/promo-codes` | ADM-007 | Manage system-wide discount codes. | `promo_codes` |
| GET/POST | `/tng/catalog/devices` | ADM-009 | Manage global equipment rental/purchase prices. | `device_catalog` |
| GET | `/tng/analytics/usage` | ADM-010 | Fetch multi-tenant AI usage analytics. | `usage_logs` |
| PATCH | `/tng/settings/policy` | ADM-011 | Set global AI limit and overage policies. | `companies` |
| GET | `/tng/logs/audit` | LOG-001 | Search system-wide access and audit logs. | `audit_logs`, `access_logs` |
| POST | `/tng/ai/approve-overage` | ADM-012 | Finalize and approve AI overage for billing. | `usage_logs`, `invoices` |
