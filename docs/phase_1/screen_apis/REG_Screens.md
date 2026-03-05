# Screen vs API Mapping: REG (Registration)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **REG-001** | Xác nhận điều khoản sử dụng | Hiển thị T&C/Privacy Policy | *Chưa có* | ⚠️ Thiếu API lấy nội dung T&C |
| **REG-002** | Xác thực Email | Gửi mã OTP 6 chữ số | `POST /auth/register/verify-email` | ✅ Đúng |
| **REG-003** | Hoàn tất gửi Email | Thông báo đã gửi email | *Không cần API* | ✅ Đúng |
| **REG-004** | Nhập mã xác nhận | Xác thực mã OTP | `POST /auth/register/verify-code` | ✅ Đúng |
| **REG-005** | Nhập thông tin doanh nghiệp | Đăng ký Công ty & Admin ban đầu | `POST /auth/register/company` | ⚠️ Cần bổ sung đầy đủ các field (SĐT, Địa chỉ...) |
| **REG-006** | Xác nhận nội dung | Review thông tin đã nhập | *Không cần API* | ✅ Đúng |
| **REG-007** | Chọn gói cước (Plan) | Chọn Plan & Nhập Promo Code | `GET /auth/register/plans` | ⚠️ Thiếu API validate Promo Code |
| **REG-008** | Liên kết hệ thống thanh toán | Đăng ký thông tin thanh toán (Paid) | `POST /auth/register/payment` | ✅ Đúng |
| **REG-009** | Hoàn tất đăng ký | Hiển thị thông báo, trigger mail | `POST /auth/register/finalize` | ✅ Đúng |
