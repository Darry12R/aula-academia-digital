import {cpSync,existsSync,lstatSync,mkdirSync,readdirSync,realpathSync,rmSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=realpathSync(path.dirname(fileURLToPath(import.meta.url)));
const output=path.resolve(root,'public-build');
if(path.dirname(output)!==root || path.basename(output)!=='public-build') throw new Error('Directorio de salida inesperado');
if(existsSync(output)) {
 if(lstatSync(output).isSymbolicLink() || realpathSync(output)!==output) throw new Error('Salida enlazada no permitida');
 rmSync(output,{recursive:true,force:true});
}
function checkSource(file) {
 if(lstatSync(file).isSymbolicLink() || !realpathSync(file).startsWith(root+path.sep)) throw new Error('Recurso fuera del proyecto');
 if(lstatSync(file).isDirectory()) for(const entry of readdirSync(file)) checkSource(path.join(file,entry));
 if(path.basename(file).startsWith('.env')) throw new Error('Credenciales excluidas de la publicación');
}
mkdirSync(output);
const publicFiles=["index.html", "styles", "js", "assets", "recursos", "robots.txt"];
for(const name of publicFiles){const source=path.join(root,name);checkSource(source);cpSync(source,path.join(output,name),{recursive:true});}
console.log('Demo compilada con lista explícita de recursos públicos.');
