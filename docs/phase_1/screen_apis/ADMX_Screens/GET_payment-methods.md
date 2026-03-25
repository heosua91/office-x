# GET /admin/settings/payment-methods

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Payment Methods |
| Endpoint | /admin/settings/payment-methods |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Retrieval | - Fetch current card entries or bank details from the `payment_methods` and `companies` tables. |
| 2. PII Masking | - Mask credit card numbers (e.g. `**** **** **** 1234`). |
| 3. Response Return | - Return the current payment config. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 10, "type": "Credit Card", "brand": "Visa", "last4": "1234", "exp_month": 12, "exp_year": 2028 }` |
