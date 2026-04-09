# GET /office/schedule/gantt

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Room Gantt Schedule |
| Endpoint | `/office/schedule/gantt` |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| date | String | － | Format YYYY-MM-DD. Defaults to current date. |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Parse and validate `date` format. <br> - Return **400 Bad Request** if date format is invalid. |
| 2. Data Acquisition & Verification | - Fetch all active `meeting_rooms` for the user's `company_id`. <br> - Retrieve all `meetings` and `reservations` for those rooms on the target `date`. |
| 3. State Check | - For each reservation, check visibility permissions via `meeting_permissions`. <br> - If the user is not a participant and the meeting is private, mask details (Title -> "Busy (Private)"). |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Construct a Gantt-compatible JSON structure mapping rooms to their respective reservation timeline blocks. <br> - Return **200 OK**. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "timeline_date": "2026-04-02", "rooms": [ { "room_id": "...", "name": "Alpha", "floor": "2F", "reservations": [ { "meeting_id": "...", "start_time": "10:00:00", "end_time": "11:00:00", "title": "Marketing Sync", "host_name": "Sato", "is_private_masked": false } ] } ] } }` |
| Error (400) | `{ "success": false, "message": "OFX-005-ERR-02" }` |
