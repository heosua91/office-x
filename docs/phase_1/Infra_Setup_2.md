# Infrastructure Setup Guide (VM-based) - Office X

Hướng dẫn triển khai kiến trúc VM "Classic" (EC2 + Auto Scaling) mô tả trong `Infrastructure_2.md`.

## 1. Yêu cầu tiên quyết
*   **AWS CLI & Terraform:** Đã cài đặt.
*   **Packer (HashiCorp):** Để build Golden AMI (Amazon Machine Image).
*   **SSH Key Pair:** Tạo sẵn trên AWS EC2 Console.

---

## 2. Quy trình triển khai (Step-by-Step)

### Bước 1: Build Golden AMI (Packer)
Trước khi tạo hạ tầng, cần build các Image chuẩn chứa sẵn môi trường.

1.  **Web App AMI:**
    *   Base OS: Amazon Linux 2023 hoặc Ubuntu 22.04.
    *   Provisioning: Cài Node.js/Python, PM2/Systemd, Nginx, CloudWatch Agent.
    *   Code: Có thể bake code vào AMI hoặc dùng UserData pull từ S3/Git khi boot.
2.  **Media Server AMI:**
    *   Base OS: Ubuntu 22.04.
    *   Provisioning: Cài Docker, LiveKit Server, config Network tuning (UDP buffer).
    *   **Security:** Cấu hình IAM Role để cho phép Instance truy cập S3/SQS mà không cần hardcode credentials.

### Bước 2: Network Core (VPC)
1.  **VPC:** `10.1.0.0/16`.
2.  **Subnets:**
    *   **Public (x2):** `10.1.1.0/24`, `10.1.2.0/24` (ALB, Bastion, Media).
    *   **Private (x2):** `10.1.3.0/24`, `10.1.4.0/24` (Web ASG, Worker ASG, RDS).
3.  **Gateways:**
    *   **Internet Gateway:** Cho Public Subnet.
    *   **NAT Gateway:** Tạo 1 NAT Gateway tại Public Subnet A (Cho Private Subnet truy cập Internet tải package).

### Bước 3: Database (RDS)
*   Tương tự Hybrid: Tạo PostgreSQL RDS Instance trong Private Subnet.

### Bước 4: Application Load Balancer (ALB)
1.  **Tạo ALB:** Loại "Internet-facing", gắn vào 2 Public Subnets.
2.  **Security Group:** Allow Inbound HTTPS (443) from 0.0.0.0/0.
3.  **Target Group:**
    *   Type: Instances.
    *   Port: 3000 (Node.js) hoặc 80 (Nginx reverse proxy).
    *   Health Check path: `/health` hoặc `/api/health`.

### Bước 5: Auto Scaling Groups (ASG)

#### A. Web Tier ASG
1.  **Launch Template:**
    *   AMI: Web App AMI (vừa build).
    *   Instance Type: `t3.medium`.
    *   Security Group: Allow Web Port (3000/80) từ **ALB Security Group**.
    *   User Data: Script pull code mới nhất & start app.
2.  **ASG Config:**
    *   VPC: Private Subnets.
    *   Attach to Load Balancer: Chọn Target Group đã tạo ở Bước 4.
    *   Scaling Policy: Target Tracking CPU = 60%.

#### B. Worker Tier ASG
1.  **Launch Template:**
    *   AMI: Web App AMI (dùng chung được, chỉ khác lệnh run).
    *   Instance Type: `t3.small`.
    *   User Data: Script start worker process (`npm run worker`).
2.  **ASG Config:**
    *   VPC: Private Subnets.
    *   Không gắn Load Balancer.
    *   Scaling Policy: Dựa trên Custom Metric (SQS Queue Depth).

#### C. Media Server ASG
1.  **Launch Template:**
    *   AMI: Media Server AMI.
    *   Instance Type: `c6g.large` (Spot).
    *   Network: **Auto-assign Public IP**.
2.  **ASG Config:**
    *   VPC: **Public Subnets**.
    *   Min: 2, Max: 10.

### Bước 6: Deployment Pipeline (CodeDeploy)
Để update code mà không cần build lại AMI mới:
1.  Cài **CodeDeploy Agent** vào AMI.
2.  Tạo **Application & Deployment Group** trong AWS CodeDeploy.
3.  Cấu hình GitHub Actions: Khi push code -> Trigger CodeDeploy -> Deploy Rolling update lên ASG.

---

## 3. Kiểm tra vận hành
1.  **Kiểm tra ALB:** Truy cập DNS name của ALB -> Vào được Web.
2.  **Kiểm tra Failover:** Terminate thủ công 1 Web Instance -> ASG tự động tạo Instance mới replacement sau 1-2 phút.
3.  **Kiểm tra Media:** Client kết nối WebRTC tới IP của Media Instance (Public IP).
