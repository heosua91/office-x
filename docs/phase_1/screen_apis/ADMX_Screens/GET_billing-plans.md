# GET /admin/billing/plans

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Available Subscription Plans |
| Endpoint | /admin/billing/plans |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Acquisition | - Retrieve all current plans from the `subscription_plans` table. |
| 2. Feature Filtering | - Provide metadata of allowed/disallowed functionality per plan (e.g. `is_ai_enabled`, `participant_limit`). |
| 3. Response Return | - Return the array of plans with prices and feature sets. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 1, "name": "Basic", "price": 0 }, { "id": 2, "name": "Standard", "price": 5000 }, { "id": 3, "name": "Enterprise", "price": 20000 }] }` |
