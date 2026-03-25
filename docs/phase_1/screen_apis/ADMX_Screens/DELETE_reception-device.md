# DELETE /admin/reception-devices/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Delete Reception Device |
| Endpoint | /admin/reception-devices/:id |
| Method | DELETE |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | Number | 〇 | Target device identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target record for the current `company_id`. |
| 2. Integrity Wipe | - Remove any current `reception_device_auth_tokens` associated with this device. |
| 3. Data Deletion | - Hard delete (or soft delete) record in the `reception_devices` table. |
| 4. Response Return | - Return **200 OK** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-015-SUC-02" }` |
| Not Found (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
