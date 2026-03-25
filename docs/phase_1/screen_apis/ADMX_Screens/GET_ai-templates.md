# GET /admin/ai-templates

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get AI Template List |
| Endpoint | /admin/ai-templates |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Retrieval | - Fetch both system-level and company-specific templates from the `meeting_ai_templates` table. |
| 2. Response Return | - Return the array of templates with metadata (name, type, is_default). |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 1, "name": "Basic Summary", "is_default": true, "type": "summary" }, ...] }` |
