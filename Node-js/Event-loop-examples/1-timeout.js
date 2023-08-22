// Here setTimeout is a async so the process will offLoaded even delay is set to 0 

console.log('Process start')
setTimeout(() =>{
    console.log('process completed')
})
console.log('Waiting for next process')