# Infrastructure Critique & Improvements (Góc nhìn Solution Architect)

## 1. Đánh giá tổng quan (Executive Summary)
Kiến trúc hiện tại (docs/phase_1/Infrastructure.md) tuân thủ mô hình Cloud-native cơ bản, nhưng còn **quá lý tưởng hóa (Optimistic)** và chưa tính đến các vấn đề hóc búa về **chi phí ẩn (Hidden Costs), độ trễ mạng (Network Latency)** và **tính phức tạp khi vận hành (Operational Complexity)**.

Đánh giá mức độ khả thi: **7/10**
Đánh giá mức độ tối ưu chi phí: **5/10 (Cần xem lại gấp)**

---

## 2. Các điểm yếu kỹ thuật (Technical Weaknesses)

### 2.1. Vấn đề với Media Server (WebRTC)
*   **Single Point of Failure (SPOF) tiềm ẩn:** Việc tách Media Server ra khỏi K8s để chạy trên EC2 là đúng về mặt hiệu năng network, NHƯNG nếu không có Auto-scaling Group và cơ chế Service Discovery tốt, việc quản lý cụm EC2 này sẽ là ác mộng thủ công.
*   **Hairpinning của NAT:** Cấu hình COTURN server trên cloud rất phức tạp để xử lý UDP traversal. Tài liệu hiện tại chưa đề cập đến việc Media Server nằm trong Private hay Public Subnet. Nếu ở Private và đi qua NAT Gateway, chi phí băng thông sẽ **cực kỳ đắt đỏ** ($0.045/GB cộng thêm).
*   **Recommendation:** Media Server MẮT BUỘC phải có Public IP (Elastic IP) và nằm ở Public Subnet để tránh NAT Gateway fee và giảm latency.

### 2.2. Kiến trúc EKS quá mức cần thiết (Over-engineering)
*   **Chi phí duy trì:** EKS Control Plane tốn $73/tháng chưa kể Node. Với quy mô MVP (< 1000 user), việc vận hành K8s là "dùng dao mổ trâu giết gà".
*   **Phức tạp vận hành:** Cần nhân sự chuyên DevOps để maintain EKS upgrade, Helm charts, VPC CNI.
*   **Recommendation:** Giai đoạn Phase 1 nên cân nhắc dùng **AWS App Runner** hoặc **ECS Fargate** để giảm tải vận hành và chi phí cố định (Master node).

### 2.3. Rủi ro về Database Connection
*   Với kiến trúc Serverless/Auto-scaling (nếu dùng Lambda hoặc nhiều Pods), số lượng connection vào PostgreSQL sẽ tăng đột biến, gây lỗi `Too many connections`.
*   **Thiếu:** Chưa có **RDS Proxy** hoặc **PgBouncer** trong thiết kế.

---

## 3. Phân tích lại bài toán Chi phí (Cost Critique)
Tài liệu `Running_Cost.md` hiện tại đang quá lạc quan về Data Transfer.

*   **Video Call Bandwidth:** 1 cuộc họp video HD (2Mbps) x 60 phút = ~900MB/người.
*   Nếu 50 cuộc họp x 4 người x 1 giờ/ngày = 200 GB/ngày = **6 TB/tháng**.
*   Outbound Data Transfer ($0.09/GB) = **$540/tháng** (riêng tiền băng thông), cao gấp 10 lần con số $50 dự tính trong tài liệu Cost.
*   **Bài toán:** Mô hình kinh doanh có chịu nổi chi phí hạ tầng này không?

---

## 4. Đề xuất Kiến trúc Cải tiến (Refined Architecture)

### 4.1. Kiến trúc tối ưu cho Phase 1 (Cost-Effective)
Thay vì EKS, đề xuất chuyển sang **Hybrid Architecture**:
1.  **Web/API:** Chạy trên **AWS App Runner** (Auto-scaling, không cần quản lý k8s, scale về 0 được).
2.  **Worker (AI):** Chạy trên **AWS Lambda** (trigger by S3 event) để xử lý Audio -> Text -> Summary. Chỉ trả tiền khi chạy.
3.  **Media Server:** Giữ nguyên EC2 Spot Instance nhưng đặt tại Public Subnet.

### 4.2. Bổ sung thành phần còn thiếu
*   **RDS Proxy:** Đứng trước Database để pool connection.
*   **CloudFront Signed URL:** Để bảo mật link file ghi âm/video (không public S3 bucket).
*   **Bastion Host + Session Manager:** Thay vì mở port 22 SSH, hãy dùng AWS Systems Manager Session Manager để truy cập EC2 an toàn hơn (không cần mở port inbound).

### 4.3. Sơ đồ đề xuất thay đổi (Text-based Diagram)
```mermaid
graph TD
    User-->CF[CloudFront CDN]
    User-->ALB[App Load Balancer]
    ALB-->App[App Runner (API/Web)]
    App-->RDS_Proxy
    RDS_Proxy-->DB[(RDS PostgreSQL)]
    
    User--WebSocket/WebRTC-->Media[EC2 AutoScaling (Media Server)]
    Media--Save Recording-->S3[(S3 Bucket)]
    
    S3--Event Trigger-->Lambda[Lambda AI Worker]
    Lambda--Call-->OpenAI[OpenAI API]
    Lambda--Save Result-->DB
```
