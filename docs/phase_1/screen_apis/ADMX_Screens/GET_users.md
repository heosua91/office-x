# GET /admin/users

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get User List |
| Endpoint | /admin/users |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| keyword | String | - | Search by Name, Email, or Employee ID |
| department_id | Number | - | Filter by department |
| page | Number | - | Default: 1 |
| limit | Number | - | Default: 20 |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate `limit` and `page` are positive integers. |
| 2. Data Acquisition | - Fetch users belonging to the admin's `company_id`. <br> - Join with `departments` for department name. <br> - Apply search/filter logic if params present. |
| 3. Response Return | - Return paginated list of users. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "total": 100, "data": [{ "id": 1, "name": "...", "email": "...", "department": "...", "role": "user" }, ...] }` |
