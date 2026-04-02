# POST /reception/check-in/qr

### Item
| Item | Description |
| :--- | :--- |
| API Name | Validate guest QR/Code and trigger notifications |
| Endpoint | /reception/check-in/qr |
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
| qr_code_hash | String | - | Sent via UKET-004 |
| booking_code | String | - | Sent via UKET-005 |

*Note: Exactly ONE of qr_code_hash or booking_code MUST be provided.*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Identify the tablet context (`company_id`) from the request auth token. <br> - Ensure at least one credential (hash or code) is supplied. Return 400 if bad request. |
| 2. Data Acquisition & Verification | - For `qr_code_hash`, perform a secure hash comparison if the payload is encrypted, or direct lookup in `meetings` table where `company_id` matches. <br> - Ensure against brute-force attacks by rate-limiting invalid attempts per tablet IP/Session. <br> - Return **401 Unauthorized** (or 404/400 logic) if not found or corrupted. |
| 3. State Check | - Validate meeting `status` is 'scheduled'. <br> - Ensure current server timestamp is within a reasonable buffer window of `start_time` (e.g. up to 15-30m before). <br> - Return 400 Bad Request with "Expired" or "Too early" message on failure. |
| 4. Update Processing | - Create a new record in `visit_logs` linking `meeting_id` and setting `check_in_time` to NOW(). <br> - Trigger automated host notification logic asynchronously via `notification_integrations`. |
| 5. Response Return | - Return **200 OK** indicating check-in success, alongside the resolving `meeting_room_id` so the tablet can fetch the map (UKET-010). |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "meeting_room_id": "uuid", "message": "UKET-004-SUC-01" }` |
| Error (400 / 401) | `{ "success": false, "message": "ERR-RES-CODE-01" }` |
