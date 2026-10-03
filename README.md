# C++ lớp 8 — sáu bài học trên web

Trang học: https://vuongndlst.github.io/cpp-8/

## Mạch một tiết 60–70 phút

1. Giáo viên mở một tình huống vui, cho học sinh dự đoán và nối với Scratch.
2. Học sinh vào web game **cá nhân**. Mỗi trạm có phần đọc ngắn, câu hỏi, một thao tác chơi và một thử thách C++ tự viết. Giáo viên cho dừng sau từng trạm để hỏi đáp và chốt kiến thức; học sinh ghi bài vào vở. Trạm cuối là thử thách cá nhân và chứng chỉ PDF.
3. Giáo viên cùng lớp làm mẫu một bài qua Input, Output, mã giả, C++, rồi thử đầu vào khác.
4. Nhóm 1–3 học sinh làm nhiệm vụ **khác bài cá nhân** ở `baiNN/thu-thach.html`, kiểm tra chương trình và xuất **một PDF** để nộp Canvas. Nhóm trình bày, lớp phản hồi.
5. Học sinh trả lời một câu thoát học cá nhân; Kahoot năm câu dùng để chốt bài.

Slide, hướng dẫn giáo viên, Canvas và Kahoot nằm trong thư mục từng bài của khóa C++ lớp 8. Slide giữ hình thức của Bài 1 và có điểm dừng, câu hỏi, phần ghi bài, ví dụ code, bài mẫu chung và đáp án. Đừng giao tất cả các trạm web cùng lúc.

## Phạm vi từng bài

| Bài | Nội dung chính | Game cá nhân | Bài nhóm |
|---|---|---|---|
| 1 | Cấu trúc chương trình, `cout`, `;`, xuống dòng, chú thích | Robot qua vật cản | Viết chương trình in nhiều dòng vui |
| 2 | Biến `int`, `cin`, phép toán số nguyên | Xưởng băng chuyền: bắt thùng đúng làn | Quầy vé hội chợ |
| 3 | So sánh, `if`, `else` | Cáo tìm đường trong mê cung | Cổng kiểm tra điểm |
| 4 | Vòng lặp `for` đếm từ 1 | Drone canh nhịp qua quỹ đạo | Bảng nhân |
| 5 | Hàm `void`, định nghĩa và gọi hàm | Robot lắp mô đun đúng thứ tự | In một hình bằng hàm |
| 6 | Dự đoán, chạy thử, sửa lỗi, ôn tập | Pháo đài tìm lỗi | Kiểm thử chương trình |

Bài 1 đã xuất bản trước. Bài 2–6 dùng bộ trang và dữ liệu `v2`. Giáo viên có thể đổi tên, tình huống, câu hỏi trong `assets/v2-lessons.js`, rồi kiểm tra lại slide, Canvas và Kahoot tương ứng. Đối tượng là học sinh lớp 8, nên mỗi bài chỉ có một trọng tâm mới và ví dụ ngắn.

## Đường dẫn và cấu trúc

- `index.html`: trang chủ sáu đảo 3D; thẻ bài là đường vào thuận tiện.
- `baiNN/index.html`: giới thiệu ngắn, mục tiêu, lối vào game cá nhân và thử thách nhóm.
- `baiNN/game.html`: web game cá nhân; `quest.html` chuyển tới đây cho liên kết cũ.
- `baiNN/thu-thach.html`: quy trình nhóm, biên dịch và chấm tự động, xuất báo cáo PDF.
- `assets/v2-lessons.js`: nguồn nội dung và bộ kiểm tra Bài 2–6.
- `assets/v2-game.js`: năm cơ chế chơi khác nhau. `assets/v2-group.js`: hoạt động nhóm.
- `assets/v2-common.js`, `assets/v2-compiler-worker.js`, `assets/v2.css`: giao diện code, chạy C++ và phong cách chung.
- `bai01/vendor/clang-wasm/`: trình biên dịch C++ chạy trong trình duyệt, dùng chung cho các bài. Lần đầu dùng cần tải bộ biên dịch; các lần sau trình duyệt có thể dùng bộ nhớ đệm.
- `tools/`: script dựng trang, dữ liệu xuất, slide, Kahoot và tài liệu giáo viên. Chúng phục vụ bảo trì, không phải nội dung học sinh cần mở.

Tên lớp cố định 8A1–8A10. Tên, lớp và tiến độ lưu trên trình duyệt của từng máy, không gửi lên máy chủ. Đổi máy hoặc xóa dữ liệu trình duyệt sẽ mất tiến độ. Chứng chỉ và báo cáo được tạo trên máy học sinh; giáo viên cần xem file PDF nộp trên Canvas khi đánh giá. Chấm code tự động so đầu ra của chương trình sau khi chạy nhiều bộ dữ liệu; đó là phản hồi luyện tập, không thay cho đánh giá cách giải thích của học sinh.

## Dựng và kiểm tra

Từ thư mục gốc của kho, mở máy chủ web tĩnh rồi vào `http://localhost:8766/`:

```text
python -m http.server 8766
```

Sau khi sửa `assets/v2-lessons.js`, chạy các script theo thứ tự: `tools/export_v2_lessons.mjs`, `tools/build_v2_pages.py`, `tools/build_v2_slides.py`, `tools/build_v2_docs.py`, `tools/build_v2_kahoot.mjs`. Các script tạo slide, Kahoot và tài liệu ở thư mục ngang cấp kho để không xuất bản tài liệu giáo viên lên web. Kiểm tra bằng trình duyệt từng cơ chế game, bài code và PDF; kiểm tra bố cục tất cả slide trước khi chuyển vào thư mục từng bài.

Game tải Three.js từ jsDelivr. Trình biên dịch dùng `clang-wasm` đi kèm kho. Một số máy trường có thể mất thời gian ở lượt biên dịch đầu; nên mở sẵn một game trước giờ học. Các nút và thẻ bài vẫn dùng được với bàn phím và máy cảm ứng. Cơ chế và khung cảnh lấy cảm hứng từ game học tập, không dùng mã hay hình của Interland.

## Nguồn tham khảo

- Cách chia chủ đề cú pháp, xuất dữ liệu và dòng mới: [W3Schools C++](https://www.w3schools.com/cpp/).
- Cú pháp và hành vi C++: [bản thảo tiêu chuẩn C++](https://isocpp.org/files/papers/n4296.pdf).
- Hình khối Scratch: [Scratch Blocks](https://github.com/scratchfoundation/scratch-blocks) và [scratchblocks](https://github.com/scratchblocks/scratchblocks).
- Trình biên dịch chạy trong trình duyệt: [clang-wasm](https://github.com/live-codes/clang-wasm).
