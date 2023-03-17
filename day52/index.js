//#thankU4Ex16
// I am about to show u a small hack that people use to get system information using nodejs

const os = require('os');

const systemInfo = {
    "System Type": os.type(),
    "CPU": os.arch(),
    "Home Directory": "os.homedir()",
    "Host name": "os.hostname()",
    "Last Reboot": os.uptime(),
    "Network Details": "This is most dangerous of all - os.networkInterfaces()"
}

// please note that the reason whay some values are in string format, it's because i donot 
// wish to display these information

console.log(systemInfo)

