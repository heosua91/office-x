# Running Cost Estimation (VM-based) - Office X

Tài liệu ước tính chi phí cho kiến trúc **EC2 + ASG (Infrastructure_2.md)**.
*Region: ap-northeast-1 (Tokyo)*

---

## 1. Môi trường Production (Phase 1 - Start-up)
**Giả định:** ~500 người dùng active (MVP Scale), yêu cầu High Availability (HA) tối thiểu.

| Dịch vụ | Cấu hình chi tiết (VM Architecture) | Đơn giá & Cách tính (USD/tháng) |
| :--- | :--- | :--- |
| **Load Balancer** | **Application Load Balancer (ALB):**<br>- 1 ALB Public cho cả Web & Socket.<br>- **LCU Calculation:** Giả định trung bình 3 LCU (do WebSocket giữ kết nối lâu). | **$35.00**<br>= $16.42 (Phí giờ: $0.0225/hr x 730h)<br>+ $17.52 (LCU: 3 LCUs x $0.008/hr x 730h) |
| **Web Tier (EC2)** | **1-2x `t3.medium`** (2 vCPU, 4GB RAM).<br>- *Có thể chạy 1 node (Single-AZ) để tiết kiệm ($30)*, nhưng khuyến nghị 2 node (Multi-AZ) cho HA. | **$30.00 - $60.00**<br>= ~$30/node x (1~2) nodes<br>*(Đơn giá `t3.medium` On-Demand ~ $0.0418/hr)* |
| **Worker Tier (EC2)** | **1x `t3.small`** (2 vCPU, 2GB RAM).<br>- Chạy 24/7 để polling Redis Queue. | **$15.00**<br>= ~$15/node x 1 node<br>*(Đơn giá `t3.small` On-Demand ~ $0.0209/hr)* |
| **Socket Tier (EC2)** | **2x `t3.small`** (2 vCPU, 2GB RAM).<br>- Duy trì kết nối realtime cho 500 users. | **$30.00**<br>= ~$15/node x 2 nodes<br>*(Auto Scaling theo Connection Count)* |
| **Media Server** | **EC2 Spot:** 2x `c6g.large` (2 vCPU, 4GB RAM - ARM).<br>- Dùng Spot để giảm 60-70% chi phí. | **~$36.00**<br>= ~$18/node (Spot price) x 2 nodes<br>*(Giá On-Demand gốc là ~$0.089/hr)* |
| **Database** | **RDS PostgreSQL:** `db.t3.medium` (2 vCPU, 4GB RAM).<br>- Multi-AZ (1 Primary, 1 Standby). | **$140.00**<br>= $104 (Compute: ~$0.072/hr x 2 x 730h)<br>+ $23 (Storage: 100GB x $0.23)<br>+ $13 (Backup Storage) |
| **Cache** | **ElastiCache:** `cache.t3.micro` (2 vCPU, 0.5GB RAM). | **$12.00**<br>= ~$0.016/hr x 730h (cho 1 node) |
| **Data Transfer** | **NAT Gateway:** Cần cho Private Subnet (Web/Worker).<br>- 1 NAT Gateway (Single-AZ deployment). | **$32.00**<br>= $0.045/hr x 730h<br>*(Lưu ý: Nếu cần HA Multi-AZ thì giá x2)* |
| **Outbound Data** | Internet Data Transfer (Media + Web).<br>- Giả định 500GB/tháng ra Internet. | **$50.00**<br>= 500GB x $0.10/GB (Data Transfer Out vùng Asia) |
| **CloudFront** | Phân phối static assets & video.<br>- Giả định 200GB traffic CDN. | **$20.00**<br>= 200GB x $0.10/GB |
| **Storage (EBS)** | EBS Volume (Gp3) cho 5 instances.<br>- Trung bình 20GB/node (Web, Worker, Socket). | **$10.00**<br>= 100GB tổng x $0.10/GB-tháng |
| **EC2 (Bastion)** | 1x `t3.nano` (2 vCPU, 0.5GB RAM). | **$4.00**<br>= ~$0.0052/hr x 730h |
| **S3 Storage** | Intelligent-Tiering.<br>- Lưu trữ ghi âm/video họp (Pay-as-you-go). | **$12.00**<br>= 500GB x $0.023/GB (ước tính trung bình) |
| **Security & Search** | KMS, Secrets Manager, OpenSearch.<br>- OpenSearch `t3.small.search` (1 node). | **$40.00**<br>= $36 (OpenSearch instance)<br>+ $4 (KMS keys & Secrets API calls) |
| **Khác** | CloudWatch, Route53.<br>- Custom Metrics (Mem/Disk) cho 5 servers. | **$40.00**<br>= $15 (CloudWatch Metrics: $0.30/metric)<br>+ $20 (Logs Ingestion)<br>+ $5 (Route53 Zones) |
| **TỔNG CỘNG** | | **~$445.00 - $475.00 / tháng** |

