# 📱 Danh sách màn hình (Screen List)

---

### 📂 Đăng ký mới
| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Điều khoản | REG-001 | Xác nhận điều khoản sử dụng | New User | Click đồng ý để tiếp tục đăng ký |
| Xác thực Email | REG-002 | Xác thực Email | New User | Nhập địa chỉ email và gửi mã xác nhận. |
| Xác thực Email | REG-003 | Hoàn tất gửi Email | New User | Màn hình hoàn tất gửi email. Chuyển hướng đến mã xác nhận bằng cách click vào link URL |
| Xác thực Email | REG-004 | Nhập mã xác nhận | New User | Nhập mã xác nhận từ email nhận được để thực hiện xác thực danh tính. |
| Thông tin doanh nghiệp | REG-005 | Nhập thông tin doanh nghiệp | New User | Nhập tên công ty, địa chỉ, tên người phụ trách, số điện thoại, địa chỉ email, số lượng người tham gia, đăng ký người tham gia, v.v. |
| Thông tin doanh nghiệp | REG-006 | Xác nhận nội dung thông tin doanh nghiệp | New User | Màn hình xác nhận thông tin doanh nghiệp đã nhập, nếu không có vấn đề gì thì tiếp tục. |
| Plan | REG-007 | Chọn gói cước (Plan) | New User | Chọn từ các gói cung cấp. Có so sánh chức năng. Nhập mã Promotion Code. |
| Thanh toán | REG-008 | Liên kết hệ thống thanh toán | New User | Liên kết thông tin với hệ thống thanh toán (như Paid, v.v.) cho thanh toán hóa đơn và nhập các thông tin cần thiết. |
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
| Quản lý Meeting khách hàng | OFX-002 | Danh sách URL điều chỉnh lịch đã đăng ký | User | Hiển thị danh sách các URL điều chỉnh lịch trình đã đăng ký trước đó 【Tên】【Tên User đăng ký】 |
| Quản lý Meeting khách hàng | OFX-003 | Đăng ký điều chỉnh lịch trình Meeting | User | Thiết lập liên kết tài nguyên (Resource), chọn thành viên tham gia, tự động hóa đảm bảo phòng họp.<br>Chọn AI Template Biên bản (Meeting Minutes).<br>Đối với phòng họp Multi-device mode, tự động phân bổ chỗ ngồi trước.<br>Upload tài liệu (PDF/Image) chia sẻ trong meeting, hoặc chọn từ Google Drive cá nhân. |
| Quản lý Meeting khách hàng | OFX-004 | Chi tiết/Chỉnh sửa điều chỉnh lịch trình Meeting, Hiển thị URL | User | Hiển thị status (trạng thái điều chỉnh lịch trình khách hàng), thông tin chi tiết, URL đã tạo.<br>Trong màn hình có thể thay đổi các thông tin: Thiết lập liên kết tài nguyên, chọn thành viên tham gia, thiết lập tự động đảm bảo phòng họp, AI Template định dạng Biên bản. Đối với Multi-device mode có thể điều chỉnh chỗ ngồi.<br>Xóa, upload thêm tài liệu (PDF/Image) chia sẻ trong meeting, hoặc chọn từ Google Drive cá nhân. |
| Quản lý Meeting khách hàng | OFX-005 | Danh sách tình trạng sử dụng phòng họp | User | Hiển thị danh sách tình trạng sử dụng các phòng họp. |
| Quản lý Meeting khách hàng | OFX-006 | Danh sách lịch Meeting dự kiến | User | Hiển thị danh sách lịch meeting đã được đặt trước. (Bao gồm cả meeting được chia sẻ) |
| Quản lý Meeting nội bộ | OFX-007 | Danh sách lịch Meeting nội bộ dự kiến | User | Hiển thị danh sách các meeting nội bộ đã đặt trước hoặc được chia sẻ |
| Quản lý Meeting nội bộ | OFX-008 | Đặt phòng họp mới (Dành cho nội bộ) | User | Màn hình đặt phòng họp mới: Liên kết Calendar của bản thân với Calendar của phòng họp, kiểm tra và chọn khung giờ mà cả thành viên và phòng họp đều trống.<br>Chọn AI Template cho Biên bản.<br>Đối với phòng họp Multi-device mode, tự động phân chỗ ngồi trước.<br>Xóa, upload thêm tài liệu, hoặc chọn từ Google Drive cá nhân. |
| Quản lý Meeting nội bộ | OFX-009 | Chi tiết đặt phòng họp | User | Màn hình chi tiết thông tin đặt phòng họp. Có thể chỉnh sửa/xóa.<br>Cài đặt Public thông tin meeting (Cấp quyền xem/sửa cho toàn bộ phòng ban hoặc User chỉ định).<br>Trong Multi-device mode có thể chỉnh sửa chỗ ngồi.<br>Thay đổi AI Template Biên bản. Thêm/xóa tài liệu hoặc chọn từ Google Drive.<br>Nếu nhấn chỉnh sửa/xóa sẽ hiện Modal Confirm, chọn tiếp tục hoặc Cancel.<br>Nếu xóa thành công, trở về màn hình danh sách. |
| Quản lý doanh nghiệp khách hàng | OFX-010 | Danh sách doanh nghiệp khách hàng | User | Danh sách khách hàng hiện đang được đăng ký.<br>Hiển thị danh sách tên doanh nghiệp, địa chỉ, số điện thoại, người phụ trách, số lượng lịch sử đến thăm.<br>Có thể tìm kiếm, filter. |
| Quản lý doanh nghiệp khách hàng | OFX-011 | Chi tiết thông tin doanh nghiệp khách hàng | User | Hiển thị Tên doanh nghiệp, địa chỉ, số điện thoại, người phụ trách, số lần đến thăm.<br>Hiển thị timeline lịch sử đến thăm, log ra vào phòng, biên bản.<br>Cũng sẽ hiển thị các Todo List, Transcription, Biên bản meeting và Phân tích Meeting (商談) bằng AI gần nhất. |
| Quản lý doanh nghiệp khách hàng | OFX-012 | Chỉnh sửa thông tin chi tiết doanh nghiệp | User | Màn hình cho phép chỉnh sửa thông tin Tên doanh nghiệp, địa chỉ, số điện thoại, người phụ trách, số lần đến thăm. |
| Quản lý doanh nghiệp khách hàng | OFX-013 | Chi tiết lần đến thăm của doanh nghiệp | User | Hiển thị thông tin chi tiết của đợt đến thăm được chọn (Transcription, Biên bản, Todo List, Phân tích meeting AI, v.v.).<br>Có thể phát lại file Audio, phát audio đồng bộ cùng văn bản Transcription (có thể click đoạn text để phát đoạn audio tương ứng v.v.). |
| Quản lý doanh nghiệp khách hàng | OFX-014 | Chỉnh sửa chi tiết lần đến thăm | User | Màn hình cho phép thêm, chỉnh sửa Memo.<br>Có thể vừa nghe Audio bằng chế độ Play Audio hoặc Audio đồng bộ Text để xác nhận và chỉnh sửa nội dung.<br>Màn hình cho phép Edit manual lại các Biên bản đánh giá AI, Todo List, Phân tích meeting bằng AI.<br>Có thể đổi Template AI và bắt AI Generate lại Biên bản.<br>Cài đặt cấp quyền Share tài liệu cho nhóm/user được chỉ định. |
| Quản lý doanh nghiệp khách hàng | OFX-015 | Auto-Generate Email cảm ơn sau meeting | User | Màn hình tự động generate draft Email cảm ơn sau meeting (AI Email Template tự động áp dụng định dạng và chữ ký cá nhân) / Màn hình Confirm |
| Thiết lập cá nhân User | OFX-016 | Màn hình TOP thiết lập cá nhân | User | 【Đổi ID/Password】【Liên kết Calendar】【Thiết lập bảo mật và quyền riêng tư (Privacy & Security)】【Thiết lập liên kết Tool bên ngoài】【Thiết lập Chữ ký (Signature)】 |
| Thiết lập cá nhân User | OFX-017 | Đổi User ID/Password | User | Có thể thay đổi User ID / Password |
| Thiết lập cá nhân User | OFX-018 | Thiết lập liên kết Calendar | User | Google Calendar hoặc Outlook Calendar |
| Thiết lập cá nhân User | OFX-019 | Thiết lập Privacy & Security | User | Các mục có thể thiết lập:<br>- Phạm vi Public Default của Biên bản meeting (Chỉ mình tôi / Chỉ những người tham gia)<br>- Cài đặt chia tách hiển thị "Memo nội bộ" và "Share cho khách hàng" |
| Thiết lập cá nhân User | OFX-020 | Thiết lập chi tiết Đặt lịch (Booking) | User | Các ngày trong tuần có thể Booking, Khung giờ, Ngày có thể dùng, Thiết lập Khung thời gian khóa (không cấp quyền booking) |
| Thiết lập cá nhân User | OFX-021 | Thiết lập liên kết Tool bên ngoài | User | Màn hình thiết lập link Webhook với Slack/Teams... |
| Thiết lập cá nhân User | OFX-022 | Liên kết Google Drive | User | Dùng OAuth 2.0 (Read-only) để nhận Access Token và lưu lại |

