# POST /admin/dictionary/recommendations/exclude

### Item
| Item | Description |
| :--- | :--- |
| API Name | Exclude Dictionary Recommendations |
| Endpoint | /admin/dictionary/recommendations/exclude |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| ids | Array (Number) | 〇 | IDs to be excluded. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of record IDs. |
| 2. Exclusion Strategy | - Mark specific records in `dictionary_entries` (e.g. `is_approved = false` but hidden) or delete them to hide from further review. |
| 3. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-033-SUC-02" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
