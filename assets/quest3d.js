/* Game quest 3D — sáu đảo với cảnh riêng quanh trang bài học.
 *
 * Mỗi chặng của bài là một TRẠM trên đảo; tới trạm thì mở đúng chặng của trang bài học trong khung nhúng
 * (index.html?nhung=1&chang=i). Qua checkpoint chặng -> trạm sáng xanh, trạm sau mở khoá. Qua hết -> CỔNG
 * checkpoint cuối mở (index.html?nhung=1&cuoi=1) -> chứng chỉ như trang thường.
 * Tiến độ, đáp án, chứng chỉ: KHÔNG làm lại ở đây — do app.js xử lý, lưu cùng khoá localStorage.
 *
 * Điều khiển: WASD / phím mũi tên; E, Enter, Space để vào trạm; kéo chuột để xoay; lăn chuột để gần/xa.
 * Cảm ứng (iPad): chạm-kéo nửa trái = cần điều khiển; chạm vào trạm = tự đi tới; nút "Vào trạm".
 * Âm thanh tự tạo bằng Web Audio (không tải file nhạc). Máy yếu: tự chuyển chế độ nhẹ.
 */
import * as THREE from "three";

const B = window.BAI;
const CFG = Object.assign({ ten_dao: "Đảo " + B.tieu_de, trang_doc: "index.html",
  mau: "#38BDF8", mau_phu: "#FBBF24", dat: "#7CC35B", bien: "#2B8FD0", duong: "#E7D3A3",
  la_1: "#3F8F4E", la_2: "#5FB35A", bieu_tuong: "C++", canh: "rung",
  ky_hieu: ["{ }", ";", "<<", ">>", "int", "cout", "cin"], dung_sau_chang: true }, window.QUEST || {});
const TIEN_TO = B.tien_to_luu || "ml1_";
const LUU = TIEN_TO + B.ma;
const LUU_Q = TIEN_TO + "quest";
const N = B.chang.length;
const IT_CHUYEN_DONG = matchMedia("(prefers-reduced-motion: reduce)").matches;
const CAM_UNG = matchMedia("(pointer: coarse)").matches;
const R_DAO = 25;
document.documentElement.style.setProperty("--q-tuoi", CFG.mau);
document.documentElement.style.setProperty("--q-vang", CFG.mau_phu);

// ------------------------------------------------------------------ lưu trữ
function doc(k, md) { try { return JSON.parse(localStorage.getItem(k)) || md; } catch (e) { return md; } }
function luu(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* chế độ ẩn danh */ } }
let TT = doc(LUU, {});
const QS = Object.assign({ am: true, chat_luong: "tu_dong" }, doc(LUU_Q, {}));
function luuQS() { luu(LUU_Q, QS); }
function qua() { return TT.qua || 0; }

// ------------------------------------------------------------------ DOM
function h(tag, at, con) {
  const e = document.createElement(tag);
  for (const k in at || {}) {
    if (k === "text") e.textContent = at[k];
    else if (k === "html") e.innerHTML = at[k];
    else if (k.startsWith("on")) e.addEventListener(k.slice(2), at[k]);
    else e.setAttribute(k, at[k]);
  }
  (con || []).forEach(c => c && e.appendChild(typeof c === "string" ? document.createTextNode(c) : c));
  return e;
}
const ICON = {
  loa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
  tat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6"/><path d="m16 9 6 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  dong: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
};
const goc = document.getElementById("quest");

// ------------------------------------------------------------------ WebGL
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
} catch (e) {
  document.body.appendChild(h("div", { class: "q-loi" }, [h("div", { class: "q-the", style: "padding:24px;max-width:480px" }, [
    h("h2", { text: "Máy này chưa chạy được đồ hoạ 3D" }),
    h("p", { text: "Con vẫn học đầy đủ ở trang bài học thường — tiến độ và chứng chỉ giống hệt." }),
    h("a", { class: "q-vao", href: CFG.trang_doc, style: "display:inline-grid;place-items:center;text-decoration:none", text: "Mở trang bài học" })])]));
  throw e;
}
window.__questOK = true;
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
goc.appendChild(renderer.domElement);
renderer.domElement.setAttribute("tabindex", "0");
renderer.domElement.setAttribute("aria-label", "Thế giới 3D " + CFG.ten_dao + ". Dùng phím mũi tên để đi, E để vào trạm.");

const scene = new THREE.Scene();
const BAU_TROI = {
  "rung-lenh": ["#2F80D1", "#A9D8FF", "#DDF1FF"],
  "xuong-toan": ["#125977", "#8FCBD5", "#E3EBE5"],
  "me-cung": ["#574897", "#B4A3DA", "#EEE5F5"],
  "thanh-pho": ["#173C6F", "#8BC5DC", "#DCEEF2"],
  "phong-lab": ["#3D3C87", "#A8A3D6", "#E4DDF1"],
  "phao-dai": ["#70624D", "#E6C790", "#FFF0D7"],
};
const troiMau = BAU_TROI[CFG.canh] || BAU_TROI["rung-lenh"];
scene.fog = new THREE.Fog(troiMau[1], 70, 190);
const camera = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 600);

// ------------------------------------------------------------------ vật liệu, tiện ích
const vl = (mau, them) => new THREE.MeshStandardMaterial(Object.assign({ color: mau, flatShading: true, roughness: 0.85 }, them || {}));
function rngHat(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const rnd = rngHat(B.bai * 9973 + 17);
function bong(m) { m.castShadow = true; m.receiveShadow = true; return m; }
function viTri(goc_do, r) { const a = goc_do * Math.PI / 180; return new THREE.Vector3(r * Math.cos(a), 0, -r * Math.sin(a)); }

// chữ trên canvas -> texture (chờ font để chữ tiếng Việt đẹp)
function veChu(w, hh, ve) {
  const c = document.createElement("canvas"); c.width = w; c.height = hh;
  const g = c.getContext("2d"); ve(g, w, hh);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function hopTron(g, x, y, w, hh, r) { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, hh, r) : g.rect(x, y, w, hh); }
const FONT = '"Be Vietnam Pro", "Segoe UI", sans-serif';

// ------------------------------------------------------------------ trời, ánh sáng, mây
const troi = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false,
  uniforms: { tren: { value: new THREE.Color(troiMau[0]) }, giua: { value: new THREE.Color(troiMau[1]) }, duoi: { value: new THREE.Color(troiMau[2]) } },
  vertexShader: "varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",
  fragmentShader: "uniform vec3 tren; uniform vec3 giua; uniform vec3 duoi; varying vec3 p; void main(){ float y = normalize(p).y;" +
    " vec3 c = y > 0. ? mix(giua, tren, pow(y, .55)) : duoi; gl_FragColor = vec4(c, 1.); }",
}));
scene.add(troi);
scene.add(new THREE.HemisphereLight("#CFE8FF", "#5B7F3A", 1.1));
const mat_troi = new THREE.DirectionalLight("#FFF1D6", 2.2);
mat_troi.position.set(28, 48, 22);
mat_troi.castShadow = true;
mat_troi.shadow.mapSize.set(2048, 2048);
Object.assign(mat_troi.shadow.camera, { left: -32, right: 32, top: 32, bottom: -32, near: 5, far: 120 });
mat_troi.shadow.bias = -0.0006;
scene.add(mat_troi);

const may = new THREE.Group();
for (let i = 0; i < 9; i++) {
  const dam = new THREE.Group();
  for (let j = 0; j < 4; j++) {
    const s = new THREE.Mesh(new THREE.IcosahedronGeometry(2.2 + rnd() * 1.8, 0), vl("#FFFFFF", { roughness: 1, emissive: "#ffffff", emissiveIntensity: 0.25 }));
    s.position.set(j * 2.6 - 4, rnd() * 1.2, rnd() * 1.6);
    dam.add(s);
  }
  const a = rnd() * Math.PI * 2, r = 60 + rnd() * 60;
  dam.position.set(Math.cos(a) * r, 22 + rnd() * 14, Math.sin(a) * r);
  dam.userData.v = 0.4 + rnd() * 0.6;
  may.add(dam);
}
scene.add(may);

// ------------------------------------------------------------------ biển, đảo
const bien_geo = new THREE.PlaneGeometry(420, 420, 70, 70);
bien_geo.rotateX(-Math.PI / 2);
const bien_goc = bien_geo.attributes.position.array.slice();
const bien = new THREE.Mesh(bien_geo, vl(CFG.bien, { roughness: 0.35, metalness: 0.1, transparent: true, opacity: 0.93 }));
bien.position.y = -1.1; bien.receiveShadow = true;
scene.add(bien);

