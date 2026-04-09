# PUT /office/settings/profile

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Base Profile |
| Endpoint | `/office/settings/profile` |
| Method | PUT |

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
| display_name | String | － | Updated display name |
| current_password| String | － | Required for password change |
| new_password | String | － | Minimal complexity required |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check password strength if `new_password` is provided. <br> - Return **400 Bad Request** if criteria fail. |
| 2. Data Acquisition & Verification | - Verify `current_password` against the stored hash in the `users` table. |
| 3. State Check | - Return **401 Unauthorized** with `AUTH-001-ERR-02` if old password is incorrect. |
| 4. Update Processing | - Update `full_name` or `password` (hashed) in the `users` table. |
| 5. Response Return | - Return **200 OK** on successful update. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "Update Success" }` |
| Error (400 / 401) | `{ "success": false, "message": "OFX-017-ERR-01" }` |
