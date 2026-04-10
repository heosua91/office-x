# GET /tng/plans

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Subscription Plans |
| Endpoint | /tng/plans |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| include_special | Boolean | - | Flag to include hidden/special plans |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - No specific requirements. Valid Token check. |
| 2. Data Acquisition & Verification | - Fetch array of configurations from `subscription_plans` table. |
| 3. State Check | - Retrieve linked feature enablement JSON/flags for each plan. |
| 4. Update Processing | - Read-only operation. |
| 5. Response Return | - Return **200 OK** returning all available configuration data. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "data": [<br>    {<br>      "id": 1,<br>      "name": "Standard Plan",<br>      "price": 50000,<br>      "features": {<br>        "booking": true,<br>        "reception": true<br>      },<br>      "retention_policy": "unlimited",<br>      "is_special": false<br>    }<br>  ]<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E001"<br>}``` |

---
