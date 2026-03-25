# PATCH /admin/users/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update User Details |
| Endpoint | /admin/users/:id |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String / Number | 〇 | Target user identifier. |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | - | New user name. |
| role | String | - | New role (`admin` / `user`). |
| department_id | Number | - | New department ID. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required fields and field formats. |
| 2. State Check | - Ensure user exists and matches the company context. |
| 3. Data Persistence | - Perform UPDATE on `users` table. |
| 4. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-006-SUC-01" }` |
| Unauthorized (401 / 403)| `{ "success": false, "message": "SYS-000-ERR-02" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
