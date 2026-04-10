# PATCH /tng/companies/:id/quota

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Company Quota and Details |
| Endpoint | /tng/companies/:id/quota |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Company ID to update |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| company_name | String | 〇 | Company Name |
| address | String | 〇 | Physical Address |
| representative_name | String | 〇 | Representative Name |
| phone_number | String | 〇 | Phone Number |
| email | String | 〇 | Primary contact email |
| payment_method | String | 〇 | Credit Card, Bank Transfer, Invoice |
| plan_id | Number | 〇 | Assigned `subscription_plans` ID |
| free_user_quota | Number | 〇 | Override default user limits |
| ai_summary_quota | Number | 〇 | Override AI minute limit |
| ai_overage_unit_price | Number | 〇 | Rate per overage minute |
| discount_type | String | 〇 | None, Fixed, or Percentage |
| specific_discount | Number | - | Required if discount_type is not None |
| next_contract_date | String | - | Expected next renewal date |
| memo | String | - | Internal Notes |
| notify_user | Boolean | - | If true, trigger notification email |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for mandatory fields and format constraints (e.g., email format, negative quotas). <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Acquisition & Verification | - Fetch `companies` record by `id`. <br> - Validate TNG Admin permissions. <br> - Check if `email` is unique across other companies if changed. |
| 3. State Check | - Ensure `plan_id` corresponds to a valid entry in `subscription_plans`. <br> - Validate that future dates are legally formatted. |
| 4. Update Processing | - Update `companies` table replacing demographic and quota override columns. <br> - If `notify_user` is true, queue an email alert via SMTP broker to the tenant root address. |
| 5. Response Return | - Return **200 OK** indicating successful override. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "message": "S001"<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E006"<br>}``` |

---
