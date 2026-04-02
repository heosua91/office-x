# 📱 Danh sách màn hình (Screen List)

---

### 📂 Đăng ký mới
| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Điều khoản | REG-001 | Xác nhận điều khoản sử dụng | New User | Click đồng ý để tiếp tục đăng ký |
| Xác thực Email | REG-002 | Xác thực Email | New User | Nhập địa chỉ email và gửi mã xác nhận. |
| Xác thực Email | REG-003 | Hoàn tất gửi Email | New User | Màn hình hoàn tất gửi email. Chuyển hướng đến mã xác nhận bằng cách click vào link URL |
| Xác thực Email | REG-004 | Nhập mã xác nhận | New User | Nhập mã xác nhận từ email nhận được để thực hiện xác thực danh tính. |
| Thông tin doanh nghiệp | REG-005 | Nhập thông tin doanh nghiệp | New User | Nhập tên công ty, địa chỉ, tên người phụ trách, số điện thoại, địa chỉ email, v.v. |
| Thông tin doanh nghiệp | REG-006 | Xác nhận nội dung thông tin doanh nghiệp | New User | Xác nhận thông tin doanh nghiệp đã nhập, nếu không có vấn đề gì thì tiếp tục. |
| Plan | REG-007 | Chọn gói cước (Plan) | New User | Chọn từ các gói cung cấp. Có so sánh chức năng. Nhập mã Promotion Code. |
| Thanh toán | REG-008 | Liên kết hệ thống thanh toán (Stripe) | New User | Xử lý redirect an toàn sang Stripe Checkout (Đăng ký subscription mới). |
| Quản lý User | REG-009 | Hoàn tất đăng ký | New User | Hiển thị thông báo hoàn tất (Bao gồm trạng thái "đang thẩm định tín dụng" của hệ thống thanh toán). Tự động gửi email đính kèm file PDF hướng dẫn thao tác và URL Login. |

### 📂 Xác thực (Authentication)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Sign In | AUTH-001 | Sign In | User, Admin | Nhập Admin ID & PASS HOẶC User ID & PASS |
| Sign In cho TNG | AUTH-002 | Sign In cho TNG | TNG Admin | Tài khoản dành cho TNG Admin |
| Reset Password | AUTH-003 | Reset Password | User, Admin | Nhập địa chỉ email, sau khi nhấn nút reset thì khởi tạo PASS và gửi vào địa chỉ email |
| Reset Password | AUTH-004 | Hoàn tất gửi reset | User, Admin | Hiển thị đã khởi tạo thành công |
| Reset Password | AUTH-005 | Màn hình thiết lập lại Password | User, Admin | Nhập thiết lập Password mới |
| Reset Password | AUTH-006 | Hoàn tất thiết lập lại Password | User, Admin | Hiển thị thông báo đã thiết lập Password mới thành công |

