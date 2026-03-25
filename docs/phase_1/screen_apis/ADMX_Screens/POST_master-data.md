# POST /admin/master/:type

### Item
| Item | Description |
| :--- | :--- |
| API Name | Create Master Data Record |
| Endpoint | /admin/master/:type |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| type | String | 〇 | Master data type: `DEPARTMENT`, `FLOOR`, `VENDOR`, `PURPOSE` |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | 〇 | New record name. |
| sort_order | Number | - | Optional display order. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for mandatory `name` field. <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Persistence | - Insert new record into the corresponding table based on `:type` with `company_id`. |
| 3. Response Return | - Return **200 OK** with the newly created record ID. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 123, "name": "Marketing", "sort_order": 1, "message": "ADMX-010-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
