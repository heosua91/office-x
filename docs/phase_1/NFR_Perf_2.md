# Giải đáp thắc mắc về Hiệu năng và Yêu cầu Phi chức năng (NFR) - Office X

Dựa trên tài liệu hệ thống và kiến trúc hạ tầng (Infrastructure 2 - VM-based), dưới đây là các câu trả lời chi tiết cho các câu hỏi về hiệu năng và khả năng mở rộng của hệ thống Office X.

---

### 1. Định nghĩa về Chi nhánh/Cứ điểm (拠点 - Location/Branch)

**Câu hỏi:** Con số "10拠点" (10 chi nhánh) trong NFR là "Tổng số lượng trên toàn bộ hệ thống" hay là "Số lượng tối đa dự kiến trên 1 công ty (1 tenant)"?

**Trả lời:**
*   Trong bảng đánh giá NFR (`NFR_2.md`), con số **"10 Văn phòng (Tenant)"** và **"500 App User"** được hiểu là **Mức tải cơ sở (Baseline)** mà hệ thống cam kết đáp ứng tốt nhất với chi phí tối ưu (Min Capacity = 2 instances).
*   Đây không phải giới hạn kỹ thuật của hệ thống, mà là con số giả định để đảm bảo hiệu năng tối ưu với cấu hình `t3.medium`.

**Ước tính công suất thực tế ở mức 80% tải (Capacity Estimation):**

Với cấu hình cơ bản (**2 máy chủ `t3.medium`** cho Web/API và **1 máy chủ `t3.medium`** cho DB), dựa trên các benchmark tiêu chuẩn cho ứng dụng Node.js/PostgreSQL, hệ thống có thể đạt tới ngưỡng 80% công suất như sau:

| Thông số | Yêu cầu (Phase 1) | Ngưỡng 80% công suất (Ước tính) | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Concurrent User (CCU)** | 50 CCU | **~150 - 200 CCU** | Đây là số người dùng thao tác đồng thời thực sự. |
| **Tổng số App User** | 500 Users | **~2,000 Users** | Giả định tỷ lệ CCU/Total là 10%. |
| **Số lượng Tenant** | 10 Tenants | **~40 Tenants** | Giả định mỗi Tenant có ~50 users. |
| **DB Connections** | N/A | **~200 Active Conns** | Giới hạn bởi RAM 4GB của `t3.medium` RDS. |

**Kết luận:** Cấu hình hiện tại đang được thiết kế ở mức **dư thừa năng lực (Overload-ready)**. Mức 10 Tenants / 500 Users chỉ chiếm khoảng **~25% công suất thực tế** của hạ tầng cơ sở. Nếu đạt ngưỡng 80% (tương đương ~40 Tenants), hệ thống vẫn hoạt động ổn định trước khi cần kích hoạt Auto Scaling để mở rộng thêm.

---

### 2. Performance khi High load (Tải cao)

**Câu hỏi:** Với cấu hình `t3.medium`, khi chạy "AI minutes" đồng thời cho 30+ cuộc họp và "Edit realtime" cùng lúc, căn cứ nào chứng minh hệ thống xử lý được 500 CCU mà không bị delay?

**Trả lời:**
Khả năng chịu tải của hệ thống không phụ thuộc vào một máy chủ đơn lẻ mà dựa trên chiến lược **Cô lập tài nguyên (Resource Isolation)**. Các thành phần được tách biệt hoàn toàn về hạ tầng theo đề xuất trong `Running_Cost_2.md`:

