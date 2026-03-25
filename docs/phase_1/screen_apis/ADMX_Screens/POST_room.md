# POST /admin/rooms

### Item
| Item | Description |
| :--- | :--- |
| API Name | Create Meeting Room |
| Endpoint | /admin/rooms |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | 〇 | Room name. |
| floor_id | Number | 〇 | From Master Data. |
| capacity | Number | 〇 | Maximum attendees. |
| equipment_ids| Array | - | List of furniture/gadgets. |
| mode | String | 〇 | `single` or `multi-device`. |
| map_image | String (File/B64)|- | Optional guidance map image. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify all mandatory fields exist. |
| 2. File Upload | - If `map_image` is provided, upload it to the storage backend (e.g., S3). <br> - Update the `map_image_url` field for the room record. |
| 3. Data Persistence | - Insert new record into the `meeting_rooms` table. |
| 4. Pairing Generation | - Auto-generate a unique `pairing_code` (for tablet setup). <br> - Return the pairing code and room details. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 50, "name": "Room B", "pairing_code": "X9A72Z", "message": "ADMX-008-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
