# ⚡ Danh sách chức năng (Function List)

---

### 📂 Đăng ký mới

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan chức năng | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Đăng ký mới | REG-001 | Xác nhận điều khoản sử dụng | F-001 | Xử lý đồng ý điều khoản | Hiển thị Điều khoản sử dụng và Chính sách bảo mật. Kiểm tra trạng thái ON/OFF của checkbox "Đồng ý".<br>・Đồng ý ON: Kích hoạt nút "Tiếp theo" → Chuyển sang REG-002<br>・Đồng ý OFF: Nút không khả dụng | - |
| Đăng ký mới | REG-002 | Xác thực Email | F-002 | Gửi mã xác thực | 【Input】 Địa chỉ Email<br>【Validation】<br>・Kiểm tra để trống, lỗi định dạng<br>・Kiểm tra email đã đăng ký (Tham chiếu DB)<br>【Phân nhánh】<br>・Thành công: Tạo mã xác thực 6 chữ số & Lưu DB, gửi Email → Chuyển sang REG-003<br>・Thất bại: Hiển thị thông báo lỗi | Mail Server |
| Đăng ký mới | REG-003 | Hoàn tất gửi Email | F-003 | Hiển thị gửi hoàn tất | 【Hiển thị】 Thông báo "Đã gửi email xác thực".<br>【Chuyển hướng】 Link trong email (Deep link) hoặc thủ công tới REG-004. | - |
| Đăng ký mới | REG-004 | Nhập mã xác nhận | F-004 | Xác thực chính chủ | 【Input】 Mã xác thực 6 chữ số.<br>【Xử lý】 Đối chiếu với mã lưu trong DB, kiểm tra thời hạn hiệu lực.<br>【Phân nhánh】<br>・Khớp: Bật cờ xác thực ON → Chuyển sang REG-005<br>・Không khớp/Hết hạn: Hiển thị lỗi | - |
| Đăng ký mới | REG-005 | Nhập thông tin doanh nghiệp | F-005 | Đăng ký thông tin doanh nghiệp | 【Input】 Thông tin tên công ty.<br>【Phân nhánh】<br>・Không lỗi: "Đến màn hình xác nhận" → Chuyển sang REG-006<br>・Có lỗi: Hiển thị cảnh báo | - |
| Đăng ký mới | REG-006 | Xác nhận nội dung thông tin doanh nghiệp | F-006 | Xác nhận nhập liệu | 【Hiển thị】 Hiển thị nội dung đã nhập ở chế độ Read-only.<br>【Action】 Nhấn "Sửa" để quay lại, hoặc "Tiếp theo" để sang REG-007. | - |
| Đăng ký mới | REG-007 | Chọn gói cước (Plan) | F-007 | Chọn Plan | 【Hiển thị】 Bảng so sánh chức năng các gói cước.<br>【Action】 Chọn plan và nhấn "Tiếp theo" → Chuyển sang REG-008 (Lưu giữ Plan ID). | - |
| Đăng ký mới | REG-008 | Đăng ký thông tin thanh toán | F-008 | Đăng ký thanh toán | 【Input】 Thông tin bên nhận thanh toán.<br>【Xử lý】 Liên kết và tự động đăng ký với API dịch vụ thanh toán (Paid, v.v.).<br>【Phân nhánh】<br>・Thành công: Cấp Customer ID → Chuyển sang REG-009<br>・Thất bại: Hiển thị lỗi liên kết thanh toán | Dịch vụ thanh toán |
| Đăng ký mới | REG-009 | Hoàn tất đăng ký | F-009 | Xử lý thông báo hoàn tất | 【Hiển thị】 Thông báo hoàn tất (Bao gồm trạng thái "Đang thẩm định tín dụng" của bên thanh toán).<br>【Xử lý】 Chạy ngầm việc gửi email đính quyển PDF hướng dẫn thao tác và URL Login.<br>【Chuyển hướng】 Nhấn "Đến trang Login" → Chuyển sang AUTH-001. | Mail Server |

### 📂 Xác thực (Authentication)

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan màn hình | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Sign In | AUTH-001 | Sign In | F-010 | Xác thực Login | 【Input】 ID/PASS.<br>【Xử lý】 Call API xác thực.<br>【Phân nhánh】 Thất bại hiển thị lỗi. | - |
| Sign In | AUTH-001 | Sign In | F-011 | Phân quyền | 【Xử lý】 Xác định Role của User.<br>【Phân nhánh】<br>・Quyền Admin → Chuyển hướng sang ADMX-002<br>・Quyền User → Chuyển hướng sang OFX-001 | - |
| Sign In | AUTH-002 | Sign In cho TNG | F-012 | TNG Login | 【Input】 ID/PASS quản trị TNG.<br>【Phân nhánh】 Thành công → Chuyển sang ADM-001. | - |
| Reset Password | AUTH-003 | Reset Password | F-013 | Yêu cầu Reset | 【Input】 Địa chỉ Email.<br>【Xử lý】 Sau khi xác nhận sự tồn tại trong DB, tạo Reset Token & gửi email chứa URL. | - |
| Reset Password | AUTH-004 | Hoàn tất gửi Reset | F-014 | Hiển thị gửi thành công | 【Hiển thị】 "Đã gửi email thiết lập lại mật khẩu". | - |
| Reset Password | AUTH-005 | Thiết lập lại Password | F-015 | Thiết lập mật khẩu mới | 【Input】 Mật khẩu mới (2 lần).<br>【Xử lý】 Kiểm tra định dạng (chữ & số, độ dài), sau đó cập nhật DB.<br>【Chuyển hướng】 Thành công → Chuyển sang AUTH-006. | - |
| Reset Password | AUTH-006 | Hoàn tất đăng ký lại | F-016 | Hiển thị hoàn tất | 【Hiển thị】 Thông báo "Thay đổi hoàn tất".<br>【Action】 Nút "Đến màn hình Login". | - |

