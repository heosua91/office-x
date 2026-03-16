# Error Message List - Office X (Phase 1)

This document defines the standard error messages gathered from current screen details and API specifications.

| # | ScreenID | MessageId | Content |
| :--- | :--- | :--- | :--- |
| 1 | ALL | SYS-000-ERR-01 | Internal server error. Please contact system support. |
| 2 | ALL | SYS-000-ERR-02 | Permission denied. You do not have access to this resource. |
| 3 | ALL | SYS-000-ERR-03 | Resource not found. |
| 4 | ALL | SYS-000-ERR-04 | Unauthorized access. Please log in again. |
| 5 | ALL | SYS-000-ERR-05 | Validation failed. Please check your input parameters. |
| 6 | REG-001 | REG-001-ERR-01 | Unable to fetch content |
| 7 | REG-002 | REG-002-ERR-01 | Field cannot be empty. |
| 8 | REG-002 | REG-002-ERR-02 | Must be a valid email format. |
| 9 | REG-002 | REG-002-ERR-03 | This email address is already registered. |
| 10 | REG-004 | REG-004-ERR-01 | Field cannot be empty. |
| 11 | REG-004 | REG-004-ERR-02 | Must match the code in `verification_codes` table and not be expired. |
| 12 | REG-004 | REG-004-ERR-03 | Failed to resend the verification code. Please try again. |
| 13 | REG-004 | REG-004-ERR-04 | The verification code is invalid or has expired. |
| 14 | REG-005 | REG-005-ERR-01 | Email format required. |
| 15 | REG-005 | REG-005-ERR-02 | Field cannot be empty. |
| 16 | REG-005 | REG-005-ERR-03 | Must be between 1 and 50. |
| 17 | REG-005 | REG-005-ERR-04 | Must contain uppercase, lowercase, and numbers. |
| 18 | REG-005 | REG-005-ERR-05 | Must match Password. |
| 19 | REG-005 | REG-005-ERR-06 | Phone number format required. |
| 20 | REG-005 | REG-005-ERR-07 | Zip code format required. |
| 21 | REG-005 | REG-005-ERR-08 | Validation failed. Please check your input parameters. |
| 22 | REG-007 | REG-007-ERR-01 | A plan choice is required. |
| 23 | REG-007 | REG-007-ERR-02 | Code must be valid. |
| 24 | REG-007 | REG-007-ERR-03 | Unable to fetch plans |
| 25 | REG-007 | REG-007-ERR-04 | The verification code is invalid or has expired. |
| 26 | REG-008 | REG-008-ERR-01 | Card declined |
| 27 | REG-008 | REG-008-ERR-02 | Must be a valid credit card number. |
| 28 | REG-008 | REG-008-ERR-03 | Must match MM/YY format. |
| 29 | REG-008 | REG-008-ERR-04 | Unexpected payment error from external service. |
| 30 | REG-009 | REG-009-ERR-01 | Missing billing information |
| 31 | AUTH-001 | AUTH-001-ERR-01 | Field cannot be empty. |
| 32 | AUTH-001 | AUTH-001-ERR-02 | Invalid ID or Password |
| 33 | AUTH-001 | AUTH-001-ERR-03 | Must be a valid email format. |
| 34 | AUTH-002 | AUTH-002-ERR-01 | Field cannot be empty. |
| 35 | AUTH-003 | AUTH-003-ERR-01 | Field cannot be empty. |
| 36 | AUTH-003 | AUTH-003-ERR-02 | Invalid email format |
| 37 | AUTH-003 | AUTH-003-ERR-03 | Must be a valid email format. |
| 38 | AUTH-005 | AUTH-005-ERR-01 | Field cannot be empty (if applicable). |
| 39 | AUTH-005 | AUTH-005-ERR-02 | Field cannot be empty. |
| 40 | AUTH-005 | AUTH-005-ERR-03 | Must be 8-32 characters and mix letters/numbers. |
| 41 | AUTH-005 | AUTH-005-ERR-04 | Must match the New Password. |
| 42 | AUTH-005 | AUTH-005-ERR-05 | Password weak |
| 43 | AUTH-005 | AUTH-005-ERR-06 | Token expired or invalid |
| 44 | ADMX-001 | ADMX-001-ERR-01 | If the user is not an Admin, access is denied. |
| 45 | ADMX-002 | ADMX-002-ERR-01 | Show empty state if no schedule or usage data is found. |
| 46 | ADMX-003 | ADMX-003-ERR-01 | Verify required columns and data types within the CSV. |
| 47 | ADMX-004 | ADMX-004-ERR-01 | Field cannot be empty. |
| 48 | ADMX-004 | ADMX-004-ERR-02 | Must be 8-50 chars with mixed letters and numbers. |
| 49 | ADMX-004 | ADMX-004-ERR-03 | Must be a valid email format. |
| 50 | ADMX-004 | ADMX-004-ERR-04 | Must follow standard URL pattern. |
| 51 | ADMX-004-1 | ADMX-004-1-ERR-01 | Field cannot be empty. |
| 52 | ADMX-004-1 | ADMX-004-1-ERR-02 | Must be a positive integer. |
| 53 | ADMX-006 | ADMX-006-ERR-01 | Field cannot be empty. |
| 54 | ADMX-006 | ADMX-006-ERR-02 | Must be a valid email. |
| 55 | ADMX-007 | ADMX-007-ERR-01 | Floor ID does not exist. |
| 56 | ADMX-007 | ADMX-007-ERR-02 | Invalid room capacity (must be > 0). |
| 57 | ADMX-007 | ADMX-007-ERR-03 | Room code must be unique. |
| 58 | ADMX-008 | ADMX-008-ERR-01 | Field cannot be empty. |
| 59 | ADMX-008 | ADMX-008-ERR-02 | File size must be under 5MB. |
| 60 | ADMX-008 | ADMX-008-ERR-03 | Must be a positive integer. |
| 61 | ADMX-008 | ADMX-008-ERR-04 | Must select a floor. |
| 62 | ADMX-009 | ADMX-009-ERR-01 | Field cannot be empty. |
| 63 | ADMX-009 | ADMX-009-ERR-02 | Must select a floor. |
| 64 | ADMX-010 | ADMX-010-ERR-01 | Field cannot be empty. |
| 65 | ADMX-010 | ADMX-010-ERR-02 | Must provide a message if rejection flag is active. |
| 66 | ADMX-010 | ADMX-010-ERR-03 | Name must be unique within the selected master type. |
| 67 | ADMX-011 | ADMX-011-ERR-01 | Max file size 5MB. |
| 68 | ADMX-011 | ADMX-011-ERR-02 | Supports PNG, JPG, JPEG. |
| 69 | ADMX-012 | ADMX-012-ERR-01 | Field cannot be empty. |
| 70 | ADMX-012 | ADMX-012-ERR-02 | Image < 5MB, Video < 50MB. |
| 71 | ADMX-012 | ADMX-012-ERR-03 | Must be a number between 1 and 999. |
| 72 | ADMX-013 | ADMX-013-ERR-01 | Device name already in use. |
| 73 | ADMX-013 | ADMX-013-ERR-02 | Maximum number of foyer tablets for this company reached. |
| 74 | ADMX-014 | ADMX-014-ERR-01 | Field cannot be empty. |
| 75 | ADMX-014 | ADMX-014-ERR-02 | ID must be unique among tablets. |
| 76 | ADMX-014 | ADMX-014-ERR-03 | Must follow URL pattern. |
| 77 | ADMX-015 | ADMX-015-ERR-01 | Field cannot be empty. |
| 78 | ADMX-017 | ADMX-017-ERR-01 | Could not retrieve billing status. |
| 79 | ADMX-018 | ADMX-018-ERR-01 | Field cannot be empty. |
| 80 | ADMX-018 | ADMX-018-ERR-02 | Must be a valid email. |
| 81 | ADMX-018 | ADMX-018-ERR-03 | Must be a valid phone number. |
| 82 | ADMX-018 | ADMX-018-ERR-04 | Required if limit mode is enabled. |
| 83 | ADMX-019 | ADMX-019-ERR-01 | All required fields for invoice payment must be filled. |
| 84 | ADMX-019 | ADMX-019-ERR-02 | Verify card details through gateway before submission. |
| 85 | ADMX-020 | ADMX-020-ERR-01 | Invoice file not found. |
| 86 | ADMX-022 | ADMX-022-ERR-01 | Code must be active and applicable. |
| 87 | ADMX-022 | ADMX-022-ERR-02 | Must select a target plan. |
| 88 | ADMX-023 | ADMX-023-ERR-01 | End date cannot be before start date. |
| 89 | ADMX-025 | ADMX-025-ERR-01 | Field cannot be empty. |
| 90 | ADMX-025 | ADMX-025-ERR-02 | Must be a positive integer. |
| 91 | ADMX-027 | ADMX-027-ERR-01 | Must contain valid email(s). |
| 92 | ADMX-028 | ADMX-028-ERR-01 | Must define a trigger threshold. |
| 93 | ADMX-028 | ADMX-028-ERR-02 | Must select at least one recipient type. |
| 94 | ADMX-030 | ADMX-030-ERR-01 | AI template name is reserved by system. |
| 95 | ADMX-030 | ADMX-030-ERR-02 | Invalid template placeholder format. |
| 96 | ADMX-031 | ADMX-031-ERR-01 | Field cannot be empty. |
| 97 | ADMX-031 | ADMX-031-ERR-02 | Instruction field cannot be empty. |
| 98 | ADMX-031 | ADMX-031-ERR-03 | Must select a category. |
| 99 | ADM-001 | ADM-001-ERR-01 | Failed to load company dashboard. |
| 100 | ADM-002 | ADM-002-ERR-01 | Invalid quota values. |
| 101 | ADM-004 | ADM-004-ERR-01 | System-wide invoice listing failed. |
| 102 | ADM-005 | ADM-005-ERR-01 | System-wide invoice listing failed. |
| 103 | ADM-006 | ADM-006-ERR-01 | Plan record update error. |
| 104 | ADM-007 | ADM-007-ERR-01 | Promotion code already exists. |
| 105 | ADM-009 | ADM-009-ERR-01 | Device catalog item not found. |
| 106 | ADM-010 | ADM-010-ERR-01 | Usage statistics engine failed. |
| 107 | ADM-011 | ADM-011-ERR-01 | Multi-tenant policy update denied. |
| 108 | ADM-012 | ADM-012-ERR-01 | Overage record not found. |
| 109 | ENTR-001 | ENTR-001-ERR-01 | Room ID not found. |
| 110 | ENTR-002 | ENTR-002-ERR-01 | Failed to fetch room status. |
| 111 | ENTR-003 | ENTR-003-ERR-01 | Meeting cannot be started yet (too early). |
| 112 | ENTR-003 | ENTR-003-ERR-02 | Recording is already in progress. |
| 113 | ENTR-004 | ENTR-004-ERR-01 | Could not retrieve participants. |
| 114 | ENTR-005 | ENTR-005-ERR-01 | Could not retrieve participants. |
| 115 | ENTR-006 | ENTR-006-ERR-01 | Invalid seat coordinates. |
| 116 | ENTR-008 | ENTR-008-ERR-01 | Audio upload blocked. Microphone consent missing. |
| 117 | ENTR-008 | ENTR-008-ERR-02 | Failed to upload audio stream. Low bandwidth detected. |
| 118 | ENTR-008 | ENTR-008-ERR-03 | Meeting cannot be started yet (too early). |
| 119 | ENTR-008 | ENTR-008-ERR-04 | Missing attendee identifier for consent. |
| 120 | ENTR-008 | ENTR-008-ERR-05 | Recording is already in progress. |
| 121 | ENTR-009 | ENTR-009-ERR-01 | Cannot extend room booking. Next meeting starts in 2 minutes. |
| 122 | ENTR-009 | ENTR-009-ERR-02 | Invalid meeting event type. |
| 123 | ENTR-009 | ENTR-009-ERR-03 | Live sync service unavailable. |
| 124 | ENTR-009 | ENTR-009-ERR-04 | User does not have permission to extend sessions on this device. |
| 125 | GRES-001 | GRES-001-ERR-01 | Could not retrieve availability. |
| 126 | GRES-004 | GRES-004-ERR-01 | Host is no longer available. |
| 127 | GRES-004 | GRES-004-ERR-02 | Invalid visitor contact number format. |
| 128 | LOG-001 | LOG-001-ERR-01 | Invalid audit search query. |
| 129 | LOG-003 | LOG-003-ERR-01 | Duplicate monitoring rule name. |
| 130 | OFX-001 | OFX-001-ERR-01 | Analytics widget data timeout. |
| 131 | OFX-001 | OFX-001-ERR-02 | Failed to load dashboard data. |
| 132 | OFX-002 | OFX-002-ERR-01 | Invalid filter parameters for meeting history. |
| 133 | OFX-002 | OFX-002-ERR-02 | Permission denied to view meetings for this department. |
| 134 | OFX-003 | OFX-003-ERR-01 | Missing required AI meeting template ID. |
| 135 | OFX-003 | OFX-003-ERR-02 | Room capacity exceeded for selected room. |
| 136 | OFX-003 | OFX-003-ERR-03 | Selected time slot is no longer available. |
| 137 | OFX-004 | OFX-004-ERR-01 | Cannot modify meeting that has already finished. |
| 138 | OFX-004 | OFX-004-ERR-02 | Meeting overlaps with another reservation. |
| 139 | OFX-004 | OFX-004-ERR-03 | Meeting record not found. |
| 140 | OFX-004 | OFX-004-ERR-04 | User must be the host to modify participants. |
| 141 | OFX-005 | OFX-005-ERR-01 | End date must be after start date. |
| 142 | OFX-005 | OFX-005-ERR-02 | Failed to fetch schedule timeline. |
| 143 | OFX-008 | OFX-008-ERR-01 | Missing required AI meeting template ID. |
| 144 | OFX-008 | OFX-008-ERR-02 | Room capacity exceeded for selected room. |
| 145 | OFX-008 | OFX-008-ERR-03 | Selected time slot is no longer available. |
| 146 | OFX-009 | OFX-009-ERR-01 | Cannot modify meeting that has already finished. |
| 147 | OFX-009 | OFX-009-ERR-02 | Meeting overlaps with another reservation. |
| 148 | OFX-009 | OFX-009-ERR-03 | Meeting record not found. |
| 149 | OFX-009 | OFX-009-ERR-04 | User must be the host to modify participants. |
| 150 | OFX-010 | OFX-010-ERR-01 | Could not load customer list. |
| 151 | OFX-010 | OFX-010-ERR-02 | Invalid search query format. |
| 152 | OFX-011 | OFX-011-ERR-01 | Customer record not found. |
| 153 | OFX-011 | OFX-011-ERR-02 | Failed to retrieve client AI insights. |
| 154 | OFX-012 | OFX-012-ERR-01 | Client company name is already registered. |
| 155 | OFX-012 | OFX-012-ERR-02 | Customer profile update failed. Invalid data format. |
| 156 | OFX-013 | OFX-013-ERR-01 | AI processing engine error for transcript segments. |
| 157 | OFX-013 | OFX-013-ERR-02 | AI transcript not yet available for this meeting. |
| 158 | OFX-013 | OFX-013-ERR-03 | Segment correction failed. Invalid speaker ID. |
| 159 | OFX-013 | OFX-013-ERR-04 | Transcript segment not found. |
| 160 | OFX-014 | OFX-014-ERR-01 | Invalid user or department ID for permission grant. |
| 161 | OFX-014 | OFX-014-ERR-02 | Meeting permissions not found. |
| 162 | OFX-014 | OFX-014-ERR-03 | Only host can change granular permissions. |
| 163 | OFX-014 | OFX-014-ERR-04 | Summary exceeds maximum character limit. |
| 164 | OFX-014 | OFX-014-ERR-05 | Summary record not found to update. |
| 165 | OFX-015 | OFX-015-ERR-01 | AI failed to generate email draft. |
| 166 | OFX-015 | OFX-015-ERR-02 | Missing required follow-up context for AI draft. |
| 167 | OFX-017 | OFX-017-ERR-01 | New password does not meet security requirements. |
| 168 | OFX-019 | OFX-019-ERR-01 | Invalid privacy setting value. |
| 169 | OFX-020 | OFX-020-ERR-01 | Blackout date must be in the future. |
| 170 | OFX-020 | OFX-020-ERR-02 | Invalid availability schedule (overlap detected). |
| 171 | OFX-021 | OFX-021-ERR-01 | External webhook verification failed. |
| 172 | OFX-021 | OFX-021-ERR-02 | Failed to connect with integration provider. |
| 173 | OFX-022 | OFX-022-ERR-01 | Google API service currently unreachable. |
| 174 | OFX-022 | OFX-022-ERR-02 | Google Drive authorization expired. |
| 175 | UKET-001 | UKET-001-ERR-01 | Invalid device token. |
| 176 | UKET-002 | UKET-002-ERR-01 | Failed to load signage content. |
| 177 | UKET-004 | UKET-004-ERR-01 | Appointment time has not arrived yet. |
| 178 | UKET-004 | UKET-004-ERR-02 | Guest has already checked out. |
| 179 | UKET-004 | UKET-004-ERR-03 | Invalid or expired QR code. |
| 180 | UKET-005 | UKET-005-ERR-01 | Appointment time has not arrived yet. |
| 181 | UKET-005 | UKET-005-ERR-02 | Guest has already checked out. |
| 182 | UKET-005 | UKET-005-ERR-03 | Invalid or expired QR code. |
| 183 | UKET-006 | UKET-006-ERR-01 | Walk-in visitor failed. Identity photo required. |
| 184 | UKET-006 | UKET-006-ERR-02 | Walk-in visits disabled. |
| 185 | UKET-007 | UKET-007-ERR-01 | Missing vendor identification details. |
| 186 | UKET-008 | UKET-008-ERR-01 | Host notification failed. Slack connection error. |
| 187 | UKET-008 | UKET-008-ERR-02 | Host notification failed. Teams API error. |
| 188 | UKET-009 | UKET-009-ERR-01 | Signaling connection timeout. |
| 189 | UKET-010 | UKET-010-ERR-01 | Map resource not found for this room. |
