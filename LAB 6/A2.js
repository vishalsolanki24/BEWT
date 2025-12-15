
const fs=require("fs")
try{
    data=fs.readFileSync('data.txt').toString()
    console.log(data);
    
}catch(err){
    console.log(err);
    
}