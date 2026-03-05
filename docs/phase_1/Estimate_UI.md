# Estimate UI & Logic - Project OfficeX

- **Trình độ kỹ sư:** Middle
- **Hình thức:** Estimate chung bao gồm cả Frontend (FE) và Backend (BE).
- **Đơn vị tính:** Man-day (MD).

## 📊 Bảng tổng hợp Estimate theo Module

| Module | Số lượng màn hình | Tổng Man-day (Middle) | Ghi chú |
| :--- | :---: | :---: | :--- |
| **REG** - Đăng ký mới | 9 | 10.5 | Bao gồm tích hợp Payment Gateway (Paid). |
| **AUTH** - Xác thực | 6 | 5.5 | Quy trình bảo mật, Reset Password, Role phân quyền. |
| **OFX** - Chức năng User | 22 | 48.0 | Dashboard, Calendar Sync, AI Transcription & Audio Link. |
| **ADMX** - Admin doanh nghiệp | 31 | 55.0 | Master CRUD, Quản lý User/Slot, Quản lý Quota AI. |
| **GRES** - Visitor Booking | 4 | 8.5 | Logic kiểm tra lịch trống (Room + User), QR gen. |
| **UKET** - Tablet Lễ tân | 11 | 22.0 | Quét QR, Video/Audio Call (WebRTC), Map hướng dẫn. |
| **ENTR** - Ra vào phòng họp | 11 | 35.0 | Real-time Sync, Seat Mapping, Speech-to-Text Live. |
| **ADM** - TNG Admin | 12 | 24.0 | Quản lý đa doanh nghiệp, Billing Master, Promo Code. |
| **ERR/LOG** - System | 7 | 6.5 | Error pages & Hệ thống Audit Log. |
| **TỔNG CỘNG** | **113** | **215.0** | |

---

## 🔍 Chi tiết Estimate từng màn hình

### 1. Module REG (Đăng ký mới)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| REG-001 | Xác nhận điều khoản sử dụng | 0.5 | Giao diện tĩnh + Logic nút "Đồng ý". |
| REG-002 | Xác thực Email | 1.5 | BE Logic (OTP generation), Mail Server Integration. |
| REG-003 | Hoàn tất gửi Email | 0.5 | Giao diện thông báo. |
| REG-004 | Nhập mã xác nhận | 1.0 | BE Validation mã OTP, thời hạn. |
| REG-005 | Nhập thông tin doanh nghiệp | 1.5 | Form input + Validation. |
| REG-006 | Xác nhận nội dung | 0.5 | Mode Read-only. |
| REG-007 | Chọn gói cước (Plan) | 1.5 | UI bảng giá, logic so sánh & lưu Plan ID. |
| REG-008 | Liên kết hệ thống thanh toán | 3.0 | Tích hợp Stripe/Paid API, xử lý callback. |
| REG-009 | Hoàn tất đăng ký | 0.5 | Giao diện hoàn tất, trigger email hướng dẫn. |

### 2. Module AUTH (Xác thực)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| AUTH-001 | Sign In | 1.5 | JWT Auth, Role-based Redirection. |
| AUTH-002 | Sign In cho TNG | 1.0 | Tương tự Auth-001 trên domain khác. |
| AUTH-003 | Reset Password Request | 1.0 | Form email, Token generation. |
| AUTH-004 | Hoàn tất gửi reset | 0.5 | Giao diện thông báo. |
| AUTH-005 | Thiết lập lại Password (mới) | 1.0 | Validation độ mạnh mật khẩu, Update DB. |
| AUTH-006 | Hoàn tất thiết lập lại | 0.5 | Giao diện thông báo. |

### 3. Module OFX (User Dashboard & Meeting Management)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| OFX-001 | Dashboard cá nhân | 3.0 | Tích hợp nhiều API, Widget Chart (AI Usage). |
| OFX-002 | Danh sách URL điều chỉnh lịch | 1.5 | List data + Filter. |
| OFX-003 | Đăng ký điều chỉnh lịch | 4.5 | Logic AND trống phòng&người, Seat map, G-Drive API. |
| OFX-004 | Chi tiết/Sửa Booking URL | 3.5 | QR Code Generation, Real-time update logic. |
| OFX-005 | Danh sách tình trạng phòng họp | 2.5 | UI Gantt Chart (Timeline). |
| OFX-006 | Danh sách lịch Meeting dự kiến | 1.5 | Calendar view/List view. |
| OFX-007 | Danh sách lịch Meeting nội bộ | 1.5 | Tương tự OFX-006. |
| OFX-008 | Đặt phòng họp mới (Nội bộ) | 3.5 | Calendar Comparison (Free/Busy), AI Template select. |
| OFX-009 | Chi tiết đặt phòng họp | 2.0 | Edit/Delete logic, Permission setup. |
| OFX-010 | Danh sách doanh nghiệp khách hàng | 1.5 | Search/Filter khách hàng. |
| OFX-011 | Chi tiết doanh nghiệp khách hàng | 3.0 | Timeline UI, AI Summary Widgets. |
| OFX-012 | Chỉnh sửa thông tin doanh nghiệp | 1.5 | Standard Form. |
| OFX-013 | Chi tiết lần đến thăm (Visit) | 4.5 | Audio Link Player, Text Highlighting (S2T). |
| OFX-014 | Chỉnh sửa chi tiết lần thăm | 5.0 | Editor complex, AI regenerate content, Permission share. |
| OFX-015 | Auto-Generate Email cảm ơn | 2.5 | AI Integration (Prompting), Mail Template. |
| OFX-016 -> 022 | Thiết lập cá nhân (7 screens) | 10.0 | Trung bình 1.5 MD/màn (OAuth, Webhook, Rules). |

