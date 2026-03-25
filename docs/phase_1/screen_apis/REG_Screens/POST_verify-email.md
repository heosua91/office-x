# POST /auth/register/verify-email

### Item
| Item | Description |
| :--- | :--- |
| API Name | Send Email Verification |
| Endpoint | /auth/register/verify-email |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | User's email address for registration |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for valid email format. |
| 2. DB Interaction | - Search for user's existing email status. |
| 3. Code Generation | - Generate unique OTP and store in `verification_codes`. |
| 4. SMTP Dispatch Flow | - **Enqueuing**: Push `email`, `subject`, and `template_vars` (code) to the `smtp-outbox` queue. <br> - **Execution**: SMTP worker picks up the job and connects to the provider (e.g., SendGrid). <br> - **Fulfillment**: Sends the physical email to the user. |
| 5. Response Return | - Return **200 OK** on successful enqueuing. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "REG-002-SUC-01" }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-002-ERR-03" }` |
