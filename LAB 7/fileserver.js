const http=require("http")
const fs=require("fs")

const server=http.createServer((req,res)=>{
   if(req.url ==="/"){
      res.end(fs.readFileSync("./home.txt")) 
     
    }
    else if(req.url ==="/about"){
      res.end(fs.readFileSync("./about.txt")) 
     
    }
    else if(req.url ==="/contact"){
      res.end(fs.readFileSync("./contact.txt")) 
     
    }
    else if(req.url ==="/more"){
      res.end(fs.readFileSync("./more.txt")) 
     
    }
    
    else{
        re.end("404 not ")
    }
})
server.listen(3000,()=>{
    console.log("local host 3000");
});