---

## 2. Môi trường Production (Phase 2 - Growth Scale)
**Giả định:** ~5,000 người dùng active, ~500 CCU (Concurrent Users). Yêu cầu High Availability & Performance cao.

| Dịch vụ | Cấu hình mở rộng (Scale-up) | Đơn giá ước tính & Cách tính |
| :--- | :--- | :--- |
| **Load Balancer** | **ALB:** Tăng tải lên 500 CCU.<br>- LCU tăng do số lượng kết nối đồng thời và băng thông video cao. | **$60.00**<br>= $16.42 (Cố định)<br>+ $43.58 (LCU: ~7.5 LCUs trung bình) |
| **Web Tier (EC2)** | **6x `t3.medium`** (2 vCPU, 4GB RAM).<br>- Auto Scaling chạy 4-6 instances tùy tải. | **$180.00**<br>= ~$30/node x 6 nodes<br>*(Đơn giá `t3.medium` ~ $0.0418/hr)* |
| **Worker Tier (EC2)** | **2x `c5.large`** (2 vCPU, 4GB RAM - Compute Opt).<br>- Dòng C5 xử lý tác vụ AI/Encoding nhanh hơn T3. | **$120.00**<br>= ~$60/node x 2 nodes<br>*(Đơn giá `c5.large` ~ $0.085/hr)* |
| **Socket Tier (EC2)** | **4x `t3.medium`** (2 vCPU, 4GB RAM).<br>- Mỗi node chịu tải ~125 active connections. | **$120.00**<br>= ~$30/node x 4 nodes<br>*(Đơn giá `t3.medium` ~ $0.0418/hr)* |
| **Media Server** | **EC2 Spot:** 10x `c6g.large` (2 vCPU, 4GB RAM).<br>- Spot Fleet 10 nodes (20 vCPUs tổng) xử lý WebRTC. | **$180.00**<br>= ~$18/node (Spot) x 10 nodes |
| **Database** | **RDS PostgreSQL:** `db.m5.large` (2 vCPU, 8GB RAM).<br>- Tăng lên dòng M5 (General Purpose) và 8GB RAM. | **$260.00**<br>= $240 (Compute Multi-AZ: ~$0.165/hr x 2)<br>+ $20 (Storage 200GB) |
| **Cache** | **ElastiCache:** `cache.t3.medium` (2 vCPU, 3GB RAM).<br>- Cluster Mode Enabled (Scale-out). | **$50.00**<br>= ~$0.068/hr x 730h |
| **Data Transfer** | **NAT & Outbound:** Tăng gấp 8-10 lần.<br>- Traffic Video call tiêu tốn nhiều băng thông nhất. | **$400.00**<br>= ~4000GB traffic x $0.10/GB |
| **CloudFront** | Tăng traffic CDN (Video streaming/HLS). | **$100.00**<br>= 1TB traffic x $0.10/GB |
| **Other** | **Security & Ops:**<br>- OpenSearch Cluster (HA), CloudWatch Logs lớn. | **$100.00**<br>= $72 (OpenSearch 2 nodes)<br>+ $28 (Logs & Metrics) |
| **TỔNG CỘNG** | | **~$1,570.00 / tháng** |

