# Screen vs API Mapping: AUTH (Authentication)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **AUTH-001** | Sign In | Đăng nhập User/Admin | `POST /auth/login` | ✅ Đúng |
| **AUTH-002** | Sign In cho TNG | Đăng nhập TNG Admin | `POST /auth/login` | ⚠️ Cần làm rõ phân quyền login |
| **AUTH-003** | Reset Password | Yêu cầu gửi mã reset qua email | `POST /auth/password-reset/request` | ✅ Đúng |
| **AUTH-004** | Hoàn tất gửi reset | Thông báo đã gửi | *Không cần API* | ✅ Đúng |
| **AUTH-005** | Thiết lập lại Password | Nhập password mới với Token | `POST /auth/password-reset/confirm` | ✅ Đúng |
| **AUTH-006** | Hoàn tất thiết lập lại | Thông báo thành công | *Không cần API* | ✅ Đúng |
