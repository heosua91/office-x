# POST /auth/register/resend-code

### Item
| Item | Description |
| :--- | :--- |
| API Name | Resend OTP Code |
| Endpoint | /auth/register/resend-code |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | User's email address |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `email` is provided. <br> - Return **400 Bad Request** if missing. |
| 2. DB Verification | - Check if the `email` exists in the `users` table or is part of an ongoing registration flow. |
| 3. Old Code Invalidation | - Invalidate previous active codes for this email in the `verification_codes` table. |
| 4. New Code Generation | - Generate a new 6-digit verification code. <br> - Insert a new record into the `verification_codes` table with a new expiration time. |
| 5. Email Queue | - Push a task to the background email queue for SMTP delivery. |
| 6. Response Return | - Return **200 OK** status. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "REG-004-SUC-02" }` |
| Error (400 / 500) | `{ "success": false, "message": "REG-004-ERR-03" }` |
