# POST /reception/auth

### Item
| Item | Description |
| :--- | :--- |
| API Name | Device authentication for Tablet foyer |
| Endpoint | /reception/auth |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| device_identifier | String | 〇 | Tablet ID used for login |
| password | String | 〇 | Tablet password |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `device_identifier` and `password` are present. <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Acquisition & Verification | - Retrieve device data from the `reception_devices` table using `device_identifier`. <br> - Compare provided `password` with the stored hash/password. <br> - Return **401 Unauthorized** if device is not found or credentials fail. |
| 3. State Check | - Check if the device `status` is 'online' or active. <br> - Return **400 Bad Request** with a specific Message ID if device is suspended. |
| 4. Update Processing | - Generate a new authentication token (e.g., JWT). <br> - Update `auth_token_hash`, `auth_token_expires_at` (1 month from now), and set `last_active_at` in the `reception_devices` table. |
| 5. Response Return | - Return **200 OK** status along with the JWT token and the bound `company_id`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "token": "jwt_token_here", "message": "UKET-001-SUC-01" }` |
| Error (400 / 401) | `{ "success": false, "message": "ERR-AUTH-001" }` |
