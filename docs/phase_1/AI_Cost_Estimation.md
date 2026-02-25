# Ước tính Chi phí AI (OpenAI API) - Office X

## 1. Giả định Cơ bản (Base Assumptions)

Để tính toán chi phí, chúng ta dựa trên hành vi sử dụng trung bình của một nhân viên văn phòng tham gia họp tích cực.

| Thông số | Giá trị giả định | Ghi chú |
| :--- | :--- | :--- |
| **Số cuộc họp/ngày** | 2 cuộc | Trung bình sáng 1, chiều 1. |
| **Thời lượng/cuộc** | 60 phút | Trung bình. |
| **Tổng thời lượng âm thanh** | 120 phút/ngày | Dùng cho Speech-to-Text. |
| **Số ngày làm việc/tháng** | 20 ngày | Không tính cuối tuần. |
| **Độ dài văn bản (Transcript)** | ~9,000 từ (~12,000 tokens) | Cho 60 phút hội thoại (tốc độ trung bình). |
| **Độ dài tóm tắt (Output)** | ~500 từ (~700 tokens) | Tóm tắt & Action Items. |

---

## 2. Đơn giá Dịch vụ (Unit Pricing)

Sử dụng bảng giá OpenAI API (cập nhật mới nhất):

| Dịch vụ | Model | Đơn giá | Ghi chú |
| :--- | :--- | :--- | :--- |
| **Speech-to-Text** | **Whisper** | **$0.006 / phút** | Chuyển đổi âm thanh thành văn bản. |
| **Summarization** | **GPT-4o-mini** | Input: **$0.15 / 1M tokens**<br>Output: **$0.60 / 1M tokens** | Mô hình nhỏ, nhanh, rẻ, đủ tốt cho tóm tắt. |
| **Advanced Analysis** | **GPT-4o** | Input: **$2.50 / 1M tokens**<br>Output: **$10.00 / 1M tokens** | Dùng cho phân tích sâu (Sentiment, Coaching). |

> *Lưu ý: GPT-4o-mini rẻ hơn GPT-4o khoảng 20-30 lần, nên ưu tiên dùng cho các tác vụ tóm tắt thông thường.*

---

## 3. Chi phí cho 1 Người dùng (Per User Cost)

### A. Chi phí Âm thanh (Whisper)
*   120 phút/ngày x 20 ngày = 2,400 phút/tháng.
*   2,400 phút x $0.006 = **$14.40 / tháng**.

### B. Chi phí Văn bản (GPT-4o-mini)
*   **Input (Transcript):** 12,000 tokens/họp x 2 họp x 20 ngày = 480,000 tokens.
    *   Giá: 0.48M x $0.15 = **$0.072 / tháng**.
*   **Output (Summary):** 700 tokens/họp x 2 họp x 20 ngày = 28,000 tokens.
    *   Giá: 0.028M x $0.60 = **$0.0168 / tháng**.
*   **Tổng GPT:** ~$0.09 / tháng (Rất rẻ).

### C. Tổng cộng / User
*   **~$14.50 / tháng / người dùng.**
*   *Nhận xét: Chi phí chủ yếu nằm ở phần xử lý âm thanh (Whisper).*

---

## 4. Bảng Ước tính theo Quy mô (Scale Scenarios)

### Kịch bản 1: Nhóm nhỏ (10 Users) - Giai đoạn thử nghiệm
Phù hợp cho Phase 1 (MVP).

| Hạng mục | Số lượng | Chi phí ước tính (Tháng) |
| :--- | :--- | :--- |
| Whisper (Audio) | 24,000 phút | $144.00 |
| GPT-4o-mini (Text) | ~5M tokens | ~$1.00 |
| **TỔNG CỘNG** | | **~$145.00** |

### Kịch bản 2: Doanh nghiệp nhỏ (50 Users)

| Hạng mục | Số lượng | Chi phí ước tính (Tháng) |
| :--- | :--- | :--- |
| Whisper (Audio) | 120,000 phút | $720.00 |
| GPT-4o-mini (Text) | ~25M tokens | ~$5.00 |
| **TỔNG CỘNG** | | **~$725.00** |

### Kịch bản 3: Doanh nghiệp vừa (100 Users)

| Hạng mục | Số lượng | Chi phí ước tính (Tháng) |
| :--- | :--- | :--- |
| Whisper (Audio) | 240,000 phút | $1,440.00 |
| GPT-4o-mini (Text) | ~50M tokens | ~$10.00 |
| **TỔNG CỘNG** | | **~$1,450.00** |

### Kịch bản 4: Quy mô lớn (500 Users) - Phase 2 Growth

| Hạng mục | Số lượng | Chi phí ước tính (Tháng) |
| :--- | :--- | :--- |
| Whisper (Audio) | 1,200,000 phút | $7,200.00 |
| GPT-4o-mini (Text) | ~250M tokens | ~$50.00 |
| **TỔNG CỘNG** | | **~$7,250.00** |

---

## 5. Chiến lược Tối ưu Chi phí (Optimization)

Do chi phí Whisper chiếm ~99% tổng chi phí, cần tập trung tối ưu phần này:

1.  **Chỉ ghi âm khi cần thiết:**
    *   Cho phép người dùng Bật/Tắt ghi âm (không phải cuộc họp nào cũng cần AI).
    *   Nếu giảm 50% số cuộc họp cần AI -> Tiết kiệm 50% chi phí.

2.  **Sử dụng Open Source Whisper (Self-hosted):**
    *   Thay vì dùng API OpenAI ($0.006/min), có thể chạy model **Whisper V3 Large** trên GPU Server (EC2 g4dn.xlarge).
    *   **Ví dụ:**
        *   1 node `g4dn.xlarge` (AWS) giá ~$0.526/hr.
        *   Chạy 24/7 = ~$380/tháng.
        *   Một node GPU có thể xử lý real-time cho nhiều luồng (tùy cấu hình).
    *   **Điểm hòa vốn (Break-even point):**
        *   Nếu chi phí API > $380/tháng (tức khoảng > 26 users), nên cân nhắc chuyển sang Self-hosted Whisper.
        *   Với 500 users (API tốn $7,250), việc tự host Whisper Cluster (ví dụ 5-10 nodes) sẽ rẻ hơn rất nhiều (chỉ tốn khoảng $2,000 - $3,000).

3.  **Tier Pricing:**
    *   Gói "Basic": Không có AI (Free).
    *   Gói "Pro": Có AI (Thu phí cao hơn để bù chi phí $14.5/mo).
