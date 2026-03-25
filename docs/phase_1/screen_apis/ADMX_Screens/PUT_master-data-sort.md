# PUT /admin/master/:type/sort

### Item
| Item | Description |
| :--- | :--- |
| API Name | Sort Master Data Records |
| Endpoint | /admin/master/:type/sort |
| Method | PUT |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| type | String | 〇 | Master data type: `DEPARTMENT`, `FLOOR`, `VENDOR`, `PURPOSE` |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| ids | Array (Number) | 〇 | List of record IDs in the new sort order. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for valid `ids` array. |
| 2. Bulk Sort Update | - Loop through `ids` and update `sort_order` in database. |
| 3. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-010-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