### 📂 Chức năng OfficeX cho User thông thường

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Dashboard | OFX-001 | Dashboard cá nhân | User | Lịch trình trong ngày<br>Tình trạng sử dụng phòng họp<br>Thời gian tóm tắt AI đã sử dụng (cá nhân) |
| Quản lý Meeting khách hàng | (Merged) | (Đã sáp nhập vào OFX-010/012) | - | - |
| Quản lý Meeting khách hàng | OFX-003 | Đăng ký điều chỉnh lịch trình Meeting | User | **Chọn khách hàng (doanh nghiệp) và cấp URL ban đầu.** (Chi tiết quản lý đã sáp nhập vào OFX-012) |
| Quản lý Meeting khách hàng | OFX-004 | Chi tiết/Chỉnh sửa lịch Meeting cá nhân với khách hàng | User | Hiển thị status và thông tin chi tiết của cuộc meeting cá nhân đã xác nhận (Tên doanh nghiệp, Tên khách, Ngày giờ, v.v.).<br>Có thể thay đổi thành viên tham gia và AI Template giới hạn cho meeting đó, điều chỉnh chỗ ngồi ở chế độ Multi-device.<br>Upload thêm tài liệu chia sẻ trong meeting, xem và xóa hoàn toàn tài liệu do Guest upload (phía Host). |
| Quản lý Meeting khách hàng | OFX-005 | Danh sách tình trạng sử dụng phòng họp | User | Hiển thị danh sách tình trạng sử dụng các phòng họp. |
| Quản lý Meeting khách hàng | OFX-006 | Danh sách lịch Meeting dự kiến | User | Hiển thị danh sách lịch meeting đã được đặt trước. (Bao gồm cả meeting được chia sẻ).<br> Click vào lịch sẽ chuyển sang OFX-004. |
| Quản lý Meeting nội bộ | OFX-007 | Danh sách lịch Meeting nội bộ dự kiến | User | Có thể quản lý và lọc meeting nội bộ theo thư mục bằng cây thư mục phân cấp ở sidebar trái.<br>Lịch sử biên bản và lịch sắp tới trong thư mục được chọn sẽ hiển thị theo dạng "Timeline View (tích lũy log)" xếp theo thời gian. |
| Quản lý Meeting nội bộ | OFX-008 | Đặt phòng họp mới (Dành cho nội bộ) | User | Màn hình liên kết Calendar cá nhân với Calendar phòng họp, kiểm tra và chọn khung giờ mà cả thành viên và phòng đều trống để đặt phòng mới.<br>Chọn thư mục lưu meeting nội bộ bằng dropdown.<br>Chọn AI Template biên bản.<br>Đối với phòng Multi-device mode, tự động phân chỗ ngồi trước.<br>Xóa/Upload thêm tài liệu (PDF/Hình ảnh) chia sẻ trong meeting, hoặc chọn từ Google Drive cá nhân. |
| Quản lý Meeting nội bộ | OFX-009 | Chi tiết đặt phòng họp | User | Màn hình chi tiết thông tin đặt phòng họp. Có thể chỉnh sửa/xóa.<br>Có thể thay đổi thư mục lưu (di chuyển sang thư mục định kỳ khác).<br>Cài đặt Public thông tin meeting (Cấp quyền xem/sửa cho toàn bộ phòng ban hoặc User chỉ định).<br>Trong Multi-device mode có thể chỉnh sửa chỗ ngồi.<br>Thay đổi AI Template biên bản. Thêm/xóa tài liệu hoặc chọn từ Google Drive.<br>Nếu nhấn chỉnh sửa/xóa sẽ hiện Modal Confirm, chọn tiếp tục hoặc Cancel.<br>Nếu xóa thành công, trở về màn hình danh sách. |
| Quản lý Meeting nội bộ | OFX-023 | Chi tiết thông tin Meeting nội bộ | User | Màn hình hiển thị thông tin chi tiết của meeting nội bộ đã kết thúc (Transcription, AI Biên bản, Todo List).<br>Có thể phát lại file ghi âm và phát audio đồng bộ với văn bản Transcription (click đoạn text để phát từ vị trí tương ứng, v.v.).<br>Có thể gọi chức năng "AI Chat" (cửa sổ riêng) để nhận phản hồi tham chiếu biên bản trong cùng thư mục và ToDo chưa hoàn thành bằng kỹ thuật RAG. |
| Quản lý Meeting nội bộ | OFX-024 | Chỉnh sửa chi tiết Meeting nội bộ | User | Màn hình cho phép chỉnh sửa thủ công biên bản và Todo List của meeting nội bộ.<br>Có thể thay đổi thư mục cha (di chuyển/gộp sang thư mục khác).<br>Có thể xác nhận/chỉnh sửa nội dung vừa nghe audio bằng chức năng phát lại ghi âm và phát audio đồng bộ text.<br>Có thể thay đổi template và regenerate lại AI biên bản.<br>Cài đặt Share thông tin meeting (Cấp quyền xem/sửa cho toàn bộ phòng ban hoặc User chỉ định). |
| Quản lý doanh nghiệp khách hàng | OFX-010 | Danh sách doanh nghiệp khách hàng | User | Danh sách khách hàng hiện đang được đăng ký.<br>Hiển thị tên doanh nghiệp, địa chỉ, số điện thoại, người phụ trách, số lượng lần đến thăm. Bao gồm chức năng "Copy URL đặt lịch".<br>Có thể tìm kiếm, filter. |
| Quản lý doanh nghiệp khách hàng | OFX-011 | Chi tiết thông tin doanh nghiệp khách hàng | User | Hiển thị Tên doanh nghiệp, địa chỉ, số điện thoại, người phụ trách, số lần đến thăm.<br>Hiển thị timeline lịch sử đến thăm, log ra vào phòng, biên bản.<br>Cũng hiển thị Todo List, Transcription, Biên bản meeting và dữ liệu phân tích meeting AI gần nhất. |
| Quản lý doanh nghiệp khách hàng | OFX-012 | Chỉnh sửa chi tiết thông tin doanh nghiệp | User | Có thể chỉnh sửa thông tin Tên doanh nghiệp, địa chỉ, điện thoại, người phụ trách, số lần đến thăm.<br>Tích hợp đầy đủ "Quản lý URL đặt lịch" (Tên meeting, Thời lượng, Hình thức, Tự động đảm bảo phòng, Tái phát hành URL). |
| Quản lý doanh nghiệp khách hàng | OFX-026 | Đăng ký doanh nghiệp khách hàng | User | Màn hình thực hiện đồng thời đăng ký thông tin doanh nghiệp khách hàng và cài đặt hành vi URL đặt lịch ban đầu. |
| Quản lý doanh nghiệp khách hàng | OFX-013 | Chi tiết lần đến thăm của doanh nghiệp | User | Hiển thị thông tin chi tiết của đợt đến thăm được chọn (Transcription, Biên bản, Todo List, Phân tích meeting AI, v.v.).<br>Có thể phát lại file ghi âm và phát audio đồng bộ với văn bản Transcription (click đoạn text để phát từ vị trí tương ứng, v.v.).<br>Có thể gọi chức năng "AI Chat" (cửa sổ riêng) để nhận phản hồi tham chiếu biên bản trong quá khứ và ToDo chưa hoàn thành của doanh nghiệp đó bằng kỹ thuật RAG. |
| Quản lý doanh nghiệp khách hàng | OFX-014 | Chỉnh sửa chi tiết lần đến thăm | User | Màn hình cho phép thêm/chỉnh sửa Memo.<br>Có thể xác nhận/chỉnh sửa nội dung vừa nghe audio bằng chức độ phát audio hoặc phát audio đồng bộ text.<br>Có thể chỉnh sửa thủ công các Biên bản, Todo List, Phân tích meeting do AI tạo.<br>Có thể đổi AI Template và bắt AI generate lại biên bản.<br>Cài đặt cấp quyền Share thông tin meeting cho nhóm/user được chỉ định. |
| Quản lý doanh nghiệp khách hàng | OFX-015 | Auto-Generate Email cảm ơn sau meeting | User | Màn hình tự động generate draft Email cảm ơn sau meeting (AI Email Template tự động áp dụng định dạng và chữ ký cá nhân) / Màn hình Confirm |
| Thiết lập cá nhân User | OFX-016 | Màn hình TOP thiết lập cá nhân | User | 【Đổi ID/Password】【Liên kết Calendar】【Thiết lập bảo mật và quyền riêng tư (Privacy & Security)】【Thiết lập liên kết Tool bên ngoài】【Thiết lập Chữ ký (Signature)】【Thiết lập từ điển cá nhân】 |
| Thiết lập cá nhân User | OFX-017 | Đổi User ID/Password | User | Có thể thay đổi User ID / Password |
| Thiết lập cá nhân User | OFX-018 | Thiết lập liên kết Calendar | User | Google Calendar hoặc Outlook Calendar |
| Thiết lập cá nhân User | OFX-019 | Thiết lập Privacy & Security | User | Các mục có thể thiết lập:<br>・Phạm vi Public Default của Biên bản meeting (Chỉ mình tôi / Chỉ những người tham gia)<br>・Cài đặt chia tách hiển thị "Memo nội bộ" và "Share cho khách hàng" |
| Thiết lập cá nhân User | OFX-020 | Thiết lập chi tiết Đặt lịch (Booking) | User | Các ngày trong tuần có thể Booking, Khung giờ, Ngày có thể dùng, Thiết lập Khung thời gian khóa (không cấp quyền booking) |
| Thiết lập cá nhân User | OFX-021 | Thiết lập liên kết Tool bên ngoài & Thông báo | User | Màn hình thiết lập Webhook URL với Slack/Teams, cài đặt Push Notification trên trình duyệt web, và thiết lập đầu mối thông báo thay thế khi vắng mặt |
| Thiết lập cá nhân User | OFX-022 | Liên kết Google Drive | User | Dùng OAuth 2.0 (Read-only) để nhận Access Token và lưu lại |
| Thiết lập cá nhân User | OFX-025 | Thiết lập từ điển cá nhân | User | Màn hình cho phép đăng ký, chỉnh sửa, xóa từ điển từ vựng cá nhân nhằm nâng cao độ chính xác nhận dạng giọng nói và transcription cho AI biên bản. |