*   **Xử lý API (Web/API Tier - 2x `t3.medium`):** Đảm nhận các request nghiệp vụ (I/O bound). Tách biệt hoàn toàn khỏi luồng Media và AI.
*   **Xử lý Realtime (Socket Tier - 2x `t3.small`):** Chuyên trách duy trì kết nối WebSocket cho chat và phối hợp chỉnh sửa đồng thời (State management).
*   **Xử lý AI & Hàng đợi (Worker Tier - 1x `t3.small`):** Tác vụ nặng (Transcribe/Summarize) được cô lập vào hàng chờ. Dù tải AI cao cũng không làm chậm API hay UI.
*   **Xử lý Live Video Meeting (Media Tier - 2x `c6g.large` Spot):** Thành phần tốn băng thông và CPU nhất được tách riêng để không làm nghẽn mạng của tầng Database.

**Bảng Ma trận công suất & Cơ sở tính toán (Capacity & Estimation Basis):**

| Tầng xử lý (Tier) | Cấu hình thực tế | 80% Công suất (An toàn) | Cơ sở tính toán / Căn cứ giả định (Basis) |
| :--- | :--- | :--- | :--- |
| **Web/API** | 2x `t3.medium` | **~500 CCU** | **Node.js I/O benchmark:** Mỗi instance `t3.medium` hỗ trợ ~250 active CCU (thao tác 1 request/3s) nhờ cơ chế non-blocking I/O của Node.js. |
| **Socket** | 2x `t3.small` | **~4,000 Conns** | **Memory limits:** Mỗi kết nối WS tốn ~50KB RAM. 2GB RAM cho phép lý thuyết ~40k conns, nhưng thực tế giới hạn ở ~2k/node để đảm bảo độ trễ broadcast thấp. |
| **Worker** | 1x `t3.small` | **~15 Jobs** | **Concurrency limit:** 1 node `t3.small` xử lý ~15 job AI đồng thời (External API calls + Local stream management) trước khi CPU/RAM đạt ngưỡng bão hòa. |
| **Media** | 2x `c6g.large` | **~400 Participants** | **SFU Throughput:** Dòng CPU ARM (Graviton) xử lý WebRTC cực tốt. Mỗi máy chủ `c6g.large` chịu tải ~200 luồng video concurrent (bitrate 500kbps). |

**Phân tích kịch bản "30+ cuộc họp AI" và "500 CCU":**

1.  **Dưới góc độ 500 CCU:** Hệ thống đang ở trạng thái **Healthy**. Tầng Web và Socket được cấu hình Redundancy (2 nodes) dư sức xử lý lượng truy cập này với mức tải CPU chỉ khoảng 15-20%.
2.  **Dưới góc độ 30+ cuộc họp AI đồng thời:**
    *   **Thách thức:** Với 1 node Worker, 15 jobs sẽ được xử lý ngay, 15 jobs còn lại sẽ nằm trong hàng đợi (Queued).
    *   **Căn cứ chứng minh không bị delay:** Nhờ kiến trúc bất đồng bộ (Asynchronous), người dùng **không phải chờ trên giao diện**. Họ vẫn kết thúc cuộc họp và làm việc khác bình thường. Video/Audio đã được tải lên S3. Worker sẽ "nuốt" dần hàng đợi. 
    *   **Tự động điều chỉnh (Dynamic Scaling):** Để xóa bỏ hàng chờ này, **Auto Scaling Group** sẽ dựa trên số lượng Job tồn đọng (Custom Metric từ Redis/SQS) để tự động bật thêm 1-2 node Worker nữa. Việc này diễn ra trong ~2-3 phút, giúp dọn sạch hàng đợi nhanh chóng mà không cần can thiệp thủ công.

**Kết luận:** Cấu hình trong `Running_Cost_2.md` là mức **Minimum Production** (đủ an toàn và HA). Hệ thống không bị "treo" hay "delay" UI khi tải cao nhờ cơ chế hàng đợi và tách biệt tầng Media. Các con số giả định dựa trên năng lực xử lý thực tế của dòng chip AWS T3 và C6g cho các ứng dụng tương tự (Node.js/WebRTC).

---

### 3. Scale up liền mạch (Seamless)

