/* A real C++17 compiler runs inside this worker. Student source never leaves the browser. */
importScripts('vendor/clang-wasm/clang-wasm.global.js');
let compilerPromise;
self.onmessage=async ({data})=>{
  if(data.type!=='run'&&data.type!=='warmup')return;
  const {id,code}=data;
  try{
    if(!compilerPromise){
      self.postMessage({id,type:'loading'});
      compilerPromise=self.clangWasm.createCompiler('cpp',{
        baseUrl:new URL('clang/',self.location.href).href,
        std:'gnu++17'
      });
    }
    const compiler=await compilerPromise;
    if(data.type==='warmup'){
      self.postMessage({id,type:'ready'});
      return;
    }
    self.postMessage({id,type:'compiling'});
    const result=await compiler.run(code,'',{compileArgs:['-Wall']});
    self.postMessage({id,type:'result',result:{stdout:result.stdout,stderr:result.stderr,errors:result.errors,exitCode:result.exitCode}});
  }catch(error){
    compilerPromise=null;
    self.postMessage({id,type:'error',message:String(error?.message||error)});
  }
};
