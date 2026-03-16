# POST /admin/users

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Register User (Đăng ký thành viên mới) |
| エンドポイント | /admin/users |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| name | String | 〇 | User's full name |
| email | String | 〇 | Official work email |
| employee_id | String | - | Company employee code |
| department_id | Number | 〇 | ID from Master Data |
| role | String | 〇 | 'admin' or 'user' |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Check mandatory fields. <br> - Check if email is valid and doesn't exist in system. |
| 2. データ取得・照合 | - Verify current user count doesn't exceed `user_slot_limit` of the company. |
| 3. 更新処理 | - Create record in `users` table. <br> - Generate temporary password or invite link. <br> - Trigger welcome email. |
| 4. レスポンス返却 | - Return **201 Created** with user ID. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (201 Created) | `{ "id": "uuid-here", "message": "[ADMX-005-SUC-01]" }` |
| 制限超過 (403 Forbidden)| `{ "error": "limit_exceeded", "message": "[ADMX-004-ERR-03]" }` |
