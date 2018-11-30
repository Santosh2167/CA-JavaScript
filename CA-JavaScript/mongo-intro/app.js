const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/contact_app",{useNewUrlParser:true});
mongoose.Promise = global.Promise;

mongoose.connection.on("error",error => console.log(error));


app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require("./routes"));

app.listen(port, () => console.log(`Server Listening on port ${port}`));

//3 routes
//1 "/" to display our form
//1 "/contacts" to receive data from our form, push data to array and then display 
//success
//1 "/contacts" to display in json all of our contacts

   
