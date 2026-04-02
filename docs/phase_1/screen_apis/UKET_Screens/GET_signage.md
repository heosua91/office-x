# GET /reception/signage

### Item
| Item | Description |
| :--- | :--- |
| API Name | Fetch media slides for digital signage |
| Endpoint | /reception/signage |
| Method | GET |

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
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Extract the `company_id` from the authenticated device's JWT token. <br> - Return **401 Unauthorized** if the JWT token is invalid. |
| 2. Data Acquisition & Verification | - Query `company_media` table where `company_id` matches and `is_active` = TRUE. |
| 3. State Check | - Ensure that required default media (like logo or background) are identified. |
| 4. Update Processing | - No DB updates for this GET fetch. |
| 5. Response Return | - Return **200 OK** containing a structured list of media items with `type`, `url`, `play_interval_seconds`, and `display_order`. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "media": [ { "type": "logo", "url": "...", "duration": 0 }, { "type": "slide_image", "url": "...", "display_order": 1, "duration": 10 } ] }` |
| Error (400 / 401) | `{ "success": false, "message": "ERR-AUTH-001" }` |
