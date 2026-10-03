export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const normalized=s=>String(s??'').replace(/\r\n/g,'\n').replace(/\n+$/,'');
export const lines=s=>Array.from({length:String(s).split('\n').length},(_,i)=>i+1).join('\n');
export const editorKeydown=e=>{if(!['Tab','Enter'].includes(e.key))return;e.preventDefault();const x=e.target,a=x.selectionStart,b=x.selectionEnd;if(e.key==='Tab')x.setRangeText('  ',a,b,'end');else{const current=x.value.slice(x.value.lastIndexOf('\n',a-1)+1,a),indent=current.match(/^\s*/)?.[0]||'';x.setRangeText('\n'+indent+(/\{\s*(?:\/\/.*)?$/.test(current)?'  ':''),a,b,'end')}x.dispatchEvent(new Event('input',{bubbles:true}))};
export function createRunner(onProgress=()=>{}){
  let worker=new Worker('../assets/v2-compiler-worker.js'),counter=0;
  worker.postMessage({id:0,type:'warmup'});
  return (code,input='')=>new Promise((resolve,reject)=>{
    const id=++counter,timer=setTimeout(()=>reject(Error('Biên dịch quá lâu. Hãy thử lại.')),90000);
    const receive=({data})=>{if(data.id!==id)return;if(data.type==='loading'||data.type==='compiling'){onProgress(data.type);return}worker.removeEventListener('message',receive);clearTimeout(timer);data.type==='error'?reject(Error(data.message)):resolve(data.result)};
    worker.addEventListener('message',receive);worker.postMessage({id,type:'run',code,input});
  });
}
export async function testCode(run,code,tests,regex){
  if(regex&&!new RegExp(regex).test(code))return{passed:false,message:'Bài này cần dùng đúng ý vừa học. Xem lại phần gợi ý cú pháp.'};
  for(let i=0;i<tests.length;i++){
    const result=await run(code,tests[i].input),err=(result.errors||[]).join('\n').trim(),got=normalized(result.stdout);
    if(result.exitCode!==0||err)return{passed:false,message:'Chương trình chưa biên dịch được. Đọc lỗi và sửa một chỗ mỗi lần.',detail:err||result.stderr||''};
    if(got!==normalized(tests[i].output))return{passed:false,message:`Lần thử ${i+1}: đầu ra chưa đúng. So sánh từng chữ, khoảng trắng và dòng.`,detail:`Đầu vào:\n${tests[i].input||'(không có)'}\nCon in:\n${got||'(không có)'}\nCần in:\n${tests[i].output||'(không có)'}`};
  }
  return{passed:true,message:`Đạt ${tests.length}/${tests.length} lần thử. Mã đã chạy và cho đúng đầu ra.`};
}
