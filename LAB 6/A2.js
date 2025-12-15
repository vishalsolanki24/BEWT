<<<<<<< HEAD

const fs=require("fs")
try{
    data=fs.readFileSync('data.txt').toString()
    console.log(data);
    
}catch(err){
    console.log(err);
    
=======

const fs=require("fs")
try{
    data=fs.readFileSync('data.txt').toString()
    console.log(data);
    
}catch(err){
    console.log(err);
    
>>>>>>> 7a7e7996c33c999d7436c5ea7a6912ed5dccc886
}