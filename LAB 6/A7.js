const fs=require('fs')
fs.readdir('../LAB 5',(err,files)=>{
    if(err){
        console.log(err);
        
    }else{
        console.log(files);
        
    }
})