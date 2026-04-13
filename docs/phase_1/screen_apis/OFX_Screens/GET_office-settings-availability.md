# GET /office/settings/availability

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get My Booking Availability |
| Endpoint | /office/settings/availability |
| Method | GET |

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
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate JWT headers. <br> - Return **400 Bad Request** if validation fails. |
| 2. Data Acquisition & Verification | - Query `user_availability` table filtered by requester ID. <br> - Return **401 Unauthorized** if identity unrecognized. |
| 3. State Check | - Check for both weekly recurring rules and temporary unavailability blocks inside the records. |
| 4. Update Processing | - N/A (Read-only) |
| 5. Response Return | - Return **200 OK** containing structured array of days, buffer times, bounds, and list of blocked dates. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "days": ["Mon", "Tue"], "start": "09:00", "end": "18:00", "buffer": 15, "blocks": [] } }` |
| Error (401) | `{ "success": false, "message": "ERR-AUTH-001" }` |
