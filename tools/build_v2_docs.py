from pathlib import Path
import json

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT.parent / 'CPP8_NewDocs'
OUT.mkdir(exist_ok=True)
lessons = json.loads((ROOT / 'tools' / 'v2-lessons.json').read_text(encoding='utf-8'))

for n in range(2, 7):
    item = lessons[str(n)]
    group = item['group']
    folder = OUT / f'Bai{n:02d}'
    folder.mkdir(exist_ok=True)
    url = f'https://vuongndlst.github.io/cpp-8/bai{n:02d}/'
    assignment = f'''# Canvas Assignment · Bài {n}: {item['title']}

**Tên bài:** {group['name']}  
**Hình thức:** 1–3 học sinh, mỗi nhóm nộp **một file PDF**  
**Thời gian trên lớp:** khoảng 15 phút  
**Điểm:** 10

## Trước khi làm

Con hoàn thành [game cá nhân của Bài {n}]({url}game.html), dừng để cùng lớp hỏi đáp và ghi bài. Sau đó xem giáo viên làm mẫu Input/Output và mã giả.

## Nhiệm vụ nhóm

{group['requirement']}

- **Input:** {group['input']}
- **Output:** {group['output']}
- **Ví dụ input:** `{group['sampleIn']}`
- **Ví dụ output:**

```text
{group['sampleOut']}
```

Mở [trang thử thách nhóm]({url}thu-thach.html). Nhập tên 1–3 thành viên và lớp; đọc đề; xác định Input/Output; viết mã giả; viết và chạy C++. Sau khi web báo đạt, ghi một câu về cách nhóm làm hoặc lỗi đã sửa, rồi tải PDF.

## Nộp bài

Nộp **duy nhất file PDF** do trang thử thách tạo ra. Mở PDF kiểm tra có tên thành viên, lớp, mã giả, mã C++, kết quả chạy và phản hồi đạt trước khi nộp. Một bạn đại diện nhóm nộp trên Canvas.

## Tiêu chí chấm

| Nội dung | Điểm |
|---|---:|
| Xác định đúng Input và Output | 2 |
| Mã giả rõ bước và đúng thứ tự | 2 |
| Mã C++ biên dịch và chạy đúng các bộ dữ liệu | 4 |
| Giải thích vai trò nhóm hoặc lỗi đã sửa | 2 |

**Lưu ý:** Hãy thử thêm ít nhất một đầu vào khác ví dụ, rồi so sánh đầu ra thực với kết quả dự đoán.
'''
    (folder / f'Canvas_Bai{n:02d}_NopNhom.md').write_text(assignment, encoding='utf-8')

    questions = []
    for i, stage in enumerate(item['stages'], 1):
        choices = '\n'.join(f'{chr(64+j)}. {c}' for j, c in enumerate(stage['choices'], 1))
        questions.append(f'### Câu {i}\n\n{stage["question"]}\n\n{choices}\n\n**Đáp án giáo viên:** {chr(65+stage["answer"])}. {stage["choices"][stage["answer"]]}')
    quiz = f'''# Canvas Quiz · Bài {n}: {item['title']}

**Gợi ý cài đặt:** 4 câu trắc nghiệm, mỗi câu 1 điểm, thời gian 5 phút; cho học sinh xem giải thích sau khi nộp. Đề này dành cho giáo viên và có đáp án.

{chr(10).join(questions)}

### Câu tự luận ngắn (không bắt buộc)

{item['discuss'][0]} Viết một dòng mã hoặc một ví dụ đầu vào để giải thích.

## Phạm vi

{item['scope']} Không hỏi kiến thức mở rộng ngoài bốn trạm đã học.
'''
    (folder / f'Canvas_Bai{n:02d}_Quiz.md').write_text(quiz, encoding='utf-8')

    guide = f'''# Hướng dẫn dạy Bài {n}: {item['title']}

## Mục tiêu vừa sức lớp 8

{item['scope']}

Học sinh tự đọc và thử ở bốn trạm trên web. Giáo viên dùng slide để dẫn dắt, hỏi đáp, giải thích ý nghĩa và cho ghi bài. Game là phần cá nhân; thử thách nhóm là trang khác, có sản phẩm PDF.

## Mạch 65–70 phút

| Phần | Thời gian | Vai trò của học sinh và giáo viên |
|---|---:|---|
| Hook, đoán kết quả | 4 phút | HS dự đoán, giải thích với bạn; GV dẫn vào vấn đề. |
| Nối Scratch với C++ | 3 phút | HS nhận ra thao tác quen thuộc; GV chỉ ra cú pháp mới. |
| Game cá nhân | 17 phút | HS đọc lý thuyết, chơi, tự sửa và chạy C++; GV quan sát. |
| Dừng web, ClassPoint, ghi bài | 10 phút | HS nêu bằng chứng từ mã; GV chốt ý nghĩa và cú pháp; HS ghi vở. |
| Bài chung Input/Output, mã giả | 6 phút | HS nói từng bước; GV hoàn thiện bảng và code mẫu. |
| Thử thách nhóm | 15 phút | Nhóm 1–3 bạn làm ở trang riêng, xuất một PDF. |
| Trình bày và phản hồi | 4 phút | Một nhóm giải thích, nhóm khác thử đầu vào mới. |
| Cá nhân cuối giờ và Kahoot | 6 phút | HS viết một dự đoán rồi làm 5 câu Kahoot. |

**Tổng:** khoảng 65 phút. Có thể dùng 5 phút đệm cho thiết bị, đăng nhập và chuyển hoạt động.

## Điểm dừng trên slide

Sau slide “Mở web”, học sinh làm hết bốn trạm rồi tải phiếu PDF. Giáo viên yêu cầu **dừng web** trước slide ClassPoint; hỏi hai câu: “{item['discuss'][0]}” và “{item['discuss'][1]}”. Sau đó chiếu hai slide ghi bài, làm một câu dự đoán chung và hiện đáp án. Giáo viên hướng dẫn Input/Output và mã giả bằng bài mẫu trước khi mở trang nhóm.

## Bốn trạm của game

{chr(10).join(f'- {i}. **{s["name"]}:** {s["lesson"]}' for i,s in enumerate(item['stages'],1))}

**Nhân vật:** {item['avatar']}. **Cách chơi:** {item['mechanic']}

## Đường dẫn

- [Trang bài học]({url})
- [Game cá nhân]({url}game.html)
- [Thử thách nhóm]({url}thu-thach.html)

## Ghi bài cốt lõi

{chr(10).join('- '+note for note in item['note'])}

## Lưu ý khi chấm

Web dùng Clang WebAssembly để biên dịch C++17 trong trình duyệt và so sánh đầu ra với nhiều dữ liệu thử. Điểm web là phản hồi quá trình; giáo viên xem mã giả, cách giải thích và PDF nhóm. Tiến độ cá nhân lưu trên trình duyệt đang dùng.

## Nguồn và giới hạn sử dụng

- Mạch chia nhỏ chủ đề tham khảo [W3Schools C++ Tutorial](https://www.w3schools.com/cpp/); bài giảng được điều chỉnh riêng cho học sinh lớp 8.
- Hình khối Scratch dựng bằng [scratchblocks](https://github.com/scratchblocks/scratchblocks), theo thiết kế [Scratch Blocks](https://github.com/scratchfoundation/scratch-blocks). Hình trên slide là minh họa, không phải ảnh chụp dự án của học sinh.
- Cú pháp C++ đối chiếu với [bản dự thảo tiêu chuẩn C++ công bố bởi ISO C++](https://isocpp.org/files/papers/n4296.pdf), và các ví dụ đã chạy bằng trình C++ nhúng.
- Trình chạy trong trình duyệt sử dụng [@live-codes/clang-wasm](https://github.com/live-codes/clang-wasm). Lần đầu mở bài cần tải tài nguyên biên dịch; các lần chạy tiếp theo trong cùng trang dùng lại bộ biên dịch.
'''
    (folder / f'GiaoVien_Bai{n:02d}_65Phut.md').write_text(guide, encoding='utf-8')
    print(f'Lesson {n}: assignment, quiz, teacher guide')
