# PATCH /office/meetings/:id/summary

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Meeting Summary |
| Endpoint | `/office/meetings/:id/summary` |
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
| summary_text | String | － | Manually edited summary text |
| internal_notes | String | － | Private notes for the company |
| action_items_sync | Array | － | List of updated/new action items |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify meeting `id` and user permissions. <br> - Validate that the meeting has ended and a summary exists. |
| 2. Data Acquisition & Verification | - Retrieve existing summary from `meeting_summaries`. <br> - Fetch current action items from `action_items`. |
| 3. State Check | - Return **404 Not Found** with `OFX-014-05` if summary record does not exist. |
| 4. Update Processing | - Update `summary_text` and `internal_notes` in `meeting_summaries`. <br> - Perform differential update (UPSERT/DELETE) on `action_items` table based on `action_items_sync` payload. |
| 5. Response Return | - Return **200 OK** on successful update. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "meeting_id": "..." } }` |
| Error (400 / 404) | `{ "success": false, "message": "OFX-014-ERR-05" }` |
