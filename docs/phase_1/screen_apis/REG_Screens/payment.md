# POST /auth/register/payment

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Register Payment Method (Đăng ký thông tin thanh toán) |
| エンドポイント | /auth/register/payment |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| company_id | String | 〇 | ID of the registering company |
| payment_method_type| String | 〇 | 'credit_card' or 'invoice' |
| card_details | Object | － | Required if type is 'credit_card'. Includes token from gateway. |
| billing_details | Object | － | Required if type is 'invoice'. Includes billing email and address. |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Validate required fields based on `payment_method_type`. <br> - Return **400 Bad Request** if mandatory fields are missing. |
| 2. データ取得・照合 | - Retrieve the company record from the `companies` table using `company_id`. |
| 3. 状態チェック | - (Credit Card) Verify the payment token with the external payment gateway (e.g., Stripe/Paid). |
| 4. 更新処理 | - Create or update a record in the `payment_methods` table linked to the `company_id`. <br> - Store provider-specific IDs (not full card numbers) and metadata. |
| 5. レスポンス返却 | - Return **200 OK** upon successful registration of the payment method. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "id": "payment_method_uuid", "message": "Payment method registered" }` |
| エラー時 (400 / 401) | `{ "error": "payment_gateway_error", "message": "Card declined" }` |