function daoDa() {
  const g = new THREE.Group();
  const matDa = { "rung-lenh": 64, "xuong-toan": 32, "me-cung": 12,
    "thanh-pho": 48, "phong-lab": 40, "phao-dai": 16 }[CFG.canh] || 64;
  const co = new THREE.Mesh(new THREE.CylinderGeometry(R_DAO, R_DAO - 0.6, 1.2, matDa), vl(CFG.dat));
  co.position.y = -0.6; co.receiveShadow = true; g.add(co);
  const mauBo = { "xuong-toan": "#89A9B5", "me-cung": "#BDAAD0", "thanh-pho": "#7BB8C8",
    "phong-lab": "#B7A9D1", "phao-dai": "#D8BC8C" }[CFG.canh] || "#F1D59A";
  const cat = new THREE.Mesh(new THREE.CylinderGeometry(R_DAO + 1.6, R_DAO + 2.6, 0.6, matDa), vl(mauBo));
  cat.position.y = -1.0; cat.receiveShadow = true; g.add(cat);
  const vach_geo = new THREE.CylinderGeometry(R_DAO + 2.4, R_DAO * 0.45, 9, matDa, 4);
  const p = vach_geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    if (p.getY(i) > 4.4) continue;
    const k = 0.9 + rnd() * 0.2;
    p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k); p.setY(i, p.getY(i) + (rnd() - 0.5) * 0.8);
  }
  const vach = new THREE.Mesh(vach_geo, vl(CFG.canh === "phao-dai" ? "#675C51" : CFG.canh === "me-cung" ? "#65546E" : "#9C7A55"));
  vach.position.y = -5.8; g.add(vach);
  // đường vòng nối các trạm + quảng trường
  const duong = new THREE.Mesh(new THREE.RingGeometry(12.6, 15.0, 72), vl(CFG.duong, { roughness: 1 }));
  duong.rotation.x = -Math.PI / 2; duong.position.y = 0.02; duong.receiveShadow = true; g.add(duong);
  const qt = new THREE.Mesh(new THREE.CircleGeometry(4.6, 6), vl("#D9D3C5", { roughness: 1 }));
  qt.rotation.x = -Math.PI / 2; qt.position.y = 0.03; qt.receiveShadow = true; g.add(qt);
  for (const [x0, z0, x1, z1] of [[0, 4.4, 0, 22], [0, -4.4, 0, -17]]) {
    const dai = Math.abs(z1 - z0);
    const d = new THREE.Mesh(new THREE.PlaneGeometry(3, dai), vl(CFG.duong, { roughness: 1 }));
    d.rotation.x = -Math.PI / 2; d.position.set(x0, 0.025, (z0 + z1) / 2); d.receiveShadow = true; g.add(d);
  }
  return g;
}
scene.add(daoDa());

// ------------------------------------------------------------------ vật cản (va chạm hình tròn)
const VAT_CAN = [];
function vatCan(x, z, r) { VAT_CAN.push({ x, z, r }); }

// ------------------------------------------------------------------ trạm
const GOC_TRAM = (() => {
  const trai = Math.ceil(N / 2), phai = N - trai, ds = [];
  const chia = (a, b, n) => n === 1 ? [(a + b) / 2] : Array.from({ length: n }, (_, i) => a + (b - a) * i / (n - 1));
  chia(222, 138, trai).forEach(a => ds.push(a));
  chia(42, -42, phai).forEach(a => ds.push(a));
  return ds;
})();
const MAU_TT = { khoa: "#94A3B8", mo: CFG.mau, xong: "#22C55E" };
const TRAM = [];

function nhanTram(i, tt) {
  const c = B.chang[i];
  return veChu(640, 190, (g, w, hh) => {
    hopTron(g, 6, 6, w - 12, hh - 12, 34); g.fillStyle = "rgba(11,21,38,0.86)"; g.fill();
    g.lineWidth = 6; g.strokeStyle = MAU_TT[tt]; g.stroke();
    g.fillStyle = MAU_TT[tt]; g.font = "700 38px " + FONT; g.textBaseline = "middle";
    g.fillText("CHẶNG " + (i + 1) + (tt === "xong" ? "  ✓ XONG" : tt === "khoa" ? "  · KHOÁ" : "  · ĐANG MỞ"), 36, 58);
    g.fillStyle = "#F8FAFC"; g.font = "700 50px " + FONT;
    let t = c.ten_ngan || c.ten;
    while (g.measureText(t).width > w - 72 && t.length > 4) t = t.slice(0, -2) + "…";
    g.fillText(t, 36, 128);
  });
}
function manHinhTram(i) {
  return veChu(512, 320, (g, w, hh) => {
    g.fillStyle = "#0B1526"; g.fillRect(0, 0, w, hh);
    g.fillStyle = "#1E293B"; g.fillRect(0, 0, w, 44);
    ["#F87171", "#FBBF24", "#4ADE80"].forEach((m, k) => { g.fillStyle = m; g.beginPath(); g.arc(26 + k * 26, 22, 8, 0, 7); g.fill(); });
    g.font = "600 30px Consolas, monospace"; g.textBaseline = "top";
    const dong = [["#C4B5FD", "int "], ["#E2E8F0", "main() {"], ["#7C8DA6", "  // chang " + (i + 1)], ["#FDBA74", '  cout << "Hi";'], ["#E2E8F0", "}"]];
    let y = 64;
    g.fillStyle = "#C4B5FD"; g.fillText("int", 24, y); g.fillStyle = "#E2E8F0"; g.fillText("main() {", 92, y); y += 48;
    g.fillStyle = "#7C8DA6"; g.fillText("  // tram " + (i + 1), 24, y); y += 48;
    g.fillStyle = "#E2E8F0"; g.fillText("  cout <<", 24, y); g.fillStyle = "#FDBA74"; g.fillText('"Hi";', 214, y); y += 48;
    g.fillStyle = "#E2E8F0"; g.fillText("}", 24, y);
    void dong;
  });
}
function robotNho(mau) {
  const g = new THREE.Group();
  const than = bong(new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 0.5), vl(mau, { roughness: 0.5 })));
  than.position.y = 0.75; g.add(than);
  const dau = bong(new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.48, 0.5), vl("#F1F5F9", { roughness: 0.4 })));
  dau.position.y = 1.45; g.add(dau);
  const mat = new THREE.MeshBasicMaterial({ color: "#38BDF8" });
  for (const x of [-0.14, 0.14]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), mat); e.position.set(x, 1.48, 0.26); g.add(e); }
  const ang = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.3), vl("#475569"));
  ang.position.y = 1.83; g.add(ang);
  const bi = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: "#FBBF24" }));
  bi.position.y = 2.0; g.add(bi);
  for (const x of [-0.18, 0.18]) { const c = bong(new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.4, 0.2), vl("#334155"))); c.position.set(x, 0.2, 0); g.add(c); }
  return g;
}
function taoTram(i) {
  const p = viTri(GOC_TRAM[i], 13.8);
  const g = new THREE.Group(); g.position.copy(p); g.lookAt(0, 0, 0);
  const nen = bong(new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.6, 0.5, 6), vl("#CBD5E1")));
  nen.position.y = 0.25; g.add(nen);
  const vong = new THREE.Mesh(new THREE.RingGeometry(1.7, 2.05, 6), new THREE.MeshBasicMaterial({ color: MAU_TT.khoa, transparent: true, opacity: 0.9 }));
  vong.rotation.x = -Math.PI / 2; vong.rotation.z = Math.PI / 6; vong.position.y = 0.52; g.add(vong);
  const cot = bong(new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.6, 0.3), vl("#475569")));
  cot.position.set(0, 1.3, -0.9); g.add(cot);
  const vo = bong(new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.45, 0.22), vl("#1E293B")));
  vo.position.set(0, 2.6, -0.9); vo.rotation.x = -0.12; g.add(vo);
  const man = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 1.25), new THREE.MeshBasicMaterial({ map: manHinhTram(i), toneMapped: false }));
  man.position.set(0, 2.6, -0.775); man.rotation.x = -0.12; g.add(man);
  const tinh_the = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), vl(MAU_TT.khoa, { emissive: MAU_TT.khoa, emissiveIntensity: 0.6, roughness: 0.3 }));
  tinh_the.position.set(0, 4.25, -0.9); tinh_the.castShadow = true; g.add(tinh_the);
  const rb = robotNho("#00599C"); rb.position.set(1.55, 0.5, -0.1); rb.rotation.y = -0.5; g.add(rb);
  const nhan = new THREE.Sprite(new THREE.SpriteMaterial({ map: nhanTram(i, "khoa"), depthTest: false, transparent: true }));
  nhan.scale.set(4.6, 1.37, 1); nhan.position.set(0, 6.0, -0.9); nhan.renderOrder = 10; g.add(nhan);
  const cham = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 6, 12), new THREE.MeshBasicMaterial({ visible: false }));
  cham.position.y = 3; cham.userData.tram = i; g.add(cham);
  scene.add(g);
  vatCan(p.x, p.z, 2.7);
  return { i, g, vong, tinh_the, nhan, rb, cham, p, tt: "", cho_dung: p.clone().multiplyScalar(0.72) };
}
for (let i = 0; i < N; i++) TRAM.push(taoTram(i));

