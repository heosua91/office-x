# POST /guest/reserve

### Item
| Item | Description |
| :--- | :--- |
| API Name | Submit Guest Booking Reservation |
| Endpoint | /guest/reserve |
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
| invite_token | String | 〇 | Identifies the booking constraints. |
| selected_slot | String | 〇 | ISO8601 combination of selected date and time. |
| company_name | String | 〇 | Name of guest's company. |
| guest_name | String | 〇 | Full name of primary guest. |
| guest_email | String | 〇 | Email of primary guest. |
| guest_phone | String | 〇 | Phone number. |
| companions | Array | － | Array of objects `{ name, email }`. |
| documents | Array | － | Array of pre-uploaded S3 temp keys or attachments. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validate all required input formats (e.g., Email, Phone limits). <br> - Return **400 Bad Request** using `ERR-CMN...` message ID on failure. |
| 2. Data Acquisition & Verification | - Validate `invite_token` against `meetings` table. <br> - Ensure the `selected_slot` is still strictly available (prevent double-booking concurrency) against `reservations`/`user_availability`. <br> - Return **400 Bad Request** if slot taken (`ERR-APT-001`). |
| 3. State Check | - Check if external calendar API confirms availability if synced. |
| 4. Update Processing | - **Database Updates**: <br>   1) Insert into `guests` using client details (link to `client_companies` if existing by email domain heuristic). <br>   2) Insert into `meeting_participants` linking the booking `meeting_id` to the `guest_id`. <br>   3) Update `meetings` record: Set `start_time`, `end_time`, `qr_code_hash`, `booking_code`, `status` = 'scheduled'. <br> - **Background Process**: <br>   1) Dispatch a Mail Job to send confirmation emails. <br>   2) Trigger Calendar API to add events in Host's calendar. |
| 5. Response Return | - Return **200 OK** containing the final `meeting_url` or `qr_code_hash` + `booking_code` dependent on meeting nature. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | ```json<br>{<br>  "success": true,<br>  "data": {<br>    "qr_code_hash": "a1b2c3d4e5",<br>    "booking_code": "94821",<br>    "meeting_url": null<br>  }<br>}<br>``` |
| Error (400) | ```json<br>{<br>  "success": false,<br>  "message": "ERR-CMN-001"<br>}<br>``` |
