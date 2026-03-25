# GET /admin/billing/ai-quota/settings

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get AI Quota Settings |
| Endpoint | /admin/billing/ai-quota/settings |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Retrieval | - Fetch `ai_usage_limit_mode`, `ai_usage_limit_hours`, and `ai_usage_notify_threshold` from the `companies` and `quotas` tables. |
| 2. Response Return | - Return current monitoring behavior. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 1, "is_hard_limit": false, "threshold": 0.8, "behavior": "warn_at_threshold" }` |
