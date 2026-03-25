# POST /admin/users/:id/password-reset

### Item
| Item | Description |
| :--- | :--- |
| API Name | Reset User Password |
| Endpoint | /admin/users/:id/password-reset |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String / Number | 〇 | Target user identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target user. |
| 2. Reset Step | - Generate a new temporary password or reset token. <br> - Update user's password record (or trigger reset flow). |
| 3. Outgoing Notification | - Push reset notification (e.g., SMTP Queue) to the user's email. |
| 4. Response Return | - Return **200 OK** indicating the reset email was sent. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-006-SUC-03" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
