/* Sáu đảo 3D trên trang chủ. Nội dung bài và tiến độ vẫn thuộc từng web bài học. */
import * as THREE from "three";

const bai = window.KHOA || [];
const canvas = document.getElementById("island-canvas");
const box = document.getElementById("sea-scene");
const hotspots = document.getElementById("island-hotspots");
const fallback = document.getElementById("sea-fallback");
const themes = [
  { ten: "Rừng lệnh", color: "#64D4A0", land: "#67B86B", edge: "#D3B77E", rock: "#7A725E" },
  { ten: "Xưởng toán", color: "#59DFDE", land: "#71979F", edge: "#AFC5C8", rock: "#54646E" },
  { ten: "Mê cung", color: "#C5A2FF", land: "#9A83B7", edge: "#CFB9DF", rock: "#675C7A" },
  { ten: "Thành phố", color: "#73D6EC", land: "#6B9FB0", edge: "#ADD9DD", rock: "#536F82" },
  { ten: "Phòng lab", color: "#E3B3FA", land: "#9D91BE", edge: "#CFC0DB", rock: "#5F6083" },
  { ten: "Pháo đài", color: "#FBD581", land: "#A49F74", edge: "#E0C895", rock: "#69655B" },
];
const desktopPositions = [[-16,-10],[0,-10],[16,-10],[-16,10],[0,10],[16,10]];
const mobilePositions = [[-8,-18],[8,-18],[-8,0],[8,0],[-8,18],[8,18]];
let positions = desktopPositions;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
} catch (error) {
  fallback.hidden = false;
  throw error;
}
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog("#123E5D", 55, 130);
const camera = new THREE.PerspectiveCamera(44, 1, 0.1, 200);
scene.add(new THREE.HemisphereLight("#D8F4FF", "#315064", 2.5));
const sun = new THREE.DirectionalLight("#FFF0C8", 3.2);
sun.position.set(-20, 42, 26); scene.add(sun);

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: .76, ...extra });
function mesh(group, geometry, color, x, y, z, extra) {
  const m = new THREE.Mesh(geometry, mat(color, extra));
  m.position.set(x, y, z); group.add(m); return m;
}
function block(group, color, x, y, z, w, h, d, extra) {
  return mesh(group, new THREE.BoxGeometry(w,h,d), color, x,y,z,extra);
}
function glow(group, color, x, y, z, r) {
  return mesh(group, new THREE.IcosahedronGeometry(r,1), color, x,y,z,
    { emissive:color, emissiveIntensity:.75, roughness:.24 });
}

