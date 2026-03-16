# POST /admin/users/import

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Bulk Import Users (Nhập thành viên hàng loạt) |
| エンドポイント | /admin/users/import |
| メソッド | POST |

### リクエストパラメータ (Payload)
| 項目名 (Field) | 型 (Type) | 必須 (Required) | 備考 (Note) |
| :--- | :--- | :--- | :--- |
| file | Binary/File | 〇 | CSV file matching template |

### 処理詳細 (Processing Details)
| フェーズ (Phase) | 詳細 (Details) |
| :--- | :--- |
| 1. ファイル検証 | - Check file format (must be `.csv`) and size. <br> - Read header and validate against required schema (Name, Email, Dept, Role). |
| 2. 非同期処理 | - Insert record into `csv_import_logs` with status 'Processing'. <br> - Background worker parses lines, validates each row. |
| 3. 更新処理 | - Upsert users to `users` table. <br> - Log errors (e.g. duplicate email, invalid dept) per row. |
| 4. ステータス取得 | - `GET /admin/users/import/history` returns progress and error summary. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (202 Accepted) | `{ "job_id": "job-uuid", "message": "Import started" }` |
