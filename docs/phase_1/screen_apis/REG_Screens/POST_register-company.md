# POST /auth/register/company

### Item
| Item | Description |
| :--- | :--- |
| API Name | Register Company Profile |
| Endpoint | /auth/register/company |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | Verified email from previous step |
| password | String | 〇 | Admin password |
| company_name | String | 〇 | Name of the company |
| postal_code | String | 〇 | Company zip code |
| address | String | 〇 | Company physical address |
| contact_person | String | 〇 | Representative name |
| contact_phone | String | 〇 | Phone number |
| participants | Array | 〇 | List of participants: `[{ "name": "...", "email": "..." }]` |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate all mandatory fields. <br> - Check password complexity. <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Acquisition & Verification | - Ensure the email has been verified via the temporary registration token from `verification_codes`. |
| 3. State Check | - Check if the company name already exists in the `companies` table to avoid collisions. |
| 4. Update Processing | - Create record in `companies` table. <br> - Create admin user in `users` table linked to the `companies.id`. <br> - Bulk insert additional participants into `users` table with status 'invited'. |
| 5. Response Return | - Return **200 OK** with the generated `company_id` and `admin_user_id`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "company_id": "uuid-v4-123", "admin_user_id": "uuid-v4-456", "message": "REG-005-SUC-01" }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-005-ERR-08" }` |
