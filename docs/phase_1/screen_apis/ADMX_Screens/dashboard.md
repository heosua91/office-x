# GET /admin/dashboard

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Get Admin Dashboard Data (Lấy dữ liệu Dashboard quản trị) |
| エンドポイント | /admin/dashboard |
| メソッド | GET |

### リクエストパラメータ (Payload)
*None* (Based on User's session/company context from token).

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Verify user has `admin` or `tng_admin` role from JWT. |
| 2. データ取得・照合 | - Query `reservations` table for today's summary. <br> - Query `usage_logs` for company-wide AI usage stats. <br> - Query `meeting_rooms` for real-time status (Available/In Use). |
| 3. ビジネスロジック | - Aggregate individual schedule data for the logged-in admin. <br> - Calculate company remaining AI time based on `usage_quotas` and `usage_logs`. |
| 4. レスポンス返却 | - Return **200 OK** with structured widget data for dashboard rendering. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "today_schedule": [...], "room_stats": { "available": 5, "total": 10 }, "ai_usage": { "personal": "2h", "corporate_remaining": "48h" } }` |
| エラー時 (403 / 500) | `{ "success": false, "message": "[ADMX-002-ERR-01]" }` |
