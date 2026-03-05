# Screen vs API Mapping: LOG & ERR (System Logs & Errors)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **LOG-001** | Access Logs | Search/Export lịch sử truy cập | `GET /tng/logs/audit` | ⚠️ Cần phân tách Access vs Audit Log |
| **LOG-002** | Operation Logs | Audit trail CRUD data | `GET /tng/logs/audit` | ✅ Đúng |
| **LOG-003** | Rules Alert Log | Thiết lập monitoring rules | `POST /admin/monitoring/rules` | ✅ Đúng |
| **ERR-001** | 403 Forbidden | Lỗi phân quyền | *Không cần API riêng* | ✅ Đúng |
| **ERR-002** | 404 Not Found | Lỗi không tìm thấy URL | *Không cần API riêng* | ✅ Đúng |
| **ERR-003** | 500 Server Error | Lỗi hệ thống | *Không cần API riêng* | ✅ Đúng |
| **ERR-004** | Maintenance | Thông báo bảo trì | *Không cần API riêng* | ✅ Đúng |
