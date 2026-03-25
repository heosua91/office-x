# GET /admin/rooms

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Meeting Room List |
| Endpoint | /admin/rooms |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Acquisition | - Retrieve all records from the `meeting_rooms` table for the current `company_id`. <br> - Join with the `floors` table for the floor name. |
| 2. Tablet Connection State | - Check if rooms have bound reception tablets or room tablets. |
| 3. Response Return | - Return the room list with details. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 1, "name": "Room A", "floor_name": "3F", "capacity": 10, "status": "active" }, ...] }` |
