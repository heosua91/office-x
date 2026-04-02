# GET /reception/map/:room_id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Fetch guiding map for visitor path |
| Endpoint | /reception/map/:room_id |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| room_id | UUID | 〇 | ID of the specified meeting room |

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
| 1. Request Validation | - Identify the tablet context (`company_id`) from request headers/auth. <br> - Check if `room_id` is supplied and formatted correctly. |
| 2. Data Acquisition & Verification | - Look up `meeting_rooms` by `room_id` within the `company_id`. <br> - Return 404 Not Found if room doesn't exist. |
| 3. State Check | - No complex logic needed; just fetch configured floor mapping settings. |
| 4. Update Processing | - Read map asset URLs associated with the room (e.g., from `facilities` or `images`). <br> - Ensure paths to the public-facing QR generation link are fully formed. |
| 5. Response Return | - Return **200 OK** exposing the `map_image_url`, `room_name`, and `qr_view_url`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "map_image_url": "url", "room_name": "Room A", "qr_view_url": "url_for_visitor_mobile" }` |
| Error (404) | `{ "success": false, "message": "ERR-ROOM-004" }` |
