const express =require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const port =3000;

app.engine("handlebars",exphbs({defaultLayouts:"main"}));
app.set("view engine","handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.use(require("./routes"));

app.listen(port,()=> console.log(`server is listening at port ${port}`));


