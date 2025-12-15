const cp=require('child_process')
const child=cp.spawn('ls',['-ln','/usr']);
child.err.on('data',(data)=>{
    console.log(data)
})
child.stderr.on('data',(data)=>{
    console.log(data)
})
child.stdout.on('data',(data)=>{
    console.log(data)
})