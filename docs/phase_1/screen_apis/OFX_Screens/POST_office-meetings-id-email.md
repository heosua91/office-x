# POST /office/meetings/:id/email

### Item
| Item | Description |
| :--- | :--- |
| API Name | Generate AI Email Draft |
| Endpoint | `/office/meetings/:id/email` |
| Method | POST |

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
| template_type | String | 〇 | e.g., `thank_you_basic` |
| focus_context | String | － | Optional focus instructions for AI |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if meeting `id` exists and user is a participant. |
| 2. Data Acquisition & Verification | - Fetch meeting summary from `meeting_summaries`. <br> - Retrieve user's email signature from the `users` table. |
| 3. State Check | - Return **404 Not Found** with `OFX-015-ERR-02` if meeting summary context is missing. |
| 4. Update Processing | - Trigger AI pipeline using the summary context and `template_type`. <br> - Construct the draft including subject, body, and user signature. |
| 5. Response Return | - Return **200 OK** with the generated subject and body. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "draft_subject": "...", "draft_body": "..." } }` |
| Error (400 / 500) | `{ "success": false, "message": "OFX-015-ERR-01" }` |
