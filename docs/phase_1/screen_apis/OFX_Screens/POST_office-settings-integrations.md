# POST /office/settings/integrations

### Item
| Item | Description |
| :--- | :--- |
| API Name | Link Third-party Integration |
| Endpoint | `/office/settings/integrations` |
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
| service | String | 〇 | `google_calendar`, `slack`, `teams`, etc. |
| oauth_code | String | 〇 | Authorization code from OAuth flow |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `service` is supported. <br> - Ensure `oauth_code` is present. |
| 2. Data Acquisition & Verification | - Exchange `oauth_code` for access and refresh tokens via the service provider's API. |
| 3. State Check | - Return **400 Bad Request** with `OFX-021-01` if webhook/token verification fails. |
| 4. Update Processing | - Store encrypted tokens and integration state in `notification_integrations` or `users` table. |
| 5. Response Return | - Return **200 OK** on successful link. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "status": "Linked successfully" } }` |
| Error (400 / 401) | `{ "success": false, "message": "OFX-021-ERR-02" }` |