### 📂 Chức năng OfficeX cho User thông thường

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan màn hình | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Dashboard | OFX-001 | Dashboard cá nhân | F-017 | Widget hiển thị lịch trình | 【Lấy dữ liệu】 Lấy lịch trình hôm nay (Liên kết Calendar).<br>【Hiển thị】 Hiển thị dạng danh sách trong Widget.<br>【Chuyển hướng】 Click để sang trang chi tiết (OFX-004). | Calendar API |
| Dashboard | OFX-001 | Dashboard cá nhân | F-018 | Tình trạng phòng họp | 【Lấy dữ liệu】 Lấy tình trạng trống/đã đặt hiện tại của các phòng họp.<br>【Hiển thị】 Hiển thị trạng thái "Trống", "Đang sử dụng". | - |
| Dashboard | OFX-001 | Dashboard cá nhân | F-019 | Alert lượng dùng AI | 【Lấy dữ liệu】 Tổng hợp thời gian tóm tắt AI đã dùng trong tháng của cá nhân.<br>【Hiển thị】 Hiển thị dưới dạng biểu đồ/số liệu.<br>【Alert】 Nếu thời gian còn lại dưới mức quy định (vd: 10%), hiển thị icon cảnh báo. | - |
| Quản lý Meeting khách hàng | OFX-002 | Danh sách URL điều chỉnh đã đăng ký | F-020 | Hiển thị danh sách URL | 【Hiển thị】 Danh sách các URL điều chỉnh lịch đã tạo trước đây (Tên, User đăng ký).<br>【Action】 Chọn để xem chi tiết (OFX-004) | - |
| Quản lý Meeting khách hàng | OFX-003 | Đăng ký điều chỉnh | F-021 | Tạo Smart URL | 【Input】 Thành viên tham gia, tài nguyên phòng họp, thời lượng.<br>【Xử lý】 Trích xuất khung giờ trống của cả thành viên và phòng theo điều kiện AND để tạo URL.<br>【Thiết lập】 Liên kết tài nguyên, tự động hóa đảm bảo phòng họp, AI Template biên bản, Bật/tắt tự động tạo URL meeting online (chỉ bật được khi đã liên kết Calendar, chưa liên kết thì OFF cố định) và tin nhắn hướng dẫn. | - |
| Quản lý Meeting khách hàng | OFX-003 | Đăng ký điều chỉnh | F-022 | Thiết lập chỗ ngồi Multi-device | 【Điều kiện】 Khi chọn phòng họp hỗ trợ Multi-device mode.<br>【Xử lý】 Tự động phân bổ người tham gia vào chỗ ngồi (Có thể chỉnh tay bằng kéo thả). | - |
| Quản lý Meeting khách hàng | OFX-003 | Đăng ký điều chỉnh | F-023 | Upload/Chọn tài liệu | 【Thao tác】 Upload tài liệu (PDF/Image) chia sẻ trong meeting từ máy cục bộ, hoặc chọn từ Google Drive cá nhân. | Google Drive API |
| Quản lý Meeting khách hàng | OFX-004 | Chi tiết/Sửa điều chỉnh lịch Meeting, Hiển thị URL | F-024 | Hiển thị URL/Chi tiết | 【Hiển thị】 URL điều chỉnh đã tạo, mã QR, các điều kiện thiết lập (Thành viên/Phòng/Thời gian).<br>【Action】 Copy URL | - |
| Quản lý Meeting khách hàng | OFX-004 | Chi tiết/Sửa điều chỉnh lịch Meeting, Hiển thị URL | F-025 | Chỉnh sửa thiết lập | 【Input】 Thay đổi trực tiếp thông tin trong màn hình:<br>・Liên kết tài nguyên<br>・Chọn thành viên tham gia<br>・Tự động đảm bảo phòng họp<br>・Bật/tắt tự động tạo URL meeting online và tin nhắn hướng dẫn<br>・AI Template biên bản<br>【Xử lý】 Cập nhật và lưu tức thì. | - |
| Quản lý Meeting khách hàng | OFX-004 | Chi tiết/Sửa điều chỉnh lịch Meeting, Hiển thị URL | F-026 | Điều chỉnh chỗ ngồi | 【Điều kiện】 Nếu chọn phòng họp Multi-device mode.<br>【Thao tác】 Điều chỉnh vị trí chỗ ngồi của người tham gia (Kéo thả). | - |
| Quản lý Meeting khách hàng | OFX-004 | Chi tiết/Sửa điều chỉnh lịch Meeting, Hiển thị URL | F-027 | Quản lý tài liệu | 【Thao tác】 Xóa, upload thêm tài liệu chia sẻ trong meeting.<br>【Liên kết】 Ngoài upload từ máy cục bộ, có thể chọn thêm file từ Google Drive cá nhân. | Google Drive API |
| Quản lý Meeting khách hàng | OFX-004 | Chi tiết/Sửa điều chỉnh lịch Meeting, Hiển thị URL | F-028 | Vô hiệu hóa URL | 【Action】 Nút "Vô hiệu hóa".<br>【Xử lý】 Xóa URL (làm cho không thể truy cập được). | - |
| Quản lý Meeting khách hàng | OFX-005 | Danh sách tình trạng phòng họp | F-029 | Hiển thị Gantt Chart | 【Hiển thị】 Hiển thị trạng thái sử dụng của tất cả phòng họp theo Timeline. | Calendar API |
| Quản lý Meeting khách hàng | OFX-006 | Danh sách lịch Meeting dự kiến | F-030 | Danh sách dự kiến toàn công ty | 【Hiển thị】 Danh sách các meeting đã đặt (bao gồm cả meeting được chia sẻ).<br>【Kiểm soát】 Các lịch riêng tư sẽ được ẩn/mask. | - |
| Quản lý Meeting nội bộ | OFX-007 | Danh sách lịch Meeting nội bộ | F-031 | Danh sách dự kiến nội bộ | 【Hiển thị】 Danh sách các lịch trình có gắn flag "Nội bộ" hoặc meeting nội bộ được chia sẻ. | - |
| Quản lý Meeting nội bộ | OFX-008 | Đặt phòng họp mới (Nội bộ) | F-032 | Tìm kiếm đặt chỗ phức hợp | 【Xử lý】 Liên kết Calendar cá nhân và Calendar phòng họp, kiểm tra/chọn khung giờ cả thành viên và phòng đều trống để đặt meeting mới. Chọn đồng thời AI Template biên bản. | - |
| Quản lý Meeting nội bộ | OFX-008 | Đặt phòng họp mới (Nội bộ) | F-033 | Thiết lập chỗ ngồi Multi-device | 【Điều kiện】 Trường hợp phòng họp Multi-device mode.<br>【Xử lý】 Chỗ ngồi được tự động phân bổ trước. | - |
| Quản lý Meeting nội bộ | OFX-008 | Đặt phòng họp mới (Nội bộ) | F-034 | Quản lý tài liệu | 【Thao tác】 Thêm/xóa tài liệu chia sẻ trong meeting, hoặc chọn từ Google Drive cá nhân. | Google Drive API |
| Quản lý Meeting nội bộ | OFX-009 | Chi tiết đặt phòng họp | F-035 | Sửa/Xóa đặt chỗ | 【Hiển thị】 Chi tiết đặt chỗ.<br>【Sửa】 Chỉnh sửa thông tin (bao gồm cả AI Template).<br>【Xóa】 Nút Xóa → Modal xác nhận → Thực thi → Quay lại danh sách (OFX-007). | - |
| Quản lý Meeting nội bộ | OFX-009 | Chi tiết đặt phòng họp | F-036 | Thiết lập quyền Public | 【Input】 Thiết lập phạm vi quyền xem/sửa.<br>【Lựa chọn】 "Toàn bộ phòng ban", "Chỉ User chỉ định" | - |
| Quản lý Meeting nội bộ | OFX-009 | Chi tiết đặt phòng họp | F-037 | Điều chỉnh chỗ ngồi | 【Điều kiện】 Trường hợp phòng họp Multi-device mode.<br>【Thao tác】 Thực hiện điều chỉnh vị trí chỗ ngồi. | - |
| Quản lý Meeting nội bộ | OFX-009 | Chi tiết đặt phòng họp | F-038 | Quản lý tài liệu | 【Thao tác】 Thêm/xóa tài liệu chia sẻ trong meeting, hoặc chọn từ Google Drive cá nhân. | Google Drive API |
| Quản lý doanh nghiệp khách hàng | OFX-010 | Danh sách doanh nghiệp khách hàng | F-039 | Tìm kiếm khách hàng | 【Hiển thị】 Danh sách Tên công ty, địa chỉ, số điện thoại, người phụ trách, số lần đến thăm.<br>【Action】 Tìm kiếm theo keyword, Filter. | - |
| Quản lý doanh nghiệp khách hàng | OFX-011 | Chi tiết thông tin doanh nghiệp | F-040 | Hồ sơ khách hàng | 【Hiển thị】 Thông tin cơ bản, Timeline lịch sử đến thăm, Log ra vào, lịch sử biên bản.<br>【AI Data】 Hiển thị dạng Widget các Todo, tóm tắt Transcription, dữ liệu phân tích meeting gần nhất. | - |
| Quản lý doanh nghiệp khách hàng | OFX-012 | Sửa chi tiết thông tin doanh nghiệp | F-041 | Chỉnh sửa thông tin doanh nghiệp | 【Input】 Sửa tên công ty, địa chỉ, điện thoại, người phụ trách...<br>【Xử lý】 Cập nhật DB | - |
| Quản lý doanh nghiệp khách hàng | OFX-013 | Chi tiết lần đến thăm của doanh nghiệp | F-042 | Chi tiết biên bản | 【Hiển thị】 Chọn một lần đến thăm cụ thể để xem chi tiết (Transcription toàn văn, biên bản AI, Todo, kết quả phân tích). | - |
| Quản lý doanh nghiệp khách hàng | OFX-013 | Chi tiết lần đến thăm của doanh nghiệp | F-042-1 | Phát Audio/Liên kết text | 【Chức năng】 Chức năng phát audio của dữ liệu ghi âm.<br>【Liên kết】 Click vào đoạn cụ thể trong Transcription để phát audio từ đó, hoặc text được highlight theo tiếng audio đang phát. | - |
| Quản lý doanh nghiệp khách hàng | OFX-014 | Sửa chi tiết lần đến thăm | F-043 | Chỉnh sửa biên bản thủ công | 【Input】 Editor chỉnh sửa thủ công text do AI generate (Biên bản/Todo/Phân tích).<br>【Xử lý】 Chức năng đổi AI Template và yêu cầu AI generate lại.<br>【Chức năng】 Thêm memo. | - |
| Quản lý doanh nghiệp khách hàng | OFX-014 | Sửa chi tiết lần đến thăm | F-043-1 | Xác nhận phát Audio/Liên kết text | 【Chức năng】 Chức năng phát audio trong lúc xác nhận/chỉnh sửa.<br>【Liên kết】 Vừa nghe audio (qua click-to-play hoặc highlight) vừa xác nhận/sửa nội dung. | - |
| Quản lý doanh nghiệp khách hàng | OFX-014 | Sửa chi tiết lần đến thăm | F-044 | Thiết lập phạm vi Share | 【Input】 Cài đặt quyền xem/sửa biên bản.<br>【Thiết lập】 Cấp quyền cho "Toàn phòng ban", "User chỉ định", v.v. | - |
| Quản lý doanh nghiệp khách hàng | OFX-015 | Auto-Generate Email cảm ơn | F-045 | AI Email Gen | 【Xử lý】 Kết hợp nội dung biên bản, định dạng chung và chữ ký cá nhân để tạo bản mail draft.<br>【Hiển thị】 Xác nhận/Chỉnh sửa kết quả tạo. | - |
| Thiết lập cá nhân | OFX-016 | Màn hình TOP thiết lập cá nhân | F-046 | Menu thiết lập | 【Hiển thị】 Icon điều hướng tới các thiết lập:<br>1. Đổi ID/PASS<br>2. Liên kết Calendar<br>3. Privacy & Security<br>4. Liên kết Tool ngoài<br>5. Thiết lập chữ ký | - |
| Thiết lập cá nhân | OFX-017 | Đổi ID/Password | F-047 | Thiết lập tài khoản | 【Input】 Mật khẩu hiện tại, mật khẩu mới.<br>【Xử lý】 Update. | - |
| Thiết lập cá nhân | OFX-018 | Thiết lập liên kết Calendar | F-048 | Đồng bộ Calendar | 【Action】 Nút liên kết Google/Outlook.<br>【Xử lý】 Xác thực OAuth. | - |
| Thiết lập cá nhân | OFX-019 | Thiết lập Privacy & Security | F-049 | Thiết lập phạm vi Public | 【Input】 Phạm vi Public mặc định của biên bản (Chỉ mình tôi / Chỉ người tham gia).<br>【Thiết lập】 Tách biệt phạm vi xem "Memo nội bộ" và "Share cho khách hàng". | - |
| Thiết lập cá nhân | OFX-020 | Thiết lập chi tiết Đặt lịch | F-050 | Thiết lập quy tắc booking | 【Input】 Các thứ trong tuần/khung giờ có thể đặt, thiết lập có thể đặt lịch vào ngày cụ thể hay không. | - |
| Thiết lập cá nhân | OFX-021 | Thiết lập liên kết Tool bên ngoài | F-051 | Liên kết ngoài | 【Input】 Webhook URL hoặc API Key cho Slack/Teams... | Các loại API |
| Thiết lập cá nhân | OFX-022 | Liên kết Google Drive | F-052 | Liên kết account Google Drive | 【Action】 Nút "Liên kết Google Drive".<br>【Xử lý】 Dùng OAuth 2.0 để lấy và lưu giữ Access Token (Read-only). | Google Drive API |