const islands = [], pickers = [], movingParts = [];
function makeIsland(index) {
  const t = themes[index], group = new THREE.Group();
  const [px,pz] = positions[index]; group.position.set(px,0,pz); scene.add(group);
  const sides = [12,8,9,16,12,8][index];
  const cliff = mesh(group, new THREE.CylinderGeometry(5.6,3.6,3.5,sides), t.rock, 0,-1.9,0);
  const coast = mesh(group, new THREE.CylinderGeometry(5.85,5.5,.45,sides), t.edge, 0,-.25,0);
  const top = mesh(group, new THREE.CylinderGeometry(5.4,5.55,.32,sides), t.land, 0,.05,0);
  coast.receiveShadow = top.receiveShadow = true;
  top.userData.island = index; cliff.userData.island = index; pickers.push(top,cliff);
  top.material.emissive = new THREE.Color(t.color);
  top.material.emissiveIntensity = .015;
  coast.material.emissive = new THREE.Color(t.color);
  coast.material.emissiveIntensity = .02;
  const halo = mesh(group,new THREE.TorusGeometry(6.25,.13,8,48),t.color,0,-.38,0,
    {transparent:true,opacity:.07,emissive:t.color,emissiveIntensity:.9,depthWrite:false});
  halo.rotation.x=Math.PI/2;
  const light=new THREE.PointLight(t.color,0,18); light.position.set(0,3,0); group.add(light);
  const sparks=[];
  for(let k=0;k<7;k++) {
    const spark=mesh(group,new THREE.OctahedronGeometry(.13,0),t.color,0,0,0,
      {transparent:true,opacity:0,emissive:t.color,emissiveIntensity:1,depthWrite:false});
    sparks.push(spark);
  }
  const dark = ["#245E48","#2A4D61","#594D80","#214664","#454773","#6B6555"][index];

  if (index === 0) {
    // Rừng lệnh: cây và cổng nhập/xuất.
    for (const [x,z,s] of [[-3,-2,1],[-3,2,.8],[3,-1,1.1],[2.8,2.4,.8]]) {
      mesh(group,new THREE.CylinderGeometry(.15,.22,1.4*s,6),"#765A3A",x,.9*s,z);
      mesh(group,new THREE.ConeGeometry(.9*s,2.3*s,6),"#286F58",x,2.2*s,z);
      mesh(group,new THREE.ConeGeometry(.65*s,1.6*s,6),t.color,x,3.2*s,z);
    }
    block(group,dark,-1.1,1.35,-.2,.5,2.7,.6);
    block(group,dark,1.1,1.35,-.2,.5,2.7,.6);
    const gate=block(group,t.color,0,2.9,-.2,2.8,.42,.7,{emissive:t.color,emissiveIntensity:.3});
    movingParts.push({object:gate,kind:"pulse",phase:index});
  } else if (index === 1) {
    // Xưởng toán: tháp và bánh răng.
    for (const x of [-2.6,2.6]) {
      block(group,dark,x,1.2,0,1.8,2.4,2);
      mesh(group,new THREE.CylinderGeometry(.35,.45,2.2,8),"#44677B",x,3.2,0);
      glow(group,t.color,x,4.5,0,.42);
    }
    const rotor=new THREE.Group(); rotor.position.set(0,2.1,1.4); group.add(rotor);
    const gear = mesh(rotor,new THREE.TorusGeometry(1.65,.32,8,14),t.color,0,0,0,{metalness:.5,roughness:.3});
    gear.rotation.y=.28;
    block(rotor,"#E8F5F2",0,0,0,3,.25,.35);
    block(rotor,"#E8F5F2",0,0,0,.25,3,.35);
    movingParts.push({object:rotor,kind:"spinZ"});
  } else if (index === 2) {
    // Mê cung điều kiện: lối rẽ và khối lựa chọn.
    for (const [x,z,w,d] of [[-2.8,-1,.6,5],[2.8,1,.6,5],[-1.1,-2.7,3.8,.6],[1.1,2.7,3.8,.6]]) {
      block(group,dark,x,1.25,z,w,2.5,d);
      block(group,t.color,x,2.58,z,w+.08,.12,d+.08,{emissive:t.color,emissiveIntensity:.5});
    }
    const choice=glow(group,t.color,0,3.2,0,1.05);
    movingParts.push({object:choice,kind:"choice"});
  } else if (index === 3) {
    // Thành phố vòng lặp: nhà cao tầng và vòng quay trên không.
    for (const [x,z,h] of [[-2.7,-1.6,3.8],[2.6,-2,4.8],[-2.6,2,2.8],[2.7,2,3.5]]) {
      block(group,dark,x,h/2,z,1.5,h,1.5);
      for(let y=1.1;y<h;y+=1.1) block(group,t.color,x,y,z+.78,1.25,.1,.08,{emissive:t.color,emissiveIntensity:.8});
    }
    const ring=mesh(group,new THREE.TorusGeometry(2.2,.16,8,32),t.color,0,5.1,0,{emissive:t.color,emissiveIntensity:.6});
    ring.rotation.x=Math.PI/2;
    movingParts.push({object:ring,kind:"spinY"});
  } else if (index === 4) {
    // Phòng lab: mô-đun kính và lõi sáng.
    for (const x of [-2.7,2.7]) {
      mesh(group,new THREE.CylinderGeometry(1.4,1.55,.5,12),dark,x,.4,0);
      mesh(group,new THREE.SphereGeometry(1.35,16,10,0,Math.PI*2,0,Math.PI/2),"#B8F2FA",x,.65,0,
        {transparent:true,opacity:.48,roughness:.12});
      glow(group,t.color,x,1.8,0,.55);
    }
    block(group,t.color,0,.22,0,3.5,.13,.15,{emissive:t.color,emissiveIntensity:.9});
    const halo=mesh(group,new THREE.TorusGeometry(1.55,.1,8,28),t.color,0,3.9,0,{emissive:t.color,emissiveIntensity:.65});
    halo.rotation.x=.45;
    movingParts.push({object:halo,kind:"lab"});
  } else {
    // Pháo đài ôn tập: hai tháp đá, thành lũy và cờ.
    for (const x of [-2.8,2.8]) {
      mesh(group,new THREE.CylinderGeometry(1.05,1.18,3.4,8),dark,x,1.8,-.6);
      mesh(group,new THREE.ConeGeometry(1.35,1.5,8),"#A15F48",x,4.2,-.6);
      block(group,"#EBE3CA",x,5.4,-.6,.12,1.2,.12);
      const flag=block(group,t.color,x+.4,5.65,-.6,.8,.42,.06,{emissive:t.color,emissiveIntensity:.2});
      movingParts.push({object:flag,kind:"flag",phase:x});
    }
    block(group,dark,0,1.7,-2,5.5,3.4,1.2);
    for(let x=-2.3;x<=2.3;x+=1.15) block(group,"#918978",x,3.65,-2,.65,.6,1.3);
  }
  islands.push({ group, top, coast, halo, light, sparks, index, scale:1, glow:0, x:px, z:pz });
}
for(let i=0;i<6;i++) makeIsland(i);

