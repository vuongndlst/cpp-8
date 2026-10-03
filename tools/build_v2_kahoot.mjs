import fs from 'node:fs/promises';
import path from 'node:path';
import {FileBlob,SpreadsheetFile} from 'file:///C:/Users/ndvuo/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
import {LESSONS} from '../assets/v2-lessons.js';

const template=path.resolve('../CPP8_Bai01_MachMoi/Kahoot_Bai01_5Y_20261003.xlsx');
const dest=path.resolve('../CPP8_Kahoot_New');await fs.mkdir(dest,{recursive:true});
for(let n=2;n<=6;n++){
  const workbook=await SpreadsheetFile.importXlsx(await FileBlob.load(template));
  const sheet=workbook.worksheets.getItem('Sheet1');
  const rows=LESSONS[n].kahoot.map(x=>[x[0],x[1],x[2],x[3],x[4],20,String(x[5])]);
  sheet.getRange('B9:H13').values=rows;
  workbook.recalculate();
  const file=path.join(dest,`Kahoot_Bai${String(n).padStart(2,'0')}_MachMoi_20261003.xlsx`);
  const output=await SpreadsheetFile.exportXlsx(workbook);await output.save(file);
  console.log(`Bai ${n}: ${rows.length} questions`);
}
