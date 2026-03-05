# Error Message List - Office X (Phase 1)

This document defines the standard error messages for API responses, ordered by Screen ID as specified in `Api.md`.

| # | Screen ID | Endpoint | Method | Status Code | Message Id | Message |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **I** | **System** | | | | | |
| 1 | ALL | ALL | ALL | 401 | SYS-000-ERR-01 | Unauthorized access. Please log in again. |
| 2 | ALL | ALL | ALL | 403 | SYS-000-ERR-02 | Permission denied. You do not have access to this resource. |
| 3 | ALL | ALL | ALL | 404 | SYS-000-ERR-03 | Resource not found. |
| 4 | ALL | ALL | ALL | 422 | SYS-000-ERR-04 | Validation failed. Please check your input parameters. |
| 5 | ALL | ALL | ALL | 500 | SYS-000-ERR-05 | Internal server error. Please contact system support. |
| **II** | **1. Auth & Reg** | | | | | |
| 6 | REG-002 | `/auth/register/verify-email` | POST | 400 | REG-002-ERR-01 | Invalid email format. |
| 7 | REG-002 | `/auth/register/verify-email` | POST | 409 | REG-002-ERR-02 | Email is already registered. |
| 8 | REG-004 | `/auth/register/verify-code` | POST | 400 | REG-004-ERR-01 | Invalid verification code. |
| 9 | REG-004 | `/auth/register/verify-code` | POST | 400 | REG-004-ERR-02 | Verification code has expired. |
| 10 | REG-001 | `/auth/register/terms` | GET | 500 | REG-001-ERR-01 | Could not retrieve Terms & Conditions. |
| 11 | REG-005 | `/auth/register/company` | POST | 400 | REG-005-ERR-01 | Company name already exists. |
| 12 | REG-007 | `/auth/register/plans` | GET | 500 | REG-007-ERR-01 | Could not retrieve subscription plans. |
| 13 | REG-007 | `/auth/register/check-promo` | POST | 404 | REG-007-ERR-02 | Invalid or expired promotion code. |
| 14 | REG-008 | `/auth/register/payment` | POST | 400 | REG-008-ERR-01 | Payment method verification failed. |
| 15 | REG-009 | `/auth/register/finalize` | POST | 500 | REG-009-ERR-01 | Finalization failed. Database transaction error. |
| 16 | AUTH-001/2| `/auth/login` | POST | 401 | AUTH-001-ERR-01 | Incorrect email or password. |
| 17 | OFX-017 | `/auth/profile` | PATCH | 400 | OFX-017-ERR-01 | New password does not meet security requirements. |
| 18 | AUTH-003 | `/auth/password-reset/request`| POST | 404 | AUTH-003-ERR-01 | Email address not found. |
| 19 | AUTH-005 | `/auth/password-reset/confirm`| POST | 400 | AUTH-005-ERR-01 | Invalid or expired reset token. |
| **III** | **2. Office Workspace** | | | | | |
| 20 | OFX-001 | `/office/dashboard` | GET | 500 | OFX-001-ERR-01 | Failed to load dashboard data. |
| 21 | OFX-001 | `/office/dashboard` | GET | 500 | OFX-001-ERR-02 | Analytics widget data timeout. |
| 22 | OFX-002 | `/office/meetings` | GET | 400 | OFX-002-ERR-01 | Invalid filter parameters for meeting history. |
| 23 | OFX-002 | `/office/meetings` | GET | 403 | OFX-002-ERR-02 | Permission denied to view meetings for this department. |
| 24 | OFX-003/8 | `/office/meetings/smart-url`| POST | 400 | OFX-003-ERR-01 | Selected time slot is no longer available. |
| 25 | OFX-003/8 | `/office/meetings/smart-url`| POST | 400 | OFX-003-ERR-02 | Room capacity exceeded for selected room. |
| 26 | OFX-003/8 | `/office/meetings/smart-url`| POST | 400 | OFX-003-ERR-03 | Missing required AI meeting template ID. |
| 27 | OFX-004/9 | `/office/meetings/:id` | PATCH | 404 | OFX-004-ERR-01 | Meeting record not found. |
| 28 | OFX-004/9 | `/office/meetings/:id` | PATCH | 409 | OFX-004-ERR-02 | Meeting overlaps with another reservation. |
| 29 | OFX-004/9 | `/office/meetings/:id` | PATCH | 400 | OFX-004-ERR-03 | Cannot modify meeting that has already finished. |
| 30 | OFX-004/9 | `/office/meetings/:id` | PATCH | 400 | OFX-004-ERR-04 | User must be the host to modify participants. |
| 31 | OFX-014 | `/office/meetings/:id/permissions`| GET | 404 | OFX-014-ERR-01 | Meeting permissions not found. |
| 32 | OFX-014 | `/office/meetings/:id/permissions`| POST | 400 | OFX-014-ERR-02 | Invalid user or department ID for permission grant. |
| 33 | OFX-014 | `/office/meetings/:id/permissions`| POST | 403 | OFX-014-ERR-03 | Only host can change granular permissions. |
| 34 | OFX-005 | `/office/schedule/gantt` | GET | 500 | OFX-005-ERR-01 | Failed to fetch schedule timeline. |
| 35 | OFX-005 | `/office/schedule/gantt` | GET | 400 | OFX-005-ERR-02 | End date must be after start date. |
| 36 | OFX-010 | `/office/customers` | GET | 500 | OFX-010-ERR-01 | Could not load customer list. |
| 37 | OFX-010 | `/office/customers` | GET | 400 | OFX-010-ERR-02 | Invalid search query format. |
| 38 | OFX-011 | `/office/customers/:id` | GET | 404 | OFX-011-ERR-01 | Customer record not found. |
| 39 | OFX-011 | `/office/customers/:id` | GET | 500 | OFX-011-ERR-02 | Failed to retrieve client AI insights. |
| 40 | OFX-012 | `/office/customers/:id` | PATCH | 400 | OFX-012-ERR-01 | Customer profile update failed. Invalid data format. |
| 41 | OFX-012 | `/office/customers/:id` | PATCH | 409 | OFX-012-ERR-02 | Client company name is already registered. |
| 42 | OFX-013 | `/office/meetings/:id/ai` | GET | 404 | OFX-013-ERR-01 | AI transcript not yet available for this meeting. |
| 43 | OFX-013 | `/office/meetings/:id/ai` | GET | 500 | OFX-013-ERR-02 | AI processing engine error for transcript segments. |
| 44 | OFX-014 | `/office/meetings/:id/summary` | PATCH | 400 | OFX-014-ERR-04 | Summary exceeds maximum character limit. |
| 45 | OFX-014 | `/office/meetings/:id/summary` | PATCH | 404 | OFX-014-ERR-05 | Summary record not found to update. |
| 46 | OFX-013 | `/office/meetings/segments/:id`| PATCH | 404 | OFX-013-ERR-03 | Transcript segment not found. |
| 47 | OFX-013 | `/office/meetings/segments/:id`| PATCH | 400 | OFX-013-ERR-04 | Segment correction failed. Invalid speaker ID. |
| 48 | OFX-015 | `/office/meetings/:id/email` | POST | 500 | OFX-015-ERR-01 | AI failed to generate email draft. |
| 49 | OFX-015 | `/office/meetings/:id/email` | POST | 400 | OFX-015-ERR-02 | Missing required follow-up context for AI draft. |
| 50 | OFX-022 | `/office/google-drive/files` | GET | 401 | OFX-022-ERR-01 | Google Drive authorization expired. |
| 51 | OFX-022 | `/office/google-drive/files` | GET | 503 | OFX-022-ERR-02 | Google API service currently unreachable. |
| 52 | OFX-019 | `/office/settings/privacy` | PATCH | 400 | OFX-019-ERR-01 | Invalid privacy setting value. |
| 53 | OFX-021 | `/office/settings/integrations`| GET/POST| 400 | OFX-021-ERR-01 | Failed to connect with integration provider. |
| 54 | OFX-021 | `/office/settings/integrations`| GET/POST| 500 | OFX-021-ERR-02 | External webhook verification failed. |
| 55 | OFX-020 | `/office/settings/availability`| GET/POST| 400 | OFX-020-ERR-01 | Invalid availability schedule (overlap detected). |
| 56 | OFX-020 | `/office/settings/availability`| GET/POST| 400 | OFX-020-ERR-02 | Blackout date must be in the future. |
| **IV** | **3. Administration** | | | | | |
| 57 | ADMX-002 | `/admin/dashboard` | GET | 500 | ADMX-002-ERR-01 | Analytics engine error. |
| 58 | ADMX-002 | `/admin/dashboard` | GET | 403 | ADMX-002-ERR-02 | Access denied. Admin dashboard requires higher security clear. |
| 59 | ADMX-003/4| `/admin/users` | GET/POST| 409 | ADMX-004-ERR-01 | User with this email already exists. |
| 60 | ADMX-003/4| `/admin/users` | GET/POST| 403 | ADMX-004-ERR-02 | Maximum number of user slots reached. |
| 61 | ADMX-003/4| `/admin/users` | GET/POST| 400 | ADMX-004-ERR-03 | Invalid department assignment for user. |
| 62 | ADMX-003 | `/admin/users/import` | POST | 400 | ADMX-003-ERR-01 | Invalid CSV format or missing headers. |
| 63 | ADMX-003 | `/admin/users/import` | POST | 413 | ADMX-003-ERR-02 | CSV file size exceeds limit (10MB). |
| 64 | ADMX-003 | `/admin/users/import` | POST | 422 | ADMX-003-ERR-03 | Validation error in row 25: Column "Role" is invalid. |
| 65 | ADMX-003 | `/admin/users/import/history` | GET | 500 | ADMX-003-ERR-04 | Failed to load import history. |
| 66 | ADMX-007/8| `/admin/rooms` | GET/POST| 400 | ADMX-008-ERR-01 | Room code must be unique. |
| 67 | ADMX-007/8| `/admin/rooms` | GET/POST| 400 | ADMX-008-ERR-02 | Floor ID does not exist. |
| 68 | ADMX-007/8| `/admin/rooms` | GET/POST| 400 | ADMX-008-ERR-03 | Invalid room capacity (must be > 0). |
| 69 | ADMX-010 | `/admin/master/:type` | GET/POST| 400 | ADMX-010-ERR-01 | Invalid master data type requested. |
| 70 | ADMX-010 | `/admin/master/:type` | GET/POST| 409 | ADMX-010-ERR-02 | Master entity with this slug already exists. |
| 71 | ADMX-011/2| `/admin/settings/branding` | GET/PATCH| 413 | ADMX-012-ERR-01 | Logo file size exceeds limit (2MB). |
| 72 | ADMX-011/2| `/admin/settings/branding` | GET/PATCH| 415 | ADMX-012-ERR-02 | Unsupported file type. Please use PNG or SVG. |
| 73 | ADMX-013/4| `/admin/reception-devices` | GET/POST| 400 | ADMX-014-ERR-01 | Device name already in use. |
| 74 | ADMX-013/4| `/admin/reception-devices` | GET/POST| 400 | ADMX-014-ERR-02 | Maximum number of foyer tablets for this company reached. |
| 75 | ADMX-017 | `/admin/billing/status` | GET | 500 | ADMX-017-ERR-01 | Could not retrieve billing status. |
| 76 | ADMX-018 | `/admin/billing/status` | PATCH | 403 | ADMX-018-ERR-01 | Insufficient admin permissions. |
| 77 | ADMX-018 | `/admin/billing/status` | PATCH | 400 | ADMX-018-ERR-02 | Alert threshold cannot exceed 200% of current limit. |
| 78 | ADMX-004-1| `/admin/billing/user-slots` | POST | 402 | ADMX-004-1-ERR-01| Payment failed for user slots. |
| 79 | ADMX-004-1| `/admin/billing/user-slots` | POST | 400 | ADMX-004-1-ERR-02| Purchase amount mismatch with current plan tier. |
| 80 | ADMX-019 | `/admin/settings/payment-methods`| GET/POST| 400 | ADMX-019-ERR-01 | Payment method registration failed. |
| 81 | ADMX-020 | `/admin/billing/invoices` | GET | 404 | ADMX-020-ERR-01 | Invoice file not found. |
| 82 | ADMX-025 | `/admin/billing/ai-credits` | POST | 402 | ADMX-025-ERR-01 | Payment failed during credit purchase. |
| 83 | ADMX-023 | `/admin/visit-logs` | GET | 400 | ADMX-023-ERR-01 | Invalid filter parameters for logs. |
| 84 | ADMX-023 | `/admin/visit-logs` | GET | 416 | ADMX-023-ERR-02 | Requested log history exceeds plan retention period. |
| 85 | ADMX-027/8| `/admin/ai/rules` | PATCH | 400 | ADMX-028-ERR-01 | Monitoring threshold must be positive. |
| 86 | LOG-003 | `/admin/monitoring/rules` | POST | 409 | LOG-003-ERR-01 | Duplicate monitoring rule name. |
| 87 | ADMX-030/31| `/admin/ai-templates` | GET/POST| 400 | ADMX-031-ERR-01 | Invalid template placeholder format. |
| 88 | ADMX-030/31| `/admin/ai-templates` | GET/POST| 403 | ADMX-031-ERR-02 | AI template name is reserved by system. |
| **V** | **4. Reception & Visitor** | | | | | |
| 89 | GRES-004 | `/guest/reserve` | POST | 400 | GRES-004-ERR-01 | Host is no longer available. |
| 90 | GRES-004 | `/guest/reserve` | POST | 400 | GRES-004-ERR-02 | Invalid visitor contact number format. |
| 91 | UKET-001 | `/reception/auth` | POST | 401 | UKET-001-ERR-01 | Invalid device token. |
| 92 | UKET-002 | `/reception/signage` | GET | 500 | UKET-002-ERR-01 | Failed to load signage content. |
| 93 | UKET-004/5| `/reception/check-in/qr` | POST | 404 | UKET-004-ERR-01 | Invalid or expired QR code. |
| 94 | UKET-004/5| `/reception/check-in/qr` | POST | 400 | UKET-005-ERR-01 | Appointment time has not arrived yet. |
| 95 | UKET-004/5| `/reception/check-in/qr` | POST | 410 | UKET-005-ERR-02 | Guest has already checked out. |
| 96 | UKET-008 | `/reception/notify-host` | POST | 500 | UKET-008-ERR-01 | Host notification failed. Slack connection error. |
| 97 | UKET-008 | `/reception/notify-host` | POST | 500 | UKET-008-ERR-02 | Host notification failed. Teams API error. |
| 98 | UKET-006 | `/reception/check-in/no-appointment`| POST | 403 | UKET-006-ERR-01 | Walk-in visits disabled. |
| 99 | UKET-006 | `/reception/check-in/no-appointment`| POST | 400 | UKET-006-ERR-02 | Walk-in visitor failed. Identity photo required. |
| 100| UKET-007 | `/reception/check-in/vendor` | POST | 400 | UKET-007-ERR-01 | Missing vendor identification details. |
| 101| UKET-009 | `/reception/calls/signal` | POST | 500 | UKET-009-ERR-01 | Signaling connection timeout. |
| 102| UKET-010 | `/reception/map/:room_id` | GET | 404 | UKET-010-ERR-01 | Map resource not found for this room. |
| 103| GRES-001 | `/guest/availability` | GET | 500 | GRES-001-ERR-01 | Could not retrieve availability. |
| **VI** | **5. Room Device** | | | | | |
| 104| ENTR-001 | `/room/:id/link` | POST | 404 | ENTR-001-ERR-01 | Room ID not found. |
| 105| ENTR-002 | `/room/:id/status` | GET | 500 | ENTR-002-ERR-01 | Failed to fetch room status. |
| 106| ENTR-003/8| `/room/:id/start` | POST | 400 | ENTR-003-ERR-01 | Meeting cannot be started yet (too early). |
| 107| ENTR-003/8| `/room/:id/start` | POST | 409 | ENTR-003-ERR-02 | Recording is already in progress. |
| 108| ENTR-004/5| `/room/:id/participants` | GET | 500 | ENTR-004-ERR-01 | Could not retrieve participants. |
| 109| ENTR-006 | `/room/:id/seats` | POST | 400 | ENTR-006-ERR-01 | Invalid seat coordinates. |
| 110| ENTR-008 | `/room/:id/consent` | POST | 400 | ENTR-008-ERR-01 | Missing attendee identifier for consent. |
| 111| ENTR-008 | `/room/:id/stream` | POST | 500 | ENTR-008-ERR-02 | Failed to upload audio stream. Low bandwidth detected. |
| 112| ENTR-008 | `/room/:id/stream` | POST | 403 | ENTR-008-ERR-03 | Audio upload blocked. Microphone consent missing. |
| 113| ENTR-009 | `/room/:id/live` | GET | 503 | ENTR-009-ERR-01 | Live sync service unavailable. |
| 114| ENTR-009 | `/room/:id/event` | POST | 400 | ENTR-009-ERR-02 | Invalid meeting event type. |
| 115| ENTR-009 | `/room/:id/extend` | PATCH | 400 | ENTR-009-ERR-03 | Cannot extend room booking. Next meeting starts in 2 minutes. |
| 116| ENTR-009 | `/room/:id/extend` | PATCH | 400 | ENTR-009-ERR-04 | User does not have permission to extend sessions on this device. |
| **VII** | **6. Global TNG Admin** | | | | | |
| 117| ADM-001 | `/tng/companies` | GET | 500 | ADM-001-ERR-01 | Failed to load company dashboard. |
| 118| ADM-002 | `/tng/companies/:id/quota` | PATCH | 400 | ADM-002-ERR-01 | Invalid quota values. |
| 119| ADM-004/5| `/tng/billing/invoices` | GET | 500 | ADM-004-ERR-01 | System-wide invoice listing failed. |
| 120| ADM-006 | `/tng/plans` | GET/POST| 400 | ADM-006-ERR-01 | Plan record update error. |
| 121| ADM-007 | `/tng/promo-codes` | GET/POST| 409 | ADM-007-ERR-01 | Promotion code already exists. |
| 122| ADM-009 | `/tng/catalog/devices` | GET/POST| 404 | ADM-009-ERR-01 | Device catalog item not found. |
| 123| ADM-010 | `/tng/analytics/usage` | GET | 500 | ADM-010-ERR-01 | Usage statistics engine failed. |
| 124| ADM-011 | `/tng/settings/policy` | PATCH | 403 | ADM-011-ERR-01 | Multi-tenant policy update denied. |
| 125| LOG-001 | `/tng/logs/audit` | GET | 400 | LOG-001-ERR-01 | Invalid audit search query. |
| 126| ADM-012 | `/tng/ai/approve-overage` | POST | 404 | ADM-012-ERR-01 | Overage record not found. |
