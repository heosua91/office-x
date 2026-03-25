# GET /admin/visit-history

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Visit History List |
| Endpoint | /admin/visit-history |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| start_date | String (Date) | - | Filter from start date |
| end_date | String (Date) | - | Filter to end date |
| host_name | String | - | Search by host name |
| visitor_name | String | - | Search by visitor name |
| company_name | String | - | Search by visitor's company |
| page | Number | - | Default: 1 |
| limit | Number | - | Default: 20 |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check date format if provided. |
| 2. Data Acquisition | - Retrieve logs from the `visit_logs` table for the current `company_id`. <br> - Apply filters and pagination. |
| 3. Response Return | - Return the list of visits with total count. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "total": 500, "data": [{ "visitor": "Alice", "host": "Bob", "time": "2026-03-19 10:00:00", "status": "completed" }, ...] }` |
