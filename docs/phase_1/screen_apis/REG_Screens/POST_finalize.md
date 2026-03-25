# POST /auth/register/finalize

### Item
| Item | Description |
| :--- | :--- |
| API Name | Finalize Registration |
| Endpoint | /auth/register/finalize |
| Method | POST |

### Request Parameters (Payload)
| Field | Type | Required | Note |
| :--- | :--- | :--- | :--- |
| company_id | String | 〇 | ID of the registering company |

### Processing Details
| Phase | Details |
| :--- | :--- |
| 1. Request Validation | - Check for required `company_id`. |
| 2. Integrity Checks | - Confirm company, admin, and payment association. |
| 3. State Activation | - Set `companies.status` to `'active'`. <br> - Create records in `subscriptions` and `usage_quotas`. |
| 4. Onboarding Workflow | - **Queue Entry**: Push a task to `onboarding-service-queue`. <br> - **Worker Tasks**: <br>   1. Generate greeting email. <br>   2. Attach PDF manuals. <br>   3. Perform SMTP dispatch. |
| 5. Response Return | - Return **200 OK** indicating the system is officially configured for the new tenant. |

### Response
| Case | Content |
| :--- | :--- |
| Success (200 OK) | `{ "success": true, "message": "REG-009-SUC-01" }` |
| Error (400 / 401) | `{ "success": false, "message": "REG-008-ERR-02" }` |
