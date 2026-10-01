window.BAI = {
 "bai": 3,
 "ma": "bai03",
 "nhan": "Bài 3",
 "tieu_de": "Máy tính biết tự chọn",
 "phan": "Module 02 · Decisions and Loops",
 "cau_hoi": "Làm sao để máy tính tự quyết định làm việc này hay việc kia?",
 "gioi_thieu": [
  "Cổng soát vé chỉ mở cho người đủ tuổi, máy bán nước chỉ nhả lon khi đủ tiền. Những máy đó đều làm một việc: <b>kiểm tra điều kiện</b> rồi chọn đường đi.",
  "Bài này con dùng phép so sánh, lệnh <code>if</code>, <code>if – else</code>, <code>else if</code> và các phép nối điều kiện <code>&amp;&amp;</code>, <code>||</code>. Trong Scratch, đó là khối “nếu … thì … không thì”.",
  "Mọi đoạn code, kết quả và thông báo lỗi trên trang đều là kết quả chạy thật bằng trình biên dịch g++."
 ],
 "thoi_gian": "≈ 10 phút + 7 phút cặp đôi",
 "muoi": "LSTS-ML1-WEB|bai03",
 "muc_tieu": [
  "Viết điều kiện bằng > < >= <= == !=.",
  "Dùng if – else để máy chọn một trong hai nhánh.",
  "Dùng else if cho nhiều nhánh, && và || để nối điều kiện.",
  "Tìm lỗi thiếu ngoặc, thừa dấu ;, nhầm = với ==."
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
   "ten": "So sánh và điều kiện",
   "ten_ngan": "Điều kiện",
   "phut": 3,
   "muc_tieu": "viết được điều kiện bằng các phép so sánh; biết điều kiện chỉ có đúng hoặc sai.",
   "khoi_dong": "“Con từ 12 tuổi trở lên” — câu này đúng hay sai với con? Với em con thì sao?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Điều kiện",
     "html": "Một phép so sánh mà kết quả chỉ có <b>đúng</b> (true) hoặc <b>sai</b> (false). Ví dụ <code>tuoi &gt;= 12</code> đúng khi tuoi là 14, sai khi tuoi là 11.",
     "ky_hieu": "condition"
    },
    {
     "t": "vi_du",
     "tieu_de": "Sáu phép so sánh",
     "de": "Khối xanh lá trong Scratch có ba phép; C++ có sáu.",
     "cot": [
      "C++",
      "Nghĩa",
      "Ví dụ đúng"
     ],
     "dong": [
      [
       ">",
       "lớn hơn",
       "8 > 5"
      ],
      [
       "<",
       "nhỏ hơn",
       "5 < 8"
      ],
      [
       ">=",
       "lớn hơn hoặc bằng",
       "12 >= 12"
      ],
      [
       "<=",
       "nhỏ hơn hoặc bằng",
       "6 <= 6"
      ],
      [
       "==",
       "bằng (hai dấu =)",
       "7 == 7"
      ],
      [
       "!=",
       "khác",
       "7 != 8"
      ]
     ],
     "ket_luan": "So sánh bằng là == (hai dấu). Một dấu = là phép gán.",
     "nhan_manh": []
    },
    {
     "t": "p",
     "html": "Máy in điều kiện ra số: <b>1</b> nghĩa là đúng, <b>0</b> nghĩa là sai.<pre class=\"ma\">    cout &lt;&lt; (<span class=\"n\">8</span> &gt; <span class=\"n\">5</span>) &lt;&lt; endl;\n    cout &lt;&lt; (<span class=\"n\">8</span> &lt; <span class=\"n\">5</span>) &lt;&lt; endl;\n    cout &lt;&lt; (<span class=\"n\">8</span> == <span class=\"n\">5</span>) &lt;&lt; endl;\n    cout &lt;&lt; (<span class=\"n\">8</span> != <span class=\"n\">5</span>) &lt;&lt; endl;</pre><pre class=\"man-hinh\">1\n0\n0\n1</pre>"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Nhầm = với ==",
     "html": "Viết <code>if (x = 5)</code> thì máy <b>gán</b> 5 cho x rồi coi là đúng — không báo lỗi mà chạy sai. Chạy thật với x = 3:<pre class=\"ma\">    <span class=\"k\">int</span> x = <span class=\"n\">3</span>;\n    <span class=\"k\">if</span> (x = <span class=\"n\">5</span>) {\n        cout &lt;&lt; <span class=\"s\">\"Bang 5\"</span> &lt;&lt; endl;\n    } <span class=\"k\">else</span> {\n        cout &lt;&lt; <span class=\"s\">\"Khac 5\"</span> &lt;&lt; endl;\n    }</pre><pre class=\"man-hinh\">Bang 5</pre>"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết <code>=&gt;</code> hoặc <code>=&lt;</code> — phải là <code>&gt;=</code>, <code>&lt;=</code>.",
      "Dùng một dấu = để so sánh bằng."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Điều kiện chỉ đúng hoặc sai. So sánh bằng là ==, khác là !=."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q1",
     "q": "Lệnh <code>cout &lt;&lt; (10 &lt;= 10);</code> in ra gì?",
     "giai": "10 nhỏ hơn hoặc bằng 10 là đúng → 1.",
     "goi_y": "Đúng in 1, sai in 0.",
     "a": [
      "1",
      "0",
      "10",
      "Máy báo lỗi"
     ],
     "h": "87d6d94366e9"
    },
    {
     "k": "mc",
     "id": "bai03-q2",
     "q": "Điều kiện nào kiểm tra “diem bằng 10”?",
     "giai": "Hai dấu = là so sánh bằng.",
     "goi_y": "Xem hộp “Nhầm = với ==”.",
     "a": [
      "diem == 10",
      "diem = 10",
      "diem => 10",
      "diem != 10"
     ],
     "h": "18f21df7ede2e4"
    }
   ]
  },
  {
   "ten": "if và if – else",
   "ten_ngan": "if – else",
   "phut": 4,
   "muc_tieu": "dùng if – else để máy chọn một trong hai nhánh; đọc sơ đồ khối có hình thoi.",
   "khoi_dong": "Khối Scratch “nếu … thì … không thì” có mấy nhánh? Nhánh nào chạy?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Hình thoi là khối quyết định: điều kiện đúng đi nhánh trái, sai đi nhánh phải. Hai nhánh gặp lại nhau rồi chạy tiếp.",
     "alt": "Hình thoi là khối quyết định: điều kiện đúng đi nhánh trái, sai đi nhánh phải. Hai nhánh gặp lại nhau rồi chạy tiếp.",
     "src": "img/so-do-khoi-du-tuoi.png"
    },
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"p\">#include &lt;iostream&gt;</span>\n<span class=\"ln\"> 2  </span><span class=\"k\">using</span> <span class=\"k\">namespace</span> std;\n<span class=\"ln\"> 3  </span>\n<span class=\"ln\"> 4  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 5  </span>    <span class=\"k\">int</span> tuoi;\n<span class=\"ln\"> 6  </span>    cout &lt;&lt; <span class=\"s\">\"Moi ban nhap tuoi: \"</span>;\n<span class=\"ln\"> 7  </span>    cin &gt;&gt; tuoi;\n<span class=\"ln\"> 8  </span>    <span class=\"k\">if</span> (tuoi &gt;= <span class=\"n\">12</span>) {\n<span class=\"ln\"> 9  </span>        cout &lt;&lt; <span class=\"s\">\"Ban duoc xem phim nay.\"</span> &lt;&lt; endl;\n<span class=\"ln\">10  </span>    } <span class=\"k\">else</span> {\n<span class=\"ln\">11  </span>        cout &lt;&lt; <span class=\"s\">\"Phim danh cho ban tu 12 tuoi.\"</span> &lt;&lt; endl;\n<span class=\"ln\">12  </span>    }\n<span class=\"ln\">13  </span>    cout &lt;&lt; <span class=\"s\">\"Cam on ban!\"</span> &lt;&lt; endl;\n<span class=\"ln\">14  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">15  </span>}</pre>"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "người dùng gõ 11",
     "huong_dan": "Bấm “Chạy dòng tiếp”: vì 11 >= 12 sai, máy nhảy qua nhánh if, chỉ chạy nhánh else.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    int tuoi;",
      "    cout << \"Moi ban nhap tuoi: \";",
      "    cin >> tuoi;",
      "    if (tuoi >= 12) {",
      "        cout << \"Ban duoc xem phim nay.\" << endl;",
      "    } else {",
      "        cout << \"Phim danh cho ban tu 12 tuoi.\" << endl;",
      "    }",
      "    cout << \"Cam on ban!\" << endl;",
      "    return 0;",
      "}"
     ],
     "buoc": [
      {
       "dong": 5,
       "bien": {
        "tuoi": [
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
        "tuoi": [
         "?",
         "int"
        ]
       },
       "in": "Moi ban nhap tuoi: ",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "tuoi": [
         "11",
         "int"
        ]
       },
       "in": "Moi ban nhap tuoi: 11\n",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "tuoi": [
         "11",
         "int"
        ]
       },
       "in": "Moi ban nhap tuoi: 11\n",
       "ham": "main"
      },
      {
       "dong": 12,
       "bien": {
        "tuoi": [
         "11",
         "int"
        ]
       },
       "in": "Moi ban nhap tuoi: 11\nPhim danh cho ban tu 12 tuoi.\n",
       "ham": "main"
      },
      {
       "dong": 13,
       "bien": {
        "tuoi": [
         "11",
         "int"
        ]
       },
       "in": "Moi ban nhap tuoi: 11\nPhim danh cho ban tu 12 tuoi.\nCam on ban!\n",
       "ham": "main"
      },
      {
       "dong": 14,
       "bien": {
        "tuoi": [
         "11",
         "int"
        ]
       },
       "in": "Moi ban nhap tuoi: 11\nPhim danh cho ban tu 12 tuoi.\nCam on ban!\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "p",
     "html": "Chạy lại với 14 thì máy chạy nhánh if:<pre class=\"man-hinh\">Moi ban nhap tuoi: 14\nBan duoc xem phim nay.\nCam on ban!</pre>"
    },
    {
     "t": "h",
     "text": "Ba lỗi hay gặp — và máy báo thế nào"
    },
    {
     "t": "p",
     "html": "<b>Thiếu ngoặc quanh điều kiện</b> — dòng <code>if tuoi &gt;= 12 {</code><pre class=\"man-hinh loi\">main.cpp:6:8: error: expected '(' before 'tuoi'</pre>Sửa: Điều kiện luôn nằm trong ngoặc tròn: if (tuoi &gt;= 12)."
    },
    {
     "t": "p",
     "html": "<b>Dấu ; ngay sau if</b> — dòng <code>if (tuoi &gt;= 12);</code><pre class=\"man-hinh loi\">main.cpp:8:5: error: 'else' without a previous 'if'</pre>Sửa: Bỏ dấu ; sau if (...)."
    },
    {
     "t": "p",
     "html": "<b>Viết => thay cho >=</b> — dòng <code>if (tuoi =&gt; 12) {</code><pre class=\"man-hinh loi\">main.cpp:6:15: error: expected primary-expression before '&gt;' token</pre>Sửa: Dấu lớn hơn hoặc bằng viết &gt;= (dấu &gt; đứng trước)."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Quên dấu { } khi nhánh có nhiều lệnh — chỉ lệnh đầu thuộc nhánh.",
      "Đặt dấu ; ngay sau <code>if (...)</code> — máy báo else không có if."
     ]
    },
    {
     "t": "tom_tat",
     "html": "if (điều kiện) { nhánh đúng } else { nhánh sai } — mỗi lần chạy chỉ một nhánh."
    },
    {
     "t": "video",
     "yt": "KpMTXwlU270",
     "ten": "Code.org — Conditionals: If Statements",
     "ghi_chu": "Xem thêm bằng tiếng Anh: quan sát cách điều kiện chọn một nhánh. Cú pháp C++ cụ thể nằm trong ví dụ của bài. Không bắt buộc xem trên lớp.",
     "bat_dau": null,
     "ket_thuc": null
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q3",
     "q": "Theo phần Tự thử, khi người dùng gõ 11, máy in dòng nào ngay sau câu dẫn?",
     "giai": "11 >= 12 sai → nhánh else.",
     "goi_y": "Bấm tới dòng if và xem máy nhảy tới đâu.",
     "a": [
      "Phim danh cho ban tu 12 tuoi.",
      "Ban duoc xem phim nay.",
      "Cả hai dòng lần lượt",
      "Không in gì"
     ],
     "h": "1fe83ec1760bb2"
    },
    {
     "k": "mc",
     "id": "bai03-q4",
     "q": "Máy báo <code>'else' without a previous 'if'</code>. Lỗi thường gặp nhất là gì?",
     "giai": "Dấu ; kết thúc lệnh if sớm.",
     "goi_y": "Đọc phần Ba lỗi hay gặp.",
     "a": [
      "Có dấu ; ngay sau if (...)",
      "Thiếu #include <iostream>",
      "Tên biến viết hoa",
      "Thiếu câu dẫn trước cin"
     ],
     "h": "a3f764fae325"
    }
   ]
  },
  {
   "ten": "Nhiều nhánh: else if, && và ||",
   "ten_ngan": "else if, && ||",
   "phut": 3,
   "muc_tieu": "dùng else if để chọn một trong nhiều nhánh; nối điều kiện bằng && và ||.",
   "khoi_dong": "Xếp loại học lực có mấy mức? Máy phải hỏi mấy câu “nếu”?",
   "khoi": [
    {
     "t": "anh",
     "cap": "else if là chuỗi hình thoi: máy hỏi lần lượt từ trên xuống, gặp điều kiện đúng đầu tiên thì chạy nhánh đó và bỏ qua phần còn lại.",
     "alt": "else if là chuỗi hình thoi: máy hỏi lần lượt từ trên xuống, gặp điều kiện đúng đầu tiên thì chạy nhánh đó và bỏ qua phần còn lại.",
     "src": "img/so-do-khoi-xep-loai.png"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "xếp loại khi người dùng gõ 7.2",
     "huong_dan": "7.2 >= 8 sai → hỏi tiếp 7.2 >= 6.5 đúng → in Kha, bỏ qua các nhánh sau.",
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
     "tieu_de": "Nối điều kiện",
     "de": "Dùng khi cần xét hai điều kiện cùng lúc.",
     "cot": [
      "C++",
      "Nghĩa",
      "Đúng khi"
     ],
     "dong": [
      [
       "&&",
       "và",
       "CẢ HAI điều kiện đều đúng"
      ],
      [
       "||",
       "hoặc",
       "ÍT NHẤT MỘT điều kiện đúng"
      ],
      [
       "!",
       "không",
       "điều kiện sai"
      ]
     ],
     "ket_luan": "Scratch có khối “và”, “hoặc”, “không” màu xanh lá.",
     "nhan_manh": []
    },
    {
     "t": "p",
     "html": "Ví dụ: vào đội bóng rổ phải cao từ 1.6 m <b>và</b> từ 13 tuổi.<pre class=\"ma\">    <span class=\"k\">if</span> (chieuCao &gt;= <span class=\"n\">1.6</span> &amp;&amp; tuoi &gt;= <span class=\"n\">13</span>) {\n        cout &lt;&lt; <span class=\"s\">\"Du dieu kien vao doi bong ro\"</span> &lt;&lt; endl;\n    } <span class=\"k\">else</span> {\n        cout &lt;&lt; <span class=\"s\">\"Chua du dieu kien\"</span> &lt;&lt; endl;\n    }</pre>Chạy thật: cao 1.65 m, 14 tuổi → <i>Du dieu kien vao doi bong ro</i>; cao 1.7 m, 12 tuổi → <i>Chua du dieu kien</i>."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết <code>5 &lt;= diem &lt;= 10</code> như môn Toán — C++ phải viết <code>diem &gt;= 5 &amp;&amp; diem &lt;= 10</code>.",
      "Xếp else if sai thứ tự (kiểm tra &gt;= 5 trước &gt;= 8) — điểm 9 cũng ra Trung bình."
     ]
    },
    {
     "t": "tom_tat",
     "html": "else if: hỏi lần lượt, dừng ở điều kiện đúng đầu tiên. && là và, || là hoặc."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai03-q5",
     "q": "Theo phần Tự thử, người dùng gõ 6.5 thì máy in gì?",
     "giai": "6.5 >= 6.5 là đúng.",
     "goi_y": "So 6.5 với từng điều kiện từ trên xuống.",
     "a": [
      "Kha",
      "Trung binh",
      "Gioi",
      "Chua dat"
     ],
     "h": "13b49c1227fd4"
    },
    {
     "k": "mc",
     "id": "bai03-q6",
     "q": "Điều kiện “tuổi từ 13 đến 15” viết trong C++ thế nào?",
     "giai": "Cả hai điều kiện cùng đúng → &&.",
     "goi_y": "Xem bảng Nối điều kiện.",
     "a": [
      "tuoi >= 13 && tuoi <= 15",
      "13 <= tuoi <= 15",
      "tuoi >= 13 || tuoi <= 15",
      "tuoi > 13 && tuoi < 15"
     ],
     "h": "1630fa83f97915"
    }
   ]
  },
  {
   "ten": "Thử thách cặp đôi",
   "ten_ngan": "Cặp đôi",
   "phut": 7,
   "muc_tieu": "hai bạn cùng ghép, sửa và giải thích code — mỗi bạn giải thích ít nhất một dòng.",
   "khoi_dong": "Một bạn thao tác, một bạn đọc đề và kiểm tra. Sau mỗi câu thì đổi vai.",
   "khoi": [
    {
     "t": "p",
     "html": "Ba nhiệm vụ dưới đây là phần <b>PAIR</b> trên lớp. Làm xong, mỗi bạn nói cho bạn kia nghe một dòng code làm gì."
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
     "id": "bai03-q7",
     "q": "Nhiệm vụ 1 — Ghép code: sắp xếp thành chương trình báo “Mo cua” khi mật khẩu đúng là 2468.",
     "giai": "Khai báo → câu dẫn → nhập → if → nhánh đúng → else → nhánh sai.",
     "goi_y": "else luôn đi sau khối if.",
     "a": [
      "int matKhau;",
      "cout << \"Moi ban nhap mat khau: \";",
      "cin >> matKhau;",
      "if (matKhau == 2468) { cout << \"Mo cua\"; }",
      "else { cout << \"Sai mat khau\"; }",
      "return 0;"
     ],
     "h": "259830b6bcdec"
    },
    {
     "k": "mc",
     "id": "bai03-q8",
     "q": "Nhiệm vụ 2 — Thám tử lỗi: <code>if (diem = 10) cout &lt;&lt; \"Tuyet voi\";</code> luôn in Tuyet voi. Vì sao?",
     "giai": "Một dấu = là gán, luôn coi là đúng.",
     "goi_y": "Xem lại hộp “Nhầm = với ==” ở chặng 1.",
     "a": [
      "Dùng = (gán) thay cho ==",
      "Thiếu dấu ngoặc kép",
      "Phải viết IF viết hoa",
      "Thiếu else phía sau"
     ],
     "h": "153c2d7eae4ddb"
    },
    {
     "k": "dd",
     "id": "bai03-q9",
     "q": "Nhiệm vụ 3 — Chọn phép nối điều kiện.",
     "giai": "“hoặc” là ||, “và” là &&.",
     "goi_y": "Chỉ cần một điều kiện hay cần cả hai?",
     "mau": "Được giảm giá nếu là học sinh {0} trên 60 tuổi; được lái xe máy nếu đủ 18 tuổi {1} có bằng lái.",
     "o": [
      [
       "||",
       "&&",
       "!",
       "=="
      ],
      [
       "&&",
       "||",
       "!",
       "!="
      ]
     ],
     "h": "108bc10949242"
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
    "id": "bai03-q10",
    "q": "Lệnh <code>cout &lt;&lt; (4 != 4);</code> in ra gì?",
    "giai": "4 khác 4 là sai.",
    "a": [
     "0",
     "1",
     "4",
     "true"
    ],
    "h": "1a0696a6d457d0"
   },
   {
    "k": "mc",
    "id": "bai03-q11",
    "q": "Lệnh <code>cout &lt;&lt; (7 &gt; 3 &amp;&amp; 2 &gt; 5);</code> in ra gì?",
    "giai": "Một điều kiện sai → && sai.",
    "a": [
     "0",
     "1",
     "7",
     "2"
    ],
    "h": "13283d71b286bd"
   },
   {
    "k": "mc",
    "id": "bai03-q12",
    "q": "Lệnh <code>cout &lt;&lt; (7 &gt; 3 || 2 &gt; 5);</code> in ra gì?",
    "giai": "Một điều kiện đúng → || đúng.",
    "a": [
     "1",
     "0",
     "7",
     "5"
    ],
    "h": "16f4eaa4efb3c7"
   },
   {
    "k": "mc",
    "id": "bai03-q13",
    "q": "Có <code>int n = 9;</code>. <code>if (n % 3 == 0) cout &lt;&lt; \"Chia het\"; else cout &lt;&lt; \"Du\";</code> in gì?",
    "giai": "9 chia hết cho 3.",
    "a": [
     "Chia het",
     "Du",
     "Chia hetDu",
     "Không in gì"
    ],
    "h": "bfdef208321f2"
   },
   {
    "k": "mc",
    "id": "bai03-q14",
    "q": "Trong sơ đồ khối, khối quyết định có hình gì?",
    "giai": "Hình thoi có hai nhánh Đúng / Sai.",
    "a": [
     "Hình thoi",
     "Hình bình hành",
     "Hình chữ nhật",
     "Hình bầu dục"
    ],
    "h": "161325ec3779e0"
   },
   {
    "k": "mc",
    "id": "bai03-q15",
    "q": "Điều kiện nào đúng khi <code>x</code> là số lẻ?",
    "giai": "Số lẻ chia 2 dư khác 0.",
    "a": [
     "x % 2 != 0",
     "x % 2 == 0",
     "x / 2 != 0",
     "x != 2"
    ],
    "h": "1bb67e4c015cb0"
   },
   {
    "k": "mc",
    "id": "bai03-q16",
    "q": "Máy báo <code>expected '(' before 'diem'</code> ở dòng <code>if diem &gt; 5</code>. Sửa thế nào?",
    "giai": "Điều kiện phải trong ngoặc.",
    "a": [
     "Viết if (diem > 5)",
     "Viết IF diem > 5",
     "Thêm ; sau diem",
     "Viết if diem >> 5"
    ],
    "h": "1f68c62cdfae15"
   },
   {
    "k": "mc",
    "id": "bai03-q17",
    "q": "Chuỗi else if xét điểm theo thứ tự nào để xếp loại đúng?",
    "giai": "Gặp điều kiện đúng đầu tiên thì dừng.",
    "a": [
     "Từ mức cao xuống mức thấp",
     "Từ mức thấp lên mức cao",
     "Thứ tự nào cũng như nhau",
     "Chỉ cần một điều kiện"
    ],
    "h": "e0acf4b0cf5e6"
   },
   {
    "k": "ma",
    "id": "bai03-q18",
    "q": "Hai điều kiện nào đúng khi <code>a = 5</code>? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "5 >= 5; 5 khác 4.",
    "a": [
     "a >= 5",
     "a != 4",
     "a > 5",
     "a == 4"
    ],
    "h": "195a6699e68367"
   },
   {
    "k": "ma",
    "id": "bai03-q19",
    "q": "Hai cách viết nào đúng cú pháp C++? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Ngoặc tròn; dấu >= viết đúng.",
    "a": [
     "if (x > 0) { }",
     "if (x == 0) { } else { }",
     "if x > 0 { }",
     "if (x => 0) { }"
    ],
    "h": "abbcf5f1e78b8"
   },
   {
    "k": "ma",
    "id": "bai03-q20",
    "q": "Hai điều nào đúng về if – else? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Một trong hai nhánh.",
    "a": [
     "Mỗi lần chạy chỉ một nhánh",
     "else không có điều kiện riêng",
     "Cả hai nhánh đều chạy",
     "else đứng trước if"
    ],
    "h": "cc8b48b4d1193"
   },
   {
    "k": "ma",
    "id": "bai03-q21",
    "q": "Hai điều kiện nào đúng với người 16 tuổi? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Thay 16 vào từng điều kiện.",
    "a": [
     "tuoi >= 13 && tuoi <= 18",
     "tuoi < 10 || tuoi > 15",
     "tuoi > 18 || tuoi < 13",
     "tuoi >= 13 && tuoi < 16"
    ],
    "h": "1a97e6516b87a"
   },
   {
    "k": "sx",
    "id": "bai03-q22",
    "q": "Sắp xếp chuỗi xếp loại theo đúng thứ tự kiểm tra.",
    "giai": "Từ mức cao xuống thấp.",
    "a": [
     "if (diem >= 8) Gioi",
     "else if (diem >= 6.5) Kha",
     "else if (diem >= 5) Trung binh",
     "else Chua dat"
    ],
    "h": "10e9fd51e3c8e7"
   },
   {
    "k": "sx",
    "id": "bai03-q23",
    "q": "Sắp xếp các bước máy chạy lệnh if – else.",
    "giai": "Kiểm tra → chọn nhánh → chạy tiếp.",
    "a": [
     "Tính điều kiện trong ngoặc",
     "Điều kiện đúng thì chạy khối if",
     "Điều kiện sai thì chạy khối else",
     "Chạy tiếp lệnh sau if – else"
    ],
    "h": "135e6d5397657a"
   },
   {
    "k": "dd",
    "id": "bai03-q24",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Hai dấu =; dấu ! rồi dấu =.",
    "mau": "So sánh bằng viết {0}; so sánh khác viết {1}.",
    "o": [
     [
      "==",
      "=",
      "=>",
      "<>"
     ],
     [
      "!=",
      "=!",
      "<>",
      "=="
     ]
    ],
    "h": "17da3a30ca0283"
   },
   {
    "k": "dd",
    "id": "bai03-q25",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "và / hoặc.",
    "mau": "Cả hai điều kiện cùng đúng dùng {0}; chỉ cần một điều kiện đúng dùng {1}.",
    "o": [
     [
      "&&",
      "||",
      "!",
      "=="
     ],
     [
      "||",
      "&&",
      "!",
      "!="
     ]
    ],
    "h": "1a309eadcd458e"
   },
   {
    "k": "dd",
    "id": "bai03-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "1 / 0.",
    "mau": "Máy in điều kiện đúng thành {0}, điều kiện sai thành {1}.",
    "o": [
     [
      "1",
      "0",
      "đúng",
      "true"
     ],
     [
      "0",
      "1",
      "sai",
      "false"
     ]
    ],
    "h": "136ca8481095af"
   },
   {
    "k": "dd",
    "id": "bai03-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "if – else.",
    "mau": "Khối Scratch “nếu … thì … không thì” giống lệnh {0} … {1} của C++.",
    "o": [
     [
      "if",
      "for",
      "cin",
      "else"
     ],
     [
      "else",
      "if",
      "cout",
      "while"
     ]
    ],
    "h": "89715bc6d1ef6"
   },
   {
    "k": "ds",
    "id": "bai03-q28",
    "q": "<code>if (x = 5)</code> và <code>if (x == 5)</code> làm cùng một việc.",
    "giai": "= là gán, == là so sánh.",
    "h": "c4bc7fdd03cf"
   },
   {
    "k": "ds",
    "id": "bai03-q29",
    "q": "Trong một chuỗi if – else if – else, có thể có nhiều nhánh cùng chạy.",
    "giai": "Chỉ một nhánh chạy.",
    "h": "31f7a03659abb"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Lập trình C++. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
