# Screen vs API Mapping: GRES (Guest Reservation)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **GRES-001** | Chọn ngày giờ | Hiển thị lịch trống Host & Phòng | `GET /guest/availability` | ✅ Đúng |
| **GRES-002** | Nhập thông tin Guest | Đăng ký thông tin người đến | *Part of Finalize* | ✅ Đúng |
| **GRES-003** | Confirm Registration | Chốt thông tin | *UI Only* | ✅ Đúng |
| **GRES-004** | Hoàn tất Regis | Lưu database, tạo QR, gửi mail | `POST /guest/reserve` | ✅ Đúng |
