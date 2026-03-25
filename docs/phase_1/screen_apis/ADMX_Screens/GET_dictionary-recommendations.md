# GET /admin/dictionary/recommendations

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Dictionary Recommendations |
| Endpoint | /admin/dictionary/recommendations |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Retrieval | - Retrieve records from the `dictionary_entries` table with status `is_approved = false` and `frequency_count > threshold`. <br> - Join with `usage_logs` to fetch recently used contexts or frequency. |
| 2. Response Return | - Return the list of suggested words for approval. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 1, "before": "officex", "after": "OfficeX", "frequency_count": 5 }, ...] }` |
