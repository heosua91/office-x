# POST /admin/reception-devices

### Item
| Item | Description |
| :--- | :--- |
| API Name | Register Reception Device |
| Endpoint | /admin/reception-devices |
| Method | POST |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| name | String | 〇 | Display name. |
| location | String | - | Physical location description. |
| app_password| String | 〇 | Password for tablet login. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `name` and `app_password`. |
| 2. Integrity Check | - Auto-generate a unique `app_id` (ID) and hash `app_password` for the device. |
| 3. Data Persistence | - Insert new record into the `reception_devices` table. |
| 4. Response Return | - Return **202 Accepted** with newly created ID and metadata. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 10, "app_id": "TAB-01-XYZ", "name": "Foyer 1", "message": "ADMX-014-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
