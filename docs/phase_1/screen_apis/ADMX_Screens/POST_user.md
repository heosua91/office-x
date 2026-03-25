# POST /admin/users

### Item
| Item | Description |
| :--- | :--- |
| API Name | Register User |
| Endpoint | /admin/users |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | 〇 | User's full name |
| email | String | 〇 | Official work email |
| employee_id | String | - | Company employee code |
| department_id | Number | 〇 | ID from Master Data |
| role | String | 〇 | 'admin' or 'user' |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check mandatory fields. <br> - Check if email is valid and doesn't exist in system. |
| 2. Data Acquisition & Verification | - Verify current user count doesn't exceed `user_slot_limit` of the company. |
| 3. Update Processing | - Create record in `users` table. <br> - Generate temporary password or invite link. <br> - Trigger welcome email. |
| 4. Response Return | - Return **201 Created** with user ID. |

### Response
| Case | Content |
| :--- | :--- |
| Success (201 Created) | `{ "id": "uuid-here", "message": "ADMX-005-SUC-01" }` |
| Over Limit (403 Forbidden)| `{ "error": "limit_exceeded", "message": "ADMX-004-ERR-03" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