### 📂 Enterprise Admin (Quản trị doanh nghiệp)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Thiết lập riêng Admin | ADMX-001 | Danh sách Admin Menu | Admin | Chỉ hiển thị cho những User login bằng tài khoản Admin |
| Dashboard | ADMX-002 | Admin Dashboard | Admin | Lịch trình trong ngày<br>Trạng thái sử dụng phòng họp<br>Thời lượng dùng AI summarize (Cá nhân)<br>Thời lượng AI summarize còn lại (Toàn tổ chức)<br>Hiển thị Admin Menu |
| Quản lý User | ADMX-003 | Danh sách User | Admin | Danh sách User đang được đăng ký. Tên, ID, Email, Department.<br>Button list: 「Đăng ký mới」, 「Import CSV Hàng loạt」, 「Tải Template CSV」. ※ Khi chạm limit user đăng ký, thì hiển thị nút 「Yêu cầu thêm số lượng giới hạn User」. |
| Quản lý User | ADMX-004 | Đăng ký mới User | Admin | Nhập 【Name】【ID】【PASS】【Email】【Department (ADMX-010)】 |
| Quản lý User | ADMX-004-1 | Yêu cầu thêm Slot giới hạn User | Admin | Màn hình request mua thêm User khi vượt quá giới hạn User cơ bản. Nhập số lượng add thêm, check số tiền tính theo pro-rate (tỷ lệ ngày) tháng hiện tại và số tiền subscription từ tháng sau trước khi submit. |
| Quản lý User | ADMX-004-2 | Hoàn tất yêu cầu add User Slot | Admin | Màn hình hoàn tất request cấp thêm slot. Hiển thị nội dung cho thấy admin đã có thể mời và tạo account lập tức mà ko cần chờ verify payment. |
| Quản lý User | ADMX-005 | Confirm đăng ký mới | Admin | Màn hình Confirm trước khi Save, Sau khi Save hệ thống sẽ send Email + ID Pass |
| Quản lý User | ADMX-006 | User Chi tiết/Chỉnh sửa/Xóa | Admin | Xác nhận và chỉnh sửa thông tin 【Tên】【ID】【PASS】【Email】【Department (ADMX-010)】.<br>Khi nhấn Update/Delete sẽ hiện Modal confirm, có thể Continue hoặc Cancel. |
| Thiết lập phòng họp | ADMX-007 | Danh sách phòng họp | Admin | Nhấn các nút như: Thiết lập doanh nghiệp, Đăng ký phòng họp mới, Chi tiết phòng họp, Cài đặt Tablet Lễ tân (Reception Tablet)<br>Hiển thị các Tên phòng họp, Tầng, Thiết bị trong phòng họp... |
| Thiết lập phòng họp | ADMX-008 | Đăng ký phòng họp mới | Admin | ・Chọn Dropdown 【Tầng】 từ ADMX-010, Chọn nhiều Dropdown cho 【Thiết bị】, nhập Tên phòng, Số lượng người tối đa, Upload hình ảnh bản đồ chỉ dẫn.<br>・Chọn Single-mode hoặc Multi-device mode.<br>・Hệ thống sẽ Auto-generate ra "QR code thiết bị dành riêng cho phòng" để Bind (liên kết) tablet với phòng học.<br>・Sau khi Submit đăng ký hoàn tất, sẽ xuất QR Code (có nút download). |
| Thiết lập phòng họp | ADMX-009 | Chi tiết phòng họp (Edit, Xóa) | Admin | ・Màn hình cho phép đổi Dropdown【Tầng】, thay đổi/xóa 【Thiết bị】, Tên phòng, Số người tối đâ, hình ảnh hướng dẫn.<br>・Có thể thay đổi Single-mode / Multi-device mode.<br>・URL Map hướng dẫn đến Meeting Room được show dưới dạng QR Code (Có thể download).<br>・Hiển thị "QR Code liên kết thiết bị với meeting room" (Có thể download). |
| Cài đặt Master | ADMX-010 | Danh sách Master Data: Tên đối tác (Vendor), Tên Phòng Ban (Department), Mục đích, Tầng, Thiết bị phòng họp | Admin | Màn hình Master Data. List các danh sách Vendor, Department, Mục đích, Tầng, Thiết bị để cài đặt vào Tablet Lễ tân.<br>Có thể thêm, sửa, xóa trực tiếp trên data grid (dạng Table). |
| Cài đặt Reception Màn Hình chờ | ADMX-011 | Logo Corporate & Hình Background | Admin | Upload/Sửa Logo và Ảnh Background màn hình chờ |
| Cài đặt Reception Màn Hình chờ | ADMX-012 | Cài đặt Screensaver | Admin | Upload Image Slide/ Video file và cài đặt timer lặp. |
| Setup Tablet Lễ Tân | ADMX-013 | Danh sách Tablet Lễ Tân (Reception Tablet) | Admin | Hiển thị list Reception Tablet đã đăng ký |
| Setup Tablet Lễ Tân | ADMX-014 | Đăng ký mới Tablet Lễ Tân | Admin | Đặt ID & PASS cho tablet, có thể chọn list vendor, department, mục đích, thiết bị và các setup Noti. |
| Setup Tablet Lễ Tân | ADMX-015 | Chi tiết Tablet Lễ Tân | Admin | Màn hình Info Tablet Lễ Tân: ID&PASS, Vendor, Department, Mục đích, thiết bị, Notification.<br>Cung cấp nút Update/Delete đi kèm Confirm Modal Dialog. |
| Hóa đơn Payment | ADMX-016 | Payment Menu | Admin | Lựa chọn giữa Thông tin Doanh nghiệp/Thanh toán hoặc Danh sách Invoice (Hóa đơn). |
| Hóa đơn Payment | ADMX-017 | Thông tin Doanh nghiệp / Thanh toán | Admin | Hiển thị thông tin đăng ký payment, company info.<br>Hiển thị Plan hiện tại, Quota hiện tại (vd như Số giờ Transcription), và Discount đã được Apply. |
| Hóa đơn Payment | ADMX-018 | Đăng ký / Update Company Info | Admin | Bên cạnh Tên, địa chỉ.. Admin có thể setup Giới hạn sử dụng AI (Chế độ Unlimited / Limit Setup Quota) và cài đặt gửi Alert Notification khi quota bị chạm tới giới hạn. |
| Hóa đơn Payment | ADMX-019 | Đăng ký / Update Thông tin payment | Admin | Đăng ký, Update, Check phương thức payment (Credit card, Trả sau..). |
| Hóa đơn Payment | ADMX-020 | Danh sách hóa đơn (Invoice) | Admin | Show list Invoice từ quá khứ đến tháng hiện tại |
| Hóa đơn Payment | ADMX-021 | Chi tiết Hóa đơn (Invoice) | Admin | Click vào từng Invoice month để xem Line Item |
| Hóa đơn Payment | ADMX-022 | Màn hình thay đổi Plan / Thanh toán | Admin | Check lựa chọn Plan target, Nhập mã Promotion Code và route đến Service Payment Gateway |
| Quản lý Log Truy cập Khách | ADMX-023 | Lịch sử đến thăm | Admin | Search/Filter: theo Ngày, Tháng, Năm.<br>Click List result sẽ bung Modal Info details.<br>Data Export: có thể xuất CSV theo query. |
| Quản lý dùng AI | ADMX-024 | Quản lý hạn mức thời gian tóm tắt AI | Admin | Màn hình Hiển thị: Tổng hợp Quota usage, Remaining quota, Prepaid Quota, và Bill postpaid (trả sau) của AI summarize của toàn tập đoàn. |
| Quản lý dùng AI | ADMX-025 | Mua thêm Data Thời gian AI | Admin | Bảng Input mua thêm (Prepaid style). Confirm Giờ cần mua, Total value, và Select date activation trước khi submit Request. |
| Quản lý dùng AI | ADMX-026 | Confirm Mua thêm Data AI | Admin | Recap bảng confirm. Sau khi chọn Submit -> routing đến Service Payment. |
| Quản lý dùng AI | ADMX-027 | Cài đặt giới hạn sử dụng AI | Admin | Logic khi quota vươt: "Chuyển thành Postpaid Tự động", Hoặc "Force Stop Service". |
| Quản lý dùng AI | ADMX-028 | Cài đặt Alert Usage AI | Admin | Cài đặt Rule Alert (Trigger gửi ở mốc nào, Channel nhận: slack/mail, Target audience, Timing...). |
| Hóa đơn Payment | ADMX-029 | Recap Chi tiết sử dụng AI/ Hóa đơn AI | Admin | Hiển thị: (Giờ sử dụng free trong Plan / Giờ xài Prepaid / Giờ xài Postpaid), kết hợp Forecasting Billing cuối tháng. |
| Template AI | ADMX-030 | Danh sách Template AI | Admin | Hiển thị danh sách các Template AI (dành riêng cho Biên bản/ hoặc Email...) |
| Template AI | ADMX-031 | Thêm/Sửa Template AI | Admin | Update AI Prompts, Format, và các Condition Default Apply. |

