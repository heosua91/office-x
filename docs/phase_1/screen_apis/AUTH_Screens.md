# Screen vs API Mapping: AUTH (Authentication)

| Screen ID | Screen Name | Main Function | APIs (per Api.md) | Status |
| :--- | :--- | :--- | :--- | :--- |
| **AUTH-001** | Sign In | User/Admin Login | `POST /auth/login` | ✅ Correct |
| **AUTH-002** | Sign In for TNG | TNG Admin Login | `POST /auth/login` | ✅ Correct (Logic clarified) |
| **AUTH-003** | Reset Password | Request reset URL via email | `POST /auth/password-reset/request` | ✅ Correct |
| **AUTH-004** | Reset Email Sent | Success notification | *No API Required* | ✅ Correct |
| **AUTH-005** | Reset Password Setting | Set new password with Token | `POST /auth/password-reset/confirm` | ✅ Correct |
| **AUTH-006** | Reset Complete | Success notification | *No API Required* | ✅ Correct |
