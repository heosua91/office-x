# PATCH /tng/settings/policy

### Item
| Item | Description |
| :--- | :--- |
| API Name | Set Global AI Limit Policy |
| Endpoint | /tng/settings/policy |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| limiter_enabled | Boolean | 〇 | Is limiter active system-wide |
| overage_behavior | String | 〇 | 'Auto_Pay' or 'Suspend' |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for valid boolean string mapping. <br> - Return **400 Bad Request** for unhandled `overage_behavior` strings. |
| 2. Data Acquisition & Verification | - Identify internal `admin` tracking to log into the settings history table. |
| 3. State Check | - Retrieve existing system policies from `system_settings_cache`. |
| 4. Update Processing | - Mutate the global `ai_limit_policy` flags. <br> - Insert a new row indicating 'Change Content' into the History Logging table. |
| 5. Response Return | - Return **200 OK** indicating the limit logic parameter update success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "message": "S001"<br>}``` |
| Error (401) | ```json<br>{<br>  "success": false,<br>  "message": "AUTH-001-ERR-02"<br>}``` |

---