### 📂 Phân bổ lịch trình & Đặt chỗ (Visitor)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Booking Regis | GRES-001 | Màn hình Select Date/Time | Visitor | Logo Corporate, Select Component Calendar (Auto AND logic tình trạng phòng và Tình trạng schedule user), Setup Timezone. |
| Booking Regis | GRES-002 | Nhập thông tin Guest | Visitor | Nhập Tên doanh nghiệp, Tên, email, mobile, format Offline/Online, số lượng người tham gia |
| Booking Regis | GRES-003 | Confirm Registration | Visitor | Confirm lại thông tin đã nhập có lỗi không |
| Booking Regis | GRES-004 | Hoàn tất Regis | Visitor | Tự ghi vào lịch bên User Calendar. Nếu là offline, sẽ chọn phòng cho khớp, build ra QR Code tự động/Booking Code tự động và Auto mail. |

### 📂 Tablet Lễ Tân (Reception)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Sign In | UKET-001 | Tablet ID & PASS input | User, Admin | System requirement bắt log in Tablet 1 tháng 1 lần. |
| Standby | UKET-002 | Screensaver / Digital Signage | Visitor | Play các asset configure ở ADMX-011, ADMX-012.<br>Tap vào screen để Start. |
| TOP Screen | UKET-003 | Lựa chọn Lễ Tân | Visitor | Các nút: "Đã có QR Code Booking" / "Chưa Appointment" / "Logistics Vendor" |
| Quét QR Code | UKET-004 | Quét Booking QR Code | Visitor | Bật camera quyét QR Code (Sinh ra ở GRES-004) |
| Nhập Booking code | UKET-005 | Input Booking Code | Visitor | Nhập PinCode sinh ra ở GRES-004 |
| No-Appointment | UKET-006 | Visitor Info Input | Visitor | Khách nhập tay list field sau:<br>Company name<br>Tên<br>Department muốn gặp<br>Mục đích<br>Khác |
| Vendor Input | UKET-007 | Lựa chọn Vendor (Đơn vị Giao Vận) | Visitor | Lựa danh sách pre-configured (Yamato, Sagawa...) |
| Notification | UKET-008 | Standby màn hình (TH không có booking trước) | Visitor | Hệ thống trigger gọi sang thiết bị PIC (Slack/Team Webhook). Tablet hiện "Vui Lòng chờ Contact". |
| Notification | UKET-009 | Màn hình WebRTC Gọi Điện (Voice Call) | Visitor | Nếu PIC muốn nói chuyện, Audio của Guest được truyền còn màn hình hiển thị live video của PIC. |
| Notification | UKET-010 | Chỉ đường Map & QR Code | Visitor | Giao diện hiện Bản Đồ (Map) đường đi đến Meeting room + Render cái Image ra QR code cho guest sài quét qua đt đi tìm phòng riêng. |
| Notification | UKET-011 | Noti Success | Visitor | Back to TOP HOẶC tự động 1 phút ko tap. |

