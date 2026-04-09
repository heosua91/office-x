# POST /office/customers

### Item
| Item | Description |
| :--- | :--- |
| API Name | Register Client Company |
| Endpoint | `/office/customers` |
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
| company_name | String | 〇 | Name of the client company |
| address | String | － | Physical address |
| telephone | String | － | Phone number |
| pic_name | String | 〇 | Person-In-Charge Name |
| booking_rules | Object | － | Initial booking preferences |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for mandatory fields (`company_name`, `pic_name`). <br> - Return **400 Bad Request** with `SYS-000-ERR-05` if missing. |
| 2. Data Acquisition & Verification | - Check if `company_name` already exists for this tenant in `client_companies`. |
| 3. State Check | - Return **400 Bad Request** with `OFX-012-ERR-01` if company name is duplicated. |
| 4. Update Processing | - Insert new record into `client_companies`. <br> - Generate an initial `invite_token` (UUID) for smart link generation. |
| 5. Response Return | - Return **200 OK** with the new client ID and invite URL. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "client_company_id": "...", "invite_token_url": "..." } }` |
| Error (400) | `{ "success": false, "message": "OFX-012-ERR-01" }` |
