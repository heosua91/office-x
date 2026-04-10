# POST /tng/promo-codes

### Item
| Item | Description |
| :--- | :--- |
| API Name | Create/Manage Promotion Codes |
| Endpoint | /tng/promo-codes |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| code | String | 〇 | String format of the code (e.g. EARLYBIRD) |
| discount_type | String | 〇 | FIXED or PERCENT |
| value | Number | 〇 | Value to apply |
| max_uses | Number | - | Nullable. Limits number of uses. |
| expires_at | String | - | Nullable. Must be future timestamp. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `code` is unique constraint compliant across `promo_codes`. <br> - Return **400 Bad Request** if discount logic is ill-formed (e.g., >100 percent). |
| 2. Data Acquisition & Verification | - Authenticate TNG Admin JWT. |
| 3. State Check | - None explicitly. |
| 4. Update Processing | - Insert a new row into `promo_codes`. <br> - Dispatch an API call to Stripe API to generate the linked Coupon constraint. |
| 5. Response Return | - Return **200 OK** indicating the promotion code has been successfully recorded. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "message": "S001"<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E006"<br>}``` |

---