### 📂 Enterprise Admin (Quản trị doanh nghiệp)

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan màn hình | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Thiết lập Admin | ADMX-001 | Danh sách Admin Menu | F-053 | Hiển thị Menu | 【Kiểm soát】 Chỉ hiển thị khi login bằng account có quyền Admin.<br>【Hiển thị】 Link điều hướng tới các chức năng quản trị. | - |
| Dashboard | ADMX-002 | Admin Dashboard | F-054 | Hiển thị Dashboard | 【Hiển thị】<br>・Lịch trình hôm nay<br>・Tình trạng dùng phòng họp (Tỷ lệ hoạt động...)<br>・Thời lượng AI tóm tắt đã dùng (Cá nhân)<br>・Thời lượng AI còn lại (Toàn bộ)<br>・Menu Admin | - |
| Quản lý User | ADMX-003 | Danh sách User | F-055 | List User | 【Hiển thị】 Danh sách User đã đăng ký (Tên, ID, Email, Phòng ban).<br>【Action】 Nút "Đăng ký mới", "Import CSV hàng loạt", "Tải Template CSV". | - |
| Quản lý User | ADMX-004 | Đăng ký mới User | F-056 | Đăng ký User | 【Input】 Tên, ID, PASS, Email, Phòng ban (Liên kết ADMX-010).<br>【Validation】 Kiểm tra trùng ID/Email. | - |
| Quản lý User | ADMX-005 | Confirm đăng ký mới | F-057 | Thực thi/Thông báo | 【Xử lý】 Sau khi Save, tự động gửi ID/PASS tới Email đối tượng. | Mail Server |
| Quản lý User | ADMX-006 | Chi tiết User / Chỉnh sửa | F-058 | Sửa / Xóa | 【Hiển thị】 Xem/Sửa thông tin User.<br>【Action】 Hiện Modal confirm khi nhấn Update/Delete. | - |
| Thiết lập phòng họp | ADMX-007 | Danh sách phòng họp | F-059 | List phòng họp | 【Hiển thị】 DS phòng họp đã đăng ký (Tên, Tầng, Thiết bị).<br>【Action】 Chuyển tới Đăng ký mới, trang Chi tiết. | - |
| Thiết lập phòng họp | ADMX-008 | Đăng ký phòng họp mới | F-060 | Đăng ký cơ sở | 【Input】 Tầng (Dropdown), Thiết bị (Multi-select), Tên phòng, Sức chứa, Ảnh hướng dẫn.<br>【Chọn】 Mode (Single / Multi-device).<br>【Xử lý】 Hoàn tất đăng ký, tự động tạo/hiển thị QR Code liên kết thiết bị (có thể ĐL). | - |
| Thiết lập phòng họp | ADMX-009 | Chi tiết phòng họp | F-061 | Sửa đổi cơ sở | 【Input】 Sửa thông tin đăng ký.<br>【Hiển thị】<br>・QR Code bản đồ chỉ đường (cho Guest)<br>・QR Code liên kết thiết bị (cho Tablet phòng)<br>【Action】 Update/Delete (có Modal confirm). | - |
| Cài đặt Master | ADMX-010 | Danh sách Master Data | F-062 | Master CRUD | 【Danh sách】 Vendor, Phòng ban, Mục đích, Tầng, Thiết bị phòng họp.<br>【Sửa】 Có thể Thêm/Sửa/Xóa trực tiếp trên bảng. Có thể thiết lập cờ từ chối và thông báo từ chối cho Vendor và Mục đích. | - |
| Cài đặt màn hình chờ | ADMX-011 | Logo/Ảnh Background | F-063 | Branding | 【Input】 Upload/Đổi Logo công ty, ảnh background màn hình chờ. | - |
| Cài đặt màn hình chờ | ADMX-012 | Screensaver | F-064 | Cài đặt Signage | 【Input】 Upload Image Slide/Video file.<br>【Thiết lập】 Cài đặt khoảng thời gian lặp (giây). | - |
| Thiết lập Tablet Lễ tân | ADMX-013 | Danh sách Tablet Lễ tân | F-065 | List thiết bị | 【Hiển thị】 Danh sách các Tablet lễ tân đã đăng ký. | - |
| Thiết lập Tablet Lễ tân | ADMX-014 | Đăng ký Tablet mới | F-066 | Đăng ký thiết bị | 【Input】 Setup ID & PASS.<br>【Lựa chọn】 Vendor, Phòng ban, Mục đích, Thiết bị tương ứng, Cài đặt thông báo. | - |
| Thiết lập Tablet Lễ tân | ADMX-015 | Chi tiết Tablet | F-067 | Chỉnh sửa thiết bị | 【Hiển thị】 Xác nhận thông tin đăng ký.<br>【Action】 Update/Delete (có Modal confirm). | - |
| Hóa đơn | ADMX-016 | Payment Menu | F-068 | Chọn Menu | 【Chuyển hướng】 Tới trang "Thông tin Doanh nghiệp/Thanh toán" hoặc "Danh sách Hóa đơn". | - |
| Hóa đơn | ADMX-017 | Thông tin Doanh nghiệp / Thanh toán | F-069 | Tham chiếu hợp đồng | 【Hiển thị】 Info công ty, Payment info, Plan hiện tại, Quota (vd: số giờ trans), thông tin Discount đã apply. | - |
| Hóa đơn | ADMX-018 | Update Company Info | F-070 | Sửa info doanh nghiệp | 【Input】 Tên cty, địa chỉ, người phụ trách, đt, email.<br>【Xử lý】 Update qua Modal confirm. | - |
| Hóa đơn | ADMX-019 | Update Payment Info | F-071 | Sửa info thanh toán | 【Input】 Đăng ký/Sửa/Check phương thức payment (Billing info). | - |
| Hóa đơn | ADMX-020 | Danh sách hóa đơn | F-072 | List hóa đơn | 【Hiển thị】 Danh sách hóa đơn tháng hiện tại và quá khứ. | - |
| Hóa đơn | ADMX-021 | Chi tiết hóa đơn | F-073 | Hiển thị Line Item | 【Action】 Click vào hóa đơn để xem chi tiết hạng mục. | - |
| Hóa đơn | ADMX-022 | Đổi Plan / Thanh toán | F-074 | Thay đổi Plan | 【Input】 Chọn Plan target, nhập Promo Code.<br>【Thanh toán】 Thực thi liên kết tới hệ thống payment gateway (Invoice pay). | Hệ thống thanh toán |
| Quản lý Log | ADMX-023 | Lịch sử đến thăm | F-075 | Search Log | 【Tìm kiếm】 Filter theo Ngày/Tháng/Năm.<br>【Hiển thị】 Danh sách kết quả (Chi tiết hiện qua Modal).<br>【Output】 Xuất dữ liệu CSV. | - |
| Quản lý User | ADMX-004-1 | Yêu cầu thêm Slot User | F-076 | Simulation phí phát sinh | 【Xử lý】 Dựa theo số User add thêm, tính toán phí pro-rate tháng này và số tiền subscription từ tháng sau rồi hiển thị thời gian thực. | - |
| Quản lý User | ADMX-004-1 | Yêu cầu thêm Slot User | F-077 | Mở rộng Slot tức thì | 【Xử lý】 Sau khi xác nhận request, ngay lập tức mở rộng giới hạn đăng ký User trên hệ thống mà ko cần chờ thanh toán hoàn tất. | - |
| Quản lý User | ADMX-004-1 | Yêu cầu thêm Slot User | F-078 | Liên kết dữ liệu tính phí | 【Xử lý】 Tạo data cộng phí pro-rate vào hóa đơn tháng sau. Tự động phản ánh/lưu giữ data subscription mới (bao gồm slot add thêm) từ tháng kế tiếp. | Hệ thống thanh toán |
| Quản lý dùng AI | ADMX-024 | Quản lý thời gian AI | F-079 | Hiển thị trạng thái dùng AI | Hiển thị tình trạng dùng AI summarize toàn cty.<br>・Free quota trong Plan (còn lại, ngày reset)<br>・Prepaid quota (giờ mua, giờ dùng, còn lại)<br>・Postpaid usage (dùng tháng này, phí dự kiến hóa đơn sau)<br>【Biểu đồ】 Biểu đồ tròn hiển thị tỷ lệ 3 loại quota. | - |
| Quản lý dùng AI | ADMX-024 | Quản lý thời gian AI | F-080 | Chi tiết dùng AI theo User | Hiển thị tình trạng dùng AI của từng User.<br>【Action】 Chọn User để xem chi tiết. | - |
| Quản lý dùng AI | ADMX-025 | Mua thêm Data AI | F-081 | Simulation mua Prepaid | Nhập số giờ cần mua.<br>Hiển thị thành tiền thời gian thực dựa trên đơn giá.<br>Hiện options "Cộng vào bill tháng này" hoặc "Bill tháng sau". | - |
| Quản lý dùng AI | ADMX-025 | Mua thêm Data AI | F-082 | Request mua Prepaid | Nhập giờ mua, ngày apply.<br>Lưu thông tin mua vào DB (Status: "Requesting"). | - |
| Quản lý dùng AI | ADMX-026 | Confirm mua thêm AI | F-083 | Xác nhận nội dung mua | Hiển thị giờ mua, số tiền, ngày apply, timing gửi bill.<br>Nút "Confirm" → Đi tới xử lý thanh toán. | - |
| Quản lý dùng AI | ADMX-026 | Confirm mua thêm AI | F-084 | Thực thi thanh toán Prepaid | Gửi số tiền mua tới API thanh toán.<br>Success: Status "Confirm" → Cộng giờ vào Prepaid Quota.<br>Fail: Hiển thị lỗi thanh toán. | Hệ thống thanh toán |
| Quản lý dùng AI | ADMX-027 | Cài đặt giới hạn AI | F-085 | Thiết lập Limiter | Chọn behavior khi vượt quota.<br>・"Auto Postpaid": Tự động tính phí pay-as-you-go.<br>・"Force Stop": Dừng func AI khi hết free quota.<br>Lưu setting vào DB. | - |
| Quản lý dùng AI | ADMX-027 | Cài đặt giới hạn AI | F-086 | Cài đặt Noti quá hạn | Cài đặt channel nhận thông báo (Email, Slack..) khi quota còn lại dưới mức X%.<br>Lưu Rule vào DB. | - |
| Quản lý dùng AI | ADMX-028 | Alert Usage AI | F-087 | Rule thông báo Alert | 【Input】<br>・Trigger (Mức %, trị số tuyệt đối)<br>・Channel (Email, Slack, Teams..)<br>・Audience (Admin/Toàn User)<br>・Timing (Lần đầu/Hàng ngày/Hàng tuần)<br>【Xử lý】 Lưu Rule vào DB. | - |
| Hóa đơn | ADMX-029 | Recap Chi tiết/Hóa đơn AI | F-088 | Hiển thị chi tiết dùng AI | Hiển thị breakdown sử dụng AI tháng này.<br>・Free Plan: Dùng, còn lại<br>・Prepaid: Mua, dùng, còn lại<br>・Postpaid: Dùng, đơn giá, phí. Hiển thị tổng Bill. | - |
| Hóa đơn | ADMX-029 | Recap Chi tiết/Hóa đơn AI | F-089 | Simulation số tiền Bill | Hiển thị số tiền dự kiến tính đến cuối tháng.<br>Update thời gian thực theo usage. | - |
| Template AI | ADMX-030 | Danh sách Template AI | F-090 | Hiển thị danh sách Template | 【Hiển thị】 List các Template AI đã đăng ký (Loại, tên, mô tả).<br>【Action】 Điều hướng tới Đăng ký mới, Sửa/Xóa. | - |
| Template AI | ADMX-031 | Thêm/Sửa Template AI | F-091 | Template CRUD | 【Input】 Tên template, AI Prompt, Loại (Nội bộ/Meeting/Email..).<br>【Xử lý】 Tạo, Sửa, Xóa (có Modal confirm). | - |

