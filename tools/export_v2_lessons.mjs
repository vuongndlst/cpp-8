import { writeFileSync } from 'node:fs';
import { LESSONS } from '../assets/v2-lessons.js';
writeFileSync(new URL('./v2-lessons.json', import.meta.url), JSON.stringify(LESSONS, null, 2), 'utf8');