### 📂 Enterprise Admin (Quản trị doanh nghiệp)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Thiết lập riêng Admin | ADMX-001 | Danh sách Admin Menu | Admin | Chỉ hiển thị cho những User login bằng tài khoản Admin. Link tới các chức năng quản trị (bao gồm quản lý từ điển từ vựng). |
| Dashboard | ADMX-002 | Admin Dashboard | Admin | Lịch trình trong ngày<br>Trạng thái sử dụng phòng họp<br>Thời lượng dùng AI summarize (Cá nhân)<br>Thời lượng AI summarize còn lại (Toàn tổ chức)<br>Hiển thị Admin Menu |
| Quản lý User | ADMX-003 | Danh sách User | Admin | Danh sách User đang được đăng ký. Tên, ID, Email, Department.<br>Button list: 「Đăng ký mới」, 「Import CSV Hàng loạt」, 「Tải Template CSV」. ※ Khi chạm limit user đăng ký, thì hiển thị nút 「Yêu cầu thêm số lượng giới hạn User」. |
| Quản lý User | ADMX-004 | Đăng ký mới User | Admin | Nhập 【Tên】【ID】【PASS】【Email】【Phòng ban (ADMX-010)】【Webhook URL (Slack/Teams...)】 |
| Quản lý User | ADMX-004-1 | Yêu cầu thêm Slot giới hạn User | Admin | Màn hình request mua thêm User khi vượt quá giới hạn User cơ bản. Nhập số lượng add thêm, check số tiền tính theo pro-rate (tỷ lệ ngày) tháng hiện tại và số tiền subscription từ tháng sau trước khi submit. |
| Quản lý User | ADMX-004-2 | Hoàn tất yêu cầu add User Slot | Admin | Màn hình hoàn tất request cấp thêm slot. Hiển thị nội dung cho thấy admin đã có thể mời và tạo account lập tức mà ko cần chờ verify payment. |
| Quản lý User | ADMX-005 | Confirm đăng ký mới | Admin | Màn hình Confirm trước khi Save, Sau khi Save hệ thống sẽ send Email + ID Pass |
| Quản lý User | ADMX-006 | User Chi tiết/Chỉnh sửa/Xóa | Admin | Xác nhận và chỉnh sửa thông tin 【Tên】【ID】【PASS】【Email】【Phòng ban (ADMX-010)】【Webhook URL (Slack/Teams...)】.<br>Khi nhấn Update/Delete sẽ hiện Modal confirm, có thể Continue hoặc Cancel. |
| Thiết lập phòng họp | ADMX-007 | Danh sách phòng họp | Admin | Nhấn các nút như: Thiết lập doanh nghiệp, Đăng ký phòng họp mới, Chi tiết phòng họp, Cài đặt Tablet Lễ tân (Reception Tablet)<br>Hiển thị các Tên phòng họp, Tầng, Thiết bị trong phòng họp...<br>Button list: 「Đăng ký mới」「Import CSV Hàng loạt」「Tải Template CSV」「Cài đặt doanh nghiệp」「Cài đặt Tablet」.<br>※ Khi import CSV, Tầng và Tên thiết bị sẽ tự động đăng ký vào master. |
| Thiết lập phòng họp | ADMX-008 | Đăng ký phòng họp mới | Admin | ・Chọn Dropdown 【Tên tầng】 từ ADMX-010, Chọn nhiều Dropdown cho 【Thiết bị phòng họp】, nhập Tên phòng, Số lượng người tối đa, Upload hình ảnh bản đồ chỉ dẫn.<br>・Chọn Single-mode hoặc Multi-device mode.<br>・Hệ thống sẽ tự động tạo "QR Code dành riêng cho phòng" để liên kết Tablet với phòng.<br>・Sau khi Submit đăng ký hoàn tất, sẽ xuất QR Code (có nút download). |
| Thiết lập phòng họp | ADMX-009 | Chi tiết phòng họp (Edit, Xóa) | Admin | ・Màn hình cho phép đổi Dropdown【Tên tầng】, thay đổi/xóa 【Thiết bị phòng họp】, Tên phòng, Số người tối đa, hình ảnh hướng dẫn.<br>・Có thể thay đổi Single-mode / Multi-device mode.<br>・URL Map hướng dẫn đến Meeting Room được show dưới dạng QR Code (Có thể download).<br>・Hiển thị "QR Code liên kết thiết bị với meeting room" + Mã xác nhận (4~6 chữ số) (Có thể download). |
| Cài đặt Master | ADMX-010 | Danh sách Master Data:<br>（Tên đối tác Vendor, Mục đích, Tên Phòng Ban, Tầng, Thiết bị phòng họp） | Admin | Màn hình quản lý Master Data cho Tablet Lễ tân.<br>【Tên Vendor】 Giá trị mặc định ban đầu: "Giao hàng/Vận chuyển" "Bổ sung/Thay thế" "Kiểm tra/Sửa chữa" "Vendor khác". Có thể thêm/sửa/xóa. Có thể cài đặt cờ từ chối và thông báo từ chối.<br>【Mục đích】 Giá trị mặc định ban đầu: "Thương lượng/Họp" "Tuyển dụng/Phỏng vấn" "Giới thiệu sản phẩm/Kinh doanh" "Người liên quan/Chào hỏi". Có thể thêm/sửa/xóa. Có thể cài đặt cờ từ chối và thông báo từ chối.<br>【Tên Phòng ban】 Tự động đăng ký khi Import CSV User (ADMX-003). Có thể thêm/sửa/xóa.<br>【Tầng & Thiết bị phòng họp】 Tự động đăng ký khi Import CSV phòng họp (ADMX-007). Có thể thêm/sửa/xóa. |
| Cài đặt Reception Màn Hình chờ | ADMX-011 | Logo Corporate & Hình Background | Admin | Upload/Sửa Logo và Ảnh Background màn hình chờ |
| Cài đặt Reception Màn Hình chờ | ADMX-012 | Cài đặt Screensaver | Admin | Upload Image Slide/ Video file và cài đặt timer lặp. |
| Setup Tablet Lễ Tân | ADMX-013 | Danh sách Tablet Lễ Tân (Reception Tablet) | Admin | Hiển thị list Reception Tablet đã đăng ký |
| Setup Tablet Lễ Tân | ADMX-014 | Đăng ký mới Tablet Lễ Tân | Admin | Đặt ID & PASS cho tablet, có thể chọn list vendor, department, mục đích, thiết bị và các setup Noti. |
| Setup Tablet Lễ Tân | ADMX-015 | Chi tiết Tablet Lễ Tân | Admin | Màn hình Info Tablet Lễ Tân: ID&PASS, Vendor, Department, Mục đích, thiết bị, Notification.<br>Cung cấp nút Update/Delete đi kèm Confirm Modal Dialog. |
| Hóa đơn Payment | ADMX-016 | Payment Menu | Admin | Lựa chọn giữa Thông tin Doanh nghiệp/Thanh toán hoặc Danh sách Invoice (Hóa đơn). |
| Hóa đơn Payment | ADMX-017 | Thông tin Doanh nghiệp / Thanh toán | Admin | Hiển thị thông tin doanh nghiệp đăng ký hiện tại. Xem tên Plan và quota đang dùng.<br>＋ Bao gồm chức năng【Chuyển sang Stripe Customer Portal】【Chuyển đổi phương thức thanh toán (Thẻ tín dụng ⇔ Chuyển khoản ngân hàng)】. |
| Hóa đơn Payment | ADMX-018 | Đăng ký / Update Company Info | Admin | Ngoài thông tin cơ bản như tên, địa chỉ, có thể tùy chỉnh nội dung popup đồng ý ghi âm, cài đặt giới hạn AI (Chế độ Unlimited / Limit Setup Quota) và cài đặt gửi Alert thông báo cho Admin khi đạt ngưỡng giới hạn. |
| Hóa đơn Payment | ADMX-019 | 【Link ngoài】Quản lý thông tin thanh toán | Admin | 【Mục menu sidebar】 Lấy session và redirect sang Stripe Customer Portal ở tab mới. |
| Hóa đơn Payment | ADMX-020 | 【Link ngoài】Danh sách hóa đơn | Admin | 【Mục menu sidebar】 Lấy session và redirect sang Stripe Customer Portal ở tab mới. |
| Hóa đơn Payment | ADMX-022 | Màn hình thay đổi Plan / Thanh toán | Admin | Chọn Plan mục tiêu và redirect sang Stripe Checkout để thực hiện thay đổi Plan & thanh toán. |
| Quản lý Log Truy cập Khách | ADMX-023 | Lịch sử đến thăm | Admin | Search/Filter: theo Ngày, Tháng, Năm.<br>Click List result sẽ bung Modal Info details.<br>Data Export: có thể xuất CSV theo query. |
| Quản lý dùng AI | ADMX-024 | Quản lý hạn mức thời gian tóm tắt AI | Admin | Hiển thị tình trạng dùng AI summarize, thời gian còn lại, quota Prepaid, phần đã dùng Postpaid của toàn doanh nghiệp. |
| Quản lý dùng AI | ADMX-025 | Mua thêm Data Thời gian AI | Admin | Màn hình mua thêm thời gian AI summarize theo phương thức Prepaid. Xác nhận số giờ mua, số tiền, ngày áp dụng trước khi submit. |
| Quản lý dùng AI | ADMX-026 | Confirm Mua thêm Data AI | Admin | Xác nhận nội dung mua. Sau khi xác nhận sẽ liên kết sang hệ thống thanh toán. |
| Quản lý dùng AI | ADMX-027 | Cài đặt giới hạn sử dụng AI | Admin | Cài đặt hành vi khi vượt quota AI summarize (Tự động tính phí pay-as-you-go hoặc Dừng sử dụng). Kiểm soát bật/tắt chức năng Limiter. |
| Quản lý dùng AI | ADMX-028 | Cài đặt Alert Usage AI | Admin | Cài đặt Rule thông báo Alert liên quan đến lượng AI đã dùng (Trigger gửi, Kênh nhận, Đối tượng, Timing...). |
| Hóa đơn Payment | ADMX-029 | Recap Chi tiết sử dụng AI / Hóa đơn AI | Admin | Hiển thị chi tiết sử dụng AI tháng hiện tại (Quota miễn phí, Prepaid, Postpaid) và số tiền hóa đơn dự kiến cuối tháng. |
| Template AI | ADMX-030 | Danh sách Template AI | Admin | Hiển thị danh sách các Template AI đã đăng ký (dành cho Biên bản / Email...) |
| Template AI | ADMX-031 | Thêm/Sửa Template AI | Admin | Đăng ký/Chỉnh sửa Prompt AI, Format và các điều kiện áp dụng mặc định cho Template AI |
| Quản lý từ điển từ vựng | ADMX-032 | Quản lý từ điển tổ chức | Admin | Màn hình cho phép đăng ký, chỉnh sửa, xóa từ điển thuật ngữ chuyên môn/nội bộ chung của tổ chức nhằm nâng cao độ chính xác nhận dạng giọng nói AI biên bản. Có chức năng Export CSV. |
| Quản lý từ điển từ vựng | ADMX-033 | Phê duyệt hàng loạt đăng ký từ điển | Admin | Hiển thị gợi ý "Danh sách từ bị sửa nhiều lần" trong biên bản, Admin chọn bằng checkbox từ danh sách và thêm hàng loạt vào từ điển tổ chức. |

