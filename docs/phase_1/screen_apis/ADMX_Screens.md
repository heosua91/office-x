# Screen vs API Mapping: ADMX (Company Administration)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **ADMX-001** | Admin Menu | Điều hướng | *UI Only* | ✅ Đúng |
| **ADMX-002** | Admin Dashboard | Analytics cho tổ chức | `GET /admin/dashboard` | ✅ Đúng |
| **ADMX-003** | Danh sách User | Quản lý nhân viên, CSV import | `GET/POST /admin/users` | ✅ Đúng |
| **ADMX-003-CSV**| Import CSV | Upload & Lịch sử import | `POST /admin/users/import` | ✅ Đúng |
| **ADMX-004** | Đăng ký mới User | Manual creation | `POST /admin/users` | ✅ Đúng |
| **ADMX-004-1** | Request thêm Slot User | Mua thêm hạn mức User | `POST /admin/billing/user-slots` | ✅ Đúng |
| **ADMX-004-2** | Hoàn tất yêu cầu User | Thông báo thành công | *Không cần API* | ✅ Đúng |
| **ADMX-005/006** | Confirm/Chi tiết User | Review, Edit, Delete User | `GET/POST /admin/users` | ✅ Đúng |
| **ADMX-007** | Danh sách phòng họp | Quản lý Meeting Rooms | `GET/POST /admin/rooms` | ✅ Đúng |
| **ADMX-008** | Đăng ký phòng mới | Bind Tablet & Setup room | `POST /admin/rooms` | ✅ Đúng |
| **ADMX-009** | Chi tiết/Sửa phòng | Update room, QR download | `GET/POST /admin/rooms` | ⚠️ Cần PATCH endpoint |
| **ADMX-010** | Danh sách Master Data | Dept, Floors, Vendor, Purpose | `GET/POST /admin/master/:type` | ✅ Đúng |
| **ADMX-011/012** | Logo/Background/Screensaver| Cài đặt branding doanh nghiệp | `GET/PATCH /admin/settings/branding` | ✅ Đúng |
| **ADMX-013/014** | Tablet Lễ tân | Quản lý tablet foyers | `GET/POST /admin/reception-devices` | ✅ Đúng |
| **ADMX-015** | Chi tiết Tablet | Edit/Delete device config | `GET/POST /admin/reception-devices` | ⚠️ Cần PATCH endpoint |
| **ADMX-016/017** | Billing Menu/Status | Xem plan, quota, overage | `GET /admin/billing/status` | ✅ Đúng |
| **ADMX-018** | Update Company Info | Cài đặt giới hạn sử dụng AI | `PATCH /admin/billing/status` | ✅ Đúng |
| **ADMX-019** | Update Payment Info | Credit card / Invoice method | `GET/POST /admin/settings/payment-methods` | ✅ Đúng |
| **ADMX-020/021** | Invoices | List & Details invoices | `GET /admin/billing/invoices` | ✅ Đúng |
| **ADMX-022** | Thay đổi Plan | Upgrade/Downgrade | `GET /auth/register/plans` | ⚠️ Thiếu POST thay đổi plan |
| **ADMX-023** | Lịch sử đến thăm | Truy xuất log khách ra vào | `GET /admin/visit-logs` | ✅ Đúng |
| **ADMX-024** | Quản lý hạn mức AI | Thống số dùng AI tập đoàn | `GET /admin/billing/status` | ⚠️ Cần tách usage data chi tiết |
| **ADMX-025/026** | Mua thêm AI Credits | Prepaid AI minutes | `POST /admin/billing/ai-credits` | ✅ Đúng |
| **ADMX-027/028** | Cài đặt Rule/Alert AI | Auto stop / Notify thresholds | `PATCH /admin/ai/rules` | ✅ Đúng |
| **ADMX-030/031** | Template AI | Quản lý prompt mẫu | `GET/POST /admin/ai-templates` | ✅ Đúng |
