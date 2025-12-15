<<<<<<< HEAD

const fs=require("fs")
fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log (err)
    }else{
        console.log(data.toString());
        
    }
=======

const fs=require("fs")
fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log (err)
    }else{
        console.log(data.toString());
        
    }
>>>>>>> 7a7e7996c33c999d7436c5ea7a6912ed5dccc886
})