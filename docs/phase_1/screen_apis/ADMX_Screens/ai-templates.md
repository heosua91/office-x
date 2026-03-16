# /admin/ai-templates

### 項目 (Item)
| 項目 (Item) | 内容 (Description) |
| :--- | :--- |
| API名 | AI Prompt Template Management (Quản lý mẫu Prompt AI) |
| エンドポイント | /admin/ai-templates |
| メソッド | GET / POST / PATCH / DELETE |

### 処理詳細 (Processing Details)
| メソッド | Path | 詳細 (Details) |
| :--- | :--- | :--- |
| **GET** | `/` | List all templates (System + Custom). |
| **GET** | `/:id` | Fetch full prompt details for editing. |
| **POST/PATCH**| `/:id?` | Create or Update template instructions. <br> Toggle `is_default` for a category. |
| **DELETE** | `/:id` | Remove template (forbidden if it is the current mandatory default). |

### レスポンス (Response)
| ケース | 内容 |
| :--- | :--- |
| 成功時 (200 OK) | `{ "id": 1, "name": "Sales Summary", "prompt": "Summarize key action items..." }` |
