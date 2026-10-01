window.BAI = {
 "bai": 5,
 "ma": "bai05",
 "nhan": "Bài 5",
 "tieu_de": "Tự tạo lệnh mới — Hàm",
 "phan": "Module 03 · Functions and Review",
 "cau_hoi": "Làm sao để tự tạo một lệnh mới, viết một lần và dùng lại nhiều lần?",
 "gioi_thieu": [
  "Trong Scratch, con từng bấm “Tạo một khối” để gom nhiều khối thành một khối mới có tên riêng, rồi dùng lại khắp nơi. C++ cũng cho con tự tạo lệnh mới như vậy — gọi là <b>hàm</b>.",
  "Bài này con viết hàm <code>void</code>, hàm có tham số và hàm trả về giá trị bằng <code>return</code>, rồi gọi hàm trong <code>main</code>.",
  "Mọi đoạn code, kết quả và thông báo lỗi trên trang đều là kết quả chạy thật bằng trình biên dịch g++."
 ],
 "thoi_gian": "≈ 10 phút + 7 phút cặp đôi",
 "muoi": "LSTS-ML1-WEB|bai05",
 "muc_tieu": [
  "Viết và gọi hàm void không tham số.",
  "Viết hàm có tham số, truyền đúng giá trị khi gọi.",
  "Viết hàm trả về giá trị bằng return và dùng kết quả đó.",
  "Sửa lỗi gọi hàm chưa định nghĩa, thiếu tham số."
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
   "ten": "Hàm void — tự tạo lệnh mới",
   "ten_ngan": "Hàm void",
   "phut": 3,
   "muc_tieu": "định nghĩa và gọi được hàm void; biết máy nhảy vào hàm rồi quay về.",
   "khoi_dong": "Trong Scratch, khối con tự tạo bằng “Tạo một khối” có màu gì? Dùng lại được mấy lần?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Hàm",
     "html": "Một nhóm lệnh được <b>đặt tên</b>. Viết (định nghĩa) một lần, <b>gọi</b> bằng tên bao nhiêu lần cũng được. Hàm <code>void</code> làm việc mà không trả kết quả về.",
     "ky_hieu": "function"
    },
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"k\">void</span> inDongSao() {\n<span class=\"ln\"> 2  </span>    cout &lt;&lt; <span class=\"s\">\"**********\"</span> &lt;&lt; endl;\n<span class=\"ln\"> 3  </span>}\n<span class=\"ln\"> 4  </span>\n<span class=\"ln\"> 5  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 6  </span>    inDongSao();\n<span class=\"ln\"> 7  </span>    cout &lt;&lt; <span class=\"s\">\"  CHAO MUNG\"</span> &lt;&lt; endl;\n<span class=\"ln\"> 8  </span>    inDongSao();\n<span class=\"ln\"> 9  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">10  </span>}</pre>Kết quả:<pre class=\"man-hinh\">**********\n  CHAO MUNG\n**********</pre>"
    },
    {
     "t": "anh",
     "cap": "Mỗi lần gặp inDongSao(); máy nhảy sang chạy thân hàm, xong thì quay về đúng dòng ngay sau lời gọi.",
     "alt": "Mỗi lần gặp inDongSao(); máy nhảy sang chạy thân hàm, xong thì quay về đúng dòng ngay sau lời gọi.",
     "src": "img/so-do-goi-ham.png"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "máy nhảy vào hàm và quay về",
     "huong_dan": "Bấm “Chạy dòng tiếp”: dòng sáng nhảy từ main sang hàm inDongSao rồi quay về main — hai lần.",
     "code": [
      "#include <iostream>",
      "using namespace std;",
      "",
      "void inDongSao() {",
      "    cout << \"**********\" << endl;",
      "}",
      "",
      "int main() {",
      "    inDongSao();",
      "    cout << \"  CHAO MUNG\" << endl;",
      "    inDongSao();",
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
       "bien": {},
       "in": "",
       "ham": "inDongSao"
      },
      {
       "dong": 5,
       "bien": {},
       "in": "**********\n",
       "ham": "inDongSao"
      },
      {
       "dong": 9,
       "bien": {},
       "in": "**********\n",
       "ham": "main"
      },
      {
       "dong": 10,
       "bien": {},
       "in": "**********\n  CHAO MUNG\n",
       "ham": "main"
      },
      {
       "dong": 4,
       "bien": {},
       "in": "**********\n  CHAO MUNG\n",
       "ham": "inDongSao"
      },
      {
       "dong": 5,
       "bien": {},
       "in": "**********\n  CHAO MUNG\n**********\n",
       "ham": "inDongSao"
      },
      {
       "dong": 11,
       "bien": {},
       "in": "**********\n  CHAO MUNG\n**********\n",
       "ham": "main"
      },
      {
       "dong": 12,
       "bien": {},
       "in": "**********\n  CHAO MUNG\n**********\n",
       "ham": "main"
      }
     ]
    },
    {
     "t": "vi_du",
     "tieu_de": "Scratch và C++",
     "de": "Hai bước: định nghĩa rồi gọi.",
     "cot": [
      "Việc",
      "Scratch",
      "C++"
     ],
     "dong": [
      [
       "Định nghĩa",
       "khối hồng “định nghĩa inDongSao”",
       "void inDongSao() { … }"
      ],
      [
       "Gọi",
       "kéo khối inDongSao vào kịch bản",
       "inDongSao();"
      ]
     ],
     "ket_luan": "Hàm viết phía trên main.",
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Định nghĩa hàm mà quên gọi — hàm không bao giờ chạy.",
      "Gọi hàm quên dấu <code>()</code> — máy không chạy hàm."
     ]
    },
    {
     "t": "tom_tat",
     "html": "void tenHam() { … } để định nghĩa; tenHam(); để gọi. Gọi xong máy quay về dòng sau lời gọi."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q1",
     "q": "Chương trình ở trên gọi hàm inDongSao mấy lần?",
     "giai": "Hai dòng inDongSao();",
     "goi_y": "Đếm các dòng inDongSao(); trong main.",
     "a": [
      "2",
      "1",
      "3",
      "0"
     ],
     "h": "1c4ad69bc7ac41"
    },
    {
     "k": "mc",
     "id": "bai05-q2",
     "q": "Xong thân hàm, máy chạy tiếp ở đâu?",
     "giai": "Máy quay về chỗ đã gọi.",
     "goi_y": "Xem hình mũi tên quay về.",
     "a": [
      "Dòng ngay sau lời gọi",
      "Đầu hàm main",
      "Cuối chương trình",
      "Đầu hàm đó"
     ],
     "h": "b5ab9793caf98"
    }
   ]
  },
  {
   "ten": "Hàm có tham số",
   "ten_ngan": "Tham số",
   "phut": 4,
   "muc_tieu": "viết hàm nhận tham số và truyền giá trị khi gọi.",
   "khoi_dong": "Khối Scratch “di chuyển (10) bước” có ô trống để điền số. Ô đó giống gì trong hàm C++?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Tham số",
     "html": "Biến đặt trong ngoặc của hàm, nhận giá trị lúc gọi. Gọi <code>chao(\"An\")</code> thì tham số <code>ten</code> nhận \"An\".",
     "ky_hieu": "parameter"
    },
    {
     "t": "p",
     "html": "<pre class=\"ma\"><span class=\"ln\">1  </span><span class=\"k\">void</span> chao(<span class=\"k\">string</span> ten) {\n<span class=\"ln\">2  </span>    cout &lt;&lt; <span class=\"s\">\"Xin chao \"</span> &lt;&lt; ten &lt;&lt; <span class=\"s\">\"!\"</span> &lt;&lt; endl;\n<span class=\"ln\">3  </span>}\n<span class=\"ln\">4  </span>\n<span class=\"ln\">5  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\">6  </span>    chao(<span class=\"s\">\"An\"</span>);\n<span class=\"ln\">7  </span>    chao(<span class=\"s\">\"Binh\"</span>);\n<span class=\"ln\">8  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">9  </span>}</pre><pre class=\"man-hinh\">Xin chao An!\nXin chao Binh!</pre>"
    },
    {
     "t": "p",
     "html": "Tham số giúp một hàm làm được nhiều việc khác nhau. Hàm vẽ dòng sao với số sao tuỳ ý (kết hợp vòng lặp):<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"k\">void</span> veDong(<span class=\"k\">int</span> soSao) {\n<span class=\"ln\"> 2  </span>    <span class=\"k\">for</span> (<span class=\"k\">int</span> i = <span class=\"n\">1</span>; i &lt;= soSao; i++) {\n<span class=\"ln\"> 3  </span>        cout &lt;&lt; <span class=\"s\">\"*\"</span>;\n<span class=\"ln\"> 4  </span>    }\n<span class=\"ln\"> 5  </span>    cout &lt;&lt; endl;\n<span class=\"ln\"> 6  </span>}\n<span class=\"ln\"> 7  </span>\n<span class=\"ln\"> 8  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 9  </span>    veDong(<span class=\"n\">3</span>);\n<span class=\"ln\">10  </span>    veDong(<span class=\"n\">5</span>);\n<span class=\"ln\">11  </span>    veDong(<span class=\"n\">1</span>);\n<span class=\"ln\">12  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">13  </span>}</pre><pre class=\"man-hinh\">***\n*****\n*</pre>"
    },
    {
     "t": "h",
     "text": "Ba lỗi hay gặp — và máy báo thế nào"
    },
    {
     "t": "p",
     "html": "<b>Gọi hàm trước khi định nghĩa</b> — dòng <code>inDongSao();</code><pre class=\"man-hinh loi\">main.cpp:5:5: error: 'inDongSao' was not declared in this scope</pre>Sửa: Viết hàm PHÍA TRÊN main (hoặc khai báo trước)."
    },
    {
     "t": "p",
     "html": "<b>Dùng biến riêng của hàm khác</b> — dòng <code>cout &lt;&lt; ten;</code><pre class=\"man-hinh loi\">main.cpp:10:13: error: 'ten' was not declared in this scope</pre>Sửa: Biến khai báo trong hàm chỉ dùng trong hàm đó — muốn lấy ra ngoài thì dùng return."
    },
    {
     "t": "p",
     "html": "<b>Gọi hàm thiếu tham số</b> — dòng <code>chao();</code><pre class=\"man-hinh loi\">main.cpp:9:9: error: too few arguments to function 'void chao(std::string)'</pre>Sửa: Truyền đủ tham số: chao(\"An\");."
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Truyền sai số lượng tham số — máy báo too few / too many arguments.",
      "Truyền sai thứ tự — máy chạy được nhưng kết quả sai."
     ]
    },
    {
     "t": "tom_tat",
     "html": "void tenHam(kiểu thamSo) { … }; gọi tenHam(giá trị); — mỗi lần gọi có thể truyền giá trị khác."
    },
    {
     "t": "video",
     "yt": "e9qjXKaeDHg",
     "ten": "Code.org — Functions with Parameters",
     "ghi_chu": "Xem thêm bằng tiếng Anh: cùng một hàm nhận dữ liệu khác nhau qua tham số. Video minh họa bằng khối lệnh; cú pháp C++ nằm trong bài. Không bắt buộc xem trên lớp.",
     "bat_dau": null,
     "ket_thuc": null
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q3",
     "q": "Lời gọi <code>veDong(4);</code> in ra gì?",
     "giai": "Tham số soSao nhận 4.",
     "goi_y": "soSao = 4, vòng lặp chạy mấy lần?",
     "a": [
      "****",
      "4",
      "***",
      "*****"
     ],
     "h": "d25e75a86f0cd"
    },
    {
     "k": "mc",
     "id": "bai05-q4",
     "q": "Máy báo <code>too few arguments to function</code>. Lỗi gì?",
     "giai": "Hàm cần tham số mà lời gọi để trống.",
     "goi_y": "Đọc phần Ba lỗi hay gặp.",
     "a": [
      "Gọi hàm thiếu tham số",
      "Quên dấu chấm phẩy",
      "Hàm viết dưới main",
      "Tên hàm viết hoa"
     ],
     "h": "408575d47137f"
    }
   ]
  },
  {
   "ten": "Hàm trả về giá trị",
   "ten_ngan": "return",
   "phut": 3,
   "muc_tieu": "viết hàm tính toán rồi trả kết quả bằng return; dùng kết quả ở main.",
   "khoi_dong": "Máy tính bỏ túi nhận số, tính xong thì đưa kết quả lại cho con. Hàm C++ làm được vậy không?",
   "khoi": [
    {
     "t": "dinh_nghia",
     "ten": "Giá trị trả về",
     "html": "Hàm có kiểu (int, double, bool…) thay cho void thì phải <code>return</code> một giá trị. Lời gọi hàm được thay bằng giá trị đó, nên có thể gán vào biến hay đặt trong biểu thức.",
     "ky_hieu": "return value"
    },
    {
     "t": "chay_tung_dong",
     "tieu_de": "hàm bình phương",
     "huong_dan": "Theo dõi: gọi binhPhuong(4) → x nhận 4 → return 16 → biến a nhận 16.",
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
     "t": "p",
     "html": "Hàm trả về <code>bool</code> (đúng / sai) dùng ngay trong if:<pre class=\"ma\"><span class=\"ln\"> 1  </span><span class=\"k\">bool</span> laSoChan(<span class=\"k\">int</span> n) {\n<span class=\"ln\"> 2  </span>    <span class=\"k\">return</span> n % <span class=\"n\">2</span> == <span class=\"n\">0</span>;\n<span class=\"ln\"> 3  </span>}\n<span class=\"ln\"> 4  </span>\n<span class=\"ln\"> 5  </span><span class=\"k\">int</span> main() {\n<span class=\"ln\"> 6  </span>    <span class=\"k\">if</span> (laSoChan(<span class=\"n\">10</span>)) {\n<span class=\"ln\"> 7  </span>        cout &lt;&lt; <span class=\"s\">\"10 la so chan\"</span> &lt;&lt; endl;\n<span class=\"ln\"> 8  </span>    }\n<span class=\"ln\"> 9  </span>    <span class=\"k\">if</span> (!laSoChan(<span class=\"n\">7</span>)) {\n<span class=\"ln\">10  </span>        cout &lt;&lt; <span class=\"s\">\"7 la so le\"</span> &lt;&lt; endl;\n<span class=\"ln\">11  </span>    }\n<span class=\"ln\">12  </span>    <span class=\"k\">return</span> <span class=\"n\">0</span>;\n<span class=\"ln\">13  </span>}</pre><pre class=\"man-hinh\">10 la so chan\n7 la so le</pre>"
    },
    {
     "t": "vi_du",
     "tieu_de": "void hay có kiểu?",
     "de": "Chọn theo việc hàm làm.",
     "cot": [
      "Hàm",
      "Làm gì",
      "Kiểu"
     ],
     "dong": [
      [
       "inDongSao()",
       "in ra màn hình",
       "void"
      ],
      [
       "binhPhuong(x)",
       "tính rồi trả số nguyên",
       "int"
      ],
      [
       "doiSangF(doC)",
       "tính rồi trả số thập phân",
       "double"
      ],
      [
       "laSoChan(n)",
       "trả đúng / sai",
       "bool"
      ]
     ],
     "ket_luan": null,
     "nhan_manh": []
    },
    {
     "t": "loi_hay_gap",
     "muc": [
      "Dùng biến khai báo trong hàm ở main — máy báo chưa khai báo; phải return kết quả ra.",
      "Hàm trả về int cho phép chia có phần thập phân — mất phần thập phân."
     ]
    },
    {
     "t": "tom_tat",
     "html": "kiểu tenHam(thamSo) { return …; } — lời gọi hàm mang giá trị được trả về."
    }
   ],
   "checkpoint": [
    {
     "k": "mc",
     "id": "bai05-q5",
     "q": "Theo phần Tự thử, sau dòng <code>int a = binhPhuong(4);</code> biến a bằng bao nhiêu?",
     "giai": "4 × 4.",
     "goi_y": "Bấm tới dòng sau lời gọi, xem bảng Biến.",
     "a": [
      "16",
      "4",
      "8",
      "44"
     ],
     "h": "13baa984310d4f"
    },
    {
     "k": "mc",
     "id": "bai05-q6",
     "q": "Hàm tính trung bình hai điểm (có thể 7.5) nên có kiểu trả về nào?",
     "giai": "Kết quả có phần thập phân.",
     "goi_y": "Xem bảng void hay có kiểu.",
     "a": [
      "double",
      "void",
      "int",
      "bool"
     ],
     "h": "43ffb1972430f"
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
     "id": "bai05-q7",
     "q": "Nhiệm vụ 1 — Ghép code: sắp xếp thành chương trình có hàm tính chu vi hình vuông.",
     "giai": "Hàm phía trên main; return trong hàm; gọi trong main.",
     "goi_y": "Hàm phải được viết trước khi main gọi nó.",
     "a": [
      "int chuViVuong(int canh) {",
      "    return canh * 4;",
      "}",
      "int main() {",
      "    cout << chuViVuong(5);",
      "    return 0; }"
     ],
     "h": "1f17616e9ec80c"
    },
    {
     "k": "mc",
     "id": "bai05-q8",
     "q": "Nhiệm vụ 2 — Thám tử lỗi: <code>int gapDoi(int x) { int kq = x * 2; }</code> gọi <code>cout &lt;&lt; kq;</code> trong main bị báo lỗi. Sửa thế nào?",
     "giai": "Biến trong hàm không dùng được ở main; phải return.",
     "goi_y": "Biến kq sống ở đâu?",
     "a": [
      "return x * 2; rồi in gapDoi(…)",
      "Đổi kiểu int thành void",
      "Thêm dấu ; sau tên hàm",
      "Viết hoa toàn bộ chữ kq"
     ],
     "h": "66a0705f3f1c5"
    },
    {
     "k": "dd",
     "id": "bai05-q9",
     "q": "Nhiệm vụ 3 — Chọn kiểu cho hàm.",
     "giai": "Không trả gì → void; trả số thập phân → double.",
     "goi_y": "Hàm có trả kết quả về không?",
     "mau": "Hàm in lời chào có kiểu {0}; hàm tính diện tích hình tròn (số thập phân) có kiểu {1}.",
     "o": [
      [
       "void",
       "int",
       "bool",
       "double"
      ],
      [
       "double",
       "void",
       "int",
       "bool"
      ]
     ],
     "h": "16147dfb0a8a02"
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
    "id": "bai05-q10",
    "q": "Có hàm <code>int nhanDoi(int x) { return x * 2; }</code>. <code>cout &lt;&lt; nhanDoi(7);</code> in gì?",
    "giai": "7 × 2.",
    "a": [
     "14",
     "7",
     "72",
     "9"
    ],
    "h": "1377412f299aba"
   },
   {
    "k": "mc",
    "id": "bai05-q11",
    "q": "Với hàm nhanDoi ở trên, <code>cout &lt;&lt; nhanDoi(nhanDoi(3));</code> in gì?",
    "giai": "nhanDoi(3) = 6, rồi nhanDoi(6).",
    "a": [
     "12",
     "6",
     "9",
     "33"
    ],
    "h": "1e590d0915b307"
   },
   {
    "k": "mc",
    "id": "bai05-q12",
    "q": "Hàm <code>void inChu() { cout &lt;&lt; \"Hi\"; }</code> được gọi 3 lần liên tiếp. Màn hình hiện gì?",
    "giai": "Không có khoảng trắng.",
    "a": [
     "HiHiHi",
     "Hi",
     "Hi Hi Hi",
     "3Hi"
    ],
    "h": "2b027b279701f"
   },
   {
    "k": "mc",
    "id": "bai05-q13",
    "q": "Từ khoá nào đặt trước tên hàm KHÔNG trả về giá trị?",
    "giai": "void.",
    "a": [
     "void",
     "int",
     "return",
     "main"
    ],
    "h": "710aa24413a85"
   },
   {
    "k": "mc",
    "id": "bai05-q14",
    "q": "Hàm được viết ở đâu để main gọi được mà không cần khai báo trước?",
    "giai": "Viết trước khi dùng.",
    "a": [
     "Phía trên hàm main",
     "Phía dưới hàm main",
     "Bên trong vòng lặp",
     "Sau return 0;"
    ],
    "h": "15e9d548541de7"
   },
   {
    "k": "mc",
    "id": "bai05-q15",
    "q": "Máy báo <code>'tinhTong' was not declared in this scope</code> khi gọi hàm. Nguyên nhân thường gặp?",
    "giai": "Hàm phải ở trên main.",
    "a": [
     "Hàm viết dưới main",
     "Thiếu câu dẫn",
     "Thiếu #include",
     "Gọi hàm 2 lần"
    ],
    "h": "bd70760529c7b"
   },
   {
    "k": "mc",
    "id": "bai05-q16",
    "q": "Hàm kiểm tra một số có chia hết cho 3 nên trả về kiểu gì?",
    "giai": "Đúng / sai.",
    "a": [
     "bool",
     "void",
     "string",
     "char"
    ],
    "h": "11a571a4a488a5"
   },
   {
    "k": "mc",
    "id": "bai05-q17",
    "q": "Lợi ích lớn nhất của hàm là gì?",
    "giai": "Tái sử dụng.",
    "a": [
     "Viết một lần, dùng lại nhiều lần",
     "Làm chương trình chạy sai",
     "Không cần biến nữa",
     "Không cần main nữa"
    ],
    "h": "1d0d9dd5f6da79"
   },
   {
    "k": "ma",
    "id": "bai05-q18",
    "q": "Hai lời gọi nào đúng với hàm <code>void chao(string ten)</code>? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Truyền đúng một tham số.",
    "a": [
     "chao(\"Mai\");",
     "chao(tenBan);",
     "chao();",
     "chao;"
    ],
    "h": "1297146aaab4a6"
   },
   {
    "k": "ma",
    "id": "bai05-q19",
    "q": "Hai điều nào đúng về return? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "return trả về và kết thúc hàm.",
    "a": [
     "Trả giá trị về chỗ gọi hàm",
     "Kết thúc hàm ngay lập tức",
     "Chỉ dùng trong hàm void",
     "In giá trị ra màn hình"
    ],
    "h": "b9a2672694c93"
   },
   {
    "k": "ma",
    "id": "bai05-q20",
    "q": "Hai hàm nào cần kiểu trả về double? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Kết quả có phần thập phân.",
    "a": [
     "Tính điểm trung bình",
     "Đổi độ C sang độ F",
     "In lời chào",
     "Vẽ khung viền"
    ],
    "h": "1a2f6460e9d416"
   },
   {
    "k": "ma",
    "id": "bai05-q21",
    "q": "Hai điều nào đúng về tham số? <b>(Chọn 2 đáp án đúng.)</b>",
    "giai": "Tham số của hàm nào dùng trong hàm đó.",
    "a": [
     "Nhận giá trị lúc gọi hàm",
     "Viết trong ngoặc sau tên hàm",
     "Phải là số nguyên",
     "Dùng được ở mọi hàm khác"
    ],
    "h": "1619fc28eb3db1"
   },
   {
    "k": "sx",
    "id": "bai05-q22",
    "q": "Sắp xếp các bước máy chạy khi gặp lời gọi <code>a = binhPhuong(4);</code>.",
    "giai": "Gọi → nhận tham số → return → quay về.",
    "a": [
     "Nhảy vào hàm binhPhuong",
     "Tham số x nhận 4",
     "Tính và return 16",
     "Quay về, gán 16 cho a"
    ],
    "h": "112e57dd14b140"
   },
   {
    "k": "sx",
    "id": "bai05-q23",
    "q": "Sắp xếp chương trình có hàm in tên.",
    "giai": "Hàm trước, main sau.",
    "a": [
     "void inTen(string ten) {",
     "    cout << \"Ten: \" << ten;",
     "}",
     "int main() {",
     "    inTen(\"Lan\");",
     "    return 0; }"
    ],
    "h": "ae213cfd967e6"
   },
   {
    "k": "dd",
    "id": "bai05-q24",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "void / return.",
    "mau": "Hàm không trả gì có kiểu {0}; hàm trả kết quả dùng lệnh {1}.",
    "o": [
     [
      "void",
      "int",
      "main",
      "bool"
     ],
     [
      "return",
      "cout",
      "void",
      "cin"
     ]
    ],
    "h": "97884b558e539"
   },
   {
    "k": "dd",
    "id": "bai05-q25",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Cầu nối Scratch.",
    "mau": "Khối Scratch “Tạo một khối” giống việc {0} hàm; kéo khối đó vào kịch bản giống việc {1} hàm.",
    "o": [
     [
      "định nghĩa",
      "gọi",
      "xoá",
      "đổi tên"
     ],
     [
      "gọi",
      "định nghĩa",
      "xoá",
      "sao chép"
     ]
    ],
    "h": "7ff506ee0349f"
   },
   {
    "k": "dd",
    "id": "bai05-q26",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Kiểu trả về.",
    "mau": "Hàm trả đúng / sai có kiểu {0}; hàm trả số nguyên có kiểu {1}.",
    "o": [
     [
      "bool",
      "int",
      "void",
      "string"
     ],
     [
      "int",
      "bool",
      "double",
      "void"
     ]
    ],
    "h": "1302471c3a8852"
   },
   {
    "k": "dd",
    "id": "bai05-q27",
    "q": "Chọn từ đúng cho mỗi chỗ trống.",
    "giai": "Phạm vi biến.",
    "mau": "Biến khai báo trong hàm chỉ dùng được {0}; muốn đưa kết quả ra ngoài dùng {1}.",
    "o": [
     [
      "trong hàm đó",
      "ở mọi nơi",
      "trong main",
      "sau return"
     ],
     [
      "return",
      "cout",
      "cin",
      "void"
     ]
    ],
    "h": "151d928050ec6c"
   },
   {
    "k": "ds",
    "id": "bai05-q28",
    "q": "Một hàm có thể được gọi nhiều lần với các tham số khác nhau.",
    "giai": "Đó là lợi ích của hàm.",
    "h": "19df70067748f6"
   },
   {
    "k": "ds",
    "id": "bai05-q29",
    "q": "Hàm void bắt buộc phải có lệnh return trả về một số.",
    "giai": "void không trả giá trị.",
    "h": "174baadad180c"
   }
  ]
 },
 "chan_trang": "Trường THCS và THPT Đinh Thiện Lý · Lập trình C++. Hình ảnh và video từ nguồn ngoài được nhúng trực tiếp từ trang gốc, ghi nguồn ngay dưới hình, <b>chỉ dùng cho mục đích học tập</b>; bản quyền thuộc tác giả gốc. Hình không ghi nguồn do giáo viên tự vẽ từ dữ liệu của lớp."
};
