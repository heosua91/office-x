# Product Requirements Document (PRD) - Office X (Phase 1)

## 1. Tầm nhìn & Mục tiêu (Vision & Objectives)
Hình ảnh nghiệp vụ lý tưởng sau khi triển khai hệ thống:

**Tự động hóa nghiệp vụ Lễ tân**
- Khách đến chỉ cần quét mã QR để hoàn tất thủ tục check-in, nhân viên phụ trách sẽ nhận được thông báo tự động.
- Loại bỏ sổ sách giấy tờ, giảm đáng kể thời gian tiếp đón.
- Hướng tới tích hợp lễ tân AI bằng giọng nói trong tương lai.

**Liên kết mượt mà Hội họp & Thương thảo**
- Lịch làm việc và đặt phòng họp được liên kết, hoàn tất đặt phòng chỉ với 1 click.
- AI tự động tạo biên bản, tóm tắt nội dung và chia sẻ ngay lập tức cho các bên liên quan.

**Tối ưu hóa kinh doanh nhờ quản lý thông tin tập trung**
- Dữ liệu từ Lễ tân -> Thương thảo -> Follow-up được quản lý tại một nơi.
- Cho phép đề xuất hiệu quả và chăm sóc khách hàng dựa trên lịch sử dữ liệu.

**Nâng cao năng suất và sự sáng tạo của nhân viên**
- Giảm thiểu các công việc lặp lại, giúp nhân viên tập trung vào các công việc tạo ra giá trị cao hơn.
- Cải thiện sự hài lòng và thúc đẩy đổi mới.

**Nâng cao quyết định quản trị dựa trên dữ liệu**
- Phân tích số lượng khách, tỷ lệ sử dụng phòng họp, dữ liệu thương thảo để cải thiện quy trình và lập chiến lược kinh doanh. Hỗ trợ ra quyết định dựa trên dữ liệu (Target Data-driven).

---

## 2. Yêu cầu chức năng (Functional Requirements)

### 2.1. Điều chỉnh lịch trình (PC)
- Liên kết lịch cá nhân (Google/Outlook).
- Liên kết lịch phòng họp.
- Nhập thông tin đặt chỗ.
- Nhập thông tin khách mời.
- Đăng ký và gửi thông báo nhắc nhở (Remind).
- Tự động gửi thẻ ra vào và video hướng dẫn cho khách.

### 2.2. Đặt phòng họp (PC)
- Đăng ký/Chỉnh sửa lịch phòng họp.
- Danh sách tình trạng phòng họp.
- Liên kết với Calendar.

### 2.3. Lễ tân (Tablet)
- Quét mã QR đặt hẹn.
- Xử lý khách vãng lai (Giao hàng, Khách không hẹn trước).
- Tính năng Thông báo & Gọi thoại.
- Hướng dẫn giọng nói AI.
- Tùy chỉnh thông điệp chào mừng (Welcome comment).
- Đăng nhập hệ thống lễ tân.
- Hiển thị quét QR phòng họp.

### 2.4. Vào/Ra phòng họp (Smartphone)
- Hiển thị bản đồ hướng dẫn.
- Xử lý Check-in/Check-out.
- Liên kết Calendar.
- Xử lý gia hạn thời gian.
- Lịch sử ra vào.

### 2.5. Biên bản cuộc họp AI (PC)
- Ghi âm giọng nói.
- Lưu trữ dữ liệu ghi âm (Salesforce).
- Chuyển đổi giọng nói thành văn bản (Speech-to-text).
- Tóm tắt dữ liệu văn bản.
- Tạo danh sách công việc (ToDo List) từ nội dung.
- Chỉnh sửa bản tóm tắt & ToDo list.
- Xuất định dạng (PDF/Text).

### 2.6. Phân tích thương thảo AI (PC)
- Phân tích Pipeline, quản lý (Liên kết Salesforce).
- Trích xuất chủ đề thảo luận.
- Đề xuất cải thiện nội dung đề xuất.
- Gợi ý nội dung cho lần đề xuất tiếp theo.
- Quản lý giai đoạn (Phase), tự động đăng ký nội dung hoạt động.

