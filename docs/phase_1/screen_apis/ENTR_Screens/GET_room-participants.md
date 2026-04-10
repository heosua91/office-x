# GET /room/:id/participants

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Meeting Participants |
| Endpoint | /room/:id/participants |
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
| 1. Request Validation | - Check if `id` is a valid room UUID. |
| 2. Data Acquisition & Verification | - Identify the active or upcoming meeting linked to `id`. <br> - Retrieve participants from `meeting_participants` joined with `users` and `guests`. |
| 3. State Check | - Ensure data is only returned if there is a meeting occurring or about to start. |
| 4. Update Processing | None. |
| 5. Response Return | - Return **200 OK** with a list of participants including `id`, `name`, and `role`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": [ { "id": "u1", "name": "John Doe", "role": "organizer" }, { "id": "g1", "name": "Client A", "role": "attendee" } ] }` |
| Error (400) | `{ "success": false, "message": "ENTR-004-ERR-01" }` |
