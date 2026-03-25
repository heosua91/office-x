# GET /admin/dictionary

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Organization Dictionary List |
| Endpoint | /admin/dictionary |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| search | String | - | Search by key word or after-correction string. |
| is_approved| Boolean | - | Filter for approved/rejected/pending entries. |
| page | Number | - | Default: 1 |
| limit | Number | - | Default: 20 |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Acquisition | - Fetch records from the `dictionary_entries` table for current `company_id`. |
| 2. Response Return | - Return the list of terms with their frequency count and approval status. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 1, "before": "officex", "after": "OfficeX", "is_approved": true, "frequency_count": 10 }, ...] }` |
