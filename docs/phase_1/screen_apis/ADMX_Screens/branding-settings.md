# /admin/settings/branding

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Company Branding Settings (Cài đặt nhận diện thương hiệu) |
| エンドポイント | /admin/settings/branding |
| メソッド | GET / PATCH |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. データ取得 (GET) | - Fetch S3 URLs for Logo, Background image, and Screensaver images. |
| 2. 更新処理 (PATCH) | - Update branding assets. <br> - Upload to S3 if file is provided in `multipart/form-data`. <br> - Return **200 OK**. |

### /admin/billing/status (PATCH)
- Used in ADMX-018 to update basic company info and service usage rules.
- Fields: `company_name`, `address`, `ai_usage_limit_behavior` (Stop/Over-charge).

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "logo_url": "...", "bg_url": "..." }` |
