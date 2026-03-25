# POST /admin/ai-templates

### Item
| Item | Description |
| :--- | :--- |
| API Name | Create AI Template |
| Endpoint | /admin/ai-templates |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | 〇 | Display name. |
| prompt | String | 〇 | LLM instruction text. |
| category | String | - | `summary`, `email`, `action_items`. |
| is_default | Boolean | - | Set as default for the company. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `name` and `prompt`. <br> - Return **400 Bad Request** if missing. |
| 2. Integrity Check | - If `is_default` is true, unset other defaults in the same category for the company. |
| 3. Data Persistence | - Insert new record into the `meeting_ai_templates` table. |
| 4. Response Return | - Return **202 Accepted** indicating success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 100, "name": "Sales Template", "message": "ADMX-031-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-031-ERR-01" }` |
