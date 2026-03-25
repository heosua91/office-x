# PATCH /admin/members/ai-settings/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update AI Alert Rule |
| Endpoint | /admin/members/ai-settings/:id |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Target rule identifier. |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| threshold | Number | - | Change value (e.g. 0.9). |
| channel | String | - | Change medium (Email/Webhook). |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target rule record. |
| 2. Data Persistence | - Perform UPDATE on `notification_settings` for this ID. |
| 3. Response Return | - Return **200 OK** indicating update success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-027-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-028-ERR-01" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
