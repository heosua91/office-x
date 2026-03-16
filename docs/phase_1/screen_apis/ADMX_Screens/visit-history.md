# /admin/visit-history

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Visit Log Management (Quản lý lịch sử khách) |
| エンドポイント | /admin/visit-history |
| メソッド | GET |

### 処理詳細 (Processing Details)
| メソッド | Path | 詳細 (Details) |
| :--- | :--- | :--- |
| **GET** | `/` | Query logs from `visit_logs`. <br> Filters: `start_date`, `end_date`, `host_name`, `visitor_name`. |
| **GET** | `/export` | Generate CSV file of filtered logs. <br> Returns a downloadable file stream or temporary S3 Link. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "total": 500, "data": [{ "visitor": "Alice", "host": "Bob", "time": "..." }] }` |