### 📂 Phân bổ lịch trình & Đặt chỗ (Visitor)

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan chức năng | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Visitor Booking | GRES-001 | Màn hình chọn ngày giờ | F-092 | Booking ngày giờ thông minh | 【Hiển thị】 Logo corp, hình thức (Offline/Online - cố định từ OFX-003), Calendar chọn khung giờ (Auto khớp AND User x Phòng).<br>【Input】 Số lượng người tham gia (nếu Offline), chọn Timezone.<br>【Action】 Chọn giờ → Sang GRES-002. | Calendar API |
| Visitor Booking | GRES-002 | Nhập thông tin Guest | F-093 | Đăng ký Guest | 【Input】 Công ty, Tên, Email, Mobile.<br>Nếu có đồng hành (số người ≥ 2), nhập thêm Tên, Email, Mobile (任意) của từng người đồng hành.<br>【Validation】 Check field bắt buộc.<br>【Chuyển hướng】 Sang GRES-003. | - |
| Visitor Booking | GRES-003 | Xác nhận nội dung | F-094 | Hiển thị xác nhận | 【Hiển thị】 Xác nhận nội dung nhập liệu.<br>【Action】 "Xác nhận Booking" → Sang GRES-004. | - |
| Visitor Booking | GRES-004 | Hoàn tất đăng ký | F-095 | Xử lý chốt Booking | 【Xử lý】 Tự động đăng ký Calendar phía User. Nếu Offline: đặt phòng, tạo mã QR/Booking code. Nếu Online: Auto-generate ON → tự tạo URL qua Calendar API (Meet/Teams); OFF → hiển thị tin nhắn hướng dẫn của Host. Gửi mail. | Mail Server, Calendar API |

