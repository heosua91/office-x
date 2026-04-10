# POST /room/:id/seats

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Room Seat Layout |
| Endpoint | /room/:id/seats |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String (UUID) | 〇 | The unique identifier of the meeting room. |

### Query Parameters
None.

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| seating_data | Array[Object] | 〇 | List of `{ participant_id, seat_position }`. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Ensure `seating_data` is an array and contains required fields. |
| 2. Data Acquisition & Verification | - Identify the active meeting for the room `id`. <br> - Verify all `participant_id` values exist in `meeting_participants` for that meeting. |
| 3. State Check | None. |
| 4. Update Processing | - Batch update `seat_position` column in `meeting_participants` table. <br> - Trigger WebSocket broadcast to all child devices to sync UI. |
| 5. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "Seats updated successfully" }` |
| Error (400) | `{ "success": false, "message": "ENTR-006-ERR-01" }` |
