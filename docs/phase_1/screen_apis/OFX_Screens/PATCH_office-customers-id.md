# PATCH /office/customers/:id

### Item
| Item | Description |
| :--- | :--- |
| API Name | Update Client Profile |
| Endpoint | `/office/customers/:id` |
| Method | PATCH |

### Path Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| id | String | 〇 | Target Client Company UUID |

### Query Parameters
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| - | - | - | - |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| company_name | String | － | Updated Company Name |
| pic_name | String | － | Person-In-Charge Name |
| booking_rules | Object | － | JSON defining default duration, format, etc. |
| regenerate_token | Boolean | － | If true, creates a new `invite_token` |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check if `id` is a valid UUID. <br> - Ensure user belongs to the same `company_id` as the client. |
| 2. Data Acquisition & Verification | - Fetch current client record from `client_companies`. |
| 3. State Check | - Return **404 Not Found** with `OFX-011-ERR-01` if client does not exist or is unauthorized. |
| 4. Update Processing | - Apply updates to columns in `client_companies`. <br> - If `regenerate_token` is true, generate a fresh unique UUID for the `invite_token` column. |
| 5. Response Return | - Return **200 OK** with the updated client ID and the current (or new) invite URL. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "data": { "client_company_id": "...", "invite_token_url": "..." } }` |
| Error (400 / 404) | `{ "success": false, "message": "OFX-012-ERR-02" }` |
