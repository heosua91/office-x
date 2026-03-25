# GET /admin/billing/ai-quota/details

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Granular AI Usage Logs |
| Endpoint | /admin/billing/ai-quota/details |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| start_date | String (Date) | - | Filter by usage start. |
| end_date | String (Date) | - | Filter by usage end. |
| user_id | String | - | Filter by meeting host. |
| page | Number | - | Default: 1 |
| limit | Number | - | Default: 20 |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Acquisition | - Fetch detailed records from `usage_logs` for current `company_id`. <br> - Includes specific items: `transcription_minutes`, `summary_requested`, `audio_duration`. |
| 2. Response Return | - Return the chronological list of usage occurrences for auditing. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "data": [{ "id": 100, "meeting_name": "Weekly Sync", "host": "John D.", "duration": 45, "date": "2026-03-15" }, ...] }` |
