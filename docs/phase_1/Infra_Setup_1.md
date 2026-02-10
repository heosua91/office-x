# Infrastructure Setup Guide (Hybrid) - Office X

Hướng dẫn triển khai kiến trúc Hybrid Serverless (App Runner + Lambda + EC2 Media) mô tả trong `Infrastructure_1.md`.

## 1. Yêu cầu tiên quyết (Prerequisites)
*   **AWS CLI & Terraform:** Đã cài đặt và cấu hình.
*   **Domain:** Đã có (Route53).
*   **Docker:** Để build image cho App Runner (nếu dùng Image-based deploy).

---

## 2. Quy trình triển khai (Step-by-Step)

### Bước 1: Network Core (VPC)
Khởi tạo mạng với Terraform module:
1.  **VPC:** `10.0.0.0/16`.
2.  **Subnets:**
    *   **Public Subnets (x2):** `10.0.1.0/24`, `10.0.2.0/24` (Cho Media Server, NAT Gateway).
    *   **Private Subnets (x2):** `10.0.3.0/24`, `10.0.4.0/24` (Cho RDS, VPC Endpoints).
3.  **VPC Endpoints (Interface):**
    *   Tạo Endpoint cho `ecr.api`, `ecr.dkr`, `logs`, `s3` (Gateway Endpoint) để App Runner/Lambda kết nối AWS services mà không cần ra Internet.

### Bước 2: Database & Proxy
1.  **RDS PostgreSQL:**
    *   Tạo trong Private Subnets.
    *   Security Group: Allow port 5432 từ App Runner SG và Lambda SG.
2.  **RDS Proxy:**
    *   Tạo Proxy trỏ tới RDS Instance.
    *   Lưu credentials vào **AWS Secrets Manager**.
    *   *Lưu ý:* App sẽ kết nối vào Endpoint của Proxy thay vì Endpoint của DB.
    *   **KMS:** Đảm bảo Key được enable để mã hóa Storage của RDS.

### Bước 3: Web Application (AWS App Runner)
1.  **Source:** Chọn GitHub Repository (Source Code) hoặc ECR (Image).
2.  **Configuration:**
    *   Runtime: Node.js 18 / Python 3.
    *   Build Command: `npm install && npm run build`.
    *   Start Command: `npm run start`.
3.  **Networking:**
    *   **VPC Connector:** Tạo mới, trỏ vào **Private Subnets**. (Để App Runner gọi được RDS Proxy).
4.  **Auto Scaling:**
    *   Min instance: 1, Max instance: 5.
    *   Concurrency: 100 requests/instance.

### Bước 4: AI Worker (AWS Lambda)
1.  **Deployment:** Setup `Serverless Framework` hoặc `AWS SAM`.
2.  **Function:**
    *   Upload code xử lý AI (OpenAI Wrapper / **AmiVoice SDK**).
    *   Timeout: 5-10 phút (Xử lý audio dài).
    *   Memory: 512MB - 1GB.
3.  **Trigger:**
    *   Cấu hình S3 Event Notification: Trigger Lambda khi có file `.webm` được upload vào bucket `recordings`.
4.  **VPC:**
    *   Kết nối vào Private Subnet (nếu cần ghi kết quả vào RDS).

### Bước 5: Media Server (EC2 Spot)
1.  **Launch Template:**
    *   AMI: Ubuntu 22.04 LTS.
    *   Instance Type: `c6g.large` (Graviton2) - Chọn request **Spot Instances**.
    *   **Network:** **Public Subnet**. Auto-assign Public IP: **Enable**.
    *   **User Data:** Script tự động cài Docker và chạy container LiveKit/Coturn khi khởi động.
2.  **Auto Scaling Group:**
    *   Min: 2, Max: 10.
    *   Load Balancer: Không cần (Client kết nối trực tiếp IP của Node). Hoặc dùng Network Load Balancer nếu cần 1 IP tĩnh.

---

## 3. Kiểm tra (Verification)
1.  **App Runner:** Truy cập URL mặc định (`*.awsapprunner.com`) -> Thấy trang Login.
2.  **Media:** Dùng tool test WebRTC kết nối thử đến Public IP của EC2 Spot -> Thành công.
3.  **AI Flow:** Upload file dummy lên S3 -> Check CloudWatch Logs của Lambda -> Check DB thấy kết quả.
