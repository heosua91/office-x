# GET /admin/billing/invoices/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Invoice Detail Breakdown |
| Endpoint | /admin/billing/invoices/:id |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String / Number | 〇 | Target invoice identifier. |

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of target invoice for correct company. |
| 2. Data Aggregate | - Fetch invoice details (amount, items, taxes). <br> - Fetch AI overage usage for corresponding month from `usage_logs`. |
| 3. Response Return | - Return granular breakdown of fixed fees and consumption fees. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "id": "INV-101", "base_fee": 3000, "ai_overage": 1500, "total": 4500, "items": [{ "name": "Basic User Slot x20", "amount": 3000 }, { "name": "AI Overage 150m", "amount": 1500 }] }` |
| Not Found (404) | `{ "success": false, "message": "Invoice not found" }` |
