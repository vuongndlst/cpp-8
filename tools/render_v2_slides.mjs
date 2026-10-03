import fs from 'node:fs/promises';
import path from 'node:path';
import {FileBlob, PresentationFile} from 'file:///C:/Users/ndvuo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
const folder=path.resolve('../CPP8_NewSlides');
const files=(await fs.readdir(folder)).filter(x=>x.endsWith('.pptx'));
for(const file of files){
  const number=/Bai(\d{2})/.exec(file)?.[1];
  const deck=await PresentationFile.importPptx(await FileBlob.load(path.join(folder,file)));
  const out=path.join(folder,`render_bai${number}`);await fs.mkdir(out,{recursive:true});
  for(let i=0;i<deck.slides.items.length;i++){
    const png=await deck.slides.getItem(i).export({format:'png',scale:.6});
    await fs.writeFile(path.join(out,`slide-${String(i+1).padStart(2,'0')}.png`),new Uint8Array(await png.arrayBuffer()));
  }
  console.log(`Bai ${number}: ${deck.slides.items.length}`);
}
