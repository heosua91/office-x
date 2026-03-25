# GET /admin/reception-devices/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Reception Device Detail |
| Endpoint | /admin/reception-devices/:id |
| Method | GET |

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
| 2. Data Acquisition | - Fetch detailed record from the `reception_devices` table. |
| 3. Response Return | - Return the full device metadata including current auth state and location. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": 1, "app_id": "RECEP-01", "name": "Main Reception", "location": "1F Lobby", "status": "online" }` |
