# Infrastructure Setup Guide - Office X

## 1. Yêu cầu tiên quyết (Prerequisites)
Trước khi bắt đầu triển khai hạ tầng, cần chuẩn bị:

*   **AWS Account:** Tài khoản AWS với quyền Administrator.
*   **Domain Name:** Đã mua và quản lý (tại AWS Route53 hoặc nhà cung cấp khác).
*   **Tools cài đặt trên máy người triển khai:**
    *   `aws-cli` (v2): Cấu hình credential (`aws configure`).
    *   `terraform` (hoặc OpenTofu): Công cụ IaC.
    *   `kubectl`: Quản lý Kubernetes.
    *   `helm`: Quản lý Package cho K8s.

---

## 2. Quy trình triển khai từng bước (Step-by-Step Deployment)

### Bước 1: Thiết lập Network (VPC)
Sử dụng Terraform module `vpc` để khởi tạo mạng lưới cơ sở.

1.  **Khởi tạo VPC:** CIDR block `10.0.0.0/16`.
2.  **Tạo Subnets:**
    *   3 Public Subnets (cho ALB, Bastion).
    *   3 Private Subnets (cho EKS Nodes, RDS, Redis).
3.  **Cấu hình Gateway:**
    *   Internet Gateway (IGW) cho Public Subnets.
    *   NAT Gateway (cho mỗi AZ hoặc chung) để Node trong Private Subnet truy cập Internet (tải image, update).

### Bước 2: Dịch vụ dữ liệu (Database & Storage)

1.  **RDS (PostgreSQL):**
    *   Tạo Subnet Group cho RDS.
    *   Khởi tạo RDS Instance (PostgreSQL 15+).
    *   Cấu hình Multi-AZ (cho môi trường Production).
    *   Security Group: Chỉ cho phép truy cập port 5432 từ Security Group của EKS Node.
2.  **ElastiCache (Redis):**
    *   Khởi tạo Redis Cluster (Cluster mode disabled nếu quy mô nhỏ, enabled nếu cần scale lớn).
    *   Security Group: Chỉ cho phép port 6379 từ EKS Node.
3.  **S3 Buckets:**
    *   Tạo Bucket lưu trữ (ví dụ: `officex-media-prod`).
    *   Cấu hình Policy: Block Public Access, bật Versioning.
    *   Cấu hình CORS nếu truy cập trực tiếp từ Frontend.

### Bước 3: Container Orchestration (EKS)

1.  **Tạo EKS Cluster:** Version mới nhất ổn định (ví dụ: 1.29).
2.  **Node Groups:**
    *   Tạo Managed Node Group cho Application (EC2 Type: t3.medium hoặc c5.large).
    *   Cấu hình Auto Scaling Group (Min: 2, Max: 10).
3.  **Add-ons cài đặt sẵn:**
    *   VPC CNI, CoreDNS, Kube-proxy.
    *   AWS Load Balancer Controller (để tạo ALB từ Ingress).

### Bước 4: Media Server Cluster (Tùy chọn tách biệt)
Nếu sử dụng EC2 riêng cho LiveKit/Coturn để tối ưu Network UDP:
1.  Launch EC2 Instances (Network Optimized - dòng C hoặc N).
2.  Gán Elastic IP.
3.  Cài đặt Docker & LiveKit Server trên EC2.
4.  Mở Security Group:
    *   TCP/UDP range lớn cho WebRTC media (ví dụ 50000-60000).
    *   TCP 443/7880 cho Signaling.

### Bước 5: Cấu hình Ingress & Domain
1.  **ACM (Certificate Manager):** Request SSL Certificate cho domain (ví dụ: `*.officex.com`).
2.  **Route53:** Tạo Hosted Zone.
3.  **Deploy Ingress Controller:** Cài đặt Nginx Ingress hoặc AWS ALB Controller.
4.  Cấu hình Record A (Alias) trỏ domain về Load Balancer.

---

## 3. Kiểm thử hạ tầng (Verification)
*   **Kết nối EKS:** `aws eks update-kubeconfig --name officex-prod`.
*   **Check Nodes:** `kubectl get nodes` (Trạng thái Ready).
*   **Check Database:** Kết nối thử từ Bastion Host hoặc Pod test vào RDS.
*   **Check Redis:** Ping Redis từ Pod test.

## 4. Quản lý chi phí & Bảo mật (Cost & Security)
*   Bật **AWS Cost Explorer** để theo dõi chi phí.
*   Bật **GuardDuty** để phát hiện các mối đe dọa.
*   Sử dụng **Secrets Manager** hoặc **Parameter Store** để lưu DB Password (không hardcode trong Terraform).
