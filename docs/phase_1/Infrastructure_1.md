# Infrastructure Documentation (Improved) - Office X

## 1. Tổng quan Kiến trúc Hạ tầng (Improved Architecture Overview)
Phiên bản cải tiến này tập trung vào sự tối ưu chi phí (Cost-Efficiency) và giảm thiểu gánh nặng vận hành (Operational Overhead) cho giai đoạn Phase 1, chuyển dịch từ mô hình thuần Kubernetes (EKS) sang kiến trúc **Hybrid Serverless**.

### 1.1. Thay đổi chính so với bản cũ
*   **Web/API:** Chuyển từ EKS sang **AWS App Runner** (Fully Managed Container).
*   **AI Worker:** Chuyển từ EKS Pods sang **AWS Lambda** (Event-driven).
*   **Media Server:** Giữ nguyên trên **EC2 (Spot Instances)** đặt tại **Public Subnet** để tối ưu đường truyền UDP và tránh phí NAT Gateway.
*   **Database:** Bổ sung **RDS Proxy** để quản lý Connection Pooling.

---

## 2. Các thành phần chi tiết (Component Details)

### 2.1. Network & Security
*   **VPC:**
    *   **Public Subnet:** Chứa ALB, NAT Gateway và **Media Server Cluster**.
    *   **Private Subnet:** Chứa RDS, ElastiCache, VPCE (VPC Endpoints) cho App Runner kết nối vào.
*   **Security:**
    *   **AWS WAF:** Gắn vào App Runner để bảo vệ API.
    *   **CloudFront Signed URL:** Bảo vệ link truy cập file ghi âm/video trên S3.
    *   **SSM Session Manager:** Thay thế Bastion Host truyền thống, cho phép truy cập EC2 không cần mở port SSH (22).
    *   **AWS IAM:** Quản lý quyền truy cập.
    *   **AWS Secrets Manager:** Quản lý credentials.
    *   **AWS KMS:** Quản lý khóa mã hóa.


### 2.2. Computing (Hybrid)
*   **AWS App Runner (Web/API):**
    *   Chạy container ứng dụng Web và API Backend.
    *   **Ưu điểm:** Tự động Auto-scaling theo request, không cần quản lý server/cluster, dễ dàng tích hợp CI/CD.
    *   **Cost:** Chỉ trả tiền cho CPU/Mem khi đang chạy (có thể scale về min instances thấp).
*   **AWS Lambda (Async Worker):**
    *   Xử lý các tác vụ nền: Gửi email, xử lý notification.
    *   **AI Processing Pipeline:** S3 Event -> Lambda -> OpenAI API -> Lưu kết quả vào DB.
*   **EC2 Auto Scaling Group (Media Server):**
    *   Chạy LiveKit/Coturn.
    *   Sử dụng **Spot Instances** để giảm chi phí tới 70%.
    *   Đặt tại **Public Subnet** & gán Elastic IP để client kết nối trực tiếp (WebRTC), loại bỏ phí Data Processing qua NAT Gateway ($0.045/GB).

### 2.3. Data Storage & Management
*   **Amazon RDS (PostgreSQL) + RDS Proxy:**
    *   **RDS Proxy:** Đứng giữa App Runner/Lambda và RDS để gom các kết nối (Connection Pooling), ngăn chặn quá tải database khi Serverless functions scale lên đột ngột.
*   **Amazon ElastiCache (Redis):** Dùng cho Caching và quản lý trạng thái phiên họp.
*   **Amazon S3:** Lưu trữ Media. Sử dụng `Intelligent-Tiering` để tự động tối ưu chi phí lưu trữ lâu dài.

---

## 3. Luồng dữ liệu cải tiến (Improved Data Flow)

### 3.1. Luồng Video Call (Real-time)
1.  Client kết nối WebSocket (Signaling) tới App Runner.
2.  Client kết nối WebRTC (Media) trực tiếp tới **EC2 Media Server (Public Subnet)**.
    *   *Lợi ích:* Traffic đi thẳng Internet Gateway -> EC2 -> Client. Độ trễ thấp nhất, không mất phí qua NAT.

### 3.2. Luồng AI Processing (Serverless)
1.  Media Server upload file ghi âm (`.webm`) lên S3 Bucket.
2.  S3 gửi sự kiện `ObjectCreated` tới **AWS Lambda**.
3.  Lambda (AI Worker) khởi chạy:
    *   Gọi OpenAI Whisper API / **AmiVoice API** để transcode.
    *   Gọi LLM để tóm tắt.
    *   Lưu kết quả vào RDS (qua RDS Proxy).
4.  Lambda kết thúc (ngừng tính tiền).

---

## 4. Disaster Recovery & Scalability
*   **Stateless Scaling:** App Runner và Lambda tự động scale theo số lượng request gần như tức thời.
*   **Database Resilience:** RDS Multi-AZ đảm bảo High Allowability. RDS Proxy giảm thời gian failover (giữ kết nối ứng dụng trong khi DB chuyển đổi).
