# POST /admin/settings/payment-methods

### Item
| Item | Description |
| :--- | :--- |
| API Name | Register Payment Method |
| Endpoint | /admin/settings/payment-methods |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| stripe_token | String | 〇 | Token from Stripe elements frontend. |
| holder_name | String | - | Name on the card. |
| billing_email | String | - | Email for invoicing. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `stripe_token`. <br> - Return **400 Bad Request** if missing. |
| 2. External Processing | - Communicate with Stripe API or Paid agent API to register the method for the company. |
| 3. Data Persistence | - Perform UPDATE/INSERT on `payment_methods` and `companies`. |
| 4. Response Return | - Return **200 OK** indicating registration success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-019-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-019-ERR-02" }` |
| Unauthorized (401) | `{ "success": false, "message": "SYS-000-ERR-04" }` |
