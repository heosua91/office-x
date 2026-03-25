# Infrastructure Documentation (VM-based) - Office X

## 1. Tổng quan Kiến trúc Hạ tầng (Traditional VM Architecture)
Phiên bản này sử dụng mô hình **Virtual Machine (EC2)** truyền thống kết hợp với **Auto Scaling Group (ASG)**. Đây là mô hình "Classic", phù hợp nếu đội ngũ kỹ thuật quen thuộc với quản trị Linux/Sysadmin hơn là Serverless hoặc Container, và cần kiểm soát hoàn toàn môi trường OS.

### 1.1. Đặc điểm chính
*   **Không sử dụng:** Lambda, App Runner, Kubernetes (EKS).
*   **Core Services:** Amazon EC2, Auto Scaling Group (ASG), Application Load Balancer (ALB).
*   **Worker:** Chạy trên cụm EC2 riêng biệt (Worker Tier).
*   **Media:** Chạy trên cụm EC2 Spot (như phương án trước).

---

## 2. Các thành phần chi tiết (Component Details)

### 2.1. Network & Security
*   **VPC Layout:**
    *   **Public Subnet:** Bastion Host, ALB, NAT Gateway, **Media Server (Public)**.
    *   **Private Subnet:** Web App Instances, Worker Instances, RDS, ElastiCache, **Qdrant (Vector DB)**.
*   **Security Groups:**
    *   **ALB SG:** Allow HTTPS (443) from Anywhere.
    *   **Bastion Host:** 1 EC2 instance (t3.nano) tại Public Subnet để SSH vào Private Subnet (Web/Worker/DB).
    *   **Web App SG:** Allow HTTP (80/3000) **only** from ALB SG.
    *   **Worker SG:** No Inbound needed (Outbound only).
    *   **DB SG:** Allow Port 5432 (PostgreSQL), 6379 (Redis), 6333/6334 (Qdrant) from Web App SG & Worker SG.
    *   **IAM Roles:** Gán cho EC2 để truy cập S3/SQS mà không cần hardcode key.
    *   **KMS:** Mã hóa dữ liệu đĩa EBS và S3.


### 2.2. Computing (EC2-centric)

#### A. Web/API Tier (EC2 Auto Scaling)
*   **Resource:** Amazon EC2 (`t3.medium` hoăc `m5.large`).
*   **Scaling Policy:**
    *   **Metric:** CPU Utiliztion > 60% hoặc Request CountPerTarget.
    *   **Min/Max:** 2 - 10 instances (Production Standard).
    *   *Lưu ý:* Có thể set **Min = 1** (Single-AZ) để tiết kiệm chi phí cho môi trường Dev/Staging hoặc MVP, nhưng sẽ mất tính năng High Availability nếu AZ đó gặp sự cố.
*   **Deployment:**
    *   Sử dụng **Golden AMI** (đóng gói sẵn Code + Dependencies) hoặc **User Data** script để pull code khi boot.
    *   Dùng **AWS CodeDeploy** để deploy code mới vào các instance đang chạy (Rolling update).

#### B. Worker Tier (EC2 Auto Scaling)
*   **Resource:** Amazon EC2 (`t3.small` hoặc `c5.large` tùy tác vụ AI).
*   **Chức năng:**
    *   Chạy process `node worker.js` liên tục (được quản lý bởi Systemd/PM2).
    *   Lắng nghe queue (**Redis BullMQ**) để xử lý Transcribe/Summarize.
*   **Scaling Policy:** Dựa trên độ dài hàng đợi trong Redis (cần Custom Metric script đẩy về CloudWatch).

#### C. Media Server Tier (EC2 Auto Scaling)
*   **Resource:** EC2 Spot Instances (`c6g.large`).
*   **Vị trí:** **Public Subnet** (Để tối ưu UDP WebRTC).
*   **Cấu hình:** Gán Elastic IP (hoặc Auto-assign Public IP) khi khởi tạo.


#### D. Realtime Tier (EC2 Auto Scaling)
*   **Resource:** Amazon EC2 (`t3.medium` hoặc `c5.large`).
*   **Chức năng:** Chạy Socket.io / WebSocket Server để xử lý tín hiệu thời gian thực (Chat, Notification, Meeting Signaling).
*   **Scaling:** Theo số lượng kết nối (Concurrent Connections).
*   **State:** Sử dụng **Redis Adapter** để đồng bộ trạng thái giữa các node.

### 2.3. Data Storage
*   **RDS & ElastiCache:** Tương tự các phương án trước (Managed Services vẫn được khuyến nghị để giảm tải quản trị DB).
*   **Qdrant (Vector DB):** Lưu trữ embedding vector cho tính năng tìm kiếm ngữ nghĩa (Semantic Search) trên biên bản họp và từ điển. Có thể triển khai trên EC2 nội bộ hoặc Qdrant Cloud.
*   **S3:** Lưu trữ Media.

---

## 3. Luồng dữ liệu (Data Flow)

### 3.1. Web Request Flow
1.  User request -> Internet Gateway -> **ALB**.
2.  ALB phân tải (Round Robin) -> **EC2 Web Instace (Private Subnet)**.
3.  EC2 Web xử lý logic -> Query RDS/Redis -> Trả về response.

### 3.2. Asynchronous Job Flow (Thay thế Lambda Trigger)
1.  **Media Server** upload file ghi âm lên S3.
2.  S3 gửi Event Notification vào **Amazon SQS** (Queue).
3.  **EC2 Worker Instance** (đang poll SQS):
    *   Nhận message new file.
    *   Tải file từ S3 về local disk (hoặc stream).
    *   Gọi OpenAI API / **AmiVoice API** xử lý.
    *   Update trạng thái vào RDS.
    *   Xóa message khỏi SQS.

---

## 4. Đánh giá Ưu/Nhược điểm

### Ưu điểm
*   **Kiểm soát toàn diện (Full Control):** Có quyền root, tùy chỉnh Kernel, cài đặt bất cứ thư viện OS nào.
*   **Không bị Cold Start:** Ứng dụng luôn chạy sẵn, phản hồi tức thì (khác với Lambda/App Runner có thể bị trễ khi scale from zero).
*   **Dễ debug:** Có thể SSH vào server để xem log, monitor process trực tiếp (`htop`, `tail -f`).

### Nhược điểm
*   **Lãng phí tài nguyên:** Phải trả tiền cho EC2 chạy 24/7 (kể cả lúc đêm khuya/cuối tuần) nếu setup Min Capacity > 0 (thường tối thiểu là 2 cho HA).
*   **Gánh nặng vận hành (Ops Heavy):** Phải tự lo Patching OS, Security update, cấu hình Log rotation, config PM2/Systemd.
*   **Deploy chậm:** Việc thay thế AMI hoặc update code trên hàng loạt EC2 tốn thời gian hơn container.
