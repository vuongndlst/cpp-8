import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
import {LESSONS} from './v2-lessons.js';
import {esc,normalized,lines,editorKeydown,createRunner,testCode} from './v2-common.js';

const number=Number(document.body.dataset.lesson),lesson=LESSONS[number],stageCount=lesson.stages.length;
const root=document.getElementById('app'),savedKey=`cpp8_v2_bai${number}_journey`;
const read=()=>{try{return JSON.parse(localStorage.getItem(savedKey)||'{}')}catch{return{}}};
const state={name:'',lop:'',stage:0,phase:'intro',score:0,done:false,code:'',...read()};
const save=()=>localStorage.setItem(savedKey,JSON.stringify(state));
const classes=Array.from({length:10},(_,i)=>`8A${i+1}`);
let run=createRunner(type=>{const e=document.getElementById('feedback');if(e)e.textContent=type==='loading'?'Đang chuẩn bị trình C++…':'Đang biên dịch và chạy…'});
let scene,camera,renderer,avatar,worldGroup,particles=[],play=null,clock=new THREE.Clock(),pressed=new Set(),raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
const $=s=>document.querySelector(s);

function layout(){
  root.innerHTML=`<div class="shell"><header class="top"><a class="brand" href="index.html">← ${esc(lesson.title)}</a><span class="pill">Bài ${number} · C++ lớp 8</span></header><section class="game-layout"><div><div id="viewport" class="viewport"><div class="game-hud"><span id="hudStage">TRẠM ${Math.min(state.stage+1,stageCount)}/${stageCount}</span><span id="hudScore">${state.score} ĐIỂM</span></div><div id="gameTip" class="game-tip">${esc(lesson.mechanic)}</div></div><div class="play-controls"><button data-control="left">←</button><button data-control="up">↑</button><button data-control="down">↓</button><button data-control="right">→</button><button data-control="action">HÀNH ĐỘNG</button></div></div><aside class="side"><p class="eyebrow">${esc(lesson.avatar.toUpperCase())}</p><h2>${esc(lesson.title)}</h2><p>${esc(lesson.mechanic)}</p><div id="playTask" class="callout"><b>Cách học:</b> Đọc kiến thức, trả lời, chơi, rồi tự viết C++.</div><ol><li>Đọc kiến thức và trả lời một câu.</li><li>Chơi để mở cổng thử thách.</li><li>Tự viết, chạy và sửa mã C++.</li><li>Qua chặng cuối, tải phiếu hoàn thành.</li></ol><div class="stepper">${lesson.stages.map((x,i)=>`<span class="${i===state.stage?'active':''}">${i+1}. ${esc(x.name)}</span>`).join('')}</div><p class="small">Con làm cá nhân. Sau khi tải phiếu, dừng web và chờ phần hỏi đáp với giáo viên.</p></aside></section><footer>Nội dung: Chương trình C++ lớp 8 · C++17 chạy trong trình duyệt · Bản đồ tiến độ lưu trên máy này.</footer></div><div id="modalHost"></div>`;
  if(!renderer)init3D();drawWorld();updateHud();
  document.querySelectorAll('[data-control]').forEach(b=>b.addEventListener('click',()=>control(b.dataset.control)));
}
function updateHud(){const s=$('#hudStage'),p=$('#hudScore');if(s)s.textContent=state.done?'HOÀN THÀNH':`TRẠM ${Math.min(state.stage+1,stageCount)}/${stageCount}`;if(p)p.textContent=`${state.score} ĐIỂM`;}
function modal(title,eyebrow,html){$('#modalHost').innerHTML=`<div class="modal-backdrop"><section class="modal" role="dialog" aria-modal="true"><div class="stage-head"><small>${esc(eyebrow)}</small><h2>${esc(title)}</h2></div><div class="stage-body">${html}</div></section></div>`}
function closeModal(){$('#modalHost').innerHTML=''}
function feedback(message,good=false){const e=$('#feedback');if(e){e.className=`feedback ${good?'good':'bad'}`;e.textContent=message}}
function intro(){
  state.phase='intro';save();modal(`Chào mừng đến ${lesson.title}`,'BÀI HỌC CÁ NHÂN',`<p class="lead">${esc(lesson.hook)}</p><p><b>Hôm nay con học:</b> ${esc(lesson.scope)}</p><p class="small">${esc(lesson.scratch)}</p><div class="two"><label class="field"><span>Họ và tên</span><input id="name" maxlength="70" autocomplete="name" value="${esc(state.name)}" placeholder="Nhập họ và tên"></label><label class="field"><span>Lớp</span><select id="lop"><option value="">Chọn lớp</option>${classes.map(c=>`<option ${c===state.lop?'selected':''}>${c}</option>`).join('')}</select></label></div><div id="feedback" class="feedback" aria-live="polite">Điền thông tin rồi bắt đầu từ Trạm ${Math.min(state.stage+1,stageCount)}.</div><div class="actions"><button class="btn" id="start">Bắt đầu học và chơi →</button>${state.done?'<button class="btn secondary" id="certificate">Xem phiếu hoàn thành</button>':''}</div>`);
  $('#start').onclick=()=>{const name=$('#name').value.trim(),lop=$('#lop').value;if(name.split(/\s+/).length<2)return feedback('Con hãy nhập đủ họ và tên.');if(!classes.includes(lop))return feedback('Chọn lớp từ 8A1 đến 8A10.');state.name=name;state.lop=lop;save();if(state.done)certificate();else theory()};
  const cert=$('#certificate');if(cert)cert.onclick=certificate;
}
function theory(){
  state.phase='theory';save();const s=lesson.stages[state.stage];
  modal(s.name,`TRẠM ${state.stage+1}/${stageCount} · HỌC TRƯỚC KHI CHƠI`,`<p class="lead">${esc(s.lesson)}</p><pre class="example">${esc(s.example)}</pre><div class="callout"><b>Nối với Scratch:</b> ${esc(lesson.scratch)}</div><h3>Kiểm tra nhanh</h3><p>${esc(s.question)}</p><div class="choice-grid">${s.choices.map((c,i)=>`<button class="choice" data-answer="${i}">${esc(c)}</button>`).join('')}</div><div id="feedback" class="feedback" aria-live="polite">Chọn một câu trả lời. Nếu sai, đọc lại ví dụ rồi chọn lại.</div>`);
  document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(Number(b.dataset.answer)!==s.answer)return feedback('Chưa đúng. Con xem lại ví dụ ở trên rồi thử lại.');state.score+=10;state.phase='play';save();updateHud();closeModal();startPlay()});
}
function codePanel(){
  state.phase='code';save();const s=lesson.stages[state.stage];if(!state.code)state.code=s.starter;
  modal(`Viết C++: ${s.name}`,`CODE CHALLENGE CÁ NHÂN · TRẠM ${state.stage+1}/${stageCount}`,`<p class="lead">${esc(s.challenge)}</p><div class="two"><div><b>Đầu vào thử</b><pre class="output">${esc(s.tests[0].input||'(không có)')}</pre></div><div><b>Đầu ra cần đạt</b><pre class="output">${esc(s.tests[0].output||'(không in gì)')}</pre></div></div><p class="small">Trước khi viết, con hãy nói bằng lời: chương trình nhận gì, xử lý gì, in gì?</p><div class="code-shell"><div class="code-head">●　●　●　 main.cpp　· C++17</div><div class="code-body"><pre class="gutter" id="gutter">${lines(state.code)}</pre><textarea id="editor" class="editor" spellcheck="false" aria-label="Mã C++">${esc(state.code)}</textarea></div></div><div class="actions"><button class="btn" id="run">▶ Biên dịch và kiểm tra</button><button class="btn secondary" id="hint">Gợi ý</button></div><div id="feedback" class="feedback" aria-live="polite">Chạy để nhận phản hồi. Chương trình sẽ được thử với ${s.tests.length} bộ dữ liệu.</div><div class="console"><strong>KẾT QUẢ KIỂM TRA</strong><pre id="console">Chưa chạy.</pre></div>`);
  const editor=$('#editor'),gutter=$('#gutter');editor.addEventListener('keydown',editorKeydown);editor.addEventListener('input',()=>{state.code=editor.value;gutter.textContent=lines(editor.value);save()});editor.addEventListener('scroll',()=>gutter.scrollTop=editor.scrollTop);
  $('#hint').onclick=()=>feedback(`Đọc lại ví dụ ở trạm: ${s.example.replace(/\n/g,'  |  ')}. Giữ khung chương trình, viết lệnh trong main() hoặc hàm cần tạo.`,true);
  $('#run').onclick=async()=>{const btn=$('#run');btn.disabled=true;feedback('Đang kiểm tra…',true);try{const result=await testCode(run,editor.value,s.tests,s.require);$('#console').textContent=result.detail||result.message;feedback(result.message,result.passed);if(result.passed){state.score+=30;state.stage++;state.code='';state.done=state.stage>=stageCount;save();updateHud();const next=document.createElement('button');next.className='btn';next.textContent=state.done?'Xem phiếu hoàn thành →':'Sang trạm tiếp theo →';next.onclick=()=>state.done?certificate():theory();$('#run').parentElement.appendChild(next);btn.remove()}}catch(error){feedback(`Chưa chạy được: ${error.message}`);$('#console').textContent=String(error.message)}finally{if(btn.isConnected)btn.disabled=false}};
}
function certificate(){
  state.done=true;state.phase='complete';save();updateHud();
  modal('Con đã hoàn thành hành trình',`BÀI ${number} · PHIẾU HOÀN THÀNH`,`<div id="certificatePaper" class="cert"><div class="seal">✦</div><p>C++ LỚP 8 · BÀI ${number}</p><h2>PHIẾU HOÀN THÀNH</h2><p>Trao cho <b>${esc(state.name)}</b> · Lớp <b>${esc(state.lop)}</b></p><h3>${esc(lesson.title)}</h3><p>Đã học kiến thức, vượt thử thách chơi và hoàn thành ${stageCount} bài C++ cá nhân.</p><p><b>${state.score} điểm hành trình</b></p><small>Hoàn thành ngày ${new Date().toLocaleDateString('vi-VN')}</small></div><p class="small">Phiếu ghi nhận quá trình tự học. Giáo viên chốt kiến thức và giao thử thách nhóm sau phần hỏi đáp.</p><div class="actions"><button class="btn" id="download">Tải phiếu PDF ↓</button><a class="btn secondary" href="thu-thach.html">Xem thử thách nhóm →</a></div>`);
  $('#download').onclick=downloadCertificate;
}
async function downloadCertificate(){
  if(!window.PDFLib)return alert('Chưa tải được thư viện PDF. Hãy tải lại trang.');
  const paper=$('#certificatePaper'),canvas=document.createElement('canvas');canvas.width=1400;canvas.height=990;const ctx=canvas.getContext('2d');ctx.fillStyle='#f7f9f2';ctx.fillRect(0,0,1400,990);ctx.strokeStyle='#078e95';ctx.lineWidth=16;ctx.strokeRect(42,42,1316,906);ctx.strokeStyle='#d0a945';ctx.lineWidth=3;ctx.strokeRect(65,65,1270,860);ctx.textAlign='center';ctx.fillStyle='#0e5262';ctx.font='bold 31px Arial';ctx.fillText('LẬP TRÌNH C++ · KHỐI 8',700,160);ctx.fillStyle='#c79527';ctx.font='bold 72px Arial';ctx.fillText('✦',700,260);ctx.fillStyle='#163e57';ctx.font='bold 70px Arial';ctx.fillText('PHIẾU HOÀN THÀNH',700,365);ctx.font='29px Arial';ctx.fillText('Trao cho',700,430);ctx.font='bold 50px Arial';ctx.fillText(state.name.slice(0,36),700,495);ctx.font='27px Arial';ctx.fillText(`Lớp ${state.lop} · Bài ${number}`,700,550);ctx.font='bold 39px Arial';ctx.fillText(lesson.title,700,630);ctx.font='26px Arial';ctx.fillText(`Hoàn thành ${stageCount} thử thách C++ · ${state.score} điểm hành trình`,700,705);ctx.font='22px Arial';ctx.fillText(`Ngày ${new Date().toLocaleDateString('vi-VN')} · Giáo viên xác nhận khi học sinh nộp`,700,815);
  const pdf=await PDFLib.PDFDocument.create(),bytes=Uint8Array.from(atob(canvas.toDataURL('image/png').split(',')[1]),c=>c.charCodeAt(0)),image=await pdf.embedPng(bytes),page=pdf.addPage([842,595]);page.drawImage(image,{x:0,y:0,width:842,height:595});const blob=new Blob([await pdf.save()],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`Bai${String(number).padStart(2,'0')}_PhieuHoanThanh_${state.lop}.pdf`;a.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
}

function init3D(){
  const box=$('#viewport');scene=new THREE.Scene();scene.background=new THREE.Color(({factory:'#112c3a',maze:'#1b183e',orbit:'#092948',lab:'#271941',fortress:'#321f23'})[lesson.theme]);scene.fog=new THREE.Fog(scene.background,13,38);camera=new THREE.PerspectiveCamera(55,box.clientWidth/box.clientHeight,.1,100);renderer=new THREE.WebGLRenderer({antialias:true});renderer.setSize(box.clientWidth,box.clientHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;box.prepend(renderer.domElement);scene.add(new THREE.HemisphereLight(0xbfeaff,0x263049,2));const sun=new THREE.DirectionalLight(0xffffff,2.4);sun.position.set(7,13,9);sun.castShadow=true;scene.add(sun);worldGroup=new THREE.Group();scene.add(worldGroup);
  const floor=new THREE.Mesh(new THREE.BoxGeometry(18,.35,18),new THREE.MeshStandardMaterial({color:({factory:0x226b72,maze:0x5a4284,orbit:0x206590,lab:0x6a4491,fortress:0x815047})[lesson.theme],roughness:.78}));floor.position.y=-.25;floor.receiveShadow=true;worldGroup.add(floor);
  for(let i=0;i<30;i++){const p=new THREE.Mesh(new THREE.SphereGeometry(.025,6,6),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.45}));p.position.set((Math.random()-.5)*20,Math.random()*7,(Math.random()-.5)*20);worldGroup.add(p);particles.push(p)}
  avatar=makeAvatar();worldGroup.add(avatar);camera.position.set(0,10,13);camera.lookAt(0,0,0);window.addEventListener('resize',()=>{if(!renderer)return;const w=box.clientWidth,h=box.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h)});box.addEventListener('pointerdown',pointerClick);requestAnimationFrame(tick);
}
function shape(geometry,color,x,y,z,scale=1){const m=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:.55,metalness:.12}));m.position.set(x,y,z);m.scale.setScalar(scale);m.castShadow=true;m.receiveShadow=true;return m}
function makeAvatar(){const g=new THREE.Group();const bodyColor=({factory:0xffc34a,maze:0xf985c7,orbit:0x6be8f0,lab:0xa8f487,fortress:0xffda69})[lesson.theme];
  if(lesson.theme==='maze'){g.add(shape(new THREE.ConeGeometry(.72,1.65,5),bodyColor,0,1,0));g.add(shape(new THREE.ConeGeometry(.25,.7,4),bodyColor,-.42,2.03,0));g.add(shape(new THREE.ConeGeometry(.25,.7,4),bodyColor,.42,2.03,0));g.add(shape(new THREE.SphereGeometry(.14),0x14243b,-.2,1.35,.58));g.add(shape(new THREE.SphereGeometry(.14),0x14243b,.2,1.35,.58))}
  else if(lesson.theme==='orbit'){g.add(shape(new THREE.ConeGeometry(.75,1.8,6),bodyColor,0,1,0));g.add(shape(new THREE.BoxGeometry(2,.11,.4),0x9df8fa,0,1.1,0));g.add(shape(new THREE.SphereGeometry(.2),0xffffff,0,1.5,.55))}
  else if(lesson.theme==='fortress'){g.add(shape(new THREE.CylinderGeometry(.5,.65,1.4,7),bodyColor,0,.92,0));g.add(shape(new THREE.ConeGeometry(.61,.85,7),0xd0edff,0,1.95,0));g.add(shape(new THREE.BoxGeometry(.16,1.2,.15),0xe5f3ff,.75,1.15,0))}
  else{g.add(shape(new THREE.CapsuleGeometry(.5,.7,4,8),bodyColor,0,1.05,0));g.add(shape(new THREE.BoxGeometry(.67,.26,.1),0x13344e,0,1.3,.52));g.add(shape(new THREE.SphereGeometry(.11),0x89fff4,-.18,1.3,.58));g.add(shape(new THREE.SphereGeometry(.11),0x89fff4,.18,1.3,.58));if(lesson.theme==='lab')g.add(shape(new THREE.CylinderGeometry(.5,.54,.18,12),0xffffff,0,2.05,0))}
  return g;
}
function label(text,color='#fff'){const cv=document.createElement('canvas');cv.width=512;cv.height=128;const c=cv.getContext('2d');c.fillStyle='#0b2744';c.fillRect(0,0,512,128);c.strokeStyle='#9be9de';c.lineWidth=7;c.strokeRect(4,4,504,120);c.fillStyle=color;c.font='bold 44px Arial';c.textAlign='center';c.textBaseline='middle';c.fillText(String(text).slice(0,17),256,65);const tex=new THREE.CanvasTexture(cv),m=new THREE.Mesh(new THREE.PlaneGeometry(2.35,.58),new THREE.MeshBasicMaterial({map:tex,transparent:true,side:THREE.DoubleSide}));return m}
function clearObjects(){if(!worldGroup)return;for(const child of [...worldGroup.children])if(child!==avatar&&!particles.includes(child)&&child.geometry?.type!=='BoxGeometry')worldGroup.remove(child);for(const child of [...worldGroup.children])if(child.userData.game)worldGroup.remove(child);avatar.position.set(0,0,3)}
function drawWorld(){if(!worldGroup)return;for(const child of [...worldGroup.children])if(child.userData.game)worldGroup.remove(child);for(let i=0;i<5;i++){const tower=shape(new THREE.CylinderGeometry(.28,.42,1.2+Math.random()*.8,6),({factory:0x39b3b0,maze:0x8a66db,orbit:0x21a9d1,lab:0xc066d2,fortress:0xc78254})[lesson.theme],-7+i*3.5,.7,-7);tower.userData.game=true;worldGroup.add(tower)}avatar.position.set(0,0,3)}
function makePiece(geometry,color,x,y,z){const m=shape(geometry,color,x,y,z);m.userData.game=true;worldGroup.add(m);return m}
function startPlay(){drawWorld();state.phase='play';save();const s=lesson.stages[state.stage];const choices=s.choices.map((text,index)=>({text,index}));
  const taskText=lesson.theme==='factory'?`Đón kiện ghi “${s.choices[s.answer]}”. Dùng ← → để đổi làn.`:lesson.theme==='maze'?`Tìm cổng ghi “${s.choices[s.answer]}”. Đi bằng WASD hoặc phím mũi tên.`:lesson.theme==='orbit'?'Nhấn Space khi Drone ở trên đĩa xanh sáng. Trúng ba lượt.':lesson.theme==='lab'?'Click lần lượt: ĐỊNH NGHĨA, GỌI HÀM, XEM KẾT QUẢ.':`Bắt bọ mang dấu “${[';','+','>=','<='][state.stage]}” ba lần.`;
  $('#playTask').innerHTML=`<b>Nhiệm vụ chơi:</b> ${esc(taskText)}`;
  if(lesson.theme==='factory'){
    avatar.position.set(0,0,4);play={kind:'factory',lane:1,success:0,wave:0,crates:[],timer:0,choices};spawnConveyor();camera.position.set(0,7,12);camera.lookAt(0,0,0);tip('← → đổi làn. Đón đúng kiện hàng khi nó đi đến vạch gần con.');
  }else if(lesson.theme==='maze'){
    const wallLayouts=[[[1,3],[3,2],[1,1]],[[3,3],[1,2],[3,1]],[[1,3],[3,3],[2,1]],[[0,2],[3,3],[1,1]]];
    const walls=wallLayouts[state.stage]||wallLayouts[0];
    play={kind:'maze',x:2,z:4,choices,walls:new Set(walls.map(([x,z])=>`${x},${z}`))};
    avatar.position.set(0,0,4);camera.position.set(0,11,12);camera.lookAt(0,0,0);
    for(let z=0;z<5;z++)for(let x=0;x<5;x++){const tile=makePiece(new THREE.BoxGeometry(1.65,.12,1.65),((x+z)%2?0x614a92:0x4b3a77),(x-2)*1.75,.04,(z-2)*1.75);tile.userData.tile=true}
    walls.forEach(([x,z])=>makePiece(new THREE.BoxGeometry(1.45,1.8,1.45),0xe090ca,(x-2)*1.75,.95,(z-2)*1.75));
    choices.forEach((c,i)=>{const x=(i-1)*3.5;makePiece(new THREE.BoxGeometry(2.6,3,.35),0xb474c2,x,1.5,-5.1);const lab=label(c.text);lab.position.set(x,3.45,-5.3);lab.userData.game=true;worldGroup.add(lab)});
    tip('WASD hoặc mũi tên: đi vòng qua các khối chắn và đến cổng đúng ở mép xa.');
  }else if(lesson.theme==='orbit'){
    play={kind:'orbit',angle:0,success:0,target:Math.PI*1.45,lastHit:-100};camera.position.set(0,11,11);camera.lookAt(0,0,0);const ring=makePiece(new THREE.TorusGeometry(4.5,.17,12,80),0x7ddbe6,0,.55,0);ring.rotation.x=Math.PI/2;for(let i=0;i<3;i++){const a=play.target+i*2*Math.PI/3,m=makePiece(new THREE.CylinderGeometry(.55,.55,.15,18),i===0?0x90f79e:0x4a789e,Math.cos(a)*4.5,.55,Math.sin(a)*4.5);m.userData.pad=i}tip('Drone bay tự động. Nhấn Space hoặc HÀNH ĐỘNG khi tới đĩa sáng. Đáp đúng ba lần.');
  }else if(lesson.theme==='lab'){
    const order=[0,1,2],labels=['ĐỊNH NGHĨA','GỌI HÀM','XEM KẾT QUẢ'];play={kind:'lab',order,step:0,modules:[]};avatar.position.set(-6,0,3);camera.position.set(0,10,12);camera.lookAt(0,0,0);[0,1,2].forEach((i)=>{const x=(i-1)*4;const p=makePiece(new THREE.CylinderGeometry(.9,1.1,2.1,8),[0x71c9bd,0xd994d8,0xebbc5e][i],x,1,-2);p.userData.module=i;play.modules.push(p);const t=label(labels[i]);t.position.set(x,3,-2);t.userData.game=true;worldGroup.add(t)});tip('Chạm/click môđun theo thứ tự: ĐỊNH NGHĨA → GỌI HÀM → XEM KẾT QUẢ.');
  }else{
    play={kind:'fortress',hits:0,bugs:[],locked:false};avatar.position.set(0,0,4);camera.position.set(0,8,13);camera.lookAt(0,0,0);spawnBugs();tip('Chạm/click đúng bọ lỗi của trạm. Bắt ba con để mở trình sửa mã.');
  }
}
function spawnConveyor(){if(!play||play.kind!=='factory')return;play.crates.forEach(x=>{worldGroup.remove(x.mesh);worldGroup.remove(x.label)});play.crates=[];const s=lesson.stages[state.stage];s.choices.forEach((txt,i)=>{const x=(i-1)*3.3,crate=makePiece(new THREE.BoxGeometry(2.25,1.3,1.45),i===s.answer?0x2c9a8d:0xc68637,x,.8,-7),lab=label(txt);lab.position.set(x,1,-6.22);lab.userData.game=true;worldGroup.add(lab);play.crates.push({mesh:crate,label:lab,lane:i})});play.wave++;}
function spawnBugs(){if(!play||play.kind!=='fortress')return;play.bugs.forEach(b=>{worldGroup.remove(b.mesh);worldGroup.remove(b.label)});play.bugs=[];const variants=[[';','+','=='],['+','-','*'],['>=','>','<'],['<=','<','==']][state.stage]||[';','+','-'];variants.forEach((name,i)=>{const x=(i-1)*3.3,m=makePiece(new THREE.IcosahedronGeometry(.75,0),0xd85a5a,x,1.3,-3),lab=label(name);lab.position.set(x,2.6,-3);lab.userData.game=true;worldGroup.add(lab);m.userData.bug=i;play.bugs.push({mesh:m,label:lab})})}
function tip(text){const e=$('#gameTip');if(e)e.textContent=text}
function winPlay(){play=null;tip('Cổng mở! Con hãy viết và chạy C++ để qua trạm.');setTimeout(codePanel,500)}
function control(name){
  if(!play)return;
  if(play.kind==='factory'){
    if(name==='left'||name==='right'){play.lane=Math.max(0,Math.min(2,play.lane+(name==='left'?-1:1)));avatar.position.x=(play.lane-1)*3.3}
  }else if(play.kind==='maze'){
    const delta={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]}[name];if(!delta)return;
    const nx=Math.max(0,Math.min(4,play.x+delta[0])),nz=Math.max(0,Math.min(4,play.z+delta[1]));
    if(play.walls.has(`${nx},${nz}`)){tip('Khối chắn ở trước mặt. Hãy tìm đường vòng.');return}
    play.x=nx;play.z=nz;
    avatar.position.set((play.x-2)*1.75,0,(play.z-2)*1.75);
    if(play.z===0){if(play.x%2===0&&play.x/2===lesson.stages[state.stage].answer)winPlay();else{tip('Cổng chưa đúng. Cáo trở lại lối vào. Hãy đọc câu hỏi ở thẻ kiến thức.');play.x=2;play.z=4;avatar.position.set(0,0,3.5)}}
  }else if(play.kind==='orbit'&&name==='action'){
    const diff=Math.abs(Math.atan2(Math.sin(play.angle-play.target),Math.cos(play.angle-play.target)));
    if(diff<.38&&play.angle-play.lastHit>Math.PI){play.success++;play.lastHit=play.angle;tip(`Đáp đúng ${play.success}/3. Nhấn Space ở vòng tiếp theo.`);if(play.success>=3)winPlay()}
    else tip('Chưa đến lượt đáp tiếp. Theo dõi đĩa sáng và thử ở vòng sau.');
  }else if((play.kind==='lab'||play.kind==='fortress')&&name==='action')tip('Dùng chuột hoặc chạm trực tiếp vào môđun/bọ lỗi trong cảnh.');
}
function pointerClick(event){if(!play||!['lab','fortress'].includes(play.kind))return;const rect=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(worldGroup.children,false);const obj=hits.map(h=>h.object).find(o=>o.userData.module!==undefined||o.userData.bug!==undefined);if(!obj)return;
  if(play.kind==='lab'){const i=obj.userData.module;avatar.position.x=(i-1)*4;play.step=i===play.order[play.step]?play.step+1:0;tip(play.step?`Lắp đúng ${play.step}/3 môđun.`:'Sai thứ tự, máy sẽ khởi động lại. Bắt đầu từ ĐỊNH NGHĨA.');if(play.step===3)winPlay()}
  else{if(play.locked)return;const correct=0,i=obj.userData.bug;if(i===correct){play.hits++;play.locked=true;obj.material.color.set(0x40c9ac);tip(`Bắt được lỗi ${play.hits}/3.`);if(play.hits===3)winPlay();else setTimeout(()=>{if(play?.kind==='fortress'){spawnBugs();play.locked=false}},600)}else tip('Đây chưa phải lỗi cần tìm. Xem lại ví dụ ở trạm.')}
}
function tick(){requestAnimationFrame(tick);if(!renderer)return;const dt=Math.min(clock.getDelta(),.05),t=performance.now()/1000;particles.forEach((p,i)=>p.position.y=3+Math.sin(t*.8+i)*1.8);avatar.rotation.y=Math.sin(t*2)*.045;avatar.position.y=Math.sin(t*2.5)*.08;
  if(play?.kind==='factory'){for(const c of play.crates){c.mesh.position.z+=dt*2.8;c.label.position.z+=dt*2.8}if(play.crates.length&&play.crates[0].mesh.position.z>3.9){const correct=lesson.stages[state.stage].answer;if(play.lane===correct){play.success++;state.score+=5;save();updateHud();tip(`Đón đúng ${play.success}/2 kiện hàng.`)}else tip('Đón nhầm kiện. Xem lại câu hỏi rồi đổi làn.');if(play.success>=2)winPlay();else spawnConveyor()}}
  if(play?.kind==='orbit'){play.angle+=dt*1.35;avatar.position.set(Math.cos(play.angle)*4.5,.55,Math.sin(play.angle)*4.5);avatar.rotation.y=-play.angle}
  if(play?.kind==='fortress')play.bugs.forEach((b,i)=>{b.mesh.position.y=1.3+Math.sin(t*2+i)*.25;b.mesh.rotation.y+=dt*1.8});
  renderer.render(scene,camera);
}
window.addEventListener('keydown',e=>{if($('#modalHost')?.innerHTML||!play)return;const map={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',a:'left',d:'right',w:'up',s:'down',' ':'action',Enter:'action'};if(map[e.key]){e.preventDefault();control(map[e.key])}});
layout();intro();
