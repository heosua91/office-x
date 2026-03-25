# GET /admin/rooms/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Meeting Room Detail |
| Endpoint | /admin/rooms/:id |
| Method | GET |

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
| 2. Data Acquisition | - Fetch details from the `meeting_rooms` table. <br> - Join with `floors` or `master_data`. <br> - Fetch current tablet pairing status. |
| 3. Response Return | - Return the room JSON with `map_image_url`, floor, capacity, and pairing details. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 1, "name": "Room A", "floor_id": 3, "capacity": 10, "equipment_ids": [1, 2, 5], "map_image_url": "https://cdn.example.com/map1.png", "pairing_code": "X9A72Z" }` |