---

## 3. Phân tích chi tiết (Cost Analysis)

### 3.1. Vấn đề "Over-provisioning" (Thừa thải tài nguyên)
*   Trong mô hình EC2 truyền thống, bạn phải duy trì ít nhất **2 servers Web** chạy 24/7 để đảm bảo Redundancy (High Availability), ngay cả khi vào ban đêm không có ai truy cập.
*   **Worker Server** cũng phải chạy liên tục để polling queue, dù queue rỗng.

### 3.2. Chi phí ẩn của NAT Gateway
*   Các EC2 instance nằm trong Private Subnet cần NAT Gateway để ra Internet (để `yum update`, `npm install`, kết nối S3 endpoint công khai).
*   Chi phí cố định cho NAT Gateway là ~$32/tháng/AZ. Nếu chạy Multi-AZ đúng chuẩn cần 2 NAT Gateway -> **$64/tháng**.
*   Có thể giảm chi phí này bằng cách dùng **VPC Endpoints** (Interface/Gateway Endpoint) cho S3, nhưng cấu hình phức tạp.

### 3.3. Ưu điểm về giá của Reserved Instance
*   Tuy giá On-Demand đắt hơn, nhưng EC2 cho phép mua **Reserved Instances (RI)** hoặc **Savings Plans**.
*   Nếu cam kết 1 năm (No Upfront), chi phí Compute (Web/Worker) có thể **giảm 30-40%**, giúp tối ưu chi phí vận hành lâu dài.

---

## 4. Chi phí bên thứ 3 (Third-party Services)
Các dịch vụ ngoài AWS được liệt kê trong `Infra_Components_2.md`:

| Dịch vụ | Mục đích | Chi phí ước tính |
| :--- | :--- | :--- |
| **OpenAI / AmiVoice** | Speech-to-Text & Summarization. | **$50 - $100** (Pay-as-you-go). |
| **AWS SES / Sendgrid** | Email Marketing & OTP. | **~$10** (Free tier SES rất lớn). |
| **Google Maps API** | Hiển thị bản đồ văn phòng. | **~$0 - $50** (Tùy lượng view). |
| **Stripe** | Cổng thanh toán. | **~2.9% + $0.30** trên mỗi giao dịch (Không phí duy trì). |

---

## 5. Phân tích Tăng trưởng Chi phí Data (Scaling Logic)

Khi số lượng người dùng tăng, chi phí **Data Transfer** và **NAT Gateway** sẽ không tăng tuyến tính mà có các cấu phần cố định và biến đổi.

### 5.1. Công thức tính
1.  **NAT Gateway**:
    *   **Phí cố định (Hourly Fee):** `$0.045/giờ` (~$32.85/tháng) cho mỗi Gateway (bất kể traffic).
    *   **Phí xử lý dữ liệu (Processing Fee):** `$0.045/GB` dữ liệu đi qua NAT.
    *   *Total NAT = $32.85 + (Data_Volume_GB x $0.045)*

2.  **Data Transfer Out (Internet):**
    *   **Phí truyền tải:** ~$0.10/GB (Tokyo Region, tiered pricing giảm dần khi volume cực lớn).
    *   *Total Outbound = Data_Volume_GB x $0.10*

### 5.2. Bảng ước tính theo quy mô

Giả định: Mỗi người dùng tiêu thụ trung bình **1GB Data/tháng** qua NAT (Update OS, gọi API ngoài) và **2GB Data/tháng** ra Internet (Dùng Web App, Video Call).

