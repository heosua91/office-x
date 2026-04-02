# POST /reception/check-in/vendor

### Item
| Item | Description |
| :--- | :--- |
| API Name | Logistics/Delivery vendor registration |
| Endpoint | /reception/check-in/vendor |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| vendor_id | UUID | - | Identified vendor ID if predefined |
| vendor_name | String | - | Or arbitrary text for "Other vendors" |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Identify the tablet context (`company_id`) from the request auth token. <br> - Require either `vendor_id` or `vendor_name` to be present. |
| 2. Data Acquisition & Verification | - Verify `vendor_id` against the configured company vendors if provided. |
| 3. State Check | - Enforce server-side check ensuring `reception_rejection_flag` is not true. |
| 4. Update Processing | - Create a `visit_logs` record representing a vendor short-term check-in. <br> - Enqueue the appropriate general or department-specific notification. |
| 5. Response Return | - Return **200 OK** indicating check-in success, triggering UKET-008. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "visit_log_id": "uuid", "message": "UKET-007-SUC-01" }` |
| Error (400) | `{ "success": false, "message": "ERR-VENDOR-001" }` |
