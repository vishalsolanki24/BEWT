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