| Quy mô | Traffic qua NAT (GB) | Traffic ra Internet (GB) | Chi phí NAT (Tháng) | Chi phí Outbound (Tháng) | Tổng cộng Data |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **10 Users** | ~10 GB | ~20 GB | **$33.30**<br>($32.85 fix + $0.45) | **$2.00**<br>(20 x $0.1) | **$35.30** |
| **100 Users** | ~100 GB | ~200 GB | **$37.35**<br>($32.85 fix + $4.50) | **$20.00**<br>(200 x $0.1) | **$57.35** |
| **500 Users** | ~500 GB | ~1,000 GB | **$55.35**<br>($32.85 fix + $22.50) | **$100.00**<br>(1,000 x $0.1) | **$155.35** |
| **5,000 Users** | ~5,000 GB | ~10,000 GB | **$257.85**<br>($32.85 fix + $225.00) | **$1,000.00**<br>(10,000 x $0.1) | **$1,257.85** |

### 5.3. Nhận xét
*   **Ở quy mô nhỏ (< 100 users):** Chi phí NAT Gateway chủ yếu là phí cố định ($32.85). Traffic tăng ít không ảnh hưởng nhiều.
*   **Ở quy mô lớn (> 1,000 users):** Phí xử lý dữ liệu (Processing Fee) và Outbound Fee trở thành chi phí chính.
*   **Tối ưu:**
    *   Sử dụng **VPC Endpoints** cho S3/DynamoDB để tránh đi qua NAT (giảm $0.045/GB).
    *   Cache nội dung tĩnh (JS/CSS/Images) triệt để tại **CloudFront** để giảm Outbound Data từ EC2.

---

## 6. Phân tích Tăng trưởng Lưu trữ (Storage Scaling - S3)

Chi phí S3 là chi phí tích lũy (Cumulative), vì dữ liệu cứ tăng lên mỗi tháng chứ không reset.

### 6.1. Giả định (Assumptions)
*   **Audio Format:** MP3 128kbps Standard Quality (~1MB/phút).
*   **Volume:** Mỗi người dùng họp 2 cuộc/ngày x 60 phút = 120 phút ghi âm/ngày.
*   **Data rate:** 120MB/ngày x 20 ngày = **2.4 GB / User / Tháng**.
*   **Giá S3 Standard:** $0.023/GB/tháng.

### 6.2. Bảng Ước tính Tăng trưởng (12 tháng đầu)

| Quy mô Users | Dữ liệu nạp vào / Tháng | Tổng dữ liệu (Cuối Năm 1) | Chi phí lưu trữ (Tháng thứ 12) |
| :--- | :--- | :--- | :--- |
| **50 Users** | 120 GB | **1.44 TB** | **$33.12**<br>(1,440 GB x $0.023) |
| **500 Users** | 1.2 TB | **14.4 TB** | **$331.20**<br>(14,400 GB x $0.023) |
| **5,000 Users** | 12 TB | **144 TB** | **$3,312.00**<br>(144,000 GB x $0.023) |

> *Lưu ý: Đây là chi phí tại tháng thứ 12. Tổng chi phí cả năm sẽ thấp hơn (do tích lũy từ 0).*

### 6.3. Chiến lược Tối ưu (S3 Cost Optimization)
Để giảm chi phí khi dữ liệu lên tới hàng chục/trăm TB:

1.  **S3 Intelligent-Tiering:**
    *   Tự động di chuyển file không truy cập sau 30 ngày xuống lóp **Infrequent Access (IA)**.
    *   Giá IA: **$0.0125/GB** (Rẻ hơn ~45% so với Standard).

2.  **Lifecycle Policy:**
    *   **Sau 3 tháng:** Chuyển sang **S3 Glacier Instant Retrieval** ($0.004/GB - Rẻ hơn 80%).
    *   **Sau 1 năm:** Xóa bản ghi âm (hoặc chuyển sang **Deep Archive** $0.00099/GB nếu bắt buộc lưu trữ compliance).
    *   *Ví dụ:* Với Lifecycle Policy này, chi phí cho 5,000 Users tại năm thứ 2 có thể giảm từ **$3,312** xuống còn khoảng **$600 - $800/tháng**.