### 📂 Phân bổ lịch trình & Đặt chỗ (Visitor)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Booking Regis | GRES-001 | Màn hình Select Date/Time | Visitor | Hiển thị logo doanh nghiệp, hiển thị hình thức (Offline/Online - đã cài đặt tại OFX-003), nhập số lượng người tham gia (nếu Offline), hiển thị Calendar gợi ý khung giờ thông minh (kết hợp AND tình trạng trống của người tham gia và phòng họp), chọn Timezone. |
| Booking Regis | GRES-002 | Nhập thông tin Guest | Visitor | Nhập Tên doanh nghiệp, Tên, Email, Mobile.<br>Nếu có đồng hành (số lượng người ≥ 2), nhập thêm Tên, Email, Mobile của từng người đồng hành. |
| Booking Regis | GRES-003 | Confirm Registration | Visitor | Confirm lại thông tin đã nhập có lỗi không |
| Booking Regis | GRES-004 | Hoàn tất Regis | Visitor | Tự ghi vào lịch bên User Calendar. Đặt phòng họp tự động (nếu Offline): Tự động tạo QR Code/Booking Code và gửi email. Nếu Online: hướng dẫn cấp URL.<br>Tự động tạo QR Code/Booking Code và gửi email.<br> Hiển thị hướng dẫn để upload tài liệu từ URL chuyên dùng trong email xác nhận đã gửi. |
| Booking Regis | GRES-005 | Upload/Chỉnh sửa tài liệu Guest | Visitor | Truy cập qua URL chuyên dùng được gửi qua email sau khi xác nhận booking. Có thể upload, xóa, thay thế tài liệu liên quan đến cuộc meeting cụ thể. |

