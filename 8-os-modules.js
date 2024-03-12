const os = require('os'); // will import all the os modules

//info about the current user
const user = os.userInfo();
console.log(user);

//uptime of the system(how long system is been running)

console.log(`The system up time is: ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(), //type of os
    release:os.release(), //release version of os
    totalmem:os.totalmem(),// total memory
    freemem:os.freemem(),// total free memory
}

console.log(currentOs);