### 📂 Tablet Lễ Tân (Reception)

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan chức năng | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Sign In | UKET-001 | Tablet ID & PASS input | F-096 | Xác thực thiết bị | 【Input】 Tablet ID, Password.<br>【Xử lý】 Thực hiện login định danh doanh nghiệp. Force login 1 lần mỗi tháng để duy trì security.<br>【Phân nhánh】<br>・Success: Cấp/Lưu Permanent Token → Sang UKET-002<br>・Fail: Hiển thị lỗi | Calendar API |
| Màn hình chờ | UKET-002 | Screensaver | F-097 | Digital Signage | 【Hiển thị】 Loop ảnh/video đã setup ở ADMX-011/012.<br>【Action】 Detect event tap màn hình.<br>【Chuyển hướng】 Tap → Sang UKET-003 (TOP). | - |
| Xử lý lễ tân | UKET-003 | Lựa chọn lễ tân | F-098 | Hiển thị lựa chọn | 【Hiển thị】 Nút: "Quét QR", "Ko Appointment", "Vendor", "Nhập Code".<br>【Chuyển hướng】 Nhấn nút sẽ sang màn tương ứng (UKET-004~007). | - |
| Xử lý lễ tân | UKET-004 | Quét QR Code | F-099 | Xử lý khớp Booking | 【Xử lý】 Bật camera trước. Quét mã QR đã sinh ở GRES-004.<br>【Phân nhánh】<br>・Scan OK & Valid: Gửi Noti báo khách đến → Sang UKET-010<br>・Invalid/Expired: Báo lỗi "QR ko hợp lệ" | Mail Server |
| Xử lý lễ tân | UKET-005 | Nhập Booking Code | F-100 | Xác thực Code | 【Input】 Nhập mã PIN (Numpad).<br>【Xử lý】 Đối chiếu qua API.<br>【Phân nhánh】<br>・Khớp: Gửi Noti báo khách đến → Sang UKET-010<br>・Sai: Báo lỗi "Mã sai" | - |
| Xử lý lễ tân | UKET-006 | Nhập thông tin khách | F-101 | Nhập info khách đến | 【Input】 Tên cty, Họ tên, Chọn phòng ban, Chọn mục đích, Khác (Text).<br>【Validation】 Kiểm tra cờ từ chối của Mục đích, nếu ON hiển thị popup/màn hình từ chối và chặn gọi.<br>【Action】 (Neu hợp lệ) Nút "Gọi" → Sang UKET-008. | - |
| Xử lý lễ tân | UKET-007 | Lựa chọn Vendor | F-102 | Gọi Vendor | 【Hiển thị】 Danh sách nút các vendor đã setup (Yamato, Sagawa..).<br>【Validation】 Kiểm tra cờ từ chối của Vendor, nếu ON hiển thị popup/màn hình từ chối và chặn gọi.<br>【Action】 (Neu hợp lệ) Tap → Notify tức thì cho PIC → Sang UKET-008. | - |
| Xử lý lễ tân | UKET-008 | Standby thông báo | F-103 | Gửi thông báo gọi | 【Xử lý】 Gửi thông báo tới PIC (Slack/Teams..).<br>【Hiển thị】 Status "Đang gọi người phụ trách...", "Chờ phản hồi".<br>【Polling】 Monitor phản hồi của PIC (Open door/Start call). | Slack/Teams.. |
| Xử lý lễ tân | UKET-009 | Màn hình gọi điện | F-104 | Chức năng đàm thoại | 【Điều kiện】 Chuyển tới khi yêu cầu Voice Call.<br>【Spec】 Đàm thoại WebRTC.<br>・Khách: Chỉ gửi Audio<br>・PIC: Video Call (Hình + Tiếng)<br>【Kết thúc】 End → Sang UKET-010. | - |
| Xử lý lễ tân | UKET-010 | Bản đồ & QR Code | F-105 | Hiển thị Map & QR | 【Điều kiện】 Khi hoàn tất lễ tân và có bản đồ đăng ký sẵn.<br>【Hiển thị】<br>1. Ảnh "Bản đồ hướng dẫn" tới phòng họp.<br>2. "QR Code" để khách quét ảnh bản đồ về điện thoại. | - |
| Xử lý lễ tân | UKET-011 | Hoàn tất thông báo | F-106 | Tự động Reset | 【Hiển thị】 "Đã hoàn tất lễ tân".<br>【Chuyển hướng】<br>・Nút "Về TOP" → Sang UKET-002<br>・Ko thao tác 1 phút → Tự reset về UKET-002. | - |

