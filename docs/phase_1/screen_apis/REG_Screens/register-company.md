# POST /auth/register/company

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Register Company Profile (Đăng ký thông tin doanh nghiệp) |
| エンドポイント | /auth/register/company |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| email | String | 〇 | Verified email from previous step |
| password | String | 〇 | Admin password (min 8 chars, mixed case/numbers) |
| company_name | String | 〇 | Name of the company |
| postal_code | String | 〇 | Company zip code (e.g., 123-4567) |
| address | String | 〇 | Company physical address |
| contact_person | String | 〇 | Representative name |
| contact_phone | String | 〇 | Phone number |
| participants | Array | 〇 | List of participants: `[{ "name": "...", "email": "..." }]` |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Validate all mandatory fields. <br> - Check password complexity. <br> - Return **400 Bad Request** with specific field errors if validation fails. |
| 2. データ取得・照合 | - (Internal) Ensure the email has been verified via the temporary registration token. |
| 3. 状態チェック | - Check if the company name or code (derived from name) already exists to avoid collisions. |
| 4. 更新処理 | - Create record in `companies` table. <br> - Create admin user in `users` table linked to the `companies.id`. <br> - Bulk insert additional participants into `users` table with status 'invited'. |
| 5. レスポンス返却 | - Return **200 OK** with the generated `company_id` and `admin_user_id`. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "company_id": "uuid-v4-123", "admin_user_id": "uuid-v4-456" }` |
| エラー時 (400 / 401) | `{ "success": false, "message": "[REG-005-ERR-08]" }` |
