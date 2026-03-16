# /admin/master/:type

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Master Data Management (Quản lý Master Data) |
| エンドポイント | /admin/master/:type |
| メソッド | GET / POST / PATCH / DELETE / PUT |

### 対応型 (:type)
- `DEPARTMENT`, `FLOOR`, `VENDOR`, `PURPOSE`.

### 処理詳細 (Processing Details)
| メソッド | Path | 詳細 (Details) |
| :--- | :--- | :--- |
| **GET** | `/:type` | List all records of specified type for the company. |
| **POST** | `/:type` | Add new record (e.g., new floor). |
| **PATCH** | `/:type/:id` | Update record name or attributes. |
| **DELETE** | `/:type/:id`| Delete record (prevent if in use by users/rooms). |
| **PUT** | `/:type/sort`| Bulk update `sort_order` for the list. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "data": [{ "id": 1, "name": "Marketing", "order": 1 }, ...] }` |
