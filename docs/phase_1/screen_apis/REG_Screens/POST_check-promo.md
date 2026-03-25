# POST /auth/register/check-promo

### Item
| Item | Description |
| :--- | :--- |
| API Name | Validate Promotion Code |
| Endpoint | /auth/register/check-promo |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| code | String | 〇 | The promotion code to validate |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `code` is provided and follows alphanumeric format. <br> - Return **400 Bad Request** if missing. |
| 2. Data Acquisition & Verification | - Query the `promo_codes` table for a record matching the `code`. <br> - Return **404 Not Found** or 400 if code does not exist. |
| 3. State Check | - Check if `is_active` is TRUE. <br> - Check if `expires_at` is in the future. <br> - Return **400 Bad Request** if the code is inactive or expired. |
| 4. Response Return | - Return **200 OK** with `discount_type`, `discount_value`, and a success message. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "valid": true, "discount_type": "percentage", "discount_value": 10, "message": "REG-007-SUC-01" }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-007-ERR-04" }` |
