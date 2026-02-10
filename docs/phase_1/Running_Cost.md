# Running Cost Estimation - Office X

Tài liệu ước tính chi phí vận hành hàng tháng trên AWS cho hệ thống Office X.
*Lưu ý: Chi phí này chỉ là ước tính dựa trên Region `ap-northeast-1` (Tokyo) và giá niêm yết của AWS (On-Demand). Chi phí thực tế có thể thay đổi tùy thuộc vào Reserved Instances, Savings Plans và lưu lượng sử dụng.*

---

## 1. Môi trường Production (quy mô Start-up/MVP)
**Giả định:** ~1,000 người dùng active, ~50 cuộc họp đồng thời.

| Dịch vụ | Cấu hình chi tiết | Đơn giá (USD/tháng) | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Amazon EKS** | 1 Cluster Control Plane ($0.10/h) | $73.00 | Phí cố định cho EKS Cluster |
| **EC2 (App Nodes)** | 2x `t3.medium` (2 vCPU, 4GB RAM) - Spot or Reserved | $60.00 | Node chạy App & API |
| **EC2 (Media Server)** | 2x `c6g.large` (2 vCPU, 4GB RAM) - Network Optimized | $120.00 | Chạy LiveKit/WebRTC |
| **Amazon RDS** | 1x `db.t3.medium` (PostgreSQL) - Multi-AZ | $140.00 | Bao gồm storage 50GB SSD |
| **Amazon ElastiCache** | 1x `cache.t3.micro` (Redis) - Primary only | $12.00 | Caching & Queue nhỏ |
| **Load Balancer (ALB)** | 1 Application Load Balancer | $25.00 | + Chi phí LCU xử lý traffic (~$10) |
| **VPC / NAT Gateway** | 1 NAT Gateway (cho Private Subnet) | $35.00 | + Data processing fees |
| **S3 Storage** | 500GB Standard Storage + Data Transfer | $15.00 | Lưu trữ ghi âm, video |
| **Data Transfer** | Outbound Traffic (Stream video/audio) | $50.00 | Ước tính 500GB - 1TB |
| **Security & Search** | KMS, Secrets Manager, OpenSearch (optional). | $40.00 | Chi phí bảo mật & tìm kiếm |
| **Khác** | Route53, CloudWatch Logs, WAF | $30.00 | |
| **TỔNG CỘNG** | | **~$560.00 / tháng** | |

---

## 2. Môi trường Production (Quy mô vừa - Scale Up)
**Giả định:** ~10,000 người dùng active, ~500 cuộc họp đồng thời, SLA cao.

| Dịch vụ | Cấu hình chi tiết | Đơn giá (USD/tháng) | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Amazon EKS** | 1 Cluster Control Plane | $73.00 | |
| **EC2 (App Nodes)** | 4x `m5.large` (2 vCPU, 8GB RAM) - Auto Scaling | $300.00 | Chịu tải API cao hơn |
| **EC2 (Media Server)** | 4x `c6gn.xlarge` (4 vCPU, 8GB RAM, 25Gbps Net) | $600.00 | Xử lý WebRTC băng thông lớn |
| **Amazon RDS** | 1x `db.m6g.large` - Multi-AZ | $350.00 | Database hiệu năng cao hơn |
| **Amazon ElastiCache** | 1x `cache.m6g.large` (Redis) - Multi-AZ | $150.00 | Redis Cluster đảm bảo HA |
| **Load Balancer (ALB)** | 1 ALB (High traffic) | $80.00 | LCU cost tăng theo traffic |
| **VPC / NAT Gateway** | 2 NAT Gateway (HA per AZ) | $70.00 | Đảm bảo mỗi zone có NAT riêng |
| **S3 Storage** | 2TB Standard Storage + Requests | $60.00 | Lưu trữ nhiều dữ liệu hơn |
| **CloudFront (CDN)** | Phân phối Video record & Static assets | $50.00 | Giảm tải cho S3 và tăng tốc độ |
| **Data Transfer** | Outbound Traffic (Audio/Video Streaming) | $300.00 | Ước tính traffic lớn (~3-5TB) |
| **AI Processing** | AWS Lambda / SageMaker endpoint (Optional) | $200.00 | Nếu tự host model AI thay vì gọi API |
| **Khác** | Route53, WAF, GuardDuty, CloudWatch | $100.00 | Bảo mật & Giám sát nâng cao |
| **TỔNG CỘNG** | | **~$2,333.00 / tháng** | |

---

## 3. Các biện pháp tối ưu chi phí (Cost Optimization)

1.  **Savings Plans / Reserved Instances:**
    *   Cam kết sử dụng Compute (EC2) và RDS trong 1-3 năm có thể giảm **30-50%** chi phí so với On-Demand.
    *   Nên áp dụng khi hệ thống đã chạy ổn định (sau 3-6 tháng).

2.  **Sử dụng Spot Instances:**
    *   Dùng cho các **Stateless EKS Nodes** hoặc **Worker Nodes** xử lý background job.
    *   Có thể giảm tới **70-90%** chi phí EC2.

3.  **S3 Lifecycle Policies:**
    *   Tự động chuyển file ghi âm cũ (> 30 ngày) sang **S3 Glacier** hoặc **S3 Infrequent Access**.
    *   Giảm chi phí lưu trữ từ $0.023/GB xuống còn $0.004/GB.

4.  **Tối ưu NAT Gateway:**
    *   Sử dụng **VPC Endpoints** cho S3/DynamoDB để tránh đi qua NAT Gateway (giảm chi phí data processing $0.045/GB).

5.  **Media Server Scheduling:**
    *   Nếu nhu cầu họp tập trung vào giờ hành chính, cài đặt Auto Scaling để giảm số lượng Media Server vào ban đêm/cuối tuần.

---

## 4. Chi phí bên thứ 3 (Third-party Services)
Ngoài AWS, cần tính thêm các chi phí API:

*   **OpenAI API (GPT-4) / AmiVoice API:** Tính theo token hoặc phút audio. Ước tính $100 - $500/tháng ban đầu.
*   **Google Maps API:** Hiển thị bản đồ (nếu vượt Free tier). ~ $200/tháng.
*   **AWS SES / Sendgrid:** Gửi Email/SMS OTP.
