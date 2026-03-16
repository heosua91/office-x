# GET/POST /admin/rooms

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Meeting Room Management (Quản lý phòng họp) |
| エンドポイント | /admin/rooms |
| メソッド | GET / POST |

### 処理詳細 (Processing Details)
| メソッド | 詳細 (Details) |
| :--- | :--- |
| **GET** | - List all rooms in the company. <br> - Include floor name, capacity, and current bound tablet status. |
| **POST** | - Register new room. <br> - Required fields: `name`, `floor_id`, `capacity`. <br> - Auto-generate `pairing_code` or QR link for tablet setup. |

### GET/PATCH/DELETE /admin/rooms/:id
- For ADMX-009 (Detail/Edit/Delete).
- **PATCH**: Update room features (TV, Whiteboard, etc) or capacity.
- **DELETE**: Delete room if no active reservations.

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "data": [{ "id": 1, "name": "Room A", "qr_url": "..." }, ...] }` |
