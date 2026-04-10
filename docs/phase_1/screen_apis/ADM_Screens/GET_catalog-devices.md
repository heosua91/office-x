# GET /tng/catalog/devices

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Equipment Catalog Devices |
| Endpoint | /tng/catalog/devices |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| type | String | - | Optional filter for 'Sale' or 'Rental' |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| None | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Authenticate TNG Admin Token. |
| 2. Data Acquisition & Verification | - Query the `device_catalog` table. Select items matching the `type` constraint if provided. <br> - Join/Evaluate logic against `company_devices` to mark the `is_in_use` flag (which prevents deletion). |
| 3. State Check | - Build the response list showing current active prices. |
| 4. Update Processing | - Read-only operation. |
| 5. Response Return | - Return **200 OK** returning the array of device inventory information. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "data": [<br>    {<br>      "id": "dev_01",<br>      "item_name": "Tablet Stand A",<br>      "category": "Rental",<br>      "price": 1000,<br>      "is_in_use": true<br>    }<br>  ]<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E001"<br>}``` |

---
