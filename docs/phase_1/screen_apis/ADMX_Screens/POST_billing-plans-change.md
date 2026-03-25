# POST /admin/billing/plans/change

### Item
| Item | Description |
| :--- | :--- |
| API Name | Submit Plan Change Request |
| Endpoint | /admin/billing/plans/change |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| target_plan_id| Number | 〇 | ID of the new plan. |
| promo_code | String | - | Discount coupon string. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `target_plan_id`. <br> - Return **400 Bad Request** if plan does not exist. |
| 2. Promotion Check | - If `promo_code` exists, validate it via internal logic. |
| 3. Data Persistence | - Create a `subscription_requests` record for TNG Admin approval or auto-process if credit card is linked. |
| 4. Response Return | - Return **202 Accepted** or **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-022-SUC-01" }` |
| Invalid Code (400) | `{ "success": false, "message": "ADMX-022-ERR-01" }` |
