# DELETE /admin/ai-templates/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Delete AI Template |
| Endpoint | /admin/ai-templates/:id |
| Method | DELETE |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Target template identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target record for the current `company_id`. |
| 2. Constraint Check | - Prevent deletion of system default templates. <br> - Prevent deletion if it is currently mandatory for certain screens. |
| 3. Data Deletion | - Hard delete (or set `deleted_at`) record from `meeting_ai_templates`. |
| 4. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-030-SUC-01" }` |
| Denied (400) | `{ "success": false, "message": "ADMX-010-ERR-04" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
