// here setInterval is a async so the process is offLoaded
//'I will run first' code will run first then 'Hello' will print 2000 MilliSecond once 
// press ctrl+c to kill the program


setInterval(() =>{
    console.log('Hello')
}, 2000)
console.log('I will run first')