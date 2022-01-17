const os = require('os');

// Info about current user
const user = os.userInfo();
//console.log(user);

// method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// method returns the system information
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMan: os.freemem(),
}
console.log(currentOS);

