const http=require("http")

const server=http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.statusCode=200;
        res.end("home page")
    }
     else if(req.url ==="/about"){
        res.statusCode=200;
        res.end("about page")
    }
     else if(req.url ==="/contact"){
        res.statusCode=200;
        res.end("contact page")
    }
     else if(req.url ==="/web"){
        res.statusCode=200;
        res.end("web page")
    }
     else if(req.url ==="/more"){
        res.statusCode=200;
        res.end("more page")
    }
    else{
        res.statusCode=404;
        res.end("404 page not found")
    }
})
server.listen(3000,()=>{
    console.log("local host 3000");
});