// ------------------------------------------------------------------ cổng checkpoint cuối
const CONG = (() => {
  const g = new THREE.Group(); g.position.set(0, 0, -19.5);
  const da = vl("#64748B", { roughness: 0.7 });
  for (const x of [-3.1, 3.1]) {
    const c = bong(new THREE.Mesh(new THREE.BoxGeometry(1.3, 6.4, 1.3), da)); c.position.set(x, 3.2, 0); g.add(c);
    const d = bong(new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.5, 1.7), vl("#475569"))); d.position.set(x, 0.25, 0); g.add(d);
    vatCan(x, -19.5, 1.1);
  }
  const tren = bong(new THREE.Mesh(new THREE.BoxGeometry(8.2, 1.1, 1.6), vl("#00599C", { roughness: 0.5 })));
  tren.position.y = 6.9; g.add(tren);
  const chu = new THREE.Mesh(new THREE.PlaneGeometry(7.6, 0.95), new THREE.MeshBasicMaterial({ transparent: true, toneMapped: false,
    map: veChu(1024, 128, (c, w, hh) => { c.fillStyle = "#FFFFFF"; c.font = "700 64px " + FONT; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText("CHECKPOINT CUỐI", w / 2, hh / 2 + 4); }) }));
  chu.position.set(0, 6.9, 0.81); g.add(chu);
  const cong_mat = new THREE.ShaderMaterial({
    transparent: true, side: THREE.DoubleSide, depthWrite: false,
    uniforms: { t: { value: 0 }, mo: { value: 0 } },
    vertexShader: "varying vec2 v; void main(){ v = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }",
    fragmentShader: "uniform float t; uniform float mo; varying vec2 v; void main(){ vec2 p = v - .5; float r = length(p * vec2(1., .85));" +
      " float a = atan(p.y, p.x); float s = sin(a * 5. + t * 2. - r * 18.) * .5 + .5; vec3 c1 = vec3(.0,.35,.61); vec3 c2 = vec3(.22,.74,.97);" +
      " vec3 c = mix(c1, c2, s) + vec3(1.,.85,.4) * smoothstep(.12,.0,r) * mo; float al = smoothstep(.62,.45,r) * (.35 + .6 * mo);" +
      " gl_FragColor = vec4(mix(vec3(.55,.6,.68), c, .25 + .75 * mo), al); }",
  });
  const cua = new THREE.Mesh(new THREE.PlaneGeometry(4.9, 6.2), cong_mat);
  cua.position.set(0, 3.2, 0); g.add(cua);
  const song = new THREE.Group();
  for (let k = 0; k < 6; k++) {
    const b = bong(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 6.2, 6), vl("#334155", { metalness: 0.5, roughness: 0.4 })));
    b.position.set(-2.1 + k * 0.84, 3.2, 0.3); song.add(b);
  }
  g.add(song);
  const nhan = new THREE.Sprite(new THREE.SpriteMaterial({ depthTest: false, transparent: true }));
  nhan.scale.set(5.6, 1.35, 1); nhan.position.set(0, 9.0, 0); nhan.renderOrder = 10; g.add(nhan);
  const cham = new THREE.Mesh(new THREE.BoxGeometry(8, 8, 3), new THREE.MeshBasicMaterial({ visible: false }));
  cham.position.y = 4; cham.userData.cong = true; g.add(cham);
  scene.add(g);
  return { g, cong_mat, song, nhan, cham, p: new THREE.Vector3(0, 0, -19.5), cho_dung: new THREE.Vector3(0, 0, -15.2), tt: "" };
})();
function nhanCong(tt) {
  return veChu(760, 180, (g, w, hh) => {
    hopTron(g, 6, 6, w - 12, hh - 12, 34); g.fillStyle = "rgba(11,21,38,0.86)"; g.fill();
    g.lineWidth = 6; g.strokeStyle = tt === "mo" ? "#FBBF24" : tt === "xong" ? "#22C55E" : "#94A3B8"; g.stroke();
    g.textBaseline = "middle"; g.fillStyle = g.strokeStyle; g.font = "700 36px " + FONT;
    g.fillText(tt === "xong" ? "✓ ĐÃ NHẬN CHỨNG CHỈ" : tt === "mo" ? "CỔNG ĐÃ MỞ" : "CỔNG KHOÁ", 36, 58);
    g.fillStyle = "#F8FAFC"; g.font = "600 38px " + FONT;
    g.fillText(tt === "khoa" ? "Qua đủ " + N + " trạm để mở" : B.cuoi.so_cau + " câu · đạt " + B.cuoi.dat + " nhận chứng chỉ", 36, 124);
  });
}

// ------------------------------------------------------------------ tượng C++ ở quảng trường, biển chào
const TUONG = (() => {
  const g = new THREE.Group();
  const be = bong(new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.7, 1.1, 6), vl("#CBD5E1")));
  be.position.y = 0.55; g.add(be);
  const mat = veChu(512, 512, (c, w, hh) => {
    c.fillStyle = CFG.mau; c.fillRect(0, 0, w, hh);
    c.fillStyle = "#071426"; c.font = "800 190px " + FONT; c.textAlign = "center"; c.textBaseline = "middle"; c.fillText(CFG.bieu_tuong, w / 2, hh / 2 + 10);
  });
  mat.center.set(0.5, 0.5); mat.rotation = Math.PI / 2;   // nắp hình trụ đã xoay đứng -> xoay chữ lại cho thẳng
  const hex = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, 0.35, 6), [vl("#004482", { roughness: 0.4 }),
    new THREE.MeshBasicMaterial({ map: mat, toneMapped: false }), new THREE.MeshBasicMaterial({ map: mat, toneMapped: false })]);
  hex.rotation.x = Math.PI / 2; hex.castShadow = true;
  const quay = new THREE.Group(); quay.add(hex); quay.position.y = 2.9; g.add(quay);
  scene.add(g); vatCan(0, 0, 1.9);
  return quay;
})();
(() => {
  const g = new THREE.Group(); g.position.set(3.4, 0, 19); g.rotation.y = -0.35;
  for (const x of [-1.1, 1.1]) { const c = bong(new THREE.Mesh(new THREE.BoxGeometry(0.22, 2.2, 0.22), vl("#8B5A2B"))); c.position.set(x, 1.1, 0); g.add(c); }
  const bang = bong(new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.3, 0.16), vl("#A0703E")));
  bang.position.y = 2.0; g.add(bang);
  const chu = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 1.1), new THREE.MeshBasicMaterial({ transparent: true, toneMapped: false,
    map: veChu(600, 220, (c, w, hh) => { c.fillStyle = "#FFF7E6"; c.textAlign = "center"; c.textBaseline = "middle";
      let coChu = 64;
      do { c.font = "700 " + coChu + "px " + FONT; coChu -= 2; } while (c.measureText(CFG.ten_dao).width > w - 48 && coChu >= 34);
      c.fillText(CFG.ten_dao, w / 2, 80); c.font = "600 40px " + FONT; c.fillText(B.nhan + " · C++", w / 2, 160); }) }));
  chu.position.set(0, 2.0, 0.09); g.add(chu);
  scene.add(g); vatCan(3.4, 19, 1.4);
})();

// ------------------------------------------------------------------ cây, đá (instanced)
(() => {
  const vi = [];
  for (let k = 0; k < 400 && vi.length < 70; k++) {
    const a = rnd() * Math.PI * 2, r = 5.5 + rnd() * (R_DAO - 7.5);
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    if (r < 11.5) continue; // nhường lõi đảo cho công trình nhận diện riêng của bài
    if (Math.abs(r - 13.8) < 2.4) continue;
    if (Math.abs(x) < 2.8 && (z > 3 || z < -3)) continue;
    if (TRAM.some(t => Math.hypot(t.p.x - x, t.p.z - z) < 4.6)) continue;
    if (Math.hypot(x, z + 19.5) < 6 || Math.hypot(x - 3.4, z - 19) < 3) continue;
    if (vi.some(v => Math.hypot(v[0] - x, v[1] - z) < 2.1)) continue;
    vi.push([x, z, 0.8 + rnd() * 0.7, rnd()]);
  }
  const cay = vi.filter(v => v[3] < 0.78), da = vi.filter(v => v[3] >= 0.78);
  const thap = ["xuong-toan", "thanh-pho", "phong-lab"].includes(CFG.canh);
  const than = new THREE.InstancedMesh(thap ? new THREE.BoxGeometry(1.1, 2.8, 1.1) : new THREE.CylinderGeometry(0.18, 0.26, 1.2, 6), vl(thap ? "#294668" : "#8B5A2B"), cay.length);
  const la1 = new THREE.InstancedMesh(thap ? new THREE.BoxGeometry(1.15, 0.1, 1.15) : new THREE.ConeGeometry(1.3, 2.2, 6), vl(CFG.la_1, thap ? { emissive: CFG.la_1, emissiveIntensity: 0.6 } : {}), cay.length);
  const la2 = new THREE.InstancedMesh(thap ? new THREE.BoxGeometry(1.15, 0.1, 1.15) : new THREE.ConeGeometry(0.95, 1.7, 6), vl(CFG.la_2, thap ? { emissive: CFG.la_2, emissiveIntensity: 0.6 } : {}), cay.length);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), p = new THREE.Vector3();
  cay.forEach(([x, z, k], i) => {
    q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), rnd() * 6.28);
    s.set(k, k, k);
    than.setMatrixAt(i, m.compose(p.set(x, (thap ? 1.4 : 0.6) * k, z), q, s));
    la1.setMatrixAt(i, m.compose(p.set(x, (thap ? 1.1 : 2.0) * k, z), q, s));
    la2.setMatrixAt(i, m.compose(p.set(x, (thap ? 2.35 : 3.1) * k, z), q, s));
    vatCan(x, z, 0.75 * k);
  });
  const dg = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.8, 0), vl("#9CA3AF"), da.length);
  da.forEach(([x, z, k], i) => {
    q.setFromEuler(new THREE.Euler(rnd(), rnd() * 6, rnd()));
    dg.setMatrixAt(i, m.compose(p.set(x, 0.35 * k, z), q, s.set(k * 1.2, k * 0.8, k)));
    vatCan(x, z, 0.85 * k);
  });
  for (const im of [than, la1, la2, dg]) { im.castShadow = true; im.receiveShadow = true; scene.add(im); }
})();

