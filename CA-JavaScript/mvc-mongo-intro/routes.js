const express = require("express");
const router = express.Router();
const contacts=[];

router.get("/",function(req,res){
    res.render("form");
});

router.post("/contacts",function(req,res){

    let {name,email} = req.body;
    contacts.push({name,email});
    console.log(contacts);

    res.render("success");

});

router.get("/contacts",function(req,res){
    res.send(contacts);
});

module.exports = router;
