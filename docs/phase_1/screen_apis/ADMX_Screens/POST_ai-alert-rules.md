# POST /admin/members/ai-settings

### Item
| Item | Description |
| :--- | :--- |
| API Name | Create AI Alert Rule |
| Endpoint | /admin/members/ai-settings |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| threshold | Number | 〇 | Percentage (e.g. 0.8 / 80%). |
| channel | String | 〇 | `email`, `slack`, `teams`. |
| target | String | - | Email address or Webhook URL. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `threshold` and `channel`. |
| 2. Integrity Check | - Verify webhook if `slack/teams` is selected. |
| 3. Data Persistence | - Insert new notification rule into `notification_settings` for `company_id`. |
| 4. Response Return | - Return **202 Accepted** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 1, "threshold": 0.8, "channel": "slack", "message": "ADMX-027-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-028-ERR-01" }` |
