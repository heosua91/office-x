# PATCH /admin/reception-devices/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Reception Device |
| Endpoint | /admin/reception-devices/:id |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Target device identifier. |

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | - | New name. |
| location | String | - | New location. |
| app_password| String | - | New password for update. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of record for the current `company_id`. |
| 2. Data Persistence | - Perform UPDATE on `reception_devices` table. <br> - Update token record if password reset is requested. |
| 3. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-015-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
