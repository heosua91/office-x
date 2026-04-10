# POST /tng/ai/approve-overage

### Item
| Item | Description |
| :--- | :--- |
| API Name | Finalize/Approve AI Overage Billing |
| Endpoint | /tng/ai/approve-overage |
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
| ids | Array | 〇 | List of Company IDs or Specific Log Line IDs to finalize |
| period | String | 〇 | Period being finalized (e.g. YYYY-MM) |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Ensure array exists and `period` is correctly structured. |
| 2. Data Acquisition & Verification | - Re-verify usage amounts from `usage_logs` matching the specified IDs and constraints. |
| 3. State Check | - Determine if the given items have already been compiled into a generated invoice string to avoid duplicate billings. Return **400 Bad Request** on double execution. |
| 4. Update Processing | - Mutate the status of selected `usage_logs` to 'Invoiced' or 'Finalized'. <br> - Trigger the Stripe Invoice Items API mapping pushing line items to Stripe `invoices`. |
| 5. Response Return | - Return **200 OK** on successful transaction to external billing system. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "message": "S001"<br>}``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "E006"<br>}``` |

---
