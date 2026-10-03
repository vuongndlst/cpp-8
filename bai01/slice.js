import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

// Five short lessons, five distinct code checkpoints, then a combined boss.
const LANES=[2.65,0,-2.65]; // camera looks toward +Z, so screen X is reversed
const GATES=[
  {z:23,piece:'main()',topic:'KHUNG CHƯƠNG TRÌNH',prompt:'Robot cần vào nơi các lệnh bắt đầu chạy. Bệ nào đúng?',options:['#include','int main()','return 0;'],correct:1,hint:'Khi chương trình bắt đầu, các lệnh trong main() được thực hiện.'},
  {z:47,piece:'cout',topic:'IN RA MÀN HÌNH',prompt:'Robot muốn in lời chào. Bệ nào đưa chữ ra màn hình?',options:['cin >>','cout <<','Cout <<'],correct:1,hint:'cout << đưa nội dung ở bên phải ra màn hình.'},
  {z:71,piece:';',topic:'KẾT THÚC LỆNH',prompt:'Dòng cout còn thiếu dấu kết thúc. Robot chọn gì?',options:[':', ';', '.'],correct:1,hint:'Dấu ; kết thúc câu lệnh cout.'},
  {z:95,piece:'\\n',topic:'XUỐNG DÒNG',prompt:'Muốn chữ B xuống dòng sau A, robot chọn mảnh nào?',options:['"A B"','"A\\nB"','"A\\tB"'],correct:1,hint:'\\n bên trong chuỗi tạo dòng mới; cũng có thể dùng << endl.'},
  {z:119,piece:'//',topic:'GHI CHÚ',prompt:'Bệ nào là ghi chú và không được in ra?',options:['// cout << "Bug";','cout << "Bug";','/ cout << "Bug";'],correct:0,hint:'Từ // đến hết dòng là ghi chú; C++ bỏ qua phần này khi chạy.'}
];
const LESSONS=[
  {title:'Khung chương trình',kicker:'1 / 5 · CẤU TRÚC',lead:'Hãy xem một chương trình C++ hoàn chỉnh. Máy bắt đầu làm các lệnh ở trong <code>main()</code>.',code:'#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Xin chao!";\n  return 0;\n}',note:'Bài này con dùng khung có sẵn. Chỉ cần biết dòng muốn máy làm nằm giữa { và } của main().',question:'Dòng in lời chào nằm ở đâu?',answers:['Trước #include','Trong main()','Sau dấu }'],correct:1,why:'Đúng. Các câu lệnh cần chạy được đặt trong main().'},
  {title:'Lệnh cout',kicker:'2 / 5 · OUTPUT',lead:'<code>cout</code> đưa chữ hoặc số ra màn hình. Dấu <code>&lt;&lt;</code> đưa nội dung ở bên phải vào luồng xuất.',code:'cout << "Xin chao!";\ncout << 8;',note:'Chữ được đặt trong ngoặc kép. Số có thể in trực tiếp. Máy chỉ hiện kết quả, không hiện dòng mã.',question:'Dòng nào in chữ Xin chao!?',answers:['cout << "Xin chao!";','cin >> "Xin chao!";','Cout << "Xin chao!";'],correct:0,why:'Đúng. cout viết chữ thường và đi cùng <<.'},
  {title:'Dấu chấm phẩy',kicker:'3 / 5 · STATEMENT',lead:'Một câu lệnh <code>cout</code> kết thúc bằng dấu <code>;</code>. Thiếu dấu này thường khiến chương trình không biên dịch được.',code:'cout << "Con chao thay co!";',note:'Trong khung mẫu, using namespace std; và return 0; cũng kết thúc bằng ;. Dấu { và } không cần thêm ; ở đây.',question:'Dòng nào viết đúng?',answers:['cout << "Hi"','cout << "Hi";','cout << "Hi":'],correct:1,why:'Đúng. Dấu ; đứng sau nội dung cần in.'},
  {title:'Xuống dòng',kicker:'4 / 5 · NEW LINES',lead:'Hai lệnh <code>cout</code> liên tiếp sẽ in trên cùng một dòng nếu con không thêm cách xuống dòng.',code:'cout << "A" << endl;\ncout << "B";\n\n// Cách khác:\ncout << "A\\nB";',note:'Cả endl và \\n đều chuyển sang dòng mới. Với \\n, hãy đặt nó bên trong chuỗi. Ở Bài 1, con chỉ cần biết tác dụng xuống dòng.',question:'Dòng nào in A rồi B trên hai dòng?',answers:['cout << "A" << "B";','cout << "A\\nB";','cout << "A B";'],correct:1,why:'Đúng. \\n tạo dòng mới trong chuỗi. Cách khác là dùng << endl.'},
  {title:'Ghi chú trong mã',kicker:'5 / 5 · COMMENTS',lead:'Dấu <code>//</code> mở đầu một ghi chú. Máy bỏ qua phần còn lại của dòng đó. Ta dùng ghi chú để giải thích mã hoặc tạm ẩn một lệnh.',code:'// Loi nhan thu nghiem\ncout << "Xin chao!";\n// cout << "Bug";',note:'Kết quả chỉ có Xin chao!. Hai dòng bắt đầu bằng // không chạy. Ghi chú nhiều dòng /* ... */ sẽ học sau.',question:'Máy sẽ in gì?',answers:['Loi nhan thu nghiem','Xin chao!','Bug'],correct:1,why:'Đúng. Chỉ dòng cout không bị // che đi mới chạy.'}
];
const CHALLENGES=[
  {title:'Khởi động robot',task:'Viết chương trình in ra đúng một dòng chữ: ROBOT ONLINE',starter:'#include <iostream>\nusing namespace std;\n\nint main() {\n  // Viet lenh in o day\n  return 0;\n}',expected:'ROBOT ONLINE',pseudo:'Bắt đầu\nIn dòng chữ ROBOT ONLINE\nKết thúc',tip:'Dùng cout << "ROBOT ONLINE"; trong main().',check:code=>/\bint\s+main\s*\(\s*\)\s*\{/.test(code),checkHint:'Chương trình cần có int main() { ... }.'},
  {title:'Robot gửi lời chào',task:'Sửa chương trình để in ra đúng một dòng: Xin chao, robot!',starter:'#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Sua loi chao o day";\n  return 0;\n}',expected:'Xin chao, robot!',pseudo:'Bắt đầu\nIn dòng chữ Xin chao, robot!\nKết thúc',tip:'Giữ cout << và thay chữ trong ngoặc kép.',check:code=>/\bcout\s*<</.test(code),checkHint:'Hãy dùng cout << để in lời chào.'},
  {title:'Sửa dấu còn thiếu',task:'Sửa chương trình để in ra đúng một dòng: HE THONG SAN SANG',starter:'#include <iostream>\nusing namespace std;\nint main() {\n  cout << "HE THONG SAN SANG"\n  return 0;\n}',expected:'HE THONG SAN SANG',pseudo:'Bắt đầu\nIn dòng chữ HE THONG SAN SANG\nKết thúc',tip:'Nhìn cuối dòng cout và thêm dấu ;.',check:code=>/\bcout\s*<<[^\n]*;/.test(code),checkHint:'Dòng cout cần kết thúc bằng dấu ;.'},
  {title:'Mở cầu hai tầng',task:'In A ở dòng thứ nhất và B ở dòng thứ hai.',starter:'#include <iostream>\nusing namespace std;\nint main() {\n  cout << "A";\n  cout << "B";\n  return 0;\n}',expected:'A\nB',pseudo:'Bắt đầu\nIn chữ A rồi xuống dòng\nIn chữ B\nKết thúc',tip:'Ví dụ: cout << "A" << endl; rồi cout << "B"; hoặc cout << "A\\nB";',check:code=>/\bendl\b|\\n/.test(code),checkHint:'Hãy dùng endl hoặc \\n để tạo dòng mới.'},
  {title:'Vô hiệu hóa bug',task:'Ẩn dòng in BUG để chương trình chỉ in ra một dòng: SAFE',starter:'#include <iostream>\nusing namespace std;\nint main() {\n  cout << "BUG";\n  cout << "SAFE";\n  return 0;\n}',expected:'SAFE',pseudo:'Bắt đầu\nBỏ qua lệnh in BUG\nIn dòng chữ SAFE\nKết thúc',tip:'Thêm // vào trước dòng cout << "BUG";.',check:code=>/^\s*\/\/\s*cout\s*<<\s*"BUG"/m.test(code),checkHint:'Hãy đặt // trước dòng cout in BUG.'}
];
const CLASSES=Array.from({length:10},(_,i)=>`8A${i+1}`);
const STORAGE='cpp8_bai01_blender_slice_v3';
const $=id=>document.getElementById(id), panel=$('panel'),overlay=$('overlay'),choice=$('choice');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function coloredCode(source){
  const rx=/(\/\/[^\n]*|"(?:\\.|[^"\\])*"|#[^\n]*|\b(?:int|return|using|namespace|std|cout|endl|main)\b|\b\d+\b)/g;
  let html='',at=0;for(const m of source.matchAll(rx)){
    html+=esc(source.slice(at,m.index));const token=m[0];
    const kind=token.startsWith('//')?'comment':token.startsWith('"')?'string':token.startsWith('#')?'preprocessor':/^\d+$/.test(token)?'number':'keyword';
    html+=`<span class="tok-${kind}">${esc(token)}</span>`;at=m.index+token.length;
  }
  return html+esc(source.slice(at));
}
const lineNumbers=source=>Array.from({length:source.split('\n').length},(_,i)=>i+1).join('\n');
const codeWindow=(source,file='main.cpp')=>`<div class="code-window"><div class="code-window-head"><span class="window-dots" aria-hidden="true">● ● ●</span><strong>${esc(file)}</strong><small>C++</small></div><div class="code-window-body"><pre class="code-gutter" aria-hidden="true">${lineNumbers(source)}</pre><pre class="code"><code>${coloredCode(source)}</code></pre></div></div>`;
const visibleSpaces=s=>s.replace(/"( +)/g,(_,spaces)=>'"'+'·'.repeat(spaces.length));
const fresh=()=>({name:'',lop:'',gate:0,bossFixed:0,score:0,hearts:3,elapsed:0,finished:false,finishedAt:'',lesson:0,solutions:[],pseudocodes:[]});
let data=fresh();try{data={...data,...JSON.parse(localStorage.getItem(STORAGE)||'{}')}}catch{}
let mode='intro',ready=false,pausedMode='',muted=false,audio=null,toastUntil=0,compilerWorker=null,compileId=0;
let seenParts=new Set(),boostTimer=0;
let displayedGate=-1,displayedLane=-1;
let challengePassed=false;
let distance=0,lane=1,targetX=0,jump=0,jumpVelocity=0,damageLock=0,flightTime=0,flightStart=0,flightLane=1;
let player=null,playerMixer=null,guardian=null,terminal=null,tokenAsset=null;
let tokenGroups=[],hazards=[],particles=[],pickups=[];
const scene=new THREE.Scene();scene.background=new THREE.Color('#85ccee');scene.fog=new THREE.Fog('#85ccee',28,82);
const daySky=new THREE.Color('#85ccee'),bossSky=new THREE.Color('#776ab7');
const camera=new THREE.PerspectiveCamera(62,1,.1,160);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
$('world').appendChild(renderer.domElement);
scene.add(new THREE.HemisphereLight(0xffffff,0x2d6d8d,2.15));
const sun=new THREE.DirectionalLight(0xfff1d2,2.3);sun.position.set(-7,13,-7);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-17;sun.shadow.camera.right=17;sun.shadow.camera.top=17;sun.shadow.camera.bottom=-17;scene.add(sun);
const material=(color,glow=0x000000)=>new THREE.MeshStandardMaterial({color,emissive:glow,roughness:.58,metalness:.1});
const bugMaterial=material(0xef527a,0x76203e),mintMaterial=material(0x83ffe2,0x239c87),goldMaterial=material(0xffd37c,0x75420c);
function mesh(geometry,mat,parent,x=0,y=0,z=0){const m=new THREE.Mesh(geometry,mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
function sprite(text,bg='#123c57',scale=2.55){
  const c=document.createElement('canvas');c.width=1024;c.height=260;const x=c.getContext('2d');
  x.fillStyle=bg;x.beginPath();x.roundRect(10,10,1004,240,34);x.fill();x.lineWidth=8;x.strokeStyle='#c8fff2';x.stroke();
  let size=78;x.fillStyle='#ffffff';x.textAlign='center';x.textBaseline='middle';
  do{x.font=`800 ${size}px Arial`;if(x.measureText(text).width<910)break;size-=3}while(size>34);
  x.fillText(text,512,135);const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
  const s=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,transparent:true,depthWrite:false}));s.scale.set(scale,scale*.26,1);return s;
}
function save(){localStorage.setItem(STORAGE,JSON.stringify(data))}
const soundFiles={move:'move.ogg',select:'select.ogg',jump:'jump.ogg',success:'success.ogg',error:'error.ogg',crystal:'crystal.ogg',warning:'warning.ogg'};
const soundBank=Object.fromEntries(Object.entries(soundFiles).map(([key,file])=>[key,new Audio(`assets/audio/${file}`)]));
function sfx(name){if(muted)return;try{const sound=soundBank[name]?.cloneNode();if(!sound)return;sound.volume=name==='warning'?.18:.27;void sound.play().catch(()=>{})}catch{}}
function chord(){sfx('success')}
function flash(message,seconds=3){$('mission').textContent=message;toastUntil=performance.now()+seconds*1000}
function show(html){panel.innerHTML=html;overlay.hidden=false;panel.scrollTop=0;requestAnimationFrame(()=>{panel.scrollTop=0});choice.hidden=true}
function hide(){overlay.hidden=true}
function hud(){
  $('pieceCount').textContent=`${Math.min(data.gate,5)}/5`;
  $('score').textContent=String(data.score).padStart(3,'0');
  $('hearts').textContent=Array.from({length:3},(_,i)=>i<data.hearts?'♥':'♡').join(' ');
  $('progressFill').style.width=`${Math.min(100,distance/200*100).toFixed(1)}%`;
  $('phaseName').textContent=mode==='choose'?'Chọn bệ kiến thức':mode==='boss-run'?'Vượt đợt tấn công':data.gate>=5?'Chạy chương trình':`Trạm ${Math.min(data.gate+1,5)}/5`;
  $('bossHud').hidden=!['boss-fix','boss-run'].includes(mode);
  $('bossFill').style.width=`${[100,72,44,16][data.bossFixed]??16}%`;
  document.querySelector('[data-control="jump"]').textContent=mode==='choose'?'CHỌN ▲':'NHẢY ▲';
  $('codePreview').textContent=data.gate>=5?'// Loi chao\ncout << "Xin chao!" << endl;':GATES[data.gate]?.topic||'CHUẨN BỊ LÊN ĐƯỜNG';
}
function intro(){
  mode='intro';const resume=data.gate>0&&!data.finished;
  $('mission').textContent='Chờ robot khởi hành…';
  show(`<p class="eyebrow">BÀI 1 · HỌC RỒI CHƠI</p><h1>Đảo Lệnh Đầu Tiên</h1><p>Robot cần sửa năm trạm mã để mở đường. Con học từng ý qua ví dụ ngắn, thử một câu ngay tại chỗ, rồi điều khiển robot áp dụng trong thế giới 3D.</p><ol class="topic-list"><li>Khung chương trình</li><li>Lệnh cout</li><li>Dấu ;</li><li>Xuống dòng: endl và \\n</li><li>Ghi chú //</li></ol><div class="fields"><label>Họ và tên<input id="studentName" maxlength="70" autocomplete="name" placeholder="Nguyễn Minh Anh" value="${esc(data.name)}"></label><label>Lớp<select id="studentClass"><option value="">Chọn lớp</option>${CLASSES.map(v=>`<option ${v===data.lop?'selected':''}>${v}</option>`).join('')}</select></label></div><button data-action="learn" ${ready?'':'disabled'}>${ready?'Vào trạm học đầu tiên →':'Đang chuẩn bị đảo…'}</button>${resume?'<button class="secondary" data-action="reset">Bắt đầu lại</button>':''}<p id="formError" class="error"></p><p class="small">Khi chơi: ← → đổi làn, Space nhảy hoặc chọn bệ. Có nút cảm ứng ở cuối màn hình.</p>`);
  hud();
}
function warmCompiler(){
  compilerWorker??=new Worker('compiler-worker.js');
  compilerWorker.postMessage({type:'warmup',id:0});
}
function learn(){warmCompiler();lesson(0)}
function lesson(index){
  data.lesson=index;save();mode='lesson';const item=LESSONS[index];
  show(`<nav class="lesson-nav" aria-label="Năm phần của bài">${LESSONS.map((l,i)=>`<span class="${i===index?'current':i<index?'done':''}">${i+1}. ${esc(l.title)}</span>`).join('')}</nav><p class="eyebrow">${item.kicker}</p><h2>${item.title}</h2><p>${item.lead}</p>${codeWindow(item.code)}<p class="lesson-note">${item.note}</p>${index===1?'<div class="scratch-mini"><img src="assets/scratch_bai01.png" alt="Khối nói Xin chào trong Scratch"><span>Scratch hiện lời nói trong bong bóng; cout in chữ ở cửa sổ kết quả.</span></div>':''}<div class="try-box"><b>Thử ngay</b><p>${item.question}</p><div class="prediction-grid">${item.answers.map((a,i)=>`<button data-action="lesson-answer" data-answer="${i}">${esc(a)}</button>`).join('')}</div><div id="lessonFeedback" class="part-info" aria-live="polite">Chọn một đáp án. Nếu sai, con có thể thử lại.</div><div id="lessonNext"></div></div>`);
}
function codeChallenge(){
  mode='challenge';challengePassed=false;choice.hidden=true;const c=CHALLENGES[data.gate];
  const saved=data.solutions?.[data.gate]||c.starter;
  const pseudo=data.gate<2?`<div class="pseudo-mini"><b>Mã giả mẫu</b><pre>${esc(c.pseudo)}</pre></div>`:`<div class="pseudo-mini"><label for="studentPseudo"><b>Viết mã giả của con</b><span>Viết Bắt đầu, các bước In hoặc Bỏ qua, rồi Kết thúc.</span></label><textarea id="studentPseudo" rows="4" spellcheck="false" placeholder="Bắt đầu&#10;In ...&#10;Kết thúc">${esc(data.pseudocodes?.[data.gate]||'')}</textarea></div>`;
  show(`<p class="eyebrow">TRẠM ${data.gate+1}/5 · CODE CHALLENGE CÁ NHÂN</p><h2>${c.title}</h2><div class="challenge-brief"><h3>Yêu cầu</h3><p>${esc(c.task)}</p><div class="io-grid"><div><b>Đầu vào (Input)</b><span>Không có</span></div><div><b>Đầu ra (Output)</b><pre>${esc(c.expected)}</pre></div></div>${pseudo}</div><label class="editor-label" for="studentCode">Viết mã C++ trong main.cpp</label><div class="code-window editor-window"><div class="code-window-head"><span class="window-dots" aria-hidden="true">● ● ●</span><strong>main.cpp</strong><small>Gõ mã ở đây · Enter tự thụt dòng</small></div><div class="code-window-body"><pre id="editorGutter" class="code-gutter" aria-hidden="true">${lineNumbers(saved)}</pre><textarea id="studentCode" class="code-editor" spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="Viết mã C++">${esc(saved)}</textarea></div></div><div class="challenge-actions"><button data-action="compile">▶ Chạy và kiểm tra</button><button class="secondary" data-action="hint">Xem gợi ý</button></div><div class="result-label">Kết quả chạy / lỗi cần sửa</div><div id="compilerStatus" class="compiler-status" role="status" aria-live="polite">Chạy mã để kiểm tra kết quả.</div><pre id="compilerOutput" class="code console-output" hidden></pre><div id="challengeNext"></div>`);
}
function compileSource(code){
  compilerWorker??=new Worker('compiler-worker.js');
  const id=++compileId;
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{compilerWorker?.terminate();compilerWorker=null;reject(Error('Bộ biên dịch mất quá nhiều thời gian. Hãy thử lại.'))},90000);
    const listener=({data:message})=>{
      if(message.id!==id)return;
      if(message.type==='loading'){$('compilerStatus').textContent='Đang chuẩn bị trình chạy…';return}
      if(message.type==='compiling'){$('compilerStatus').textContent='Đang biên dịch và chạy mã của con…';return}
      compilerWorker.removeEventListener('message',listener);clearTimeout(timer);
      if(message.type==='error')reject(Error(message.message));else resolve(message.result);
    };
    compilerWorker.addEventListener('message',listener);
    compilerWorker.postMessage({type:'run',id,code});
  });
}
async function checkChallenge(){
  const button=panel.querySelector('[data-action="compile"]'),status=$('compilerStatus'),out=$('compilerOutput'),code=$('studentCode').value,c=CHALLENGES[data.gate];
  if(challengePassed)return;
  if(data.gate>=2){
    const lines=String($('studentPseudo')?.value||'').split(/\r?\n/).map(line=>line.trim()).filter(Boolean);
    if(lines.length<3||lines[0].toLocaleLowerCase('vi')!=='bắt đầu'||lines.at(-1).toLocaleLowerCase('vi')!=='kết thúc'||!lines.slice(1,-1).some(line=>/^(in|bỏ qua)/i.test(line))){
      status.textContent='Hãy viết mã giả: Bắt đầu, bước In hoặc Bỏ qua cụ thể, rồi Kết thúc.';
      $('studentPseudo')?.focus();return;
    }
  }
  if(!code.trim()){status.textContent='Con cần viết mã trước khi chạy.';return}
  button.disabled=true;status.textContent='Đang chuẩn bị…';out.hidden=true;
  data.solutions??=[];data.solutions[data.gate]=code;save();
  try{
    const result=await compileSource(code);
    const diagnostics=(result.errors||[]).join('\n').trim();
    const output=String(result.stdout||'');
    out.hidden=false;out.textContent=diagnostics||output||'(Chương trình không in gì)';
    if(result.exitCode!==0||diagnostics){status.innerHTML='<b>Chưa biên dịch được.</b> Đọc lỗi bên dưới, sửa mã rồi chạy lại.';sfx('error');return}
    if(!c.check(code)){status.innerHTML=`<b>Chưa đúng yêu cầu.</b> ${esc(c.checkHint)}`;sfx('error');return}
    if(output.trimEnd()!==c.expected){status.innerHTML=`<b>Chương trình chạy rồi, nhưng đầu ra chưa khớp.</b> Hãy so sánh từng chữ và chỗ xuống dòng với mục tiêu.`;sfx('error');return}
    status.innerHTML='<b>Đạt!</b> Mã đã biên dịch, chạy và cho đúng kết quả.';
    $('challengeNext').innerHTML='<button data-action="challenge-next">Mở đường tới trạm tiếp theo →</button>';
    challengePassed=true;data.score+=120;save();chord();burst(LANES[lane],1.6,GATES[data.gate].z,0x83ffe2);
  }catch(error){status.textContent=`Chưa chạy được bộ biên dịch: ${error.message}`;out.hidden=true}
  finally{button.disabled=challengePassed?true:false}
}
function wrongGate(g,selected){
  mode='wrong';data.hearts--;data.score=Math.max(0,data.score-15);if(data.hearts<=0)data.hearts=3;save();hud();sfx('error');
  const why=selected===undefined?'Robot chưa tới đúng mảnh mã.':`Mảnh ${g.options[selected]} chưa đúng.`;
  show(`<p class="eyebrow">THỬ LẠI MẢNH ${Math.min(data.gate+1,4)}</p><h2>Robot cần sửa đường đi</h2><p class="feedback">${esc(why)} ${esc(g.hint)}</p><p>Con có thể đổi làn sớm hơn khi thấy ba mảnh mã ở phía trước.</p><button data-action="retry">Thử lại từ ngay trước mảnh này →</button>`);
  distance=g.z-11;lane=1;targetX=0;jump=jumpVelocity=0;
}
function showGate(g){
  if(!choice.hidden&&displayedGate===data.gate&&displayedLane===lane)return;
  displayedGate=data.gate;displayedLane=lane;
  choice.hidden=false;
  $('choiceStep').textContent=`${g.topic} · TRẠM ${data.gate+1}/5`;
  $('choicePrompt').textContent=g.prompt;
  $('choiceCards').innerHTML=g.options.map((v,i)=>`<div class="choice-card ${i===lane?'active':''}"><small>${['TRÁI','GIỮA','PHẢI'][i]}</small><strong>${esc(visibleSpaces(v))}</strong></div>`).join('');
  choice.querySelector('p').textContent=mode==='choose'?'← → đổi bệ · Space hoặc Enter để robot nhảy vào mảnh đã chọn':'Robot đang tới gần bệ mã…';
}
function collect(g){
  choice.hidden=true;displayedGate=-1;burst(LANES[lane],1.6,g.z,0xffd677);chord();
  flash(`Đúng bệ ${g.piece}. ${g.hint}`,3.3);
  codeChallenge();
}
function terminalPanel(){
  mode='terminal';save();show(`<p class="eyebrow">BẢNG ĐIỀU KHIỂN · ĐÃ QUA 5 TRẠM</p><h2>Con đã dùng đủ năm ý</h2>${codeWindow('// Robot gui loi chao\ncout << "Xin chao!" << endl;\ncout << "San sang!";')}<p>Thử đoán chính xác hai dòng hiện trên màn hình, rồi bấm chạy để so sánh.</p><button data-action="run-code">CHẠY CHƯƠNG TRÌNH ▶</button>`);
}
function runResult(){
  mode='run-result';chord();burst(0,3,139,0x92ffe0);save();
  show(`<p class="eyebrow">KẾT QUẢ SAU KHI CHẠY</p><h2>Robot đã nói!</h2><div class="big-output">Xin chao!<br>San sang!</div><p class="lesson">Dòng bắt đầu bằng <b>//</b> không chạy. <b>endl</b> đưa lời nhắn thứ hai xuống dòng mới.</p><p>Boss cuối đã trộn lại mã. Con hãy đọc và sửa để mở cầu về đích.</p><button data-action="boss">Vào trạm boss →</button>`);
}
function bossIntro(){
  data.bossFixed=0;bossFixPanel();
}
function bossFixPanel(){
  mode='boss-fix';hud();
  const tasks=[
    {title:'Cửa vào chương trình',code:'#include <iostream>\nusing namespace std;\n_____ {\n  cout << "Hi";\n}',question:'Điền dòng mở phần chứa lệnh chạy.',options:['int main()','void start()','cout main()'],correct:0,hint:'Các lệnh được thực hiện trong int main() { ... }.'},
    {title:'Bẫy hai dòng',code:'cout << "A" << endl;\ncout << "B";',question:'Kết quả hiện trên màn hình là gì?',options:['AB trên một dòng','A rồi B ở hai dòng','Máy in cả chữ endl'],correct:1,hint:'endl chuyển xuống dòng mới trước khi in B.'},
    {title:'Lá chắn ghi chú',code:'// cout << "BUG";\ncout << "SAFE";',question:'Máy sẽ in nội dung nào?',options:['BUG và SAFE','BUG','SAFE'],correct:2,hint:'Dòng mở đầu bằng // không chạy.'}
  ];
  const task=tasks[data.bossFixed];
  show(`<p class="eyebrow">BOSS CUỐI · CÂU ${data.bossFixed+1}/3</p><h2>${task.title}</h2><p>${task.question}</p>${codeWindow(task.code)}<div class="prediction-grid boss-options">${task.options.map((value,i)=>`<button data-action="boss-answer" data-answer="${i}">${esc(value)}</button>`).join('')}</div><div id="bossFeedback" class="part-info">Chọn đáp án để làm yếu lá chắn của boss.</div>`);
}
function bossAnswer(answer){
  const correct=[0,1,2][data.bossFixed]===Number(answer);
  if(!correct){$('bossFeedback').textContent=['Các lệnh được thực hiện trong int main() { ... }.','endl chuyển xuống dòng mới trước khi in B.','Dòng mở đầu bằng // không chạy.'][data.bossFixed];sfx('error');return}
  data.bossFixed++;data.score+=70;save();burst(-5.6,4,190,0xd9a1ff);sfx('success');hud();
  if(data.bossFixed<3){bossFixPanel();return}
  mode='boss-ready';hud();show(`<p class="eyebrow">BOSS · ĐÃ GIẢI MÃ</p><h2>Đường thoát đã mở!</h2><p>Con đã xác định nơi chương trình bắt đầu, đọc đúng kết quả xuống dòng và loại bỏ lệnh nằm trong ghi chú. Đoạn cuối có bug di chuyển và làn sóng tím. Điều khiển robot vượt qua để nhận phiếu hoàn thành.</p><button data-action="boss-play">Vượt đợt tấn công cuối →</button>`);
}
function finish(){
  mode='win';if(!data.finishedAt)data.finishedAt=new Date().toISOString();data.finished=true;save();choice.hidden=true;hud();chord();
  $('mission').textContent='Đã hoàn thành hành trình!';
  const mins=Math.floor(data.elapsed/60),secs=Math.floor(data.elapsed%60);
  show(`<div class="hero-emoji">🏆</div><p class="eyebrow">HOÀN THÀNH ĐẢO LỆNH ĐẦU TIÊN</p><h1>Robot đã vượt qua bug!</h1><p>Con đã hoàn thành <b>5 thử thách viết mã C++ cá nhân</b> và vượt boss tổng hợp.</p><p><b>${esc(data.name)}</b> · ${esc(data.lop)} · ${data.score} điểm · thời gian di chuyển ${mins}:${String(secs).padStart(2,'0')}</p><div class="two-buttons"><button data-action="pdf">Tải phiếu hoàn thành PDF ↓</button><button class="secondary" data-action="replay">Chơi lại</button></div><p class="small">Phiếu này ghi nhận phần học và chơi cá nhân. Bài cặp đôi nộp riêng một PDF trên Canvas.</p>`);
}
function pause(){
  if(!['run','boss-run','choose'].includes(mode))return;pausedMode=mode;mode='pause';
  show(`<p class="eyebrow">TẠM DỪNG</p><h2>Robot đang đợi con.</h2><p>← → đổi làn để nhặt mảnh mã; Space nhảy qua thanh chắn. Đến gần mảnh mã, robot chạy chậm để con đọc và chọn.</p><button data-action="resume">Chơi tiếp →</button>`);
}
function resume(){hide();mode=pausedMode;pausedMode=''}
async function pdf(){
  if(!window.PDFLib)throw Error('PDFLib missing');
  const canvas=document.createElement('canvas');canvas.width=1600;canvas.height=1000;const c=canvas.getContext('2d');
  c.fillStyle='#f9fbfa';c.fillRect(0,0,1600,1000);
  c.fillStyle='#102f4b';c.fillRect(0,0,1600,160);
  c.fillStyle='#0b8e89';c.fillRect(0,160,1600,11);
  c.fillStyle='#0d827e';c.beginPath();c.arc(113,83,39,0,Math.PI*2);c.fill();
  c.fillStyle='#fff';c.textAlign='center';c.font='bold 24px Arial';c.fillText('C++',113,91);
  c.textAlign='left';c.fillStyle='#eaf8f4';c.font='bold 29px Arial';c.fillText('LẬP TRÌNH C++ · LỚP 8',180,76);
  c.font='21px Arial';c.fillText('BÀI 1  /  ĐẢO LỆNH ĐẦU TIÊN',180,112);
  c.textAlign='right';c.fillStyle='#9fd8d0';c.font='bold 19px Arial';c.fillText('HOÀN THÀNH CÁ NHÂN',1495,93);
  c.textAlign='center';c.fillStyle='#127d7a';c.font='bold 23px Arial';c.fillText('PHIẾU XÁC NHẬN HOÀN THÀNH',800,255);
  c.fillStyle='#102f4b';c.font='bold 58px Arial';c.fillText('NĂM MẢNH MÃ ĐẦU TIÊN',800,335);
  c.fillStyle='#5e7280';c.font='25px Arial';c.fillText('Học sinh',800,411);
  const name=String(data.name||'Học sinh');let size=69;
  do{c.font=`bold ${size}px Arial`;if(c.measureText(name).width<=1250)break;size-=2}while(size>37);
  c.fillStyle='#102f4b';c.fillText(name,800,490);
  c.strokeStyle='#bed6d1';c.lineWidth=2;c.beginPath();c.moveTo(275,525);c.lineTo(1325,525);c.stroke();
  c.fillStyle='#244b60';c.font='25px Arial';c.fillText(`Lớp ${data.lop}     ·     ${data.score} điểm`,800,573);
  c.fillStyle='#102f4b';c.font='bold 24px Arial';c.fillText('ĐÃ HOÀN THÀNH',800,644);
  c.fillStyle='#244b60';c.font='23px Arial';c.fillText('5 thử thách viết mã C++ cá nhân và màn boss tổng hợp',800,688);
  const skills=['main()','cout','dấu ;','endl / \\n','ghi chú //'];
  const x0=172,gap=269;
  skills.forEach((label,i)=>{
    const x=x0+i*gap;c.fillStyle='#e8f6f2';c.beginPath();c.roundRect(x,736,242,69,14);c.fill();
    c.strokeStyle='#acd8cc';c.lineWidth=2;c.stroke();
    c.fillStyle='#087c78';c.font='bold 21px Arial';c.fillText(label,x+121,780);
  });
  c.fillStyle='#eef3f4';c.fillRect(0,855,1600,145);
  c.textAlign='left';c.fillStyle='#476474';c.font='20px Arial';
  c.fillText('Ngày hoàn thành',105,910);
  c.fillStyle='#102f4b';c.font='bold 27px Arial';c.fillText(new Date(data.finishedAt||Date.now()).toLocaleDateString('vi-VN',{timeZone:'Asia/Ho_Chi_Minh'}),105,948);
  c.textAlign='right';c.fillStyle='#476474';c.font='19px Arial';c.fillText('Kết quả từ hoạt động học và chơi cá nhân của Bài 1',1495,915);
  c.fillText('Phiếu được tạo tự động khi hoàn thành màn chơi.',1495,947);
  const raw=canvas.toDataURL('image/png').split(',')[1],bytes=Uint8Array.from(atob(raw),v=>v.charCodeAt(0));
  const doc=await PDFLib.PDFDocument.create(),img=await doc.embedPng(bytes),page=doc.addPage([800,500]);page.drawImage(img,{x:0,y:0,width:800,height:500});
  const blob=new Blob([await doc.save()],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download=`Phieu_Bai01_${data.lop}_${data.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'_').slice(0,30)}.pdf`;
  document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),8000);flash('Đã tải phiếu hoàn thành PDF.',3);
}

