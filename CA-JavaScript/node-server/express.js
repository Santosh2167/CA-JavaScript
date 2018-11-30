const express = require("express");
const bodyParser = require("body-parser");
// const students = require("students");
const students = require("./students");
const app = express();
const port = 3000;
const exphbs = require("express-handlebars");
app.use(express.static('./'))

// const students =["Santosh","Shakti","Nat","Galip"];


app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



app.get("/",(req,res)=>{
    console.log(students);
    // res.send("matching students");
    let randomIndex1 = Math.floor(Math.random()*students.students.length);
    let randomIndex2 = Math.floor(Math.random()*students.students.length);
    res.render("home",{name1:students.students[randomIndex1],name2:students.students[randomIndex2],rest1:students.restaurants[randomIndex1],rest2:students.restaurants[randomIndex2]});
    // res.render("home",{rest1:students.restaurants[randomIndex1],rest2:students.restaurants[randomIndex2]})
   
});

app.get("/students",(req,res)=>{
    res.send(students);
   
});

app.get("/api/restaurants",(req,res)=>{
    res.send(students.restaurants);
   
});

app.post("/students",(req,res)=>{


    students.push(req.body.name);
    res.send("creating students");
   
});

app.post("/api/restaurants",(req,res)=>{

    students.restaurants.push(req.body.name);
    // console.log(req.body);
    
    // students.push(req.body.name);
    // console.log(students);
     res.send("creating students");
   
});

app.listen(port,()=>{
    // console.log(`App listening on port ${port}');
})