### 4. Module ADMX (Corporate Admin)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| ADMX-001/002 | Admin Menu & Dashboard | 3.0 | Quota stats (AI & User). |
| ADMX-003 to 006 | Quản lý User & Slot | 5.0 | CSV Import/Export, Pro-rate Pricing Calculation. |
| ADMX-007 to 010 | Setup Phòng họp & Master | 6.0 | QR Linkage, Floor Map, Master Data CRUD. |
| ADMX-011 to 015 | Tablet & Signage Config | 7.0 | Upload Multimedia, Digital Signage Logic. |
| ADMX-016 to 022 | Payment & Invoice | 10.0 | Billing info, Plan change, Invoice Line Items. |
| ADMX-023 to 029 | Log & AI Quota Management | 14.0 | Usage Analytics, Alert Rules, Prepaid/Postpaid Logic. |
| ADMX-030 to 031 | Template AI | 3.0 | AI Prompt Editor, Condition logic. |
| Others (Misc) | ... | 7.0 | Chỉnh sửa lặt vặt, Audit logs riêng cho Admin. |

### 5. Module GRES (Visitor Booking Flow)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| GRES-001 | Màn hình chọn ngày giờ | 3.0 | Timezone handling, Smart scheduling. |
| GRES-002 | Nhập thông tin Guest | 2.0 | Dynamic fields for companions. |
| GRES-003 | Confirm Registration | 1.0 | Data Recap. |
| GRES-004 | Hoàn tất Regis | 2.5 | QR/PIN Gen, Calendar API Sync, Email Noti. |

### 6. Module UKET (Reception Tablet)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| UKET-001 to 003 | Sign In & TOP | 3.0 | Force login, Digital Signage Standby. |
| UKET-004/005 | QR & PIN Code Entry | 3.5 | Camera integration (Scanner), Auth logic. |
| UKET-006/007 | No-Appoint & Vendor | 4.0 | Rejection logic, PIC Notification trigger. |
| UKET-008 to 010 | Notification & Calling | 8.5 | WebRTC Voice Call (PIC Video), Real-time polling. |
| UKET-011 | Noti Success | 3.0 | Map & QR Download for guest. |

### 7. Module ENTR (In-Room Tablet - Ra vào phòng)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| ENTR-001 | Link device vô phòng | 2.5 | Device Binding, Multi-device grouping. |
| ENTR-002 | Booking Data / Lịch | 1.5 | Status polling (Immediate Enter). |
| ENTR-003 | Đăng ký họp gấp | 2.5 | Collision check, Quick user assign. |
| ENTR-004 to 007 | Pre-Enter (Host & Child) | 10.0 | Real-time Seat Sync, Drag-n-drop Seat Mapping. |
| ENTR-008 to 010 | In-Meeting UI | 15.0 | Speech-to-Text Live, Mirroring, Action log. |
| ENTR-011 | Exit Finish | 1.0 | Data Cleanup, Room Reset. |

### 8. Module ADM (TNG Admin - System Admin)
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| ADM-001 | Danh sách Công Ty Hợp Đồng | 2.5 | Dashboard quản lý đa doanh nghiệp (Multi-tenancy). |
| ADM-002 | Cập Nhật Công Ty Hợp Đồng | 2.5 | Logic override quota, plan, định phí riêng cho từng KH. |
| ADM-003 | Confirm Update | 0.5 | Xác nhận thay đổi. |
| ADM-004 | Danh sách Hóa Đơn (Billing List) | 1.5 | Aggregated billing data từ tất cả corp. |
| ADM-005 | Chi tiết Billing | 1.0 | Line item detail. |
| ADM-006 | Màn hình Master quản lý Plan | 2.0 | Policy control cho các gói cước hệ thống. |
| ADM-007 | Chi tiết/Update Plan Cơ Bản | 1.5 | Price propagation logic. |
| ADM-008 | Quản lý Promotion Code | 2.0 | Coupon generation, usage limit logic. |
| ADM-009 | Device Master Control | 2.5 | Inventory fee management & rules. |
| ADM-010 | Thống kê Analytics AI Usage | 3.5 | Phân tích xu hướng tiêu thụ AI toàn hệ thống. |
| ADM-011 | Cài đặt AI Limit Policy | 2.0 | Global soft-lock/postpaid policies. |
| ADM-012 | Quản lý hóa đơn Postpaid AI | 3.0 | Export data & aggregate pay-as-you-go billing. |

### 9. Module ERR/LOG
| Screen ID | Tên màn hình | Estimate (MD) | Ghi chú độ phức tạp |
| :--- | :--- | :---: | :--- |
| ERR-001 -> 004 | Error & Maintenance Pages | 1.0 | Xử lý 403, 404, 500 và chế độ Bảo trì toàn cục. |
| LOG-001 | DS Access Log | 1.5 | Search/Export lịch sử truy cập (Max 90 days). |
| LOG-002 | DS Operation Log | 1.5 | Audit log cho các thao tác CRUD quan trọng. |
| LOG-003 | Khai Báo Rules Alert Log | 2.5 | Setup detection thresholds & notification channels. |

---

## 📈 Ghi chú về điều kiện làm việc (Assumptions)
- **Framework:** React/Vite cho FE, Bun/Hono/Node.js cho BE.
- **Infrastructure:** Đã có nền tảng cơ bản về Authentication, DB Schema và Template Project.
- **Third-party:** Sử dụng các dịch vụ Cloud API (OpenAI/Gemini, Google Calendar, Stripe, Slack Webhook).
- **Quality:** Bao gồm Unit Test cho các logic BE quan trọng và thiết kế UI Responsive.
