# GET /office/customers/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Client Profile Details |
| Endpoint | `/office/customers/:id` |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String | 〇 | Target Client Company UUID |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `id` is a valid UUID format. <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Acquisition & Verification | - Retrieve core metadata from `client_companies` where `id` matches path parameter and `company_id` matches current user's session. <br> - Fetch visit history from `visit_logs` and `meetings` tables associated with the client. <br> - Retrieve latest AI insights from `meeting_summaries` and `action_items` associated with the most recent meetings. |
| 3. State Check | - Return **404 Not Found** with `SYS-000-ERR-03` if the client record does not exist or belongs to another company. |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Construct a nested JSON response including profile info, meeting timeline, and AI-driven insights. <br> - Return **200 OK**. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "profile": { "company_name": "Acme Corp", "address": "...", "phone": "...", "pic_name": "...", "total_visits": 12, "invite_token_url": "..." }, "timeline": [ { "meeting_id": "...", "date": "...", "title": "...", "format": "...", "has_transcription": true, "host_name": "..." } ], "latest_insights": { "meeting_id": "...", "summary": "...", "todos": [ { "id": "...", "task": "...", "status": "pending" } ] } } }` |
| Error (400 / 404) | `{ "success": false, "message": "OFX-011-ERR-01" }` |
