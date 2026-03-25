# PATCH /admin/master/:type/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Master Data Record |
| Endpoint | /admin/master/:type/:id |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| type | String | 〇 | Master data type: `DEPARTMENT`, `FLOOR`, `VENDOR`, `PURPOSE` |
| id | Number | 〇 | Master record identifier. |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | - | New record name. |
| sort_order | Number | - | New display order. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for existence of record `id` and type validity. |
| 2. Data Persistence | - Update the record in the corresponding table (e.g. `departments`). |
| 3. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-010-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
