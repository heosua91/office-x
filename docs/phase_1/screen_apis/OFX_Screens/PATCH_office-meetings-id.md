# PATCH /office/meetings/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Meeting Details |
| Endpoint | `/office/meetings/:id` |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String | 〇 | Target Meeting UUID |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| title | String | － | Meeting title |
| ai_template_id | String | － | Optional AI template UUID |
| participant_sync | Array | － | List of participants and seat IDs |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `id` exists. <br> - Verify current user is the host or has edit permissions. |
| 2. Data Acquisition & Verification | - Fetch meeting and room details to verify multi-device support if `seat_id` is provided. |
| 3. State Check | - Return **400 Bad Request** with `OFX-004-ERR-01` if the meeting has already concluded. |
| 4. Update Processing | - Update basic fields in `meetings`. <br> - Sync `meeting_participants` by performing differential comparisons (Delete removed, Update existing seats, Insert new). |
| 5. Response Return | - Queue calendar sync task. <br> - Return **200 OK** with updated metadata. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "meeting_id": "...", "title": "...", "updated_at": "..." } }` |
| Error (400 / 403) | `{ "success": false, "message": "OFX-004-ERR-02" }` |
