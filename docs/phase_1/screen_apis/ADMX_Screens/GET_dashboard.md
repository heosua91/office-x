# GET /admin/dashboard

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Admin Dashboard Data |
| Endpoint | /admin/dashboard |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
*None* (Based on User's session/company context from token).

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify user has `admin` or `tng_admin` role from JWT. |
| 2. Data Acquisition | - Query `reservations` table for today's summary. <br> - Query `usage_logs` for company-wide AI usage stats. <br> - Query `meeting_rooms` for real-time status (Available/In Use). |
| 3. Business Logic | - Aggregate individual schedule data for the logged-in admin. <br> - Calculate company remaining AI time based on `usage_quotas` and `usage_logs`. |
| 4. Response Return | - Return **200 OK** with structured widget data for dashboard rendering. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "today_schedule": [...], "room_stats": { "available": 5, "total": 10 }, "ai_usage": { "personal": "2h", "corporate_remaining": "48h" } }` |
| Error (403 / 500) | `{ "success": false, "message": "ADMX-002-ERR-01" }` |
