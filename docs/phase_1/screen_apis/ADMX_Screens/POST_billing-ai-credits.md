# POST /admin/billing/ai-credits

### Item
| Item | Description |
| :--- | :--- |
| API Name | Purchase AI Credits (Prepaid) |
| Endpoint | /admin/billing/ai-credits |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| hours | Number | 〇 | Number of minutes to purchase. |
| billing_timing| String | - | Default: `now`. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check `hours` consistency (e.g. positive integer). |
| 2. External Payment | - Communicate with Stripe/Paid to authorize payment for the purchase. |
| 3. Data Persistence | - Create a `ai_credit_purchases` entry and update `usage_quotas` if success. |
| 4. Response Return | - Return **200 OK** indicating purchase completion. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 10, "minutes_added": 3000, "status": "completed", "message": "ADMX-026-SUC-01" }` |
| Failure (402) | `{ "success": false, "message": "REG-008-ERR-01" }` |
