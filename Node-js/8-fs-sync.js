const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

console.log(first,second)

writeFileSync(
    './content/newWrite-file.txt',
    'your successfully create a file',
    {flag: 'a'},
    console.log('New file created')
)
console.log('Waiting for next task')