### 📂 Ra Vào (入退出) Phòng Họp

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Setup Khởi Tạo | ENTR-001 | Link device vô Meeting Room | User | Quét QR Code để Bind cái tablet vô cái Database của phòng.<br>Trong Single-mode, max 1 tablet.<br>Trong Multi-device mode: Quét QR -> Select Slot/ Vị trí người ngồi cho host và list member. |
| Confirm Book | ENTR-002 | Booking Data / Lịch | User, Visitor | ・Time hiện tại, Room name.<br>・Info Meeting kế tiếp (Title, thời gian, Host).<br>・Status nút cho phép "Enter" hoặc "Immediate Enter" (即入室 - Cho họp gấp). |
| Immediate Enter (Họp gấp) | ENTR-003 | Đăng ký thông tin Meeting | User | Choose "Họp Khách Hàng" hay "Meeting nội bộ". Nhập Tên doanh nghiệp.<br>Setup Assignee.<br>Setup T/G (Duration) họp, kiểm tra Collision với booked schedule, nếu có lỗi thì block Submit. |
| Pre-Enter | ENTR-004 | Màn hình Pre-Enter (Multi-device) | User | Render List list Guest/Assignee -> Tap vô "Join" để định danh |
| Pre-Enter | ENTR-005 | Màn hình Parent Device (Chủ phòng / Host) | User | Màn hình host tô màu Bold ghi "**Ngài A (Host)**". Host confirm để navigate sang Routing Vị Trí Ghế. |
| Pre-Enter | ENTR-006 | Final Seat Adjustment (Host) | User | Draw các seat trong phòng.<br>Kéo thả Seat -> Đổi tên người ngồi -> Click "Thực Hiện (Enter) " -> Accept cho phòng vào phiên làm việc. |
| Pre-Enter | ENTR-007 | Màn hình Child Device (Khách/Chỗ khác) | Visitor, User | Chờ user confirm "Tham Gia / Join", khi nhấn -> Auth qua Seat -> Ready! |
| Room Start | ENTR-008 | Room Start - Check record info | Visitor, User | Màn hình của Host cho bật tính năng Audio Recording (checkbox). <br>Ko recording: Vào meeting ngay.<br>Có recording: Show alert consent "Bắt Đầu Record", Child Device guest phải ấn agree. |
| In-Meeting | ENTR-009 | Giao diện có Recording | Visitor, User | Tính năng: Voice Announcement.<br>Live text Transcription (Ghi âm sang text trực tiếp - Speech 2 Text).<br>Reaction emoji live vào text Speech.<br>Comment/Chat Live.<br>Pin text lên board.<br>Mention Function.<br>Memo Func.<br>Share màn/Laser pointer Mirror qua các Child Device sync mode.<br>Timeout 5 phút sau schedule -> Kick.<br><br>Giao diện Host (Parent) Only:<br>・Nút Extend (+15mins check limit)<br>・End Session. |
| In-Meeting | ENTR-010 | Giao diện Không Recording | Visitor, User | Tính năng Basic:<br>Comment/Chat Live.<br>Mention Function.<br>Memo Func.<br>Share màn/Laser pointer Mirror qua các Child Device sync mode.<br>Timeout 5 phút sau schedule -> Kick.<br><br>Giao diện Host (Parent) Only:<br>・Nút Extend (+15mins check limit)<br>・End Session. |
| Out-room | ENTR-011 | Exit Finish | Visitor, User | Hiển thị màn Exit, Auto reboot lại ENTR-002 |

