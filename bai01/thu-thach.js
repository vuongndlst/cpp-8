// Xưởng nhóm Bài 1: lập kế hoạch, viết C++ và chạy Clang WebAssembly ngay trong trang.
const KEY='cpp8_bai01_xuong_in_chu_v4';
const CLASSES=Array.from({length:10},(_,i)=>`8A${i+1}`);
const MISSIONS=[
  {id:'ticket',title:'Vé vào Đảo Lệnh',description:'In tấm vé khởi hành của lớp.',lines:['=== DAO LENH ===','NHOM LAP TRINH LOP 8','SAN SANG XUAT PHAT!']},
  {id:'tree',title:'Cây thông mini',description:'Chú ý khoảng trắng trước mỗi dấu sao.',lines:['  *',' ***','*****']},
  {id:'robot',title:'Biển báo robot',description:'Làm biển báo mở đường cho robot.',lines:['[ ROBOT 8 ]','KIEM TRA MA C++','DUONG DA MO!']}
];
const START='#include <iostream>\nusing namespace std;\n\nint main() {\n  // Viet y tuong cua nhom o day\n\n  return 0;\n}\n';
const base=()=>({step:0,unlocked:0,members:['','',''],lop:'',mission:'',inputChoice:'',prediction:'',pseudo:'',code:START,actualOutput:'',passed:false,reflection:'',feedback:'',feedbackKind:''});
let state;try{state={...base(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{state=base()}
if(!Array.isArray(state.members)||state.members.length!==3)state.members=['','',''];
const app=document.getElementById('pairApp'),stepper=document.getElementById('stepper');
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const save=()=>localStorage.setItem(KEY,JSON.stringify(state));
const mission=()=>MISSIONS.find(x=>x.id===state.mission);
const target=()=>mission()?.lines.join('\n')||'';
const rows=text=>Array.from({length:String(text).split('\n').length},(_,i)=>i+1).join('\n');
const status=()=>`<p class="status ${state.feedbackKind}" role="status">${esc(state.feedback)}</p>`;
const actions=(label='Tiếp tục')=>`<div class="actions">${state.step>0?'<button class="btn secondary" data-action="back">← Quay lại</button>':''}<span class="spacer"></span><button class="btn" data-action="next">${label} →</button></div>`;
function setFeedback(message,kind='bad'){state.feedback=message;state.feedbackKind=kind;save();render()}
function navigate(step){if(step<0||step>state.unlocked)return;state.step=step;state.feedback='';state.feedbackKind='';save();render();window.scrollTo({top:0,behavior:'smooth'})}
function advance(){state.unlocked=Math.max(state.unlocked,state.step+1);state.step++;state.feedback='';state.feedbackKind='';save();render();window.scrollTo({top:0,behavior:'smooth'})}
function renderStepper(){const labels=['Thành viên','Nhiệm vụ','Đầu vào / đầu ra','Mã giả','Viết và chạy'];stepper.innerHTML=labels.map((label,i)=>`<button type="button" data-step="${i}" class="${i===state.step?'active':i<state.unlocked?'done':''}" ${i>state.unlocked?'disabled':''} ${i===state.step?'aria-current="step"':''}><b>${i+1}</b><span>${label}</span></button>`).join('')}
function render(){
  renderStepper();let html='';const m=mission();
  if(state.step===0){
    html=`<p class="stage-label">BƯỚC 1 / 5 · THÀNH VIÊN</p><h2>Ai đang làm bài?</h2><p class="lead">Một bạn vẫn có thể làm. Nếu làm nhóm, nhập thêm tối đa hai bạn và thay nhau giải thích từng bước.</p><div class="form-grid">${[0,1,2].map(i=>`<label class="field"><span>Họ và tên bạn ${i+1} ${i===0?'(bắt buộc)':'(nếu có)'}</span><input name="member${i}" maxlength="70" value="${esc(state.members[i])}" placeholder="${i===0?'Nguyễn Minh Anh':'Họ và tên'}"></label>`).join('')}</div><label class="field"><span>Lớp</span><select name="lop"><option value="">Chọn lớp</option>${CLASSES.map(c=>`<option value="${c}" ${state.lop===c?'selected':''}>${c}</option>`).join('')}</select></label>${status()}${actions('Chọn nhiệm vụ')}`;
  }else if(state.step===1){
    html=`<p class="stage-label">BƯỚC 2 / 5 · ĐỌC ĐỀ</p><h2>Nhóm chọn một sản phẩm</h2><p class="lead">Ba dòng trong ô đen là <b>kết quả bắt buộc</b>. Máy sẽ so sánh từng chữ, dấu và khoảng trắng khi chấm.</p><div class="missions">${MISSIONS.map(x=>`<button type="button" class="mission-card ${state.mission===x.id?'selected':''}" data-action="mission" data-mission="${x.id}" aria-pressed="${state.mission===x.id}"><strong>${esc(x.title)}</strong><small>${esc(x.description)}</small><pre>${esc(x.lines.join('\n'))}</pre></button>`).join('')}</div>${status()}${actions('Lập bảng đầu vào / đầu ra')}`;
  }else if(state.step===2){
    html=`<p class="stage-label">BƯỚC 3 / 5 · HIỂU YÊU CẦU</p><h2>Đầu vào và đầu ra</h2><p class="lead">Bài đầu tiên chưa dùng <code>cin</code>. Hãy chỉ ra máy có cần chờ người dùng nhập gì không, rồi ghi đúng kết quả sẽ hiện.</p><div class="contract"><div><strong>Máy cần nhận dữ liệu nào?</strong><div class="choices"><label><input type="radio" name="inputChoice" value="none" ${state.inputChoice==='none'?'checked':''}> Không có đầu vào</label><label><input type="radio" name="inputChoice" value="name" ${state.inputChoice==='name'?'checked':''}> Nhập tên từ bàn phím</label></div></div><div><strong>Đề yêu cầu in đúng ba dòng</strong><pre>${esc(target())}</pre></div></div><label class="field"><span>Nhóm dự đoán màn hình sẽ hiện gì? <small>Nhập ba dòng; giữ đúng khoảng trắng.</small></span><textarea name="prediction" rows="4" spellcheck="false" placeholder="Dòng 1&#10;Dòng 2&#10;Dòng 3">${esc(state.prediction)}</textarea></label>${status()}${actions('Viết mã giả')}`;
  }else if(state.step===3){
    if(!state.pseudo)state.pseudo='Bắt đầu\nIn dòng 1: \nIn dòng 2: \nIn dòng 3: \nKết thúc';
    html=`<p class="stage-label">BƯỚC 4 / 5 · NGHĨ BẰNG LỜI</p><h2>Viết mã giả trước khi code</h2><p class="lead">Mã giả là cách diễn đạt từng bước bằng lời dễ hiểu. Nó chưa phải cú pháp C++. Mỗi dòng <b>In</b> phải nói rõ nội dung tương ứng ở bước trước.</p><div class="pseudo-frame"><p><strong>Ví dụ khác:</strong> nếu yêu cầu in hai dòng <code>HELLO</code> và <code>LOP 8</code>, ta viết:</p><pre>Bắt đầu\nIn dòng 1: HELLO\nIn dòng 2: LOP 8\nKết thúc</pre></div><label class="field"><span>Mã giả cho sản phẩm ${esc(m?.title||'của nhóm')}</span><textarea name="pseudo" rows="7" spellcheck="false">${esc(state.pseudo)}</textarea></label><p class="note">Đối chiếu với đầu ra: có đủ ba bước in, đúng thứ tự chưa?</p>${status()}${actions('Mở bước viết C++')}`;
  }else{
    html=`<p class="stage-label">BƯỚC 5 / 5 · VIẾT VÀ CHẠY</p><h2>Viết chương trình C++ của nhóm</h2><p class="lead">Dịch ba bước <b>In</b> thành ba lệnh <code>cout</code> trong <code>main()</code>. Dùng <code>endl</code> hoặc <code>\\n</code> để xuống dòng; sửa dòng <code>//</code> thành lời ghi chú của nhóm.</p><div class="contract"><div><strong>Đầu ra cần đạt</strong><pre>${esc(target())}</pre></div><div><strong>Nhớ kiểm tra</strong><p>Ba lệnh <code>cout</code> · dấu <code>;</code> · xuống dòng · ghi chú <code>//</code>.</p></div></div><label class="field" for="codeEditor"><span>Mã C++</span></label><div class="code-window"><div class="code-head"><i></i><i></i><i></i><strong>main.cpp</strong><span>C++17</span></div><div class="editor-body"><pre class="gutter" id="codeGutter" aria-hidden="true">${rows(state.code)}</pre><textarea id="codeEditor" class="editor" name="code" spellcheck="false" aria-label="Mã C++ của nhóm">${esc(state.code)}</textarea></div></div><div class="actions"><button class="btn" data-action="run" ${state.running?'disabled':''}>▶ Chạy và kiểm tra</button><button class="btn secondary" data-action="hint">Xem gợi ý</button></div><div class="console"><b>KẾT QUẢ CHẠY / LỖI BIÊN DỊCH</b><pre id="consoleOutput">${esc(state.actualOutput||'Chưa chạy chương trình.')}</pre></div>${status()}${state.passed?`<label class="field"><span>Nhóm đã phân công thế nào hoặc sửa được lỗi gì? <small>Viết ít nhất một câu.</small></span><textarea name="reflection" rows="3" maxlength="500">${esc(state.reflection)}</textarea></label><div class="actions"><button class="btn secondary" data-action="back">← Xem lại mã giả</button><span class="spacer"></span><button class="btn success" data-action="pdf">Tải PDF nộp Canvas ↓</button></div>`:'<div class="actions"><button class="btn secondary" data-action="back">← Xem lại mã giả</button></div>'}`;
  }
  app.innerHTML=html;save();
}
function validateStep(){
  if(state.step===0){
    const names=state.members.map(x=>x.trim()).filter(Boolean);
    if(!names.length)return 'Cần nhập họ và tên ít nhất một học sinh.';
    if(names.some(x=>x.split(/\s+/).length<2))return 'Mỗi tên đã nhập cần có họ và tên.';
    if(new Set(names.map(x=>x.toLocaleLowerCase('vi'))).size!==names.length)return 'Tên thành viên đang bị trùng.';
    if(!CLASSES.includes(state.lop))return 'Chọn lớp từ 8A1 đến 8A10.';
  }else if(state.step===1){if(!mission())return 'Chọn một sản phẩm trước khi tiếp tục.'}
  else if(state.step===2){
    if(state.inputChoice!=='none')return 'Bài này không có đầu vào: máy chỉ in nội dung đã cho.';
    const predicted=state.prediction.replace(/\r\n/g,'\n').replace(/\n$/,'');
    if(predicted!==target())return 'Đầu ra dự đoán chưa khớp ba dòng trong đề. Hãy kiểm tra từng chữ và khoảng trắng.';
  }else if(state.step===3){
    const lines=state.pseudo.split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
    if(lines.length!==5||lines[0].toLocaleLowerCase('vi')!=='bắt đầu'||lines[4].toLocaleLowerCase('vi')!=='kết thúc')return 'Mã giả cần có Bắt đầu, ba bước In, rồi Kết thúc.';
    if(lines.slice(1,4).some(x=>!/^in\b/i.test(x)||x.replace(/^in\s*(dòng\s*[123])?\s*:?/i,'').trim().length===0))return 'Viết rõ nội dung của cả ba bước In trong mã giả.';
  }
  return '';
}
let worker=null,requestId=0;
function compile(source){
  worker??=new Worker('compiler-worker.js');const id=++requestId;
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{worker?.terminate();worker=null;reject(Error('Bộ biên dịch mất quá nhiều thời gian. Thử chạy lại.'))},90000);
    const listener=({data})=>{if(data.id!==id)return;if(data.type==='loading'){const box=document.querySelector('.status');if(box)box.textContent='Đang tải bộ biên dịch C++…';return}if(data.type==='compiling'){const box=document.querySelector('.status');if(box)box.textContent='Đang biên dịch và chạy…';return}worker.removeEventListener('message',listener);clearTimeout(timer);if(data.type==='error')reject(Error(data.message));else resolve(data.result)};
    worker.addEventListener('message',listener);worker.postMessage({type:'run',id,code:source});
  });
}
async function runCode(){
  const code=document.getElementById('codeEditor')?.value||'';state.code=code;state.passed=false;save();
  const button=app.querySelector('[data-action="run"]');button.disabled=true;state.feedback='Đang chuẩn bị biên dịch…';state.feedbackKind='';app.querySelector('.status').textContent=state.feedback;
  try{
    const result=await compile(code);const diagnostics=(result.errors||[]).join('\n').trim();const output=String(result.stdout||'').replace(/\r\n/g,'\n');
    state.actualOutput=diagnostics||output||'(Không có đầu ra)';
    const active=code.split(/\r?\n/).filter(line=>!/^\s*\/\//.test(line));
    const coutCount=active.filter(line=>/\bcout\s*<</.test(line)).length;
    const comment=code.split(/\r?\n/).some(line=>/^\s*\/\/\s*\S/.test(line)&&!line.includes('Viet y tuong cua nhom o day'));
    const lineBreak=active.some(line=>/\bendl\b|\\n/.test(line));
    const normalized=output.replace(/\n$/,'');
    if(result.exitCode!==0||diagnostics)throw Error('Mã chưa biên dịch được. Đọc lỗi bên dưới, sửa rồi chạy lại.');
    if(coutCount<3)throw Error('Cần ba dòng lệnh cout: mỗi dòng tạo một dòng đầu ra.');
    if(!lineBreak)throw Error('Cần dùng endl hoặc \\n để tách ba dòng.');
    if(!comment)throw Error('Hãy thay dòng // mẫu bằng một ghi chú của nhóm.');
    if(normalized!==target())throw Error('Mã chạy được nhưng đầu ra chưa khớp đề. So sánh từng chữ và khoảng trắng.');
    state.passed=true;state.feedback='Đạt: mã biên dịch được và in đúng ba dòng theo đề.';state.feedbackKind='good';
  }catch(error){state.feedback=error.message;state.feedbackKind='bad'}
  save();render();
}
function drawReportPage(title,sections){
  const canvas=document.createElement('canvas');canvas.width=1240;canvas.height=1754;const ctx=canvas.getContext('2d');
  ctx.fillStyle='#ffffff';ctx.fillRect(0,0,1240,1754);ctx.fillStyle='#0b3558';ctx.fillRect(0,0,1240,20);let y=95;
  ctx.fillStyle='#0b3558';ctx.font='bold 43px Arial';ctx.fillText(title,75,y);y+=72;
  const draw=(text,mono=false)=>{ctx.font=mono?'22px Consolas,monospace':'25px Arial';ctx.fillStyle=mono?'#173750':'#263a4e';const width=1085;for(const raw of String(text).split('\n')){let line='';const words=mono?(raw.match(/\s+|\S+/g)||[]):raw.split(/\s+/);for(const word of words){const next=mono?line+word:line?line+' '+word:word;if(line&&ctx.measureText(next).width>width){ctx.fillText(line,78,y);y+=37;line=word.trimStart()}else line=next}ctx.fillText(line||' ',78,y);y+=37}y+=6};
  for(const section of sections){ctx.fillStyle='#0b8e89';ctx.font='bold 27px Arial';ctx.fillText(section.title,75,y);y+=42;draw(section.text,!!section.mono);y+=19}
  ctx.fillStyle='#7890a0';ctx.font='19px Arial';ctx.fillText('Bài 1 C++ lớp 8 · Xưởng in chữ · Báo cáo nhóm',75,1685);
  return canvas;
}
async function exportPDF(){
  if(!state.passed)return setFeedback('Cần biên dịch và đạt yêu cầu trước khi xuất PDF.');
  if(state.reflection.trim().length<20)return setFeedback('Viết ít nhất một câu về cách nhóm làm hoặc lỗi đã sửa.');
  if(!window.PDFLib)return setFeedback('Chưa tải được thư viện tạo PDF. Hãy tải lại trang.');
  const first=drawReportPage('XƯỞNG IN CHỮ · BÀI 1',[
    {title:'THÀNH VIÊN',text:`${state.members.map(x=>x.trim()).filter(Boolean).join(' · ')}\nLớp: ${state.lop}`},
    {title:'NHIỆM VỤ',text:`${mission().title}\nĐầu vào: không có\nĐầu ra dự đoán:\n${state.prediction}`,mono:false},
    {title:'MÃ GIẢ',text:state.pseudo,mono:false},
    {title:'CÁCH NHÓM LÀM',text:state.reflection}
  ]);
  const second=drawReportPage('MÃ C++ VÀ KẾT QUẢ',[
    {title:'MÃ CỦA NHÓM · main.cpp',text:state.code,mono:true},
    {title:'KẾT QUẢ CHẠY THẬT',text:state.actualOutput,mono:true},
    {title:'CHẤM TỰ ĐỘNG',text:'ĐẠT · Mã biên dịch được và đầu ra khớp đúng ba dòng. Giáo viên xem thêm mã giả, ghi chú và phần giải thích.'}
  ]);
  const pdf=await PDFLib.PDFDocument.create();for(const canvas of [first,second]){const bytes=Uint8Array.from(atob(canvas.toDataURL('image/png').split(',')[1]),c=>c.charCodeAt(0));const img=await pdf.embedPng(bytes);const page=pdf.addPage([595.28,841.89]);page.drawImage(img,{x:0,y:0,width:595.28,height:841.89})}
  const blob=new Blob([await pdf.save()],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`Bai01_XuongInChu_${state.lop}_${state.members[0].normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-zA-Z0-9]+/g,'_').slice(0,25)}.pdf`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);setFeedback('PDF hai trang đã được tải về. Mở kiểm tra trước khi nộp Canvas.','good');
}
app.addEventListener('input',event=>{const x=event.target;if(x.name?.startsWith('member'))state.members[Number(x.name.slice(6))]=x.value;else if(x.name&&x.type!=='radio')state[x.name]=x.value;if(x.id==='codeEditor')document.getElementById('codeGutter').textContent=rows(x.value);save()});
app.addEventListener('change',event=>{const x=event.target;if(x.name==='lop'||x.name==='inputChoice')state[x.name]=x.value;save()});
app.addEventListener('scroll',event=>{if(event.target.id==='codeEditor')document.getElementById('codeGutter').scrollTop=event.target.scrollTop},true);
app.addEventListener('keydown',event=>{
  if(event.target.id!=='codeEditor'||!['Tab','Enter'].includes(event.key))return;
  event.preventDefault();const x=event.target,start=x.selectionStart,end=x.selectionEnd;
  if(event.key==='Tab')x.setRangeText('  ',start,end,'end');
  else{
    const current=x.value.slice(x.value.lastIndexOf('\n',start-1)+1,start);
    const indent=current.match(/^\s*/)?.[0]||'';
    x.setRangeText('\n'+indent+(/\{\s*(?:\/\/.*)?$/.test(current)?'  ':''),start,end,'end');
  }
  state.code=x.value;document.getElementById('codeGutter').textContent=rows(x.value);save();
});
app.addEventListener('click',async event=>{const button=event.target.closest('[data-action]');if(!button)return;const action=button.dataset.action;if(action==='mission'){if(state.mission!==button.dataset.mission){state.mission=button.dataset.mission;state.prediction='';state.pseudo='';state.code=START;state.passed=false;state.actualOutput=''}save();render()}else if(action==='back')navigate(state.step-1);else if(action==='next'){const issue=validateStep();if(issue)setFeedback(issue);else advance()}else if(action==='run')await runCode();else if(action==='hint')setFeedback('Gợi ý: đặt ba lệnh cout giữa { và } của main(). Ví dụ: cout << "DONG 1" << endl;','good');else if(action==='pdf')try{await exportPDF()}catch(error){console.error(error);setFeedback('Chưa tạo được PDF. Hãy thử lại trên trình duyệt khác.')}});
stepper.addEventListener('click',event=>{const button=event.target.closest('[data-step]');if(button)navigate(Number(button.dataset.step))});
render();
worker??=new Worker('compiler-worker.js');
worker.postMessage({type:'warmup',id:0});
