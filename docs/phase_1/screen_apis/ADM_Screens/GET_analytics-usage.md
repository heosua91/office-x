# GET /tng/analytics/usage

### Item
| Item | Description |
| :--- | :--- |
| API Name | Fetch Multi-tenant AI Usage Analytics |
| Endpoint | /tng/analytics/usage |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| period | String | 〇 | Format: YYYY-MM |
| keyword | String | - | Optional. Filter over-quota companies. |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check `period` string configuration. |
| 2. Data Acquisition & Verification | - Group AI duration aggregations across all `usage_logs` matching the specified `period` month limit constraints. |
| 3. State Check | - Cross-reference total summarized minute pools against quota limits defined within the `companies` table. Flag any records exceeding the threshold. <br> - Compute the Postpaid totals based on the specific company's overage `price`. |
| 4. Update Processing | - Read-only operation. |
| 5. Response Return | - Return **200 OK** formatting arrays and totals needed to paint charts / tables. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "statistics": {<br>    "total_minutes": 1250000,<br>    "postpaid_count": 45,<br>    "postpaid_amount_total": 2500000<br>  },<br>  "chart": { "free": 60, "prepaid": 10, "postpaid": 30 },<br>  "overquota_companies": [<br>    {<br>      "company_id": 9,<br>      "company_name": "Acme Inc",<br>      "overage_time": 1500,<br>      "expected_billing": 15000<br>    }<br>  ]<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E001"<br>}``` |

---
