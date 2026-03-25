# DELETE /admin/master/:type/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Delete Master Data Record |
| Endpoint | /admin/master/:type/:id |
| Method | DELETE |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| type | String | 〇 | Master data type: `DEPARTMENT`, `FLOOR`, `VENDOR`, `PURPOSE` |
| id | Number | 〇 | Master record identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for existence of record `id` and type validity. |
| 2. Dependency Check | - Ensure record is not in use (e.g. `DEPARTMENT` used by `users`, `FLOOR` used by `meeting_rooms`). <br> - Return **400 Bad Request** if record is in use. |
| 3. Data Deletion | - Hard delete (or soft delete based on schema) from table. |
| 4. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-010-SUC-02" }` |
| Denied (400) | `{ "success": false, "message": "ADMX-010-ERR-04" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
