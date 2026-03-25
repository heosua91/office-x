# GET /admin/billing/invoices

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Monthly Invoices List |
| Endpoint | /admin/billing/invoices |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| year | Number | - | Filter by specific year. |
| status | String | - | `paid`, `pending`. |
| page | Number | - | Default: 1 |
| limit | Number | - | Default: 20 |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Confirm existence of subscription in current context. |
| 2. Data Retrieval | - Retrieve all invoice records from the `invoices` table for the target `company_id`. |
| 3. Response Return | - Return the history list of bills. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": "INV-101", "month": "2026-02", "amount": 4500, "status": "paid" }, ...] }` |
