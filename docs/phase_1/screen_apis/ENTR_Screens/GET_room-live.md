# GET /room/:id/live

### Item
| Item | Description |
| :--- | :--- |
| API Name | Real-time Meeting Sync |
| Endpoint | /room/:id/live |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String (UUID) | 〇 | The unique identifier of the meeting room. |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| transport | String | 〇 | 'websocket' or 'sse'. |

### Request Parameters (Payload)
None.

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate `id` and `transport`. |
| 2. Data Acquisition & Verification | - Authenticate device token. <br> - Fetch current meeting context (Subject, Timer, Agendas). |
| 3. State Check | - Perform check to see if the session is alive in Redis/Database. |
| 4. Update Processing | - Upgrade connection to WebSocket. <br> - Subscribe to meeting channel (Pub/Sub). <br> - On STT background worker completion, push new `transcript_segments` to the stream. |
| 5. Response Return | - Continuous stream of events (JSON). |

### Response
| Case | Content |
| :--- | :--- |
| Success (101 Switching)| `{ "type": "transcript", "data": { "text": "Hello world", "speaker": "John" } }` |
| Error (400) | `{ "success": false, "message": "ENTR-009-ERR-03" }` |
