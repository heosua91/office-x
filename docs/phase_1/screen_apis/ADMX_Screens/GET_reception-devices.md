# GET /admin/reception-devices

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Reception Devices List |
| Endpoint | /admin/reception-devices |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Acquisition | - Fetch records from the `reception_devices` table for the current `company_id`. |
| 2. Connection State | - Check current status (online/offline) from `reception_device_auth_tokens`. |
| 3. Response Return | - Return the array of devices with their ID, name, location, and status. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 1, "name": "Main Foyer 1", "location": "1F Lobby", "status": "online" }, ...] }` |
