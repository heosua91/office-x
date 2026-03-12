# POST /auth/password-reset/request

### Item
| Item | Description |
| :--- | :--- |
| API Name | Password Reset Request (Yêu cầu đặt lại mật khẩu) |
| Endpoint | /auth/password-reset/request |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | Registered email address |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify that the `email` field is provided and followed with correct email syntax. |
| 2. Data Acquisition & Verification | - Search for the user in the `users` table where `email` matches the input and `deleted_at` is NULL. |
| 3. State Check | - Check if the user is in 'active' or 'invited' status. <br> - Even if not found, consider success response policy to prevent email enumeration. |
| 4. Update Processing | - Generate a UUID token. <br> - Insert a record into the `verification_codes` table with `purpose` = 'password_reset' and an expiration of 1 hour. <br> - Queue a background task (SMTP worker) to send the reset URL email. |
| 5. Response Return | - Return **200 OK** indicating the request has been processed. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "If the email is registered, a reset link has been sent." }` |
| Error (400) | `{ "success": false, "message_id": "AUTH-003-ERR-01", "message": "Invalid email format" }` |
