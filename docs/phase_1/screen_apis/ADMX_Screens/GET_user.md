# GET /admin/users/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get User Detail |
| Endpoint | /admin/users/:id |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String / Number | 〇 | Target user identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if user belongs to the current `company_id`. |
| 2. Data Acquisition | - Fetch user summary from the `users` table including `email`, `employee_id`, `department_id`, and `role`. |
| 3. Response Return | - Return the full user profile object. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 123, "name": "Collin B.", "email": "collin@example.com", "role": "admin", "department_id": 1 }` |
| Not Found (404) | `{ "success": false, "message": "ADMX-006-ERR-01" }` |
