# GET /office/dashboard

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Dashboard Widgets |
| Endpoint | `/office/dashboard` |
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
| 1. Request Validation | - Verify JWT and extract user/company context. <br> - Return **401 Unauthorized** if session is invalid. |
| 2. Data Acquisition & Verification | - **Schedule**: Query `meetings` and `meeting_participants` for user's meetings scheduled for today. <br> - **Room Status**: Query `meeting_rooms` and active `meetings` to determine current room availability. <br> - **AI Usage**: Query `usage_logs` to aggregate AI minutes consumed by the user in the current month. |
| 3. State Check | - Compare AI usage against company/user limits from `companies` or `usage_quotas`. <br> - Flag `is_over_quota` or `alert_threshold_met` if applicable. |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with combined widget data for Today's Schedule, Room Status, and AI Usage metrics. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "schedule": [ { "meeting_id": "...", "title": "Project Sync", "start_time": "...", "end_time": "...", "type": "internal", "status": "upcoming", "room_name": "Alpha" } ], "room_status": [ { "room_id": "...", "name": "Alpha", "status": "in_use", "current_meeting_title": "Project Sync" } ], "ai_usage": { "used_minutes": 150, "allocated_minutes": 600, "remaining_minutes": 450, "is_over_quota": false, "alert_threshold_met": false } } }` |
| Error (401 / 500) | `{ "success": false, "message": "OFX-001-ERR-02" }` |
