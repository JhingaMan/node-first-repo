const path = require('path');

console.log(path.sep);

const jointPath = path.join('/folder','subfolder','text.txt'); //joins the path 
console.log(jointPath);

const base = path.basename(jointPath); //tells the base directory of the given path(here it will give text.txt)
console.log(base);

const absolute = path.resolve(__dirname,'folder','subfolder','text.txt'); //will always give the absolute path
console.log(absolute);