# PATCH /room/:id/extend

### Item
| Item | Description |
| :--- | :--- |
| API Name | Extend Meeting Duration |
| Endpoint | /room/:id/extend |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String (UUID) | 〇 | The unique identifier of the meeting room. |

### Query Parameters
None.

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| extension_minutes | Number | 〇 | Minutes to add (Default: 15). |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate `extension_minutes` > 0. |
| 2. Data Acquisition & Verification | - Identify active meeting in room `id`. <br> - Fetch existing `meetings` data. |
| 3. State Check | - Conflict Check: Query `meetings` for any other reservation in the same room that overlaps with the extended `end_time`. <br> - Return **400 Bad Request** (ENTR-009-ERR-01) if conflict detected. |
| 4. Update Processing | - Update `end_time` in `meetings` table. |
| 5. Response Return | - Return **200 OK** with new `end_time`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "new_end_time": "2026-04-09T12:15:00" } }` |
| Error (400) | `{ "success": false, "message": "ENTR-009-ERR-01" }` |
