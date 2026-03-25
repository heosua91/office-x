# GET /auth/register/terms

### Item
| Item | Description |
| :--- | :--- |
| API Name | Fetch Terms and Privacy Policy |
| Endpoint | /auth/register/terms |
| Method | GET |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | No parameters required |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - No payload validation required for this GET request. |
| 2. Data Acquisition | - Retrieve the latest version of the Terms of Use and Privacy Policy from the system configuration or static content storage. |
| 3. State Check | - Verify that the content is active and available for display. |
| 4. Response Return | - Return **200 OK** with the `terms_html` and `privacy_policy_html` strings. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "terms_html": "<h1>Terms of Use</h1>...", "privacy_policy_html": "<h1>Privacy Policy</h1>..." }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-001-ERR-01" }` |
