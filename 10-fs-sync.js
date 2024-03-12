// fs is for file system here we can read through two ways 
//1. async 2. sync

const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./folder/first.txt','utf8');//when we read a file we have to specify the encoding of the file and here it is utf8. By specifying 'utf8' as the encoding parameter, you're telling Node.js to interpret the file contents as UTF-8 encoded text. UTF-8 is a widely used character encoding that can represent most characters in the Unicode standard.
const second = readFileSync('./folder/second.txt','utf8');

console.log(first,second);

writeFileSync('./folder/reuslt.txt',`here is what we entered: ${first}  ${second}`,{flag:'a'});//flag property will append it every time we run the command