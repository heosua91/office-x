# POST /auth/register/verify-code

### Item
| Item | Description |
| :--- | :--- |
| API Name | Verify OTP Code |
| Endpoint | /auth/register/verify-code |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | User's email address |
| code | String | 〇 | 6-digit verification code |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `email` and `code` are provided. <br> - Return **400 Bad Request** if missing. |
| 2. Data Acquisition & Verification | - Retrieve the record from the `verification_codes` table matching the `email` and `code`. <br> - Return **401 Unauthorized** if no matching record is found. |
| 3. State Check | - Check if `expires_at` is in the future and `used_at` is NULL. <br> - Return **400 Bad Request** if code is expired or used. |
| 4. Update Processing | - Update the `used_at` column in the `verification_codes` table. |
| 5. Response Return | - Return **200 OK**. Optionally return a temporary registration token (JWT) for subsequent steps. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "REG-004-SUC-01", "token": "temp_reg_token_xyz" }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-004-ERR-04" }` |
