const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','sub-folder','test.txt')
console.log(filePath)

// base file 

const base = path.basename(filePath)
console.log(base)

// current directory pat of the file 

const absolute = path.resolve(__dirname, 'content','sub-folder','test.txt')
console.log(absolute)