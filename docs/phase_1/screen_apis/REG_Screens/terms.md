# GET /auth/register/terms

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Fetch Terms and Privacy Policy (Lấy nội dung Điều khoản và Chính sách bảo mật) |
| エンドポイント | /auth/register/terms |
| メソッド | GET |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| - | - | - | No parameters required |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - No payload validation required for this GET request. |
| 2. データ取得・照合 | - Retrieve the latest version of the Terms of Use and Privacy Policy from the system configuration or static content storage. |
| 3. 状態チェック | - Verify that the content is active and available for display. |
| 4. 更新処理 | - No database updates required. |
| 5. レスポンス返却 | - Return **200 OK** with the `terms_html` and `privacy_policy_html` strings. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "terms_html": "<h1>Terms of Use</h1>...", "privacy_policy_html": "<h1>Privacy Policy</h1>..." }` |
| エラー時 (400 / 401) | `{ "error": "Unable to fetch content" }` |
