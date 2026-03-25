# POST /admin/users/import

### Item
| Item | Description |
| :--- | :--- |
| API Name | Bulk Import Users via CSV |
| Endpoint | /admin/users/import |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| file | Binary / CSV | 〇 | CSV file matching company template. |
 
### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Extract CSV file from `multipart/form-data`. <br> - Perform format and size validation. <br> - Return **400 Bad Request** if file is corrupted. |
| 2. Queue Trigger | - Create a record in `csv_import_logs` with current admin `user_id`, `company_id`, and `status = 'processing'`. <br> - Push a message to the `import-worker` queue containing the `file_key` and `log_id`. |
| 3. Worker Background Logic | - **Parse**: Download CSV and iterate through rows. <br> - **Validate**: Check email syntax and verify uniqueness against the `users` table. <br> - **Persistence**: Perform a bulk INSERT into the `users` table for all valid rows. |
| 4. Finalization & Reporting| - UPDATE `csv_import_logs` status to `'completed'` or `'error'`. <br> - Record total count in `success_count` and log failed rows in `error_log` JSON field. |
| 5. Response Return | - Return **202 Accepted** with a `job_id` for client-side status polling (ADMX-003). |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "job_id": "job-uuid-123", "message": "ADMX-003-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-003-ERR-02" }` |
