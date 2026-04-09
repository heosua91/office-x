# PUT /office/settings/preferences

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update App Preferences |
| Endpoint | `/office/settings/preferences` |
| Method | PUT |

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
| privacy | Object | － | Visibility settings |
| booking | Object | － | Business hours, signature, etc. |
| dictionary | Array | － | List of dictionary terms |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Standard authentication check. |
| 2. Data Acquisition & Verification | - (None specifically, payload is the source) |
| 3. State Check | - (None specifically) |
| 4. Update Processing | - Overwrite user preferences in `users` metadata or `settings` JSONB column. <br> - Update user-specific or organizational dictionary entries in `dictionary_entries`. |
| 5. Response Return | - Return **200 OK** on successful save. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "Preferences Saved" }` |
| Error (400 / 401) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
