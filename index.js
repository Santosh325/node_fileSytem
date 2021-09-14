
//I'm using fs -> File System module to create, write and append file.
const fs = require('fs');


// created a new file and wrote a text to newFile.txt
// fs.writeFileSync('newFile.txt','Hello Everyone I am john doe.')


// Appending a Text in to the newFile.txt
// fs.appendFileSync('newFile.txt', ' I am from nepal....')


// ? node includes addition datatype called Buffer
// ? Buffer is mainly used to store binary data
// ? while reading from a file or receiving packets over the network...
const buff_data = fs.readFileSync('newFile.txt');

var read_data = buff_data.toString();
console.log(read_data);