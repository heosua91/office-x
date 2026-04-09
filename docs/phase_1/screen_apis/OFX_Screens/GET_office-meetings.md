# GET /office/meetings

### Item
| Item | Description |
| :--- | :--- |
| API Name | List Meetings |
| Endpoint | `/office/meetings` |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| timeframe | String | － | `upcoming`, `past`, `all`. Default `upcoming`. |
| type | String | － | `external`, `internal`, `all`. Default `all`. |
| folder_id | String | － | Filter by internal folder UUID |
| search | String | － | Filter by title or participant names |
| limit | Number | － | Items per page |
| offset | Number | － | Pagination offset |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Sanitize query parameters and pagination offsets. <br> - Return **400 Bad Request** if parameter formats are incorrect. |
| 2. Data Acquisition & Verification | - Query `meetings` table joined with `meeting_participants`. <br> - Apply `timeframe` filters comparing `start_time` against current time. <br> - Filter by `folder_id` or `type` (external vs internal based on participant profiles) if specified. |
| 3. State Check | - Perform visibility check via `meeting_permissions`. <br> - If a meeting is marked as private or user lacks access, mask sensitive details or omit the record based on global company rules. |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with a paginated list of meetings, including a `permissions_masked` flag for UI handling. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "total": 120, "items": [ { "meeting_id": "...", "title": "Weekly Dept Review", "start_time": "...", "end_time": "...", "type": "internal", "status": "confirmed", "folder_id": "...", "location": "Room Alpha", "permissions_masked": false, "participants": [ { "user_id": "...", "name": "Yamada Taro" } ] } ] } }` |
| Error (400) | `{ "success": false, "message": "OFX-002-ERR-01" }` |
