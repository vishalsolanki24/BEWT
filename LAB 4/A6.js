const os=require("os");
console.log(os.type())
console.log(os.version())

console.log(os.platform())
console.log(os.arch())


const totalmem=os.totalmem()
console.log(totalmem/1024/1024/1024)
const freemem=os.freemem()
console.log(freemem/1024/1024/1024)
console.log(os.uptime())
console.log(os.uptime()/3600)
console.log(os.userInfo())

console.log(os.cpus());
console.log(os.networkInterfaces());