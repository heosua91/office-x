# POST /guest/documents/:token

### Item
| Item | Description |
| :--- | :--- |
| API Name | Upload Guest Document |
| Endpoint | `/guest/documents/:token` |
| Method | POST |

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
| file | File | 〇 | Multi-part form data (Max 10MB) |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Verify token and meeting state. <br> - Check file size and MIME type. |
| 2. Data Acquisition & Verification | - Resolve `meeting_id` from the `token`. |
| 3. State Check | - (None specifically, flows into upload) |
| 4. Update Processing | - Upload file to S3. <br> - Insert metadata into `meeting_documents` with `uploader_guest_id` linked to the current guest context. |
| 5. Response Return | - Return **200 OK** with uploaded document metadata. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "doc_id": "...", "filename": "...", "file_size": 1045200, "uploaded_at": "..." } }` |
| Error (400) | `{ "success": false, "message": "SYS-000-ERR-05" }` |
