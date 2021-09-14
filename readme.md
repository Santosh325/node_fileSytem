# Here we are using filesystem module by using --> require('fs')


To create new file we use fs.writeFileSync('fileName.txt',"hello world")
To override file we use fs.writeFileSync('fileName.text', 'welcome to this world')
To append text in to a existing file fs.appendFileSync('fileName.txt', 'this is earth')
To read text from an existing file fs.readFileSync('fileName.txt')