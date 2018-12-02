// let myHeading = document.querySelector(".heading");
// myHeading.textContent = "Express Revision";

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const port = 3000;

const app = express();

app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.listen(port, ()=> console.log(`Server is listening at port ${port}`));