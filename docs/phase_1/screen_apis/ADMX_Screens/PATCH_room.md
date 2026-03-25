# PATCH /admin/rooms/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Meeting Room |
| Endpoint | /admin/rooms/:id |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Unique room identifier. |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | - | New room name. |
| floor_id | Number | - | New floor ID. |
| capacity | Number | - | New maximum attendees. |
| equipment_ids| Array | - | New list of furniture/gadgets. |
| mode | String | - | `single` or `multi-device`. |
| map_image | String (File/B64)|- | New guidance map image. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of rooms. |
| 2. File Upload | - If `map_image` is provided, remove old file from the storage backend (e.g., S3). <br> - Upload new file and update record. |
| 3. Data Persistence | - Perform UPDATE on `meeting_rooms` table. |
| 4. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-009-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
