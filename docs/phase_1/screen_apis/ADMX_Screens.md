# Screen vs API Mapping: ADMX (Company Administration)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **ADMX-001** | Admin Menu | Điều hướng | *UI Only* | ✅ Đúng |
| **ADMX-002** | Admin Dashboard | Analytics cho tổ chức | `GET /admin/dashboard` | ✅ Đúng |
| **ADMX-003** | Danh sách User | Quản lý nhân viên, CSV import | `GET /admin/users` | ✅ Đúng |
| **ADMX-003-CSV**| Import CSV | Upload & Lịch sử import | `POST /admin/users/import`, `GET /admin/users/import/history` | ✅ Đúng |
| **ADMX-004** | Đăng ký mới User | Manual creation | `POST /admin/users`, `GET /admin/master/DEPARTMENT` | ✅ Đúng |
| **ADMX-004-1** | Request thêm Slot User | Mua thêm hạn mức User | `POST /admin/billing/user-slots`, `GET /admin/billing/status` | ✅ Đúng |
| **ADMX-004-2** | Hoàn tất yêu cầu User | Thông báo thành công | *Không cần API* | ✅ Đúng |
| **ADMX-005** | Confirm đăng ký User | Final review | `POST /admin/users` | ✅ Đúng |
| **ADMX-006** | Chi tiết/Sửa User | Edit, Delete, PW Reset | `GET/PATCH/DELETE /admin/users/:id`, `POST /admin/users/:id/password-reset` | ✅ Đúng |
| **ADMX-007** | Danh sách phòng họp | Quản lý Meeting Rooms | `GET /admin/rooms` | ✅ Đúng |
| **ADMX-008** | Đăng ký phòng mới | Bind Tablet & Setup room | `POST /admin/rooms`, `GET /admin/master/FLOOR` | ✅ Đúng |
| **ADMX-009** | Chi tiết/Sửa phòng | Update room, QR download | `GET/PATCH/DELETE /admin/rooms/:id` | ✅ Đúng |
| **ADMX-010** | Danh sách Master Data | Dept, Floors, Vendor, Purpose | `GET/POST /admin/master/:type`, `PATCH/DELETE /admin/master/:type/:id`, `PUT /admin/master/:type/sort` | ✅ Đúng |
| **ADMX-011/012** | Logo/Background/Screensaver| Cài đặt branding doanh nghiệp | `GET/PATCH /admin/settings/branding` | ✅ Đúng |
| **ADMX-013/014** | Tablet Lễ tân | Quản lý tablet foyers | `GET/POST /admin/reception-devices` | ✅ Đúng |
| **ADMX-015** | Chi tiết Tablet | Edit/Delete device config | `GET/PATCH/DELETE /admin/reception-devices/:id` | ✅ Đúng |
| **ADMX-016/017** | Billing Menu/Status | Xem plan, quota, overage | `GET /admin/billing/status` | ✅ Đúng |
| **ADMX-018** | Update Company Info | Cài đặt giới hạn sử dụng AI | `PATCH /admin/billing/status` | ✅ Đúng |
| **ADMX-019** | Update Payment Info | Credit card / Invoice method | `GET/POST /admin/settings/payment-methods` | ✅ Đúng |
| **ADMX-020** | Danh sách hóa đơn | Lịch sử Invoices | `GET /admin/billing/invoices` | ✅ Đúng |
| **ADMX-021** | Chi tiết hóa đơn | Breakdown phí chi tiết | `GET /admin/billing/invoices/:id` | ✅ Đúng |
| **ADMX-022** | Thay đổi Plan | Upgrade/Downgrade | `GET /admin/billing/plans`, `POST /admin/billing/plans/change`, `POST /admin/billing/promo/validate` | ✅ Đúng |
| **ADMX-023** | Lịch sử đến thăm | Truy xuất log khách ra vào | `GET /admin/visit-history`, `GET /admin/visit-history/export` | ✅ Đúng |
| **ADMX-024** | Quản lý hạn mức AI | Thống số dùng AI tập đoàn | `GET /admin/billing/ai-quota` | ✅ Đúng |
| **ADMX-025/026** | Mua thêm AI Credits | Prepaid AI minutes | `GET /admin/billing/pricing`, `POST /admin/billing/ai-credits` | ✅ Đúng |
| **ADMX-027** | Cài đặt giới hạn AI | Auto stop / Notify mode | `GET/PATCH /admin/billing/ai-quota/settings` | ✅ Đúng |
| **ADMX-028** | Alert sử dụng AI | Notify thresholds | `GET/POST/PATCH /admin/members/ai-settings` | ✅ Đúng |
| **ADMX-029** | Chi tiết Usage & Billing | Chi tiết tiêu thụ AI thực tế | `GET /admin/billing/ai-quota/details`, `GET /admin/billing/ai-quota/details/export` | ✅ Đúng |
| **ADMX-030** | Danh sách AI Template | Quản lý prompt mẫu | `GET/DELETE /admin/ai-templates` | ✅ Đúng |
| **ADMX-031** | Đăng ký/Sửa Template | Edit prompt & Test | `GET/POST/PATCH /admin/ai-templates/:id` | ✅ Đúng |
