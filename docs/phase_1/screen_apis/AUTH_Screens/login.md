# POST /auth/login

### Item
| Item | Description |
| :--- | :--- |
| API Name | User/Admin Login (Đăng nhập Người dùng/Quản trị viên) |
| Endpoint | /auth/login |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| username | String | 〇 | Email for Screen AUTH-001 or Account ID for AUTH-002 |
| password | String | 〇 | Plaintext password |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `username` and `password` are present and not empty. <br> - Validate email format if originating from standard login. |
| 2. Data Acquisition & Verification | - Search for user in the `users` table where `email` matches `username` AND `deleted_at` is NULL. <br> - Also check the `role` to verify if the account matches the requested context (e.g., TNG Admin check for AUTH-002). |
| 3. State Check | - Ensure user `status` is 'active'. <br> - Return **401 Unauthorized** if the user is inactive or password verification fails. |
| 4. Update Processing | - Log the access in `access_logs` (IP, Timestamp). <br> - Update `user_id` context for the session. |
| 5. Response Return | - Generate JWT containing `id`, `company_id`, and `role`. <br> - Return **200 OK** with the token and user metadata. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "token": "...", "user": { "role": "admin",... }, "redirect_to": "/admin/dashboard" }` |
| Error (401) | `{ "success": false, "message_id": "AUTH-001-ERR-01", "message": "Invalid ID or Password" }` |
