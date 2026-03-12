# Office X - API List

| # | Api Name | Endpoint | Method | Screen ID |
| :--- | :--- | :--- | :--- | :--- |
| 1 | Send 6-digit verification code to email | `/auth/register/verify-email` | POST | REG-002 |
| 2 | Resend 6-digit verification code to email | `/auth/register/resend-code` | POST | REG-004 |
| 3 | Validate 6-digit code against DB | `/auth/register/verify-code` | POST | REG-004 |
| 4 | Fetch Terms & Conditions and Privacy Policy | `/auth/register/terms` | GET | REG-001 |
| 5 | Initial company & first admin registration | `/auth/register/company` | POST | REG-006 |
| 6 | Fetch available subscription plans | `/auth/register/plans` | GET | REG-007 |
| 7 | Validate promotion code during registration | `/auth/register/check-promo` | POST | REG-007 |
| 8 | Register payment method via service (Paid) | `/auth/register/payment` | POST | REG-008 |
| 9 | Finalize registration & trigger onboarding email | `/auth/register/finalize` | POST | REG-009 |
| 10 | User/Admin login (returns JWT) | `/auth/login` | POST | AUTH-001/002 |
| 11 | Update user profile details and password | `/auth/profile` | PATCH | OFX-017 |
| 12 | Request reset link via email | `/auth/password-reset/request` | POST | AUTH-003 |
| 13 | Set new password using token | `/auth/password-reset/confirm` | POST | AUTH-005 |
| 14 | Fetch schedule, room status, and AI usage widgets | `/office/dashboard` | GET | OFX-001 |
| 15 | List active and historical meetings | `/office/meetings` | GET | OFX-002 |
| 16 | Create guest booking link with AI templates | `/office/meetings/smart-url` | POST | OFX-003/008 |
| 17 | Update meeting details, participants, or seat map | `/office/meetings/:id` | PATCH | OFX-004/009 |
| 18 | List granular sharing permissions for a meeting | `/office/meetings/:id/permissions` | GET | OFX-014 |
| 19 | Grant meeting access to users/departments | `/office/meetings/:id/permissions` | POST | OFX-014 |
| 20 | Fetch timeline data for all company rooms | `/office/schedule/gantt` | GET | OFX-005 |
| 21 | Search/List client companies | `/office/customers` | GET | OFX-010 |
| 22 | Detailed profile, visit timeline, and AI insights | `/office/customers/:id` | GET | OFX-011 |
| 23 | Update client company profile details | `/office/customers/:id` | PATCH | OFX-012 |
| 24 | Fetch transcript, segments, summary, and action items | `/office/meetings/:id/ai` | GET | OFX-013 |
| 25 | Edit AI generated summary/notes | `/office/meetings/:id/summary` | PATCH | OFX-014 |
| 26 | Correct transcript segment text/speaker | `/office/meetings/segments/:id` | PATCH | OFX-013 |
| 27 | Generate AI draft for thank-you email | `/office/meetings/:id/email` | POST | OFX-015 |
| 28 | Proxy to fetch Google Drive files (Read-only) | `/office/google-drive/files` | GET | OFX-022 |
| 29 | Set summary visibility (Internal vs Client) | `/office/settings/privacy` | PATCH | OFX-019 |
| 30 | Management of Slack/Teams/Email integrations | `/office/settings/integrations` | GET/POST | OFX-021 |
| 31 | Personal availability schedule & blackout dates | `/office/settings/availability` | GET/POST | OFX-020 |
| 32 | High-level analytics for the entire organization | `/admin/dashboard` | GET | ADMX-002 |
| 33 | CRUD for company employees | `/admin/users` | GET/POST | ADMX-003/004 |
| 34 | Bulk import users via CSV | `/admin/users/import` | POST | ADMX-003 |
| 35 | List CSV import history and errors | `/admin/users/import/history` | GET | ADMX-003 |
| 36 | Manage meeting rooms and generate device QRs | `/admin/rooms` | GET/POST | ADMX-007/008 |
| 37 | CRUD for Departments, Tools, Floors, Contractors | `/admin/master/:type` | GET/POST | ADMX-010 |
| 38 | Update logos, backgrounds, and signage slides | `/admin/settings/branding` | GET/PATCH | ADMX-011/012 |
| 39 | Manage and secure foyer tablets | `/admin/reception-devices` | GET/POST | ADMX-013/014 |
| 40 | View current plan, AI quota, and overage fees | `/admin/billing/status` | GET | ADMX-017 |
| 41 | Update AI usage limits and alert thresholds | `/admin/billing/status` | PATCH | ADMX-018 |
| 42 | Purchase additional user slots (pro-rated) | `/admin/billing/user-slots` | POST | ADMX-004-1 |
| 43 | Manage company credit cards or billing methods | `/admin/settings/payment-methods` | GET/POST | ADMX-019 |
| 44 | List monthly PDF invoices | `/admin/billing/invoices` | GET | ADMX-020 |
| 45 | Purchase pre-paid AI minutes | `/admin/billing/ai-credits` | POST | ADMX-025 |
| 46 | Search and export historical visitor logs | `/admin/visit-logs` | GET | ADMX-023 |
| 47 | Set AI quota thresholds and notify targets | `/admin/ai/rules` | PATCH | ADMX-027/028 |
| 48 | Create automated monitoring/alert rules | `/admin/monitoring/rules` | POST | LOG-003 |
| 49 | Manage custom prompts for meeting summaries | `/admin/ai-templates` | GET/POST | ADMX-030/031 |
| 50 | Guest self-booking via smart link | `/guest/reserve` | POST | GRES-004 |
| 51 | Device authentication for Tablet foyer | `/reception/auth` | POST | UKET-001 |
| 52 | Fetch media slides for digital signage | `/reception/signage` | GET | UKET-002 |
| 53 | Validate guest QR/Code and trigger notifications | `/reception/check-in/qr` | POST | UKET-004/005 |
| 54 | Send Slack/Teams/Email alert to host | `/reception/notify-host` | POST | UKET-008 |
| 55 | Walk-in visitor registration | `/reception/check-in/no-appointment` | POST | UKET-006 |
| 56 | Logistics/Delivery vendor registration | `/reception/check-in/vendor` | POST | UKET-007 |
| 57 | WebRTC signaling for Audio/Video calls | `/reception/calls/signal` | POST | UKET-009 |
| 58 | Fetch guiding map for visitor path | `/reception/map/:room_id` | GET | UKET-010 |
| 59 | Check room and host availability for guests | `/guest/availability` | GET | GRES-001 |
| 60 | Link device to a specific meeting room | `/room/:id/link` | POST | ENTR-001 |
| 61 | Fetch current/next meeting status | `/room/:id/status` | GET | ENTR-002 |
| 62 | Initialize meeting and recording handshake | `/room/:id/start` | POST | ENTR-003/008 |
| 63 | Fetch attendees for room initialization | `/room/:id/participants` | GET | ENTR-004/005 |
| 64 | Save final seat map positions | `/room/:id/seats` | POST | ENTR-006 |
| 65 | Capture participant consent for recording | `/room/:id/consent` | POST | ENTR-008 |
| 66 | Upload individual participant audio stream | `/room/:id/stream` | POST | ENTR-008 |
| 67 | WebSocket/SSE for real-time transcript & sync | `/room/:id/live` | GET | ENTR-009 |
| 68 | Log reactions, comments, or markers during meeting | `/room/:id/event` | POST | ENTR-009 |
| 69 | Quick-extend meeting duration by 15 mins | `/room/:id/extend` | PATCH | ENTR-009 |
| 70 | Dashboard of all active tenants and health | `/tng/companies` | GET | ADM-001 |
| 71 | Override limits (users, AI minutes) per company | `/tng/companies/:id/quota` | PATCH | ADM-002 |
| 72 | List system-wide invoices for all tenants | `/tng/billing/invoices` | GET | ADM-004/005 |
| 73 | Manage global subscription tiers and pricing | `/tng/plans` | GET/POST | ADM-006 |
| 74 | Manage system-wide discount codes | `/tng/promo-codes` | GET/POST | ADM-007 |
| 75 | Manage global equipment rental/purchase prices | `/tng/catalog/devices` | GET/POST | ADM-009 |
| 76 | Fetch multi-tenant AI usage analytics | `/tng/analytics/usage` | GET | ADM-010 |
| 77 | Set global AI limit and overage policies | `/tng/settings/policy` | PATCH | ADM-011 |
| 78 | Search system-wide access and audit logs | `/tng/logs/audit` | GET | LOG-001 |
| 79 | Finalize and approve AI overage for billing | `/tng/ai/approve-overage` | POST | ADM-012 |
