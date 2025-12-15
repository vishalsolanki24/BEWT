const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.end("home page")
    }
})
server.listen(3000,()=>{
    console.log("local host 3000");
});