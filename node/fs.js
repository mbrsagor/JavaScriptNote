const fs = require('fs');

fs.writeFileSync('aobut.txt', 'Hello there I am learning file system. '); // create new file.
fs.appendFileSync('aobut.txt', 'Everybody should learn javascript.'); // Add new text the file.

const read_file = fs.readFileSync('aobut.txt'); // Read the file
console.log(read_file.toString());
