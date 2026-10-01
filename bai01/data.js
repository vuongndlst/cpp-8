window.BAI = {
 "bai": 1,
 "ma": "bai01",
 "nhan": "Bài 1",
 "tieu_de": "Ra lệnh cho máy tính",
 "phan": "Module 01 · Foundations",
 "cau_hoi": "Làm sao để ra lệnh cho máy tính mà máy hiểu đúng ý mình?",
 "gioi_thieu": [
  "Ở hoạt động vẽ que kem, con đã thấy: cùng một lời hướng dẫn, mỗi người vẽ một kiểu. Máy tính còn “ngây thơ” hơn thế — nó chỉ làm <b>đúng từng chữ</b> con viết.",
  "Bài này con viết và chạy chương trình C++ đầu tiên: in chữ ra màn hình, lưu dữ liệu vào biến, và cho người dùng gõ dữ liệu vào. Con đã biết Scratch, nên mỗi lệnh C++ đều có một khối Scratch “anh em”.",
  "Mọi đoạn code, kết quả và thông báo lỗi trên trang đều là kết quả chạy thật bằng trình biên dịch g++."
 ],
 "thoi_gian": "≈ 10 phút + 8 phút cặp đôi",
 "muoi": "LSTS-ML1-WEB|bai01",
 "muc_tieu": [
  "Nói được thuật toán là gì và mô tả nó bằng sơ đồ khối.",
  "Nhận ra 5 mảnh ghép của một chương trình C++.",
  "Dùng cout để in, cin để nhập, và chọn đúng kiểu int, double, string, char.",
  "Đọc thông báo lỗi của máy và tự sửa ba lỗi hay gặp."
 ],
 "khoa": "Lập trình C++",
 "truong": "Trường THCS và THPT Đinh Thiện Lý",
 "khoi": "Khối 8",
 "ds_lop": [
  "8A1",
  "8A2",
  "8A3",
  "8A4",
  "8A5",
  "8A6",
  "8A7",
  "8A8",
  "8A9",
  "8A10"
 ],
 "khoa_cc": "LSTS-CPP8-CC",
 "tien_to_luu": "cpp8_",
 "chang": [
  {
   "ten": "Thuật toán và sơ đồ khối",
   "ten_ngan": "Thuật toán",
   "phut": 3,
   "muc_tieu": "nói được thuật toán là gì; đọc được sơ đồ khối.",
   "khoi_dong": "Vì sao cùng nghe 6 bước vẽ que kem mà hình của các bạn lại khác nhau?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Thuật toán",
     "html": "Một dãy <b>hữu hạn</b> các bước <b>rõ ràng</b>, thực hiện theo <b>đúng thứ tự</b>, để giải quyết một bài toán. Viết thuật toán bằng một ngôn ngữ máy hiểu (như C++) thì được <b>chương trình</b>.",
     "ky_hieu": "algorithm"
    },
    {
     "t": "anh",
     "cap": "Máy vẽ que kem bằng cách làm đúng 6 bước — không đoán, không tự thêm. Bước nào mơ hồ (“tam giác lớn” là lớn bao nhiêu?) thì mỗi người hiểu một kiểu.",
     "alt": "Máy vẽ que kem bằng cách làm đúng 6 bước — không đoán, không tự thêm. Bước nào mơ hồ (“tam giác lớn” là lớn bao nhiêu?) thì mỗi người hiểu một kiểu.",
     "src": "img/sau-buoc-ve-que-kem.png"
    },
    {
     "t": "p",
     "html": "Mọi chương trình đều có ba phần: <b>Nhập</b> (máy nhận dữ liệu) → <b>Xử lý</b> (máy tính toán) → <b>Xuất</b> (máy đưa kết quả ra). Trước khi code, người lập trình vẽ thuật toán bằng <b>sơ đồ khối</b>:"
    },
    {
     "t": "anh",
     "cap": "Bốn loại khối dùng suốt khoá học. Mũi tên chỉ thứ tự thực hiện.",
     "alt": "Bốn loại khối dùng suốt khoá học. Mũi tên chỉ thứ tự thực hiện.",
     "src": "img/bon-loai-khoi-so-do.png"
    },
    {
     "t": "vi_du",
     "tieu_de": "Con đã viết thuật toán từ hồi học Scratch",
     "de": "Mỗi khối Scratch quen thuộc có một lệnh C++ “anh em”.",
     "cot": [
      "Scratch",
      "C++",
      "Ý nghĩa"
     ],
     "dong": [
      [
       "khi bấm lá cờ xanh",
       "int main() {",
       "chương trình bắt đầu"
      ],
      [
       "nói Xin chào!",
       "cout << \"Xin chao!\";",
       "in ra màn hình"
      ],
      [
       "hỏi Tên bạn là gì? và đợi",
       "cin >> ten;",
       "chờ người dùng gõ, lưu vào biến"
      ],
      [
       "đặt tuổi thành 13",
       "int tuoi = 13;",
       "lưu một giá trị vào biến"
      ]
     ],
     "ket_luan": "Khác biệt lớn nhất: C++ viết bằng chữ, nên phải gõ đúng từng dấu.",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Bỏ qua bước lên kế hoạch, gõ code ngay — sai thứ tự mà không biết sai ở đâu.",
      "Viết bước mơ hồ như “tính cho xong” — máy không biết tính gì."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Thuật toán = các bước rõ ràng, đúng thứ tự, có điểm dừng. Nhập → Xử lý → Xuất."
    },
    {
     "t": "video",
     "yt": "DKGZlaPlVLY",
     "ten": "Code.org — CPU, Memory, Input & Output",
     "ghi_chu": "Xem thêm bằng tiếng Anh: tìm ba việc nhập, xử lý, xuất. Video nói về máy tính nói chung; phần lệnh C++ nằm ngay trong bài. Không bắt buộc xem trên lớp.",
     "bat_dau": null,
     "ket_thuc": null
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q1",
     "q": "Bước nào dưới đây KHÔNG đủ rõ để máy làm theo?",
     "giai": "“Thật đẹp” mỗi người hiểu một kiểu.",
     "goi_y": "Tìm bước có từ mà mỗi người hiểu khác nhau.",
     "a": [
      "Vẽ một hình tròn thật đẹp",
      "Vẽ hình tròn bán kính 3 cm",
      "In ra dòng chữ Xin chao",
      "Nhập hai số rồi cộng lại"
     ],
     "h": "1eed4b4b357a31"
    },
    {
     "k": "mc",
     "id": "bai01-q2",
     "q": "Trong sơ đồ khối, việc “Nhập tuổi” vẽ bằng khối nào?",
     "giai": "Nhập và in ra dùng hình bình hành.",
     "goi_y": "Xem hình bốn loại khối.",
     "a": [
      "Hình bình hành",
      "Hình thoi",
      "Hình chữ nhật",
      "Hình bầu dục"
     ],
     "h": "19cf985feab214"
    }
   ]
  },
  {
   "ten": "Chương trình C++ đầu tiên",
   "ten_ngan": "Chương trình đầu tiên",
   "phut": 4,
   "muc_tieu": "nhận ra 5 mảnh ghép của chương trình; dùng cout in chữ; đọc thông báo lỗi.",
   "khoi_dong": "Đoán trước: chương trình dưới đây in ra mấy dòng?",
   "khoi": [
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\">1  </span><span class=\"p\">#include &lt;iostream&gt;</span>\n<span class=\"ln\">2  </span><span class=\"k\">using</span> <span class=\"k\">namespace</span> std;\n<span class=\"ln\">3  </span>\n<span class=\"ln\">4  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\">5  </span>    cout &lt;&lt; <span class=\"s\">\"Xin chao, C++!\"</span> &lt;&lt; endl;\n<span class=\"ln\">6  </span>    cout &lt;&lt; <span class=\"s\">\"Toi hoc lop 8.\"</span> &lt;&lt; endl;\n<span class=\"ln\">7  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">8  </span>}</pre>"
    },
    {
     "t": "p",
     "html": "Kết quả khi chạy:<pre class=\"man-hinh\">Xin chao, C++!\nToi hoc lop 8.</pre>"
    },
    {
     "t": "anh",
     "cap": "Năm mảnh ghép có ở mọi chương trình trong khoá học. Lệnh của con viết giữa <code>int main() {</code> và <code>return 0;</code>.",
     "alt": "Năm mảnh ghép có ở mọi chương trình trong khoá học. Lệnh của con viết giữa <code>int main() {</code> và <code>return 0;</code>.",
     "src": "img/khung-chuong-trinh-cpp.png"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "máy chạy từng dòng",
     "huong_dan": "Bấm “Chạy dòng tiếp” và nhìn khung Màn hình: chữ chỉ xuất hiện khi máy chạy tới dòng cout.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    cout << \"Xin chao, C++!\" << endl;",
      "    cout << \"Toi hoc lop 8.\" << endl;",
      "    return 0;",
      "}"
     ],
     "buoc": [
      {
       "dong": 4,
       "bien": {},
       "in": "",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {},
       "in": "Xin chao, C++!\n",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {},
       "in": "Xin chao, C++!\nToi hoc lop 8.\n",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {},
       "in": "Xin chao, C++!\nToi hoc lop 8.\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "cout và endl",
     "de": "Hai lệnh làm việc với màn hình.",
     "cot": [
      "Lệnh",
      "Làm gì"
     ],
     "dong": [
      [
       "cout << \"Xin chao\";",
       "in chữ trong ngoặc kép ra màn hình"
      ],
      [
       "cout << endl;",
       "xuống dòng (end line)"
      ],
      [
       "cout << \"A\" << \"B\";",
       "nối nhiều thứ trên cùng một dòng: AB"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "h",
     "text": "Ba lỗi ai cũng gặp — và máy báo thế nào"
    },
    {
     "t": "p",
     "html": "<b>Thiếu dấu chấm phẩy</b> — dòng <code>cout &lt;&lt; \"Xin chao\"</code><pre class=\"man-hinh loi\">main.cpp:5:23: error: expected ';' before 'cout'</pre>Sửa: Thêm ; ở cuối lệnh."
    },
    {
     "t": "p",
     "html": "<b>Viết hoa sai</b> — dòng <code>Cout &lt;&lt; \"Xin chao\";</code><pre class=\"man-hinh loi\">main.cpp:5:5: error: 'Cout' was not declared in this scope</pre>Sửa: C++ phân biệt chữ hoa: cout."
    },
    {
     "t": "p",
     "html": "<b>Thiếu dấu ngoặc kép</b> — dòng <code>cout &lt;&lt; \"Xin chao;</code><pre class=\"man-hinh loi\">main.cpp:5:13: error: missing terminating \" character</pre>Sửa: Chữ phải nằm giữa hai dấu \"."
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Đọc thông báo lỗi",
     "html": "<code>main.cpp:5:13</code> nghĩa là <b>dòng 5, cột 13</b>. Lỗi thường nằm ngay dòng đó hoặc dòng phía trên. Đọc xong rồi tự sửa — đó là kỹ năng quan trọng nhất của người lập trình."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Quên dấu <code>;</code> cuối lệnh.",
      "Viết <code>Cout</code> hoặc <code>COUT</code> — C++ phân biệt chữ hoa, chữ thường.",
      "Gõ chữ có dấu tiếng Việt trong code — trong khoá này ta viết không dấu cho chắc."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Mọi chương trình có 5 mảnh ghép; mỗi lệnh kết thúc bằng dấu chấm phẩy; cout in, endl xuống dòng."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q3",
     "q": "Trong chương trình trên, dòng nào là nơi chương trình bắt đầu chạy?",
     "giai": "Hàm main là điểm bắt đầu.",
     "goi_y": "Xem hình năm mảnh ghép.",
     "a": [
      "int main() {",
      "#include <iostream>",
      "return 0;",
      "using namespace std;"
     ],
     "h": "8a4ca3a216e1a"
    },
    {
     "k": "mc",
     "id": "bai01-q4",
     "q": "Máy báo <code>main.cpp:7:5: error</code>. Con nên tìm lỗi ở đâu trước?",
     "giai": "Số đầu là dòng, số sau là cột.",
     "goi_y": "Đọc hộp “Đọc thông báo lỗi”.",
     "a": [
      "Dòng 7 và dòng ngay trên nó",
      "Dòng đầu tiên của chương trình",
      "Dòng cuối cùng của chương trình",
      "Chép lại toàn bộ chương trình"
     ],
     "h": "10878c279cc1d2"
    }
   ]
  },
  {
   "ten": "Biến, kiểu dữ liệu và cin",
   "ten_ngan": "Biến và cin",
   "phut": 4,
   "muc_tieu": "tạo biến với đúng kiểu dữ liệu; dùng cin để nhận dữ liệu người dùng gõ.",
   "khoi_dong": "Trong Scratch con tạo biến bằng nút “Tạo một biến”. Trong C++ thì sao?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Biến",
     "html": "Một chiếc <b>hộp có nhãn</b> trong bộ nhớ để cất dữ liệu. Nhãn là <b>tên biến</b>, còn <b>kiểu dữ liệu</b> cho máy biết hộp đựng loại gì.",
     "ky_hieu": "variable"
    },
    {
     "t": "vi_du",
     "tieu_de": "Bốn kiểu dữ liệu đầu tiên",
     "de": "Chọn kiểu theo loại dữ liệu cần cất.",
     "cot": [
      "Kiểu",
      "Đựng gì",
      "Ví dụ"
     ],
     "dong": [
      [
       "int",
       "số nguyên",
       "int tuoi = 13;"
      ],
      [
       "double",
       "số thập phân (dùng dấu chấm)",
       "double cao = 1.58;"
      ],
      [
       "string",
       "chữ, câu (trong ngoặc kép)",
       "string ten = \"Mai\";"
      ],
      [
       "char",
       "đúng một ký tự (trong nháy đơn)",
       "char nhomMau = 'O';"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"p\">#include &lt;iostream&gt;</span>\n<span class=\"ln\"> 2  </span><span class=\"k\">using</span> <span class=\"k\">namespace</span> std;\n<span class=\"ln\"> 3  </span>\n<span class=\"ln\"> 4  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 5  </span>    <span class=\"k\">int</span> tuoi = <span class=\"n\">13</span>;\n<span class=\"ln\"> 6  </span>    <span class=\"k\">double</span> chieuCao = <span class=\"n\">1.58</span>;\n<span class=\"ln\"> 7  </span>    <span class=\"k\">string</span> ten = <span class=\"s\">\"Mai\"</span>;\n<span class=\"ln\"> 8  </span>    <span class=\"k\">char</span> nhomMau = <span class=\"s\">'O'</span>;\n<span class=\"ln\"> 9  </span>    cout &lt;&lt; ten &lt;&lt; <span class=\"s\">\" \"</span> &lt;&lt; tuoi &lt;&lt; <span class=\"s\">\" tuoi\"</span> &lt;&lt; endl;\n<span class=\"ln\">10  </span>    cout &lt;&lt; <span class=\"s\">\"Cao \"</span> &lt;&lt; chieuCao &lt;&lt; <span class=\"s\">\" m, nhom mau \"</span> &lt;&lt; nhomMau &lt;&lt; endl;\n<span class=\"ln\">11  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">12  </span>}</pre><pre class=\"man-hinh\">Mai 13 tuoi\nCao 1.58 m, nhom mau O</pre>"
    },
    {
     "t": "hop",
     "kieu": "vi-du",
     "tieu_de": "Đặt tên biến kiểu camelCase",
     "html": "Tên nói rõ hộp đựng gì, viết liền: chữ đầu viết thường, mỗi từ sau viết hoa chữ đầu — <code>tuoi</code>, <code>chieuCao</code>, <code>diemToan</code>. Không có dấu cách, không bắt đầu bằng số, không trùng từ khoá của C++ (như <code>int</code>, <code>return</code>)."
    },
    {
     "t": "p",
     "html": "Muốn người dùng tự gõ dữ liệu, dùng <code>cin &gt;&gt;</code> — giống khối “hỏi … và đợi” của Scratch. Sơ đồ khối và chương trình:"
    },
    {
     "t": "hop",
     "kieu": "thu",
     "tieu_de": "Quy tắc của khoá: câu dẫn trước mỗi cin",
     "html": "Máy chờ gõ mà màn hình trống trơn thì người dùng không biết phải gõ gì. Vì vậy <b>trước mỗi lệnh cin</b>, con in một <b>câu dẫn</b>:<pre class=\"ma\"><span class=\"k\">double</span> chieuDai;\ncout &lt;&lt; <span class=\"s\">\"Moi ban nhap chieu dai HCN: \"</span>;\ncin &gt;&gt; chieuDai;</pre>Trong các bài OnlineGDB, đề cho sẵn câu dẫn — con in <b>đúng nguyên văn</b>, vì máy chấm cả câu dẫn."
    },
    {
     "t": "anh",
     "cap": "Sơ đồ khối của chương trình chào bạn: hai lần In ra – Nhập, rồi In ra kết quả.",
     "alt": "Sơ đồ khối của chương trình chào bạn: hai lần In ra – Nhập, rồi In ra kết quả.",
     "src": "img/so-do-khoi-chao-ban.png"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "chương trình hỏi tên và tuổi",
     "huong_dan": "Người dùng gõ An rồi 13. Theo dõi bảng Biến: <code>tuoi</code> là <b>?</b> (chưa có giá trị) cho tới khi máy chạy xong dòng <code>cin &gt;&gt; tuoi;</code>.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    string ten;",
      "    int tuoi;",
      "    cout << \"Moi ban nhap ten: \";",
      "    cin >> ten;",
      "    cout << \"Moi ban nhap tuoi: \";",
      "    cin >> tuoi;",
      "    cout << \"Xin chao \" << ten << \"!\" << endl;",
      "    cout << \"Nam sau ban \" << tuoi + 1 << \" tuoi.\" << endl;",
      "    return 0;",
      "}"
     ],
     "buoc": [
      {
       "dong": 4,
       "bien": {},
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "ten": [
         "\"\"",
         "string"
        ],
        "tuoi": [
         "?",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "ten": [
         "\"\"",
         "string"
        ],
        "tuoi": [
         "?",
         "int"
        ]
       },
       "in": "Moi ban nhap ten: ",
       "ham": "main"
      },
      {
       "dong": 8,
       "bien": {
        "ten": [
         "\"An\"",
         "string"
        ],
        "tuoi": [
         "?",
         "int"
        ]
       },
       "in": "Moi ban nhap ten: An\n",
       "ham": "main"
      },
      {
       "dong": 9,
       "bien": {
        "ten": [
         "\"An\"",
         "string"
        ],
        "tuoi": [
         "?",
         "int"
        ]
       },
       "in": "Moi ban nhap ten: An\nMoi ban nhap tuoi: ",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "ten": [
         "\"An\"",
         "string"
        ],
        "tuoi": [
         "13",
         "int"
        ]
       },
       "in": "Moi ban nhap ten: An\nMoi ban nhap tuoi: 13\n",
       "ham": "main"
      },
      {
       "dong": 11,
       "bien": {
        "ten": [
         "\"An\"",
         "string"
        ],
        "tuoi": [
         "13",
         "int"
        ]
       },
       "in": "Moi ban nhap ten: An\nMoi ban nhap tuoi: 13\nXin chao An!\n",
       "ham": "main"
      },
      {
       "dong": 12,
       "bien": {
        "ten": [
         "\"An\"",
         "string"
        ],
        "tuoi": [
         "13",
         "int"
        ]
       },
       "in": "Moi ban nhap ten: An\nMoi ban nhap tuoi: 13\nXin chao An!\nNam sau ban 14 tuoi.\n",
       "ham": "main"
      },
      {
       "dong": 13,
       "bien": {
        "ten": [
         "\"An\"",
         "string"
        ],
        "tuoi": [
         "13",
         "int"
        ]
       },
       "in": "Moi ban nhap ten: An\nMoi ban nhap tuoi: 13\nXin chao An!\nNam sau ban 14 tuoi.\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "cin chỉ đọc một từ",
     "html": "Nếu người dùng gõ tên có dấu cách, ví dụ <b>Minh Anh</b>, thì <code>cin &gt;&gt; ten</code> chỉ lấy chữ <b>Minh</b>; chữ <b>Anh</b> bị đưa sang lệnh nhập tuổi và làm hỏng lệnh đó. Chạy thật cho kết quả:<pre class=\"man-hinh\">Moi ban nhap ten: Moi ban nhap tuoi: Xin chao Minh!\nNam sau ban 1 tuoi.</pre>Vì vậy trong các bài OnlineGDB, tên chỉ gõ <b>một từ</b>."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Dùng <code>int</code> cho số thập phân — 2.5 bị cắt thành 2.",
      "Quên câu dẫn trước <code>cin</code> — người dùng không biết máy đang chờ gõ gì.",
      "Quên khai báo biến trước khi <code>cin</code> — máy báo tên biến chưa có.",
      "Viết <code>cin &lt;&lt;</code> (sai chiều mũi tên) — nhập là <code>&gt;&gt;</code>, dữ liệu chảy vào biến."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Biến = hộp có nhãn; int, double, string, char; cout &lt;&lt; đưa ra, cin &gt;&gt; đưa vào."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai01-q5",
     "q": "Cần cất <b>cân nặng 45.5 kg</b> của một bạn. Chọn kiểu nào?",
     "giai": "Số có phần thập phân.",
     "goi_y": "Xem bảng bốn kiểu dữ liệu.",
     "a": [
      "double",
      "int",
      "char",
      "string"
     ],
     "h": "af18e6a573ddf"
    },
    {
     "k": "mc",
     "id": "bai01-q6",
     "q": "Theo phần Tự thử, trước khi chạy dòng <code>cin &gt;&gt; tuoi;</code>, biến tuoi có giá trị gì?",
     "giai": "Khai báo mà chưa gán thì chưa có giá trị dùng được.",
     "goi_y": "Bấm tới bước ngay trước dòng cin >> tuoi.",
     "a": [
      "Chưa có giá trị (?)",
      "Bằng 0 sẵn",
      "Bằng 13 sẵn",
      "Bằng chữ An"
     ],
     "h": "17479d639e3e3f"
    }
   ]
  },
  {
   "ten": "Thử thách cặp đôi",
   "ten_ngan": "Cặp đôi",
   "phut": 8,
   "muc_tieu": "hai bạn cùng ghép, sửa và giải thích code — mỗi bạn giải thích ít nhất một dòng.",
   "khoi_dong": "Một bạn thao tác, một bạn đọc đề và kiểm tra. Sau mỗi câu thì đổi vai.",
   "khoi": [
    {
     "t": "p",
     "html": "Ba nhiệm vụ dưới đây là phần <b>PAIR</b> trên lớp. Làm xong, mỗi bạn nói cho bạn kia nghe một dòng code làm gì. Chưa đúng thì đọc gợi ý, bàn lại, rồi thử tiếp."
    },
    {
     "t": "hop",
     "kieu": "thu",
     "tieu_de": "Luật cặp đôi",
     "html": "Không chạm bàn phím của bạn khi bạn đang làm. Chỉ lỗi bằng lời: “dòng 5 thiếu gì?”."
    }
   ],
   "checkpoint": [
    {
     "k": "sx",
     "id": "bai01-q7",
     "q": "Nhiệm vụ 1 — Ghép code: sắp xếp 6 dòng thành chương trình in lời chào.",
     "giai": "Công cụ → viết gọn → bắt đầu → lệnh → kết thúc → đóng ngoặc.",
     "goi_y": "Dòng nào mở ra công cụ nhập/xuất? Dòng nào đóng chương trình?",
     "a": [
      "#include <iostream>",
      "using namespace std;",
      "int main() {",
      "    cout << \"Hello!\";",
      "    return 0;",
      "}"
     ],
     "h": "1cc59af58b152c"
    },
    {
     "k": "mc",
     "id": "bai01-q8",
     "q": "Nhiệm vụ 2 — Thám tử lỗi: đoạn <code>int main() { cout &lt;&lt; \"Hi\" return 0; }</code> sai ở đâu?",
     "giai": "Mỗi lệnh kết thúc bằng dấu chấm phẩy.",
     "goi_y": "Đếm xem có mấy lệnh và mỗi lệnh kết thúc bằng gì.",
     "a": [
      "Thiếu ; sau \"Hi\"",
      "Thiếu #include ở giữa",
      "Chữ Hi phải viết hoa",
      "return phải viết Return"
     ],
     "h": "1c72c50d3c5750"
    },
    {
     "k": "dd",
     "id": "bai01-q9",
     "q": "Nhiệm vụ 3 — Chọn kiểu dữ liệu cho hồ sơ một bạn.",
     "giai": "Số nguyên / thập phân / chữ / một ký tự.",
     "goi_y": "Dữ liệu là số hay chữ? Có phần thập phân không?",
     "mau": "Số anh chị em: {0}; chiều cao 1.62 m: {1}; biệt danh: {2}; nhóm A/B/C: {3}.",
     "o": [
      [
       "int",
       "double",
       "string",
       "char"
      ],
      [
       "double",
       "int",
       "char",
       "string"
      ],
      [
       "string",
       "char",
       "int",
       "double"
      ],
      [
       "char",
       "string",
       "int",
       "double"
      ]
     ],
     "h": "1bfbff86b5e5d6"
    }
   ]
  }
 ],
 "cuoi": {
  "so_cau": 10,
  "dat": 8,
  "co_cau": {
   "mc": 4,
   "ma": 2,
   "sx": 1,
   "dd": 2,
   "ds": 1
  },
  "ngan_hang": [
   {
    "k": "mc",
    "id": "bai01-q10",
    "q": "Máy vẽ theo lệnh “vẽ một ngôi nhà nhỏ”. Vì sao lệnh này chưa phải thuật toán tốt?",
    "giai": "Thuật toán cần bước rõ ràng.",
    "a": [
     "Không nói rõ vẽ gì trước, to bao nhiêu",
     "Vì máy tính không biết vẽ hình ngôi nhà",
     "Vì câu lệnh quá ngắn, cần viết dài hơn",
     "Vì thiếu từ “làm ơn” ở đầu câu lệnh"
    ],
    "h": "bfb634cb569ca"
   },
   {
    "k": "mc",
    "id": "bai01-q11",
    "q": "Chương trình đổi độ C sang độ F: “độ C” thuộc phần nào?",
    "giai": "Dữ liệu máy nhận vào.",
    "a": [
     "Nhập",
     "Xử lý",
     "Xuất",
     "Kết thúc"
    ],
    "h": "66815a227225a"
   },
   {
    "k": "mc",
    "id": "bai01-q12",
    "q": "Khối hình thoi trong sơ đồ khối dùng cho việc gì?",
    "giai": "Hình thoi = quyết định.",
    "a": [
     "Rẽ nhánh theo điều kiện",
     "Nhập dữ liệu vào máy",
     "In kết quả ra màn hình",
     "Bắt đầu chương trình"
    ],
    "h": "a347988326523"
   },
   {
    "k": "mc",
    "id": "bai01-q13",
    "q": "Lệnh <code>cout &lt;&lt; \"Lop\" &lt;&lt; 8;</code> in ra gì?",
    "giai": "Không tự thêm dấu cách.",
    "a": [
     "Lop8",
     "Lop 8",
     "\"Lop\" 8",
     "Lop\\n8"
    ],
    "h": "55d3218e7d395"
   },
   {
    "k": "mc",
    "id": "bai01-q14",
    "q": "Muốn cất tên một thành phố như <b>Da Lat</b>, chọn kiểu nào?",
    "giai": "Chữ nhiều ký tự.",
    "a": [
     "string",
     "char",
     "int",
     "double"
    ],
    "h": "502658c97a82b"
   },
   {
    "k": "mc",
    "id": "bai01-q15",
    "q": "Tên biến nào hợp lệ trong C++?",
    "giai": "Không số đầu, không cách, không từ khoá.",
    "a": [
     "diemToan",
     "2diem",
     "diem toan",
     "int"
    ],
    "h": "1e909cbdfc33f6"
   },
   {
    "k": "mc",
    "id": "bai01-q16",
    "q": "Máy báo <code>'Cout' was not declared in this scope</code>. Lỗi gì?",
    "giai": "C++ phân biệt hoa thường.",
    "a": [
     "Viết hoa sai tên lệnh cout",
     "Thiếu dấu chấm phẩy",
     "Thiếu dấu ngoặc kép",
     "Máy tính bị hỏng"
    ],
    "h": "13a836519c8d37"
   },
   {
    "k": "mc",
    "id": "bai01-q17",
    "q": "Người dùng gõ <b>Hoang Nam</b> cho lệnh <code>cin &gt;&gt; ten;</code>. Biến ten nhận gì?",
    "giai": "cin dừng ở dấu cách.",
    "a": [
     "Hoang",
     "Hoang Nam",
     "Nam",
     "Để trống"
    ],
    "h": "1ac8ac411b0bc3"
   },
   {
    "k": "ma",
    "id": "bai01-q18",
    "q": "Hai dòng nào có mặt trong mọi chương trình của khoá học? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Khung chương trình.",
    "a": [
     "#include <iostream>",
     "return 0;",
     "cin >> ten;",
     "double x;"
    ],
    "h": "a00c25c10f099"
   },
   {
    "k": "ma",
    "id": "bai01-q19",
    "q": "Hai kiểu nào dùng để cất số? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Số nguyên, số thập phân.",
    "a": [
     "int",
     "double",
     "string",
     "char"
    ],
    "h": "a8331cdae8cb6"
   },
   {
    "k": "ma",
    "id": "bai01-q20",
    "q": "Hai điều nào đúng về một thuật toán tốt? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Rõ ràng, có thứ tự.",
    "a": [
     "Các bước rõ ràng",
     "Làm theo đúng thứ tự",
     "Càng dài càng tốt",
     "Để máy tự đoán ý"
    ],
    "h": "1eaa496257fa7b"
   },
   {
    "k": "ma",
    "id": "bai01-q21",
    "q": "Hai việc nào nên làm khi máy báo lỗi? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đọc lỗi, tự sửa.",
    "a": [
     "Đọc số dòng trong thông báo",
     "Tự sửa rồi chạy lại",
     "Xoá hết và gõ lại",
     "Nhờ AI viết lại cả bài"
    ],
    "h": "1237f084cf308f"
   },
   {
    "k": "sx",
    "id": "bai01-q22",
    "q": "Sắp xếp quy trình của khoá học.",
    "giai": "NGHĨ → TRAO ĐỔI → LÊN KẾ HOẠCH → CODE → KIỂM THỬ.",
    "a": [
     "Nghĩ",
     "Trao đổi",
     "Lên kế hoạch",
     "Code",
     "Kiểm thử"
    ],
    "h": "1a7bf16c2fce7b"
   },
   {
    "k": "sx",
    "id": "bai01-q23",
    "q": "Sắp xếp sơ đồ khối của chương trình “nhập bán kính, in chu vi”.",
    "giai": "Nhập → Xử lý → Xuất.",
    "a": [
     "Bắt đầu",
     "Nhập bán kính r",
     "Tính chu vi = 2 × 3.14 × r",
     "In ra chu vi",
     "Kết thúc"
    ],
    "h": "1aba0c08e75b7"
   },
   {
    "k": "dd",
    "id": "bai01-q24",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "cout ra, cin vào.",
    "mau": "Lệnh in ra màn hình là {0}; lệnh nhận dữ liệu gõ vào là {1}.",
    "o": [
     [
      "cout",
      "cin",
      "endl",
      "main"
     ],
     [
      "cin",
      "cout",
      "endl",
      "return"
     ]
    ],
    "h": "18a5b90af9b321"
   },
   {
    "k": "dd",
    "id": "bai01-q25",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "string \"…\", char '…'.",
    "mau": "Chữ đặt trong {0}; một ký tự đặt trong {1}.",
    "o": [
     [
      "ngoặc kép",
      "nháy đơn",
      "ngoặc tròn",
      "ngoặc nhọn"
     ],
     [
      "nháy đơn",
      "ngoặc kép",
      "ngoặc tròn",
      "ngoặc nhọn"
     ]
    ],
    "h": "dd012706a00c7"
   },
   {
    "k": "dd",
    "id": "bai01-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cú pháp.",
    "mau": "Mỗi lệnh kết thúc bằng dấu {0}; lệnh {1} làm xuống dòng.",
    "o": [
     [
      "chấm phẩy",
      "phẩy",
      "chấm",
      "hai chấm"
     ],
     [
      "endl",
      "cin",
      "main",
      "int"
     ]
    ],
    "h": "164b70ba3ac7ba"
   },
   {
    "k": "dd",
    "id": "bai01-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cầu nối Scratch.",
    "mau": "Khối Scratch “nói” giống lệnh {0}; khối “hỏi và đợi” giống lệnh {1}.",
    "o": [
     [
      "cout",
      "cin",
      "int",
      "return"
     ],
     [
      "cin",
      "cout",
      "main",
      "endl"
     ]
    ],
    "h": "1d7a60b2d64fb7"
   },
   {
    "k": "ds",
    "id": "bai01-q28",
    "q": "Trong C++, <code>tuoi</code> và <code>Tuoi</code> là hai biến khác nhau.",
    "giai": "Phân biệt hoa thường.",
    "h": "1c866494b16548"
   },
   {
    "k": "ds",
    "id": "bai01-q29",
    "q": "Khai báo <code>int diem;</code> rồi nhập 7.5 thì biến giữ đúng 7.5.",
    "giai": "int bỏ phần thập phân.",
    "h": "164745b0c3ea48"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Lập trình C++. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
