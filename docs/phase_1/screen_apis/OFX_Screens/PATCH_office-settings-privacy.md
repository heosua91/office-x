# PATCH /office/settings/privacy

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Privacy Settings |
| Endpoint | /office/settings/privacy |
| Method | PATCH |

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
| default_publicity_scope | String | 〇 | Enum (e.g. ONLY_ME, PARTICIPANTS, ALL) |
| phased_publishing | Boolean | - | Toggle for auto-publishing rules |
| internal_memo_scope | String | 〇 | Enum defining who sees internal memos |
| share_client_display_mode | Boolean | - | Toggle distinct views for clients |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for valid enum values for scopes. <br> - Return **400 Bad Request** if invalid payload. |
| 2. Data Acquisition & Verification | - Identify requester via JWT to access `users` table. <br> - Return **401 Unauthorized** if token is malformed. |
| 3. State Check | - Validate enum constraints. <br> - Return **400 Bad Request** if constraints fail. |
| 4. Update Processing | - Execute updates on `privacy_settings` JSON column or related fields inside the `users` table. |
| 5. Response Return | - Return **200 OK** tracking successful preferences persistence. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "SUC-001" }` |
| Error (400) | `{ "success": false, "message": "ERR-CMN-001" }` |
