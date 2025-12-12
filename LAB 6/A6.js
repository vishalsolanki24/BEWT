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
})