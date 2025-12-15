<<<<<<< HEAD
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
=======
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
>>>>>>> 7a7e7996c33c999d7436c5ea7a6912ed5dccc886
console.log(os.networkInterfaces());