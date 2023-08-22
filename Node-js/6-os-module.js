const os = require('os')

//info of current user 

const user_info = os.userInfo()
console.log(user_info)

// Method return system uptime in second

console.log('The system uptime is ' +(os.uptime)+ ' seconds')

// System specification

const details = {
    osName : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
    osVersion : os.version()
}

console.log(details)