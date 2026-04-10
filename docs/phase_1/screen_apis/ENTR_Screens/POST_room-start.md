# POST /room/:id/start

### Item
| Item | Description |
| :--- | :--- |
| API Name | Start Meeting |
| Endpoint | /room/:id/start |
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
| meeting_id | String (UUID) | － | Required if entering a pre-scheduled meeting. |
| title | String | － | Required for Quick Booking. |
| meeting_type | String | － | 'internal' or 'customer'. |
| participants | Array[UUID] | － | List of internal user IDs. |
| duration_minutes | Number | － | Planned duration for Quick Booking. |
| recording_enabled | Boolean | 〇 | Whether to start recording. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - If `meeting_id` is null, ensure `title`, `duration_minutes` are provided. <br> - Return **400 Bad Request** if logic fails. |
| 2. Data Acquisition & Verification | - If `meeting_id` is provided, fetch from `meetings`. <br> - If `meeting_id` is null (Quick Booking): <br> &nbsp;&nbsp; - Insert new record into `meetings` with status 'ongoing'. <br> &nbsp;&nbsp; - Associate with `meeting_room_id = id`. |
| 3. State Check | - If joining a scheduled meeting, verify that `NOW` is within the allowed start window (e.g., within 15 mins of `start_time`). <br> - Return **400 Bad Request** (ENTR-003-ERR-01) if too early. |
| 4. Update Processing | - Update `meetings.status` to 'ongoing'. <br> - If `recording_enabled = TRUE`, initialize `meeting_transcripts` and `meeting_recordings`. |
| 5. Response Return | - Return **200 OK** with the `meeting_id`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "meeting_id": "uuid-1234", "status": "ongoing" } }` |
| Error (400) | `{ "success": false, "message": "ENTR-003-ERR-01" }` |