### 📂 TNG Admin

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Menu | - | Menu | - | - |
| Quản lý Hợp Đồng| ADM-001 | Danh sách Công Ty Hợp Đồng | TNG Admin | Dashboard hiển thị info công ty (Tên, Trạng thái (Status), <br>Plan, Expiration, Quota số lượng user, AI Quota, Payment Status). |
| Quản lý Hợp Đồng| ADM-002 | Cập Nhật Công Ty Hợp Đồng | TNG Admin | Cập nhật Name, Address, Incharge Person, Phone, Email, Method pay.<br>Overrive setup Free User/ AI summarization Time theo từng KH nếu cần. |
| Quản lý Hợp Đồng| ADM-003 | Confirm Update | TNG Admin | Xác nhận các thay đổi |
| Quản lý Hợp Đồng| ADM-004 | Danh sách Hóa Đơn (Billing List) | TNG Admin | Tất cả invoice của tất cả Công ty / Corp |
| Quản lý Hợp Đồng| ADM-005 | Chi tiết Billing | TNG Admin | Các line item trong 1 hóa đơn |
| Quản lý Plan | ADM-006 | Màn hình Master quản lý Plan | TNG Admin | Setup 4 Plan type (Chỉ Setting / Setting+Room / Full Single / Full Team). |
| Quản lý Plan | ADM-007 | Chi tiết/Update Plan Cở Bản | TNG Admin | Update price / func allow của cái Plan cơ bản, có apply data propagation sang các Corp Account khác không. |
| Quản lý Promo | ADM-008 | Quản lý Promotion Code | TNG Admin | Tạo coupon/promo discount cho new Corp. Tên (vd: WELCOME2026), Value Rate (%), Value Money ($), Date expired, Count usage. |
| Quản lý Thiết Bị Tồn | ADM-009 | Device Master Control | TNG Admin | Thêm bớt Tên thiết bị vật lý cho thuê (Tablet, Chân kê, Mic). Configure Rate fee (Đơn giá cho/ bán). Propagation Price rules qua Corp accounts. |
| Quản lý Thiết Bị Tồn | ADM-010 | Tổng Quát Phân Tích (Analytics) AI Usage | TNG Admin | Check toàn bộ corp usage data (Postpaid / Prepaid proportion) List company overdraft AI |
| Quản lý Thiết Bị Tồn | ADM-011 | Cài đặt AI Limit Policy | TNG Admin | Tự động charge postpaid (Pay-as-you-go) HAY là Soft-lock cho mọi hệ thống Global |
| Billing/Payment | ADM-012 | Quản lý hóa đơn Postpaid AI Usage | TNG Admin | Export data summary aggregate pay-as-you-go của các Corp bill. |