### 2.7. Quản trị viên Doanh nghiệp (PC - Office X Admin)
- Chỉnh sửa thông tin doanh nghiệp.
- Danh sách hóa đơn.
- Đăng ký & Quản lý người dùng.
- Đăng ký mua thêm người dùng, thời gian tóm tắt AI.
- Quyền truy cập.
- Dashboard tình hình sử dụng.
- Các cài đặt ban đầu (Lễ tân, Phòng họp).
- Đăng ký ban đầu dạng Tutorial.

### 2.8. Quản trị hệ thống (PC - Office X Operator/TNG)
- Danh sách thông tin doanh nghiệp.
- Đăng ký/Chỉnh sửa thông tin doanh nghiệp.
- Danh sách hóa đơn & Tạo hóa đơn.
- Danh sách dữ liệu (KPI: Thời gian tóm tắt AI, số lượng user...).
- Quyền truy cập.
- Cài đặt bảo mật.

---

## 3. Danh sách tính năng chi tiết (Feature List)

### 1. Đăng ký người dùng & Xác thực (PC & Smartphone)
- **Quy trình đăng ký:**
  - Màn hình điều khoản sử dụng.
  - Tạo tài khoản (Nhập email, xác thực).
  - Nhập thông tin doanh nghiệp.
  - Chọn gói dịch vụ (Plan).
  - Nhập thông tin thanh toán.
  - Xác nhận nội dung tài khoản.
  - Màn hình hoàn tất (Gửi mail ID & Pass khởi tạo).
  - Link tải hướng dẫn sử dụng.

### 2. Hệ thống Lễ tân (Tablet)
- **Màn hình chờ (Screensaver/Digital Signage):**
  - Slideshow ảnh / Phát video (Quảng cáo công ty, hướng dẫn...).
  - Chạm để bắt đầu.
  - Thay đổi Logo và thiết kế.
- **Màn hình TOP (Chọn đối tượng):**
  - Có hẹn trước.
  - Không hẹn trước.
  - Giao hàng/Nhà cung cấp (Vendors).
  - Khác.
- **Luồng Có hẹn trước:**
  - Quét mã QR -> Hiển thị & xác nhận thông tin -> Bản đồ -> Thông báo cho người phụ trách.
  - Xác nhận gọi thoại (Nếu cần gọi điện).
  - Nhập mã đặt hẹn (Trường hợp không quét QR).
- **Luồng Không hẹn trước:**
  - Nhập thông tin khách.
  - Chọn mục đích.
  - Thông báo nhân viên.
  - Quét danh thiếp (OCR).
- **Luồng Giao hàng:**
  - Chọn tên nhà cung cấp -> Thông báo nhân viên.
- **Màn hình thông báo/Đang gọi:**
  - Hiển thị trạng thái đang gọi người phụ trách.

### 3. Hệ thống ghi âm phòng họp (Smartphone, Tablet & PC)
- **Trước khi vào/Xác nhận đặt chỗ:**
  - Xem tình trạng (Liên kết Calendar).
  - Nút "Vào phòng" (Trigger bắt đầu thương thảo).
  - **Check-in giả định (Backup):** Nếu không có dữ liệu check-in lễ tân, nút này được tính là check-in và tự động bù dữ liệu.
- **Màn hình ghi âm:**
  - Thông báo bắt đầu ghi âm.
  - Đăng ký người nói mới.
  - Hiển thị nội dung ghi âm (Real-time transcript).
  - Thả cảm xúc (Reaction) vào nội dung.
  - Bình luận, Ghim (Pin), Tag (@mention).
  - Ghi chú (Memo).
  - Tạo Task nhanh từ nội dung hội thoại (1-tap).
  - Nút gia hạn (đơn vị 15 phút - cập nhật Calendar).
  - Báo lỗi nếu trùng lịch sau đó.
  - Nút Kết thúc.
- **Màn hình không ghi âm:**
  - Tạo biên bản mẫu.
  - Memo, Reaction, Gia hạn, Kết thúc.
- **Màn hình hoàn tất ra về.**

### 4. Người dùng phổ thông (Office X) (PC & Smartphone)
- **Đăng nhập:**
  - Phân quyền tự động (Admin/User).
  - Reset mật khẩu.
- **Dashboard (Trang chủ):**
  - Lịch trình hôm nay.
  - Tình trạng sử dụng phòng họp.
  - My Task (Hiển thị nhanh 3-5 task, quá hạn/hôm nay). Click để vào chi tiết.
  - Cảnh báo thời hạn sử dụng AI tóm tắt.