const seaGeometry=new THREE.PlaneGeometry(160,120,32,24);
seaGeometry.rotateX(-Math.PI/2);
const sea=mesh(scene,seaGeometry,"#0E4D6A",0,-3.7,0,{metalness:.16,roughness:.43,flatShading:false});
const seaBase=seaGeometry.attributes.position.array.slice();
const grid = new THREE.GridHelper(120,24,"#2D89A0","#17617D");
grid.position.y=-3.62; grid.material.opacity=.23; grid.material.transparent=true; scene.add(grid);

// Đường sáng mảnh nối sáu đảo theo thứ tự học.
let routeCurve=new THREE.CatmullRomCurve3(positions.map(([x,z])=>new THREE.Vector3(x,-1.5,z)));
const routeMesh = new THREE.Mesh(new THREE.TubeGeometry(routeCurve,100,.045,5,false),
  new THREE.MeshBasicMaterial({color:"#A8EBE6",transparent:true,opacity:.6}));
scene.add(routeMesh);
const routePulse=mesh(scene,new THREE.SphereGeometry(.28,10,8),"#D7FFEE",0,-1.5,0,
  {emissive:"#82FFF0",emissiveIntensity:1.1,roughness:.15});

const labels = bai.map((b,i)=>{
  const a=document.createElement("a");
  a.className="island-hotspot";
  a.href=b.ma+"/quest.html";
  a.style.setProperty("--accent",themes[i].color);
  const small=document.createElement("small"); small.textContent="ĐẢO "+String(i+1).padStart(2,"0");
  const strong=document.createElement("strong"); strong.textContent=themes[i].ten;
  a.append(small,strong); hotspots.appendChild(a);
  a.addEventListener("pointerenter",()=>setActive(i));
  a.addEventListener("pointerleave",()=>setActive(-1));
  a.addEventListener("focus",()=>setActive(i));
  a.addEventListener("blur",()=>setActive(-1));
  return a;
});
const cards=[...document.querySelectorAll(".lesson-card")];
cards.forEach((card,i)=>{
  card.addEventListener("pointerenter",()=>setActive(i));
  card.addEventListener("pointerleave",()=>setActive(-1));
  card.addEventListener("focus",()=>setActive(i));
  card.addEventListener("blur",()=>setActive(-1));
});
let activeIndex=-1;
function setActive(index) {
  if(activeIndex===index) return;
  activeIndex=index;
  labels.forEach((label,i)=>label.classList.toggle("is-active",i===index));
  cards.forEach((card,i)=>card.classList.toggle("is-active",i===index));
}

