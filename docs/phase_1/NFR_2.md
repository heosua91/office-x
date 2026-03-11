# Non-Functional Requirements Assessment (Đánh giá Yêu cầu Phi chức năng)

Tài liệu này đánh giá tính khả thi và mức độ đáp ứng các Yêu cầu Phi chức năng (NFR) của sản phẩm Office X (Phase 1), dựa trên **PRD** và kiến trúc **Infrastructure 2 (VM-based)** đã lựa chọn.

## 1. Tính sẵn sàng (Availability)

| Hạng mục | Chi tiết | Yêu cầu (Target) | Đánh giá & Giải pháp Kỹ thuật (Từ Infrastructure_2) |
| :--- | :--- | :--- | :--- |
| **Tính liên tục** | Tính liên tục kinh doanh | Tuân thủ AWS | **Đáp ứng.** Sử dụng **RDS Multi-AZ** cho Database và **Auto Scaling Group** cho Web/Worker/Media Servers đảm bảo hệ thống tự phục hồi khi 1 AZ gặp sự cố. |
| | Mức độ phục hồi | Tuân thủ AWS | **Đáp ứng.** Thời gian phục hồi (RTO) thấp nhờ tính năng tự động thay thế instance lỗi của ASG và cơ chế failover tự động của RDS (thường < 60s). |
| **Khả năng chịu lỗi** | Single Point of Failure (SPOF) | Hạn chế tối đa | **Cần lưu ý.**<br>- **Load Balancer (ALB):** AWS quản lý, HA cao.<br>- **Web/Media:** Chạy redundancy (Min 2 instances).<br>- **DB/Cache:** Multi-AZ.<br>*Rủi ro:* NAT Gateway (Nếu chỉ dùng 1 NAT cho tiết kiệm chi phí, cần cân nhắc rủi ro khi AZ chứa NAT bị sập). |
| **Đối sách thảm họa** | Backup & DR | Tuân thủ AWS | **Đáp ứng.**<br>- **RDS:** Automated Backup (Retention 7 ngày).<br>- **S3:** Versioning & Replication (nếu cần). |

---

## 2. Hiệu năng & Khả năng mở rộng (Performance & Scalability)

| Hạng mục | Chi tiết | Yêu cầu / Giả định (Từ PRD) | Đánh giá & Giải pháp Kỹ thuật (Từ Infrastructure_2) |
| :--- | :--- | :--- | :--- |
| **Khối lượng xử lý** | Số lượng người dùng | - **500** App User<br>- **10** Văn phòng (Tenant)<br>- **5** Admin | **Dư sức đáp ứng.** Hạ tầng hiện tại (t3.medium ASG + t3.medium DB) là quá đủ cho quy mô này. Có thể chạy **Min Capacity = 1** cho các dịch vụ để tiết kiệm tối đa. |
| | Số lượng truy cập đồng thời | Max **50** CCU | **Đáp ứng tốt.**<br>- **Media:** 50 CCU video call là mức tải nhẹ, 2 server c6g.large (Spot) xử lý thoải mái. |
| | Tần suất sử dụng | Hàng ngày | **Ổn định.** Hệ thống hoạt động liên tục, ASG đảm bảo không bị gián đoạn. |
| | Mức độ tăng trưởng | Tăng **50% / năm** | **Đáp ứng.** Dễ dàng scale-out thêm server khi số lượng khách hàng tăng lên. ||
| **Mục tiêu hiệu năng** | Tốc độ phản hồi (Response Time) | < **3 giây** | **Đáp ứng.**<br>- **API:** Xử lý nhanh nhờ Node.js & Redis Cache.<br>- **Media:** Đặt tại **Public Subnet** giúp giảm latency tối đa cho WebRTC. |
| | Online Response | < **1 giây** | **Mục tiêu.** API thông thường phản hồi < 1s. Static assets qua CDN < 300ms. |
| | Thời gian khởi động hệ thống | < **5 phút** | **Đáp ứng.** EC2 khởi động ~2-3 phút, tham gia ASG health check & sẵn sàng phục vụ trong 5 phút. |
| | Batch Response | Xử lý trong đêm hoặc Background | **Đáp ứng.** Xử lý Speech-to-Text & Summarize tốn thời gian (có thể > 30s). Dùng cơ chế **Queue (SQS + Worker EC2)** là hợp lý để không chặn UI của người dùng. |
| | Throughput | Đảm bảo **50 CCU** | **Đáp ứng.** Hệ thống chịu tải tốt 50 CCU mà không bị timeout hay 5xx error. |

