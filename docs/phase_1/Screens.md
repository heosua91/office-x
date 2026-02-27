# Danh sách màn hình (Screen List) - v2

| Phân loại | ID Màn hình | Tên Màn hình | Vai trò | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| **Đăng ký mới** | | | | |
| Điều khoản | REG-001 | Xác nhận điều khoản sử dụng | Người dùng mới | Click vào Đồng ý để bắt đầu đăng ký |
| Xác thực email | REG-002 | Xác thực email | Người dùng mới | Nhập địa chỉ email và gửi mã xác nhận. |
| | REG-003 | Hoàn tất gửi email | Người dùng mới | Màn hình hoàn tất gửi email. Chuyển đến nhập mã xác nhận bằng cách click vào link URL. |
| | REG-004 | Nhập mã xác nhận | Người dùng mới | Nhập mã xác nhận từ email nhận được để xác thực chính chủ. |
| Thông tin doanh nghiệp | REG-005 | Nhập thông tin doanh nghiệp | Người dùng mới | Nhập tên công ty, địa chỉ, người phụ trách, số điện thoại, email, số lượng người tham gia, đăng ký người tham gia, v.v. |
| | REG-006 | Xác nhận nội dung thông tin doanh nghiệp | Người dùng mới | Xác nhận thông tin doanh nghiệp đã nhập, nếu không có vấn đề gì thì tiếp tục. |
| Gói dịch vụ | REG-007 | Chọn gói dịch vụ | Người dùng mới | Chọn từ các gói dịch vụ được cung cấp. Có so sánh chức năng. Nhập mã khuyến mãi. |
| Thanh toán | REG-008 | Liên kết hệ thống đại lý thanh toán | Người dùng mới | Liên kết với hệ thống đại lý thanh toán (Paid, v.v.) đối với thanh toán bằng hóa đơn và nhập các thông tin cần thiết. |
| Đăng ký quản lý người dùng | REG-009 | Đăng ký hoàn tất | Người dùng mới | Hiển thị thông báo hoàn tất (bao gồm trạng thái "đang xét duyệt tín dụng" của đại lý thanh toán). Tự động gửi email PDF hướng dẫn thao tác và URL đăng nhập. |
| **Xác thực** | | | | |
| Đăng nhập | AUTH-001 | Đăng nhập | Người dùng, Quản trị viên | Nhập ID & PASS quản lý HOẶC ID & PASS người dùng. |
| | AUTH-002 | Đăng nhập chuyên dụng TNG | Quản trị viên TNG | Tài khoản quản lý dành cho TNG. |
| Đặt lại mật khẩu | AUTH-003 | Đặt lại mật khẩu | Người dùng, Quản trị viên | Nhập địa chỉ email, sau khi nhấn nút đặt lại, mật khẩu khởi tạo sẽ được gửi đến email. |
| | AUTH-004 | Hoàn tất gửi đặt lại mật khẩu | Người dùng, Quản trị viên | Hiển thị thông báo khởi tạo thành công. |
| | AUTH-005 | Thiết lập/Đặt lại mật khẩu | Người dùng, Quản trị viên | Màn hình nhập thiết lập mật khẩu mới. |
| | AUTH-006 | Hoàn tất thiết lập/đặt lại mật khẩu | Người dùng, Quản trị viên | Hiển thị thông báo mật khẩu mới đã được thiết lập. |
| **Tính năng người dùng OfficeX** | | | | |
| Bảng điều khiển | OFX-001 | Bảng điều khiển cá nhân | Người dùng | Lịch trình trong ngày, Trạng thái sử dụng phòng họp, Thời gian tóm tắt AI đã dùng (cá nhân). |
| Quản lý cuộc họp khách hàng | OFX-002 | Danh sách URL điều chỉnh lịch hẹn đã đăng ký | Người dùng | Hiển thị danh sách các URL điều chỉnh lịch hẹn đã đăng ký trước đó [Tên][Người đăng ký]. |
| | OFX-003 | Đăng ký điều chỉnh lịch hẹn | Người dùng | Cài đặt liên kết tài nguyên, chọn thành viên tham gia, tự động giữ phòng họp. Chọn mẫu biên bản họp AI. Đối với phòng đa thiết bị, vị trí ngồi được phân chia tự động trước. Tải lên tài liệu chia sẻ hoặc chọn từ Google Drive. |
| | OFX-004 | Chi tiết/Chỉnh sửa điều chỉnh lịch hẹn, Hiển thị URL | Người dùng | Hiển thị trạng thái điều chỉnh lịch, thông tin chi tiết và URL. Có thể thay đổi: cài đặt tài nguyên, thành viên, mẫu AI. Điều chỉnh vị trí ngồi (đa thiết bị). Thêm/xóa tài liệu chia sẻ. |
| | OFX-005 | Danh sách tình trạng sử dụng phòng họp | Người dùng | Hiển thị danh sách tình trạng sử dụng của các phòng họp. |
| | OFX-006 | Danh sách lịch trình họp dự kiến | Người dùng | Hiển thị danh sách lịch trình các cuộc họp đã đặt chỗ (bao gồm cả các cuộc họp được chia sẻ). |
| Quản lý cuộc họp nội bộ | OFX-007 | Danh sách lịch trình họp nội bộ dự kiến | Người dùng | Màn hình danh sách các cuộc họp nội bộ đã được đặt chỗ hoặc chia sẻ trước đó. |
| | OFX-008 | Đặt phòng họp mới (Nội bộ) | Người dùng | Liên kết lịch cá nhân với lịch phòng họp để tìm khung giờ trống của thành viên và phòng. Chọn mẫu biên bản AI. Phân vị trí ngồi tự động (đa thiết bị). Tải lên/chọn tài liệu chia sẻ. |
| | OFX-009 | Chi tiết đặt phòng họp | Người dùng | Thông tin chi tiết đặt phòng. Có thể chỉnh sửa/xóa. Cài đặt công khai thông tin họp. Điều chỉnh vị trí ngồi (đa thiết bị). Thay đổi mẫu AI. Thêm/xóa tài liệu chia sẻ. Hiện modal xác nhận khi sửa/xóa. |
| Quản lý doanh nghiệp khách hàng | OFX-010 | Danh sách doanh nghiệp khách hàng | Người dùng | Danh sách khách hàng hiện đang đăng ký. Hiển thị tên công ty, địa chỉ, số điện thoại, người phụ trách, số lượt đến thăm, v.v. Có hỗ trợ tìm kiếm/lọc. |
| | OFX-011 | Thông tin chi tiết doanh nghiệp khách hàng | Người dùng | Hiển thị tên công ty, địa chỉ, số điện thoại, người phụ trách, lượt đến. Dòng thời gian: lịch sử đến, log vào/ra, biên bản họp. Hiện Todo list, ghi âm, dữ liệu phân tích đàm phán AI. |
| | OFX-012 | Chỉnh sửa chi tiết doanh nghiệp khách hàng | Người dùng | Màn hình chỉnh sửa tên công ty, địa chỉ, số điện thoại, người phụ trách, số lượt đến thăm. |
| | OFX-013 | Thông tin chi tiết lượt đến thăm | Người dùng | Hiển thị chi tiết của lượt đến thăm được chọn (ghi âm, biên bản họp, Todo list, phân tích AI, v.v.) |
| | OFX-014 | Chỉnh sửa chi tiết lượt đến thăm | Người dùng | Thêm/sửa ghi chú. Biên bản/Todo/Phân tích do AI tạo có thể sửa thủ công. Có thể dùng mẫu AI khác để tạo lại biên bản. Cài đặt chia sẻ thông tin họp. |
| | OFX-015 | Tự động tạo/Xác nhận email cảm ơn | Người dùng | Tự động tạo bản thảo email cảm ơn sau họp (áp dụng mẫu AI và chữ ký cá nhân) và cho phép xác nhận lại. |
| Cài đặt cá nhân người dùng | OFX-016 | Màn hình chính cài đặt cá nhân | Người dùng | Các mục: Đổi ID/Mật khẩu, Liên kết lịch, Bảo mật quyền riêng tư, Liên kết công cụ ngoài, Cài đặt chữ ký. |
| | OFX-017 | Cài đặt thay đổi ID/Mật khẩu | Người dùng | Có thể thay đổi ID/mật khẩu của người dùng. |
| | OFX-018 | Cài đặt liên kết lịch | Người dùng | Liên kết Google Calendar hoặc Outlook Calendar. |
| | OFX-019 | Cài đặt quyền riêng tư và bảo mật | Người dùng | Cài đặt phạm vi công khai mặc định của biên bản họp và phân tách phạm vi xem giữa ghi chú nội bộ và dùng để chia sẻ với khách hàng. |
| | OFX-020 | Cài đặt chi tiết đặt chỗ | Người dùng | Cài đặt thứ, giờ, ngày có thể đặt chỗ; cài đặt các khung giờ tạm thời không thể đặt chỗ. |
| | OFX-021 | Cài đặt liên kết công cụ bên ngoài | Người dùng | Màn hình cài đặt liên kết Slack/Teams, v.v. |
| | OFX-022 | Liên kết Google Drive | Người dùng | Sử dụng OAuth 2.0 để lấy và lưu Access Token (chế độ Read-only). |
| **Quản trị viên doanh nghiệp** | | | | |
| Cài đặt quản trị | ADMX-001 | Danh sách menu quản trị | Quản trị viên | Chỉ hiển thị cho người dùng đăng nhập bằng tài khoản quản trị. |
| Bảng điều khiển | ADMX-002 | Bảng điều khiển quản trị viên | Quản trị viên | Lịch trình trong ngày, Trạng thái phòng họp, Thời gian AI cá nhân, Thời gian AI còn lại toàn công ty, Menu quản trị. |
| Quản lý người dùng | ADMX-003 | Danh sách người dùng | Quản trị viên | Danh sách người dùng: Tên, ID, Email, Bộ phận. Nút: Đăng ký mới, Import CSV, Mẫu chuyên dụng. Hiện nút "Yêu cầu thêm hạn ngạch" nếu hết giới hạn. |
| | ADMX-004 | Đăng ký người dùng mới | Quản trị viên | Nhập [Tên] [ID] [PASS] [Email] [Bộ phận (ADMX-010)]. |
| | ADMX-005 | Xác nhận đăng ký mới | Quản trị viên | Xác nhận đăng ký người dùng mới. Sau khi đăng ký, gửi ID & PASS đến email. |
| | ADMX-006 | Chi tiết/Chỉnh sửa/Xóa người dùng | Quản trị viên | Xác nhận/chỉnh sửa thông tin người dùng. Hiển thị modal xác nhận khi cập nhật hoặc xóa. |
| Cài đặt phòng họp | ADMX-007 | Danh sách phòng họp | Quản trị viên | Các nút: Cài đặt doanh nghiệp, Đăng ký phòng họp, Chi tiết phòng, Cài đặt máy tính bảng lễ tân. Hiển thị tên phòng, tầng, thiết bị. |
| | ADMX-008 | Đăng ký phòng họp mới | Quản trị viên | Nhập tên phòng, tầng, thiết bị (dropdown), sức chứa, ảnh hướng dẫn. Chọn Single/Multi mode. Tự động tạo mã QR liên kết thiết bị. |
| | ADMX-009 | Chi tiết phòng họp (Sửa/Xóa) | Quản trị viên | Chỉnh sửa tên phòng, tầng, thiết bị, sức chứa, ảnh bản đồ. Hiển thị mã QR hướng dẫn và QR liên kết thiết bị (có thể tải xuống). |
| Cài đặt Master | ADMX-010 | Danh sách Master Data | Quản trị viên | Danh sách nhà thầu, bộ phận, nội dung công việc, tầng, thiết bị phòng họp. Có thể sửa/xóa trực tiếp trên bảng. |
| Màn hình chờ lễ tân | ADMX-011 | Logo doanh nghiệp/Hình nền | Quản trị viên | Tải lên và thay đổi logo công ty cũng như hình nền màn hình chờ. |
| | ADMX-012 | Cài đặt trình bảo vệ màn hình | Quản trị viên | Tải lên slide ảnh hoặc video và cài đặt thời gian phát lặp lại. |
| Cài đặt máy tính bảng | ADMX-013 | Danh sách máy tính bảng lễ tân | Quản trị viên | Hiển thị danh sách toàn bộ các máy tính bảng lễ tân đã đăng ký. |
| | ADMX-014 | Đăng ký máy tính bảng lễ tân mới | Quản trị viên | Nhập ID & PASS máy tính bảng, chọn nhà thầu, bộ phận, nội dung công việc, cài đặt thông báo. |
| | ADMX-015 | Chi tiết máy tính bảng lễ tân | Quản trị viên | Hiển thị thông tin máy tính bảng (ID, PASS, bộ phận, thông báo). Có nút cập nhật/xóa kèm modal xác nhận. |
| Liên quan đến hóa đơn | ADMX-016 | Menu hóa đơn | Quản trị viên | Lựa chọn giữa Thông tin doanh nghiệp/Thanh toán và Danh sách hóa đơn. |
| | ADMX-017 | Thông tin doanh nghiệp/Thanh toán | Quản trị viên | Hiển thị thông tin doanh nghiệp, gói dịch vụ hiện tại, hạn ngạch sử dụng và các chiết khấu đã áp dụng. |
| | ADMX-018 | Đăng ký/Cập nhật thông tin doanh nghiệp | Quản trị viên | Cập nhật thông tin công ty, cài đặt giới hạn sử dụng AI (không giới hạn/có giới hạn) và thông báo cảnh báo cho quản trị viên. |
| | ADMX-019 | Đăng ký/Cập nhật thông tin thanh toán | Quản trị viên | Đăng ký hoặc chỉnh sửa phương thức thanh toán (thẻ tín dụng hoặc thông tin nhận hóa đơn). |
| | ADMX-020 | Danh sách hóa đơn | Quản trị viên | Hiển thị danh sách toàn bộ hóa đơn của tháng hiện tại và các tháng trước đó. |
| | ADMX-021 | Chi tiết hóa đơn | Quản trị viên | Xem chi tiết nội dung thanh toán của từng hóa đơn theo tháng. |
| | ADMX-022 | Thay đổi gói dịch vụ/Thanh toán | Quản trị viên | Chọn gói dịch vụ mới, nhập mã khuyến mãi và thực hiện liên kết thanh toán. |
| Lịch sử khách đến | ADMX-023 | Quản lý lịch sử khách đến | Quản trị viên | Tìm kiếm khách theo ngày/tháng/năm. Hiển thị chi tiết bằng modal. Hỗ trợ xuất dữ liệu ra file CSV. |
| Quản lý sử dụng AI | ADMX-024 | Quản lý thời gian tóm tắt AI | Quản trị viên | Thống kê tình trạng dùng AI của toàn công ty, thời gian còn lại, hạn ngạch trả trước và trả sau. |
| | ADMX-025 | Mua thêm thời gian AI | Quản trị viên | Mua thêm thời gian tóm tắt AI trả trước. Xác nhận thời gian, số tiền và ngày áp dụng. |
| | ADMX-026 | Xác nhận mua thêm thời gian AI | Quản trị viên | Xác nhận nội dung mua để thực hiện liên kết với hệ thống thanh toán. |
| | ADMX-027 | Cài đặt giới hạn sử dụng AI | Quản trị viên | Cài đặt hành động khi hết hạn ngạch AI (tự động trả sau hoặc ngừng dùng). Bật/tắt bộ giới hạn. |
| | ADMX-028 | Cài đặt cảnh báo sử dụng AI | Quản trị viên | Thiết lập quy tắc thông báo cảnh báo lượng dùng AI (điều kiện, nơi nhận, thời điểm). |
| | ADMX-029 | Chi tiết sử dụng/Hóa đơn AI | Quản trị viên | Hiển thị chi tiết dùng AI (miễn phí, trả trước, trả sau) và dự kiến mức phí cuối tháng. |
| Quản lý mẫu AI | ADMX-030 | Danh sách mẫu AI | Quản trị viên | Danh sách các mẫu AI cho biên bản họp và email đang có trong hệ thống. |
| | ADMX-031 | Đăng ký/Chỉnh sửa mẫu AI | Quản trị viên | Thiết lập prompt, định dạng và điều kiện áp dụng mặc định cho các mẫu AI. |
| **Lịch hẹn & Khách thăm** | | | | |
| Đăng ký đặt lịch | GRES-001 | Màn hình chọn lịch hẹn | Khách | Chọn ngày giờ họp (liên kết với lịch trống của phòng và người tham gia), chọn múi giờ. |
| | GRES-002 | Nhập thông tin khách | Khách | Nhập tên công ty, họ tên, liên lạc, hình thức họp (trực tiếp/online), số người. |
| | GRES-003 | Xác nhận nội dung đăng ký | Khách | Kiểm tra lại toàn bộ thông tin đã nhập trước khi hoàn tất đăng ký. |
| | GRES-004 | Đăng ký hoàn tất | Khách | Tự động ghi vào lịch người dùng. Nếu họp trực tiếp, tự động đặt phòng, tạo mã QR và gửi email. |
| **Máy tính bảng lễ tân** | | | | |
| Đăng nhập | UKET-001 | Đăng nhập máy tính bảng | Quản trị viên | Đăng nhập để xác định doanh nghiệp quản lý thiết bị (1 lần/tháng). |
| Màn hình chờ | UKET-002 | Trình bảo vệ màn hình | Khách | Hiển thị nội dung quảng bá/thông tin doanh nghiệp. Chạm để bắt đầu. |
| Màn hình chính | UKET-003 | Chọn hình thức tiếp đón | Khách | Lựa chọn: Dùng mã QR, Không hẹn trước hoặc Tiếp dành cho nhà thầu. |
| Đọc mã QR | UKET-004 | Đọc mã QR đặt chỗ | Khách | Sử dụng camera máy tính bảng để quét mã QR đã nhận từ email. |
| Nhập mã đặt chỗ | UKET-005 | Nhập mã đặt chỗ | Khách | Nhập mã số đặt chỗ thủ công từ email xác nhận. |
| Lễ tân không hẹn | UKET-006 | Nhập thông tin khách không hẹn | Khách | Nhập tên công ty, họ tên, bộ phận muốn gặp và nội dung công việc. |
| Lễ tân nhà thầu | UKET-007 | Chọn nhà thầu | Khách | Chọn các đơn vị giao hàng/nhà thầu thường xuyên (Yamato, Sagawa, v.v.). |
| Màn hình thông báo | UKET-008 | Hiển thị tình trạng thông báo | Khách | Trạng thái "Đang chờ nhân viên phản hồi" sau khi gửi thông báo. |
| | UKET-009 | Màn hình cuộc gọi | Khách | Kết nối cuộc gọi với người phụ trách (Khách: thoại, Nhân viên: video). |
| | UKET-010 | Bản đồ hướng dẫn và mã QR | Khách | Hiển thị bản đồ phòng họp và QR để khách xem trên điện thoại. |
| | UKET-011 | Thông báo hoàn tất | Khách | Màn hình kết thúc, tự động quay lại trang đầu sau 1 phút. |
| **Quản lý ra vào phòng họp** | | | | |
| Cài đặt | ENTR-001 | Liên kết thiết bị và phòng họp | Người dùng | Quét QR phòng họp để liên kết. Chế độ Multi cho phép chọn vị trí. |
| Xác nhận đặt phòng | ENTR-002 | Xác nhận tình trạng đặt chỗ | Người dùng, Khách | Hiển thị thời gian, tên phòng, thông tin họp và nút "Vào phòng". |
| Vào phòng ngay | ENTR-003 | Đăng ký thông tin cuộc họp | Người dùng | Đặt nội dung họp tức thì, chọn người tham gia và thời gian dùng. |
| Trước khi vào phòng | ENTR-004 | Danh sách tham gia (đa thiết bị) | Người dùng | Chọn tên mình từ danh sách tham gia trước khi chính thức vào. |
| | ENTR-005 | Thiết bị chủ trì | Người dùng | Màn hình thiết bị mẹ hiển thị tên chủ trì với UI nổi bật. |
| | ENTR-006 | Điều chỉnh vị trí ngồi cuối cùng | Người dùng | Chủ trì kéo-thả icon người tham gia để điều chỉnh vị trí trên các thiết bị. |
| | ENTR-007 | Thiết bị con | Người dùng, Khách | Hiển thị vị trí ngồi định sẵn. Nhấn "Tham gia" để xác nhận có mặt. |
| Sử dụng phòng họp | ENTR-008 | Vào phòng họp | Người dùng, Khách | Chủ trì chọn chế độ ghi âm. Nếu có, popup xác nhận hiện trên mọi máy. |
| | ENTR-009 | Màn hình có ghi âm | Người dùng, Khách | Hiển thị text ghi âm trực tiếp, reaction, ghim nội dung, mirror tài liệu. |
| | ENTR-010 | Màn hình không ghi âm | Người dùng, Khách | Các chức năng tương tác (tin nhắn, reaction...) nhưng không có ghi âm. |
| | ENTR-011 | Thoát phòng hoàn tất | Người dùng, Khách | Màn hình xác nhận đã rời phòng họp. Quay về trạng thái chờ. |
| **Quản trị viên TNG** | | | | |
| Quản lý hợp đồng | ADM-001 | Danh sách doanh nghiệp ký kết | Quản trị viên TNG | Thống kê ALB: Gói, trạng thái hợp đồng, hạn ngạch AI, phí. |
| | ADM-002 | Cập nhật doanh nghiệp ký kết | Quản trị viên TNG | Cập nhật thông tin công ty, hạn ngạch miễn phí, đơn giá trả sau. |
| | ADM-003 | Xác nhận cập nhật | Quản trị viên TNG | Xác nhận lại các thay đổi sau khi cập nhật doanh nghiệp. |
| | ADM-004 | Danh sách hóa đơn (TNG) | Quản trị viên TNG | Danh sách tổng hợp hóa đơn của toàn bộ các doanh nghiệp ký kết. |
| | ADM-005 | Chi tiết hóa đơn (TNG) | Quản trị viên TNG | Chi tiết hạch toán thanh toán của đối tác. |
| Quản lý gói | ADM-006 | Quản lý Master gói dịch vụ | Quản trị viên TNG | Định nghĩa các tính năng và giới hạn của các gói dịch vụ. |
| | ADM-007 | Thay đổi phí gói cơ bản | Quản trị viên TNG | Thay đổi giá/quyền hạn gói cơ bản, áp dụng toàn hệ thống. |
| Quản lý khuyến mãi | ADM-008 | Quản lý mã khuyến mãi | Quản trị viên TNG | Tạo và quản lý mã giảm giá (tỷ lệ %, thời hạn) cho khách hàng mới. |
| Quản lý thiết bị | ADM-009 | Quản lý Master thiết bị | Quản trị viên TNG | Quản lý đơn giá thuê/máy tính bảng, mic. Quy tắc áp dụng giá. |
| Quản lý sử dụng AI | ADM-010 | Thống kê/Phân tích sử dụng AI | Quản trị viên TNG | Thống kê lượng dùng AI toàn hệ thống, danh sách vượt trả sau. |
| | ADM-011 | Chính sách giới hạn AI toàn cục | Quản trị viên TNG | Thiết lập quy tắc/hành động khi hết hạn ngạch AI toàn hệ thống. |
| Phí sử dụng AI | ADM-012 | Quản lý thanh toán vượt mức AI | Quản trị viên TNG | Tổng hợp và phê duyệt thanh toán phần AI trả sau hàng tháng. |
| **Hệ thống & Nhật ký** | | | | |
| Lỗi | ERR-001 | 403 Forbidden | Nhiều vai trò | Truy cập vào trang không có quyền hạn. |
| | ERR-002 | 404 Not Found | Nhiều vai trò | Truy cập vào đường dẫn không tồn tại. |
| | ERR-003 | 500 Internal Server Error | Nhiều vai trò | Lỗi hệ thống phát sinh từ máy chủ. |
| Bảo trì | ERR-004 | Bảo trì | Nhiều vai trò | Màn hình hiển thị khi hệ thống đang bảo trì định kỳ. |
| Nhật ký | LOG-001 | Nhật ký truy cập | Quản trị viên TNG | Tra cứu lịch sử đăng nhập/truy cập (IP, thiết bị). Xuất CSV. |
| | LOG-002 | Nhật ký thao tác | Quản trị viên, TNG | Theo dõi lịch sử thay đổi dữ liệu (Đặt chỗ/Sửa/Xóa). Xuất CSV. |
| | LOG-003 | Cài đặt giám sát nhật ký | Quản trị viên TNG | Cảnh báo khi phát hiện thao tác bất thường (xóa hàng loạt...). |
