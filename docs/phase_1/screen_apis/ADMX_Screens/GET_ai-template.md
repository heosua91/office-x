# GET /admin/ai-templates/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get AI Template Detail |
| Endpoint | /admin/ai-templates/:id |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Target template identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target record. |
| 2. Data Acquisition | - Map and fetch full prompt strings and metadata. |
| 3. Response Return | - Return the full template object. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 1, "name": "Basic Summary", "prompt": "Identify attendees, topics, and actions...", "is_default": true, "type": "summary" }` |
