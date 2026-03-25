# POST /admin/billing/promo/validate

### Item
| Item | Description |
| :--- | :--- |
| API Name | Validate Promotion Code |
| Endpoint | /admin/billing/promo/validate |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| code | String | 〇 | Coupon/Discount code to check. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `code` field. |
| 2. Promotion Check | - Verify `code` exists in the `promo_codes` table. <br> - Check expiration date and remaining uses. <br> - Return **400 Bad Request** if invalid or expired. |
| 3. Response Return | - Return **200 OK** with details of the discount applied. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 5, "code": "WELCOME2026", "discount_percent": 10, "valid_until": "2026-12-31", "message": "REG-007-SUC-01" }` |
| Failure (400) | `{ "success": false, "message": "ADMX-022-ERR-01" }` |
