### Laravel-Controller:
- Là cửa ngõ bị tấn công, nên mọi param của user đưa lên đểu phải được filter, kiểm tra tính hợp lệ trước khi sử dụng.
- Mọi việc kiểm tra cũng như gắn params nên cố gắng đẩy vào Controller, chỉ những thứ không thể check trong controller mới đẩy qua service.
- Những hàm tốn nhiều thời gian thì chạy trong Controller(bắt người dùng đợi) -> nên đẩy qua async cron tab để chạy và update status(lưu lại cron log trong bảng LogTask)

### Laravel-Service:
- Mặc định đây là zone an toàn, không cần verify lại param nên code những nơi gọi service lên phải chắc chắn là params đã được filter, check đầy đủ. 


### Logic

- Những nơi có vòng lặp với số lần lặp lớn cần tối ưu hóa code.
- Quản lý, tương tác mọi thứ theo logic từ to đến nhỏ.
    ví dụ: 

    1 user có nhiều project, 1 project có nhiều documents thì.
    + đường dẫn lưu file: users/userid/projects/projectid/documents/your_document_here
    + giao diện thao tác xem file: list all projects -> project details N -> list all documents -> your_document_here
    
- Core folder chỉ dùng để chứa components, utils, services mà có thể xài ở nhiều chỗ, còn lại move vào modules hết, (ví dụ code hiện tại có folder core/pages/Distributor/... thì move nó vô modules/Distributor/pages/... )

### Secure coding

- không trust bất kì thông tin gì của user gửi lên, cần kiểm tra logic, quyền trước khi thực hiện.

- hạn chế sử dụng Raw query(raw, selectRaw, orderRaw ...) của laravel vì vấn đề sql injection. 
https://laravel.com/docs/8.x/queries#raw-expressions

- không dùng blade {{! user_input }}, chỉ nên sử dụng blade {{}}
https://laravel.com/docs/8.x/blade#displaying-unescaped-data

- đối với VueJs thì không sử dụng v-html để in ra user_input
https://vi.vuejs.org/v2/guide/syntax.html#HTML-thuan-tuy


### Note

- Ace, xài yarn (bắt buộc) thay vì xài npm nha ( lý do: yarn nhanh hơn + mình chỉ cần xài 1 trong 2)
- Gom file html scss vào file vue luôn (bắt buộc)
- Lúc code nếu có vấn đề gì về eslint thì ace post lên channel #work, để disscuss, không expect là mọi người tự vô chỉnh trong file .eslintrc.js + hạn chế sử dụng eslint-disable
- Không upgrade những package không liên quan tới PR của mình
- Xác định đúng packet cài vào cần nằm trong dependencies hay devDependencies (Packages that are only needed for local development and testing).
