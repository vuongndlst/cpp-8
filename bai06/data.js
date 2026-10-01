window.BAI = {
 "bai": 6,
 "ma": "bai06",
 "nhan": "Bài 6",
 "tieu_de": "Ôn tập C++ Bài 1 – 5",
 "phan": "Module 03 · Functions and Review",
 "cau_hoi": "Con đã sẵn sàng viết một chương trình C++ hoàn chỉnh chưa?",
 "gioi_thieu": [
  "Trang này giúp con ôn nhanh năm bài trước giờ kiểm tra: mỗi chặng một bài, một chương trình chạy thật và hai câu hỏi. Chỗ nào chưa chắc, mở lại trang của bài đó để học kỹ hơn.",
  "Bài kiểm tra có hai phần: quiz Canvas 15 phút và 3 bài OnlineGDB 25 phút. Nhớ quy tắc của khoá: tên biến camelCase, câu dẫn trước mỗi cin, gõ đúng y như đề."
 ],
 "thoi_gian": "≈ 15 phút tự ôn",
 "muoi": "LSTS-ML1-WEB|bai06",
 "muc_tieu": [
  "Nhớ lại khung chương trình, biến, cout, cin.",
  "Tính đúng với / và %.",
  "Viết đúng điều kiện if – else.",
  "Dùng đúng vòng lặp và hàm."
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
   "ten": "Bài 1 — Ra lệnh cho máy tính",
   "ten_ngan": "Bài 1",
   "phut": 3,
   "muc_tieu": "nhớ khung chương trình, kiểu dữ liệu, cout, cin và câu dẫn.",
   "khoi_dong": null,
   "khoi": [
    {
     "t": "vi_du",
     "tieu_de": "Bốn kiểu dữ liệu",
     "de": "Chọn kiểu theo loại dữ liệu.",
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
       "số thập phân",
       "double chieuCao = 1.58;"
      ],
      [
       "string",
       "chữ (một từ khi dùng cin)",
       "string ten = \"Mai\";"
      ],
      [
       "char",
       "một ký tự",
       "char xepLoai = 'A';"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "hỏi tên và tuổi",
     "huong_dan": "Mỗi cin có một câu dẫn ngay trước. Theo dõi bảng Biến.",
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
     "t": "tom_tat",
     "html": "5 mảnh ghép; cout &lt;&lt; in; cin &gt;&gt; nhập; câu dẫn trước mỗi cin; tên biến camelCase."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q1",
     "q": "Cần lưu giá một ly trà sữa 32.5 nghìn đồng. Chọn kiểu nào?",
     "giai": "Có phần thập phân.",
     "goi_y": "Xem bảng bốn kiểu dữ liệu.",
     "a": [
      "double",
      "int",
      "char",
      "string"
     ],
     "h": "1b3777210e4f80"
    },
    {
     "k": "mc",
     "id": "bai06-q2",
     "q": "Tên biến nào đúng quy tắc camelCase của khoá?",
     "giai": "Chữ đầu thường, mỗi từ sau viết hoa chữ đầu, viết liền.",
     "goi_y": "camelCase viết liền.",
     "a": [
      "soHocSinh",
      "so_hoc_sinh",
      "SoHocSinh",
      "so hoc sinh"
     ],
     "h": "fbfd5f9579c10"
    }
   ]
  },
  {
   "ten": "Bài 2 — Máy tính làm toán",
   "ten_ngan": "Bài 2",
   "phut": 3,
   "muc_tieu": "nhớ chia nguyên, chia dư, thứ tự tính, phép gán.",
   "khoi_dong": null,
   "khoi": [
    {
     "t": "p",
     "html": "<pre class=\"ma\">    cout &lt;&lt; <span class=\"s\">\"17 + 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> + <span class=\"n\">5</span> &lt;&lt; endl;\n    cout &lt;&lt; <span class=\"s\">\"17 - 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> - <span class=\"n\">5</span> &lt;&lt; endl;\n    cout &lt;&lt; <span class=\"s\">\"17 * 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> * <span class=\"n\">5</span> &lt;&lt; endl;\n    cout &lt;&lt; <span class=\"s\">\"17 / 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> / <span class=\"n\">5</span> &lt;&lt; endl;\n    cout &lt;&lt; <span class=\"s\">\"17 % 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> % <span class=\"n\">5</span> &lt;&lt; endl;\n    cout &lt;&lt; <span class=\"s\">\"17.0 / 5 = \"</span> &lt;&lt; <span class=\"n\">17.0</span> / <span class=\"n\">5</span> &lt;&lt; endl;</pre><pre class=\"man-hinh\">17 + 5 = 22\n17 - 5 = 12\n17 * 5 = 85\n17 / 5 = 3\n17 % 5 = 2\n17.0 / 5 = 3.4</pre>"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "đổi phút ra giờ và phút",
     "huong_dan": "Người dùng gõ 135: gio = 135 / 60, phut = 135 % 60.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    int tongPhut;",
      "    cout << \"Moi ban nhap so phut: \";",
      "    cin >> tongPhut;",
      "    int gio = tongPhut / 60;",
      "    int phut = tongPhut % 60;",
      "    cout << tongPhut << \" phut = \" << gio << \" gio \" << phut << \" phut\" << endl;",
      "    return 0;",
      "}"
     ],
     "buoc": [
      {
       "dong": 5,
       "bien": {
        "tongPhut": [
         "?",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "tongPhut": [
         "?",
         "int"
        ]
       },
       "in": "Moi ban nhap so phut: ",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "tongPhut": [
         "135",
         "int"
        ]
       },
       "in": "Moi ban nhap so phut: 135\n",
       "ham": "main"
      },
      {
       "dong": 8,
       "bien": {
        "tongPhut": [
         "135",
         "int"
        ],
        "gio": [
         "2",
         "int"
        ]
       },
       "in": "Moi ban nhap so phut: 135\n",
       "ham": "main"
      },
      {
       "dong": 9,
       "bien": {
        "tongPhut": [
         "135",
         "int"
        ],
        "gio": [
         "2",
         "int"
        ],
        "phut": [
         "15",
         "int"
        ]
       },
       "in": "Moi ban nhap so phut: 135\n",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "tongPhut": [
         "135",
         "int"
        ],
        "gio": [
         "2",
         "int"
        ],
        "phut": [
         "15",
         "int"
        ]
       },
       "in": "Moi ban nhap so phut: 135\n135 phut = 2 gio 15 phut\n",
       "ham": "main"
      },
      {
       "dong": 11,
       "bien": {
        "tongPhut": [
         "135",
         "int"
        ],
        "gio": [
         "2",
         "int"
        ],
        "phut": [
         "15",
         "int"
        ]
       },
       "in": "Moi ban nhap so phut: 135\n135 phut = 2 gio 15 phut\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "tom_tat",
     "html": "int / int chia nguyên; % số dư; muốn thập phân thì có một số thập phân; = là gán."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q3",
     "q": "Lệnh <code>cout &lt;&lt; 29 / 4 &lt;&lt; \" \" &lt;&lt; 29 % 4;</code> in ra gì?",
     "giai": "Thương 7, dư 1.",
     "goi_y": "29 = 4 × 7 + 1.",
     "a": [
      "7 1",
      "7.25 1",
      "7 0",
      "1 7"
     ],
     "h": "39886bd186bcc"
    },
    {
     "k": "mc",
     "id": "bai06-q4",
     "q": "Lệnh <code>cout &lt;&lt; 2 * (3 + 4) - 1;</code> in ra gì?",
     "giai": "Ngoặc → nhân → trừ.",
     "goi_y": "Tính trong ngoặc trước.",
     "a": [
      "13",
      "9",
      "11",
      "12"
     ],
     "h": "1e09067090d997"
    }
   ]
  },
  {
   "ten": "Bài 3 — Máy tính biết tự chọn",
   "ten_ngan": "Bài 3",
   "phut": 3,
   "muc_tieu": "nhớ phép so sánh, if – else, else if, && và ||.",
   "khoi_dong": null,
   "khoi": [
    {
     "t": "chay_tung_dong",
     "tieu_de": "xếp loại khi gõ 7.2",
     "huong_dan": "Máy hỏi từ trên xuống, dừng ở điều kiện đúng đầu tiên.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    double diem;",
      "    cout << \"Moi ban nhap diem: \";",
      "    cin >> diem;",
      "    if (diem >= 8) {",
      "        cout << \"Gioi\" << endl;",
      "    } else if (diem >= 6.5) {",
      "        cout << \"Kha\" << endl;",
      "    } else if (diem >= 5) {",
      "        cout << \"Trung binh\" << endl;",
      "    } else {",
      "        cout << \"Chua dat\" << endl;",
      "    }",
      "    return 0;",
      "}"
     ],
     "buoc": [
      {
       "dong": 5,
       "bien": {
        "diem": [
         "?",
         "double"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "diem": [
         "?",
         "double"
        ]
       },
       "in": "Moi ban nhap diem: ",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "diem": [
         "7.2",
         "double"
        ]
       },
       "in": "Moi ban nhap diem: 7.2\n",
       "ham": "main"
      },
      {
       "dong": 9,
       "bien": {
        "diem": [
         "7.2",
         "double"
        ]
       },
       "in": "Moi ban nhap diem: 7.2\n",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "diem": [
         "7.2",
         "double"
        ]
       },
       "in": "Moi ban nhap diem: 7.2\n",
       "ham": "main"
      },
      {
       "dong": 16,
       "bien": {
        "diem": [
         "7.2",
         "double"
        ]
       },
       "in": "Moi ban nhap diem: 7.2\nKha\n",
       "ham": "main"
      },
      {
       "dong": 17,
       "bien": {
        "diem": [
         "7.2",
         "double"
        ]
       },
       "in": "Moi ban nhap diem: 7.2\nKha\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "Nhớ nhanh",
     "de": "Những chỗ hay sai.",
     "cot": [
      "Viết",
      "Nghĩa"
     ],
     "dong": [
      [
       "==",
       "so sánh bằng (= là gán)"
      ],
      [
       "!=",
       "khác"
      ],
      [
       "&&",
       "và — cả hai đúng"
      ],
      [
       "||",
       "hoặc — một cái đúng là đủ"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "tom_tat",
     "html": "if (điều kiện) { … } else { … }; else if hỏi lần lượt; điều kiện trong ngoặc tròn."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q5",
     "q": "Điều kiện “x từ 1 đến 9” viết thế nào?",
     "giai": "Cả hai cùng đúng.",
     "goi_y": "Tính cả 1 và 9.",
     "a": [
      "x >= 1 && x <= 9",
      "1 <= x <= 9",
      "x >= 1 || x <= 9",
      "x > 1 && x < 9"
     ],
     "h": "982092a42260b"
    },
    {
     "k": "mc",
     "id": "bai06-q6",
     "q": "Có <code>int t = 60;</code>. <code>if (t &gt; 60) cout &lt;&lt; \"Cao\"; else cout &lt;&lt; \"Chua\";</code> in gì?",
     "giai": "60 > 60 là sai.",
     "goi_y": "Ranh giới 60.",
     "a": [
      "Chua",
      "Cao",
      "CaoChua",
      "60"
     ],
     "h": "101e5b255854b6"
    }
   ]
  },
  {
   "ten": "Bài 4 — Lặp lại",
   "ten_ngan": "Bài 4",
   "phut": 3,
   "muc_tieu": "nhớ vòng lặp for, biến tổng, biến đếm, while.",
   "khoi_dong": null,
   "khoi": [
    {
     "t": "chay_tung_dong",
     "tieu_de": "cộng dồn các số lẻ",
     "huong_dan": "tong: 0 → 1 → 4 → 9 → 16 → 25.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    int tong = 0;",
      "    for (int i = 1; i <= 9; i += 2) {",
      "        tong = tong + i;",
      "    }",
      "    cout << \"Tong cac so le tu 1 den 9: \" << tong << endl;",
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
       "bien": {
        "tong": [
         "0",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "i": [
         "1",
         "int"
        ],
        "tong": [
         "0",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "1",
         "int"
        ],
        "tong": [
         "1",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "i": [
         "3",
         "int"
        ],
        "tong": [
         "1",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "3",
         "int"
        ],
        "tong": [
         "4",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "i": [
         "5",
         "int"
        ],
        "tong": [
         "4",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "5",
         "int"
        ],
        "tong": [
         "9",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "i": [
         "7",
         "int"
        ],
        "tong": [
         "9",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "7",
         "int"
        ],
        "tong": [
         "16",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "i": [
         "9",
         "int"
        ],
        "tong": [
         "16",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "9",
         "int"
        ],
        "tong": [
         "25",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 8,
       "bien": {
        "tong": [
         "25",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 9,
       "bien": {
        "tong": [
         "25",
         "int"
        ]
       },
       "in": "Tong cac so le tu 1 den 9: 25\n",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "tong": [
         "25",
         "int"
        ]
       },
       "in": "Tong cac so le tu 1 den 9: 25\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "p",
     "html": "while đếm ngược:<pre class=\"ma\">    <span class=\"k\">int</span> giay = <span class=\"n\">5</span>;\n    <span class=\"k\">while</span> (giay &gt; <span class=\"n\">0</span>) {\n        cout &lt;&lt; giay &lt;&lt; <span class=\"s\">\" \"</span>;\n        giay--;\n    }\n    cout &lt;&lt; <span class=\"s\">\"Phong!\"</span> &lt;&lt; endl;</pre><pre class=\"man-hinh\">5 4 3 2 1 Phong!</pre>"
    },
    {
     "t": "tom_tat",
     "html": "for biết trước số lần; biến tổng = 0 trước vòng lặp; while lặp tới khi điều kiện sai."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q7",
     "q": "Vòng lặp <code>for (int i = 3; i &lt;= 12; i += 3)</code> chạy mấy lần?",
     "giai": "i = 3, 6, 9, 12.",
     "goi_y": "Liệt kê i.",
     "a": [
      "4",
      "3",
      "12",
      "10"
     ],
     "h": "1fe3104ff7dde"
    },
    {
     "k": "mc",
     "id": "bai06-q8",
     "q": "Sau <code>int s = 0; for (int i = 1; i &lt;= 3; i++) s += i * 2;</code>, s bằng bao nhiêu?",
     "giai": "2 + 4 + 6.",
     "goi_y": "Cộng i * 2 với i = 1, 2, 3.",
     "a": [
      "12",
      "6",
      "3",
      "9"
     ],
     "h": "5f99ce9f871fe"
    }
   ]
  },
  {
   "ten": "Bài 5 — Hàm",
   "ten_ngan": "Bài 5",
   "phut": 3,
   "muc_tieu": "nhớ định nghĩa, gọi hàm, tham số và return.",
   "khoi_dong": null,
   "khoi": [
    {
     "t": "chay_tung_dong",
     "tieu_de": "hàm bình phương",
     "huong_dan": "Gọi binhPhuong(4) → x = 4 → return 16 → a = 16.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int binhPhuong(int x) {",
      "    return x * x;",
      "}",
      "",
      "int main() {",
      "    int a = binhPhuong(4);",
      "    cout << \"4 binh phuong = \" << a << endl;",
      "    cout << \"3 binh phuong + 1 = \" << binhPhuong(3) + 1 << endl;",
      "    return 0;",
      "}"
     ],
     "buoc": [
      {
       "dong": 8,
       "bien": {},
       "in": "",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {
        "x": [
         "4",
         "int"
        ]
       },
       "in": "",
       "ham": "binhPhuong"
      },
      {
       "dong": 5,
       "bien": {
        "x": [
         "4",
         "int"
        ]
       },
       "in": "",
       "ham": "binhPhuong"
      },
      {
       "dong": 9,
       "bien": {
        "a": [
         "16",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "a": [
         "16",
         "int"
        ]
       },
       "in": "4 binh phuong = 16\n",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {
        "x": [
         "3",
         "int"
        ]
       },
       "in": "4 binh phuong = 16\n3 binh phuong + 1 = ",
       "ham": "binhPhuong"
      },
      {
       "dong": 5,
       "bien": {
        "x": [
         "3",
         "int"
        ]
       },
       "in": "4 binh phuong = 16\n3 binh phuong + 1 = ",
       "ham": "binhPhuong"
      },
      {
       "dong": 11,
       "bien": {
        "a": [
         "16",
         "int"
        ]
       },
       "in": "4 binh phuong = 16\n3 binh phuong + 1 = 10\n",
       "ham": "main"
      },
      {
       "dong": 12,
       "bien": {
        "a": [
         "16",
         "int"
        ]
       },
       "in": "4 binh phuong = 16\n3 binh phuong + 1 = 10\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "tom_tat",
     "html": "Hàm viết phía trên main; void không trả về; có kiểu thì return; gọi: tenHam(thamSo);"
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai06-q9",
     "q": "Có hàm <code>int tru2(int x) { return x - 2; }</code>. <code>cout &lt;&lt; tru2(10) * 2;</code> in gì?",
     "giai": "tru2(10) = 8, nhân 2.",
     "goi_y": "Tính lời gọi hàm trước.",
     "a": [
      "16",
      "18",
      "8",
      "10"
     ],
     "h": "1b646d993b0669"
    },
    {
     "k": "mc",
     "id": "bai06-q10",
     "q": "Hàm tính trung bình cộng hai điểm nên có kiểu gì?",
     "giai": "Có phần thập phân.",
     "goi_y": "Kết quả có thể là 7.5.",
     "a": [
      "double",
      "void",
      "int",
      "char"
     ],
     "h": "16ae2264dc776a"
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
    "id": "bai06-q11",
    "q": "Lệnh <code>cout &lt;&lt; 50 % 7;</code> in ra gì?",
    "giai": "50 = 7 × 7 + 1.",
    "a": [
     "1",
     "7",
     "7.14286",
     "0"
    ],
    "h": "2cadfb000c969"
   },
   {
    "k": "mc",
    "id": "bai06-q12",
    "q": "Lệnh <code>cout &lt;&lt; 5 / 2.0;</code> in ra gì?",
    "giai": "Có số thập phân.",
    "a": [
     "2.5",
     "2",
     "3",
     "2.0"
    ],
    "h": "1532621d396361"
   },
   {
    "k": "mc",
    "id": "bai06-q13",
    "q": "Có <code>int k = 5;</code>. <code>if (k % 2 == 0) cout &lt;&lt; \"Chan\"; else cout &lt;&lt; \"Le\";</code> in gì?",
    "giai": "5 lẻ.",
    "a": [
     "Le",
     "Chan",
     "ChanLe",
     "5"
    ],
    "h": "781d5a8ce6206"
   },
   {
    "k": "mc",
    "id": "bai06-q14",
    "q": "Lệnh <code>for (int i = 1; i &lt;= 4; i++) cout &lt;&lt; i * 10 &lt;&lt; \" \";</code> in ra gì?",
    "giai": "i * 10.",
    "a": [
     "10 20 30 40 ",
     "10 20 30",
     "1 2 3 4",
     "40"
    ],
    "h": "1ed25e18b6c9cc"
   },
   {
    "k": "mc",
    "id": "bai06-q15",
    "q": "Máy báo <code>no match for 'operator&lt;&lt;'</code> ở dòng <code>cin &lt;&lt; x;</code>. Sửa thế nào?",
    "giai": "Nhập dùng >>.",
    "a": [
     "Viết cin >> x;",
     "Viết cout << x;",
     "Thêm dấu ; thứ hai",
     "Viết hoa chữ cin"
    ],
    "h": "b32fd27b2254b"
   },
   {
    "k": "mc",
    "id": "bai06-q16",
    "q": "Máy báo <code>'tinhTien' was not declared in this scope</code>. Nguyên nhân hay gặp?",
    "giai": "Hàm phải ở trên main.",
    "a": [
     "Hàm viết dưới main",
     "Thiếu câu dẫn cin",
     "Chia cho số 2",
     "Quên endl"
    ],
    "h": "1aa6a83910edf6"
   },
   {
    "k": "mc",
    "id": "bai06-q17",
    "q": "Trước mỗi lệnh cin, quy tắc của khoá yêu cầu gì?",
    "giai": "Câu dẫn.",
    "a": [
     "In một câu dẫn",
     "Viết thêm lệnh return",
     "Khai báo lại biến",
     "Xuống dòng hai lần"
    ],
    "h": "1b6901b9829c37"
   },
   {
    "k": "mc",
    "id": "bai06-q18",
    "q": "Vòng lặp nào hợp với việc “hỏi lại đến khi nhập đúng”?",
    "giai": "Chưa biết số lần.",
    "a": [
     "while",
     "for",
     "if",
     "void"
    ],
    "h": "10f553d441477f"
   },
   {
    "k": "ma",
    "id": "bai06-q19",
    "q": "Hai kiểu nào dùng để lưu số? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Số nguyên, thập phân.",
    "a": [
     "int",
     "double",
     "string",
     "char"
    ],
    "h": "119c84e0bd55ae"
   },
   {
    "k": "ma",
    "id": "bai06-q20",
    "q": "Hai điều kiện nào đúng khi x = 7? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "7 lẻ, 7 >= 7.",
    "a": [
     "x >= 7",
     "x % 2 != 0",
     "x > 7",
     "x % 2 == 0"
    ],
    "h": "166c9f0af5878f"
   },
   {
    "k": "ma",
    "id": "bai06-q21",
    "q": "Hai điều nào đúng về hàm? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Hàm.",
    "a": [
     "Viết một lần, gọi nhiều lần",
     "Hàm có kiểu thì dùng return",
     "Hàm tự chạy khi không gọi",
     "Hàm void phải return số"
    ],
    "h": "1e183a4d183159"
   },
   {
    "k": "ma",
    "id": "bai06-q22",
    "q": "Hai cách nào tăng biến dem thêm 1? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Cập nhật biến.",
    "a": [
     "dem++;",
     "dem += 1;",
     "dem + 1;",
     "dem = 1;"
    ],
    "h": "19fc8ba1e72199"
   },
   {
    "k": "sx",
    "id": "bai06-q23",
    "q": "Sắp xếp quy trình của khoá học.",
    "giai": "Quy tắc cả khoá.",
    "a": [
     "Nghĩ",
     "Trao đổi",
     "Lên kế hoạch",
     "Code",
     "Kiểm thử"
    ],
    "h": "2dbf857c2db5"
   },
   {
    "k": "sx",
    "id": "bai06-q24",
    "q": "Sắp xếp chương trình nhập bán kính, in diện tích hình tròn.",
    "giai": "Khai báo → câu dẫn → nhập → tính → in.",
    "a": [
     "double banKinh;",
     "cout << \"Moi ban nhap ban kinh: \";",
     "cin >> banKinh;",
     "double dienTich = 3.14 * banKinh * banKinh;",
     "cout << \"Dien tich: \" << dienTich;"
    ],
    "h": "57871a0124e7"
   },
   {
    "k": "dd",
    "id": "bai06-q25",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "cout / cin.",
    "mau": "In ra màn hình dùng {0}; nhận dữ liệu gõ vào dùng {1}.",
    "o": [
     [
      "cout",
      "cin",
      "return",
      "for"
     ],
     [
      "cin",
      "cout",
      "if",
      "void"
     ]
    ],
    "h": "11b83c079c7aed"
   },
   {
    "k": "dd",
    "id": "bai06-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "== và %.",
    "mau": "So sánh bằng viết {0}; phép lấy số dư viết {1}.",
    "o": [
     [
      "==",
      "=",
      "!=",
      "=>"
     ],
     [
      "%",
      "/",
      "*",
      "//"
     ]
    ],
    "h": "103a2ac2724328"
   },
   {
    "k": "dd",
    "id": "bai06-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "for / void.",
    "mau": "Biết trước số lần lặp dùng {0}; hàm không trả về dùng kiểu {1}.",
    "o": [
     [
      "for",
      "while",
      "if",
      "else"
     ],
     [
      "void",
      "int",
      "bool",
      "double"
     ]
    ],
    "h": "14834c4c0f58c0"
   },
   {
    "k": "dd",
    "id": "bai06-q28",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Biến tổng, return.",
    "mau": "Biến tổng bắt đầu từ {0}; hàm trả kết quả bằng lệnh {1}.",
    "o": [
     [
      "0",
      "1",
      "10",
      "-1"
     ],
     [
      "return",
      "cout",
      "cin",
      "void"
     ]
    ],
    "h": "282d5ccfda8e"
   },
   {
    "k": "ds",
    "id": "bai06-q29",
    "q": "<code>if (x = 5)</code> là cách đúng để kiểm tra x bằng 5.",
    "giai": "Phải dùng ==.",
    "h": "54702ac2ef5fd"
   },
   {
    "k": "ds",
    "id": "bai06-q30",
    "q": "Trong OnlineGDB, câu dẫn in sai một chữ thì test có thể trượt.",
    "giai": "Gõ đúng y như đề.",
    "h": "c791f08d63be7"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Lập trình C++. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
