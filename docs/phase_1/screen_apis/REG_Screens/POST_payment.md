# POST /auth/register/payment

### Item
| Item | Description |
| :--- | :--- |
| API Name | Register Payment Method |
| Endpoint | /auth/register/payment |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| company_id | String | 〇 | ID of the registering company |
| payment_method_type | String | 〇 | 'credit_card' or 'invoice' |
| card_details | Object | － | Required if type is 'credit_card'. |
| billing_details | Object | － | Required if type is 'invoice'. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate required fields based on `payment_method_type`. <br> - Return **400 Bad Request** if mandatory fields are missing. |
| 2. Data Acquisition & Verification | - Retrieve the company record from the `companies` table using `company_id`. |
| 3. State Check | - (Credit Card) Verify the payment token with the external payment gateway (e.g., Stripe/Paid). |
| 4. Update Processing | - Create or update a record in the `payment_methods` table linked to the `company_id`. <br> - Store provider-specific IDs (not full card numbers) and metadata. |
| 5. Response Return | - Return **200 OK** upon successful registration of the payment method. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": "payment_method_uuid", "message": "REG-008-SUC-01" }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-008-ERR-01" }` |
