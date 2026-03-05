# Screen vs API Mapping: ENTR (Meeting Room Device)

| Screen ID | Tên màn hình | Chức năng chính | API hiện có trong `Api.md` | Đánh giá |
| :--- | :--- | :--- | :--- | :--- |
| **ENTR-001** | Link device | Bind tablet vào phòng họp | `POST /room/:id/link` | ✅ Đúng |
| **ENTR-002** | Booking Data / Lịch | Trạng thái phòng hiện tại/kế | `GET /room/:id/status` | ✅ Đúng |
| **ENTR-003** | Immediate Enter | Đặt họp gấp tại phòng | `POST /room/:id/start` | ⚠️ Cần làm rõ logic đặt gấp |
| **ENTR-004/005** | Pre-Enter Host | Xác định Host & Member | `GET /room/:id/participants` | ✅ Đúng |
| **ENTR-006** | Final Seat Adjustment | Host chốt vị trí ghế | `POST /room/:id/seats` | ✅ Đúng |
| **ENTR-007** | Child Device Join | Guest/User join sync mode | *WebSocket based* | ✅ Đúng |
| **ENTR-008** | Consent / Start Record | Handshake ghi âm | `POST /room/:id/consent` | ✅ Đúng |
| **ENTR-008-U** | Stream Audio | Upload audio stream | `POST /room/:id/stream` | ✅ Đúng |
| **ENTR-009** | Giao diện Meeting (Sync) | Transcription, Chat, Emoji | `GET /room/:id/live` | ✅ Đúng |
| **ENTR-009-E** | Meeting Events | Pin, Memo, Reaction | `POST /room/:id/event` | ✅ Đúng |
| **ENTR-009-EX** | Extend Meeting | Gian hạn thêm 15 phút | `PATCH /room/:id/extend` | ✅ Đúng |
| **ENTR-011** | Exit Finish | Kết thúc session | *Part of End Session* | ✅ Đúng |
