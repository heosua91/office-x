# GET /admin/billing/pricing

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get AI Pricing Information |
| Endpoint | /admin/billing/pricing |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Retrieval | - Fetch current system-wide unit prices for AI transcription/summary credits. |
| 2. Response Return | - Return the price list. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "unit": "1 hour credit", "price": 1000, "currency": "JPY" }` |
