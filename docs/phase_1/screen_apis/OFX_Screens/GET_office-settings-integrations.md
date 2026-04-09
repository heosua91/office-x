# GET /office/settings/integrations

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Integration Status |
| Endpoint | `/office/settings/integrations` |
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
| 1. Request Validation | - Verify JWT and user context. |
| 2. Data Acquisition & Verification | - Query `notification_integrations` and user profile fields (like OAuth tokens) to determine connection state for Slack, Teams, Google Calendar, and Google Drive. |
| 3. State Check | - (None specifically, return empty/false if no integration found) |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with a structured status map of all third-party integrations. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "calendar": { "provider": "google", "is_linked": true, "email": "..." }, "comms": { "slack_linked": false, "teams_linked": true }, "storage": { "drive_linked": false } } }` |
| Error (401) | `{ "success": false, "message": "SYS-000-ERR-04" }` |
