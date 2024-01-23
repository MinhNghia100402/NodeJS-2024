// const fs = require('node:fs/promises');
// async function ex() {
//   try {
//     const stats = await fs.stat('./demo.txt');
//     stats.isFile(); // true
//     stats.isDirectory(); // false
//     stats.isSymbolicLink(); // false
//     stats.size; // 1024000 //= 1MB
//   } catch (err) {
//     console.log(err);
//   }
// }
// ex();
// path join 
const { log } = require('node:console');
const path  = require('node:path');

const name = 'dir1';
const pt = path.join('/','user',name,'note.txt')
console.log(pt);


// open file , readfile 
const filename = 'demo.txt';
const fs = require('node:fs');
const util = require('node:util');
fs.readFile(filename,'utf8',(err,data) =>
{
    if (err)
    {
        console.log('error : ', err);
        return ;
    }
    console.log('read file successfully ',data);
});


// readfile 

const fss = require('fs').promises;
async function readtxt() {
  try {
    const data = await fss.readFile(filename, 'utf8');
    console.log('Content of the file:\n', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readtxt();

