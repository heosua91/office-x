# /admin/reception-devices

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | Reception Device Management (Quản lý Tablet lễ tân) |
| エンドポイント | /admin/reception-devices |
| メソッド | GET / POST / PATCH / DELETE |

### 処理詳細 (Processing Details)
| メソッド | Path | 詳細 (Details) |
| :--- | :--- | :--- |
| **GET** | `/` | List all reception tablets and their connection status. |
| **POST** | `/` | Add new device and generate `app_token` for login. |
| **PATCH** | `/:id` | Update device name, location, or signage display rules. |
| **DELETE** | `/:id`| Unbind/Remove device from company. |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "id": "uuid", "app_token": "...", "location": "Main Foyer" }` |
