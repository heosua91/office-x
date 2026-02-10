# Non-Functional Requirements (Yêu cầu Phi chức năng) - Office X

Tài liệu này mô tả các yêu cầu phi chức năng (NFR) cho hệ thống Office X, bao gồm Tính sẵn sàng, Hiệu năng, Vận hành và Môi trường hỗ trợ.

## 1. Tính sẵn sàng (Availability)

| Hạng mục | Chi tiết | Yêu cầu / Tiêu chuẩn |
| :--- | :--- | :--- |
| **Tính liên tục** | Tính liên tục kinh doanh | Tuân thủ theo môi trường AWS |
| | Mức độ phục hồi | Tuân thủ theo môi trường AWS |
| **Khả năng chịu lỗi** | | Tuân thủ theo môi trường AWS |
| **Đối sách thảm họa** | | Tuân thủ theo môi trường AWS |

---

## 2. Hiệu năng & Khả năng mở rộng (Performance & Scalability)

| Hạng mục | Chi tiết | Yêu cầu / Giả định |
| :--- | :--- | :--- |
| **Khối lượng xử lý** | Số lượng người dùng (User Reach) | - App user: **500** người (User nội bộ & khách hàng)<br>- Văn phòng (Tenants): **5 - 10** văn phòng<br>- Quản trị viên (Admin): **3 - 5** người |
| | Số lượng truy cập đồng thời | Giả định tối đa khoảng **50** truy cập đồng thời. |
| | Tần suất sử dụng | Hàng ngày (Check-in/Meeting). |
| | Mức độ tăng trưởng nghiệp vụ | Giả định tăng **50% / năm** (Giai đoạn Start-up). |
| | Mức độ tăng trưởng User/Data | Giả định tăng **50% / năm**. |
| **Mục tiêu hiệu năng** | Tốc độ phản hồi (Response Time) | Trong vòng **3 giây** (ngoại trừ trường hợp trễ do môi trường mạng của user). |
| | Online Response | - |
| | Thời gian khởi động hệ thống | - |
| | Batch Response | - |
| | Throughput | - |

---

## 3. Vận hành & Bảo trì (Operation & Maintenance)

| Hạng mục | Chi tiết | Yêu cầu / Mô tả |
| :--- | :--- | :--- |
| **Thời gian vận hành** | Thời gian vận hành (Thông thường) | **24 giờ / 365 ngày** (00:00 ~ 24:00)<br>*Tuân theo lịch bảo trì của môi trường AWS.* |
| | Thời gian vận hành (Ngày đặc biệt) | - |
| **Sao lưu (Backup)** | Phạm vi sao lưu | Database Server |
| | Phương pháp sao lưu | Daily dump file và binary log |
| | Phạm vi tự động hóa sao lưu | Xử lý thủ công (Manual) |
| **Bảo mật** | Giới hạn truy cập / sử dụng | - |
| | Đối sách lỗ hổng bảo mật | - |
| **Sự cố** | Thông báo sự cố | - |
| | Vận hành khi có sự cố | - |

---

## 4. Môi trường hỗ trợ (Support Targets)

### Smartphone App
| Nền tảng | Phiên bản khuyến nghị |
| :--- | :--- |
| **Android** | **10 trở lên** |
| **iOS** | **13 trở lên** |

### Web App
| Nền tảng | Trình duyệt hỗ trợ |
| :--- | :--- |
| **Windows** | Chrome, Edge |
| **Mac** | Chrome, Safari |
| **Android** | Chrome |
| **iOS** | Safari |
