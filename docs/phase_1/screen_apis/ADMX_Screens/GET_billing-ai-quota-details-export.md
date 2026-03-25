# GET /admin/billing/ai-quota/details/export

### Item
| Item | Description |
| :--- | :--- |
| API Name | Export AI Quota Audits to CSV |
| Endpoint | /admin/billing/ai-quota/details/export |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| start_date | String (Date) | - | Export period start. |
| end_date | String (Date) | - | Export period end. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check date range validity for company context. |
| 2. Data Retrieval | - Retrieve granular AI audits from `usage_logs`. |
| 3. CSV Generation | - Transform usage details into a CSV format. |
| 4. Response | - Stream result as a downloadable `.csv` file. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "binary_stream": "ai_quota_audit_2026_03.csv" }` |
