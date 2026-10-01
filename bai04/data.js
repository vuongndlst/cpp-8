window.BAI = {
 "bai": 4,
 "ma": "bai04",
 "nhan": "Bài 4",
 "tieu_de": "Lặp lại",
 "phan": "Module 02 · Decisions and Loops",
 "cau_hoi": "Làm sao để máy tính làm một việc 100 lần mà con chỉ viết vài dòng?",
 "gioi_thieu": [
  "In bảng cửu chương 7 cần 10 lệnh cout giống hệt nhau, chỉ khác một con số. Viết tay thì mỏi, sai một dòng là hỏng. Máy tính có cách hay hơn: <b>vòng lặp</b>.",
  "Bài này con dùng vòng lặp <code>for</code> (lặp đủ số lần), biến đếm, biến tổng và vòng lặp <code>while</code> (lặp cho tới khi). Trong Scratch, đó là khối “lặp lại 10” và “lặp lại cho đến khi”.",
  "Mọi đoạn code, kết quả và thông báo lỗi trên trang đều là kết quả chạy thật bằng trình biên dịch g++."
 ],
 "thoi_gian": "≈ 10 phút + 7 phút cặp đôi",
 "muoi": "LSTS-ML1-WEB|bai04",
 "muc_tieu": [
  "Viết vòng lặp for chạy đúng số lần.",
  "Dùng biến đếm và biến tổng trong vòng lặp.",
  "Dùng while để lặp cho tới khi điều kiện sai.",
  "Tránh lỗi thừa / thiếu một vòng và vòng lặp vô hạn."
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
   "ten": "Vòng lặp for",
   "ten_ngan": "for",
   "phut": 4,
   "muc_tieu": "viết được vòng lặp for và đếm được số lần thân lặp chạy.",
   "khoi_dong": "Khối Scratch “lặp lại 10” chứa các khối bên trong chạy mấy lần?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Vòng lặp",
     "html": "Một nhóm lệnh (<b>thân lặp</b>) được máy chạy <b>nhiều lần</b>. Vòng lặp <code>for</code> dùng khi biết trước số lần lặp.",
     "ky_hieu": "loop"
    },
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"p\">#include &lt;iostream&gt;</span>\n<span class=\"ln\"> 2  </span><span class=\"k\">using</span> <span class=\"k\">namespace</span> std;\n<span class=\"ln\"> 3  </span>\n<span class=\"ln\"> 4  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 5  </span>    <span class=\"k\">for</span> (<span class=\"k\">int</span> i = <span class=\"n\">1</span>; i &lt;= <span class=\"n\">5</span>; i++) {\n<span class=\"ln\"> 6  </span>        cout &lt;&lt; <span class=\"s\">\"Lan \"</span> &lt;&lt; i &lt;&lt; endl;\n<span class=\"ln\"> 7  </span>    }\n<span class=\"ln\"> 8  </span>    cout &lt;&lt; <span class=\"s\">\"Xong!\"</span> &lt;&lt; endl;\n<span class=\"ln\"> 9  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">10  </span>}</pre>"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "vòng lặp for 5 lần",
     "huong_dan": "Bấm “Chạy dòng tiếp” và nhìn biến i: 1, 2, 3, 4, 5 — mỗi lần thân lặp in một dòng. Khi i thành 6, điều kiện i <= 5 sai, máy thoát vòng lặp.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    for (int i = 1; i <= 5; i++) {",
      "        cout << \"Lan \" << i << endl;",
      "    }",
      "    cout << \"Xong!\" << endl;",
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
        "i": [
         "1",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {
        "i": [
         "1",
         "int"
        ]
       },
       "in": "Lan 1\n",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "2",
         "int"
        ]
       },
       "in": "Lan 1\n",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {
        "i": [
         "2",
         "int"
        ]
       },
       "in": "Lan 1\nLan 2\n",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "3",
         "int"
        ]
       },
       "in": "Lan 1\nLan 2\n",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {
        "i": [
         "3",
         "int"
        ]
       },
       "in": "Lan 1\nLan 2\nLan 3\n",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "4",
         "int"
        ]
       },
       "in": "Lan 1\nLan 2\nLan 3\n",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {
        "i": [
         "4",
         "int"
        ]
       },
       "in": "Lan 1\nLan 2\nLan 3\nLan 4\n",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "i": [
         "5",
         "int"
        ]
       },
       "in": "Lan 1\nLan 2\nLan 3\nLan 4\n",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {
        "i": [
         "5",
         "int"
        ]
       },
       "in": "Lan 1\nLan 2\nLan 3\nLan 4\nLan 5\n",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {},
       "in": "Lan 1\nLan 2\nLan 3\nLan 4\nLan 5\n",
       "ham": "main"
      },
      {
       "dong": 8,
       "bien": {},
       "in": "Lan 1\nLan 2\nLan 3\nLan 4\nLan 5\nXong!\n",
       "ham": "main"
      },
      {
       "dong": 9,
       "bien": {},
       "in": "Lan 1\nLan 2\nLan 3\nLan 4\nLan 5\nXong!\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "Ba phần của for",
     "de": "for (khởi tạo; điều kiện; bước) { thân lặp }",
     "cot": [
      "Phần",
      "Ví dụ",
      "Nghĩa"
     ],
     "dong": [
      [
       "khởi tạo",
       "int i = 1",
       "biến đếm bắt đầu từ 1 (chạy một lần)"
      ],
      [
       "điều kiện",
       "i <= 5",
       "còn đúng thì còn lặp"
      ],
      [
       "bước",
       "i++",
       "sau mỗi vòng, i tăng 1"
      ]
     ],
     "ket_luan": "Ba phần ngăn nhau bằng dấu chấm phẩy ;",
     "nhan_manh": []
    },
    {
     "t": "p",
     "html": "Bước không nhất thiết là 1: <code>i += 3</code> tăng mỗi lần 3 đơn vị.<pre class=\"ma\">    <span class=\"k\">for</span> (<span class=\"k\">int</span> i = <span class=\"n\">2</span>; i &lt;= <span class=\"n\">10</span>; i += <span class=\"n\">3</span>) {\n        cout &lt;&lt; i &lt;&lt; <span class=\"s\">\" \"</span>;\n    }</pre><pre class=\"man-hinh\">2 5 8 </pre>"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết <code>i &lt; 5</code> khi muốn chạy tới 5 — thiếu một vòng.",
      "Đặt dấu <code>;</code> ngay sau <code>for (...)</code> — thân lặp chỉ chạy một lần."
     ]
    },
    {
     "t": "tom_tat",
     "html": "for (int i = 1; i <= n; i++) chạy thân lặp n lần, i lần lượt là 1, 2, …, n."
    },
    {
     "t": "video",
     "yt": "EF3laugNVCI",
     "ten": "Code.org — For Loops",
     "ghi_chu": "Xem thêm bằng tiếng Anh: theo dõi biến đếm và số lần lặp. Ví dụ trong video dùng cú pháp khác C++; hãy đối chiếu với vòng for trong bài. Không bắt buộc xem trên lớp.",
     "bat_dau": null,
     "ket_thuc": null
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai04-q1",
     "q": "Vòng lặp <code>for (int i = 1; i &lt;= 4; i++)</code> chạy thân lặp mấy lần?",
     "giai": "i = 1, 2, 3, 4.",
     "goi_y": "Liệt kê các giá trị của i.",
     "a": [
      "4",
      "3",
      "5",
      "1"
     ],
     "h": "1f33d50a313cfc"
    },
    {
     "k": "mc",
     "id": "bai04-q2",
     "q": "Lệnh <code>for (int i = 0; i &lt; 3; i++) cout &lt;&lt; i;</code> in ra gì?",
     "giai": "i = 0, 1, 2.",
     "goi_y": "i bắt đầu từ 0 và dừng khi i < 3 sai.",
     "a": [
      "012",
      "123",
      "0123",
      "3"
     ],
     "h": "18ff496e8f6532"
    }
   ]
  },
  {
   "ten": "Biến đếm và biến tổng",
   "ten_ngan": "Đếm và tổng",
   "phut": 3,
   "muc_tieu": "dùng biến tổng và biến đếm để cộng dồn, đếm trong vòng lặp.",
   "khoi_dong": "Con cộng 1 + 3 + 5 + 7 + 9 thế nào? Có phải nhớ kết quả sau mỗi bước không?",
   "khoi": [
    {
     "t": "anh",
     "cap": "Sơ đồ khối vòng lặp: hình thoi hỏi điều kiện; Đúng thì chạy thân lặp rồi quay lại hình thoi; Sai thì thoát ra, in kết quả.",
     "alt": "Sơ đồ khối vòng lặp: hình thoi hỏi điều kiện; Đúng thì chạy thân lặp rồi quay lại hình thoi; Sai thì thoát ra, in kết quả.",
     "src": "img/so-do-khoi-tong-so-le.png"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "cộng dồn các số lẻ",
     "huong_dan": "Nhìn bảng Biến: mỗi vòng, tong được cộng thêm i. tong: 0 → 1 → 4 → 9 → 16 → 25.",
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
     "t": "hop",
     "kieu": "vi-du",
     "tieu_de": "Biến đếm",
     "html": "Muốn đếm có bao nhiêu số thỏa điều kiện, dùng một biến bắt đầu từ 0 và tăng 1 mỗi lần gặp:<pre class=\"ma\">    <span class=\"k\">int</span> dem = <span class=\"n\">0</span>;\n    <span class=\"k\">for</span> (<span class=\"k\">int</span> i = <span class=\"n\">1</span>; i &lt;= <span class=\"n\">20</span>; i++) {\n        <span class=\"k\">if</span> (i % <span class=\"n\">3</span> == <span class=\"n\">0</span>) {\n            dem++;\n        }\n    }\n    cout &lt;&lt; <span class=\"s\">\"Tu 1 den 20 co \"</span> &lt;&lt; dem &lt;&lt; <span class=\"s\">\" so chia het cho 3\"</span> &lt;&lt; endl;</pre><pre class=\"man-hinh\">Tu 1 den 20 co 6 so chia het cho 3</pre>"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Quên đặt <code>tong = 0</code> trước vòng lặp — biến chưa có giá trị, kết quả bậy.",
      "Khai báo <code>int tong = 0;</code> <b>bên trong</b> vòng lặp — mỗi vòng lại về 0."
     ]
    },
    {
     "t": "tom_tat",
     "html": "Biến tổng: bắt đầu 0, mỗi vòng tong = tong + … . Biến đếm: bắt đầu 0, gặp thì dem++."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai04-q3",
     "q": "Theo phần Tự thử, sau vòng lặp thứ ba, biến tong bằng bao nhiêu?",
     "giai": "1 + 3 + 5 = 9.",
     "goi_y": "Bấm tới lần thứ ba máy chạy dòng tong = tong + i;",
     "a": [
      "9",
      "5",
      "6",
      "25"
     ],
     "h": "1507b7d75c5cba"
    },
    {
     "k": "mc",
     "id": "bai04-q4",
     "q": "Biến tổng nên bắt đầu từ giá trị nào trước vòng lặp cộng dồn?",
     "giai": "Chưa cộng gì thì tổng là 0.",
     "goi_y": "Xem mục Lỗi hay gặp.",
     "a": [
      "0",
      "1",
      "Giá trị cuối cùng",
      "Không cần gán"
     ],
     "h": "1019252ba2fd81"
    }
   ]
  },
  {
   "ten": "Vòng lặp while",
   "ten_ngan": "while",
   "phut": 3,
   "muc_tieu": "dùng while để lặp khi chưa biết trước số lần; tránh vòng lặp vô hạn.",
   "khoi_dong": "Khối Scratch “lặp lại cho đến khi …” dừng lúc nào?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Vòng lặp while",
     "html": "<code>while (điều kiện) { thân lặp }</code>: máy kiểm tra điều kiện, <b>còn đúng thì còn lặp</b>. Dùng khi chưa biết trước phải lặp mấy lần.",
     "ky_hieu": "while loop"
    },
    {
     "t": "anh",
     "cap": "while đếm ngược: mỗi vòng in giay rồi giảm 1; khi giay về 0 thì điều kiện sai, thoát ra.",
     "alt": "while đếm ngược: mỗi vòng in giay rồi giảm 1; khi giay về 0 thì điều kiện sai, thoát ra.",
     "src": "img/so-do-khoi-dem-nguoc.png"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "đếm ngược 5 giây",
     "huong_dan": "Theo dõi giay: 5 → 4 → 3 → 2 → 1 → 0. Khi giay là 0, giay > 0 sai, máy in Phong!.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    int giay = 5;",
      "    while (giay > 0) {",
      "        cout << giay << \" \";",
      "        giay--;",
      "    }",
      "    cout << \"Phong!\" << endl;",
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
        "giay": [
         "5",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "giay": [
         "5",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "giay": [
         "5",
         "int"
        ]
       },
       "in": "5 ",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "giay": [
         "4",
         "int"
        ]
       },
       "in": "5 ",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "giay": [
         "4",
         "int"
        ]
       },
       "in": "5 ",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "giay": [
         "4",
         "int"
        ]
       },
       "in": "5 4 ",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "giay": [
         "3",
         "int"
        ]
       },
       "in": "5 4 ",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "giay": [
         "3",
         "int"
        ]
       },
       "in": "5 4 ",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "giay": [
         "3",
         "int"
        ]
       },
       "in": "5 4 3 ",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "giay": [
         "2",
         "int"
        ]
       },
       "in": "5 4 3 ",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "giay": [
         "2",
         "int"
        ]
       },
       "in": "5 4 3 ",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "giay": [
         "2",
         "int"
        ]
       },
       "in": "5 4 3 2 ",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "giay": [
         "1",
         "int"
        ]
       },
       "in": "5 4 3 2 ",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "giay": [
         "1",
         "int"
        ]
       },
       "in": "5 4 3 2 ",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "giay": [
         "1",
         "int"
        ]
       },
       "in": "5 4 3 2 1 ",
       "ham": "main"
      },
      {
       "dong": 5,
       "bien": {
        "giay": [
         "0",
         "int"
        ]
       },
       "in": "5 4 3 2 1 ",
       "ham": "main"
      },
      {
       "dong": 9,
       "bien": {
        "giay": [
         "0",
         "int"
        ]
       },
       "in": "5 4 3 2 1 ",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "giay": [
         "0",
         "int"
        ]
       },
       "in": "5 4 3 2 1 Phong!\n",
       "ham": "main"
      },
      {
       "dong": 11,
       "bien": {
        "giay": [
         "0",
         "int"
        ]
       },
       "in": "5 4 3 2 1 Phong!\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "p",
     "html": "while rất hợp để <b>bắt người dùng nhập lại</b> cho tới khi đúng. Mỗi lần nhập lại vẫn có câu dẫn:<pre class=\"ma\">    <span class=\"k\">int</span> so;\n    cout &lt;&lt; <span class=\"s\">\"Moi ban nhap mot so duong: \"</span>;\n    cin &gt;&gt; so;\n    <span class=\"k\">while</span> (so &lt;= <span class=\"n\">0</span>) {\n        cout &lt;&lt; <span class=\"s\">\"Chua dung. Moi ban nhap lai: \"</span>;\n        cin &gt;&gt; so;\n    }\n    cout &lt;&lt; <span class=\"s\">\"Cam on, ban da nhap \"</span> &lt;&lt; so &lt;&lt; endl;</pre>Chạy thật, người dùng gõ -3, 0, rồi 8:<pre class=\"man-hinh\">Moi ban nhap mot so duong: -3\nChua dung. Moi ban nhap lai: 0\nChua dung. Moi ban nhap lai: 8\nCam on, ban da nhap 8</pre>"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Vòng lặp vô hạn",
     "html": "Quên dòng <code>giay--;</code> thì giay mãi là 5, điều kiện luôn đúng — máy lặp không bao giờ dừng. Trên OnlineGDB, bấm <b>Stop</b> rồi sửa code."
    },
    {
     "t": "h",
     "text": "Ba lỗi hay gặp — và máy báo thế nào"
    },
    {
     "t": "p",
     "html": "<b>Dấu phẩy thay cho dấu ; trong for</b> — dòng <code>for (int i = 1, i &lt;= 5, i++) {</code><pre class=\"man-hinh loi\">main.cpp:5:22: error: expected ';' before '&lt;=' token</pre>Sửa: Ba phần của for ngăn bằng dấu ;."
    },
    {
     "t": "p",
     "html": "<b>Dùng i ở ngoài vòng lặp</b> — dòng <code>cout &lt;&lt; i;</code><pre class=\"man-hinh loi\">main.cpp:8:13: error: 'i' was not declared in this scope</pre>Sửa: i chỉ sống trong vòng lặp — khai báo bên ngoài nếu cần dùng sau."
    },
    {
     "t": "p",
     "html": "<b>Thiếu ngoặc điều kiện while</b> — dòng <code>while giay > 0 {</code><pre class=\"man-hinh loi\">main.cpp:6:11: error: expected '(' before 'giay'</pre>Sửa: Điều kiện nằm trong ngoặc tròn: while (giay > 0)."
    },
    {
     "t": "tom_tat",
     "html": "for: biết trước số lần. while: lặp cho tới khi điều kiện sai — nhớ thay đổi biến trong thân lặp."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai04-q5",
     "q": "Theo phần Tự thử, thân vòng lặp while đếm ngược chạy mấy lần?",
     "giai": "giay = 5, 4, 3, 2, 1.",
     "goi_y": "Đếm số lần máy in một con số.",
     "a": [
      "5",
      "4",
      "6",
      "0"
     ],
     "h": "6fe6140465192"
    },
    {
     "k": "mc",
     "id": "bai04-q6",
     "q": "Vòng lặp <code>while (x &gt; 0) { cout &lt;&lt; x; }</code> với x = 3 sẽ thế nào?",
     "giai": "x không bao giờ thay đổi.",
     "goi_y": "Đọc hộp Vòng lặp vô hạn.",
     "a": [
      "Lặp mãi không dừng",
      "In 321 rồi dừng",
      "Không in gì cả",
      "Máy báo lỗi ngay"
     ],
     "h": "2bf5b8984c99d"
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
     "id": "bai04-q7",
     "q": "Nhiệm vụ 1 — Ghép code: sắp xếp thành chương trình tính tổng 5 số người dùng nhập.",
     "giai": "Biến tổng → for → khai báo → câu dẫn → nhập, cộng dồn → in.",
     "goi_y": "Biến tổng phải đặt trước vòng lặp.",
     "a": [
      "int tong = 0;",
      "for (int i = 1; i <= 5; i++) {",
      "    int so;",
      "    cout << \"Moi ban nhap mot so: \";",
      "    cin >> so;  tong = tong + so;",
      "} cout << \"Tong: \" << tong;"
     ],
     "h": "141e23d6689e2d"
    },
    {
     "k": "mc",
     "id": "bai04-q8",
     "q": "Nhiệm vụ 2 — Thám tử lỗi: <code>for (int i = 1; i &lt; 10; i++)</code> định in 10 dòng nhưng chỉ in 9. Sửa thế nào?",
     "giai": "i < 10 dừng ở 9.",
     "goi_y": "Liệt kê các giá trị i.",
     "a": [
      "Đổi i < 10 thành i <= 10",
      "Đổi i++ thành i--",
      "Đổi int i = 1 thành 10",
      "Thêm ; sau for (...)"
     ],
     "h": "1dec118aa0a92e"
    },
    {
     "k": "dd",
     "id": "bai04-q9",
     "q": "Nhiệm vụ 3 — Chọn vòng lặp phù hợp.",
     "giai": "Biết trước số lần → for; chưa biết → while.",
     "goi_y": "Con có biết trước phải lặp mấy lần không?",
     "mau": "In 20 lần chữ Xin chao dùng {0}; hỏi mật khẩu đến khi đúng dùng {1}.",
     "o": [
      [
       "for",
       "while",
       "if",
       "else"
      ],
      [
       "while",
       "for",
       "if",
       "cout"
      ]
     ],
     "h": "593cdc523375e"
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
    "id": "bai04-q10",
    "q": "Vòng lặp <code>for (int i = 1; i &lt;= 10; i++)</code> chạy mấy lần?",
    "giai": "i từ 1 đến 10.",
    "a": [
     "10",
     "9",
     "11",
     "1"
    ],
    "h": "13059364ec2eec"
   },
   {
    "k": "mc",
    "id": "bai04-q11",
    "q": "Lệnh <code>for (int i = 1; i &lt;= 3; i++) cout &lt;&lt; \"*\";</code> in ra gì?",
    "giai": "3 lần, không cách.",
    "a": [
     "***",
     "*",
     "****",
     "* * *"
    ],
    "h": "b9d19b20529f0"
   },
   {
    "k": "mc",
    "id": "bai04-q12",
    "q": "Lệnh <code>for (int i = 5; i &gt;= 1; i--) cout &lt;&lt; i;</code> in ra gì?",
    "giai": "Đếm lùi.",
    "a": [
     "54321",
     "12345",
     "5",
     "54321 0"
    ],
    "h": "1a30f09bd79a90"
   },
   {
    "k": "mc",
    "id": "bai04-q13",
    "q": "Lệnh <code>for (int i = 0; i &lt;= 10; i += 5) cout &lt;&lt; i &lt;&lt; \" \";</code> in ra gì?",
    "giai": "Bước 5.",
    "a": [
     "0 5 10 ",
     "0 5",
     "5 10",
     "0 5 10 15"
    ],
    "h": "922cb14ade0ff"
   },
   {
    "k": "mc",
    "id": "bai04-q14",
    "q": "Sau <code>int t = 0; for (int i = 1; i &lt;= 4; i++) t = t + 2;</code>, t bằng bao nhiêu?",
    "giai": "Cộng 2 bốn lần.",
    "a": [
     "8",
     "2",
     "10",
     "6"
    ],
    "h": "e308f4787267d"
   },
   {
    "k": "mc",
    "id": "bai04-q15",
    "q": "Sau <code>int k = 1; while (k &lt; 20) k = k * 2;</code>, k bằng bao nhiêu?",
    "giai": "1, 2, 4, 8, 16, 32.",
    "a": [
     "32",
     "16",
     "20",
     "8"
    ],
    "h": "1e218d11bd1bb2"
   },
   {
    "k": "mc",
    "id": "bai04-q16",
    "q": "Khi nào nên dùng while thay cho for?",
    "giai": "Lặp cho tới khi.",
    "a": [
     "Khi chưa biết trước số lần lặp",
     "Khi muốn lặp đúng 10 lần",
     "Khi không cần điều kiện",
     "Khi chỉ chạy một lần"
    ],
    "h": "47777e5c047d6"
   },
   {
    "k": "mc",
    "id": "bai04-q17",
    "q": "Máy báo <code>'i' was not declared in this scope</code> ở dòng sau vòng for. Vì sao?",
    "giai": "Biến khai báo trong for chỉ dùng trong for.",
    "a": [
     "i chỉ tồn tại trong vòng lặp",
     "Quên dấu ; cuối dòng",
     "Viết hoa chữ for",
     "Thiếu câu dẫn"
    ],
    "h": "70ff31c40d54d"
   },
   {
    "k": "ma",
    "id": "bai04-q18",
    "q": "Hai vòng lặp nào chạy thân lặp đúng 5 lần? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Đếm các giá trị của i.",
    "a": [
     "for (int i = 1; i <= 5; i++)",
     "for (int i = 0; i < 5; i++)",
     "for (int i = 1; i < 5; i++)",
     "for (int i = 0; i <= 5; i++)"
    ],
    "h": "74cbc26599228"
   },
   {
    "k": "ma",
    "id": "bai04-q19",
    "q": "Hai điều nào đúng về biến tổng? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "tong = 0; tong = tong + …",
    "a": [
     "Gán 0 trước vòng lặp",
     "Cộng dồn trong thân lặp",
     "Khai báo lại mỗi vòng",
     "Luôn bắt đầu từ 1"
    ],
    "h": "34217d56157ce"
   },
   {
    "k": "ma",
    "id": "bai04-q20",
    "q": "Hai việc nào hợp với vòng lặp while? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Chưa biết trước số lần.",
    "a": [
     "Hỏi mật khẩu đến khi đúng",
     "Chơi tiếp đến khi hết mạng",
     "In đúng 12 tháng trong năm",
     "In bảng cửu chương 10 dòng"
    ],
    "h": "7c1d740ef19af"
   },
   {
    "k": "ma",
    "id": "bai04-q21",
    "q": "Hai cách nào gây vòng lặp vô hạn? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Điều kiện luôn đúng.",
    "a": [
     "while (x > 0) { cout << x; }",
     "for (int i = 1; i > 0; i++)",
     "for (int i = 1; i <= 3; i++)",
     "while (x > 0) { x--; }"
    ],
    "h": "bd3694247d7d6"
   },
   {
    "k": "sx",
    "id": "bai04-q22",
    "q": "Sắp xếp các bước máy chạy một vòng for.",
    "giai": "Khởi tạo → kiểm tra → thân → bước → kiểm tra lại…",
    "a": [
     "Chạy phần khởi tạo (một lần)",
     "Kiểm tra điều kiện",
     "Chạy thân lặp",
     "Chạy phần bước (i++)"
    ],
    "h": "1cf8dfbf63c38f"
   },
   {
    "k": "sx",
    "id": "bai04-q23",
    "q": "Sắp xếp chương trình đếm ngược từ 3.",
    "giai": "Khai báo → while → in → giảm → kết.",
    "a": [
     "int n = 3;",
     "while (n > 0) {",
     "    cout << n;",
     "    n--;",
     "} cout << \"Het gio\";"
    ],
    "h": "111960186e8063"
   },
   {
    "k": "dd",
    "id": "bai04-q24",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cú pháp for.",
    "mau": "Ba phần của for ngăn nhau bằng dấu {0}; i++ nghĩa là tăng i thêm {1}.",
    "o": [
     [
      ";",
      ",",
      ":",
      "."
     ],
     [
      "1",
      "2",
      "10",
      "i"
     ]
    ],
    "h": "85d02f02ac534"
   },
   {
    "k": "dd",
    "id": "bai04-q25",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cầu nối Scratch.",
    "mau": "Khối “lặp lại 10” giống lệnh {0}; khối “lặp lại cho đến khi” giống lệnh {1}.",
    "o": [
     [
      "for",
      "while",
      "if",
      "cin"
     ],
     [
      "while",
      "for",
      "else",
      "cout"
     ]
    ],
    "h": "cf0c0cb5b40be"
   },
   {
    "k": "dd",
    "id": "bai04-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Đếm.",
    "mau": "Biến đếm bắt đầu từ {0}; mỗi lần gặp thì viết {1}.",
    "o": [
     [
      "0",
      "1",
      "10",
      "-1"
     ],
     [
      "dem++",
      "dem = 0",
      "dem--",
      "dem == 1"
     ]
    ],
    "h": "22265557306"
   },
   {
    "k": "dd",
    "id": "bai04-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Điều kiện lặp.",
    "mau": "while lặp khi điều kiện còn {0}; thoát khi điều kiện {1}.",
    "o": [
     [
      "đúng",
      "sai",
      "bằng 1",
      "rỗng"
     ],
     [
      "sai",
      "đúng",
      "lớn",
      "bằng 0"
     ]
    ],
    "h": "bf622abeafb1f"
   },
   {
    "k": "ds",
    "id": "bai04-q28",
    "q": "Biến khai báo trong phần khởi tạo của for vẫn dùng được sau vòng lặp.",
    "giai": "Chỉ sống trong for.",
    "h": "3c9ee9fad162c"
   },
   {
    "k": "ds",
    "id": "bai04-q29",
    "q": "Thân vòng while có thể không chạy lần nào nếu điều kiện sai ngay từ đầu.",
    "giai": "Kiểm tra trước khi lặp.",
    "h": "7c17058d2c88b"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Lập trình C++. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
