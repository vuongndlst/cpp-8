# Lập trình C++ khối 8 — Bài học trên web

Trang tĩnh dành cho **học sinh lớp 8**. Mỗi bài có thế giới đi cảnh 3D và trang đọc cùng nội dung.
Học sinh qua từng chặng, dừng để trao đổi và ghi bài, rồi mới làm chặng tiếp theo. Checkpoint cuối
đạt 8/10 câu thì tải chứng chỉ PNG để nộp lên Canvas.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| `index.html` | Trang chủ — danh sách bài (đọc `assets/khoa.js`) |
| `baiNN/index.html` + `baiNN/data.js` | Một bài học. `data.js` sinh bằng `_Scripts/build_web.py` của bài đó |
| `baiNN/quest.html` | Cổng vào game 3D của mỗi bài; từng trạm mở đúng một chặng |
| `baiNN/img/` | Hình minh họa của bài |
| `assets/app.js`, `assets/style.css` | Bộ chạy và giao diện dùng chung |
| `assets/quest3d.js`, `assets/quest3d.css` | Bộ chạy và giao diện 3D dùng chung |
| `assets/scratch/bai01.png` … `bai05.png` | Hình khối lệnh Scratch 3 bằng tiếng Việt, dùng trong chặng phù hợp |
| `_Chung/build_quest.py` | Màu, tên, ký hiệu và cảnh riêng của sáu bài; chạy để dựng lại `quest.html` |
| `kiem-tra.html` | Giáo viên dán danh sách `Họ tên ; Lớp ; Mã` để đối chiếu mã chứng chỉ |

## Cách dạy theo chặng

- Bài 1–5: ba trạm kiến thức và một trạm thử thách cặp đôi. Bài 6: năm trạm ôn tập. Giáo viên giao **một trạm mỗi lần**; sau checkpoint, màn hình dừng để học sinh giải thích điều vừa làm, giáo viên chốt và học sinh ghi bài. Chỉ khi giáo viên cho phép mới bấm đi tiếp.
- Video nhúng là **xem thêm**, không cộng vào thời gian làm việc chính: Bài 1 [Code.org – Input/Output](https://www.youtube.com/watch?v=DKGZlaPlVLY), Bài 2 [Harvard CS50 – Operators](https://www.youtube.com/watch?v=f1xZf4iJDWE), Bài 3 [Code.org – If Statements](https://www.youtube.com/watch?v=KpMTXwlU270), Bài 4 [Code.org – For Loops](https://www.youtube.com/watch?v=EF3laugNVCI), Bài 5 [Code.org – Functions with Parameters](https://www.youtube.com/watch?v=e9qjXKaeDHg). Video tiếng Anh có chú thích tiếng Việt về phần cần quan sát. Bài 6 là ôn tập, kiểm tra nên không thêm video mới.
- Hình khối Scratch 3 được dựng bằng [scratchblocks](https://github.com/scratchblocks/scratchblocks) từ tên khối trong bản dịch tiếng Việt, dựa trên [thiết kế Scratch Blocks](https://github.com/scratchfoundation/scratch-blocks). Đây là hình minh họa đúng dạng và màu khối, không phải ảnh chụp giao diện Scratch. Bài 3 hiển thị nhãn “nếu không” trên nhánh `else` để học sinh đọc dễ hơn. Trên web có chú thích nguồn ngay dưới hình.
- Slide dạy theo từng trạm của Bài 1–5 nằm ngay trong thư mục từng bài, tên kết thúc `_DayTheoTram.pptx`. Sau mỗi checkpoint có slide hỏi đáp và ghi bài. Các slide này được ghép vào PPTX gốc để giữ nguyên hiệu ứng và dữ liệu ClassPoint. Bài 6 là giờ ôn tập và kiểm tra, nên giáo viên dùng game ôn tập trước giờ kiểm tra hoặc ở nhà; slide kiểm tra hiện có giữ nguyên.
- Game đi bằng WASD hoặc phím mũi tên; E/Enter để vào trạm. Menu dịch chuyển tới trạm đã mở. Máy cảm ứng có cần điều khiển. `index.html` là đường học dự phòng khi WebGL hoặc thư viện 3D không tải được. Hai chế độ dùng chung tên, lớp, tiến độ và chứng chỉ trên cùng trình duyệt.

## GitHub Pages

Kho mã: [vuongndlst/cpp-8](https://github.com/vuongndlst/cpp-8). Trang học: [vuongndlst.github.io/cpp-8](https://vuongndlst.github.io/cpp-8/). Thư mục `_Web/` này chính là gốc kho GitHub; cập nhật web trong thư mục này rồi đưa commit lên nhánh `main`. Không dùng đường dẫn `ml-level1` của khóa Machine Learning cho C++.

## Chạy thử trên máy

```bash
python -m http.server 8766 --directory _Web
```

Mở `http://localhost:8766/bai04/quest.html`.

## Lưu ý

- Tiến độ lưu trong `localStorage` của trình duyệt — đổi máy thì học lại từ đầu.
- Đáp án chỉ lưu dạng băm (cyrb53); mã chứng chỉ tính từ bài + họ tên + lớp. Web tĩnh nên người cố tình đọc mã nguồn vẫn dò được — đây là đánh giá quá trình, điểm chính thức ở quiz Canvas.
- Game tải Three.js từ jsDelivr và video từ YouTube; cần mạng. Khi không chạy được 3D, mở trang dạng đọc.
- Sửa nội dung: sửa `build_web.py` của bài rồi chạy lại; sửa chủ đề game trong `_Chung/build_quest.py` rồi chạy lại. Không sửa tay `data.js` hoặc `quest.html`.
- Hình Scratch nằm trong `assets/scratch/`, được tạo từ thư viện `scratchblocks@3.7.1`. Nếu đổi ví dụ, dựng lại hình theo tên khối Scratch thật, kiểm tra màu và hình dạng khối, rồi cập nhật hình trên cả web và slide. Không thay bằng ô chữ giả khối Scratch.
- Mã dựng slide và hình Scratch của đợt cập nhật nằm trong `.codex-pptx-build/` để AI agent sau có thể tái tạo. Khi chỉnh tiếp, tạo bản nháp riêng bằng `update_teaching_flow.mjs`, rồi dùng `merge_preserve.py` ghép slide mới vào file gốc. Không lấy bản nháp làm slide dạy vì công cụ xuất toàn bộ PPTX làm mất hiệu ứng ClassPoint. Đã kiểm tra PPTX cuối bằng bộ đọc PowerPoint, kiểm tra cấu trúc gói và bố cục đều không có lỗi; số slide có hiệu ứng và `customXml` bằng bản gốc. Chưa kiểm tra thao tác ClassPoint trực tiếp trong PowerPoint khi dạy.
- Giữ nguyên ví dụ C++ đã chạy thật bằng g++ và quy tắc bài tập OnlineGDB; video chỉ giúp hiểu khái niệm, không thay ví dụ code của bài.
