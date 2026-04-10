# POST /room/:id/stream

### Item
| Item | Description |
| :--- | :--- |
| API Name | Upload Audio Stream Chunk |
| Endpoint | /room/:id/stream |
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
| audio_blob | Binary / Base64 | 〇 | The audio data chunk. |
| participant_id| String (UUID) | 〇 | Originating participant. |
| timestamp | Number | 〇 | Milliseconds offset for syncing. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required binary data and identifiers. |
| 2. Data Acquisition & Verification | - Identify active meeting and associated `meeting_recordings` record. |
| 3. State Check | - Ensure recording status is 'processing' or 'active'. |
| 4. Update Processing | - Append audio blob to S3 storage bucket. <br> - Update `meeting_recordings.file_size_bytes`. <br> - Push audio segment to the STT processing queue (Asynchronous). |
| 5. Response Return | - Return **202 Accepted** to acknowledge receipt. |

### Response
| Case | Content |
| :--- | :--- |
| Success (202 Accepted)| `{ "success": true }` |
| Error (400 / 500) | `{ "success": false, "message": "ENTR-008-ERR-02" }` |