// ------------------------------------------------------------------ công trình riêng của từng đảo
(() => {
  const canh = CFG.canh;
  const them = (geo, mau, x, y, z, opts) => {
    const o = bong(new THREE.Mesh(geo, vl(mau, opts)));
    o.position.set(x, y, z); scene.add(o); return o;
  };
  const hop = (x, z, w, cao, sau, mau, y = cao / 2, opts) =>
    them(new THREE.BoxGeometry(w, cao, sau), mau, x, y, z, opts);
  const den = (x, y, z, r, mau) => them(new THREE.IcosahedronGeometry(r, 1), mau, x, y, z,
    { emissive: mau, emissiveIntensity: 0.65, roughness: 0.25 });

  if (canh === "rung-lenh") {
    // Rừng lệnh: bia chỉ dẫn và cổng mã màu lam giữa tán cây.
    for (const x of [-8, 8]) {
      hop(x, -6, 1.1, 5.2, 1.1, "#356C58");
      den(x, 5.7, -6, 0.75, CFG.mau);
      vatCan(x, -6, 0.9);
    }
    hop(0, -8, 5, 0.55, 0.8, "#7DD9C2", 5.4, { emissive: "#2AA89B", emissiveIntensity: 0.4 });
    for (const [x, z] of [[-7, 6], [7, 6], [-9, -9], [9, -9]]) {
      const than = them(new THREE.CylinderGeometry(0.28, 0.36, 3.8, 6), "#5C7B48", x, 1.9, z);
      than.rotation.z = (x > 0 ? 1 : -1) * 0.08;
      them(new THREE.ConeGeometry(2.1, 4.6, 7), CFG.la_1, x, 5.1, z);
      vatCan(x, z, 1.1);
    }
  } else if (canh === "xuong-toan") {
    // Xưởng phép toán: bánh răng, ống khói và băng chuyền.
    for (const [x, z, r] of [[-8, -4, 2.2], [8, -5, 1.7]]) {
      const gear = them(new THREE.TorusGeometry(r, 0.34, 8, 16), CFG.mau_phu, x, 4.4, z,
        { metalness: 0.45, roughness: 0.3, emissive: CFG.mau_phu, emissiveIntensity: 0.2 });
      gear.rotation.y = 0.18;
      for (let k = 0; k < 4; k++) {
        const spoke = hop(x, z, r * 1.75, 0.23, 0.3, "#E8F4F2", 4.4);
        spoke.rotation.z = k * Math.PI / 4;
      }
      hop(x, z, 1.1, 3.8, 1.1, "#294668"); vatCan(x, z, 1.2);
    }
    hop(0, -8, 5, 2.2, 2.8, "#36566F");
    for (const x of [-1.5, 1.5]) {
      them(new THREE.CylinderGeometry(0.45, 0.55, 4, 8), "#40677E", x, 4.2, -8);
      den(x, 6.4, -8, 0.4, CFG.mau);
    }
    vatCan(0, -8, 3.0);
  } else if (canh === "me-cung") {
    // Mê cung điều kiện: hai nhánh tường dẫn tới các lựa chọn.
    const tuong = [[-8, -8, 1, 7], [-8, 7, 1, 6], [8, -8, 1, 7], [8, 7, 1, 6],
      [-5.5, -8, 5, 1], [5.5, 8, 5, 1], [-5.5, 8, 5, 1], [5.5, -8, 5, 1]];
    tuong.forEach(([x, z, w, d], i) => {
      hop(x, z, w, 2.6 + i % 2 * 0.6, d, i % 2 ? "#745A9D" : "#594D83");
      hop(x, z, w + 0.25, 0.17, d + 0.25, CFG.mau, 2.7 + i % 2 * 0.6,
        { emissive: CFG.mau, emissiveIntensity: 0.35 });
    });
    for (const x of [-5, 5]) den(x, 3.2, 0, 1, CFG.mau_phu);
  } else if (canh === "thanh-pho") {
    // Thành phố vòng lặp: nhiều tầng nhà và vòng sáng lặp quanh lõi.
    for (const [x, z, cao] of [[-9, -6, 7], [9, -7, 9], [-8, 7, 5], [8, 7, 7]]) {
      hop(x, z, 2.8, cao, 2.8, "#244967");
      for (let y = 1.6; y < cao; y += 1.7)
        hop(x, z + 1.46, 2.6, 0.15, 0.08, CFG.mau, y,
          { emissive: CFG.mau, emissiveIntensity: 0.8 });
      vatCan(x, z, 1.9);
    }
    for (const y of [4.8, 6.6, 8.4]) {
      const ring = them(new THREE.TorusGeometry(5.2, 0.16, 8, 48), y === 6.6 ? CFG.mau_phu : CFG.mau,
        0, y, 0, { emissive: CFG.mau, emissiveIntensity: 0.55 });
      ring.rotation.x = Math.PI / 2;
    }
  } else if (canh === "phong-lab") {
    // Phòng thí nghiệm hàm: hai mô-đun kính và dây sáng kết nối.
    for (const x of [-8, 8]) {
      them(new THREE.CylinderGeometry(2.5, 2.7, 0.65, 16), "#48467B", x, 0.33, -4);
      them(new THREE.SphereGeometry(2.45, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2),
        "#9BE7F4", x, 0.68, -4, { transparent: true, opacity: 0.38, metalness: 0.2, roughness: 0.1 });
      den(x, 2.0, -4, 0.95, CFG.mau_phu);
      vatCan(x, -4, 2.4);
    }
    for (const z of [-8, -5, -2, 1, 4]) {
      hop(0, z, 0.16, 0.06, 2.2, CFG.mau, 0.09, { emissive: CFG.mau, emissiveIntensity: 0.9 });
    }
    const orbit = them(new THREE.TorusGeometry(4.4, 0.14, 8, 40), CFG.mau_phu, 0, 5.7, 0,
      { emissive: CFG.mau_phu, emissiveIntensity: 0.65 });
    orbit.rotation.x = 0.48;
  } else if (canh === "phao-dai") {
    // Pháo đài ôn tập: thành lũy, tháp canh và cờ trên đỉnh.
    for (const x of [-8, 8]) {
      const thap = them(new THREE.CylinderGeometry(2.0, 2.2, 7, 8), "#6A675E", x, 3.5, -6);
      thap.castShadow = true;
      them(new THREE.ConeGeometry(2.55, 2.4, 8), "#9C5944", x, 8.2, -6);
      hop(x, -6, 0.12, 2.2, 0.12, "#E4DCCB", 10.2);
      const co = hop(x + 0.8, -6, 1.6, 0.9, 0.08, CFG.mau_phu, 10.7);
      co.rotation.z = -0.08;
      vatCan(x, -6, 2.2);
    }
    hop(0, -8.5, 12, 4.1, 1.7, "#777065");
    for (let x = -5.5; x <= 5.5; x += 2.2) hop(x, -8.5, 1.1, 0.8, 1.9, "#888075", 4.45);
    vatCan(0, -8.5, 5.5);
  }
})();

// ------------------------------------------------------------------ ký hiệu C++ bay lơ lửng
const KY_HIEU = [];
(() => {
  const ds = CFG.ky_hieu;
  ds.forEach((t, k) => {
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, opacity: 0.75, depthWrite: false,
      map: veChu(256, 128, (c, w, hh) => { c.fillStyle = "#FFFFFF"; c.font = "700 64px Consolas, monospace"; c.textAlign = "center"; c.textBaseline = "middle";
        c.shadowColor = "rgba(0,89,156,.8)"; c.shadowBlur = 16; c.fillText(t, w / 2, hh / 2); }) }));
    const a = (k / ds.length) * Math.PI * 2 + rnd(), r = R_DAO + 5 + rnd() * 10;
    sp.position.set(Math.cos(a) * r, rnd() * 10, Math.sin(a) * r);
    sp.scale.set(2.4, 1.2, 1);
    sp.userData = { v: 0.4 + rnd() * 0.6, a, r };
    KY_HIEU.push(sp); scene.add(sp);
  });
})();

