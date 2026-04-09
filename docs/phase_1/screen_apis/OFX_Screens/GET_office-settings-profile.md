# GET /office/settings/profile

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Base Profile |
| Endpoint | `/office/settings/profile` |
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
| 1. Request Validation | - Standard authentication check. |
| 2. Data Acquisition & Verification | - Retrieve user core identity fields (name, email, avatar) from the `users` table. |
| 3. State Check | - (None specifically) |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with base user profile information. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "user_id": "...", "display_name": "Yuki", "email": "yuki@corp.com", "avatar_url": "..." } }` |
| Error (401) | `{ "success": false, "message": "SYS-000-ERR-04" }` |
