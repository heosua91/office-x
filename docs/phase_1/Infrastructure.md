# Infrastructure Documentation - Office X

## 1. Tổng quan Kiến trúc Hạ tầng (Infrastructure Overview)
Hạ tầng hệ thống Office X được xây dựng trên nền tảng Cloud (AWS) đảm bảo tính sẵn sàng cao (High Availability), khả năng mở rộng (Scalability) và bảo mật (Security).

### 1.1. Sơ đồ kiến trúc (Architecture Diagram)
*(Tham khảo file đính kèm: docs/phase_1/architecture-diagram.png)*

## 2. Các thành phần chi tiết (Component Details)

### 2.1. Network & Security (VPC Layer)
*   **VPC (Virtual Private Cloud):** Môi trường mạng riêng ảo cô lập tài nguyên hệ thống.
*   **Public Subnet:** Chứa Bastion Host, NAT Gateway và Load Balancer.
*   **Private Subnet:** Chứa Application Server, Database, Cache (không public ra internet).
*   **Security Groups & NACL:** Firewall ảo kiểm soát traffic ra vào từng instance.
*   **WAF (Web Application Firewall):** Bảo vệ ứng dụng khỏi các cuộc tấn công web phổ biến (SQLi, XSS, DDoS).

### 2.2. Computing & Container Orchestration
*   **Amazon EKS (Elastic Kubernetes Service):**
    *   Quản lý các container ứng dụng (Core App, API, Worker).
    *   **Auto-scaling:** Tự động tăng giảm số lượng Pod/Node dựa trên tải (CPU/Memory).
    *   **Ingress Controller:** Điều hướng traffic từ Load Balancer vào các Service bên trong cluster.
*   **Bastion Host:** Server trung gian để Admin truy cập SSH an toàn vào Private Subnet.
*   **EC2 (Media Server):** Cụm server riêng (ở Public Subnet) cho LiveKit/Coturn để tối ưu hiệu suất network cho xử lý Real-time Video (nếu không chạy trong K8s).

### 2.3. Data Storage & Management
*   **Amazon RDS (PostgreSQL):** Database quan hệ chính, cấu hình Multi-AZ để dự phòng sự cố (Failover).
*   **Amazon ElastiCache (Redis):** Caching layer giúp tăng tốc độ đọc dữ liệu và quản lý Queue/Pub-Sub cho WebSocket.
*   **Amazon S3 (Simple Storage Service):**
    *   Lưu trữ object: Ảnh profile, Video, File ghi âm cuộc họp.
    *   Sử dụng Lifecycle Policy để chuyển dữ liệu lạnh (ít truy cập) sang lớp lưu trữ rẻ hơn.

### 2.4. Real-time & Media Layer
*   **WebSocket CLuster:** Pods trên EKS chạy Socket.io được scale độc lập, sử dụng Redis Adapter để đồng bộ state.
*   **Media Server Cluster:**
    *   **LiveKit / Mediasoup:** Xử lý SFU (Selective Forwarding Unit) cho Video Call nhiều người.
    *   **TURN/STUN Server:** Hỗ trợ kết nối peer-to-peer xuyên qua NAT/Firewall.

### 2.5. AI Processing Layer
*   **AI Worker:** Pods chuyên dụng xử lý các tác vụ nặng (Async Job).
    *   Kết nối Queue để nhận yêu cầu (Transcribe, Summarize).
    *   Có thể sử dụng **AWS Lambda** cho các tác vụ ngắn hạn hoặc gọi External AI API (OpenAI/Google/**AmiVoice**).

### 2.6. Load Balancing & CDN
*   **Application Load Balancer (ALB):** Phân phối traffic HTTP/HTTPS và WebSocket vào EKS Cluster.
*   **Amazon CloudFront (CDN):** Phân phối nội dung tĩnh (JS, CSS, Images) và Video streaming để giảm tải cho origin server và tăng tốc độ tải trang cho người dùng cuối.

## 3. Quy trình CI/CD & DevOps
*   **Source Control:** GitHub / GitLab.
*   **CI/CD Pipeline:** GitHub Actions / GitLab CI.
    *   Build Docker Image.
    *   Run Unit Test/Scan Security.
    *   Push Image to ECR (Elastic Container Registry).
    *   Deploy to EKS (Stage -> Prod).
*   **Monitoring & Logging:**
    *   **CloudWatch:** Monitoring metrics (CPU, RAM, Disk).
    *   **ELK Stack (Elasticsearch, Logstash, Kibana) / Grafana + Prometheus:** Centralized Logging và trực quan hóa Health check hệ thống.
    *   **Sentry:** Tracking lỗi Application realtime.

## 4. Disaster Recovery (DR)
*   **Database Backup:** Snapshot định kỳ hàng ngày (RDS Automated Backup).
*   **S3 Replication:** Sao lưu dữ liệu sang Region khác (Cross-Region Replication) nếu cần thiết cho an toàn dữ liệu cao nhất.
*   **Failover Strategy:** Kịch bản chuyển đổi sang Region dự phòng khi Region chính gặp sự cố thảm họa.
