// let myHeading = document.querySelector(".heading");
// myHeading.textContent = "Express Revision";

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const port = 3000;

const app = express();

const contacts=[];

app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",function(req,res){

});

app.get("/contacts",function(req,res){
    return res.json(contacts);
});

app.post("/contacts",function(req,res){

});



app.listen(port, ()=> console.log(`Server is listening at port ${port}`));