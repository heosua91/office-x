# PRD Critique & Improvements (Góc nhìn Product Owner)

## 1. Đánh giá tổng quan (Executive Summary)
Tài liệu PRD hiện tại (docs/phase_1/PRD.md) đã bao phủ được các tính năng cốt lõi (Happy Path) nhưng còn **thiếu chiều sâu về trải nghiệm người dùng (UX), các trường hợp ngoại lệ (Edge Cases) và tính khả thi trong vận hành thực tế**.

Đánh giá mức độ hoàn thiện: **6.5/10**

---

## 2. Các điểm yếu & Rủi ro (Weaknesses & Risks)

### 2.1. Thiếu quy trình xử lý ngoại lệ (Missing Edge Cases)
*   **Mất kết nối Internet:** Tablet Lễ tân sẽ hoạt động ra sao khi mất mạng? Khách có check-in được không? (Offline Mode chưa được đề cập).
*   **Hết thời gian họp:** Hệ thống xử lý thế nào khi cuộc họp A kết thúc nhưng cuộc họp B kế tiếp đã đến giờ mà phòng chưa trống? (Xung đột tài nguyên thực tế).
*   **Nhận diện giọng nói sai:** Nếu AI ghi âm sai nghiêm trọng (đặc biệt tên riêng, thuật ngữ chuyên ngành), người dùng sửa như thế nào? Quy trình sửa có tiện không?
*   **Khách không có Smartphone:** Nếu khách đến không dùng smartphone hoặc không biết quét QR, quy trình backup thủ công cụ thể là gì? (Hiện chỉ nói chung chung).

### 2.2. Trải nghiệm người dùng (UX Issues)
*   **Onboarding quá phức tạp:** Yêu cầu "Tự động gửi video hướng dẫn" cho khách mỗi lần đặt lịch là spam và gây phiền. Khách VIP không muốn xem video hướng dẫn check-in.
*   **Quá tải thông báo (Notification Fatigue):** Việc thông báo mọi lúc (Check-in, Giao hàng, Video call) vào Slack/App sẽ khiến nhân viên bị loạn. Cần cơ chế lọc/gom thông báo.
*   **Quyền riêng tư (Privacy):** Chưa làm rõ việc "AI phân tích cảm xúc" trong cuộc họp. Nhân viên có thoải mái khi biết mình đang bị AI phân tích thái độ không? Đây là vấn đề nhạy cảm về văn hóa doanh nghiệp.

### 2.3. Thiếu tính năng "Must-have" cho Enterprise
*   **Phân quyền chi tiết (Granular Permission):** Hiện chỉ có Admin/User. Cần thêm role: Trưởng bộ phận (xem báo cáo team), Thư ký (đặt lịch hộ Sếp), IT Support.
*   **Audit Log chi tiết:** Doanh nghiệp lớn cần biết chính xác ai đã nghe file ghi âm nào vào lúc nào (không chỉ là sửa/xóa).

---

## 3. Đề xuất cải tiến (Improvement Proposals)

### 3.1. Nâng cấp User Story
| ID | Tính năng | Vấn đề hiện tại | Đề xuất cải tiến (Solution) | Mức độ ưu tiên |
| :--- | :--- | :--- | :--- | :--- |
| **P-01** | **Offline Mode cho Lễ tân** | Chưa có, mất mạng là tê liệt. | Cho phép Tablet lưu Cache mã QR/Danh sách khách trong ngày. Khi có mạng sẽ đồng bộ sau. | **High** |
| **P-02** | **Cơ chế "Bumping" phòng họp** | Xung đột giờ họp. | Hiển thị đèn cảnh báo trên Tablet phòng họp 5p trước khi hết giờ. Nếu quá giờ 5p mà nhóm sau đã check-in, tự động gửi Alert cho chủ tọa nhóm trước. | **Medium** |
| **P-03** | **Smart Notification** | Spam thông báo | Chỉ thông báo cho người chủ trì và thư ký. Gom các thông báo giao hàng lại thành 1 digest nếu quá nhiều. | **Medium** |
| **P-04** | **Dictionary cho AI** | Nhận diện sai thuật ngữ. | Cho phép Doanh nghiệp upload bộ từ điển riêng (Tên dự án, Code name, Jargon) để AI học trước. | **High** |
| **P-05** | **Privacy Mode** | Lo ngại giám sát AI. | Thêm nút "Pause Recording" vật lý hoặc trên App cho các đoạn hội thoại nhạy cảm (Off-the-record). | **Critical** |

### 3.2. Metrics thành công (Success Metrics) cần bổ sung
Không chỉ đo số lượng user, cần đo:
*   **Time-to-Checkin:** Trung bình khách mất bao nhiêu giây để check-in xong? (Target: < 10s).
*   **Correction Rate:** Tỷ lệ người dùng phải sửa lại biên bản do AI viết (Target: < 15%).
*   **Room Utilization Efficiency:** Tỷ lệ phòng họp trống ảo (Book nhưng không dùng / Ghost meeting).

### 3.3. Câu hỏi cho đội kỹ thuật (Questions for Tech Team)
1.  Độ trễ (Latency) của Real-time Transcript là bao nhiêu? Nếu > 5s thì trải nghiệm họp sẽ rất tệ.
2.  Khả năng chịu tải khi 100 cuộc họp cùng ghi âm và upload file đồng thời?
3.  Chi phí lưu trữ Audio/Video sẽ tăng phi mã, chiến lược nén/xóa dữ liệu cụ thể là gì?
