# DELETE /admin/dictionary/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Delete Dictionary Term |
| Endpoint | /admin/dictionary/:id |
| Method | DELETE |

### Path Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Unique dictionary identifier. |


### Query Parameters
*None*
### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target record for the current `company_id`. |
| 2. Data Deletion | - Hard delete (or move to trash) record in the `dictionary_entries` table. |
| 3. Response Return | - Return **200 OK** status showing successful deletion. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-032-SUC-02" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
