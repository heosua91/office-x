# POST /reception/check-in/no-appointment

### Item
| Item | Description |
| :--- | :--- |
| API Name | Walk-in visitor registration |
| Endpoint | /reception/check-in/no-appointment |
| Method | POST |

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
| visitor_name | String | 〇 | Name of the visitor |
| company_name | String | - | Name of the visitor's company |
| department_id | UUID | 〇 | Destination Department |
| purpose_id | UUID | 〇 | Purpose of visit |
| additional_info | String | - | Extra details |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Identify the tablet context (`company_id`) from the request auth token. <br> - Check if `visitor_name`, `department_id`, and `purpose_id` are provided. Return 400 Bad Request if missing. |
| 2. Data Acquisition & Verification | - Ensure `department_id` and `purpose_id` exist within the requested `company_id`. <br> - Return **404 Not Found** if the department or purpose does not exist. |
| 3. State Check | - Verify that the `purpose_id` does not have `reception_rejection_flag` = TRUE at the server level (double-check after frontend validation). <br> - Return 400 Bad Request if reception is rejected for the given condition. |
| 4. Update Processing | - Create a new ad-hoc `meetings` record with `status` = 'walk-in' or null. <br> - Create a new record in `visit_logs` linking the ad-hoc meeting and setting `check_in_time` to NOW(). <br> - Fire notification worker asynchronously using the appropriate integration mapping for the selected department. |
| 5. Response Return | - Return **200 OK** indicating checking success, triggering UKET-008 to display notification status. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "visit_log_id": "uuid", "message": "UKET-006-SUC-01" }` |
| Error (400) | `{ "success": false, "message": "ERR-NO-APP-001" }` |