### 📂 Tablet Lễ Tân (Reception)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Sign In | UKET-001 | Tablet ID & PASS input | User, Admin | System requirement bắt log in Tablet 1 tháng 1 lần. |
| Standby | UKET-002 | Screensaver / Digital Signage | Visitor | Play các asset configure ở ADMX-011, ADMX-012.<br>Tap vào screen để Start. |
| TOP Screen | UKET-003 | Lựa chọn Lễ Tân | Visitor | Các nút: "Quét QR Code" / "Nhập Booking Code" / "Chưa có lịch hẹn" / "Vendor" |
| Quét QR Code | UKET-004 | Quét Booking QR Code | Visitor | Bật camera quét QR Code (Sinh ra ở GRES-004) |
| Nhập Booking code | UKET-005 | Input Booking Code | Visitor | Nhập PinCode sinh ra ở GRES-004 |
| No-Appointment | UKET-006 | Visitor Info Input | Visitor | Khách nhập tay list field sau:<br>Company name<br>Tên<br>Department muốn gặp<br>Mục đích<br>Khác<br>Nếu mục đích bị từ chối được chọn, không gửi thông báo mà hiển thị màn hình từ chối kèm lời nhắn. |
| Vendor Input | UKET-007 | Lựa chọn Vendor (Đơn vị Giao Vận) | Visitor | Lựa danh sách pre-configured (Yamato, Sagawa...)<br>Nếu Vendor bị từ chối được chọn, không gửi thông báo mà hiển thị màn hình từ chối kèm lời nhắn. |
| Notification | UKET-008 | Standby màn hình thông báo | Visitor | Hệ thống đồng thời gửi thông báo tới Webhook URL (OFX-021) của PIC và URL chung của Tablet (ADMX-014). Hiển thị "Đang gọi người phụ trách..." / "Chờ phản hồi". Tiếp tục tự động gửi lại nếu không có phản hồi sau 30~60 giây, đến khi PIC nhấn nút "Xử lý". |
| Notification | UKET-009 | Màn hình WebRTC Gọi Điện (Voice Call) | Visitor | Nếu PIC muốn nói chuyện, Audio của Guest được truyền còn màn hình hiển thị live video của PIC. |
| Notification | UKET-010 | Chỉ đường Map & QR Code | Visitor | Khi Guest hoàn tất lễ tân, hiển thị đồng thời "Bản đồ hướng dẫn" và "QR Code" tới phòng họp trên màn hình Tablet. Guest có thể xác nhận đường đi tại chỗ và quét QR để mang bản đồ về điện thoại cá nhân. |
| Notification | UKET-011 | Noti Success | Visitor | Back to TOP HOẶC tự động 1 phút ko tap. |

