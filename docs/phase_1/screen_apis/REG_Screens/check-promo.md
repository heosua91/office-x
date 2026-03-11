# POST /auth/register/check-promo

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Validate Promotion Code (Xác thực mã giảm giá) |
| エンドポイント | /auth/register/check-promo |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| code | String | 〇 | The promotion code to validate |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Check if `code` is provided and follows alphanumeric format. <br> - Return **400 Bad Request** if missing. |
| 2. データ取得・照合 | - Query the `promo_codes` table for a record matching the `code`. <br> - Return **404 Not Found** or 400 if code does not exist. |
| 3. 状態チェック | - Check if `is_active` is TRUE. <br> - Check if `expires_at` is in the future. <br> - Return **400 Bad Request** if the code is inactive or expired. |
| 4. 更新処理 | - No database updates required (validation only). |
| 5. レスポンス返却 | - Return **200 OK** with `discount_type`, `discount_value`, and a success message. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "valid": true, "discount_type": "percentage", "discount_value": 10, "message": "10% discount applied" }` |
| エラー時 (400 / 401) | `{ "valid": false, "error": "invalid_or_expired_code" }` |
