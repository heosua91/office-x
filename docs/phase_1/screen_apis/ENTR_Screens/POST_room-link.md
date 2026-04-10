# POST /room/:id/link

### Item
| Item | Description |
| :--- | :--- |
| API Name | Link Device to Room |
| Endpoint | /room/:id/link |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String (UUID) | 〇 | The unique identifier of the meeting room to link. |

### Query Parameters
None.

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| device_identifier | String | 〇 | Unique hardware ID or serial of the tablet. |
| password | String | 〇 | Security password set during room registration. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `id`, `device_identifier`, and `password` are provided. <br> - Return **400 Bad Request** if any field is missing. |
| 2. Data Acquisition & Verification | - Retrieve the meeting room record from `meeting_rooms` using the provided `id`. <br> - Verify if a device record exists in `reception_devices` matching the `device_identifier` and `password`. <br> - Return **401 Unauthorized** (ENTR-001-ERR-01) if validation or credentials fail. |
| 3. State Check | - Ensure the meeting room is active (`is_active = TRUE`). <br> - Check if the room is already linked to another device (optional, based on occupancy rules). |
| 4. Update Processing | - Update the `meeting_room_id` in the `reception_devices` table for the matching device. <br> - Set the device `status` to 'online'. |
| 5. Response Return | - Return **200 OK** with a success message and room configuration details. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "Room linked successfully", "data": { "room_name": "Meeting Room A", "is_multi_device": true } }` |
| Error (400 / 401) | `{ "success": false, "message": "ENTR-001-ERR-01" }` |
