# DELETE /guest/documents/:token/:doc_id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Delete Guest Document |
| Endpoint | `/guest/documents/:token/:doc_id` |
| Method | DELETE |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| token | String | 〇 | Meeting invite token (UUID) |
| doc_id | String | 〇 | Document UUID to delete |

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
| 1. Request Validation | - Verify that the `token` matches an active meeting. <br> - Ensure `doc_id` is a valid UUID. |
| 2. Data Acquisition & Verification | - Fetch document details from `meeting_documents`. <br> - Confirm the document belongs to the meeting resolved by the `token`. |
| 3. State Check | - Return **403 Forbidden** if the document was not uploaded by a guest (`uploader_guest_id` is null). |
| 4. Update Processing | - Delete the file from S3 storage. <br> - Perform a hard delete (or soft delete) of the record in `meeting_documents`. |
| 5. Response Return | - Return **200 OK** on successful deletion. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "deleted_doc_id": "902" } }` |
| Error (400 / 403) | `{ "success": false, "message": "SYS-000-ERR-02" }` |
