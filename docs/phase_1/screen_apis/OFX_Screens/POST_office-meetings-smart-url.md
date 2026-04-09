# POST /office/meetings/smart-url

### Item
| Item | Description |
| :--- | :--- |
| API Name | Generate Smart Meeting URL |
| Endpoint | `/office/meetings/smart-url` |
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
| client_company_name | String | 〇 | Target client company name |
| title | String | 〇 | Meeting title |
| format | String | 〇 | `offline` or `online` |
| duration_minutes | Number | 〇 | Duration of the meeting |
| participant_ids | Array | 〇 | List of internal staff UUIDs |
| ai_template_id | String | － | Optional AI template UUID |
| auto_secure_room | Boolean | － | Automatically book a room |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required fields. <br> - Return **400 Bad Request** with `SYS-000-ERR-05` if missing. |
| 2. Data Acquisition & Verification | - Look up `client_companies` by name. <br> - If not found, create a new client entry dynamically. |
| 3. State Check | - (None specifically, flows into creation) |
| 4. Update Processing | - Generate a unique `invite_token` (UUID). <br> - Insert a pending record into `meetings` with `status` = 'scheduled' (pre-booking state). <br> - Associate internal participants in `meeting_participants`. |
| 5. Response Return | - Construct the full `invite_token_url` for sharing. <br> - Return **200 OK**. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "meeting_id": "...", "invite_token": "...", "invite_token_url": "...", "client_company_id": "..." } }` |
| Error (400) | `{ "success": false, "message": "OFX-003-ERR-01" }` |
