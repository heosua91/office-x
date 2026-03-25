# GET /admin/master/:type

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Master Data List |
| Endpoint | /admin/master/:type |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| type | String | 〇 | Master data type: `DEPARTMENT`, `FLOOR`, `VENDOR`, `PURPOSE` |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate if `:type` is within the allowed list. |
| 2. Data Acquisition | - Fetch all records from the corresponding table (e.g., `departments` if type is `DEPARTMENT`) filtered by `company_id`. |
| 3. Response Return | - Return the list of records sorted by `sort_order`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 1, "name": "Marketing", "sort_order": 1 }, ...] }` |
