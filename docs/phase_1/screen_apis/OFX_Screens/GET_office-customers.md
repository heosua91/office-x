# GET /office/customers

### Item
| Item | Description |
| :--- | :--- |
| API Name | List Client Companies |
| Endpoint | `/office/customers` |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| search | String | － | Filter by company name or PIC |
| page | Number | － | Page number for pagination |
| size | Number | － | Items per page |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate pagination parameters (`page`, `size`) if provided. <br> - Return **400 Bad Request** if parameters are invalid. |
| 2. Data Acquisition & Verification | - Query `client_companies` table filtered by current user's `company_id`. <br> - Apply `search` filter on `name` or contact fields if provided. <br> - Perform dynamic aggregation to calculate `total_visits` from `visit_logs` and find `latest_meeting_date` from `meetings`. |
| 3. State Check | - (None specifically, empty list if no results) |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with a paginated list of client companies including aggregate visit metrics. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "total": 54, "items": [ { "client_company_id": "...", "company_name": "Acme Corp", "address": "...", "telephone": "...", "pic_name": "Tanaka", "total_visits": 12, "invite_token_url": "...", "latest_meeting_date": "2026-03-15T15:00:00Z" } ] } }` |
| Error (400) | `{ "success": false, "message": "OFX-010-ERR-02" }` |