### 📂 Ra Vào Phòng Họp

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan chức năng | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Khởi tạo | ENTR-001 | Link device vô phòng | F-107 | Liên kết phòng họp | 【Xử lý】 Quét "QR Code dành riêng cho phòng" để Bind thiết bị với phòng đó.<br>【Phân nhánh】<br>・Single-mode: Chỉ link được 1 thiết bị.<br>・Multi-device: Quét xong hiện list Host và Member. Chọn vị trí slot chưa có người để đăng ký thiết bị. | - |
| Xác nhận đặt | ENTR-002 | Xác nhận trạng thái | F-108 | Standby / Schedule | 【Hiển thị】<br>・Giờ hiện tại, Tên phòng.<br>・Info meeting gần nhất (Title, Time, Host).<br>【Action】 Hiện nút theo tình trạng schedule.<br>・Có booking: Nút "Enter (Vào phòng)".<br>・Ko booking: Nút "Immediate Enter (Họp gấp)". | - |
| Họp gấp | ENTR-003 | Đăng ký thông tin meeting | F-109 | Chọn loại meeting | 【Chọn】 "Meeting khách hàng" hoặc "Meeting nội bộ".<br>【Phân nhánh】 Nếu "Meeting khách hàng":<br>・Khách mới: Tiếp tục.<br>・Khách cũ: Nhập tên cty để link data doanh nghiệp hiện có. | - |
| Họp gấp | ENTR-003 | Đăng ký thông tin meeting | F-110 | Đăng ký nhanh | 【Input】 Chọn member, thời gian.<br>【Validation】 Check trùng lịch.<br>・Ko trùng: Enable nút 【Next】.<br>・Trùng: Báo lỗi & Disable 【Next】. | - |
| Pre-Enter | ENTR-004 | Multi-device Pre-Enter | F-111 | Chọn người tham gia | 【Điều kiện】 Phòng Multi-device mode.<br>【Hiển thị】 Danh sách tên những người tham gia meeting target.<br>【Action】 Chọn tên mình và nhấn "Tham gia" để tiếp tục. | - |
| Pre-Enter | ENTR-005 | Thiết bị Parent của Host | F-112 | Hiển thị Parent UI | 【Hiển thị】 Màn hình của Host hiện "**Ngài ◎◎ (Host)**". Có UI highlight (vd: đổi màu viền) để nhận diện đây là máy chủ.<br>【Action】 Nút "Tiếp tục" → Sang trang chỉnh chỗ ngồi (ENTR-006). | - |
| Pre-Enter | ENTR-006 | Final Seat Adjustment | F-113 | Đổi vị trí ghế | 【Điều kiện】 Multi-device mode & Máy chủ của Host.<br>【Hiển thị】 Hiện sơ đồ vị trí ghế.<br>【Thao tác】 Nếu người ngồi ko đúng plan, Host kéo thả icon để sửa vị trí.<br>【Sync】 Sync Real-time tên hiển thị trên tất cả thiết bị con.<br>【Action】 Nút "Vào phòng" → Toàn bộ vào phòng. | - |
| Pre-Enter | ENTR-007 | Thiết bị Child (con) | F-114 | Child Standby | 【Hiển thị】 Hiện tên "Ngài ◎◎" theo Slot đã phân trước.<br>【Action】 User nhấn "Tham gia" khi đã ngồi vào chỗ để confirm danh tính và vào trạng thái chờ Host. | - |
| Vào phòng | ENTR-008 | Vào phòng / Confirm record | F-115 | Thiết lập Recording | 【Hiển thị】 Host chọn checkbox "Có Recording" và nhấn nút "Vào phòng".<br>【Phân nhánh】<br>・Không Record: Meeting start ngay (Sang ENTR-010).<br>・Có Record: Hiện Pop-up confirm "Bắt đầu ghi âm" trên toàn bộ Child devices. | - |
| Vào phòng | ENTR-008 | Vào phòng / Confirm record | F-116 | Flow chấp thuận Record | 【Constraint】 Do chính sách browser (chống tự động phát).<br>【Action】 Từng người phải nhấn "Bắt đầu ghi âm" trên màn hình của mình để start luồng audio riêng lẻ. | - |
| Trong meeting | ENTR-009 | Giao diện có Record | F-117 | AI Meeting Support | 【Chức năng】<br>・Audio Announce / Noti khởi động.<br>・Hiển thị trạng thái Record.<br>・Live Transcription theo người nói.<br>・Auto kick 5 phút sau khi hết giờ. | - |
| Trong meeting | ENTR-009 | Giao diện có Record | F-118 | Interaction | 【Thao tác】<br>・Reaction emoji vào dòng text transcription.<br>・Chat / Comment.<br>・Pin text (Dòng pin sẽ được highlight trên màn hình live).<br>・Mention / Message.<br>・Memo. | - |
| Trong meeting | ENTR-009 | Giao diện có Record | F-119 | Tài liệu Mirroring | 【Điều kiện】 Multi-device mode.<br>【Chức năng】 Hiển thị data chia sẻ lên toàn bộ thiết bị.<br>【Pointer】 Sync vị trí "ngón tay" người share thành Laser pointer trên toàn bộ thiết bị. | - |
| Trong meeting | ENTR-009 | Giao diện có Record | F-120 | Control của Host | 【Hiển thị】 Chỉ hiện trên máy chủ (Parent).<br>・Nút gia hạn (15p/lượt, auto check calendar).<br>・Nút kết thúc. | Calendar API |
| Trong meeting | ENTR-010 | Giao diện không Record | F-121 | Meeting Support (Basic) | 【Chức năng】<br>・Chat / Comment / Reaction / Mention.<br>・Memo.<br>・Mirroring tài liệu & Laser pointer.<br>・Auto kick 5p sau khi hết giờ. | - |
| Trong meeting | ENTR-010 | Giao diện không Record | F-122 | Control của Host | 【Hiển thị】 Chỉ hiện trên máy chủ (Parent).<br>・Gia hạn / Kết thúc. | Calendar API |
| Thoát phòng | ENTR-011 | Hoàn tất thoát | F-123 | Tự động Reset | 【Hiển thị】 Màn hình hoàn tất thoát phòng.<br>【Chuyển hướng】 Tự về màn hình TOP (ENTR-002). | - |