panel.addEventListener('click',async event=>{
  const button=event.target.closest('[data-action]');if(!button)return;
  switch(button.dataset.action){
    case 'learn':{
      const name=$('studentName').value.trim(),lop=$('studentClass').value;
      if(name.split(/\s+/).length<2){$('formError').textContent='Nhập cả họ và tên.';return}
      if(!CLASSES.includes(lop)){$('formError').textContent='Chọn lớp từ 8A1 đến 8A10.';return}
      data.name=name;data.lop=lop;save();learn();break;
    }
    case 'lesson-answer':{
      const item=LESSONS[data.lesson],correct=Number(button.dataset.answer)===item.correct;
      panel.querySelectorAll('[data-action="lesson-answer"]').forEach(b=>b.classList.toggle('selected',b===button));
      $('lessonFeedback').innerHTML=correct?`<b>${item.why}</b>`:`Chưa đúng. Đọc lại ví dụ và phần lưu ý, rồi chọn lại.`;
      $('lessonFeedback').classList.toggle('correct',correct);
      $('lessonNext').innerHTML=correct?`<button data-action="lesson-next">${data.lesson===4?'Bắt đầu điều khiển robot':'Sang phần tiếp theo'} →</button>`:'';
      sfx(correct?'success':'error');break;
    }
    case 'lesson-next':if(data.lesson<4)lesson(data.lesson+1);else{hide();distance=data.gate===0?0:GATES[data.gate-1].z+1;mode='run';hud();flash('Hãy chọn đúng bệ ở mỗi trạm, rồi viết mã để mở đường.',4)}break;
    case 'compile':await checkChallenge();break;
    case 'hint':$('compilerStatus').textContent=CHALLENGES[data.gate].tip;break;
    case 'challenge-next':{
      if(!challengePassed)break;
      const current=GATES[data.gate];data.gate++;data.hearts=Math.min(3,data.hearts+1);save();
      distance=current.z+1;lane=1;targetX=0;hide();mode='run';hud();
      flash(data.gate===5?'Đủ năm trạm! Tới bảng điều khiển để chạy chương trình.':`Đã mở trạm ${data.gate+1}. Quan sát đường và né vật cản!`,4);
      break;
    }
    case 'play':{
      hide();data.finished=false;distance=data.gate===0?0:GATES[data.gate-1].z+2;
      mode='run';hud();sfx('select');break;
    }
    case 'retry':hide();mode='run';hud();break;
    case 'retry-wave':hide();mode='boss-run';hud();flash('Canh đúng lúc và nhấn Space để nhảy qua sóng.',4);break;
    case 'run-code':runResult();break;
    case 'boss':bossIntro();break;
    case 'boss-answer':bossAnswer(button.dataset.answer);break;
    case 'boss-play':hide();distance=145;lane=1;targetX=0;mode='boss-run';hud();flash('Boss ném vật cản! Đổi làn hoặc nhảy qua sóng.',4);break;
    case 'resume':resume();break;
    case 'pdf':try{await pdf()}catch(error){console.error(error);flash('Không tạo được PDF. Hãy thử tải lại trang.',4)}break;
    case 'replay':data={...fresh(),name:data.name,lop:data.lop};save();distance=0;lane=1;targetX=0;boostTimer=0;hazards.forEach(h=>{h.used=false;h.warned=false});pickups.forEach(p=>{p.used=false;p.group.visible=true});intro();break;
    case 'reset':data={...fresh(),name:data.name,lop:data.lop};save();distance=0;lane=1;targetX=0;boostTimer=0;hazards.forEach(h=>{h.used=false;h.warned=false});pickups.forEach(p=>{p.used=false;p.group.visible=true});intro();break;
    case 'reload':window.location.reload();break;
  }
});
panel.addEventListener('input',event=>{
  if(event.target.id==='studentCode'){
    $('editorGutter').textContent=lineNumbers(event.target.value);
    data.solutions??=[];data.solutions[data.gate]=event.target.value;save();
  }
  if(event.target.id==='studentPseudo'){data.pseudocodes??=[];data.pseudocodes[data.gate]=event.target.value;save()}
});
panel.addEventListener('scroll',event=>{if(event.target.id==='studentCode')$('editorGutter').scrollTop=event.target.scrollTop},true);
panel.addEventListener('keydown',event=>{
  if(event.target.id!=='studentCode'||!['Tab','Enter'].includes(event.key))return;
  event.preventDefault();const box=event.target,start=box.selectionStart,end=box.selectionEnd;
  if(event.key==='Tab')box.setRangeText('  ',start,end,'end');
  else{
    const current=box.value.slice(box.value.lastIndexOf('\n',start-1)+1,start);
    const indent=current.match(/^\s*/)?.[0]||'';
    const extra=/\{\s*(?:\/\/.*)?$/.test(current)?'  ':'';
    box.setRangeText('\n'+indent+extra,start,end,'end');
  }
  $('editorGutter').textContent=lineNumbers(box.value);
});
$('pauseButton').addEventListener('click',pause);
$('soundButton').addEventListener('click',()=>{muted=!muted;$('soundButton').textContent=muted?'♩':'♪';$('soundButton').setAttribute('aria-label',muted?'Bật âm thanh':'Tắt âm thanh')});
function steer(value){if(!['run','boss-run','choose'].includes(mode))return;lane=THREE.MathUtils.clamp(lane+value,0,2);targetX=LANES[lane];if(!choice.hidden){displayedLane=-1;showGate(GATES[data.gate])}sfx('move')}
function jumpAction(){
  if(mode==='choose'){flightLane=lane;flightStart=distance;flightTime=0;mode='gate-fly';choice.hidden=true;sfx('select');return}
  if(!['run','boss-run'].includes(mode)||jump>.01)return;jumpVelocity=7;sfx('jump');
}
document.querySelectorAll('[data-control]').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.control==='left')steer(-1);else if(button.dataset.control==='right')steer(1);else jumpAction()}));
document.addEventListener('keydown',event=>{
  if(['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName))return;
  const key=event.key.toLowerCase();if(['arrowleft','arrowright','a','d',' '].includes(key)||(mode==='choose'&&key==='enter'))event.preventDefault();if(event.repeat)return;
  if(key==='arrowleft'||key==='a')steer(-1);else if(key==='arrowright'||key==='d')steer(1);else if(key===' '||key==='enter')jumpAction();else if(key==='escape')pause();
});

function burst(x,y,z,color){
  const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:1,depthWrite:false}),geometry=new THREE.OctahedronGeometry(.10,0);
  for(let i=0;i<18;i++){const mesh=new THREE.Mesh(geometry,material.clone());mesh.position.set(x,y,z);scene.add(mesh);const angle=i/18*Math.PI*2,force=1.3+(i%3)*.45;particles.push({mesh,vx:Math.cos(angle)*force,vy:1+(i%4)*.43,vz:Math.sin(angle)*force,life:1})}
  material.dispose();
}
function addHazards(){
  for(const [i,z] of [11,37,61,85,108,153,174].entries()){
    const laneIndex=[0,2,1,0,2,1,0][i],type=i%2?'bug':'bar',group=new THREE.Group();group.position.set(LANES[laneIndex],0,z);scene.add(group);
    if(type==='bar'){
      mesh(new THREE.BoxGeometry(1.55,.42,.5),bugMaterial,group,0,.55,0);
      mesh(new THREE.BoxGeometry(.13,.8,.17),bugMaterial,group,-.59,.49,0);
      mesh(new THREE.BoxGeometry(.13,.8,.17),bugMaterial,group,.59,.49,0);
    }else{
      mesh(new THREE.IcosahedronGeometry(.59,1),bugMaterial,group,0,.86,0);
      const ring=mesh(new THREE.TorusGeometry(.8,.08,8,24),mintMaterial,group,0,.86,0);ring.rotation.x=Math.PI/2;
    }
    hazards.push({group,z,type,used:false,phase:i*1.6,baseX:LANES[laneIndex],moving:i>=3&&type==='bug'});
  }
  const wave=new THREE.Group();wave.position.z=188;scene.add(wave);
  const waveMaterial=new THREE.MeshStandardMaterial({color:0xeca1ff,emissive:0x813ab6,transparent:true,opacity:.7,side:THREE.DoubleSide});
  mesh(new THREE.BoxGeometry(8.3,1.15,.16),waveMaterial,wave,0,.58,0);
  mesh(new THREE.TorusGeometry(4.1,.09,8,36),violetMaterial(),wave,0,.58,0).rotation.z=Math.PI/2;
  hazards.push({group:wave,z:188,type:'wave',used:false,phase:0,baseX:0,moving:false,warned:false});
}
function violetMaterial(){return material(0xc591ff,0x713da5)}
function addPickups(){
  for(const [i,z] of [16,41,64,88,111,158,179].entries()){
    const laneIndex=[2,0,2,1,0,2,1][i],group=new THREE.Group();group.position.set(LANES[laneIndex],1.45,z);scene.add(group);
    mesh(new THREE.OctahedronGeometry(.36,0),goldMaterial,group);
    const halo=mesh(new THREE.TorusGeometry(.55,.045,8,22),mintMaterial,group);halo.rotation.x=Math.PI/2;
    pickups.push({group,z,lane:laneIndex,used:false});
  }
}
function addWorldDetails(){
  const towerBase=material(0x275374),towerGlow=material(0x6beacb,0x1d7e89),bossBase=material(0x4a367f),bossGlow=violetMaterial();
  for(let i=0;i<11;i++)for(const side of [-1,1]){
    const group=new THREE.Group();group.position.set(side*(8.4+(i%3)*.65),0,i*20+13);scene.add(group);
    const bossZone=i>=7,h=2.4+(i%4)*.62;
    mesh(new THREE.CylinderGeometry(.56,.86,h,6),bossZone?bossBase:towerBase,group,0,h/2,0);
    mesh(new THREE.OctahedronGeometry(.62,0),bossZone?bossGlow:towerGlow,group,0,h+.28,0);
    const orbit=mesh(new THREE.TorusGeometry(1,.055,8,20),bossZone?bossGlow:towerGlow,group,0,h-.3,0);orbit.rotation.x=Math.PI/2;
  }
  for(const [label,z,color,x] of [['KHUNG CHƯƠNG TRÌNH',13,'#155a6c',-6.8],['CẦU HAI DÒNG',87,'#116673',6.8],['BẢNG ĐIỀU KHIỂN',137,'#116673',6.8],['VÙNG CỦA BOSS',159,'#653d8e',-6.8]]){
    const sign=sprite(label,color,3.4);sign.position.set(x,5.9,z);scene.add(sign);
  }
}
function addTokens(){
  for(let i=0;i<GATES.length;i++){
    const g=GATES[i],group=new THREE.Group();group.position.z=g.z;scene.add(group);
    for(let j=0;j<3;j++){
      const x=LANES[j];
      const pad=mesh(new THREE.CylinderGeometry(1.05,.95,.22,8),material([0x176f81,0x177f69,0x9b6b28,0x3c80aa,0x65478f][i]),group,x,.09,0);
      const ring=mesh(new THREE.TorusGeometry(1.04,.07,8,28),mintMaterial,group,x,.26,0);ring.rotation.x=Math.PI/2;
      const shard=tokenAsset.clone(true);shard.position.set(x,1.3,0);shard.scale.setScalar(.48);group.add(shard);
      const sign=sprite(visibleSpaces(g.options[j]),['#153f57','#154d46','#69501c','#1b4e70','#573775'][i],2.55);sign.position.set(x,2.32,0);group.add(sign);
      pad.userData.lane=j;
    }
    tokenGroups.push(group);
  }
}
function resize(){const host=$('world'),w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)}
new ResizeObserver(resize).observe($('world'));resize();
const clock=new THREE.Clock();
function frame(){
  const dt=Math.min(clock.getDelta(),.05),time=clock.elapsedTime,active=['run','boss-run'].includes(mode);
  if(active||mode==='gate-fly')data.elapsed+=dt;
  if(active){
    damageLock=Math.max(0,damageLock-dt);
    const gate=GATES[data.gate],approach=gate&&distance>=gate.z-11&&distance<gate.z-3;
    boostTimer=Math.max(0,boostTimer-dt);
    const speed=approach?2.4:(boostTimer>0?5.3:3.65);
    distance+=dt*speed;
    jumpVelocity-=dt*15;jump=Math.max(0,jump+jumpVelocity*dt);if(jump===0)jumpVelocity=0;
    if(gate&&approach)showGate(gate);else if(!choice.hidden)choice.hidden=true;
    if(gate&&distance>=gate.z-3){mode='choose';distance=gate.z-3;jump=jumpVelocity=0;displayedGate=-1;showGate(gate);flash('Đổi bệ bằng ← →, sau đó nhấn Space hoặc Enter để chọn.',12)}
    for(const h of hazards){
      if(h.used||damageLock>0)continue;
      if(h.type==='wave'&&!h.warned&&distance>h.z-13){h.warned=true;flash('Làn sóng tím sắp tới! Nhấn Space để nhảy qua.',3);sfx('warning')}
      const inLane=h.type==='wave'||Math.abs((h.group.position.x||h.baseX)-LANES[lane])<.88;
      if(Math.abs(distance-h.z)<.42&&inLane&&jump<(h.type==='bar'?.65:h.type==='wave'?.8:1.08)){
        if(h.type==='wave'){
          h.warned=false;distance=h.z-8;jump=jumpVelocity=0;mode='wave-retry';data.hearts=Math.max(1,data.hearts-1);data.score=Math.max(0,data.score-10);save();hud();sfx('error');
          show('<p class="eyebrow">THỬ THÁCH CUỐI · SÓNG TÍM</p><h2>Robot chưa nhảy qua sóng</h2><p>Con cần dùng <b>Space</b> hoặc nút <b>NHẢY</b> khi robot đến gần làn sóng. Quan sát khoảng cách rồi thử lại từ ngay trước chướng ngại vật.</p><button data-action="retry-wave">Thử nhảy lại →</button>');break;
        }
        h.used=true;damageLock=1.2;data.hearts--;data.score=Math.max(0,data.score-10);if(data.hearts<=0)data.hearts=3;save();hud();sfx('error');
        flash(h.type==='wave'?'Sóng tím! Nhấn Space khi đến gần để nhảy qua.':h.type==='bar'?'Thanh chắn! Dùng Space để nhảy hoặc đổi làn.':'Bug di chuyển! Hãy quan sát và đổi làn sớm.',3.2);distance=Math.max(0,h.z-4);jump=jumpVelocity=0;break;
      }
    }
    for(const pickup of pickups){
      if(pickup.used||Math.abs(distance-pickup.z)>.6||lane!==pickup.lane||jump>1.4)continue;
      pickup.used=true;pickup.group.visible=false;data.score+=25;boostTimer=1.6;save();hud();burst(LANES[lane],1.5,pickup.z,0xffdd82);sfx('crystal');flash('Đã nhặt tinh thể: +25 điểm và tăng tốc!',1.5);
    }
    if(mode==='run'&&data.gate===5&&distance>=139)terminalPanel();
    if(mode==='boss-run'&&distance>=200)finish();
    hud();
  }
  if(mode==='gate-fly'){
    const gate=GATES[data.gate];flightTime+=dt;
    const p=Math.min(1,flightTime/.8);distance=THREE.MathUtils.lerp(flightStart,gate.z,p);jump=Math.sin(p*Math.PI)*1.45;
    if(p>=1){jump=0;lane=flightLane;if(lane===gate.correct){collect(gate);distance=gate.z+1}else wrongGate(gate,lane)}
  }
  if(player){
    const x=THREE.MathUtils.lerp(player.position.x,targetX,Math.min(1,dt*8));player.position.set(x,.10+jump+(active&&jump===0?Math.sin(time*12)*.025:0),distance);
    player.rotation.z=THREE.MathUtils.lerp(player.rotation.z,(targetX-x)*-.06,.15);
    if(playerMixer&&active)playerMixer.update(dt*1.25);
  }
  if(terminal)terminal.visible=!['boss-run','wave-retry','win'].includes(mode);
  if(guardian){guardian.visible=(mode==='boss-fix'||mode==='boss-ready'||mode==='boss-run')&&mode!=='win';guardian.rotation.y=Math.sin(time*.8)*.27;guardian.position.y=Math.sin(time*1.7)*.24;guardian.scale.setScalar(1.55-data.bossFixed*.28)}
  tokenGroups.forEach((group,i)=>{group.visible=i>=data.gate&&!(mode==='terminal'||mode==='run-result');group.children.forEach((child,j)=>{if(child.type==='Group'){child.rotation.y=time*1.5+j;child.position.y=1.3+Math.sin(time*2+i+j)*.11}})});
  hazards.forEach((h,i)=>{if(h.type==='bug'){h.group.rotation.y=time*1.7+i;h.group.position.y=Math.sin(time*2.8+i)*.13}if(h.moving)h.group.position.x=THREE.MathUtils.clamp(h.baseX+Math.sin(time*1.6+h.phase)*1.25,LANES[2],LANES[0])});
  pickups.forEach((pickup,i)=>{if(!pickup.used){pickup.group.rotation.y=time*1.2+i;pickup.group.position.y=1.45+Math.sin(time*2+i)*.13}});
  const mood=THREE.MathUtils.smoothstep(distance,139,166);scene.background.copy(daySky).lerp(bossSky,mood);scene.fog.color.copy(scene.background);
  for(let i=particles.length-1;i>=0;i--){const p=particles[i];p.life-=dt;if(p.life<=0){scene.remove(p.mesh);p.mesh.material.dispose();const geo=p.mesh.geometry;particles.splice(i,1);if(!particles.some(item=>item.mesh.geometry===geo))geo.dispose();continue}p.mesh.position.x+=p.vx*dt;p.mesh.position.y+=p.vy*dt;p.mesh.position.z+=p.vz*dt;p.vy-=dt*3.2;p.mesh.material.opacity=p.life}
  if(performance.now()>toastUntil&&active){$('mission').textContent=mode==='boss-run'?'Né bug, nhảy qua làn sóng tím để về đích!':data.gate<5?'Chọn bệ đúng rồi viết mã C++ để mở đường.':'Tới bảng điều khiển để chạy chương trình.'}
  const desired=new THREE.Vector3(player?.position.x*.18||0,5.35,distance-10.5);camera.position.lerp(desired,Math.min(1,dt*4.5));camera.lookAt(0,1.3,distance+9);
  renderer.render(scene,camera);
}
renderer.setAnimationLoop(frame);

