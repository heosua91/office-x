# POST /auth/password-reset/confirm

### Item
| Item | Description |
| :--- | :--- |
| API Name | Password Reset Confirmation |
| Endpoint | /auth/password-reset/confirm |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| token | String | 〇 | Reset token from the link |
| password | String | 〇 | New password (8-32 chars, mix of letters/numbers) |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for presence of `token` and `password`. <br> - Perform complexity check on `password`. |
| 2. Data Acquisition & Verification | - Look up the `token` in the `verification_codes` table. <br> - Ensure `purpose` is 'password_reset'. |
| 3. State Check | - Verify that `expires_at` is in the future. <br> - Verify that `used_at` is NULL. <br> - Return **400 Bad Request** if token invalid/used/expired. |
| 4. Update Processing | - Retrieve the corresponding user for the token's email. <br> - Hash the new `password` and update the `users` table. <br> - Mark the token as used in the `verification_codes` table (`used_at` = NOW()). |
| 5. Response Return | - Return **200 OK** on successful update. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "[AUTH-005-SUC-01]" }` |
| Error (400) | `{ "success": false, "message": "[AUTH-005-ERR-06]" }` |
| Error (422) | `{ "success": false, "message": "[AUTH-005-ERR-05]" }` |
