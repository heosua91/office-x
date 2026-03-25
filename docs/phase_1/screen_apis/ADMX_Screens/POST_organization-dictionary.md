# POST /admin/dictionary

### Item
| Item | Description |
| :--- | :--- |
| API Name | Create Dictionary Term |
| Endpoint | /admin/dictionary |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| before | String | 〇 | Original/Miss-transcribed text. |
| after | String | 〇 | Corrected text for replacement. |
| is_approved | Boolean | - | Default: true for manual creation. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `before` and `after` strings. <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Persistence | - Insert new record into the `dictionary_entries` table with current `company_id`. |
| 3. Response Return | - Return **200 OK** with the record ID. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 50, "before": "officex", "after": "OfficeX", "message": "ADMX-032-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-032-ERR-01" }` |
