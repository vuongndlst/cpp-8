window.BAI = {
 "bai": 2,
 "ma": "bai02",
 "nhan": "Bài 2",
 "tieu_de": "Máy tính làm toán",
 "phan": "Module 01 · Foundations",
 "cau_hoi": "Máy tính làm toán có giống con làm toán không?",
 "gioi_thieu": [
  "Con chia 17 viên kẹo cho 5 bạn: mỗi bạn 3 viên, dư 2 viên. Máy tính cũng chia được như vậy — nhưng có lúc máy cho kết quả <b>khác hẳn</b> điều con đoán, ví dụ 7 / 2 lại ra 3.",
  "Bài này con dùng các phép toán của C++, hiểu vì sao máy chia nguyên, dùng phép chia lấy dư % và cập nhật giá trị của biến. Mỗi phép toán đều có khối Scratch xanh lá “anh em”.",
  "Mọi đoạn code, kết quả và thông báo lỗi trên trang đều là kết quả chạy thật bằng trình biên dịch g++."
 ],
 "thoi_gian": "≈ 10 phút + 7 phút cặp đôi",
 "muoi": "LSTS-ML1-WEB|bai02",
 "muc_tieu": [
  "Dùng đúng năm phép toán + − * / % và thứ tự tính.",
  "Giải thích vì sao 7 / 2 ra 3 và cách lấy kết quả 3.5.",
  "Dùng / và % để đổi đơn vị (phút → giờ, ngày → tuần).",
  "Cập nhật giá trị biến bằng phép gán =, += và ++."
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
   "ten": "Phép toán và thứ tự tính",
   "ten_ngan": "Phép toán",
   "phut": 3,
   "muc_tieu": "dùng đúng + − * / và biết máy tính theo thứ tự nào.",
   "khoi_dong": "Trong Scratch, khối xanh lá ( ) + ( ) dùng để làm gì? C++ viết phép cộng thế nào?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Biểu thức",
     "html": "Một dãy gồm <b>số, biến và phép toán</b> mà máy tính ra được một giá trị. Ví dụ <code>soVo * giaVo</code> là một biểu thức.",
     "ky_hieu": "expression"
    },
    {
     "t": "vi_du",
     "tieu_de": "Khối Scratch và phép toán C++",
     "de": "Phép toán C++ viết bằng ký hiệu trên bàn phím.",
     "cot": [
      "Scratch",
      "C++",
      "Ví dụ",
      "Kết quả"
     ],
     "dong": [
      [
       "( ) + ( )",
       "+",
       "17 + 5",
       "22"
      ],
      [
       "( ) − ( )",
       "-",
       "17 - 5",
       "12"
      ],
      [
       "( ) * ( )",
       "*",
       "17 * 5",
       "85"
      ],
      [
       "( ) / ( )",
       "/",
       "17 / 5",
       "3 (chia nguyên)"
      ],
      [
       "phần dư của ( ) chia ( )",
       "%",
       "17 % 5",
       "2"
      ]
     ],
     "ket_luan": "Dấu nhân là * (không phải x), dấu chia là / (không phải :).",
     "nhan_manh": []
    },
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"p\">#include &lt;iostream&gt;</span>\n<span class=\"ln\"> 2  </span><span class=\"k\">using</span> <span class=\"k\">namespace</span> std;\n<span class=\"ln\"> 3  </span>\n<span class=\"ln\"> 4  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 5  </span>    <span class=\"k\">int</span> soVo = <span class=\"n\">5</span>;\n<span class=\"ln\"> 6  </span>    <span class=\"k\">int</span> giaVo = <span class=\"n\">12</span>;\n<span class=\"ln\"> 7  </span>    <span class=\"k\">int</span> tongTien = soVo * giaVo;\n<span class=\"ln\"> 8  </span>    cout &lt;&lt; <span class=\"s\">\"Tong tien: \"</span> &lt;&lt; tongTien &lt;&lt; <span class=\"s\">\" nghin dong\"</span> &lt;&lt; endl;\n<span class=\"ln\"> 9  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">10  </span>}</pre><pre class=\"man-hinh\">Tong tien: 60 nghin dong</pre>"
    },
    {
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Máy tính theo thứ tự nào?",
     "html": "Giống môn Toán: <b>trong ngoặc trước</b>, rồi <b>nhân, chia, chia dư</b>, sau cùng mới <b>cộng, trừ</b>. Chạy thật:<pre class=\"ma\">    cout &lt;&lt; <span class=\"n\">2</span> + <span class=\"n\">3</span> * <span class=\"n\">4</span> &lt;&lt; endl;\n    cout &lt;&lt; (<span class=\"n\">2</span> + <span class=\"n\">3</span>) * <span class=\"n\">4</span> &lt;&lt; endl;</pre><pre class=\"man-hinh\">14\n20</pre>"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết <code>x</code> hoặc <code>:</code> cho phép nhân, chia — máy không hiểu.",
      "Quên ngoặc: muốn (2 + 3) × 4 mà viết <code>2 + 3 * 4</code> thì ra 14, không phải 20."
     ]
    },
    {
     "t": "tom_tat",
     "html": "+ − * / %; trong ngoặc trước, nhân chia trước cộng trừ."
    },
    {
     "t": "video",
     "yt": "f1xZf4iJDWE",
     "ten": "Harvard CS50 — Operators",
     "ghi_chu": "Xem thêm bằng tiếng Anh: chú ý +, -, *, / và %. Video dùng ngôn ngữ C; các phép toán này cũng dùng trong C++. Không bắt buộc xem trên lớp.",
     "bat_dau": null,
     "ket_thuc": null
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai02-q1",
     "q": "Lệnh <code>cout &lt;&lt; 10 - 2 * 3;</code> in ra gì?",
     "giai": "Nhân trước: 2 * 3 = 6, rồi 10 − 6.",
     "goi_y": "Xem hộp “Máy tính theo thứ tự nào?”.",
     "a": [
      "4",
      "24",
      "6",
      "10 - 6"
     ],
     "h": "13939c4548da50"
    },
    {
     "k": "mc",
     "id": "bai02-q2",
     "q": "Muốn tính (dài + rộng) × 2 trong C++, viết thế nào?",
     "giai": "Ngoặc trước, nhân bằng dấu *.",
     "goi_y": "Dấu nhân trong C++ là gì? Cần ngoặc không?",
     "a": [
      "(dai + rong) * 2",
      "dai + rong * 2",
      "(dai + rong) x 2",
      "dai + rong : 2"
     ],
     "h": "420b0c2e0a2e0"
    }
   ]
  },
  {
   "ten": "Chia nguyên và chia lấy dư",
   "ten_ngan": "Chia và dư",
   "phut": 4,
   "muc_tieu": "giải thích kết quả của / với số nguyên; dùng % để lấy số dư.",
   "khoi_dong": "Đoán trước: 17 / 5 trong C++ ra 3.4 hay 3?",
   "khoi": [
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"p\">#include &lt;iostream&gt;</span>\n<span class=\"ln\"> 2  </span><span class=\"k\">using</span> <span class=\"k\">namespace</span> std;\n<span class=\"ln\"> 3  </span>\n<span class=\"ln\"> 4  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 5  </span>    cout &lt;&lt; <span class=\"s\">\"17 + 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> + <span class=\"n\">5</span> &lt;&lt; endl;\n<span class=\"ln\"> 6  </span>    cout &lt;&lt; <span class=\"s\">\"17 - 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> - <span class=\"n\">5</span> &lt;&lt; endl;\n<span class=\"ln\"> 7  </span>    cout &lt;&lt; <span class=\"s\">\"17 * 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> * <span class=\"n\">5</span> &lt;&lt; endl;\n<span class=\"ln\"> 8  </span>    cout &lt;&lt; <span class=\"s\">\"17 / 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> / <span class=\"n\">5</span> &lt;&lt; endl;\n<span class=\"ln\"> 9  </span>    cout &lt;&lt; <span class=\"s\">\"17 % 5 = \"</span> &lt;&lt; <span class=\"n\">17</span> % <span class=\"n\">5</span> &lt;&lt; endl;\n<span class=\"ln\">10  </span>    cout &lt;&lt; <span class=\"s\">\"17.0 / 5 = \"</span> &lt;&lt; <span class=\"n\">17.0</span> / <span class=\"n\">5</span> &lt;&lt; endl;\n<span class=\"ln\">11  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">12  </span>}</pre>Kết quả khi chạy:<pre class=\"man-hinh\">17 + 5 = 22\n17 - 5 = 12\n17 * 5 = 85\n17 / 5 = 3\n17 % 5 = 2\n17.0 / 5 = 3.4</pre>"
    },
    {
     "t": "anh",
     "cap": "17 viên kẹo chia đều cho 5 bạn: mỗi bạn 3 viên (17 / 5), còn dư 2 viên (17 % 5).",
     "alt": "17 viên kẹo chia đều cho 5 bạn: mỗi bạn 3 viên (17 / 5), còn dư 2 viên (17 % 5).",
     "src": "img/chia-17-keo-cho-5-ban.png"
    },
    {
     "t": "dinh_nghia",
     "ten": "Chia nguyên và chia lấy dư",
     "html": "Hai số <b>nguyên</b> chia nhau thì <code>/</code> chỉ lấy <b>phần nguyên</b> (bỏ phần thập phân), còn <code>%</code> cho <b>số dư</b>. Muốn có phần thập phân, một trong hai số phải là số thập phân: <code>17.0 / 5</code> ra 3.4.",
     "ky_hieu": "integer division, remainder"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "đổi phút ra giờ và phút",
     "huong_dan": "Người dùng gõ 135. Theo dõi bảng Biến: gio nhận 135 / 60, phut nhận 135 % 60.",
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
     "t": "hop",
     "kieu": "chu-y",
     "tieu_de": "Tính trung bình mà ra số sai",
     "html": "Biến tb khai báo double nhưng <code>(a + b) / 2</code> vẫn là chia nguyên (a, b là int):<pre class=\"ma\">    <span class=\"k\">int</span> a = <span class=\"n\">7</span>, b = <span class=\"n\">8</span>;\n    <span class=\"k\">double</span> tb = (a + b) / <span class=\"n\">2</span>;\n    cout &lt;&lt; tb &lt;&lt; endl;</pre><pre class=\"man-hinh\">7</pre>Sửa: chia cho <code>2.0</code> thì ra đúng:<pre class=\"man-hinh\">7.5</pre>"
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Nghĩ 7 / 2 ra 3.5 — với hai số nguyên, máy cho 3.",
      "Dùng <code>%</code> với số thập phân — máy báo lỗi, % chỉ dùng cho số nguyên."
     ]
    },
    {
     "t": "tom_tat",
     "html": "int / int = chia nguyên; % = số dư; có số thập phân thì mới ra phần thập phân."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai02-q3",
     "q": "Lệnh <code>cout &lt;&lt; 20 % 6;</code> in ra gì?",
     "giai": "20 = 6 × 3 + 2, số dư là 2.",
     "goi_y": "% cho số dư của phép chia.",
     "a": [
      "2",
      "3",
      "3.33333",
      "0"
     ],
     "h": "eb917b276f548"
    },
    {
     "k": "mc",
     "id": "bai02-q4",
     "q": "Theo phần Tự thử, khi người dùng gõ 135, biến gio nhận giá trị bao nhiêu?",
     "giai": "135 / 60 = 2 (chia nguyên).",
     "goi_y": "Bấm tới dòng int gio = tongPhut / 60;",
     "a": [
      "2",
      "2.25",
      "15",
      "135"
     ],
     "h": "1628a041489ce8"
    }
   ]
  },
  {
   "ten": "Phép gán — cập nhật biến",
   "ten_ngan": "Phép gán",
   "phut": 3,
   "muc_tieu": "hiểu dấu = là “gán”, cập nhật biến bằng =, += và ++.",
   "khoi_dong": "Trong Scratch có khối “thay đổi tien một lượng 20”. C++ viết khối đó thế nào?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Phép gán",
     "html": "Dấu <code>=</code> trong C++ <b>không</b> có nghĩa “bằng nhau”, mà là <b>gán</b>: tính biểu thức bên phải, rồi cất kết quả vào biến bên trái. <code>tien = tien + 20;</code> nghĩa là “lấy tien cũ cộng 20, cất lại vào tien”.",
     "ky_hieu": "assignment"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "cập nhật tiền tiết kiệm",
     "huong_dan": "Bấm từng dòng và nhìn giá trị tien thay đổi: 50 → 70 → 55 → 65 → 66.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "int main() {",
      "    int tien = 50;",
      "    tien = tien + 20;",
      "    tien = tien - 15;",
      "    tien += 10;",
      "    tien++;",
      "    cout << \"Con lai: \" << tien << endl;",
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
        "tien": [
         "50",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 6,
       "bien": {
        "tien": [
         "70",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 7,
       "bien": {
        "tien": [
         "55",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 8,
       "bien": {
        "tien": [
         "65",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 9,
       "bien": {
        "tien": [
         "66",
         "int"
        ]
       },
       "in": "",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {
        "tien": [
         "66",
         "int"
        ]
       },
       "in": "Con lai: 66\n",
       "ham": "main"
      },
      {
       "dong": 11,
       "bien": {
        "tien": [
         "66",
         "int"
        ]
       },
       "in": "Con lai: 66\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "Cách viết gọn",
     "de": "Ba cách viết cho cùng một việc.",
     "cot": [
      "Viết đầy đủ",
      "Viết gọn",
      "Scratch"
     ],
     "dong": [
      [
       "tien = tien + 10;",
       "tien += 10;",
       "thay đổi tien một lượng 10"
      ],
      [
       "tien = tien - 5;",
       "tien -= 5;",
       "thay đổi tien một lượng -5"
      ],
      [
       "dem = dem + 1;",
       "dem++;",
       "thay đổi dem một lượng 1"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "h",
     "text": "Ba lỗi hay gặp — và máy báo thế nào"
    },
    {
     "t": "p",
     "html": "<b>Quên khai báo biến</b> — dòng <code>tong = 7 + 8;</code><pre class=\"man-hinh loi\">main.cpp:5:5: error: 'tong' was not declared in this scope; did you mean 'long'?</pre>Sửa: Khai báo trước: int tong = 7 + 8;."
    },
    {
     "t": "p",
     "html": "<b>Dùng % với số thập phân</b> — dòng <code>cout &lt;&lt; x % 2;</code><pre class=\"man-hinh loi\">main.cpp:6:15: error: invalid operands of types 'double' and 'int' to binary 'operator%'</pre>Sửa: % chỉ dùng cho số nguyên (int)."
    },
    {
     "t": "p",
     "html": "<b>Gán ngược chiều</b> — dòng <code>7 + 8 = tong;</code><pre class=\"man-hinh loi\">main.cpp:6:7: error: lvalue required as left operand of assignment</pre>Sửa: Biến đứng bên trái: tong = 7 + 8;."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Viết ngược <code>7 + 8 = tong;</code> — biến phải đứng bên trái dấu =.",
      "Dùng biến chưa khai báo — máy báo <i>was not declared in this scope</i>."
     ]
    },
    {
     "t": "tom_tat",
     "html": "= là gán (phải → trái); += −= ++ là cách viết gọn để cập nhật biến."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai02-q5",
     "q": "Có <code>int x = 5;</code> rồi <code>x = x * 2;</code> rồi <code>x += 3;</code>. Cuối cùng x bằng bao nhiêu?",
     "giai": "5 × 2 = 10, cộng 3.",
     "goi_y": "Làm từng dòng một, như phần Tự thử.",
     "a": [
      "13",
      "10",
      "16",
      "8"
     ],
     "h": "8ecad069041f0"
    },
    {
     "k": "mc",
     "id": "bai02-q6",
     "q": "Máy báo <code>lvalue required as left operand of assignment</code>. Lỗi gì?",
     "giai": "Biến phải đứng bên trái dấu =.",
     "goi_y": "Đọc phần Ba lỗi hay gặp.",
     "a": [
      "Viết ngược hai bên dấu =",
      "Thiếu dấu chấm phẩy ;",
      "Chia cho số 0",
      "Sai kiểu dữ liệu"
     ],
     "h": "153fbc3350453a"
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
     "id": "bai02-q7",
     "q": "Nhiệm vụ 1 — Ghép code: sắp xếp các dòng thành chương trình đổi giây ra phút và giây.",
     "giai": "Khai báo → câu dẫn → nhập → tính → in.",
     "goi_y": "Câu dẫn luôn đứng ngay trước cin.",
     "a": [
      "int tongGiay;",
      "cout << \"Moi ban nhap so giay: \";",
      "cin >> tongGiay;",
      "int phut = tongGiay / 60;",
      "int giay = tongGiay % 60;",
      "cout << phut << \" phut \" << giay << \" giay\";"
     ],
     "h": "13dae9f022e46d"
    },
    {
     "k": "mc",
     "id": "bai02-q8",
     "q": "Nhiệm vụ 2 — Thám tử lỗi: <code>int a = 9, b = 10; double tb = (a + b) / 2;</code> in tb ra 9. Sửa thế nào?",
     "giai": "Có một số thập phân thì mới ra 9.5.",
     "goi_y": "Vì sao (a + b) / 2 là chia nguyên?",
     "a": [
      "Chia cho 2.0 thay vì 2",
      "Đổi double thành int",
      "Bỏ dấu ngoặc đi",
      "Nhân thêm với 1"
     ],
     "h": "10443f5bccbac0"
    },
    {
     "k": "dd",
     "id": "bai02-q9",
     "q": "Nhiệm vụ 3 — Chọn phép toán để đổi 200 giây ra phút và giây.",
     "giai": "/ lấy phần nguyên, % lấy số dư.",
     "goi_y": "Phép nào cho số dư?",
     "mau": "Số phút = 200 {0} 60; số giây lẻ = 200 {1} 60.",
     "o": [
      [
       "/",
       "%",
       "*",
       "-"
      ],
      [
       "%",
       "/",
       "+",
       "*"
      ]
     ],
     "h": "dcfe629184248"
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
    "id": "bai02-q10",
    "q": "Lệnh <code>cout &lt;&lt; 9 / 2;</code> in ra gì?",
    "giai": "Chia nguyên.",
    "a": [
     "4",
     "4.5",
     "5",
     "1"
    ],
    "h": "4fb8b10017461"
   },
   {
    "k": "mc",
    "id": "bai02-q11",
    "q": "Lệnh <code>cout &lt;&lt; 9 % 2;</code> in ra gì?",
    "giai": "Số dư.",
    "a": [
     "1",
     "4",
     "4.5",
     "0"
    ],
    "h": "1addeb8a980f9"
   },
   {
    "k": "mc",
    "id": "bai02-q12",
    "q": "Lệnh <code>cout &lt;&lt; 9.0 / 2;</code> in ra gì?",
    "giai": "Có số thập phân.",
    "a": [
     "4.5",
     "4",
     "5",
     "1"
    ],
    "h": "1ec9a2ab8537e9"
   },
   {
    "k": "mc",
    "id": "bai02-q13",
    "q": "Lệnh <code>cout &lt;&lt; (4 + 6) / 5;</code> in ra gì?",
    "giai": "Ngoặc trước.",
    "a": [
     "2",
     "5.2",
     "10",
     "7"
    ],
    "h": "162e6a11bd49f"
   },
   {
    "k": "mc",
    "id": "bai02-q14",
    "q": "Lệnh <code>cout &lt;&lt; 4 + 6 / 3;</code> in ra gì?",
    "giai": "Chia trước cộng sau.",
    "a": [
     "6",
     "3",
     "3.33333",
     "10"
    ],
    "h": "57a30c8c1d733"
   },
   {
    "k": "mc",
    "id": "bai02-q15",
    "q": "Có <code>int d = 8;</code> rồi <code>d++;</code> hai lần. d bằng bao nhiêu?",
    "giai": "Mỗi lần ++ tăng 1.",
    "a": [
     "10",
     "9",
     "8",
     "16"
    ],
    "h": "1f823d21473f93"
   },
   {
    "k": "mc",
    "id": "bai02-q16",
    "q": "Cần đổi 100 phút ra số giờ trọn. Dùng biểu thức nào?",
    "giai": "Phần nguyên của phép chia.",
    "a": [
     "100 / 60",
     "100 % 60",
     "100 * 60",
     "60 / 100"
    ],
    "h": "d27d0a35da6da"
   },
   {
    "k": "mc",
    "id": "bai02-q17",
    "q": "Máy báo <code>invalid operands ... to binary 'operator%'</code>. Lỗi gì?",
    "giai": "% chỉ cho số nguyên.",
    "a": [
     "Dùng % với số thập phân",
     "Thiếu dấu chấm phẩy ;",
     "Viết hoa chữ cout",
     "Quên dấu ngoặc kép"
    ],
    "h": "1db52ba30f5630"
   },
   {
    "k": "ma",
    "id": "bai02-q18",
    "q": "Hai biểu thức nào có kết quả bằng 2? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "12 % 5 = 2; 5 / 2 = 2.",
    "a": [
     "12 % 5",
     "5 / 2",
     "12 / 5.0",
     "5 % 2"
    ],
    "h": "2f2bf728b4cbb"
   },
   {
    "k": "ma",
    "id": "bai02-q19",
    "q": "Hai cách nào cộng thêm 5 vào biến diem? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Gán lại vào diem.",
    "a": [
     "diem = diem + 5;",
     "diem += 5;",
     "diem + 5;",
     "5 = diem + 5;"
    ],
    "h": "105498a7b5a75b"
   },
   {
    "k": "ma",
    "id": "bai02-q20",
    "q": "Hai phép chia nào là chia nguyên (bỏ phần thập phân)? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Cả hai số đều là số nguyên.",
    "a": [
     "17 / 5",
     "9 / 2",
     "17.0 / 5",
     "9 / 2.0"
    ],
    "h": "459a8cd8d33e2"
   },
   {
    "k": "ma",
    "id": "bai02-q21",
    "q": "Hai điều nào đúng về dấu = trong C++? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Gán phải → trái.",
    "a": [
     "Là phép gán",
     "Biến đứng bên trái",
     "Là so sánh bằng",
     "Hai bên đổi chỗ được"
    ],
    "h": "1ca37fc5448d09"
   },
   {
    "k": "sx",
    "id": "bai02-q22",
    "q": "Sắp xếp thứ tự máy tính biểu thức 2 + (8 − 2) * 3.",
    "giai": "Ngoặc → nhân → cộng.",
    "a": [
     "Tính 8 − 2 = 6",
     "Tính 6 * 3 = 18",
     "Tính 2 + 18 = 20"
    ],
    "h": "e673f4c79e293"
   },
   {
    "k": "sx",
    "id": "bai02-q23",
    "q": "Sắp xếp chương trình tính diện tích hình vuông.",
    "giai": "Khai báo → câu dẫn → nhập → tính → in.",
    "a": [
     "double canh;",
     "cout << \"Moi ban nhap canh: \";",
     "cin >> canh;",
     "double dienTich = canh * canh;",
     "cout << \"Dien tich: \" << dienTich;"
    ],
    "h": "10f0c93e72507a"
   },
   {
    "k": "dd",
    "id": "bai02-q24",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Chia nguyên, dư.",
    "mau": "7 / 2 ra {0}; 7 % 2 ra {1}.",
    "o": [
     [
      "3",
      "3.5",
      "4",
      "2"
     ],
     [
      "1",
      "3",
      "0",
      "2"
     ]
    ],
    "h": "4775bfc121142"
   },
   {
    "k": "dd",
    "id": "bai02-q25",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Số thập phân; %.",
    "mau": "Muốn 7 chia 2 ra 3.5, viết {0}; phép lấy dư là {1}.",
    "o": [
     [
      "7.0 / 2",
      "7 / 2",
      "7 % 2",
      "7 * 2"
     ],
     [
      "%",
      "/",
      "*",
      "+"
     ]
    ],
    "h": "21cdf0eee2de4"
   },
   {
    "k": "dd",
    "id": "bai02-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Viết gọn.",
    "mau": "tien += 5 giống {0}; dem++ tăng dem thêm {1}.",
    "o": [
     [
      "tien = tien + 5",
      "tien = 5",
      "5 = tien",
      "tien + 5"
     ],
     [
      "1",
      "2",
      "0",
      "10"
     ]
    ],
    "h": "1d6a1a5c22494e"
   },
   {
    "k": "dd",
    "id": "bai02-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Thứ tự tính.",
    "mau": "Máy tính {0} trước, {1} sau.",
    "o": [
     [
      "nhân chia",
      "cộng trừ",
      "từ phải sang",
      "ngẫu nhiên"
     ],
     [
      "cộng trừ",
      "nhân chia",
      "ngoặc",
      "số dư"
     ]
    ],
    "h": "1f290f98bfb80b"
   },
   {
    "k": "ds",
    "id": "bai02-q28",
    "q": "Trong C++, <code>17 / 5</code> và <code>17.0 / 5</code> cho cùng một kết quả.",
    "giai": "3 và 3.4.",
    "h": "4bbf01d59094a"
   },
   {
    "k": "ds",
    "id": "bai02-q29",
    "q": "<code>x = x + 1;</code> và <code>x++;</code> làm cùng một việc.",
    "giai": "Tăng x thêm 1.",
    "h": "1d4ba397e74e53"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Lập trình C++. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
