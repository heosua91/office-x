# POST /reception/calls/signal

### Item
| Item | Description |
| :--- | :--- |
| API Name | WebRTC signaling for Audio/Video calls |
| Endpoint | /reception/calls/signal |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| meeting_id | UUID | 〇 | Associated meeting context |
| type | String | 〇 | "offer", "answer", "candidate" |
| payload | JSON | 〇 | WebRTC SDP or ICE candidate data |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check `meeting_id`, `type`, and valid JSON `payload`. <br> - Return 400 Bad Request if missing fields. |
| 2. Data Acquisition & Verification | - Verify `meeting_id` exists and linked user holds active session or tablet holds session. |
| 3. State Check | - No complex database transaction needed; this endpoint strictly acts as an ultra-fast WebRTC signaling bridge. |
| 4. Update Processing | - Forward the signaling JSON payload (SDP offer/answer or ICE candidate) immediately to the intended recipient's active WebSocket connection. <br> - Must utilize a fast pub/sub mechanism (e.g., Redis Pub/Sub) since the host might be connected to a different server instance than the tablet's load balancer node. |
| 5. Response Return | - Return **200 OK** indicating signal accepted and relayed. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true }` |
| Error (400) | `{ "success": false, "message": "ERR-RTC-001" }` |