// ------------------------------------------------------------------ nhân vật Bit
const BIT = (() => {
  const g = new THREE.Group();
  const than = new THREE.Group(); g.add(than);
  const trang = vl("#F1F5F9", { roughness: 0.35, flatShading: false });
  const xanh = vl("#00599C", { roughness: 0.4, flatShading: false });
  const bung = bong(new THREE.Mesh(new THREE.SphereGeometry(0.62, 28, 18), trang)); bung.scale.set(1, 1.08, 1); than.add(bung);
  const vanh = bong(new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.07, 10, 36), xanh)); vanh.rotation.x = Math.PI / 2; vanh.position.y = -0.05; than.add(vanh);
  // kính mặt: dải cầu ngay ngoài thân, quay về phía trước (+z)
  const kinh = new THREE.Mesh(new THREE.SphereGeometry(0.645, 28, 10, Math.PI / 2 - 1.05, 2.1, 1.02, 0.9),
    new THREE.MeshStandardMaterial({ color: "#0B1526", roughness: 0.15, metalness: 0.3 }));
  kinh.scale.set(1, 1.08, 1); than.add(kinh);
  const mat = new THREE.MeshBasicMaterial({ color: "#5EEAD4" });
  const mat_trai = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.1, 4, 8), mat); mat_trai.position.set(-0.17, 0.12, 0.66); than.add(mat_trai);
  const mat_phai = mat_trai.clone(); mat_phai.position.x = 0.17; than.add(mat_phai);
  for (const x of [-0.64, 0.64]) { const tai = bong(new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.12, 16), xanh)); tai.rotation.z = Math.PI / 2; tai.position.set(x, 0.12, 0); than.add(tai); }
  const ang = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.38), vl("#475569")); ang.position.y = 0.82; than.add(ang);
  const den = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), new THREE.MeshBasicMaterial({ color: "#FBBF24" })); den.position.y = 1.03; than.add(den);
  const lua = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.07, 8, 24), new THREE.MeshBasicMaterial({ color: "#38BDF8", transparent: true, opacity: 0.85 }));
  lua.rotation.x = Math.PI / 2; lua.position.y = -0.7; than.add(lua);
  const bong_dat = new THREE.Mesh(new THREE.CircleGeometry(0.7, 24), new THREE.MeshBasicMaterial({ color: "#000", transparent: true, opacity: 0.22, depthWrite: false }));
  bong_dat.rotation.x = -Math.PI / 2; bong_dat.position.y = 0.04;
  scene.add(g); scene.add(bong_dat);
  g.position.set(0, 0, 21);
  g.rotation.y = Math.PI;
  return { g, than, den, lua, bong_dat, mat: [mat_trai, mat_phai] };
})();

// ------------------------------------------------------------------ âm thanh (Web Audio, tự tạo)
const AM = { ctx: null };
function khoiDongAm() {
  if (AM.ctx) { if (AM.ctx.state === "suspended") AM.ctx.resume(); return; }
  const C = window.AudioContext || window.webkitAudioContext;
  if (!C) return;
  const ctx = AM.ctx = new C();
  AM.tong = ctx.createGain(); AM.tong.gain.value = QS.am ? 0.8 : 0; AM.tong.connect(ctx.destination);
  AM.nhac = ctx.createGain(); AM.nhac.gain.value = 0.16;
  const loc = ctx.createBiquadFilter(); loc.type = "lowpass"; loc.frequency.value = 1500;
  AM.nhac.connect(loc); loc.connect(AM.tong);
  AM.hu = ctx.createGain(); AM.hu.gain.value = 0.9; AM.hu.connect(AM.tong);
  // tiếng động cơ lướt của Bit — to/nhỏ theo tốc độ
  const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = 72;
  const lf = ctx.createBiquadFilter(); lf.type = "lowpass"; lf.frequency.value = 260;
  AM.u = ctx.createGain(); AM.u.gain.value = 0;
  o.connect(lf); lf.connect(AM.u); AM.u.connect(AM.hu); o.start();
  AM.u_o = o;
  const HOP = [[261.63, 329.63, 392.0], [220.0, 261.63, 329.63], [174.61, 220.0, 261.63], [196.0, 246.94, 293.66]];
  const NGU = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
  let t_hop = ctx.currentTime + 0.1, k_hop = 0, t_not = ctx.currentTime + 0.5;
  AM.hen = setInterval(() => {
    if (!AM.ctx || ctx.state !== "running") return;
    while (t_hop < ctx.currentTime + 1.5) {
      HOP[k_hop % 4].forEach((f, j) => not(f / (j === 0 ? 2 : 1), t_hop, 4.2, "triangle", 0.09, AM.nhac, 1.4, 1.6));
      t_hop += 4; k_hop++;
    }
    while (t_not < ctx.currentTime + 1.5) {
      if (rnd() < 0.55) not(NGU[Math.floor(rnd() * NGU.length)], t_not, 0.6, "sine", 0.05, AM.nhac, 0.01, 0.55);
      t_not += 0.5;
    }
  }, 250);
}
function not(f, t0, dai, kieu, vol, dich, len, tat) {
  const ctx = AM.ctx; if (!ctx) return;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = kieu; o.frequency.value = f;
  len = len || 0.01; tat = tat || dai * 0.8;
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + len);
  g.gain.setValueAtTime(vol, Math.max(t0 + len, t0 + dai - tat));
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dai);
  o.connect(g); g.connect(dich || AM.hu);
  o.start(t0); o.stop(t0 + dai + 0.05);
}
const SFX = {
  mo() { const t = AM.ctx && AM.ctx.currentTime; if (!t) return; not(660, t, 0.14, "sine", 0.25); not(990, t + 0.08, 0.2, "sine", 0.22); },
  dong() { const t = AM.ctx && AM.ctx.currentTime; if (!t) return; not(880, t, 0.12, "sine", 0.2); not(587, t + 0.07, 0.18, "sine", 0.18); },
  khoa() { const t = AM.ctx && AM.ctx.currentTime; if (!t) return; not(196, t, 0.16, "square", 0.08); not(185, t + 0.14, 0.22, "square", 0.08); },
  qua() { const t = AM.ctx && AM.ctx.currentTime; if (!t) return; [523.25, 659.25, 783.99, 1046.5].forEach((f, k) => not(f, t + k * 0.09, 0.5, "triangle", 0.22)); },
  cong() {
    const ctx = AM.ctx; if (!ctx) return; const t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain(); o.type = "sawtooth";
    o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(700, t + 1.3);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.08, t + 0.3); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.4);
    const f = ctx.createBiquadFilter(); f.type = "lowpass"; f.frequency.value = 1200;
    o.connect(f); f.connect(g); g.connect(AM.hu); o.start(t); o.stop(t + 1.5);
    [392, 523.25, 659.25, 783.99, 1046.5].forEach((ff, k) => not(ff, t + 0.9 + k * 0.1, 0.7, "triangle", 0.2));
  },
  bay() {
    const ctx = AM.ctx; if (!ctx) return; const t = ctx.currentTime;
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.6, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = ctx.createBufferSource(); s.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = "bandpass"; f.Q.value = 2;
    f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(3000, t + 0.5);
    const g = ctx.createGain(); g.gain.value = 0.35;
    s.connect(f); f.connect(g); g.connect(AM.hu); s.start(t);
  },
};
function datAm(bat) {
  QS.am = bat; luuQS();
  if (AM.tong) AM.tong.gain.setTargetAtTime(bat ? 0.8 : 0, AM.ctx.currentTime, 0.05);
  nutAm.innerHTML = bat ? ICON.loa : ICON.tat;
  nutAm.setAttribute("aria-label", bat ? "Tắt âm thanh" : "Bật âm thanh");
  nutAm.title = nutAm.getAttribute("aria-label") + " (M)";
}
function nhacNho(nho) { if (AM.nhac) AM.nhac.gain.setTargetAtTime(nho ? 0.05 : 0.16, AM.ctx.currentTime, 0.3); }

// ------------------------------------------------------------------ HUD
const hud = h("div", { class: "q-hud" });
const tieuDe = h("div", { class: "q-the q-tieu-de" }, [
  h("div", { class: "q-nho", text: CFG.ten_dao.toUpperCase() + " · " + B.nhan.toUpperCase() }),
  h("div", { class: "q-lon", text: B.tieu_de })]);
const hangKhoa = h("div", { class: "q-khoa-hang", "aria-label": "Tiến độ các trạm" });
tieuDe.appendChild(hangKhoa);
const nutAm = h("button", { class: "q-nut", onclick: () => { khoiDongAm(); datAm(!QS.am); } });
const nutMenu = h("button", { class: "q-nut", "aria-label": "Menu", "aria-expanded": "false", html: ICON.menu + '<span class="q-chu-nut">Menu</span>',
  onclick: (e) => { e.stopPropagation(); moMenu(!menu.classList.contains("hien")); } });
hud.append(tieuDe, h("div", { class: "q-nut-hang" }, [nutAm, nutMenu]));
document.body.appendChild(hud);
const menu = h("div", { class: "q-the q-menu", role: "menu" });
document.body.appendChild(menu);
function moMenu(hien) {
  menu.classList.toggle("hien", hien); nutMenu.setAttribute("aria-expanded", String(hien));
  if (!hien) return;
  menu.innerHTML = "";
  menu.appendChild(h("h4", { text: "Dịch chuyển tới" }));
  TRAM.forEach(t => menu.appendChild(h("button", { text: "Trạm " + (t.i + 1) + " · " + (B.chang[t.i].ten_ngan || B.chang[t.i].ten) + (t.i < qua() ? " ✓" : ""),
    onclick: () => { moMenu(false); dichChuyen(t); }, ...(t.i > qua() ? { disabled: "" } : {}) })));
  menu.appendChild(h("button", { text: "Cổng checkpoint cuối", onclick: () => { moMenu(false); dichChuyen(CONG); }, ...(qua() < N ? { disabled: "" } : {}) }));
  menu.appendChild(h("h4", { text: "Hiển thị" }));
  [["tu_dong", "Tự động"], ["cao", "Đẹp (máy mạnh)"], ["nhe", "Nhẹ (máy yếu)"]].forEach(([k, t]) =>
    menu.appendChild(h("button", { class: QS.chat_luong === k ? "chon" : "", text: (QS.chat_luong === k ? "● " : "○ ") + t,
      onclick: () => { QS.chat_luong = k; luuQS(); apChatLuong(k === "nhe" || (k === "tu_dong" && CHAT.nhe_tu_dong)); moMenu(false); } })));
  menu.appendChild(h("h4", { text: "Khác" }));
  menu.appendChild(h("a", { href: CFG.trang_doc, text: "Chế độ đọc (trang bài học thường)" }));
  menu.appendChild(h("button", { text: "Cách điều khiển", onclick: () => { moMenu(false); thongBao(CAM_UNG ?
    "Kéo ở nửa trái màn hình để đi · chạm vào trạm để tự đi tới · bấm nút vàng để vào trạm." :
    "WASD hoặc phím mũi tên để đi · E / Enter để vào trạm · kéo chuột để xoay · lăn chuột để gần/xa · M tắt tiếng.", "", 6000); } }));
}
document.addEventListener("click", (e) => { if (!menu.contains(e.target) && !nutMenu.contains(e.target)) moMenu(false); });