### 📂 TNG管理者 (Quản trị TNG)

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan chức năng | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Quản lý HĐ | ADM-001 | Danh sách doanh nghiệp | F-124 | List Corp | 【Hiển thị】 Toàn bộ cty đã ký HĐ.<br>・Tên cty, status (Active/Stop/Cancel)<br>・Plan, Ngày hết hạn<br>・Số User (Used/Limit), Thời gian AI còn lại<br>・Trạng thái Billing | - |
| Quản lý HĐ | ADM-002 | Cập nhật doanh nghiệp | F-125 | Sửa Info Doanh nghiệp | 【Input】 Sửa Name, Address, PIC, Tel, Email, Memo.<br>【Payment】 Đổi phương thức payment. | - |
| Quản lý HĐ | ADM-002 | Cập nhật doanh nghiệp | F-126 | Sửa Info Doanh nghiệp | 【Input】<br>・Đổi Plan apply<br>・Discount riêng (% hoặc trị số)<br>・Flag mở các tính năng ngoài Plan<br>・Điều chỉnh ngày renew tiếp theo.<br>【Chuyển hướng】 "Confirm" → Sang ADM-003. | - |
| Quản lý HĐ | ADM-002 | Cập nhật doanh nghiệp | F-127 | Setup điều kiện riêng | 【Input】<br>・Limit User riêng cho cty<br>・Free AI quota riêng (phút/tháng)<br>・Đơn giá postpaid riêng (VND/phút). | - |
| Quản lý HĐ | ADM-003 | Xác nhận cập nhật | F-128 | Thực thi cập nhật | 【Hiển thị】 So sánh Before/After.<br>【Xử lý】 Submit để update DB. Tự động gửi mail thông báo cho PIC (optional).<br>【Chuyển hướng】 Về ADM-001. | - |
| Quản lý HĐ | ADM-004 | Danh sách hóa đơn | F-129 | Quản lý billing toàn hệ thống | 【Hiển thị】 Billing tháng này của các cty, status thanh toán. | - |
| Quản lý HĐ | ADM-005 | Chi tiết hóa đơn | F-130 | Hiển thị chi tiết billing | 【Hiển thị】 Line items, tham chiếu Invoice PDF. | Hệ thống thanh toán |
| Quản lý Plan | ADM-006 | Quản lý Master Plan | F-131 | List các Plan | 【Hiển thị】 4 loại Plan cơ bản.<br>1. Booking & Reception (Ko room)<br>2. Booking/Reception/Meeting Room<br>3. Full func (Single mode only)<br>4. Full func (Multi-device mode)<br>【Action】 Chọn sang ADM-008. | - |
| Quản lý Plan | ADM-008 | Sửa đổi Plan | F-132 | Edit Plan | 【Input】 Phí tháng, Phân quyền func (ON/OFF), Ngày áp dụng mới.<br>【Xử lý】 Procedure apply hàng loạt sang các HĐ đang hiệu lực. | - |
| Quản lý Plan | ADM-007 | Quản lý Promo Code | F-133 | CRUD Promo Code | 【Input】<br>・Code string (vd: WELCOME2026)<br>・Loại Discount (Rate % / Value VND)<br>・Hạn dùng, giới hạn lượt dùng<br>【Xử lý】 Tạo mã, vô hiệu hóa mã. | - |
| Quản lý thiết bị | ADM-009 | Master thiết bị | F-134 | Device Master CRUD | Thêm/Sửa/Xóa các Item cho thuê/bán (Tablet, Mic..). Quản lý Name, Loại, Phí tháng, Giá bán, Slot qty. | - |
| Quản lý thiết bị | ADM-009 | Master thiết bị | F-135 | Kiểm soát giá thiết bị | Ghi log history giá. Chọn "Giữ nguyên giá" hay "Update toàn bộ" cho các HĐ cũ khi đổi giá Master. | - |
| Quản lý dùng AI | ADM-010 | Thống kê dùng AI | F-136 | Analytics AI Usage | Hiển thị usage toàn hệ thống.<br>・Tỷ lệ tiêu thụ Free quota theo cty<br>・Prepaid Revenue/Usage<br>・Postpaid Revenue/Count. Visualize theo ngành nghề/quy mô. | - |
| Quản lý dùng AI | ADM-010 | Thống kê dùng AI | F-137 | Alert cty vượt Quota | Show list các cty đang overdraft.<br>・Tên cty, giờ vượt, phí dự kiến. Click để xem chi tiết cty. | - |
| Quản lý dùng AI | ADM-011 | Chính sách Limit AI | F-138 | System Policy | Setup policy toàn hệ thống.<br>・Bật/Tắt Limiter<br>・Action khi vượt (Auto Postpaid / Lock service).<br>Lưu DB. | - |
| Quản lý dùng AI | ADM-011 | Chính sách Limit AI | F-139 | History Policy | Log lịch sử thay đổi policy. | - |
| Hóa đơn | ADM-012 | Quản lý billing AI Postpaid | F-140 | Tổng hợp Postpaid | Tổng hợp bill Postpaid theo cty.<br>・Name, Hour, Unit price, Total. Chart chuyển biến theo tháng. | - |