**Câu hỏi:** Khi triển khai quy mô lớn hơn (30-100 chi nhánh), hệ thống có thể Scale up Instance type (lên dòng m5...) mà không làm gián đoạn dịch vụ (Zero downtime) hay không?

**Trả lời:**
**Có.** Hệ thống được thiết kế theo kiến trúc **Stateless (Không lưu trạng thái tại server)**, cho phép thay đổi cấu hình phần cứng mà không gây gián đoạn dịch vụ (Zero downtime) nhờ:

*   **Quản lý Session tại Redis:** Thông tin đăng nhập và trạng thái người dùng được lưu trữ tập trung tại **Amazon ElastiCache (Redis)** thay vì lưu tại bộ nhớ của EC2. Do đó, khi thay thế một máy chủ cũ bằng máy chủ mới có cấu hình mạnh hơn (như dòng `m5`), người dùng sẽ không bị đăng xuất hay mất dữ liệu đang xử lý.
*   **Cơ chế Instance Refresh (ASG):** Khi nâng cấp Launch Template (ví dụ đổi loại instance từ `t3.medium` lên `m5.large`), Auto Scaling Group sẽ thực hiện thay thế từng máy chủ một (Rolling Update). 
*   **ALB Health Check:** Server mới chỉ được nhận traffic sau khi vượt qua các bước kiểm tra (Health Check) nghiêm ngặt. Hệ thống luôn duy trì một lượng server hoạt động tối thiểu trong suốt quá trình nâng cấp, đảm bảo dịch vụ thông suốt 100%.

---

### 4. Khả năng mở rộng của DB (DB Scalability)

**Câu hỏi:** Phía DB có được cấu hình để có thể Spec up (nâng cấp) mà không bị downtime, hoặc có khả năng switch over thông qua Multi-AZ hay không?

**Trả lời:**
*   **Cơ chế Multi-AZ High Availability:** Hệ thống sử dụng **Amazon RDS PostgreSQL Multi-AZ**. Dữ liệu được đồng bộ hóa tức thời (Synchronous Replication) sang một máy chủ dự phòng (Standby) ở Availability Zone khác.
*   **Nâng cấp cấu hình (Spec up) với Downtime tối thiểu:** Khi cần nâng cấp từ `db.t3.medium` lên `db.m5.large` (như đề xuất cho Phase 2), Amazon RDS sẽ thực hiện nâng cấp trên máy chủ Standby trước, sau đó mới thực hiện lệnh **Failover**.
*   **Thời gian gián đoạn:** Quá trình chuyển đổi (Failover) này chỉ làm gián đoạn kết nối trong khoảng **60-120 giây**. Đây là thời gian cần thiết để AWS phát hiện sự cố, thúc đẩy máy chủ dự phòng lên làm máy chính và cập nhật bản ghi DNS của DB Endpoint trỏ sang địa chỉ IP của máy chủ mới. Ứng dụng Office X được tích hợp cơ chế **Auto-reconnect**, tự động kết nối lại khi DNS đã phân giải xong, do đó không ảnh hưởng đến tính toàn vẹn của dữ liệu.
*   **Khả năng mở rộng ngang (Read Replicas):** Khi số lượng chi nhánh tăng lên 100+, chúng ta có thể bổ sung các bản sao chỉ đọc (**Read Replicas**) để giảm tải cho máy chủ chính mà không cần dừng hệ thống.

---

### 5. Kết luận chung về Hiệu năng
Hạ tầng Office X được thiết kế theo tiêu chuẩn **"Scale-first"**. Việc lựa chọn cấu hình `t3.medium` ban đầu là để tối ưu hóa chi phí (Cost-effective) cho giai đoạn MVP, nhưng kiến trúc tổng thể (Phân tách Media, Phân tách Socket, Stateless App, RDS Multi-AZ) đã sẵn sàng để mở rộng lên quy mô doanh nghiệp lớn (Enterprise) mà không cần phải viết lại code hay thay đổi kiến trúc core của hệ thống.
