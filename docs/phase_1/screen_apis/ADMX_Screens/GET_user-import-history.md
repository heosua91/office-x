# GET /admin/users/import/history

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Bulk Import History |
| Endpoint | /admin/users/import/history |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| page | Number | - | Default: 1 |
| limit | Number | - | Default: 20 |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Retrieval | - Retrieve all historic and current job records from the `csv_import_logs` table for the current `company_id`. |
| 2. Error Reporting | - Provide row counts (total, success, failed) and individual failure details. |
| 3. Response Return | - Return the array of history logs. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": "uuid-1", "date": "2026-03-10", "total": 100, "success": 95, "failed": 5, "status": "completed" }, ...] }` |
