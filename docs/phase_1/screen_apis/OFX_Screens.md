# Screen vs API Mapping: OFX (Office User Workspace)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **OFX-001** | Dashboard cá nhân | Xem schedule, status phòng, AI usage | `GET /office/dashboard` | ✅ Đúng |
| **OFX-002** | Danh sách URL điều chỉnh | Hiển thị các smart-url đã tạo | `GET /office/meetings` | ⚠️ Cần filter loại smart-url |
| **OFX-003** | Đăng ký điều chỉnh lịch | Tạo Smart URL liên kết tài nguyên | `POST /office/meetings/smart-url` | ✅ Đúng |
| **OFX-004** | Chi tiết/Sửa Smart URL | Cập nhật thông tin Smart URL | `PATCH /office/meetings/:id` | ✅ Đúng |
| **OFX-005** | Danh sách tình trạng phòng | Xem Gantt chart phòng họp | `GET /office/schedule/gantt` | ✅ Đúng |
| **OFX-006** | Danh sách lịch Meeting dự kiến | List các meeting cá nhân | `GET /office/meetings` | ✅ Đúng |
| **OFX-007** | List Meeting nội bộ | Quản lý folder & Timeline | `GET /office/folders`, `POST/PATCH/DELETE /office/folders`, `GET /office/meetings?folder_id=xyz` | ✅ Đúng |
| **OFX-008** | Đặt phòng họp mới (Nội bộ) | Tạo meeting nội bộ từ Portal | `POST /office/meetings` | ✅ Đúng |
| **OFX-009** | Chi tiết đặt phòng họp | Xem/Sửa/Xóa meeting | `GET/PATCH/DELETE /office/meetings/:id` | ✅ Đúng |
| **OFX-010** | Danh sách doanh nghiệp khách | Tìm kiếm/List client companies | `GET /office/customers` | ✅ Đúng |
| **OFX-011** | Chi tiết doanh nghiệp khách | Profile, timeline, insights | `GET /office/customers/:id` | ✅ Đúng |
| **OFX-012** | Chỉnh sửa thông tin khách | Update thông tin Client | `PATCH /office/customers/:id` | ✅ Đúng |
| **OFX-013** | Chi tiết lần đến thăm | Transcription, Summary, Audio | `GET /office/meetings/:id/ai` | ✅ Đúng |
| **OFX-014** | Chỉnh sửa chi tiết lần thăm | Edit summary, transcript, share | `PATCH /office/meetings/:id/summary` | ✅ Đúng |
| **OFX-015** | Auto-Generate Email cảm ơn | AI email draft | `POST /office/meetings/:id/email` | ✅ Đúng |
| **OFX-016** | Màn hình TOP thiết lập | Navigation cài đặt | *UI Only* | ✅ Đúng |
| **OFX-017** | Đổi User ID/Password | Profile update | `PATCH /auth/profile` | ✅ Đúng |
| **OFX-018** | Thiết lập Booking | Blackout dates, availability | `GET/POST /office/settings/availability` | ✅ Đúng |
| **OFX-019** | Thiết lập Privacy | Public/Private summary | `PATCH /office/settings/privacy` | ✅ Đúng |
| **OFX-020** | Thiết lập Availability | Giờ làm việc cá nhân | `GET/POST /office/settings/availability` | ✅ Đúng |
| **OFX-021** | Liên kết Tool bên ngoài | Slack/Teams integration | `GET/POST /office/settings/integrations` | ✅ Đúng |
| **OFX-022** | Liên kết Google Drive | Truy cập file | `GET /office/google-drive/files` | ✅ Đúng |
| **OFX-023** | Real-time Meeting AI | Agenda based real-time notes | `GET /office/meetings/:id/agendas`, `GET /office/meetings/:id/summary/live` | ✅ Đúng |
| **OFX-024** | Agenda View Summary | Review meeting by agenda | `GET /office/meetings/:id/summary?view=agenda` | ✅ Đúng |
| **OFX-025** | Từ điển Cá nhân | Quản lý thuật ngữ riêng | `GET/POST/PATCH/DELETE /office/dictionary` | ✅ Đúng |
| **OFX-026** | Liên kết Lịch | Auth Redirect & Callback | `GET /office/settings/calendar/auth`, `POST /office/settings/calendar/sync` | ✅ Đúng |
| **OFX-027** | Liên kết Drive (Tùy chọn) | Cài đặt quyền truy cập | `POST /office/settings/drive/permissions` | ✅ Đúng |
