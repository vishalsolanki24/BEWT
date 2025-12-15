<<<<<<< HEAD
const cp=require('child_process')
cp.exec("node --version ",(err,stdout,stderr)=>{
    if(err){
        console.log(err)
    }
    if(stderr){
        console.log(stderr)
    }
    console.log(stdout)
})
cp.exec("p.py",(err,stdout,stderr)=>{
    if(err){
        console.log(err)
    }
    if(stderr){
        console.log(stderr)
    }
    console.log(stdout)
})

=======
const cp=require('child_process')
cp.exec("node --version ",(err,stdout,stderr)=>{
    if(err){
        console.log(err)
    }
    if(stderr){
        console.log(stderr)
    }
    console.log(stdout)
})
cp.exec("p.py",(err,stdout,stderr)=>{
    if(err){
        console.log(err)
    }
    if(stderr){
        console.log(stderr)
    }
    console.log(stdout)
})

>>>>>>> 7a7e7996c33c999d7436c5ea7a6912ed5dccc886