const goiY = h("div", { class: "q-the q-goi-y", role: "status", "aria-live": "polite" });
document.body.appendChild(goiY);
const thongBaoEl = h("div", { class: "q-the q-thong-bao", role: "status", "aria-live": "polite" });
document.body.appendChild(thongBaoEl);
let henTB = null;
function thongBao(txt, loai, ms) {
  thongBaoEl.textContent = txt; thongBaoEl.className = "q-the q-thong-bao hien " + (loai || "");
  clearTimeout(henTB); henTB = setTimeout(() => thongBaoEl.classList.remove("hien"), ms || 3500);
}
const manChuyen = h("div", { class: "q-man-chuyen" });
document.body.appendChild(manChuyen);

function veKhoaHUD() {
  hangKhoa.innerHTML = "";
  for (let i = 0; i < N; i++) {
    const cls = i < qua() ? "xong" : i === qua() ? "mo" : "";
    hangKhoa.appendChild(h("span", { class: "q-khoa " + cls, title: "Chặng " + (i + 1) + (cls === "xong" ? " — đã qua" : cls === "mo" ? " — đang mở" : " — khoá"),
      text: i < qua() ? "✓" : String(i + 1) }));
  }
  hangKhoa.appendChild(h("span", { class: "q-khoa cuoi " + (TT.dat ? "xong" : qua() >= N ? "mo" : ""), text: TT.dat ? "✓ Chứng chỉ" : "Checkpoint" }));
}

// ------------------------------------------------------------------ trạng thái trạm / cổng
function capNhatTrangThai(vuaDoi) {
  TRAM.forEach(t => {
    const tt = t.i < qua() ? "xong" : t.i === qua() ? "mo" : "khoa";
    if (tt === t.tt) return;
    t.tt = tt;
    const m = new THREE.Color(MAU_TT[tt]);
    t.vong.material.color.copy(m);
    t.tinh_the.material.color.copy(m); t.tinh_the.material.emissive.copy(m);
    t.tinh_the.material.emissiveIntensity = tt === "khoa" ? 0.15 : 0.9;
    t.nhan.material.map.dispose(); t.nhan.material.map = nhanTram(t.i, tt); t.nhan.material.needsUpdate = true;
    if (vuaDoi && tt === "xong") phaoHoa(t.p.clone().setY(4.2), "#22C55E");
  });
  const ttc = TT.dat ? "xong" : qua() >= N ? "mo" : "khoa";
  if (ttc !== CONG.tt) {
    const cu = CONG.tt; CONG.tt = ttc;
    if (CONG.nhan.material.map) CONG.nhan.material.map.dispose();
    CONG.nhan.material.map = nhanCong(ttc); CONG.nhan.material.needsUpdate = true;
    CONG.mo_muc_tieu = ttc === "khoa" ? 0 : 1;
    if (vuaDoi && cu === "khoa" && ttc === "mo") { SFX.cong(); phaoHoa(new THREE.Vector3(0, 7, -19), "#FBBF24"); }
    if (vuaDoi && ttc === "xong") { for (let k = 0; k < 3; k++) setTimeout(() => phaoHoa(new THREE.Vector3((k - 1) * 4, 8 + k, -19), ["#FBBF24", "#38BDF8", "#F472B6"][k]), k * 350); }
  }
  veKhoaHUD();
}
function docLaiTienDo(tuKhung) {
  const cu = { qua: qua(), dat: !!TT.dat };
  TT = doc(LUU, {});
  const doi = qua() !== cu.qua || !!TT.dat !== cu.dat;
  capNhatTrangThai(doi);
  if (doi) veGoiY(gan);
  if (!doi || !tuKhung) return;
  if (TT.dat && !cu.dat) { SFX.qua(); thongBao("Tuyệt vời! Con đã đạt checkpoint cuối và nhận chứng chỉ.", "tot", 5000); }
  else if (qua() > cu.qua) {
    SFX.qua();
    thongBao(qua() >= N ? "Con đã qua cả " + N + " trạm — Cổng checkpoint cuối đã mở!" :
      "Đã qua Chặng " + qua() + " — Trạm " + (qua() + 1) + " vừa mở khoá.", "tot", 4500);
  }
}

// ------------------------------------------------------------------ pháo hoa (hạt)
const PHAO = [];
const HAT = veChu(64, 64, (g) => { const r = g.createRadialGradient(32, 32, 2, 32, 32, 30); r.addColorStop(0, "rgba(255,255,255,1)");
  r.addColorStop(0.4, "rgba(255,255,255,.85)"); r.addColorStop(1, "rgba(255,255,255,0)"); g.fillStyle = r; g.fillRect(0, 0, 64, 64); });
function phaoHoa(o, mau) {
  const n = IT_CHUYEN_DONG ? 24 : CHAT.nhe ? 40 : 90;
  const geo = new THREE.BufferGeometry(), p = new Float32Array(n * 3), v = [];
  for (let k = 0; k < n; k++) {
    p.set([o.x, o.y, o.z], k * 3);
    const a = Math.random() * Math.PI * 2, b = Math.random() * Math.PI - Math.PI / 2, s = 3 + Math.random() * 5;
    v.push(new THREE.Vector3(Math.cos(a) * Math.cos(b) * s, Math.abs(Math.sin(b)) * s + 2, Math.sin(a) * Math.cos(b) * s));
  }
  geo.setAttribute("position", new THREE.BufferAttribute(p, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: mau, size: 0.5, map: HAT, transparent: true, depthWrite: false,
    blending: THREE.AdditiveBlending }));
  pts.userData = { v, song: 0 }; scene.add(pts); PHAO.push(pts);
}

// ------------------------------------------------------------------ khung bài học (iframe)
const khung = h("div", { class: "q-khung", role: "dialog", "aria-modal": "true" });
const khungTieuDe = h("b");
const khungDong = h("button", { class: "q-nut", html: ICON.dong + '<span class="q-chu-nut">Về thế giới 3D</span>', "aria-label": "Đóng, về thế giới 3D", onclick: () => dongKhung() });
const iframe = h("iframe", { title: "Bài học" });
khung.appendChild(h("div", { class: "q-khung-trong" }, [h("div", { class: "q-khung-dau" }, [khungTieuDe, khungDong]), iframe]));
document.body.appendChild(khung);
let khungMo = false, moLucQua = 0;
function moKhung(src, tieu_de) {
  khungMo = true; khungTieuDe.textContent = tieu_de;
  moLucQua = qua();
  iframe.src = src; khung.classList.add("hien");
  SFX.mo(); nhacNho(true); if (AM.u) AM.u.gain.value = 0;
  PHIM.clear(); CAN.hoat = false;
  setTimeout(() => khungDong.focus(), 50);
}
function dongKhung() {
  if (!khungMo) return;
  khungMo = false; khung.classList.remove("hien");
  iframe.src = "about:blank";
  SFX.dong(); nhacNho(false);
  docLaiTienDo(true);
  renderer.domElement.focus();
}
const tamDung = h("div", { class: "q-man an", role: "dialog", "aria-modal": "true" });
const tamDungTieuDe = h("h1");
const tamDungNoiDung = h("p", { class: "q-cau" });
const tamDungNut = h("button", { class: "q-vao", text: "Đã chốt cùng lớp · Đi tiếp →", onclick: () => {
  tamDung.classList.add("an"); dangChoi = true;
  dich = qua() < N ? TRAM[qua()] : CONG;
  renderer.domElement.focus();
} });
tamDung.appendChild(h("div", { class: "q-the" }, [
  h("div", { class: "q-nho", text: "DỪNG SAU CHECKPOINT" }), tamDungTieuDe, tamDungNoiDung,
  h("div", { class: "q-hang" }, [tamDungNut])
]));
document.body.appendChild(tamDung);
function dungDeThaoLuan(chang) {
  dangChoi = false; PHIM.clear(); CAN.hoat = false;
  tamDungTieuDe.textContent = "Đã hoàn thành Chặng " + chang;
  tamDungNoiDung.textContent = "Dừng tại đây. Nói với bạn điều vừa thử, nghe thầy cô chốt và ghi bài. " +
    (chang < N ? "Khi thầy cô cho phép, em mới đi tiếp tới Chặng " + (chang + 1) + "." :
      "Khi thầy cô cho phép, em mới mở checkpoint cuối.");
  tamDung.classList.remove("an"); tamDungNut.focus();
}
window.addEventListener("message", (e) => {
  if (e.source !== iframe.contentWindow || (location.origin !== "null" && e.origin !== location.origin)) return;
  const d = e.data || {};
  if (d.ma !== B.ma) return;
  if (d.loai === "tien_do") docLaiTienDo(true);
  if (d.loai === "dong") {
    dongKhung();
    if (CFG.dung_sau_chang && d.vua_xong && qua() > moLucQua) dungDeThaoLuan(d.vua_xong);
    else if (d.tiep) dich = qua() < N ? TRAM[qua()] : CONG;
  }
});
window.addEventListener("storage", (e) => { if (e.key === LUU) docLaiTienDo(true); });

