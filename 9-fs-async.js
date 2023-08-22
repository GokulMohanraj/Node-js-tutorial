const {readFile, writeFile} = require('fs')
console.log('Start')
readFile(
    './content/first.txt',
    'utf8',
    (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const first = result
        readFile(
            './content/second.txt',
            'utf8',
            (err, result) => {
                if(err){
                    console.log(err)
                    return
                }
                const second = result
                newContent = `The new file created using Async and insert some file values ${first} ${second}`
                writeFile(
                    './content/newFile-async.txt',
                    newContent,
                    (err, result) => {
                        if(err){
                            console.log(err)
                            return
                        }
                        console.log('Done with this task')
                    }
                )

            }
        )
    })
console.log('Waiting for next code')