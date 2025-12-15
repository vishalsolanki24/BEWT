const fs=require("fs")
fs.writeFile('output.txt',"welcome",(err)=>{
     if(err){
        console.log (err)
    }
})