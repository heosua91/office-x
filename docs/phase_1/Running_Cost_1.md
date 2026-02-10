# Running Cost Estimation (Improved) - Office X

Tài liệu ước tính chi phí cho kiến trúc **Hybrid Serverless (Infrastructure_1.md)**, tối ưu cho giai đoạn Start-up/MVP.
*Region: ap-northeast-1 (Tokyo)*

---

## 1. Môi trường Production (Phase 1 - Start-up)
**Giả định:** ~1,000 người dùng active, ~50 cuộc họp đồng thời.

| Dịch vụ | Cấu hình chi tiết (Hybrid Architecture) | Đơn giá cũ (EKS) | Đơn giá mới (Hybrid) | Chênh lệch |
| :--- | :--- | :--- | :--- | :--- |
| **Compute layer (Web/API)** | **AWS App Runner:** 1 vCPU, 2GB RAM. Auto-scale từ 1-5 instances. Chỉ tính tiền khi có request. | ~$133 (EKS+EC2) | ~$30.00 | **Giảm ~77%** |
| **Compute layer (Worker)** | **AWS Lambda:** 512MB RAM, chạy ~2000 phút/tháng (xử lý sự kiện AI). | (Chạy chung EKS) | ~$5.00 | Rất rẻ |
| **Media Server** | **EC2 Spot Instances:** 2x `c6g.large` (2 vCPU, 4GB). Giá Spot ~70% rẻ hơn On-Demand. | $120.00 | ~$36.00 | **Giảm ~70%** |
| **Database** | **RDS PostgreSQL:** `db.t3.medium`, Multi-AZ. | $140.00 | $140.00 | Không đổi |
| **DB Proxy** | **RDS Proxy:** Quản lý connection pooling cho Lambda/App Runner. | $0.00 | ~$22.00 | Chi phí mới |
| **Cache** | **ElastiCache:** `cache.t3.micro`. | $12.00 | $12.00 | Không đổi |
| **Data Transfer** | **NAT Gateway:** Loại bỏ cho luồng Media (do Server đặt Public). Chỉ còn data update OS/DB. | $85.00 | ~$15.00 | **Giảm mạnh** |
| **Outbound Data** | Internet Data Transfer (500GB - 1TB). | $50.00 | $50.00 | Không đổi |
| **Storage** | **S3 Intelligent-Tiering:** Tối ưu file ghi âm cũ. | $15.00 | $12.00 | Giảm nhẹ |
| **Security & Search** | KMS, Secrets Manager, OpenSearch (t3.small - optional). | $40.00 | $40.00 | Chi phí mới |
| **Khác** | WAF, CloudWatch, Route53. | $30.00 | $30.00 | Không đổi |
| **TỔNG CỘNG** | | **~$560.00** | **~$352.00 / tháng** | **Tiết kiệm ~37%** |

---

## 2. Phân tích chi tiết sự thay đổi (Cost Breakdown Analysis)

### 2.1. Loại bỏ "Thuế cố định" (EKS Tax)
*   **Trước đây:** Phải trả $73/tháng cho EKS Control Plane + chi phí node chạy 24/7 dù không có user.
*   **Hiện tại (App Runner):** Scale về 1 instance hoặc pause service khi không dùng (môi trường dev/staging). Loại bỏ hoàn toàn phí quản lý cluster.

### 2.2. Tối ưu Media Server
*   **EC2 Spot:** Chuyển sang dùng Spot Instance cho các Media Node. Vì Media Node là stateless (mất node này client reconnect sang node khác), nên rủi ro bị thu hồi là chấp nhận được đổi lại giá rẻ hơn 70%.
*   **Public Placement:** Đặt Media Server ở Public Subnet giúp loại bỏ chi phí **Data Processing của NAT Gateway** ($0.045/GB). Với 1TB dữ liệu meeting, việc này tiết kiệm được ~$45/tháng.

### 2.3. Chi phí phát sinh hợp lý
*   **RDS Proxy ($22/tháng):** Là khoản đầu tư cần thiết để kiến trúc Serverless (Lambda/App Runner) hoạt động ổn định với Database quan hệ, tránh sập DB do cạn connection.

---

## 3. Dự phòng rủi ro chi phí (Risk Buffer)

### 3.1. Chi phí AI (Biến phí lớn nhất)
*   Lưu ý: Bảng trên chỉ tính hạ tầng AWS. Chi phí gọi API OpenAI/Google/**AmiVoice** để Transcribe & Summarize sẽ tăng tuyến tính theo số phút họp.
*   **Ước tính:** 1 giờ audio ~ $0.36 (Whisper) hoặc theo giá AmiVoice + $0.1 (GPT Summary).
*   Nếu 1000 giờ họp/tháng -> **~$460/tháng**. (Chi phí này lớn hơn cả tiền hạ tầng).
*   **Khuyến nghị:** Cần chiến lược Quota cho từng Tenant (Doanh nghiệp) để kiểm soát bill.

### 3.2. Data Transfer Scale-up
*   Khi quy mô tăng lên 10,000 user, chi phí Data Transfer (Streaming Bandwidth) sẽ trở thành gánh nặng chính.
*   Lúc này cần đàm phán **AWS Enterprise Agreement** hoặc chuyển sang các Cloud chuyên biệt về Bandwidth (như Cloudflare R2, DigitalOcean) cho phần media storage/cdn để giảm cost.
