# PATCH /admin/billing/status

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Billing & Company Info |
| Endpoint | /admin/billing/status |
| Method | PATCH |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | - | Company name. |
| address | String | - | Street address. |
| contact_person | String | - | Lead contact name. |
| phone | String | - | Work phone number. |
| email | String | - | Official represent contact email. |
| consent_text | String | - | Popup message for recording agree. |
| ai_usage_limit_mode | String | - | `unlimited` or `limit_set`. |
| ai_usage_limit_hours | Number | - | Limit hours if `limit_set`. |
| ai_alert_destinations| String | - | Notify target for threshold alert. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required field formats (e.g. Email/Phone). <br> - Return **400 Bad Request** on failure. |
| 2. Data Persistence | - Update `companies` table for the corresponding `company_id`. |
| 3. Response Return | - Return **200 OK** indicating update status. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-018-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-018-ERR-01" }` |
