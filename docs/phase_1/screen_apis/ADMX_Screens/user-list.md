# GET /admin/users

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Get User List (Lấy danh sách thành viên doanh nghiệp) |
| エンドポイント | /admin/users |
| メソッド | GET |

### リクエストパラメータ (Query Params)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| keyword | String | - | Search by Name, Email, or Employee ID |
| department_id | Number | - | Filter by department |
| page | Number | - | Default: 1 |
| limit | Number | - | Default: 20 |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. リクエストバリデーション | - Validate `limit` and `page` are positive integers. |
| 2. データ取得・照合 | - Fetch users belonging to the admin's `company_id`. <br> - Join with `departments` for department name. <br> - Apply search/filter logic if params present. |
| 3. レスポンス返却 | - Return paginated list of users. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "total": 100, "data": [{ "id": 1, "name": "...", "email": "...", "department": "...", "role": "user" }, ...] }` |