### 📂 Chức năng khác (Error / Log)

| Phân loại | Screen ID | Tên màn hình | Function ID | Tên chức năng | Tổng quan chức năng | Hệ thống bên ngoài |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Lỗi | ERR-001 | 403 Forbidden | F-141 | Lỗi phân quyền | 【Điều kiện】 Access trang ko có permission.<br>【Hiển thị】 "Bạn ko có quyền truy cập" & Nút về TOP. | Calendar API |
| Lỗi | ERR-002 | 404 Not Found | F-142 | Lỗi ko tìm thấy | 【Điều kiện】 URL ko tồn tại.<br>【Hiển thị】 "Ko tìm thấy trang". | - |
| Lỗi | ERR-003 | 500 Internal Error | F-143 | Lỗi Server | 【Điều kiện】 Lỗi Exception hệ thống.<br>【Hiển thị】 "Đã xảy ra lỗi hệ thống". Info liên hệ. | - |
| Lỗi | ERR-004 | Bảo trì | F-144 | Hiển thị bảo trì | 【Điều kiện】 Khi cờ Maintenance mode = ON.<br>【Hiển thị】 Splash bảo trì & giờ dự kiến xong. | - |
| Quản lý Log | LOG-001 | Danh sách Access Log | F-145 | Tìm kiếm Access Log | 【Input】 Khoảng ngày, User ID.<br>【Hiển thị】 List IP/Device/URL... (Max 90 ngày).<br>【Output】 Download CSV. | - |
| Quản lý Log | LOG-002 | Danh sách Operation Log | F-146 | Tìm kiếm Audit Log | 【Input】 Ngày, User ID, Loại thao tác (C/U/D).<br>【Hiển thị】 Lịch sử các thao tác quan trọng trên data.<br>【Output】 Download CSV. | - |
| Quản lý Log | LOG-003 | Cài đặt Alert Log | F-147 | Setup detect bất thường | 【Input】<br>・Detect Rule (vd: xóa hàng loạt, sai pass liên tục)<br>・Ngưỡng (Threshold)<br>・Email nhận Noti<br>【Xử lý】 Apply Rule vào Batch monitor. | - |
