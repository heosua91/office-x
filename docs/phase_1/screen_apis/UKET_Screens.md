# Screen vs API Mapping: UKET (Reception)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **UKET-001** | Device Sign In | Xác thực Tablet sảnh | `POST /reception/auth` | ✅ Đúng |
| **UKET-002** | Screensaver / Signage | Media standby | `GET /reception/signage` | ✅ Đúng |
| **UKET-003** | Lựa chọn Lễ Tân | Navigation chính | *UI Only* | ✅ Đúng |
| **UKET-004** | Quét Booking QR Code | Khách đã hẹn bằng QR | `POST /reception/check-in/qr` | ✅ Đúng |
| **UKET-005** | Input Booking Code | Khách đã hẹn bằng mã PIN | `POST /reception/check-in/qr` | ✅ Đúng |
| **UKET-006** | No-Appointment Info | Khách vãng lai đăng ký | `POST /reception/check-in/no-appointment` | ✅ Đúng |
| **UKET-007** | Lựa chọn Vendor | Đơn vị vận chuyển (Yamato...) | `POST /reception/check-in/vendor` | ✅ Đúng |
| **UKET-008** | Standby thông báo | Noti cho PIC, chờ phản hồi | `POST /reception/notify-host` | ✅ Đúng |
| **UKET-009** | Gọi điện Voice Call | WebRTC đàm thoại | `POST /reception/calls/signal` | ✅ Đúng |
| **UKET-010** | Chỉ đường Map & QR | Hướng dẫn vị trí phòng | `GET /reception/map/:room_id` | ✅ Đúng |
| **UKET-011** | Noti Success | Kết thúc luồng | *Không cần API* | ✅ Đúng |
