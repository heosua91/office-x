# POST /auth/register/verify-email

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Send Email Verification (Gửi email xác thực) |
| エンドポイント | /auth/register/verify-email |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | User's email address for registration |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Check if `email` is present and matches the standard email format. <br> - Return **400 Bad Request** if format is invalid. |
| 2. データ取得・照合 | - Check the `users` table to see if the email is already registered and active. <br> - Return **409 Conflict** (or 400) if the email exists with status 'active'. |
| 3. 状態チェック | - Generate a unique 6-digit numeric verification code. <br> - Set expiration time (e.g., 30 minutes). |
| 4. 更新処理 | - Insert or update a record in the `verification_codes` table with the `email`, `code`, `purpose` ('registration'), and `expires_at`. |
| 5. レスポンス返却 | - Trigger background task to send the OTP email via the Email Queue. <br> - Return **200 OK** on successful record creation. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "message": "[REG-002-SUC-01]" }` |
| エラー時 (400 / 401) | `{ "success": false, "message": "[REG-002-ERR-03]" }` |
