# DELETE /admin/rooms/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Delete Meeting Room |
| Endpoint | /admin/rooms/:id |
| Method | DELETE |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Unique room identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of rooms. |
| 2. Dependency Check | - Verify if room has active reservations or future bookings. <br> - Return **400 Bad Request** with specific Message ID if dependent data exists. |
| 3. Data Deletion | - Soft delete (set `deleted_at`) record in the `meeting_rooms` table. |
| 4. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-009-SUC-02" }` |
| Denied (400) | `{ "success": false, "message": "ADMX-010-ERR-04" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
