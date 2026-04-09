# GET /guest/documents/:token

### Item
| Item | Description |
| :--- | :--- |
| API Name | List Guest Documents |
| Endpoint | `/guest/documents/:token` |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| token | String | 〇 | Meeting invite token (UUID) |

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
| 1. Request Validation | - Verify meeting `token` exists and meeting hasn't finished. |
| 2. Data Acquisition & Verification | - Fetch `meeting_documents` where `meeting_id` matches the token and `uploader_guest_id` is NOT NULL. |
| 3. State Check | - (None specifically, empty list if no docs) |
| 4. Update Processing | - (None for this GET request) |
| 5. Response Return | - Return **200 OK** with a list of documents, meeting title, and host name. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "meeting_title": "...", "host_name": "...", "documents": [ { "doc_id": "...", "filename": "...", "file_size": 2048576, "uploaded_at": "..." } ] } }` |
| Error (404) | `{ "success": false, "message": "SYS-000-ERR-03" }` |
