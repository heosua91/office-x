# POST /admin/dictionary/import

### Item
| Item | Description |
| :--- | :--- |
| API Name | Import Dictionary Terms |
| Endpoint | /admin/dictionary/import |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| file | Binary / CSV | 〇 | CSV file with columns `before`, `after`. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check file validity (CSV/Encoding). <br> - Return **400 Bad Request** if file is corrupted. |
| 2. Queue Trigger | - Create an entry in a tracking log table with `status = 'processing'`. <br> - Push task `job_id` and `file_key` to background queue. |
| 3. Worker Background Logic | - **CSV Parsing**: Iterate through rows based on `before` and `after` columns. <br> - **Deduplication**: Verify if the `before` key already exists in `dictionary_entries`. <br> - **Persistence**: `INSERT` or `UPDATE` the `dictionary_entries` table. |
| 4. Outcome Tracking | - Update `import_logs` with final counts of successes/errors. <br> - Finalize state as `'completed'`. |
| 5. Response Return | - Return **200 OK** indicating import job has been accepted. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "total_imported": 450, "errors": 0, "message": "ADMX-003-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-003-ERR-02" }` |
