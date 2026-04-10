# POST /room/:id/consent

### Item
| Item | Description |
| :--- | :--- |
| API Name | Record Participant Consent |
| Endpoint | /room/:id/consent |
| Method | POST |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String (UUID) | 〇 | The unique identifier of the meeting room. |

### Query Parameters
None.

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| participant_id | String (UUID) | 〇 | The ID of the participant giving/denying consent. |
| has_consented | Boolean | 〇 | TRUE if agreed to recording, FALSE otherwise. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Ensure all payload fields are present. |
| 2. Data Acquisition & Verification | - Verify `participant_id` belongs to the meeting ongoing in room `id`. |
| 3. State Check | None. |
| 4. Update Processing | - Log the consent in `meeting_participants` (metadata or specific flag). <br> - If `has_consented = FALSE`, trigger notification to Host device that full meeting recording may be affected. |
| 5. Response Return | - Return **200 OK**. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "Consent recorded" }` |
| Error (400) | `{ "success": false, "message": "ENTR-008-ERR-04" }` |
