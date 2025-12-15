const fs=require('fs')
fs.copyFile('output.txt','demo.txt',(err)=>{
    if(err){
        console.log(err);
        
    }
})