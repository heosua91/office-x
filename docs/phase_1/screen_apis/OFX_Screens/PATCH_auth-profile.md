# PATCH /auth/profile

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update User Profile |
| Endpoint | /auth/profile |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| login_id | String | - | New email address / login ID |
| current_password | String | 〇 | Required to authenticate changes to sensitive data |
| new_password | String | - | New password hash (if changing password) |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `current_password` is provided. <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Acquisition & Verification | - Retrieve user record from `users` table. <br> - Compare `current_password` with stored hash. Return **401 Unauthorized** if mismatch. |
| 3. State Check | - If `login_id` is passed, check uniqueness against `users` table. <br> - Return **400 Bad Request** with ERR-CMN-001 if email format invalid or already exists. |
| 4. Update Processing | - Execute database updates for `email` and/or `password_hash` in `users` table. |
| 5. Response Return | - Return **200 OK** status indicating profile updated. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "SUC-001" }` |
| Error (400) | `{ "success": false, "message": "ERR-CMN-001" }` |
