# GET/PATCH/DELETE /admin/users/:id

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Manage Specific User (Quản lý chi tiết thành viên) |
| エンドポイント | /admin/users/:id |
| メソッド | GET / PATCH / DELETE |

### 処理詳細 (Processing Details)
| メソッド | 詳細 (Details) |
| :--- | :--- |
| **GET** | - Fetch full profile of user, including role, status, and department. |
| **PATCH** | - Update user permissions, department, or basic info. <br> - Return **200 OK** on success. |
| **DELETE** | - Deactivate or soft-delete user. <br> - Check for active reservations/ownership before deletion. |
| **POST (pw-reset)**| - `/admin/users/:id/password-reset` <br> - Re-generate password and send via email. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "id": 123, "name": "...", "status": "updated" }` |
| エラー時 (404 Not Found)| `{ "error": "user_not_found", "message": "[ADMX-006-ERR-01]" }` |
