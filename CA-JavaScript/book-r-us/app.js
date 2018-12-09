const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

mongoose.connect("mongodb://localhost/books_r_us",{useNewUrlParser: true});
mongoose.Promise = global.Promise;
mongoose.connection.on("error",err => console.log(err));


app.engine("handlebars",exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require("./routes"));

app.listen(port,()=> console.log("server is listening at port 4000"));