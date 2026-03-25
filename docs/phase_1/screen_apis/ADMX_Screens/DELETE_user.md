# DELETE /admin/users/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Deactivate/Delete User |
| Endpoint | /admin/users/:id |
| Method | DELETE |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String / Number | 〇 | Target user identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for existence of user in the same `company_id`. |
| 2. Dependency Check | - Verify if user has active responsibilities (e.g., active meeting host, room owner). <br> - Return **400 Bad Request** with specific Message ID if dependent data exists. |
| 3. Data Deletion | - Soft delete (set `deleted_at` or `status='inactive'`) record in the `users` table. |
| 4. Response Return | - Return **200 OK** status showing successful deletion. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-006-SUC-02" }` |
| Denied (400) | `{ "success": false, "message": "ADMX-010-ERR-04" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
