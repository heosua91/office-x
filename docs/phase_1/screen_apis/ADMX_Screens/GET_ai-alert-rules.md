# GET /admin/members/ai-settings

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get AI Alert Notification Rules |
| Endpoint | /admin/members/ai-settings |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Retrieval | - Fetch current notification configurations from the `notification_settings` and `companies` tables. |
| 2. Response Return | - Return thresholds and channels (Email/Slack/Teams). |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "threshold": 0.5, "channel": "email" }, { "threshold": 0.8, "channel": "slack", "webhook_url": "..." }] }` |