function vaoTram(t) {
  if (t === CONG) {
    if (qua() < N) { SFX.khoa(); thongBao("Cổng còn khoá — qua đủ " + N + " trạm trước nhé.", "xau"); return; }
    moKhung(CFG.trang_doc + "?nhung=1&cuoi=1", "Checkpoint cuối — " + B.cuoi.so_cau + " câu, đạt " + B.cuoi.dat + " nhận chứng chỉ");
    return;
  }
  if (t.i > qua()) { SFX.khoa(); thongBao("Trạm " + (t.i + 1) + " còn khoá — qua Chặng " + (qua() + 1) + " trước nhé.", "xau"); return; }
  moKhung(CFG.trang_doc + "?nhung=1&dung_sau_chang=" + (CFG.dung_sau_chang ? "1" : "0") + "&chang=" + t.i,
    "Chặng " + (t.i + 1) + " · " + B.chang[t.i].ten);
}

// ------------------------------------------------------------------ điều khiển
const PHIM = new Set();
const CAN = { hoat: false, id: null, x0: 0, y0: 0, dx: 0, dy: 0 };
const canEl = h("div", { class: "q-can" }, [h("i")]);
document.body.appendChild(canEl);
if (CAM_UNG) document.body.appendChild(h("div", { class: "q-can-goi-y", text: "Kéo ở đây để đi" }));
const camXaMacDinh = () => innerWidth / innerHeight < 0.8 ? 17 : 13;   // màn hình dọc (iPad dọc, điện thoại): lùi xa hơn
let camYaw = 0, camXa = camXaMacDinh(), dich = null;

addEventListener("keydown", (e) => {
  if (khungMo) { if (e.key === "Escape") dongKhung(); return; }
  if (manDau && !manDau.classList.contains("an")) return;
  const k = e.key.toLowerCase();
  if (["arrowup", "arrowdown", "arrowleft", "arrowright", " "].includes(k)) e.preventDefault();
  if (k === "e" || k === "enter" || k === " ") { if (gan) vaoTram(gan); return; }
  if (k === "m") { khoiDongAm(); datAm(!QS.am); return; }
  if (k === "escape") { moMenu(false); return; }
  PHIM.add(k); dich = null;
});
addEventListener("keyup", (e) => PHIM.delete(e.key.toLowerCase()));
addEventListener("blur", () => PHIM.clear());

const cv = renderer.domElement;
const keo = { id: null, x: 0, y: 0, di: 0 };
const ray = new THREE.Raycaster(), chuot = new THREE.Vector2();
function batCon(id) { try { cv.setPointerCapture(id); } catch (e) { /* trình duyệt cũ */ } }
cv.addEventListener("pointerdown", (e) => {
  khoiDongAm();
  if (e.pointerType === "touch" && e.clientX < innerWidth * 0.45 && !CAN.hoat) {
    Object.assign(CAN, { hoat: true, id: e.pointerId, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0 });
    canEl.style.left = e.clientX + "px"; canEl.style.top = e.clientY + "px"; canEl.classList.add("hien");
    canEl.firstChild.style.transform = ""; dich = null;
    batCon(e.pointerId); return;
  }
  Object.assign(keo, { id: e.pointerId, x: e.clientX, y: e.clientY, di: 0 });
  batCon(e.pointerId);
});
cv.addEventListener("pointermove", (e) => {
  if (CAN.hoat && e.pointerId === CAN.id) {
    let dx = e.clientX - CAN.x0, dy = e.clientY - CAN.y0; const l = Math.hypot(dx, dy), m = 52;
    if (l > m) { dx *= m / l; dy *= m / l; }
    CAN.dx = dx / m; CAN.dy = dy / m;
    canEl.firstChild.style.transform = "translate(" + dx + "px," + dy + "px)"; return;
  }
  if (e.pointerId !== keo.id) return;
  const dx = e.clientX - keo.x; keo.di += Math.abs(dx) + Math.abs(e.clientY - keo.y);
  keo.x = e.clientX; keo.y = e.clientY;
  if (keo.di > 6) camYaw -= dx * 0.006;
});
function thaTay(e) {
  if (CAN.hoat && e.pointerId === CAN.id) { CAN.hoat = false; CAN.dx = CAN.dy = 0; canEl.classList.remove("hien"); return; }
  if (e.pointerId !== keo.id) return;
  keo.id = null;
  if (keo.di > 8 || e.type === "pointercancel") return;
  // chạm/nhấp: vào trạm (nếu đang đứng gần) hoặc tự đi tới trạm đó
  chuot.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  ray.setFromCamera(chuot, camera);
  const hit = ray.intersectObjects([...TRAM.map(t => t.cham), CONG.cham], false)[0];
  if (!hit) return;
  const t = hit.object.userData.cong ? CONG : TRAM[hit.object.userData.tram];
  if (gan === t) vaoTram(t); else dich = t;
}
cv.addEventListener("pointerup", thaTay);
cv.addEventListener("pointercancel", thaTay);
cv.addEventListener("wheel", (e) => { e.preventDefault(); camXa = Math.min(20, Math.max(8, camXa + e.deltaY * 0.01)); }, { passive: false });

function dichChuyen(t) {
  manChuyen.classList.add("hien"); SFX.bay();
  setTimeout(() => {
    BIT.g.position.set(t.cho_dung.x, 0, t.cho_dung.z);
    BIT.g.rotation.y = Math.atan2(t.p.x - t.cho_dung.x, t.p.z - t.cho_dung.z);
    camYaw = Math.atan2(-(t.p.x - t.cho_dung.x), -(t.p.z - t.cho_dung.z));
    datCamera(1); dich = null;
    manChuyen.classList.remove("hien");
  }, 260);
}

// ------------------------------------------------------------------ lời nhắc khi đứng gần trạm
let gan = null;
function veGoiY(t) {
  if (!t) { goiY.classList.remove("hien"); return; }
  goiY.innerHTML = "";
  let nho, lon, mo, nut, vao_dc;
  if (t === CONG) {
    vao_dc = qua() >= N;
    nho = TT.dat ? "ĐÃ NHẬN CHỨNG CHỈ" : vao_dc ? "CỔNG ĐÃ MỞ" : "CỔNG KHOÁ";
    lon = "Checkpoint cuối";
    mo = vao_dc ? B.cuoi.so_cau + " câu, đạt " + B.cuoi.dat + " câu nhận chứng chỉ. Làm lại không giới hạn, mỗi lần là đề mới." :
      "Qua đủ " + N + " trạm để mở cổng. Con đã qua " + qua() + "/" + N + ".";
    nut = TT.dat ? "Xem chứng chỉ" : "Vào làm bài";
  } else {
    const c = B.chang[t.i];
    vao_dc = t.i <= qua();
    nho = "CHẶNG " + (t.i + 1) + " / " + N + " · khoảng " + c.phut + " phút" + (t.i < qua() ? " · ✓ đã qua" : "");
    lon = c.ten;
    mo = vao_dc ? (c.khoi_dong ? "Robot hỏi: " + c.khoi_dong.replace(/<[^>]+>/g, "") : c.muc_tieu) :
      "Trạm còn khoá — qua Chặng " + (qua() + 1) + " trước nhé.";
    nut = t.i < qua() ? "Ôn lại chặng" : "Vào trạm";
  }
  goiY.append(h("div", { class: "q-nho", text: nho }), h("div", { class: "q-lon", text: lon }), h("p", { text: mo }));
  const b = h("button", { class: "q-vao", text: nut + " ▶", onclick: () => vaoTram(t) });
  if (!vao_dc) b.disabled = true;
  goiY.appendChild(h("div", { class: "q-hanh-dong" }, [b, CAM_UNG ? null : h("span", { class: "q-phim", html: "hoặc nhấn <kbd>E</kbd> / <kbd>Enter</kbd>" })]));
  goiY.classList.add("hien");
}

// ------------------------------------------------------------------ chất lượng hiển thị
const CHAT = { nhe: false, nhe_tu_dong: false, dem: 0, tong: 0 };
function apChatLuong(nhe) {
  CHAT.nhe = nhe;
  renderer.setPixelRatio(Math.min(devicePixelRatio, nhe ? 1 : 1.5));
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMap.enabled = !nhe;
  mat_troi.castShadow = !nhe;
  scene.traverse(o => { if (o.material) [].concat(o.material).forEach(m => { m.needsUpdate = true; }); });
  may.visible = !nhe;
}
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
apChatLuong(QS.chat_luong === "nhe");

