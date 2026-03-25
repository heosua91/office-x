# GET /admin/billing/status

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Billing & Company Status |
| Endpoint | /admin/billing/status |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Acquisition | - Fetch subscription plan from `companies` and `subscription_plans`. <br> - Fetch AI usage statistics from `usage_logs`. <br> - Fetch company profile (address, contact, consent_text). |
| 2. Response Return | - Return consolidated object with plan, usage, and profile data. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "company_name": "TQA Co., Ltd.", "current_plan": "Standard", "ai_usage": 15.5, "quota": 20, "consent_text": "Please agree to recording..." }` |
