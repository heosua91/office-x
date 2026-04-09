# GET /office/settings/preferences

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get App Preferences |
| Endpoint | `/office/settings/preferences` |
| Method | GET |

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
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify user authentication. |
| 2. Data Acquisition & Verification | - Retrieve user preferences from the `users` table (`settings` JSONB column). <br> - Fetch company-wide dictionary entries from `dictionary_entries`. <br> - Fetch availability rules from `user_availability`. |
| 3. State Check | - (None specifically) |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with an object containing privacy, booking, and dictionary preferences. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "privacy": { "default_visibility": "team_only" }, "booking": { "business_hours": { "start": "09:00", "end": "18:00" }, "gap_minutes": 15, "email_signature": "..." }, "dictionary": [ { "id": "...", "term": "OfficeX" } ] } }` |
| Error (401) | `{ "success": false, "message": "SYS-000-ERR-04" }` |
