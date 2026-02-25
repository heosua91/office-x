# Danh sách màn hình (Screen List)

| Phân loại | ID Màn hình | Tên Màn hình | Vai trò | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| **Đăng kí mới** | | | | |
| Điều khoản | REG-001 | Kiểm tra điều khoản sử dụng | Người dùng mới | Nhập vào "Đồng ý" để tiến hành đăng ký |
| Xác thực email | REG-002 | Xác thực email | Người dùng mới | Nhập địa chỉ email, đồng ý với Điều khoản sử dụng và Chính sách bảo mật<br>Gửi mã xác nhận. |
| | REG-003 | Email đã được gửi thành công | Người dùng mới | Hiển thị màn hình thông báo gửi email thành công<br>Nhập vào liên kết URL để chuyển đến màn hình nhập mã xác nhận |
| | REG-004 | Nhập mã xác nhận | Người dùng mới | Nhập mã xác nhận trong email đã nhận để xác thực danh tính |
| Thông tin công ty | REG-005 | Nhập thông tin công ty | Người dùng mới | Nhập Tên công ty, Địa chỉ, Tên người phụ trách, Số điện thoại, Email, Số lượng người tham gia, Đăng ký người tham gia |
| Thông tin công ty | REG-006 | Xác nhận thông tin công ty | Người dùng mới | Kiểm tra thông tin doanh nghiệp đã nhập, nếu không có vấn đề gì thì chuyển sang bước tiếp theo |
| Gói dịch vụ | REG-007 | Chọn gói dịch vụ | Người dùng mới | Chọn gói dịch vụ (có so sánh tính năng) |
| Thanh toán | REG-008 | Đăng ký thông tin thanh toán | Người dùng mới | Đăng ký phương thức thanh toán (Thông tin thẻ tín dụng, Thông tin xuất hóa đơn) |
| Quản lý user và đăng ký | REG-009 | Đăng ký hoàn tất | Người dùng mới | Hiển thị thông báo hoàn tất. Tự động gửi email chứa PDF hướng dẫn sử dụng và URL đăng nhập |
| **Authen** | | | | |
| Đăng nhập | AUTH-001 | Đăng nhập | Người dùng/<br>Quản trị viên | Nhập ID quản trị viên và mật khẩu hoặc ID người dùng và mật khẩu của bạn. |
| Đăng nhập dành riêng cho TNG | AUTH-002 | Đăng nhập | Quản trị viên TNG | Tài khoản quản lý TNG |
| Đặt lại mật khẩu | AUTH-003 | Đặt lại mật khẩu | Người dùng/<br>Quản trị viên | Nhập địa chỉ email của bạn và nhấn nút đặt lại để gửi mật khẩu đã đặt lại đến địa chỉ email của bạn. |
| | AUTH-004 | Lệnh đặt lại đã được gửi thành công | Người dùng/<br>Quản trị viên | Hiển thị thông báo khởi tạo thành công |
| | AUTH-005 | Màn hình đặt lại mật khẩu | Người dùng/<br>Quản trị viên | Nhập mật khẩu mới |
| | AUTH-006 | Đăng ký đặt lại mật khẩu đã hoàn tất | Người dùng/<br>Quản trị viên | Hiển thị thông báo rằng mật khẩu mới đã được thiết lập. |
| **Tính năng của user bình thường** | | | | |
| Dashboard | OFX-001 | Dashboard cá nhân | Người dùng | Lịch trình hôm nay<br>Tình trạng sử dụng phòng họp<br>Tóm tắt thời gian sử dụng AI (cá nhân) |
| Quản lý cuộc họp khách hàng | OFX-002 | Danh sách các URL đã đăng ký để đặt lịch hẹn | Người dùng | Hiển thị danh sách các URL điều chỉnh lịch trình đã đăng ký trước đó [Tên] [Hiển thị người dùng đã đăng ký] |
| | OFX-003 | Điều chỉnh lịch đặt chỗ và đăng ký | Người dùng | Tự động hóa cài đặt liên kết tài nguyên, lựa chọn thành viên tham gia và đặt phòng hội nghị. |
| | OFX-004 | Hiển thị URL | Người dùng | Hiển thị [Tên] [Người dùng đã đăng ký] [Yêu cầu phòng họp], hiển thị URL đã tạo |
| | OFX-005 | Danh sách trạng thái sử dụng phòng hội nghị | Người dùng | Xem danh sách trạng thái sử dụng phòng họp. |
| | OFX-006 | Danh sách lịch họp | Người dùng | Xem danh sách các cuộc họp đã lên lịch (bao gồm cả các cuộc họp chung) |
| Quản lý cuộc họp nội bộ công ty | OFX-007 | Danh sách lịch họp nội bộ | Người dùng | Danh sách các cuộc họp nội bộ đã được lên lịch và chia sẻ trước đó. |
| | OFX-008 | Đặt phòng họp mới (sử dụng nội bộ) | Người dùng | Màn hình này cho phép bạn liên kết lịch cá nhân của mình với lịch đặt phòng hội nghị, kiểm tra và chọn các khung giờ có sẵn cho cả người tham dự và phòng hội nghị sau đó tạo lịch họp mới |
| | OFX-009 | Xác nhận đăng ký mới | Người dùng | Hiển thị nội dung đã nhập ở trên |
| | OFX-010 | Chi tiết đặt phòng hội nghị | Người dùng | Màn hình chi tiết đặt phòng họp.<br>Bạn có thể chỉnh sửa hoặc xóa thông tin.<br>Bạn có thể thiết lập quyền hiển thị thông tin hội nghị (cấp quyền xem và chỉnh sửa cho tất cả mọi người trong phòng ban hoặc người dùng cụ thể).<br>Khi chỉnh sửa hoặc xóa, một cửa sổ xác nhận sẽ hiện ra, cho phép bạn nhấn tiếp tục hoặc hủy bỏ.<br>Nếu việc xóa thành công, bạn sẽ quay lại màn hình danh sách. |
| Quản lý công ty khách hàng | OFX-011 | Danh sách các công ty khách hàng | Người dùng | Danh sách khách hàng hiện đang đăng ký.<br>Tên công ty, địa chỉ, số điện thoại, người liên hệ, số lần truy cập, v.v. được hiển thị trong danh sách.<br>Tìm kiếm và thu hẹp kết quả. |
| | OFX-012 | Thông tin chi tiết công ty khách hàng | Người dùng | Hiển thị tên công ty, địa chỉ, số điện thoại, người liên hệ và số lần ghé thăm.<br>Hiển thị lịch sử ghé thăm, nhật ký vào/ra và biên bản cuộc họp theo thứ tự thời gian.<br>Cũng hiển thị danh sách việc cần làm gần đây nhất, bản ghi âm, biên bản cuộc họp và dữ liệu phân tích đàm phán bằng AI. |
| | OFX-013 | Chỉnh sửa thông tin chi tiết khách hàng | Người dùng | Màn hình nơi bạn có thể chỉnh sửa thông tin như tên công ty, địa chỉ, số điện thoại, người liên hệ và số lượng khách đến thăm. |
| | OFX-014 | Thông tin chi tiết về chuyến thăm dành cho các công ty khách hàng | Người dùng | Xem thông tin chi tiết về các chuyến thăm đã chọn, bao gồm bản ghi chép, biên bản cuộc họp, danh sách việc cần làm và phân tích đàm phán do AI thực hiện |
| | OFX-015 | Chỉnh sửa chi tiết các chuyến thăm của các công ty khách hàng | Người dùng | Màn hình cho phép bạn thêm và chỉnh sửa ghi chú.<br>Màn hình cho phép bạn chỉnh sửa thủ công biên bản cuộc họp do AI tạo ra, danh sách việc cần làm và phân tích đàm phán do AI thực hiện.<br>Thiết lập cài đặt chia sẻ thông tin cuộc họp (cấp quyền xem và chỉnh sửa cho tất cả mọi người trong phòng ban hoặc người dùng được chỉ định). |
| | OFX-016 | Tự động tạo và xác nhận email cảm ơn sau đàm phán kinh doanh. | Người dùng | Màn hình tự động tạo và xác nhận email cảm ơn nháp sau các cuộc đàm phán kinh doanh. |
| Tùy chọn của người dùng | OFX-017 | Cài đặt cá nhân Màn hình trên cùng | Người dùng | [Thay đổi ID/Mật khẩu] [Liên kết Lịch] [Cài đặt Bảo mật Quyền riêng tư] [Cài đặt Liên kết Công cụ Bên ngoài] |
| | OFX-018 | Thay đổi cài đặt ID người dùng/Mật khẩu | Người dùng | Bạn có thể thay đổi tên người dùng/mật khẩu. |
| | OFX-019 | Cài đặt liên kết lịch | Người dùng | Lịch Google hoặc Lịch Outlook |
| | OFX-020 | Cài đặt quyền riêng tư và bảo mật | Người dùng | Các thiết lập bạn có thể cấu hình:<br>- Chế độ hiển thị mặc định của biên bản cuộc họp (chỉ bạn/người tham dự)<br>- Phân tách chế độ hiển thị cho "Ghi chú nội bộ" và "Chia sẻ với khách hàng" |
| | OFX-021 | Cài đặt chi tiết đặt chỗ | Người dùng | Các ngày trong tuần có sẵn, thời gian có sẵn, ngày có thể đặt chỗ và các ngày/giờ tạm thời không có sẵn. |
| | OFX-022 | Cài đặt tích hợp công cụ bên ngoài | Người dùng | Màn hình cài đặt tích hợp Slack/Jira, v.v. |
| **Quản trị viên công ty** | | | | |
| Setting dùng cho quản trị viên | ADMX-001 | Danh sách menu quản trị viên | Quản trị viên | Chỉ những người dùng đăng nhập bằng tài khoản quản trị viên mới được hiển thị. |
| Dashboard | ADMX-002 | Dashboard quản trị viên | Quản trị viên | Lịch trình hôm nay<br>Sử dụng phòng họp<br>Thời gian sử dụng AI tóm tắt (Cá nhân)<br>Thời gian sử dụng AI tóm tắt còn lại (Tổng thể)<br>Hiển thị menu quản trị |
| Quản lý người dùng | ADMX-003 | Danh sách người dùng | Quản trị viên | Danh sách người dùng đã đăng ký hiện tại: tên, ID, địa chỉ email, phòng ban.<br>Danh sách nút: "Đăng ký mới", "Nhập dữ liệu CSV hàng loạt", "Mẫu đặc biệt" |
| | ADMX-004 | Đăng ký người dùng mới | Quản trị viên | Nhập tên, ID, mật khẩu, địa chỉ email và phòng ban của bạn (ADMX-010). |
| | ADMX-005 | Xác nhận đăng ký mới | Quản trị viên | Xác nhận đăng ký người dùng mới. Sau khi đăng ký, ID và mật khẩu sẽ được gửi đến địa chỉ email của bạn. |
| | ADMX-006 | Thông tin người dùng, chỉnh sửa và xóa | Quản trị viên | Bạn có thể kiểm tra và chỉnh sửa thông tin như [Tên], [ID], [Mật khẩu], [Địa chỉ email] và [Phòng ban (ADMX-010)].<br>Khi cập nhật hoặc xóa, một cửa sổ xác nhận cập nhật/xóa sẽ hiển thị, cho phép bạn tiếp tục hoặc hủy bỏ. |
| Cài đặt phòng họp | ADMX-007 | Danh sách các phòng họp | Quản trị viên | Nhấn nút để truy cập cài đặt công ty, đăng ký phòng họp mới, chi tiết phòng họp và cài đặt máy tính bảng lễ tân.<br>Hiển thị tên phòng họp, tầng, thiết bị, v.v. do công ty định nghĩa. |
| | ADMX-008 | Đăng ký phòng họp mới | Quản trị viên | Chọn [Tên tầng] trong ADMX-010 từ menu thả xuống, chọn nhiều [Thiết bị phòng họp] từ menu thả xuống, nhập tên phòng họp và sức chứa, sau đó tải lên thông tin chi tiết về phòng họp và hình ảnh hướng dẫn. |
| | ADMX-009 | Thông tin chi tiết phòng họp (chỉnh sửa/xóa) | Quản trị viên | Màn hình này cho phép bạn chọn [Tên tầng] trong ADMX-010 từ menu thả xuống, chọn nhiều [Thiết bị phòng họp] từ menu thả xuống, chỉnh sửa hoặc xóa tên và sức chứa phòng họp, và thay thế nội dung phòng họp và hình ảnh hướng dẫn.<br>URL của hình ảnh bản đồ đến phòng họp được hiển thị dưới dạng mã QR (có thể tải xuống). |
| Cài đặt chính | ADMX-010 | Tên công ty/tên phòng ban Mục đích, tầng và danh sách thiết bị phòng họp | Quản trị viên | Màn hình máy tính bảng tại quầy lễ tân hiển thị danh sách tên nhà cung cấp đã đăng ký, tên phòng ban, mục đích, tầng và thiết bị phòng họp.<br>Thêm, chỉnh sửa và xóa trực tiếp trong danh sách (dạng bảng). |
| Màn hình chờ lễ tân | ADMX-011 | Logo công ty và hình nền | Quản trị viên | Tải lên và chỉnh sửa logo công ty và hình nền. |
| | ADMX-012 | Cài đặt trình bảo vệ màn hình | Quản trị viên | Tải lên các slide hình ảnh/tệp video và thiết lập khoảng thời gian phát lại. |
| Cài đặt chi tiết máy tính bảng lễ tân | ADMX-014 | Danh sách máy tính bảng lễ tân | Quản trị viên | Hiển thị danh sách các máy tính bảng lễ tân đã đăng ký |
| | ADMX-015 | Máy tính bảng lễ tân Đăng ký mới | Quản trị viên | Bạn có thể chọn ID và mật khẩu cho máy tính bảng lễ tân, tên công ty, phòng ban, mục đích và thiết bị, cũng như đăng ký cài đặt thông báo. |
| | ADMX-016 | Thông tin chi tiết về máy tính bảng lễ tân | Quản trị viên | Màn hình này hiển thị ID và mật khẩu của máy tính bảng lễ tân đã đăng ký, cũng như tên công ty, phòng ban, mục đích, thiết bị và thông báo.<br>Các nút cập nhật và xóa đã được cài đặt, và khi cập nhật hoặc xóa, một cửa sổ xác nhận sẽ hiển thị, cho phép bạn tiếp tục hoặc hủy bỏ. |
| | ADMX-017 | Menu thanh toán | Quản trị viên | Chọn thông tin công ty và thanh toán cũng như danh sách hóa đơn |
| | ADMX-018 | Thông tin công ty và thanh toán | Quản trị viên | Hiển thị thông tin công ty đã đăng ký hiện tại và thông tin thanh toán. |
| Thanh toán | ADMX-019 | Đăng ký/cập nhật thông tin công ty | Quản trị viên | Bạn có thể đăng ký và chỉnh sửa tên công ty, địa chỉ, tên người liên hệ, số điện thoại, địa chỉ email, v.v.<br>Thông tin đã đăng ký và chỉnh sửa sẽ được hiển thị trong cửa sổ xác nhận, và bạn có thể tiếp tục hoặc hủy bỏ. |
| | ADMX-020 | Đăng ký/cập nhật thông tin thanh toán | Quản trị viên | Các phương thức thanh toán (thẻ tín dụng, địa chỉ thanh toán) có thể được đăng ký, chỉnh sửa và xóa. |
| | ADMX-021 | Danh sách hóa đơn | Quản trị viên | Xem danh sách các hóa đơn hiện tại và trước đây. |
| | ADMX-022 | Chi tiết hóa đơn | Quản trị viên | Nhấp vào hóa đơn của từng tháng để xem chi tiết. |
| **Sắp xếp lịch & Đặt hẹn khách** | | | | |
| Đăng ký đặt chỗ | GRES-001 | Màn hình chọn ngày | Khách thăm | Hiển thị logo công ty, lịch thông minh hiển thị ngày giờ của ứng viên (liên kết người tham gia và tình trạng phòng họp với điều kiện AND), lựa chọn múi giờ. |
| | GRES-002 | Màn hình nhập thông tin khách | Khách thăm | Vui lòng nhập tên công ty, tên, địa chỉ email, số điện thoại, hình thức (trực tiếp hoặc trực tuyến) và xác nhận. |
| | GRES-003 | Xác nhận thông tin đăng ký | Khách thăm | Hãy kiểm tra lại xem thông tin bạn đã nhập có chính xác không. |
| | GRES-004 | Đăng ký hoàn tất | Khách thăm | Sau khi đăng ký hoàn tất, cuộc họp sẽ tự động được ghi lại trong lịch của người dùng. Đối với các cuộc họp trực tiếp, phòng họp sẽ được tự động đặt trước theo số lượng người tham dự, và mã QR cùng mã đặt chỗ sẽ được tự động tạo và gửi qua email. |
| **Máy tính bảng lễ tân** | | | | |
| Đăng nhập | UKET-001 | Nhập ID và mật khẩu máy tính bảng của bạn. | Người dùng/<br>Quản trị viên | Vì lý do bảo mật của công ty, việc đăng nhập là bắt buộc, chỉ đăng nhập một lần mỗi tháng. |
| Màn hình chờ | UKET-002 | Màn hình chờ / Bảng tin điện tử | Khách thăm | Hiển thị các cài đặt đã thực hiện trong ADMX-011 và ADMX-012.<br>Chạm để bắt đầu. |
| Màn hình TOP | UKET-003 | Lựa chọn lễ tân | Khách thăm | Nhận mã QR, không cần đặt chỗ trước, chọn nhà cung cấp. |
| Đọc mã QR | UKET-004 | Quét mã QR đặt chỗ | Khách thăm | Quét mã QR đặt chỗ (mã QR do GRES-004 cấp) |
| Nhập mã đặt chỗ | UKET-005 | Nhập mã đặt chỗ | Khách thăm | Nhập mã đặt chỗ do GRES-004 cấp. |
| Tiếp nhận khách chưa đặt lịch trước | UKET-006 | Nhập thông tin khách truy cập | Khách thăm | Nhập thông tin khách đến thăm:<br>- Tên công ty<br>- Tên<br>- Chọn phòng ban<br>- Chọn mục đích<br>- Khác |
| Tiếp nhận dành cho hãng vận chuyển | UKET-007 | Chọn hãng vận chuyển | Khách thăm | Chọn một hãng vận chuyển (Yamato, Sagawa, Duskin, v.v.) và có thể thiết lập trước. |
| Màn hình thông báo | UKET-008 | Hiển thị trạng thái thông báo không có đặt chỗ | Khách thăm | Thông báo cho người phụ trách (qua công cụ đã liên kết), mở URL và hiển thị "Đang chờ phản hồi" |
| | UKET-009 | Màn hình cuộc gọi | Khách thăm | Nếu bạn muốn gọi điện thoại, màn hình này sẽ kết nối bạn với người phụ trách.<br>Khách truy cập chỉ có thể sử dụng cuộc gọi thoại, trong khi người đại diện của người dùng sẽ sử dụng cuộc gọi video. |
| | UKET-010 | Hiển thị bản đồ và mã QR | Khách thăm | Khi khách tham dự hoàn tất thủ tục đăng ký, bản đồ phòng hội nghị và mã QR sẽ được hiển thị đồng thời trên màn hình máy tính bảng. Khách có thể kiểm tra đường đi ngay tại chỗ, hoặc mang bản đồ theo điện thoại thông minh bằng cách quét mã QR. |
| | UKET-011 | Thông báo đã hoàn tất | Khách thăm | Trở lại đầu trang HOẶC Tự động trở lại màn hình đầu trang sau 1 phút không hoạt động |
| **Quản lý ra vào phòng họp** | | | | |
| Xác nhận đặt phòng hội nghị | ENTR-001 | Kiểm tra trạng thái đặt chỗ | Người dùng/<br>Khách thăm | Được liên kết với lịch, nó hiển thị trạng thái đặt phòng hội nghị. |
| | ENTR-002 | Nhập thông tin về tình trạng đặt chỗ | Người dùng/<br>Khách thăm | Sau khi nhấn nút "Vào phòng", tùy thuộc vào nút đó mà sẽ chuyển sang bước quét mã QR lễ tân hoặc xử lý vào phòng ngay lập tức. |
| | ENTR-003 | Đọc mã đặt chỗ | Khách thăm | Quét mã QR đặt chỗ do GRES-004 cấp. |
| | ENTR-004 | ID&Login | Người dùng | Office X ID&Password |
| | ENTR-005 | Complete | Người dùng | Login Complete |
| | ENTR-006 | Error | Người dùng | Error screen |
| | ENTR-007 | Bước vào phòng | Khách thăm/<br>Người dùng | Ô chọn để bật hoặc tắt chức năng ghi âm & Nút Enter |
| Sử dụng phòng hội nghị | ENTR-008 | Có chức năng ghi âm | Khách thăm/<br>Người dùng | Bắt đầu cuộc họp khi có tính năng ghi âm.<br>Thông báo bắt đầu ghi âm<br>Đăng ký người nói (đăng ký mới)<br>Hiển thị nội dung ghi âm<br>Hiển thị văn bản chép lời trực tiếp theo người nói (Real-time Transcript)<br>Thả biểu tượng cảm xúc (reaction) vào nội dung văn bản<br>Chức năng bình luận<br>Chức năng ghim (các mục đã ghim được hiển thị trên màn hình bản ghi trực tiếp)<br>Chức năng tin nhắn & Nhắc tên (@Mention)<br>Chức năng ghi chú<br>Đăng ký nhiệm vụ (tạo nhiệm vụ từ nội dung cuộc trò chuyện chỉ với một lần chạm)<br>Nút gia hạn (tăng dần 15 phút) *Tự động cập nhật vào lịch; thông báo lỗi nếu trùng với lần gia hạn tiếp theo<br>Hiển thị lỗi (nếu lịch đặt chỗ tiếp theo trùng với lịch đặt chỗ)<br>Nút kết thúc<br>Tự động xử lý rời phòng sau 5 phút quá giờ |
| | ENTR-009 | Không có chức năng ghi âm | Khách thăm/<br>Người dùng | Bắt đầu cuộc họp khi không có tính năng ghi âm.<br>Tạo mẫu (hội nghị, đàm phán, cuộc họp)<br>Chức năng ghi chú<br>Chức năng tương tác (Reaction)<br>Nút gia hạn (tăng dần 15 phút) *Tự động cập nhật trên lịch. Sẽ có thông báo lỗi nếu thời gian gia hạn tiếp theo trùng với thời gian đã lên lịch.<br>Nút kết thúc<br>Tự động xử lý rời phòng sau 5 phút quá giờ |
| | ENTR-010 | Hoàn tất rời phòng | Khách thăm/<br>Người dùng | Màn hình hoàn tất rời phòng được hiển thị. Tự động quay lại màn hình chính. |
| **Chuyên dùng cho quản trị viên TNG** | | | | |
| Quản lý hợp đồng | ADM-001 | Danh sách các công ty đã ký hợp đồng | Quản trị viên TNG | Xem danh sách các công ty đã ký hợp đồng (tên công ty, trạng thái hợp đồng, gói hợp đồng, ngày hết hạn hợp đồng, số lượng người dùng đã đăng ký còn lại, thời gian còn lại của tóm tắt bằng AI, trạng thái thanh toán) |
| | ADM-002 | Gia hạn hợp đồng công ty | Quản trị viên TNG | Cập nhật tên công ty, địa chỉ, tên người liên hệ, số điện thoại, địa chỉ email, phương thức thanh toán (tài khoản ngân hàng, thẻ tín dụng, địa chỉ thanh toán, ghi chú). |
| | ADM-003 | Kiểm tra cập nhật | Quản trị viên TNG | Nhập thời gian bạn muốn sử dụng phòng khi kiểm tra cập nhật. Nếu thời gian bạn muốn sử dụng phòng không trùng với thời gian đặt phòng trong tháng, hãy nhấp vào [Tiếp theo]. Nếu chúng trùng nhau, một thông báo lỗi sẽ xuất hiện và bạn sẽ không thể nhấp vào nút Tiếp theo. |
| | ADM-004 | Danh sách thanh toán | Quản trị viên TNG | Danh sách thanh toán của từng công ty |
| | ADM-005 | Chi tiết thanh toán | Quản trị viên TNG | Hiển thị chi tiết thanh toán cho từng công ty |
| **Khác** | | | | |
| Lỗi | ERR-001 | 403 Forbidden | Khách thăm/<br>Người dùng/<br>Quản trị viên/<br>Quản trị viên TNG | Hiển thị khi có truy cập trái phép. |
| | ERR-002 | 404 Not Found | Khách thăm/<br>Người dùng/<br>Quản trị viên/<br>Quản trị viên TNG | Hiển thị khi truy cập vào màn hình hoặc URL không tồn tại. |
| | ERR-003 | 500 Internal Server Error | Khách thăm/<br>Người dùng/<br>Quản trị viên/<br>Quản trị viên TNG | Cập nhật tên công ty, địa chỉ, tên người liên hệ, số điện thoại, địa chỉ email, phương thức thanh toán (tài khoản ngân hàng, thẻ tín dụng, địa chỉ thanh toán, ghi chú). |
| BẢO TRÌ | ERR-004 | BẢO TRÌ | Khách thăm/<br>Người dùng/<br>Quản trị viên | Hiển thị trong thời gian bảo trì |
| Log hệ thống | LOG-001 | Danh sách log truy cập, tìm kiếm log (lọc) và xuất kết quả. | Quản trị viên TNG | Bạn có thể kiểm tra lịch sử đăng nhập và truy cập màn hình của người dùng. Hiển thị ngày, giờ, địa chỉ IP, thiết bị, v.v.<br>Nhập ngày và ID người dùng để thu hẹp phạm vi tìm kiếm log liên quan. Giới hạn phạm vi tối đa là 90 ngày.<br>Xuất kết quả tìm kiếm ở định dạng CSV. Bao gồm ID người dùng, ngày, v.v. |
| | LOG-002 | Danh sách log thao tác, tìm kiếm nhật ký (lọc) và xuất kết quả. | Quản trị viên TNG | Hiển thị danh sách lịch sử hoạt động của hệ thống hoặc công ty, chẳng hạn như đặt chỗ, xóa và chỉnh sửa. Có thể tìm kiếm và lọc.<br>Nhập ngày, ID người dùng, loại thao tác, v.v. để lọc nhật ký liên quan. Giới hạn phạm vi tối đa là 90 ngày.<br>Kết quả tìm kiếm được xuất ra dưới dạng tập tin CSV. Bao gồm ID người dùng, ngày và giờ hoạt động, loại thao tác, ID mục tiêu, v.v. |
| | LOG-003 | Cài đặt thông báo giám sát log | Quản trị viên TNG | Thiết lập các điều kiện để phát hiện và thông báo các hoạt động bất thường (xóa hàng loạt dữ liệu trong thời gian ngắn, lỗi liên tiếp). Quản lý ngưỡng và địa chỉ nhận thông báo. |
