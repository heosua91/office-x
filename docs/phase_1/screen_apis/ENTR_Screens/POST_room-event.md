# POST /room/:id/event

### Item
| Item | Description |
| :--- | :--- |
| API Name | Log Meeting Event |
| Endpoint | /room/:id/event |
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
| event_type | String | 〇 | 'reaction', 'section_marker', 'pause', 'secret_start', etc. |
| content | String / JSON | － | Value for reaction (e.g., 'like') or marker meta. |
| timestamp | Number | 〇 | Offset from meeting start. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check `event_type` against allowed enum. |
| 2. Data Acquisition & Verification | - Identify active meeting for the device. |
| 3. State Check | - Ensure meeting status is 'ongoing'. |
| 4. Update Processing | - Insert event into `meeting_events` table. <br> - Broadcast event to all participants via Live Sync (GET /live). |
| 5. Response Return | - Return **200 OK**. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true }` |
| Error (400) | `{ "success": false, "message": "ENTR-009-ERR-02" }` |