async function load(){
  const loader=new GLTFLoader(),url=name=>`assets/glb/${name}.glb`;
  const [robot,bridge,consoleAsset,boss,shard]=await Promise.all(['robot','bridge','terminal','guardian','shard'].map(name=>loader.loadAsync(url(name))));
  player=robot.scene;player.scale.setScalar(.82);scene.add(player);player.traverse(obj=>{if(obj.isMesh){obj.castShadow=true;obj.receiveShadow=true}});
  if(robot.animations.length){playerMixer=new THREE.AnimationMixer(player);robot.animations.forEach(clip=>playerMixer.clipAction(clip).play())}
  for(let i=0;i<12;i++){const chunk=bridge.scene.clone(true);chunk.position.z=i*20;scene.add(chunk);chunk.traverse(obj=>{if(obj.isMesh){obj.castShadow=false;obj.receiveShadow=true}})}
  terminal=consoleAsset.scene;terminal.position.set(0,0,142);terminal.rotation.y=Math.PI;scene.add(terminal);
  guardian=boss.scene;guardian.position.set(-5.6,0,194);scene.add(guardian);
  tokenAsset=shard.scene;addTokens();addHazards();addPickups();addWorldDetails();
  ready=true;if(data.finished){distance=200;finish()}else intro();
}
show('<p class="eyebrow">ĐANG CHUẨN BỊ MÀN CHƠI</p><h2>Robot đang tới đảo…</h2><p>Đang tải cảnh và nhân vật 3D.</p>');
load().catch(error=>{console.error('3D assets failed to load',error);show('<p class="eyebrow">KHÔNG TẢI ĐƯỢC MÀN CHƠI</p><h2>Hãy kiểm tra kết nối và tải lại trang</h2><p>Nếu lỗi vẫn còn, hãy báo giáo viên để kiểm tra tệp trò chơi.</p><button data-action="reload">Tải lại trang</button>')});

