<<<<<<< HEAD
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
=======
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
>>>>>>> 7a7e7996c33c999d7436c5ea7a6912ed5dccc886
})