// ------------------------------------------------------------------ vòng lặp
const dong_ho = new THREE.Clock();
const huong = new THREE.Vector3(), tam = new THREE.Vector3();
function datCamera(k) {
  const p = BIT.g.position;
  tam.set(p.x + Math.sin(camYaw) * camXa, 6 + camXa * 0.3, p.z + Math.cos(camYaw) * camXa);
  camera.position.lerp(tam, k);
  camera.lookAt(p.x - Math.sin(camYaw) * 2.5, 2.4, p.z - Math.cos(camYaw) * 2.5);
}
function vaCham(p) {
  const r = Math.hypot(p.x, p.z), gh = R_DAO - 1.2;
  if (r > gh) { p.x *= gh / r; p.z *= gh / r; }
  for (const c of VAT_CAN) {
    const dx = p.x - c.x, dz = p.z - c.z, d = Math.hypot(dx, dz), m = c.r + 0.6;
    if (d < m && d > 1e-4) { p.x = c.x + dx / d * m; p.z = c.z + dz / d * m; }
  }
}
function khung_hinh() {
  requestAnimationFrame(khung_hinh);
  const dt = Math.min(dong_ho.getDelta(), 0.05), t = dong_ho.elapsedTime;
  if (document.hidden || khungMo) return;
  // tự hạ chất lượng nếu máy chậm (đo 120 khung hình đầu)
  if (QS.chat_luong === "tu_dong" && CHAT.dem < 120 && dangChoi) {
    CHAT.dem++; CHAT.tong += dt;
    if (CHAT.dem === 120 && CHAT.tong / 120 > 1 / 32 && !CHAT.nhe) { CHAT.nhe_tu_dong = true; apChatLuong(true); thongBao("Máy hơi chậm — đã chuyển sang hiển thị nhẹ.", "", 3000); }
  }
  // di chuyển
  let ix = 0, iz = 0;
  if (dangChoi) {
    if (PHIM.has("w") || PHIM.has("arrowup")) iz -= 1;
    if (PHIM.has("s") || PHIM.has("arrowdown")) iz += 1;
    if (PHIM.has("a") || PHIM.has("arrowleft")) ix -= 1;
    if (PHIM.has("d") || PHIM.has("arrowright")) ix += 1;
    if (CAN.hoat) { ix += CAN.dx; iz += CAN.dy; }
  }
  const sy = Math.sin(camYaw), cy = Math.cos(camYaw);
  huong.set(ix * cy + iz * sy, 0, -ix * sy + iz * cy);
  if (dich && huong.lengthSq() < 0.01) {
    huong.set(dich.cho_dung.x - BIT.g.position.x, 0, dich.cho_dung.z - BIT.g.position.z);
    if (huong.length() < 0.6) { dich = null; huong.set(0, 0, 0); }
  }
  const l = Math.min(1, huong.length());
  if (l > 0.05) {
    huong.normalize();
    BIT.g.position.addScaledVector(huong, 7.5 * l * dt);
    const muc = Math.atan2(huong.x, huong.z);
    let d = muc - BIT.g.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d));
    BIT.g.rotation.y += d * Math.min(1, dt * 10);
  }
  vaCham(BIT.g.position);
  BIT.than.position.y = 1.15 + (IT_CHUYEN_DONG ? 0 : Math.sin(t * 3) * 0.08);
  BIT.than.rotation.x = l * 0.18;
  BIT.bong_dat.position.set(BIT.g.position.x, 0.04, BIT.g.position.z);
  BIT.lua.scale.setScalar(1 + l * 0.35 + Math.sin(t * 20) * 0.05);
  BIT.den.material.color.setHSL(0.12, 1, 0.55 + Math.sin(t * 4) * 0.12);
  const chop = (t % 3.2) < 0.12 ? 0.15 : 1; BIT.mat.forEach(m => { m.scale.y = chop; });
  if (AM.u) AM.u.gain.setTargetAtTime(l * 0.045, AM.ctx.currentTime, 0.1);
  if (AM.u_o) AM.u_o.frequency.setTargetAtTime(72 + l * 40, AM.ctx.currentTime, 0.1);
  datCamera(1 - Math.exp(-dt * 6));
  // trạm gần nhất
  let moi = null, dmin = 1e9;
  for (const tr of [...TRAM, CONG]) {
    const d = BIT.g.position.distanceTo(tr.cho_dung);
    const nguong = tr === CONG ? 4.8 : 3.6;
    if (d < nguong && d < dmin) { dmin = d; moi = tr; }
  }
  if (moi !== gan) { gan = moi; veGoiY(gan); }
  if (dich && gan === dich) { dich = null; }
  // hoạt cảnh
  TRAM.forEach((tr, k) => {
    tr.tinh_the.rotation.y = t * (tr.tt === "khoa" ? 0.3 : 1.2);
    tr.tinh_the.position.y = 4.25 + (IT_CHUYEN_DONG ? 0 : Math.sin(t * 2 + k) * 0.15);
    tr.vong.material.opacity = tr === gan ? 0.95 : tr.tt === "mo" ? 0.55 + Math.sin(t * 3) * 0.3 : 0.7;
    tr.rb.position.y = 0.5 + (IT_CHUYEN_DONG ? 0 : Math.abs(Math.sin(t * 2.2 + k)) * 0.08);
    tr.rb.rotation.y = tr === gan ? Math.atan2(BIT.g.position.x - tr.g.position.x, BIT.g.position.z - tr.g.position.z) - tr.g.rotation.y : -0.5;
  });
  TUONG.rotation.y = t * 0.5;
  CONG.cong_mat.uniforms.t.value = t;
  const mo = CONG.cong_mat.uniforms.mo;
  mo.value += ((CONG.mo_muc_tieu || 0) - mo.value) * Math.min(1, dt * 1.5);
  CONG.song.position.y = -mo.value * 6.6;
  may.children.forEach(c => { c.position.x += c.userData.v * dt; if (c.position.x > 140) c.position.x = -140; });
  KY_HIEU.forEach(s => { s.position.y += s.userData.v * dt * (IT_CHUYEN_DONG ? 0.2 : 1); if (s.position.y > 16) s.position.y = -1; s.material.opacity = 0.75 * Math.min(1, (16 - s.position.y) / 4, (s.position.y + 1) / 3); });
  if (!CHAT.nhe && !IT_CHUYEN_DONG) {
    const a = bien_geo.attributes.position, arr = a.array;
    for (let i = 0; i < arr.length; i += 3) arr[i + 1] = Math.sin(bien_goc[i] * 0.08 + t * 1.1) * 0.18 + Math.cos(bien_goc[i + 2] * 0.07 + t * 0.9) * 0.14;
    a.needsUpdate = true;
  }
  for (let k = PHAO.length - 1; k >= 0; k--) {
    const pts = PHAO[k], u = pts.userData; u.song += dt;
    const a = pts.geometry.attributes.position;
    u.v.forEach((v, j) => { v.y -= 6 * dt; a.array[j * 3] += v.x * dt; a.array[j * 3 + 1] += v.y * dt; a.array[j * 3 + 2] += v.z * dt; });
    a.needsUpdate = true; pts.material.opacity = Math.max(0, 1 - u.song / 1.8);
    if (u.song > 1.8) { scene.remove(pts); pts.geometry.dispose(); pts.material.dispose(); PHAO.splice(k, 1); }
  }
  renderer.render(scene, camera);
}

addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  camXa = camXaMacDinh();
  renderer.setSize(innerWidth, innerHeight);
});
document.addEventListener("visibilitychange", () => {
  if (!AM.ctx) return;
  if (document.hidden) AM.ctx.suspend(); else if (dangChoi) AM.ctx.resume();
});

// ------------------------------------------------------------------ màn đầu
let dangChoi = false;
const manDau = h("div", { class: "q-man" });
const nutVao = h("button", { class: "q-vao", text: "Đang tải…", disabled: "" });
manDau.appendChild(h("div", { class: "q-the" }, [
  h("div", { class: "q-nho", text: "ĐẢO " + String(B.bai).padStart(2, "0") + " · " + B.khoa + " · " + B.nhan }),
  h("h1", { text: CFG.ten_dao }),
  h("p", { class: "q-cau", text: B.cau_hoi }),
  h("p", { text: "Đi qua " + N + " trạm để thử ý tưởng C++. Sau mỗi trạm, dừng lại giải thích cách làm rồi mới đi tiếp." }),
  h("p", { class: "q-nho", text: CAM_UNG ? "Kéo để di chuyển hoặc chạm trạm để đi tới." : "Di chuyển: WASD/phím mũi tên · Vào trạm: E · Xoay nhìn: kéo chuột." }),
  h("div", { class: "q-hang" }, [nutVao, h("a", { class: "q-lien-ket", href: CFG.trang_doc, text: "Học ở chế độ đọc" })]),
]));
document.body.appendChild(manDau);
nutVao.addEventListener("click", () => {
  try { khoiDongAm(); datAm(QS.am); } catch (e) { /* âm thanh không được làm gián đoạn bài học */ }
  manDau.classList.add("an"); dangChoi = true; renderer.domElement.focus();
  if (!TT.ten) moKhung(CFG.trang_doc + "?nhung=1", "Con là ai? — nhập họ tên, lớp để bắt đầu");
  else thongBao("Chào " + TT.ten.split(" ").pop() + "! " + (qua() >= N ? "Cổng checkpoint cuối đang chờ con." : "Tới Trạm " + (qua() + 1) + " nhé."), "", 3500);
});

// ------------------------------------------------------------------ khởi động
datAm(QS.am);
capNhatTrangThai(false);
datCamera(1);
const sanSang = () => { nutVao.disabled = false; nutVao.textContent = qua() > 0 ? "Chơi tiếp ▶" : "Vào thế giới 3D ▶"; };
(document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(() => {
  TRAM.forEach(t => { t.tt = ""; }); CONG.tt = ""; capNhatTrangThai(false); sanSang();
}, sanSang);
khung_hinh();
window.__questReady = true;
