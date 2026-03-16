# POST /auth/register/verify-code

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Verify OTP Code (Xác thực mã xác nhận) |
| エンドポイント | /auth/register/verify-code |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | User's email address |
| code | String | 〇 | 6-digit verification code |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Check if `email` and `code` are provided. <br> - Return **400 Bad Request** if missing. |
| 2. データ取得・照合 | - Retrieve the record from the `verification_codes` table matching the `email` and `code`. <br> - Return **401 Unauthorized** if no matching record is found. |
| 3. 状態チェック | - Check if `expires_at` is in the future. <br> - Check if `used_at` is NULL. <br> - Return **400 Bad Request** if code is expired or already used. |
| 4. 更新処理 | - Update the `used_at` column in the `verification_codes` table to the current timestamp. |
| 5. レスポンス返却 | - Return **200 OK** status. Optionally return a temporary registration token (JWT) to secure subsequent steps. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "message": "[REG-004-SUC-01]", "token": "temp_reg_token_xyz" }` |
| エラー時 (400 / 401) | `{ "success": false, "message": "[REG-004-ERR-04]" }` |
