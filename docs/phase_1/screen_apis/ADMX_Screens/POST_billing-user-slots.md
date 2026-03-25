# POST /admin/billing/user-slots

### Item
| Item | Description |
| :--- | :--- |
| API Name | Purchase Additional User Slots |
| Endpoint | /admin/billing/user-slots |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| count | Number | 〇 | Number of additional slots to purchase (must be ≥ 1). |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify that `count` is a positive integer. <br> - Return **400 Bad Request** if validation fails. |
| 2. Simulation & Quota Check | - Retrieve current plan and user limits from the `companies` and `subscription_plans` tables. <br> - Calculate pro-rated cost for the remaining days of the current billing cycle. |
| 3. Data Persistence | - Create a new record in the `subscription_requests` table with status `pending` (or `approved` if auto-payment is enabled). <br> - Update the `user_limit_override` in the `companies` table if approved. |
| 4. Notification | - Trigger an internal notification to TNG Admin for approval (if manual). |
| 5. Response Return | - Return **200 OK** with request ID and estimated cost. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "request_id": 45, "pro_rated_fee": 1500, "message": "ADMX-004-1-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-004-1-ERR-02" }` |
