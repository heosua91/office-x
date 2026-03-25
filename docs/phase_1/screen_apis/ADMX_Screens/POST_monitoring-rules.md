# POST /admin/monitoring/rules

### Item
| Item | Description |
| :--- | :--- |
| API Name | Create Automated Monitoring/Alert Rule |
| Endpoint | /admin/monitoring/rules |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | 〇 | Name of the rule. |
| rule_type | String | 〇 | Type of detection (e.g., `bulk_delete`, `failed_login`). |
| threshold | Number | 〇 | Trigger threshold count. |
| interval_minutes| Number | 〇 | Time window for evaluation. |
| notify_email | String | 〇 | Target email for alerts. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for mandatory fields: `name`, `rule_type`, `threshold`. |
| 2. Integrity Check | - Ensure `rule_type` is valid and `threshold` is within system limits. |
| 3. Data Persistence | - Insert new rule configuration into the `monitoring_rules` table. |
| 4. System Sync | - Notify the background monitoring worker to reload rule configurations. |
| 5. Response Return | - Return **202 Accepted** with the newly created rule ID. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 5, "status": "active", "message": "LOG-003-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
