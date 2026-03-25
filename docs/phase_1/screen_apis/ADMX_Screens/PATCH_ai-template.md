# PATCH /admin/ai-templates/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update AI Template |
| Endpoint | /admin/ai-templates/:id |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Target template identifier. |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | - | New name. |
| prompt | String | - | New instruction text. |
| is_default | Boolean | - | Set as default status. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target record. <br> - Return **400 Bad Request** if missing. |
| 2. Integrity Check | - If `is_default` is set to true, unset original default template in same category. |
| 3. Data Persistence | - Perform UPDATE on `meeting_ai_templates` table. |
| 4. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-031-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-031-ERR-01" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
