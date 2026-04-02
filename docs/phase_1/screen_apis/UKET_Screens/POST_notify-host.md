# POST /reception/notify-host

### Item
| Item | Description |
| :--- | :--- |
| API Name | Send Slack/Teams/Email alert to host |
| Endpoint | /reception/notify-host |
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
| visit_log_id | UUID | 〇 | Target visit log to notify about |
| is_retry | Boolean | - | True if this is a secondary ping |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Identify tablet `company_id`. <br> - Require `visit_log_id`. Return 400 if missing. |
| 2. Data Acquisition & Verification | - Fetch the meeting and host user details using `visit_log_id`. |
| 3. State Check | - Verify that the host hasn't already 'acknowledged' the visit. If they have, return a fast 200 without sending alerts. |
| 4. Update Processing | - Add an entry into `notification_logs` (or increment retry count). <br> - Optional Rate Limiting: If `is_retry` is true, verify the last ping was at least 30 seconds ago to prevent frontend spam. <br> - Push a background job to the queue that executes the webhook/email alert indicating a visitor is waiting. <br> - NOTE: The external webhook receiver (Slack/Teams interaction endpoint) will be responsible for subsequently publishing a WebSocket event back to the frontend when the host actually clicks "Acknowledge" within Slack. |
| 5. Response Return | - Return **200 OK** indicating the notification is enqueued. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "UKET-008-SUC-01" }` |
| Error (400) | `{ "success": false, "message": "ERR-NOTIFY-001" }` |
