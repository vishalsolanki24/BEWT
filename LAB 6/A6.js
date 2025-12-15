<<<<<<< HEAD
const fs=require ('fs')
fs.mkdir('newfolder',(err)=>{
    if(err.code ==='EEXIST') {
        console.log("folder alredy exist");
        
    }
    if(err){
        console.log(err)
    }else{
         console.log("create a new folder");

    }
=======
const fs=require ('fs')
fs.mkdir('newfolder',(err)=>{
    if(err.code ==='EEXIST') {
        console.log("folder alredy exist");
        
    }
    if(err){
        console.log(err)
    }else{
         console.log("create a new folder");

    }
>>>>>>> 7a7e7996c33c999d7436c5ea7a6912ed5dccc886
})