### 📂 Ra Vào (入退出) Phòng Họp

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Setup Khởi Tạo | ENTR-001 | Link device vô Meeting Room | User | Liên kết thiết bị với phòng họp bằng cách quét QR Code dành riêng cho phòng hoặc nhập thủ công mã xác nhận (4~6 chữ số).<br>Single-mode: tối đa 1 thiết bị liên kết đồng thời.<br>Multi-device mode: Ngay sau khi quét, màn hình Tablet hiển thị chỗ ngồi của Host và danh sách chỗ khác trong phòng. Chọn vị trí phù hợp (chưa có ai chọn) để đăng ký. |
| Confirm Book | ENTR-002 | Booking Data / Lịch | User, Visitor | ・Giờ hiện tại, Tên phòng.<br>・Info Meeting kế tiếp (Tiêu đề, Thời gian, Host).<br>・Hiển thị nút "Vào phòng" hoặc "Vào phòng ngay" tùy theo lịch (Chỉ Host/máy chủ mới thao tác được). |
| Immediate Enter (Họp gấp) | ENTR-003 | Đăng ký thông tin Meeting | User | Chọn "Meeting Khách hàng" hay "Meeting nội bộ". Nếu "Meeting Khách hàng": Khách mới thì tiếp tục, Khách cũ thì nhập tên cty để link vào doanh nghiệp hiện có.<br>Chọn người tham gia.<br>Nhập thời gian sử dụng.<br>Nếu không trùng với lịch đặt thì nhấn【Tiếp theo】để tiếp tục. Nếu trùng thì hiện thông báo lỗi & không nhấn được nút Tiếp theo. |
| Pre-Enter | ENTR-004 | Màn hình Pre-Enter (Multi-device) | User | Hiển thị danh sách tên người tham gia meeting. Chọn tên mình và nhấn nút "Tham gia" để tiếp tục. |
| Pre-Enter | ENTR-005 | Màn hình Parent Device (Chủ phòng / Host) | User | Màn hình host hiển thị **"Ngài ◎◎ (Host)"** với UI nổi bật (vd: đổi màu viền) để nhận biết đây là máy chủ ngay lập tức.<br>Nhấn nút "Tiếp tục" để sang màn hình chỉnh chỗ ngồi cuối cùng. |
| Pre-Enter | ENTR-006 | Final Seat Adjustment (Host) | User | Hiển thị danh sách chỗ ngồi.<br>Nếu người ngồi không đúng plan, Host kéo thả icon trên màn hình (máy chủ) để sửa vị trí và sync thời gian thực lên tất cả thiết bị.<br>Nhấn nút "Vào phòng" để vào. |
| Pre-Enter | ENTR-007 | Màn hình Child Device (Khách/Chỗ khác) | Visitor, User | Chỗ ngồi được phân tự động trước và hiện "Ngài ◎◎". Khi ngồi vào chỗ nhấn nút "Tham gia" để xác nhận danh tính và vào phòng. |
| Room Start | ENTR-008 | Room Start - Check record info | Visitor, User | Màn hình của Host cho bật tính năng Audio Recording (checkbox) và nhấn nút Vào phòng.<br>Không record: Vào meeting ngay (sang ENTR-010).<br>Có record (Single): Vào thì bắt đầu ghi âm ngay (sang ENTR-009).<br>Có record (Multi): Vào thì hiện popup "Đồng ý ghi âm" trên toàn bộ thiết bị con. Áp dụng nguyên tắc 100% đồng ý — chỉ bắt đầu ghi âm khi tất cả đồng ý; nếu ai từ chối hoặc không thao tác thì tự động chuyển sang "Chế độ không ghi âm". Kèm mã xác nhận (4~6 chữ số) trong modal QR ghi âm, có thể kết nối từ PC. |
| In-Meeting | ENTR-009 | Giao diện có Recording | Visitor, User | Bắt đầu meeting khi có ghi âm.<br>【Cấu hình UI chung cho Single & Multi】：<br>・Trên (Header): LIVE status (icon người tham gia), Thời gian đã qua, Tên meeting, Thông báo bắt đầu ghi âm<br>・Giữa-Trái: Accordion theo Agenda (Tóm tắt realtime + điểm phát biểu)<br>・Phải: Todo List tự động trích xuất bằng AI<br>・Dưới (Footer): Trạng thái ghi âm (🔴) và nút "Thoát (Kết thúc)" (Chỉ Host máy chủ)<br>・Cảnh báo khi mất mạng & Tự động thoát sau 5 phút quá giờ<br><br>【UI bổ sung cho Multi mode】：<br>・Trên phải: Nút AI Chat (Cửa sổ riêng/Floating. Có thể nhập voice/text để tham chiếu "Hôm nay" hoặc "Quá khứ")<br>・Dưới phải: Nút Reaction (Emoji)<br>・Phần dưới (Footer/Thao tác nội dung)：<br>　①【Chuyển đổi】tài liệu ⇔ tóm tắt/ToDo<br>　②【Hiển thị/Chia sẻ tài liệu】Chức năng mirroring tài liệu (Upload trước/trong meeting, Sync Laser Pointer)<br>　③【Chế độ tự xem】Có thể tự do xem trang khác trên thiết bị cá nhân khi đang mirroring<br><br>【Chức năng chỉ dành cho Host】：<br>・Nút gia hạn (15 phút/lượt)<br>・Nút tạm dừng ghi âm (Dừng ghi âm, hiện "Đang tạm dừng" trên tất cả thiết bị, có thể tiếp tục)<br>・Nút thông tin mật (Tiếp tục ghi âm nhưng đánh dấu khoảng đó là bí mật, tự động loại khỏi AI biên bản)<br>・Kèm mã xác nhận (4~6 chữ số) trong modal QR vào giữa chừng |
| In-Meeting | ENTR-010 | Giao diện Không Recording | Visitor, User | Bắt đầu meeting khi không có ghi âm.<br>【Cấu hình UI chung cho Single & Multi】：<br>・Trên (Header): LIVE status (icon người tham gia), Thời gian đã qua, Tên meeting<br>・Dưới (Footer): Nút "Thoát (Kết thúc)" (Chỉ Host máy chủ)<br>・Tự động thoát sau 5 phút quá giờ<br><br>【UI bổ sung cho Multi mode】：<br>・Trên phải: Nút AI Chat (Cửa sổ riêng/Floating. Có thể nhập voice/text để tham chiếu "Hôm nay" hoặc "Quá khứ")<br>・Dưới phải: Nút Reaction (Emoji)<br>・Phần dưới (Footer/Thao tác nội dung)：<br>　①【Chuyển đổi】tài liệu ⇔ Chat...<br>　②【Hiển thị/Chia sẻ tài liệu】Chức năng mirroring tài liệu (Upload trước/trong meeting, Sync Laser Pointer)<br>　③【Chế độ tự xem】Có thể tự do xem trang khác trên thiết bị cá nhân khi đang mirroring<br><br>【Chức năng bổ sung chỉ dành cho Host】：<br>・Nút gia hạn (15 phút/lượt) |
| Out-room | ENTR-011 | Exit Finish | Visitor, User | Hiển thị màn Exit, Auto reboot lại ENTR-002 |

