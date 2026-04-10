# GET /tng/promo-codes

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Promotion Codes |
| Endpoint | /tng/promo-codes |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify TNG Admin access. |
| 2. Data Acquisition & Verification | - Query `promo_codes` DB table. Optional sync with Stripe external source. |
| 3. State Check | - Determine Active vs Expired statuses dynamically based on the current timestamp against expiration limits or maximum usage thresholds. |
| 4. Update Processing | - Read-only operation. |
| 5. Response Return | - Return **200 OK** providing a list of all active/expired discount logic codes. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "data": [<br>    {<br>      "id": 8,<br>      "code": "SUMMER2026",<br>      "discount_type": "PERCENT",<br>      "value": 20,<br>      "uses_remaining": 50,<br>      "expires_at": "2026-08-31"<br>    }<br>  ]<br>}``` |
| Error (401) | ```json<br>{<br>  "success": false,<br>  "message": "AUTH-001-ERR-02"<br>}``` |

---
