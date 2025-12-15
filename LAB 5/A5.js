const url="https://nodejs.org/docs/latest/api/"
const newurl=new URL(url)

newurl.searchParams.append('name','vishal')
console.log(newurl.toString())