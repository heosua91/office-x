# GET /admin/settings/branding

### Item
| Item | Description |
| :--- | :--- |
| API Name | Get Branding Settings |
| Endpoint | /admin/settings/branding |
| Method | GET |

### Path Parameters
*None*

### Query Parameters
*None*

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Data Acquisition | - Fetch current S3 URLs or file paths for `logo`, `background_image`, and `screensaver_media` from the `company_media` table. |
| 2. Response Return | - Return the branding assets object. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "logo_url": "https://cdn.example.com/logo.png", "bg_url": "https://cdn.example.com/bg.jpg", "screensavers": ["https://cdn.example.com/s1.mp4", "https://cdn.example.com/s2.jpg"] }` |