### 📂 TNG Admin

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Quản lý Hợp Đồng | ADM-001 | Danh sách Công Ty Hợp Đồng | TNG Admin | Hiển thị danh sách công ty đã đăng ký hợp đồng (Tên công ty, Trạng thái hợp đồng (Status)<br>・Plan hợp đồng, Ngày hết hạn hợp đồng, Số lượng User đăng ký còn lại, Thời gian AI summarize còn lại, Trạng thái thanh toán) |
| Quản lý Hợp Đồng | ADM-002 | Cập Nhật Công Ty Hợp Đồng | TNG Admin | Cập nhật Tên công ty, Địa chỉ, Tên người phụ trách, Số điện thoại, Email, phương thức thanh toán.<br>Cài đặt tùy chỉnh "Quota User miễn phí", "Quota thời gian AI summarize miễn phí", "Đơn giá tính phí pay-as-you-go khi vượt AI" theo từng doanh nghiệp. |
| Quản lý Hợp Đồng | ADM-003 | Confirm Update | TNG Admin | Xem nội dung thay đổi (before/after), nếu không có vấn đề thì xác nhận. Sau khi xác nhận quay về ADM-001. |
| Quản lý Hợp Đồng | ADM-004 | 【Link ngoài】Danh sách Hóa Đơn (Stripe) | TNG Admin | 【Mục menu sidebar】 Khi click sẽ mở trang Billing liên quan trên Stripe Dashboard ở tab mới. |
| Quản lý Plan | ADM-006 | Màn hình Master quản lý Plan | TNG Admin | 4 loại Plan cơ bản và thông tin quyền chức năng.<br>【Chỉ đặt lịch & lễ tân】※Không có đặt phòng họp<br>【Đặt lịch & Lễ tân & Đặt phòng họp】<br>【Đặt lịch & Lễ tân & Đặt phòng & Transcription & Biên bản & Phân tích (Chỉ Single)】<br>【Toàn bộ chức năng】 |
| Quản lý Plan | ADM-007 | Chi tiết/Update Plan Cở Bản | TNG Admin | Có thể xem/thay đổi giá và quyền chức năng của từng Plan cơ bản.<br>Khi thay đổi cần nhập ngày áp dụng.<br>Sau khi thay đổi sẽ áp dụng giá mới hàng loạt cho tất cả công ty đang hợp đồng. |
| Quản lý Promo | ADM-008 | 【Link ngoài】Quản lý Promotion | TNG Admin | 【Mục menu sidebar】 Khi click sẽ mở trang Coupons trên Stripe Dashboard ở tab mới. |
| Quản lý Thiết Bị Tồn | ADM-009 | Màn hình Master quản lý thiết bị | TNG Admin | Màn hình thêm/chỉnh sửa/thay đổi giá cho sản phẩm cho thuê (Tablet, chân đế, Mic...) và sản phẩm bán. Có thể cài đặt rule áp dụng giá cho hợp đồng hiện có (Giữ nguyên / Cập nhật hàng loạt). |
| Quản lý Thiết Bị Tồn | ADM-010 | Tổng Quát Phân Tích (Analytics) AI Usage | TNG Admin | Hiển thị tình trạng dùng AI summarize của tất cả công ty hợp đồng, tỷ lệ Prepaid/Postpaid, danh sách công ty đã vượt quota. |
| Quản lý Thiết Bị Tồn | ADM-011 | Cài đặt AI Limit Policy | TNG Admin | Cài đặt chính sách giới hạn AI toàn hệ thống (Bật/tắt Limiter, Hành vi khi vượt quota). |
| Billing/Payment | ADM-012 | Quản lý hóa đơn Postpaid AI Usage | TNG Admin | Tổng hợp phần AI vượt quota (Postpaid) và xác nhận số tiền hóa đơn theo từng doanh nghiệp. |

