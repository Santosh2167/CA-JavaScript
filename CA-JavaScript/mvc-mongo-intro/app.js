const express =require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose1 = require("mongoose");
const app = express();
const port =3000;

mongoose1.connect("mongodb://localhost/contact_app",{useNewUrlParser: true});
mongoose1.Promise = global.Promise;
mongoose1.connection.on("error",error => console.log(error));

app.engine("handlebars",exphbs({defaultLayouts:"main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.use(require("./routes"));

app.listen(port,()=> console.log(`server is listening at port ${port}`));


