# GET /office/meetings/:id/ai

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Meeting AI Insights |
| Endpoint | `/office/meetings/:id/ai` |
| Method | GET |

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
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `id` is a valid UUID format. <br> - Verify user has permissions to view AI data for the given meeting from `meeting_permissions`. |
| 2. Data Acquisition & Verification | - Fetch transcript file URL from `meeting_transcripts`. <br> - Retrieve time-synced segments from `transcript_segments` sorted by `start_time_ms`. <br> - Fetch AI summary and decisions from `meeting_summaries`. <br> - Retrieve linked tasks from `action_items`. |
| 3. State Check | - Return **403 Forbidden** with `SYS-000-ERR-02` if user lacks permission. <br> - Return **404 Not Found** with `OFX-013-ERR-02` if AI data is not yet generated. |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with a single composite object containing audio URL, summary, action items, and transcript segments. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "meeting_id": "...", "audio_blob_url": "...", "summary": "Meeting concluded Q2 logistics.", "action_items": [ { "id": "...", "task": "Send contract", "assignee": "Yuki", "is_completed": false } ], "segments": [ { "id": "...", "speaker_id": "...", "speaker_name": "Yuki", "start_time_ms": 1200, "end_time_ms": 5400, "text": "Hello everyone, let's start." } ] } }` |
| Error (403 / 404) | `{ "success": false, "message": "OFX-013-ERR-02" }` |