function size() {
  const w=box.clientWidth,h=box.clientHeight;
  if(!w||!h) return;
  const layout=w<650?mobilePositions:desktopPositions;
  if(positions!==layout) {
    positions=layout;
    islands.forEach((it,i)=>{
      it.x=positions[i][0]; it.z=positions[i][1];
      it.group.position.x=it.x; it.group.position.z=it.z;
    });
    routeMesh.geometry.dispose();
    routeCurve=new THREE.CatmullRomCurve3(positions.map(([x,z])=>new THREE.Vector3(x,-1.5,z)));
    routeMesh.geometry=new THREE.TubeGeometry(routeCurve,100,.045,5,false);
  }
  renderer.setSize(w,h,false);
  camera.aspect=w/h;
  camera.position.set(0,w<650?49:26,w<650?52:39);
  camera.lookAt(0,0,0); camera.updateProjectionMatrix();
  placeLabels();
}
function placeLabels() {
  camera.updateMatrixWorld();
  islands.forEach((it,i)=>{
    const p=new THREE.Vector3(it.x,it.group.position.y-.5,it.z+5.4).project(camera);
    labels[i].style.left=((p.x+1)*50).toFixed(2)+"%";
    labels[i].style.top=((-p.y+1)*50).toFixed(2)+"%";
  });
}
const ray=new THREE.Raycaster(),pointer=new THREE.Vector2();
function picked(e) {
  const r=canvas.getBoundingClientRect();
  pointer.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height*2-1));
  ray.setFromCamera(pointer,camera);
  return ray.intersectObjects(pickers,false)[0]?.object.userData.island;
}
canvas.addEventListener("pointermove",e=>{
  const i=picked(e);
  canvas.style.cursor=i===undefined?"default":"pointer";
  setActive(i===undefined?-1:i);
});
canvas.addEventListener("pointerleave",()=>setActive(-1));
canvas.addEventListener("click",e=>{ const i=picked(e); if(i!==undefined) location.href=bai[i].ma+"/quest.html"; });
addEventListener("resize",size);
size();
let frame=0;
function animate(time) {
  requestAnimationFrame(animate);
  if(document.hidden) return;
  const phase=reduced?0:time;
  islands.forEach((it,i)=>{
    const selected=i===activeIndex;
    const ease=reduced?1:.13;
    it.scale+=( (selected?1.23:1)-it.scale )*ease;
    it.glow+=( (selected?1:0)-it.glow )*ease;
    it.group.scale.setScalar(it.scale);
    it.group.position.y=(reduced?0:Math.sin(phase*.0011+i*.95)*.23)+it.glow*.7;
    it.group.rotation.y=reduced?0:Math.sin(phase*.00055+i)*.075;
    it.top.material.emissiveIntensity=.015+it.glow*.52;
    it.coast.material.emissiveIntensity=.02+it.glow*.85;
    it.halo.material.opacity=.07+it.glow*(reduced?.62:.52+.1*Math.sin(phase*.007));
    it.light.intensity=it.glow*2.4;
    it.sparks.forEach((spark,k)=>{
      const a=k*Math.PI*2/it.sparks.length+(reduced?0:phase*.00055);
      spark.position.set(Math.cos(a)*6.6,.8+(reduced?0:Math.sin(phase*.003+k)*.42),Math.sin(a)*6.6);
      spark.material.opacity=it.glow*(reduced?.8:.55+.35*Math.sin(phase*.006+k)**2);
    });
  });
  if(!reduced) {
    movingParts.forEach(({object,kind,phase:offset=0})=>{
      if(kind==="spinZ") object.rotation.z=phase*.00055;
      else if(kind==="spinY") object.rotation.y=phase*.00065;
      else if(kind==="lab") { object.rotation.y=phase*.0007; object.rotation.z=Math.sin(phase*.001)*.25; }
      else if(kind==="choice") { object.rotation.y=phase*.0007; object.position.y=3.2+Math.sin(phase*.002)*.3; }
      else if(kind==="flag") object.rotation.y=Math.sin(phase*.004+offset)*.35;
      else if(kind==="pulse") object.material.emissiveIntensity=.35+.3*Math.sin(phase*.003);
    });
    const p=seaGeometry.attributes.position;
    if(frame%2===0) {
      for(let j=0;j<p.array.length;j+=3)
        p.array[j+1]=seaBase[j+1]+.16*Math.sin(phase*.0018+seaBase[j]*.12+seaBase[j+2]*.09);
      p.needsUpdate=true; seaGeometry.computeVertexNormals();
    }
    routePulse.position.copy(routeCurve.getPoint((phase*.00007)%1));
    routePulse.scale.setScalar(.85+.2*Math.sin(phase*.007));
  } else {
    routePulse.visible=false;
  }
  if(frame++%3===0 || reduced) placeLabels();
  renderer.render(scene,camera);
}
requestAnimationFrame(animate);
window.__home3dReady=true;
