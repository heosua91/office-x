# POST /auth/register/resend-code

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Resend OTP Code (Gửi lại mã xác nhận) |
| エンドポイント | /auth/register/resend-code |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | User's email address |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Check if `email` is provided. <br> - Return **400 Bad Request** if missing. |
| 2. DB存在確認 | - Check if the `email` exists in the `users` table or is part of an ongoing registration flow. |
| 3. Old Code Invalidation | - Optional: Invalidate previous active codes for this email in the `verification_codes` table. |
| 4. New Code Generation | - Generate a new 6-digit verification code. <br> - Insert a new record into the `verification_codes` table with a new expiration time (e.g., 10 minutes). |
| 5. Email Queue | - Push a task to the background email queue to send the new code to the user's email. |
| 6. Response | - Return **200 OK** status. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "message": "[REG-004-SUC-02]" }` |
| エラー時 (400 / 500) | `{ "success": false, "message": "[REG-004-ERR-03]" }` |
