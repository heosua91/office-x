# GET /tng/companies

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Contract Companies List |
| Endpoint | /tng/companies |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| keyword | String | - | Search by company name or representative |
| status | String | - | Filter by contract status (Active, Suspended, etc.) |
| plan | String | - | Filter by specific plan ID |
| page | Number | - | For pagination |
| limit | Number | - | Records per page |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if query parameters are valid types. <br> - Return **400 Bad Request** if format is wrong. |
| 2. Data Acquisition & Verification | - Verify TNG Admin token. <br> - Fetch data from `companies`, joined with `subscription_plans`, counting associated `users`, and parsing AI usage logs. |
| 3. State Check | - Calculate expiration warnings and usage limits remaining based on quota configurations inside `companies` table. |
| 4. Update Processing | - No updates. Read-only operation. |
| 5. Response Return | - Return **200 OK** with an array of company statistics along with pagination metadata. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "data": [<br>    {<br>      "id": 1,<br>      "company_name": "Tech Corp",<br>      "status": "Active",<br>      "plan": "Premium",<br>      "expires_at": "2026-12-31",<br>      "users_active": 45,<br>      "users_limit": 50,<br>      "ai_minutes_used": 1500,<br>      "ai_minutes_limit": 2000,<br>      "billing_status": "Paid"<br>    }<br>  ],<br>  "pagination": { "total": 1, "page": 1, "limit": 20 }<br>}``` |
| Error (401) | ```json<br>{<br>  "success": false,<br>  "message": "AUTH-001-ERR-02"<br>}``` |

---