### 📂 Các chức năng khác (Error / Log)

| Phân loại | Screen ID | Tên màn hình | Role thao tác | Tổng quan màn hình |
| :--- | :--- | :--- | :--- | :--- |
| Lỗi | ERR-001 | 403 Forbidden | Visitor, User, Admin, TNG Admin | Chặn theo Role quyền |
| Lỗi | ERR-002 | 404 Not Found | Visitor, User, Admin, TNG Admin | Access UI/URL ko tồn tại. |
| Lỗi | ERR-003 | 500 Internal Server Error | Visitor, User, Admin, TNG Admin | Render lỗi internal server cho user. |
| Maintaince | ERR-004 | Maintenance (Bảo trì) | Visitor, User, Admin | Render splash bảo trì hệ thống và các chức năng tạm ngưng. |
| System Log | LOG-001 | DS Access Log, Search, Export | TNG Admin | Track login, URI path data của Corp Users (IP, Date, Device type).<br>Range Max query = 90 days giới hạn.<br>Export to CSV allow. |
| System Log | LOG-002 | DS Operation Log (Log Tha tác CRUD) | TNG Admin, Admin | Audit Log record lại Delete/Update/Create trên Corporate Data. Search User ID/ Date..<br>Range Query Max = 90 days giới hạn.<br>Export ra CSV allow. |
| System Log | LOG-003 | Khai Báo Rules Alert Log Monitor | TNG Admin | Tạo Alert rules dựa trên Action Threshold (Ví dụ delete records > 5 requests trong 1s). Report Target channels. |
