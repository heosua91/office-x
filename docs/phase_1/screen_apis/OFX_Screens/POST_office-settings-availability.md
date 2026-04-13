# POST /office/settings/availability

### Item
| Item | Description |
| :--- | :--- |
| API Name | Setup My Booking Availability |
| Endpoint | /office/settings/availability |
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
| bookable_days | Array | 〇 | List of allowed days |
| default_start | String | 〇 | HH:mm |
| default_end | String | 〇 | HH:mm |
| booking_deadline | Number | 〇 | Constraints on when to book |
| buffer_time | Number | 〇 | Minutes buffer between meetings |
| blocked_dates | Array | - | List of specific unavailable date/times |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify start is before end time, validate buffer formats. <br> - Return **400 Bad Request** if invalid format. |
| 2. Data Acquisition & Verification | - Fetch JWT user resolving constraints. <br> - Return **401 Unauthorized** if token is bad. |
| 3. State Check | - Ensure blocked dates don't overlap logic impossibly. |
| 4. Update Processing | - Updates/Upserts rows in the `user_availability` table with the requested schedule logic for the user. |
| 5. Response Return | - Return **200 OK** asserting new schedule limits online. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "SUC-001" }` |
| Error (400) | `{ "success": false, "message": "ERR-CMN-001" }` |
