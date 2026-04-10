# GET /tng/billing/invoices

### Item
| Item | Description |
| :--- | :--- |
| API Name | System-wide Invoice List |
| Endpoint | /tng/billing/invoices |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| month | String | 〇 | Format: YYYY-MM |
| company_id | Number | - | Filter by specific company |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `month` query parameter is formatted properly. |
| 2. Data Acquisition & Verification | - Fetch records from `invoices` table mapped against all `companies` under the provided filters. |
| 3. State Check | - Combine logic with the Stripe backend if offline sync is delayed, to ensure statuses accurately reflect 'Paid'/'Unpaid' states. |
| 4. Update Processing | - None. Read-only operation. |
| 5. Response Return | - Return **200 OK** with array of invoice data. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "data": [<br>    {<br>      "id": 102,<br>      "company_id": 5,<br>      "amount": 25000,<br>      "status": "Paid",<br>      "month": "2026-03"<br>    }<br>  ]<br>}``` |
| Error (401) | ```json<br>{<br>  "success": false,<br>  "message": "AUTH-001-ERR-01"<br>}``` |

---
