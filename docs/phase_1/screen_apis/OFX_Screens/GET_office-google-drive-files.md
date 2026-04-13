# GET /office/google-drive/files

### Item
| Item | Description |
| :--- | :--- |
| API Name | Proxy Google Drive Files |
| Endpoint | /office/google-drive/files |
| Method | GET |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| search | String | - | Keyword |
| pageToken | String | - | Token to retrieve the next page of results |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Validates JWT signature. <br> - Return **400 Bad Request** if invalid formatting. |
| 2. Data Acquisition & Verification | - Queries `users` or integration mapping tables to retrieve Google API Access Token. <br> - Return **401 Unauthorized** if not linked or token is heavily expired. |
| 3. State Check | - Refreshes token bounds with Google API if necessary natively inside backend boundary. |
| 4. Update Processing | - Executes HTTP GET towards Google Drive API v3 parsing metadata Read-only responses. |
| 5. Response Return | - Return **200 OK** containing array of Google Drive Documents (id, name, link). |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "files": [ { "id": "g-123", "name": "Report" } ] } }` |
| Error (400) | `{ "success": false, "message": "ERR-EXT-001" }` |
