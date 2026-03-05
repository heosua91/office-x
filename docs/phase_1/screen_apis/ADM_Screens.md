# Screen vs API Mapping: ADM (TNG Global Admin)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **ADM-001** | Danh sách Công Ty | Dashboard đa tenant | `GET /tng/companies` | ✅ Đúng |
| **ADM-002** | Cập Nhật Công Ty | Override quotas (User, AI) | `PATCH /tng/companies/:id/quota` | ✅ Đúng |
| **ADM-003** | Confirm Update | Xác nhận | *UI Only* | ✅ Đúng |
| **ADM-004/005** | Billing / Invoice List | Hóa đơn toàn hệ thống | `GET /tng/billing/invoices` | ✅ Đúng |
| **ADM-006/007** | Quản lý Plan Master | Cài đặt pricing global | `GET/POST /tng/plans` | ✅ Đúng |
| **ADM-008** | Quản lý Promo Code | Coupon cho Corp mới | `GET/POST /tng/promo-codes` | ✅ Đúng |
| **ADM-009** | Device Master Control | Quản lý catalogue thiết bị | `GET/POST /tng/catalog/devices` | ✅ Đúng |
| **ADM-010** | Analytics AI Usage | Phân tích Data AI toàn cầu | `GET /tng/analytics/usage` | ✅ Đúng |
| **ADM-011** | Cài đặt AI Limit Policy | Policy charge tự động | `PATCH /tng/settings/policy` | ✅ Đúng |
| **ADM-012** | Phê duyệt Postpaid AI | Duyệt thanh toán trả sau | `POST /tng/ai/approve-overage` | ✅ Đúng |
