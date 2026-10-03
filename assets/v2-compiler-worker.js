importScripts('../bai01/vendor/clang-wasm/clang-wasm.global.js');
let compilerPromise;
self.onmessage=async({data})=>{
  const {id,type,code,input=''}=data;
  if(type!=='run'&&type!=='warmup')return;
  try{
    if(!compilerPromise){
      self.postMessage({id,type:'loading'});
      compilerPromise=self.clangWasm.createCompiler('cpp',{baseUrl:new URL('../bai01/clang/',self.location.href).href,std:'gnu++17'});
    }
    const compiler=await compilerPromise;
    if(type==='warmup'){self.postMessage({id,type:'ready'});return}
    self.postMessage({id,type:'compiling'});
    const result=await compiler.run(code,input,{compileArgs:['-Wall']});
    self.postMessage({id,type:'result',result:{stdout:result.stdout,stderr:result.stderr,errors:result.errors,exitCode:result.exitCode}});
  }catch(error){compilerPromise=null;self.postMessage({id,type:'error',message:String(error?.message||error)})}
};
