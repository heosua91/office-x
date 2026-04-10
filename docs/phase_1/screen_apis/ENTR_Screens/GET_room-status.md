# GET /room/:id/status

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Room Status and Schedule |
| Endpoint | /room/:id/status |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String (UUID) | 〇 | The unique identifier of the meeting room. |

### Query Parameters
None.

### Request Parameters (Payload)
None.

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `id` is a valid UUID. |
| 2. Data Acquisition & Verification | - Retrieve room details (Name, Mode) from `meeting_rooms`. <br> - Query `meetings` for all records where `meeting_room_id = id` and `start_time` is today. <br> - Join with `users` (Host) and `meeting_participants` if needed. |
| 3. State Check | - Identify the current state based on current time: <br> &nbsp;&nbsp; - Ongoing: `start_time <= NOW <= end_time`. <br> &nbsp;&nbsp; - Upcoming: `start_time > NOW`. |
| 4. Update Processing | None (Read-only operation). |
| 5. Response Return | - Return **200 OK** with room info and a list of reservations. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "room_name": "Room A", "is_multi_device": false, "current_meeting": null, "schedule": [ { "id": "m1", "title": "Sales Review", "start": "2026-04-09T10:00:00", "end": "2026-04-09T11:00:00", "host": "John Doe" } ] } }` |
| Error (400) | `{ "success": false, "message": "ENTR-002-ERR-01" }` |