- **Quản lý Task (Global Menu):**
  - Board/Danh sách Task (Tất cả doanh nghiệp, sắp xếp theo hạn/mức quan trọng).
  - Kéo thả thay đổi trạng thái/hạn.
  - Click task -> Chuyển đến "Chi tiết doanh nghiệp" tương ứng.
- **Quản lý Cuộc họp:**
  - Tạo URL điều chỉnh lịch.
  - Cài đặt điều kiện tài nguyên (Khai thác thời gian rảnh của tất cả thành viên & Phòng họp liên kết).
  - Danh sách URL đã tạo.
  - Tình trạng sử dụng phòng họp.
  - Lịch trình dự kiến.
  - Màn hình đặt phòng mới.
- **Quản lý Khách hàng & Dự án (Customer/Case Management):**
  - Danh sách khách hàng doanh nghiệp.
  - Tìm kiếm, lọc.
  - View quản lý giai đoạn (Phase management).
  - **Chi tiết doanh nghiệp (Hồ sơ khách hàng):**
    - Thông tin cơ bản.
    - Timeline/Activity Log (Lịch sử ra vào, biên bản họp...).
    - Multi-Action Button: Ghi nhận [Thăm viếng] [Web] [Điện thoại] [Mail].
    - Phân tích AI & Ghi chép trong thư mục.
    - Xem/Sửa biên bản họp.
    - Tự động che thông tin cá nhân (PII Masking).
    - Tự động điền trường SFA (BANT,...).
    - Trích xuất chủ đề, từ khóa.
    - Phân tích lý do thất bại/lo ngại.
    - Gợi cảm kịch bản & tài liệu đề xuất tiếp theo.
    - Tự động soạn mail cảm ơn.
    - Liên kết Task với doanh nghiệp.
- **Cài đặt (Settings):**
  - User ID & Pass.
  - Liên kết Calendar.
  - Cài đặt thông báo.
  - Liên kết SFA (Salesforce...).
  - Riêng tư & Bảo mật.
  - Phạm vi chia sẻ biên bản mặc định.
  - Tách biệt "Ghi chú nội bộ" và "Chia sẻ khách hàng".
  - Liên kết Slack/Jira.

### 5. Người dùng Quản trị (Admin User)
- **Quản lý người dùng:** Danh sách, Thêm/Sửa (Role Admin/User).
- **Cài đặt phòng họp:** Danh sách, Tạo mới (Tên, Tầng, Thiết bị), Sửa/Xóa.
- **Cài đặt Tablet Lễ tân:**
  - Danh sách thiết bị.
  - Cài đặt hiển thị (DS nhà cung cấp, phòng ban, mục đích).
  - Branding (Logo, hình nền).
  - Screensaver (Upload ảnh/video, thời gian chạy).
- **Thanh toán (Billing):** Thông tin thanh toán, Danh sách hóa đơn.
- **Quản lý Log:** Log thao tác.
- **Setup Wizard (Gamification):**
  - Hướng dẫn từng bước: Liên kết lịch -> Tạo phòng -> Mời thành viên.
  - Giao diện dạng game, hiệu ứng chúc mừng khi hoàn tất.

### 6. Quản trị hệ thống (TNG Admin - Super Admin)
- Đăng nhập Admin.
- Quản lý doanh nghiệp (Danh sách, Sửa, Thanh toán).
- Quản lý Log (Access log, Action log).

### 7. Điều chỉnh lịch & Đặt chỗ cho Khách (Web Browser)
- **Màn hình chọn lịch:**
  - Logo doanh nghiệp.
  - Lịch thông minh (Smart candidate dates).
  - Logic AND: (Người tham gia rảnh) AND (Phòng họp rảnh).
  - Chọn múi giờ.
- **Thông tin khách:**
  - Nhập Tên cty, Tên khách, Email.
  - Thêm người đi cùng.
- **Hoàn tất:**
  - Xác nhận nội dung.
  - Cấp mã QR ngay lập tức.
  - Bản đồ hướng dẫn.
  - Auto mail: Xác nhận (kèm QR) & Reminder.

### 8. Các tính năng chung
- Mã hóa dữ liệu lưu trữ.
- Mã hóa đường truyền (SSL/TLS).
- Các màn hình lỗi (403/404/500).
