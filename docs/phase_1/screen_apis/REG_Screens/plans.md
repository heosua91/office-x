# GET /auth/register/plans

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Fetch Subscription Plans (Lấy danh sách gói cước) |
| エンドポイント | /auth/register/plans |
| メソッド | GET |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| - | - | - | No parameters required |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - No payload validation required. |
| 2. データ取得・照合 | - Retrieve all active records from the `subscription_plans` table. |
| 3. 状態チェック | - Ensure plans are correctly configured with `price_monthly`, `user_limit`, and `ai_minutes_limit`. |
| 4. 更新処理 | - No database updates required. |
| 5. レスポンス返却 | - Return **200 OK** with a list of plan objects containing features and pricing. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "plans": [{ "id": "...", "name": "Standard", "price": 10000, "features": { ... } }, ...] }` |
| エラー時 (400 / 401) | `{ "error": "Unable to fetch plans" }` |
