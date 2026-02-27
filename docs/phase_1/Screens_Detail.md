# Chi tiết chức năng màn hình (Screens Detail) - v2

| Đại phân loại | Trung phân loại | ID Màn hình | Tên chức năng | Vai trò | Mô tả chức năng |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Đăng ký mới** | Đăng ký mới | REG-001 | Xác nhận điều khoản | Người dùng mới | Hiển thị Điều khoản sử dụng và Chính sách bảo mật. Kiểm tra trạng thái Checkbox "Đồng ý". Nếu Đồng ý: Nút "Tiếp theo" được kích hoạt -> Chuyển sang REG-002. |
| | | REG-002 | Gửi mã xác thực | Người dùng mới | Nhập email. Kiểm tra định dạng và kiểm tra email đã tồn tại trong DB chưa. Nếu hợp lệ: Tạo mã xác thực 6 chữ số, lưu vào DB và gửi email -> Chuyển sang REG-003. |
| | | REG-003 | Hiển thị gửi thành công | Người dùng mới | Hiển thị thông báo "Đã gửi email xác thực". Chờ người dùng nhấn link trong email hoặc chuyển thủ công sang REG-004. |
| | | REG-004 | Xác thực chính chủ | Người dùng mới | Nhập mã xác thực 6 số. Đối chiếu với mã trong DB và kiểm tra thời hạn. Nếu khớp: Bật flag xác thực -> Chuyển sang REG-005. |
| | | REG-005 | Đăng ký thông tin doanh nghiệp | Người dùng mới | Nhập thông tin công ty. Nếu hợp lệ: Chuyển sang màn hình xác nhận REG-006. |
| | | REG-006 | Xác nhận nhập liệu | Người dùng mới | Hiển thị thông tin đã nhập ở chế độ Read-only. Cho phép "Sửa" để quay lại hoặc "Tiếp theo" để sang REG-007. |
| | | REG-007 | Chọn gói dịch vụ | Người dùng mới | Hiển thị bảng so sánh tính năng các gói. Người dùng chọn gói và "Tiếp theo" -> Chuyển sang REG-008. |
| | | REG-008 | Đăng ký thanh toán | Người dùng mới | Nhập thông tin thanh toán. Liên kết API với dịch vụ thanh toán (Paid...). Nếu thành công: Cấp Client ID -> Chuyển sang REG-009. |
| | | REG-009 | Xử lý thông báo hoàn tất | Người dùng mới | Hiển thị thông báo hoàn tất (bao gồm trạng thái xét duyệt tín dụng). Gửi email hướng dẫn và URL đăng nhập trong background. |
| **Xác thực** | Đăng nhập | AUTH-001 | Xác thực đăng nhập | Người dùng, Quản trị viên | Nhập ID/PASS. Gọi API xác thực. Nếu thất bại hiển thị lỗi. |
| | | AUTH-001 | Phân quyền điều hướng | Người dùng, Quản trị viên | Kiểm tra Role của người dùng: Admin -> Chuyển sang ADMX-002, User -> Chuyển sang OFX-001. |
| | | AUTH-002 | Đăng nhập TNG | Quản trị viên TNG | Nhập ID/PASS TNG. Thành công chuyển sang ADM-001. |
| | Đặt lại mật khẩu | AUTH-003 | Yêu cầu đặt lại | Người dùng, Quản trị viên | Nhập email. Kiểm tra sự tồn tại trong DB, tạo token reset và gửi email. |
| | | AUTH-004 | Hiển thị đã gửi | Người dùng, Quản trị viên | Thông báo "Đã gửi email thiết lập lại mật khẩu". |
| | | AUTH-005 | Thiết lập mật khẩu mới | Người dùng, Quản trị viên | Nhập mật khẩu mới (2 lần). Kiểm tra định dạng (độ dài, ký tự). Cập nhật DB và chuyển sang AUTH-006. |
| | | AUTH-006 | Hiển thị hoàn tất | Người dùng, Quản trị viên | Thông báo "Đổi mật khẩu thành công". Nút quay lại màn hình đăng nhập. |
| **Người dùng OfficeX** | Bảng điều khiển | OFX-001 | Widget lịch trình | Người dùng | Lấy dữ liệu lịch họp cá nhân từ lịch liên kết. Hiển thị danh sách widget. Click để xem chi tiết (OFX-004). |
| | | OFX-001 | Tình trạng phòng họp | Người dùng | Lấy dữ liệu trống/đầy hiện tại của các phòng họp. Hiển thị trạng thái thời gian thực. |
| | | OFX-001 | Cảnh báo sử dụng AI | Người dùng | Thống kê thời gian AI đã dùng trong tháng của cá nhân. Hiển thị đồ thị/con số. Cảnh báo nếu sắp hết hạn ngạch. |
| | Quản lý họp khách | OFX-002 | Danh sách URL điều chỉnh | Người dùng | Hiển thị danh sách các URL điều chỉnh lịch đã tạo. Click để xem chi tiết. |
| | | OFX-003 | Tạo URL thông minh | Người dùng | Nhập thành viên, tài nguyên, thời gian. Tìm khung giờ trống chung (AND). Tự động giữ chỗ phòng, thiết lập mẫu AI. |
| | | OFX-003 | Thiết lập vị trí ngồi (Multi) | Người dùng | Nếu là phòng Multi-device: Tự động phân bổ vị trí (có thể kéo thả để chỉnh sửa). |
| | | OFX-003 | Quản lý tài liệu chia sẻ | Người dùng | Tải tài liệu (PDF/Ảnh) hoặc chọn từ Google Drive cá nhân để dùng trong họp. |
| | | OFX-004 | Hiển thị chi tiết & URL | Người dùng | Hiển thị URL đã tạo, mã QR và các thiết lập. Chức năng Copy URL. |
| | | OFX-004 | Chỉnh sửa thiết lập | Người dùng | Thay đổi thành viên, phòng họp, mẫu AI trực tiếp. Cập nhật DB tức thì. |
| | | OFX-004 | Điều chỉnh vị trí ngồi | Người dùng | Chỉnh sửa vị trí ngồi cho phòng Multi-device. |
| | | OFX-004 | Quản lý tài liệu (Sửa) | Người dùng | Thêm/Xóa tài liệu chia sẻ từ Local hoặc Google Drive. |
| | | OFX-004 | Vô hiệu hóa URL | Người dùng | Nút "Vô hiệu hóa" để xóa URL, khiến link không truy cập được nữa. |
| | | OFX-005 | Hiển thị biểu đồ Gantt | Người dùng | Hiển thị timeline sử dụng của tất cả phòng họp trong công ty. |
| | | OFX-006 | Danh sách lịch toàn công ty | Người dùng | Danh sách các cuộc họp đã đặt (bao gồm họp được chia sẻ). Che nội dung nếu là lịch riêng tư. |
| | Quản lý họp nội bộ | OFX-007 | Danh sách lịch nội bộ | Người dùng | Danh sách các cuộc họp có flag "Nội bộ" hoặc được chia sẻ nội bộ. |
| | | OFX-008 | Tìm kiếm đặt chỗ phức hợp | Người dùng | Liên kết lịch cá nhân và lịch phòng. Tìm khung giờ trống chung để đặt phòng mới. Chọn mẫu AI. |
| | | OFX-008 | Thiết lập vị trí (Multi) | Người dùng | Tự động phân bổ vị trí ngồi ban đầu cho phòng Multi-device. |
| | | OFX-008 | Tài liệu chia sẻ (Nội bộ) | Người dùng | Quản lý tài liệu cho cuộc họp nội bộ. |
| | | OFX-009 | Chỉnh sửa/Xóa đặt chỗ | Người dùng | Xem chi tiết, sửa thông tin hoặc xóa đặt chỗ (kèm modal xác nhận). Quay lại OFX-007 sau khi xóa. |
| | | OFX-009 | Thiết lập quyền công khai | Người dùng | Chọn phạm vi xem: "Toàn bộ bộ phận" hoặc "Chỉ người dùng chỉ định". |
| | | OFX-009 | Điều chỉnh vị trí/Tài liệu | Người dùng | Chỉnh sửa vị trí ngồi và tài liệu tương tự như màn hình họp khách. |
| | Quản lý khách hàng | OFX-010 | Tìm kiếm khách hàng | Người dùng | Hiển thị danh sách: Tên công ty, địa chỉ, lượt đến... Chức năng tìm kiếm từ khóa/lọc. |
| | | OFX-011 | Hồ sơ khách hàng | Người dùng | Hiển thị thông tin cơ bản, timeline lượt đến, log ra vào, lịch sử biên bản. Widget AI (ToDo, Tóm tắt). |
| | | OFX-012 | Chỉnh sửa thông tin khách | Người dùng | Cập nhật thông tin công ty khách hàng vào DB. |
| | | OFX-013 | Chi tiết biên bản họp | Người dùng | Xem chi tiết lượt đến: Text ghi âm, Biên bản AI, ToToDo, Phân tích thương thảo. |
| | | OFX-014 | Chỉnh sửa biên bản thủ công | Người dùng | Trình soạn thảo để sửa nội dung AI tạo. Có thể yêu cầu AI tạo lại bằng mẫu khác. Thêm ghi chú. |
| | | OFX-014 | Thiết lập phạm vi chia sẻ | Người dùng | Phân quyền xem/sửa biên bản cho bộ phận hoặc cá nhân. |
| | | OFX-015 | Tạo email AI | Người dùng | Dựa trên biên bản, mẫu email và chữ ký để tạo bản thảo email cảm ơn. Cho phép chỉnh sửa trước khi gửi. |
| | Cài đặt cá nhân | OFX-016 | Menu cài đặt | Người dùng | Điều hướng đến các mục: ID/Pass, Lịch, Quyền riêng tư, Công cụ ngoài, Chữ ký. |
| | | OFX-017 | Cài đặt tài khoản | Người dùng | Nhập mật khẩu cũ/mới để cập nhật tài khoản. |
| | | OFX-018 | Đồng bộ lịch | Người dùng | Kết nối OAuth với Google hoặc Outlook Calendar. |
| | | OFX-019 | Thiết lập quyền riêng tư | Người dùng | Thiết lập phạm vi mặc định cho biên bản. Tách biệt quyền xem giữa "Ghi chú nội bộ" và "Chia sẻ với khách". |
| | | OFX-020 | Quy tắc đặt chỗ | Người dùng | Thiết lập ngày/giờ có thể đặt lịch, chặn một số ngày cụ thể. |
| | | OFX-021 | Liên kết bên ngoài | Người dùng | Thiết lập Webhook URL cho Slack/Teams... |
| | | OFX-022 | Liên kết Google Drive | Người dùng | OAuth 2.0 để lấy token (Read-only) dùng cho việc chọn tài liệu. |
| **Quản trị doanh nghiệp** | Cài đặt quản trị | ADMX-001 | Hiển thị Menu | Quản trị viên | Kiểm tra quyền Admin khi đăng nhập để hiển thị menu quản lý. |
| | Bảng điều khiển | ADMX-002 | Hiển thị Dashboard Admin | Quản trị viên | Thống kê: Lịch ngày, tỷ lệ sử dụng phòng, hạn ngạch AI toàn công ty, Menu Admin. |
| | Quản lý người dùng | ADMX-003 | Danh sách người dùng | Quản trị viên | Hiển thị danh sách thành viên. Các nút: Đăng ký mới, Import CSV, Tải mẫu. |
| | | ADMX-004 | Đăng ký người dùng | Quản trị viên | Nhập thông tin thành viên. Kiểm tra trùng lặp ID/Email trong DB. |
| | | ADMX-005 | Thực hiện đăng ký & Thông báo | Quản trị viên | Lưu DB và tự động gửi ID/Pass vào email người dùng mới. |
| | | ADMX-006 | Sửa / Xóa người dùng | Quản trị viên | Cập nhật thông tin hoặc xóa (kèm modal xác nhận). |
| | Cài đặt phòng họp | ADMX-007 | Danh sách phòng | Quản trị viên | Hiển thị phòng họp, tầng, thiết bị. Nút đăng ký mới/chi tiết. |
| | | ADMX-008 | Đăng ký phòng mới | Quản trị viên | Nhập thông tin, chọn Single/Multi mode. Tự động tạo QR code liên kết thiết bị. |
| | | ADMX-009 | Chỉnh sửa phòng | Quản trị viên | Cập nhật thông tin phòng. Hiển thị/Tải xuống QR hướng dẫn (cho khách) và QR thiết bị. |
| | Cài đặt Master | ADMX-010 | CRUD Master dữ liệu | Quản trị viên | Quản lý danh sách: Nhà thầu, Bộ phận, Dụng cụ, Tầng. Sửa trực tiếp trên bảng. |
| | Màn hình chờ lễ tân | ADMX-011 | Thiết lập nhận diện | Quản trị viên | Tải lên Logo công ty, đổi ảnh nền màn hình chờ Tablet. |
| | | ADMX-012 | Thiết lập kỹ thuật số | Quản trị viên | Quản lý slide ảnh/video quảng bá, cài đặt thời gian chuyển cảnh. |
| | Máy tính bảng | ADMX-013 | Danh sách máy tính bảng | Quản trị viên | Quản lý các thiết bị Tablet lễ tân đã đăng ký. |
| | | ADMX-014 | Đăng ký Tablet | Quản trị viên | Thiết lập ID/Pass cho Tablet. Gán bộ phận, nhà thầu và cấu hình thông báo. |
| | | ADMX-015 | Sửa Tablet | Quản trị viên | Cập nhật hoặc xóa cấu hình Tablet. |
| | Hóa đơn & Thanh toán | ADMX-016 | Chọn Menu thanh toán | Quản trị viên | Điều hướng giữa "Thông tin thanh toán" và "Danh sách hóa đơn". |
| | | ADMX-017 | Xem thông tin hợp đồng | Quản trị viên | Xem gói cước hiện tại, phí sử dụng, hạn ngạch (AI...) và khuyến mãi đang dùng. |
| | | ADMX-018 | Sửa thông tin doanh nghiệp | Quản trị viên | Cập nhật địa chỉ, email hóa đơn... qua modal xác nhận. |
| | | ADMX-019 | Sửa thông tin thanh toán | Quản trị viên | Cập nhật thẻ tín dụng hoặc thông tin chuyển khoản. |
| | | ADMX-020 | Danh sách hóa đơn | Quản trị viên | Xem lịch sử hóa đơn theo tháng. |
| | | ADMX-021 | Chi tiết hóa đơn | Quản trị viên | Click vào hóa đơn để xem bảng kê chi tiết các khoản phí. |
| | | ADMX-022 | Đổi gói dịch vụ | Quản trị viên | Chọn gói mới, nhập mã giảm giá. Liên kết API với hệ thống thanh toán để đổi gói. |
| | Log doanh nghiệp | ADMX-023 | Tìm kiếm nhật ký khách | Quản trị viên | Lọc khách thăm theo thời gian. Xem chi tiết (modal). Xuất CSV. |
| | Quản lý sử dụng AI | ADMX-024 | Hiển thị tình trạng AI | Quản trị viên | Biểu đồ tròn thể hiện 3 phần: Miễn phí (còn lại), Trả trước (đã mua), Trả sau (đã dùng). |
| | | ADMX-024 | Chi tiết AI theo user | Quản trị viên | Thống kê lượng dùng AI của từng thành viên trong công ty. |
| | | ADMX-025 | Mua thêm AI (Simulate) | Quản trị viên | Nhập số giờ muốn mua. Tính toán số tiền thời gian thực theo đơn giá. Chọn thời điểm thanh toán. |
| | | ADMX-025 | Yêu cầu mua AI | Quản trị viên | Ghi nhận yêu cầu mua (Status: Đang xử lý) vào DB. |
| | | ADMX-026 | Xác nhận mua AI | Quản trị viên | Hiển thị nội dung mua cuối cùng. Nhấn "Xác nhận" để thanh toán. |
| | | ADMX-026 | Thực hiện thanh toán AI | Quản trị viên | Gọi API thanh toán. Nếu thành công: Cập nhật status "Hoàn tất" và cộng hạn ngạch AI. |
| | | ADMX-027 | Thiết lập bộ giới hạn | Quản trị viên | Chọn hành động khi hết hạn ngạch: "Tự động trả sau" hoặc "Ngừng sử dụng". |
| | | ADMX-027 | Thiết lập thông báo | Quản trị viên | Cài đặt gửi cảnh báo (Email/Slack...) khi lượng AI còn dưới % quy định. |
| | | ADMX-028 | Quy tắc cảnh báo chi tiết | Quản trị viên | Thiết lập: Trigget (%), Nơi nhận, Đối tượng nhận (Admin/All), Tần suất. |
| | | ADMX-029 | Chi tiết phí AI | Quản trị viên | Liệt kê chi tiết: Miễn phí, Trả trước, Trả sau (số giờ x đơn giá). Dự phóng phí cuối tháng. |
| | Mẫu AI | ADMX-030 | Danh sách mẫu AI | Quản trị viên | Danh sách templates cho Biên bản và Email văn phòng. |
| | | ADMX-031 | CRUD Mẫu AI | Quản trị viên | Soạn thảo Prompt, định dạng kết quả AI. Gán loại mẫu (Họp nội bộ, Họp khách...). |
| **Lịch hẹn (Khách)** | Đặt lịch khách | GRES-001 | Đặt lịch thông minh | Khách | Hiển thị logo công ty host. Chọn khung giờ trống (đồng bộ Host x Phòng). Chọn múi giờ. |
| | | GRES-002 | Nhập thông tin khách | Khách | Nhập công ty, tên, liên lạc, hình thức họp, số người. |
| | | GRES-003 | Kiểm tra thông tin | Khách | Xem lại toàn bộ thông tin trước khi nhấn "Xác nhận". |
| | | GRES-004 | Xử lý xác nhận đặt lịch | Khách | Cập nhật lịch Host, Phòng. Tạo mã QR và Gửi email xác nhận tự động. |
| **Tablet lễ tân** | Đăng nhập | UKET-001 | Xác thực thiết bị | Quản trị viên | Nhập ID/Pass của Tablet. Lưu Token vĩnh viễn (yêu cầu login lại sau 30 ngày). |
| | Chờ khách | UKET-002 | Trình chiếu quảng bá | Khách | Chạy slide ảnh/video (Signage). Phát hiện chạm để vào TOP. |
| | Màn hình chính | UKET-003 | Chọn hình thức tiếp | Khách | Các nút: QR, Không hẹn, Nhà thầu, Nhập mã code. |
| | Quét mã | UKET-004 | Xử lý quét QR | Khách | Mở Camera Tablet, quét mã khách nhận qua email. Nếu hợp lệ: Gửi thông báo đến host -> UKET-010. |
| | Nhập mã | UKET-005 | Xác thực code | Khách | Nhập mã Reservation Code bằng phím số. API đối chiếu, thành công gửi thông báo. |
| | Không hẹn | UKET-006 | Nhập thông tin khách | Khách | Nhập dữ liệu và chọn bộ phận/người muốn gặp. Nhấn "Gọi" -> UKET-008. |
| | Nhà thầu | UKET-007 | Gọi đơn vị vận chuyển | Nhà thầu | Nhấn biểu đồ các đơn vị (Yamato, Sagawa...) để gọi người phụ trách kho/lễ tân. |
| | Thông báo | UKET-008 | Gửi thông báo gọi | Khách | Gửi message qua Slack/Teams... cho Host. Hiển thị trạng thái "Đang chờ phản hồi". |
| | | UKET-009 | Chức năng cuộc gọi | Khách, Nhân viên | WebRTC Audio (Khách) và Video (Nhân viên) nếu cần trao đổi thêm. |
| | | UKET-010 | Chỉ dẫn bản đồ | Khách | Hiển thị ảnh bản đồ đến phòng. Hiện QR để khách scan lấy bản đồ vào điện thoại. |
| | | UKET-011 | Tự động reset | Khách | Thông báo "Hoàn tất". Sau 1 phút không thao tác tự quay lại UKET-002. |
| **Thiết bị phòng họp** | Cài đặt | ENTR-001 | Liên kết hội thoại | Người dùng | Quét QR tại phòng để gán Tablet này cho phòng đó. Chọn vị trí ngồi nếu là Multi-device. |
| | Xác nhận lịch | ENTR-002 | Hiển thị trạng thái phòng | Người dùng, Khách | Hiện tên phòng, lịch họp kế tiếp. Nút "Vào phòng" hoặc "Vào phòng ngay". |
| | Vào phòng ngay | ENTR-003 | Chọn loại cuộc họp | Người dùng | "Nội bộ" hay "Khách hàng". Nếu là khách hàng cũ: Tìm theo tên để nạp thông tin. |
| | | ENTR-003 | Đặt chỗ nhanh | Người dùng | Chọn người tham gia, thời gian dùng. Kiểm tra xung đột lịch phòng trước khi bật "Vào phòng". |
| | Chuẩn bị | ENTR-004 | Xác nhận tham dự | Người dùng | Ở chế độ Multi: Chọn tên mình trong danh sách để xác nhận có mặt tại vị trí. |
| | | ENTR-005 | Hiển thị máy chủ | Người dùng | Máy của Host được Highlight để phân biệt "Máy mẹ". |
| | | ENTR-006 | Chốt vị trí ngồi | Người dùng | Host (Máy mẹ) có thể kéo thả Icon để điều chỉnh vị trí ngồi của mọi người (đồng bộ toàn bộ máy con). |
| | | ENTR-007 | Chờ vào họp | Người dùng, Khách | Máy khách/con hiển thị vị trí được gán. Nhấn "Tham gia" để sẵn sàng. |
| | Bắt đầu | ENTR-008 | Cấu hình ghi âm | Người dùng | Host chọn Ghi âm hay không. Nếu có: Toàn bộ máy con hiện Popup yêu cầu đồng ý. |
| | | ENTR-008 | Luồng đồng ý ghi âm | Người dùng, Khách | Mỗi người dùng nhấn "Đồng ý" trên máy mình để bắt đầu stream ghi âm riêng biệt. |
| | Trong cuộc họp | ENTR-009 | Hỗ trợ AI (Họp ghi âm) | Người dùng, Khách | Hiển thị text ghi âm theo thời gian thực (định danh người nói). Tự động thoát sau 5 phút hết giờ. |
| | | ENTR-009 | Tương tác thông minh | Người dùng, Khách | Reaction stamp, ghim nội dung quan trọng, comment, memo. |
| | | ENTR-009 | Mirror tài liệu | Người dùng, Khách | Hiển thị tài liệu chia sẻ trên tất cả các máy. Đồng bộ Laser pointer theo tay người nói. |
| | | ENTR-009 | Điều khiển của Host | Người dùng | Nút "Gia hạn" (15p) hoặc nút "Kết thúc" cuộc họp. |
| | | ENTR-010 | Tương tác cơ bản (Không ghi âm) | Người dùng, Khách | Các tính năng tương tác (memo, mirror, pointer...) nhưng không có text ghi âm. |
| | | ENTR-011 | Hoàn tất rời phòng | Người dùng, Khách | Thông báo kết thúc. Chuyển Tablet về trạng thái chờ ENTR-002. |
| **Quản trị TNG** | Hợp đồng | ADM-001 | Thống kê doanh nghiệp | Quản trị viên TNG | Dashboard tổng: Các công ty đang dùng, gói cước, trạng thái thanh toán, hạn ngạch AI hệ thống. |
| | | ADM-002 | Sửa thông tin đối tác | Quản trị viên TNG | Cập nhật thông tin công ty khách hàng, ghi chú nội bộ. |
| | | ADM-002 | Tùy chỉnh gói cước | Quản trị viên TNG | Thay đổi gói, đặt flag chức năng đặc biệt, gán mã giảm giá riêng. |
| | | ADM-002 | Thiết lập hạn ngạch riêng | Quản trị viên TNG | Ghi đè giới hạn: Số user tối đa, số phút AI miễn phí, đơn giá trả sau cho từng công ty đặc thù. |
| | | ADM-003 | Xác nhận & Thông báo | Quản trị viên TNG | Hiển thị Diff thay đổi. Gửi email thông báo cập nhật hợp đồng cho đối tác. |
| | | ADM-004 | Quản lý hóa đơn tổng | Quản trị viên TNG | Theo dõi doanh thu, trạng thái thanh toán của toàn bộ khách hàng. |
| | | ADM-005 | Chi tiết hóa đơn đối tác | Quản trị viên TNG | Tra cứu bảng kê và PDF hóa đơn của một công ty cụ thể. |
| | Gói dịch vụ | ADM-006 | Định nghĩa gói cước | Quản trị viên TNG | Thiết lập 4 gói cơ bản: Chênh lệch về chức năng (có/không Meeting room, Single/Team). |
| | | ADM-008 | Cập nhật giá gói | Quản trị viên TNG | Thay đổi giá niêm yết toàn hệ thống. Có chức năng đặt lịch áp dụng giá mới. |
| | Khuyến mãi | ADM-007 | Quản lý mã giảm giá | Quản trị viên TNG | Tạo CODE khuyến mãi (定率/定額). Đặt hạn mức số lần dùng và ngày hết hạn. |
| | Thiết bị | ADM-009 | CRUD Master thiết bị | Quản trị viên TNG | Quản lý danh mục: Tablet, Mic, Camera. Thiết lập giá thuê/bán cho đối tác OfficeX. |
| | | ADM-009 | Điều phối giá thiết bị | Quản trị viên TNG | Theo dõi lịch sử giá. Chọn áp dụng giá mới cho các hợp đồng cũ hoặc chỉ hợp đồng mới. |
| | Hệ thống AI | ADM-010 | Phân tích AI toàn cục | Quản trị viên TNG | Thống kê tải hệ thống AI, doanh thu từ gói trả trước/trả sau AI. Phân tích theo quy mô. |
| | | ADM-011 | Chính sách AI hệ thống | Quản trị viên TNG | Thiết lập Logic xử lý mặc định khi hết hạn ngạch trên toàn hệ thống. |
| | | ADM-012 | Phê duyệt phí trả sau | Quản trị viên TNG | Tổng hợp phí AI vượt mức của các công ty vào cuối tháng để chuyển sang hóa đơn. |
| **Lỗi & Nhật ký** | Lỗi | ERR-001 | Xử lý Forbidden | Nhiều vai trò | Hiển thị khi User/Admin vào link không đủ quyền. Nút quay lại. |
| | | ERR-002 | Xử lý Not Found | Nhiều vai trò | Hiển thị cho các URL không hợp chuẩn. |
| | | ERR-003 | Xử lý System Error | Nhiều vai trò | Bắt các Exception chưa xử lý. Hiển thị thông tin hỗ trợ kỹ thuật. |
| | | ERR-004 | Chế độ bảo trì | Nhiều vai trò | Bật/Tắt trang bảo trì. Thông báo thời gian hệ thống hoạt động lại. |
| | Nhật ký | LOG-001 | Tra cứu log truy cập | Quản trị viên TNG | Tìm theo IP/User/Time. Lưu trữ 90 ngày. Chức năng Export CSV. |
| | | LOG-002 | Nhật ký thay đổi dữ liệu | TNG, Quản trị viên | Ghi lại mọi thao tác C/U/D quan trọng. Lọc theo đối tượng tác động. |
| | | LOG-003 | Giám sát bất thường | Quản trị viên TNG | Thiết lập bộ quy tắc (rule) để phát hiện hành vi tấn công hoặc xóa dữ liệu hàng loạt. |
