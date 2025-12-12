const url="https://nodejs.org/docs/latest/api/"
const newurl=new URL(url)
console.log(newurl.protocol)
console.log(newurl.hostname)
console.log(newurl.pathname)