### 📂 Các chức năng khác (Error / Log)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Lỗi | ERR-001 | 403 Forbidden | Visitor, User, Admin, TNG Admin | Hiển thị khi truy cập không có quyền |
| Lỗi | ERR-002 | 404 Not Found | Visitor, User, Admin, TNG Admin | Hiển thị khi truy cập màn hình hoặc URL không tồn tại. |
| Lỗi | ERR-003 | 500 Internal Server Error | Visitor, User, Admin, TNG Admin | Hiển thị khi xảy ra lỗi internal server. |
| Bảo trì | ERR-004 | Maintenance (Bảo trì) | Visitor, User, Admin | Hiển thị trong thời gian bảo trì. |
| System Log | LOG-001 | DS Access Log, Search, Export | TNG Admin | Track login, URI path data của Corp Users (IP, Date, Device type).<br>Nhập ngày/UserID để lọc log tương ứng. Range Max query = 90 days giới hạn.<br>Export to CSV allow. |
| System Log | LOG-002 | DS Operation Log (Log Thao Tác CRUD) | TNG Admin, Admin | Audit Log record lại Delete/Update/Create trên Corporate Data. Search User ID/ Date..<br>Range Query Max = 90 days giới hạn.<br>Export ra CSV allow. |
| System Log | LOG-003 | Khai Báo Rules Alert Log Monitor | TNG Admin | Tạo Alert rules dựa trên Action Threshold (Ví dụ delete records > 5 requests trong 1s). Report Target channels. |