---

## 3. Vận hành & Bảo trì (Operation & Maintenance)

| Hạng mục | Chi tiết | Yêu cầu (Target) | Đánh giá & Giải pháp Kỹ thuật (Từ Infrastructure_2) |
| :--- | :--- | :--- | :--- |
| **Thời gian vận hành** | Thông thường | **24/365** | **Chia sẻ trách nhiệm:**<br>- **AWS (Hạ tầng):** Đảm bảo điện, mạng, phần cứng Server hoạt động 99.99%.<br>- **Dev Team (Ứng dụng):** Đảm bảo Code, API, Worker chạy ổn định. Deploy Rolling Update không downtime. |
| | Ngày đặc biệt | - | **Chia sẻ trách nhiệm:**<br>- **AWS:** Giám sát hạ tầng tự động 24/7.<br>- **Dev Team:** On-call xử lý sự cố ứng dụng nếu có alert. |
| **Sao lưu (Backup)** | DB Backup | Daily | **Đáp ứng.** Cấu hình **RDS Automated Backup** chạy hàng ngày (Snapshot) và lưu Transaction Log mỗi 5 phút (Point-in-time recovery). |
| | Phạm vi tự động hóa | Manual | **Cải thiện.** Hạ tầng hiện tại hỗ trợ tự động hóa cao hơn yêu cầu Manual. RDS tự backup, ASG tự thay thế server lỗi. Manual chỉ cần thiết khi Restore. |
| **Bảo mật** | Truy cập | Role-based | **Đáp ứng.**<br>- **AWS IAM:** Quản lý quyền truy cập hạ tầng.<br>- **Security Group:** Chặn truy cập trái phép vào DB/Private Subnet.<br>- **App Level:** Phân quyền Admin/User/Operator theo PRD. |
| | Mã hóa | SSL/Store | **Đáp ứng.**<br>- **SSL/TLS:** IP & Domain được bảo vệ bởi chứng chỉ ACM trên ALB.<br>- **Encryption at Rest:** Dữ liệu trên EBS, RDS, S3 được mã hóa bằng **AWS KMS**. |
| | Đối sách lỗ hổng bảo mật | - | **Thực hiện.** Định kỳ scan lỗ hổng bằng **AWS Inspector**, cập nhật OS patch hàng tháng. Review Security Group định kỳ. |
| **Sự cố** | Thông báo sự cố | - | **Thực hiện.** Tích hợp CloudWatch Alarm -> SNS -> Email/Slack cho Admin & DevOps. |
| | Vận hành khi có sự cố | - | **Thực hiện.** Hệ thống có ASG tự phục hồi. Nếu lỗi nghiêm trọng, chuyển Route53 sang trang bảo trì (S3 Static Website). |

---

## 4. Môi trường hỗ trợ (Support Targets)

| Nền tảng | Chi tiết | Đánh giá khả năng hỗ trợ |
| :--- | :--- | :--- |
| **Smartphone App** | Android 10+ / iOS 13+ | **Tương thích.** Kiến trúc API Backend (RESTful/GraphQL) chuẩn tắc, hỗ trợ tốt mọi client Mobile hiện đại. Sử dụng **FCM (Firebase)** cho thông báo đẩy cho cả 2 nền tảng. |
| **Web App** | Chrome, Safari, Edge | **Tương thích.** Giao diện Web (Next.js/React) tương thích tốt với các trình duyệt modern (Chromium-based & WebKit). WebRTC (Media) cũng được hỗ trợ native trên các trình duyệt này. |
