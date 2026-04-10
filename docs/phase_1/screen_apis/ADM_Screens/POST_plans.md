# POST /tng/plans

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Subscription Plan |
| Endpoint | /tng/plans |
| Method | POST |

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
| id | Number | 〇 | ID of the plan to modify |
| price | Number | 〇 | New monthly rate |
| effective_date | String | 〇 | Date the new rate applies (YYYY-MM-DD) |
| retention_policy | String | 〇 | Policy identifier |
| is_special | Boolean | 〇 | Whether it's hidden from public tables |
| features | Object | 〇 | JSON map of feature flags/toggles |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify `effective_date` is >= Today. <br> - Return **400 Bad Request** for negative values on pricing. |
| 2. Data Acquisition & Verification | - Fetch TNG Admin credentials and authenticate. |
| 3. State Check | - Retrieve plan by `id` from `subscription_plans`. <br> - Stop if plan does not exist in the system (return **400 Bad Request**). |
| 4. Update Processing | - Directly update `subscription_plans` row for features/properties. <br> - If `price` changes, schedule an asynchronous queue job triggering the recalculation across all associated active `companies` records from the `effective_date`. |
| 5. Response Return | - Return **200 OK** acknowledging updates and background task initiation. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "message": "S001"<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E006"<br>}``` |

---
