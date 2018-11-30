//this is Garret class on 28 Nov 2018

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const students = ["Ivan","Santosh","Galip","Hamish","Shakti","Nat"];

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    

    let url=req.url, method=req.method;

    if(method==="GET" && url==="/"){
        res.setHeader("Const-Type","text/plain");
        console.log("match the students");
    }else if (method==="GET" && url==="/students"){
        res.setHeader("Const-Type","application/json; charset=UTF-8");
        res.end(JSON.stringify(students));
        console.log("show list of students");
    }else if (method ==="POST" && url ==="/students"){
        console.log("creat new students");
    }else if(url==="favicon.ico") {
        console.log("we dont have a favicon");
    }
    else {
        console.log("route not found");
    }

    res.end("Hello World");
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})