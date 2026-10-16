import { lstatSync } from 'node:fs';
import path from 'node:path';
const linkedDependencies=lstatSync(path.join(process.cwd(),'node_modules')).isSymbolicLink();
export default {turbopack:{root:linkedDependencies?path.resolve(process.cwd(),'..'):process.cwd()}};
