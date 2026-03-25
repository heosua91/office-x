# GET /admin/visit-history/export

### Item
| Item | Description |
| :--- | :--- |
| API Name | Export Visit History to CSV |
| Endpoint | /admin/visit-history/export |
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

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check date format if provided. |
| 2. Data Retrieval | - Retrieve logs from the `visit_logs` table for the current `company_id` based on filters. |
| 3. CSV Generation | - Transform retrieved data into CSV format. |
| 4. Response | - Return a binary stream as a downloadable file named `visit_history.csv`. <br> - Ensure UTF-8 with BOM or equivalent for localized characters. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "binary_stream": "visit_history.csv" }` |
