# PATCH /admin/dictionary/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Dictionary Term |
| Endpoint | /admin/dictionary/:id |
| Method | PATCH |

### Path Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Unique dictionary identifier. |


### Query Parameters
*None*
### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| before | String | - | New before-correction text. |
| after | String | - | New after-correction text. |
| is_approved | Boolean | - | New approval status. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target record for the current `company_id`. |
| 2. Data Persistence | - UPDATE the record in the `dictionary_entries` table. |
| 3. Response Return | - Return **200 OK** status. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-032-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-032-ERR-01" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
