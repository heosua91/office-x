# Technical Documentation - Office X

## 1. Kiến trúc hệ thống (System Architecture)

Hệ thống Office X được thiết kế theo mô hình Client-Server hiện đại, chia thành các thành phần chính sau:

### 1.1. Client Side (Frontend)
Hệ thống cung cấp giao diện cho nhiều đối tượng người dùng trên các thiết bị khác nhau:

*   **Web Portal (PC & Mobile Web):**
    *   **Đối tượng:** Người dùng phổ thông, Quản trị viên doanh nghiệp, Super Admin (TNG).
    *   **Công nghệ:** React.js / Next.js (Khuyến nghị).
    *   **Tính năng:** Dashboard, Quản lý Task, Quản lý Khách hàng, Cài đặt hệ thống, Báo cáo.
*   **Reception App (Tablet):**
    *   **Đối tượng:** Khách đến văn phòng, Lễ tân (nếu có).
    *   **Công nghệ:** PWA (Progressive Web App) hoặc React Native (để tận dụng API phần cứng tốt hơn như Camera quét QR).
    *   **Tính năng:** Chế độ Kiosk, Quét QR, Video Call (WebRTC), Thông báo.
*   **Mobile App / Web Mobile (Meeting Room):**
    *   **Đối tượng:** Nhân viên tham gia họp.
    *   **Tính năng:** Check-in/out, Ghi âm, Hiển thị bản đồ.

### 1.2. Server Side (Backend)
*   **API Server:** RESTful API.
    *   **Công nghệ:** Node.js (NestJS).
    *   **Chức năng:** Xử lý logic nghiệp vụ, xác thực, phân quyền.
*   **Authentication Service:** Quản lý đăng nhập, SSO (Google/Microsoft), JWT.
*   **Notification Service:** Xử lý thông báo đẩy (FCM), Email (AWS SES / Sendgrid), Slack Webhook.
*   **Calendar Sync Service:** Worker đồng bộ dữ liệu 2 chiều với Google Calendar & Outlook Calendar.

### 1.3. AI & Data Processing
*   **Speech-to-Text Engine:** Chuyển đổi giọng nói ghi âm thành văn bản. (Sử dụng OpenAI Whisper, Google Speech-to-Text hoặc **AmiVoice**).
*   **LLM Service (Summarization & Analysis):** Tóm tắt nội dung, trích xuất Task, phân tích cảm xúc, gợi ý câu trả lời. (OpenAI GPT-4 / Google Gemini).
*   **OCR Service:** Quét danh thiếp (Google Cloud Vision / AWS Textract).

### 1.4. Database & Storage
*   **Relational Database (RDBMS):** PostgreSQL (Lưu trữ User, Company, Task, Booking data).
*   **NoSQL / Cache:** Redis (Caching, Queue management).
*   **File Storage:** AWS S3 (Lưu trữ Audio ghi âm, Ảnh, Video branding).

### 1.5. External Integrations
*   **Calendar:** Google Calendar API, Microsoft Graph API (Outlook).
*   **CRM/SFA:** Salesforce API.
*   **Communication:** Slack API, Jira API.

### 1.7. Security & Search
*   **Identity & Access Management:** AWS IAM (Quản lý quyền truy cập chi tiết).
*   **Key Management:** AWS KMS (Quản lý khóa mã hóa dữ liệu).
*   **Secrets Management:** AWS Secrets Manager (Lưu trữ an toàn DB credentials, API Keys).
*   **Search Engine:** AWS OpenSearch (Tìm kiếm toàn văn cho biên bản họp & khách hàng).

### 1.6. Real-time & Meeting Technologies
*   **Signaling Server:** WebSocket (Socket.io) để xử lý tín hiệu kết nối thời gian thực.
*   **Media Server:**
    *   **WebRTC:** Sử dụng cho Video Call trực tiếp (SFU).
    *   **LiveKit / Jitsi / Mediasoup:** Server xử lý media streaming cho hội nghị nhiều bên (SFU Architecture).
    *   **TURN/STUN Server:** Coturn (để hỗ trợ kết nối NAT traversal).
*   **Streaming Protocol:** HLS/RTMP (nếu cần broadcast cuộc họp).

---

## 2. Luồng dữ liệu chính (Data Flow)

### 2.1. Luồng Lễ tân (Reception Flow)
1.  Khách quét QR tại Tablet.
2.  Tablet gửi Request check-in lên API.
3.  API xác thực mã QR.
4.  API gọi Notification Service gửi thông báo cho nhân viên (App/Slack/Mail).
5.  Hệ thống ghi nhận log vào Database.

### 2.2. Luồng Ghi âm & Tóm tắt AI (Meeting Minutes Flow)
1.  Người dùng nhấn "Bắt đầu" trên Mobile/PC.
2.  Thiết bị ghi âm và stream/upload file audio lên Storage.
3.  Sau khi kết thúc, Backend trigger Job xử lý AI.
4.  Speech-to-Text chuyển Audio -> Text.
5.  LLM Service phân tích Text -> Tóm tắt, Task, Sentiment.
6.  Lưu kết quả vào Database và đồng bộ sang Salesforce (nếu cấu hình).
7.  Thông báo hoàn tất cho người dùng.

### 2.3. Luồng Đặt lịch & Đồng bộ
1.  Người dùng tạo lịch trên Office X hoặc Google Calendar.
2.  Calendar Sync Service lắng nghe thay đổi (Webhook) hoặc định kỳ quét.
3.  Cập nhật trạng thái Free/Busy vào Database Office X để đảm bảo tính nhất quán.

---

## 3. Yêu cầu bảo mật (Security)
*   **Data Encryption:** Mã hóa dữ liệu nhạy cảm (PII) trong DB (AES-256). Mã hóa đường truyền (TLS 1.2+).
*   **Access Control:** RBAC (Role-Based Access Control) chặt chẽ giữa Admin/User và giữa các Tenant (Doanh nghiệp) khác nhau.
*   **PII Masking:** Cơ chế tự động ẩn thông tin cá nhân khi hiển thị hoặc chia sẻ dữ liệu AI.

---

## 4. Hạ tầng đề xuất (Infrastructure)
*   **Cloud Provider:** AWS.
*   **Containerization:** Docker, Kubernetes (K8s) cho khả năng mở rộng.
*   **CI/CD:** GitHub Actions.
