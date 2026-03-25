# PATCH /admin/billing/ai-quota/settings

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update AI Quota Monitoring Settings |
| Endpoint | /admin/billing/ai-quota/settings |
| Method | PATCH |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| is_hard_limit | Boolean | - | `true` to stop at limit, `false` to move to postpaid. |
| threshold | Number | - | Notify target threshold (e.g. 0.8 for 80%). |
| behavior | String | - | `warn_at_limit`, `hard_stop`. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required field formats (e.g. Boolean/Number/Enum). |
| 2. Data Persistence | - Update `ai_usage_limit_mode` or quotas records in `companies` table. |
| 3. Response Return | - Return **200 OK** indicating update success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-027-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
