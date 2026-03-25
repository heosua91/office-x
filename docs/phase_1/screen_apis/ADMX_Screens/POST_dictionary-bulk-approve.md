# POST /admin/dictionary/bulk-approve

### Item
| Item | Description |
| :--- | :--- |
| API Name | Bulk Approve Dictionary Terms |
| Endpoint | /admin/dictionary/bulk-approve |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| ids | Array (Number) | 〇 | IDs to be approved. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of record IDs. |
| 2. Bulk State Update | - For each ID, perform UPDATE on `dictionary_entries` table with status `is_approved = true`. |
| 3. Response Return | - Return **200 OK** indicating approval result. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "approved_count": 10, "message": "ADMX-033-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
