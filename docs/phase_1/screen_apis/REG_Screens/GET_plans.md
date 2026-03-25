# GET /auth/register/plans

### Item
| Item | Description |
| :--- | :--- |
| API Name | Fetch Subscription Plans |
| Endpoint | /auth/register/plans |
| Method | GET |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | No parameters required |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - No payload validation required. |
| 2. Data Acquisition | - Retrieve all active records from the `subscription_plans` table. |
| 3. State Check | - Ensure plans are correctly configured with `price_monthly`, `user_limit`, and `ai_minutes_limit`. |
| 4. Response Return | - Return **200 OK** with a list of plan objects containing features and pricing. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "plans": [{ "id": "...", "name": "Standard", "price": 10000, "features": { ... } }, ...] }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-007-ERR-03" }` |
