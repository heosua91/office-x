# PATCH /admin/settings/branding

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Branding Settings |
| Endpoint | /admin/settings/branding |
| Method | PATCH |

### Path Parameters
*None*

### Query Parameters
*None*

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| logo | Binary / Image | - | New company logo. |
| background_image | Binary / Image | - | New signage background. |
| screensavers | Array (Binary) | - | List of new media for digital signage. |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. File Upload Processing | - Extract binary files from `multipart/form-data`. <br> - Perform format and size validation. <br> - Upload to the storage backend (e.g. S3). |
| 2. File Cleanup | - Optional: delete old files if replacement occurs. |
| 3. Data Persistence | - UPDATE `company_media` table for target `company_id`. |
| 4. Response Return | - Return **202 Accepted** on success. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "ADMX-011-SUC-01" }` |
| Bad Request (400) | `{ "success": false, "message": "ADMX-011-ERR-01" }` |
| Forbidden (403) | `{ "success": false, "message": "SYS-000-ERR-02" }` |
