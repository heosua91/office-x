# POST /auth/register/finalize

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Finalize Registration (Hoàn tất đăng ký) |
| エンドポイント | /auth/register/finalize |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| company_id | String | 〇 | ID of the registering company |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Check if `company_id` is provided. |
| 2. データ取得・照合 | - Retrieve company, admin user, selected plan, and payment method details. |
| 3. 状態チェック | - Ensure a valid payment method is linked and the plan is selected. |
| 4. 更新処理 | - Update `companies` status to 'active'. <br> - Create the first entry in the `subscriptions` table. <br> - Initialize `usage_quotas` based on the selected `subscription_plans`. |
| 5. レスポンス返却 | - Trigger "Onboarding Sequence" (send welcome email with manuals via SMTP queue). <br> - Return **200 OK**. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "message": "Onboarding started. Company is now active." }` |
| エラー時 (400 / 401) | `{ "error": "finalization_failed", "message": "Missing billing information" }` |
