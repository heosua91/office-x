# Error Message List - Office X (Phase 1)

This document defines the standard error messages gathered from current screen details and API specifications.

| ScreenID | MessageId | Content |
| :--- | :--- | :--- |
| ALL | SYS-000-ERR-01 | Internal server error. Please contact system support. |
| ALL | SYS-000-ERR-02 | Permission denied. You do not have access to this resource. |
| ALL | SYS-000-ERR-03 | Resource not found. |
| ALL | SYS-000-ERR-04 | Unauthorized access. Please log in again. |
| ALL | SYS-000-ERR-05 | Validation failed. Please check your input parameters. |
| REG-001 | REG-001-ERR-01 | Unable to fetch content |
| REG-002 | REG-002-ERR-01 | Field cannot be empty. |
| REG-002 | REG-002-ERR-02 | Must be a valid email format. |
| REG-002 | REG-002-ERR-03 | This email address is already registered. |
| REG-004 | REG-004-ERR-01 | Field cannot be empty. |
| REG-004 | REG-004-ERR-02 | Must match the code in `verification_codes` table and not be expired. |
| REG-004 | REG-004-ERR-03 | Failed to resend the verification code. Please try again. |
| REG-004 | REG-004-ERR-04 | The verification code is invalid or has expired. |
| REG-005 | REG-005-ERR-01 | Email format required. |
| REG-005 | REG-005-ERR-02 | Field cannot be empty. |
| REG-005 | REG-005-ERR-03 | Must be between 1 and 50. |
| REG-005 | REG-005-ERR-04 | Must contain uppercase, lowercase, and numbers. |
| REG-005 | REG-005-ERR-05 | Must match Password. |
| REG-005 | REG-005-ERR-06 | Phone number format required. |
| REG-005 | REG-005-ERR-07 | Zip code format required. |
| REG-005 | REG-005-ERR-08 | Validation failed. Please check your input parameters. |
| REG-007 | REG-007-ERR-01 | A plan choice is required. |
| REG-007 | REG-007-ERR-02 | Code must be valid. |
| REG-007 | REG-007-ERR-03 | Unable to fetch plans |
| REG-007 | REG-007-ERR-04 | The verification code is invalid or has expired. |
| REG-008 | REG-008-ERR-01 | Card declined |
| REG-008 | REG-008-ERR-02 | Must be a valid credit card number. |
| REG-008 | REG-008-ERR-03 | Must match MM/YY format. |
| REG-008 | REG-008-ERR-04 | Unexpected payment error from external service. |
| REG-009 | REG-009-ERR-01 | Missing billing information |
| AUTH-001 | AUTH-001-ERR-01 | Field cannot be empty. |
| AUTH-001 | AUTH-001-ERR-02 | Invalid ID or Password |
| AUTH-001 | AUTH-001-ERR-03 | Must be a valid email format. |
| AUTH-002 | AUTH-002-ERR-01 | Field cannot be empty. |
| AUTH-003 | AUTH-003-ERR-01 | Field cannot be empty. |
| AUTH-003 | AUTH-003-ERR-02 | Invalid email format |
| AUTH-003 | AUTH-003-ERR-03 | Must be a valid email format. |
| AUTH-005 | AUTH-005-ERR-01 | Field cannot be empty (if applicable). |
| AUTH-005 | AUTH-005-ERR-02 | Field cannot be empty. |
| AUTH-005 | AUTH-005-ERR-03 | Must be 8-32 characters and mix letters/numbers. |
| AUTH-005 | AUTH-005-ERR-04 | Must match the New Password. |
| AUTH-005 | AUTH-005-ERR-05 | Password weak |
| AUTH-005 | AUTH-005-ERR-06 | Token expired or invalid |
| ADMX-001 | ADMX-001-ERR-01 | If the user is not an Admin, access is denied. |
| ADMX-002 | ADMX-002-ERR-01 | Show empty state if no schedule or usage data is found. |
| ADMX-003 | ADMX-003-ERR-01 | Verify required columns and data types within the CSV. |
| ADMX-003 | ADMX-003-ERR-02 | Check if the uploaded file is a valid .csv. |
| ADMX-004 | ADMX-004-ERR-01 | Field cannot be empty. |
| ADMX-004 | ADMX-004-ERR-02 | Must be 8-50 chars with mixed letters and numbers. |
| ADMX-004 | ADMX-004-ERR-03 | Must be a valid email format. |
| ADMX-004 | ADMX-004-ERR-04 | Must follow standard URL pattern. |
| ADMX-004 | ADMX-004-ERR-05 | Login ID or Email already exists. |
| ADMX-004-1 | ADMX-004-1-ERR-01 | Field cannot be empty. |
| ADMX-004-1 | ADMX-004-1-ERR-02 | Must be a positive integer. |
| ADMX-006 | ADMX-006-ERR-01 | Field cannot be empty. |
| ADMX-006 | ADMX-006-ERR-02 | Must be a valid email. |
| ADMX-007 | ADMX-007-ERR-01 | Floor ID does not exist. |
| ADMX-007 | ADMX-007-ERR-02 | Invalid room capacity (must be > 0). |
| ADMX-007 | ADMX-007-ERR-03 | Room code must be unique. |
| ADMX-008 | ADMX-008-ERR-01 | Field cannot be empty. |
| ADMX-008 | ADMX-008-ERR-02 | File size must be under 5MB. |
| ADMX-008 | ADMX-008-ERR-03 | Must be a positive integer. |
| ADMX-008 | ADMX-008-ERR-04 | Must select a floor. |
| ADMX-009 | ADMX-009-ERR-01 | Field cannot be empty. |
| ADMX-009 | ADMX-009-ERR-02 | Must select a floor. |
| ADMX-010 | ADMX-010-ERR-01 | Field cannot be empty. |
| ADMX-010 | ADMX-010-ERR-02 | Must provide a message if rejection flag is active. |
| ADMX-010 | ADMX-010-ERR-03 | Name must be unique within the selected master type. |
| ADMX-010 | ADMX-010-ERR-04 | Cannot delete while in use by other resources. |
| ADMX-011 | ADMX-011-ERR-01 | Max file size 5MB. |
| ADMX-011 | ADMX-011-ERR-02 | Supports PNG, JPG, JPEG. |
| ADMX-012 | ADMX-012-ERR-01 | Field cannot be empty. |
| ADMX-012 | ADMX-012-ERR-02 | Image < 5MB, Video < 50MB. |
| ADMX-012 | ADMX-012-ERR-03 | Must be a number between 1 and 999. |
| ADMX-013 | ADMX-013-ERR-01 | Device name already in use. |
| ADMX-013 | ADMX-013-ERR-02 | Maximum number of foyer tablets for this company reached. |
| ADMX-014 | ADMX-014-ERR-01 | Field cannot be empty. |
| ADMX-014 | ADMX-014-ERR-02 | ID must be unique among tablets. |
| ADMX-014 | ADMX-014-ERR-03 | Must follow URL pattern. |
| ADMX-015 | ADMX-015-ERR-01 | Field cannot be empty. |
| ADMX-017 | ADMX-017-ERR-01 | Could not retrieve billing status. |
| ADMX-018 | ADMX-018-ERR-01 | Field cannot be empty. |
| ADMX-018 | ADMX-018-ERR-02 | Must be a valid email. |
| ADMX-018 | ADMX-018-ERR-03 | Must be a valid phone number. |
| ADMX-018 | ADMX-018-ERR-04 | Required if limit mode is enabled. |
| ADMX-019 | ADMX-019-ERR-01 | All required fields for invoice payment must be filled. |
| ADMX-019 | ADMX-019-ERR-02 | Verify card details through gateway before submission. |
| ADMX-020 | ADMX-020-ERR-01 | Invoice file not found. |
| ADMX-022 | ADMX-022-ERR-01 | Code must be active and applicable. |
| ADMX-022 | ADMX-022-ERR-02 | Must select a target plan. |
| ADMX-023 | ADMX-023-ERR-01 | End date cannot be before start date. |
| ADMX-025 | ADMX-025-ERR-01 | Field cannot be empty. |
| ADMX-025 | ADMX-025-ERR-02 | Must be a positive integer. |
| ADMX-027 | ADMX-027-ERR-01 | Must contain valid email(s). |
| ADMX-028 | ADMX-028-ERR-01 | Must define a trigger threshold. |
| ADMX-028 | ADMX-028-ERR-02 | Must select at least one recipient type. |
| ADMX-030 | ADMX-030-ERR-01 | AI template name is reserved by system. |
| ADMX-030 | ADMX-030-ERR-02 | Invalid template placeholder format. |
| ADMX-031 | ADMX-031-ERR-01 | Field cannot be empty. |
| ADMX-031 | ADMX-031-ERR-02 | Instruction field cannot be empty. |
| ADMX-031 | ADMX-031-ERR-03 | Must select a category. |
| ADM-001 | ADM-001-ERR-01 | Failed to load company dashboard. |
| ADM-002 | ADM-002-ERR-01 | Invalid quota values. |
| ADM-004 | ADM-004-ERR-01 | System-wide invoice listing failed. |
| ADM-005 | ADM-005-ERR-01 | System-wide invoice listing failed. |
| ADM-006 | ADM-006-ERR-01 | Plan record update error. |
| ADM-007 | ADM-007-ERR-01 | Promotion code already exists. |
| ADM-009 | ADM-009-ERR-01 | Device catalog item not found. |
| ADM-010 | ADM-010-ERR-01 | Usage statistics engine failed. |
| ADM-011 | ADM-011-ERR-01 | Multi-tenant policy update denied. |
| ADM-012 | ADM-012-ERR-01 | Overage record not found. |
| ENTR-001 | ENTR-001-ERR-01 | Room ID not found. |
| ENTR-002 | ENTR-002-ERR-01 | Failed to fetch room status. |
| ENTR-003 | ENTR-003-ERR-01 | Meeting cannot be started yet (too early). |
| ENTR-003 | ENTR-003-ERR-02 | Recording is already in progress. |
| ENTR-004 | ENTR-004-ERR-01 | Could not retrieve participants. |
| ENTR-005 | ENTR-005-ERR-01 | Could not retrieve participants. |
| ENTR-006 | ENTR-006-ERR-01 | Invalid seat coordinates. |
| ENTR-008 | ENTR-008-ERR-01 | Audio upload blocked. Microphone consent missing. |
| ENTR-008 | ENTR-008-ERR-02 | Failed to upload audio stream. Low bandwidth detected. |
| ENTR-008 | ENTR-008-ERR-03 | Meeting cannot be started yet (too early). |
| ENTR-008 | ENTR-008-ERR-04 | Missing attendee identifier for consent. |
| ENTR-008 | ENTR-008-ERR-05 | Recording is already in progress. |
| ENTR-009 | ENTR-009-ERR-01 | Cannot extend room booking. Next meeting starts in 2 minutes. |
| ENTR-009 | ENTR-009-ERR-02 | Invalid meeting event type. |
| ENTR-009 | ENTR-009-ERR-03 | Live sync service unavailable. |
| ENTR-009 | ENTR-009-ERR-04 | User does not have permission to extend sessions on this device. |
| GRES-001 | GRES-001-ERR-01 | Could not retrieve availability. |
| GRES-004 | GRES-004-ERR-01 | Host is no longer available. |
| GRES-004 | GRES-004-ERR-02 | Invalid visitor contact number format. |
| LOG-001 | LOG-001-ERR-01 | Invalid audit search query. |
| LOG-003 | LOG-003-ERR-01 | Duplicate monitoring rule name. |
| OFX-001 | OFX-001-ERR-01 | Analytics widget data timeout. |
| OFX-001 | OFX-001-ERR-02 | Failed to load dashboard data. |
| OFX-002 | OFX-002-ERR-01 | Invalid filter parameters for meeting history. |
| OFX-002 | OFX-002-ERR-02 | Permission denied to view meetings for this department. |
| OFX-003 | OFX-003-ERR-01 | Missing required AI meeting template ID. |
| OFX-003 | OFX-003-ERR-02 | Room capacity exceeded for selected room. |
| OFX-003 | OFX-003-ERR-03 | Selected time slot is no longer available. |
| OFX-004 | OFX-004-ERR-01 | Cannot modify meeting that has already finished. |
| OFX-004 | OFX-004-ERR-02 | Meeting overlaps with another reservation. |
| OFX-004 | OFX-004-ERR-03 | Meeting record not found. |
| OFX-004 | OFX-004-ERR-04 | User must be the host to modify participants. |
| OFX-005 | OFX-005-ERR-01 | End date must be after start date. |
| OFX-005 | OFX-005-ERR-02 | Failed to fetch schedule timeline. |
| OFX-008 | OFX-008-ERR-01 | Missing required AI meeting template ID. |
| OFX-008 | OFX-008-ERR-02 | Room capacity exceeded for selected room. |
| OFX-008 | OFX-008-ERR-03 | Selected time slot is no longer available. |
| OFX-009 | OFX-009-ERR-01 | Cannot modify meeting that has already finished. |
| OFX-009 | OFX-009-ERR-02 | Meeting overlaps with another reservation. |
| OFX-009 | OFX-009-ERR-03 | Meeting record not found. |
| OFX-009 | OFX-009-ERR-04 | User must be the host to modify participants. |
| OFX-010 | OFX-010-ERR-01 | Could not load customer list. |
| OFX-010 | OFX-010-ERR-02 | Invalid search query format. |
| OFX-011 | OFX-011-ERR-01 | Customer record not found. |
| OFX-011 | OFX-011-ERR-02 | Failed to retrieve client AI insights. |
| OFX-012 | OFX-012-ERR-01 | Client company name is already registered. |
| OFX-012 | OFX-012-ERR-02 | Customer profile update failed. Invalid data format. |
| OFX-013 | OFX-013-ERR-01 | AI processing engine error for transcript segments. |
| OFX-013 | OFX-013-ERR-02 | AI transcript not yet available for this meeting. |
| OFX-013 | OFX-013-ERR-03 | Segment correction failed. Invalid speaker ID. |
| OFX-013 | OFX-013-ERR-04 | Transcript segment not found. |
| OFX-014 | OFX-014-ERR-01 | Invalid user or department ID for permission grant. |
| OFX-014 | OFX-014-ERR-02 | Meeting permissions not found. |
| OFX-014 | OFX-014-ERR-03 | Only host can change granular permissions. |
| OFX-014 | OFX-014-ERR-04 | Summary exceeds maximum character limit. |
| OFX-014 | OFX-014-ERR-05 | Summary record not found to update. |
| OFX-015 | OFX-015-ERR-01 | AI failed to generate email draft. |
| OFX-015 | OFX-015-ERR-02 | Missing required follow-up context for AI draft. |
| OFX-017 | OFX-017-ERR-01 | New password does not meet security requirements. |
| OFX-019 | OFX-019-ERR-01 | Invalid privacy setting value. |
| OFX-020 | OFX-020-ERR-01 | Blackout date must be in the future. |
| OFX-020 | OFX-020-ERR-02 | Invalid availability schedule (overlap detected). |
| OFX-021 | OFX-021-ERR-01 | External webhook verification failed. |
| OFX-021 | OFX-021-ERR-02 | Failed to connect with integration provider. |
| OFX-022 | OFX-022-ERR-01 | Google API service currently unreachable. |
| OFX-022 | OFX-022-ERR-02 | Google Drive authorization expired. |
| UKET-001 | UKET-001-ERR-01 | Invalid device token. |
| UKET-002 | UKET-002-ERR-01 | Failed to load signage content. |
| UKET-004 | UKET-004-ERR-01 | Appointment time has not arrived yet. |
| UKET-004 | UKET-004-ERR-02 | Guest has already checked out. |
| UKET-004 | UKET-004-ERR-03 | Invalid or expired QR code. |
| UKET-005 | UKET-005-ERR-01 | Appointment time has not arrived yet. |
| UKET-005 | UKET-005-ERR-02 | Guest has already checked out. |
| UKET-005 | UKET-005-ERR-03 | Invalid or expired QR code. |
| UKET-006 | UKET-006-ERR-01 | Walk-in visitor failed. Identity photo required. |
| UKET-006 | UKET-006-ERR-02 | Walk-in visits disabled. |
| UKET-007 | UKET-007-ERR-01 | Missing vendor identification details. |
| UKET-008 | UKET-008-ERR-01 | Host notification failed. Slack connection error. |
| UKET-008 | UKET-008-ERR-02 | Host notification failed. Teams API error. |
| UKET-009 | UKET-009-ERR-01 | Signaling connection timeout. |
| UKET-010 | UKET-010-ERR-01 | Map resource not found for this room. |
| ADMX-032 | ADMX-032-ERR-01 | Word cannot be empty. |
| ADMX-033 | ADMX-033-ERR-01 | Select at least one word to approve or reject. |
| OFX-007 | OFX-007-ERR-01 | Folder name already exists in this directory. |
| OFX-007 | OFX-007-ERR-02 | Cannot delete folder containing subfolders or meetings. |
