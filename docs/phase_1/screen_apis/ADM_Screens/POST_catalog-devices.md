# POST /tng/catalog/devices

### Item
| Item | Description |
| :--- | :--- |
| API Name | Manage Equipment Sale and Rental |
| Endpoint | /tng/catalog/devices |
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
| id | String | - | Send `null` or undefined when creating new |
| item_name | String | 〇 | Name of equipment |
| category | String | 〇 | "Rental" or "Sale" |
| price | Number | 〇 | Monthly fee or Sale price |
| revision_rule | String | - | "Keep" or "Update_all", required for modifications |
| apply_date | String | - | Expected date of mass update |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Prevent overlapping `item_name` conflicts if creating. <br> - Ensure `apply_date` is >= Today. Return **400 Bad Request** if logic violates boundaries. |
| 2. Data Acquisition & Verification | - Assert TNG Admin JWT. |
| 3. State Check | - If updating (`id` present), verify the device exists in `device_catalog`. |
| 4. Update Processing | - Create/Insert or Update the row in `device_catalog`. <br> - If `revision_rule` == `Update_all`, schedule an async job to iterate through `company_devices` updating assigned pricing variables by `apply_date`. |
| 5. Response Return | - Return **200 OK** indicating persistence success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "message": "S001"<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E006"<br>}``` |

---
