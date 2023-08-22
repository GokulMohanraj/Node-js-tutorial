// Stream is used to handel big size file data 
// default 64kb
// highWaterMark - control size 

const fs = require('fs')

const stream = fs.createReadStream('./content/big.txt',{
    highWaterMark: 9000,
    encoding: 'utf8'
})

stream.on('data', (result)=>{
    console.log(result)
})

stream.on('error', (err) =>{
    console.log(err)
})