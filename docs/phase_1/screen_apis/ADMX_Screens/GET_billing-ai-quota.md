# GET /admin/billing/ai-quota

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get AI Quota Summary |
| Endpoint | /admin/billing/ai-quota |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Aggregate | - Sum `usage_minutes` from `usage_logs` for current billing period of `company_id`. <br> - Fetch `ai_usage_limit_hours` from `companies`. |
| 2. Response Return | - Return fixed, prepaid, and postpaid consumption stats. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "total_minutes": 1200, "used": 900, "remaining": 300, "prepaid": 500, "postpaid": 0 }` |
