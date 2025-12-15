const fs=require('fs')
fs.watch('.',(event,filename )=>{
    console.log(`event :${event} filename :${filename}`);
    
})