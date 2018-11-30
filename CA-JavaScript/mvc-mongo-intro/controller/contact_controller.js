const ContactModel = require("./../database/models/contact_model");

function newResource(req,res){
    res.render("form");
}

function create(req,res){
    ContactModel.create({name,email})
        .then(contact =>{
            res.render("success");
        })
        .catch(err=>{
            res.status(500).send(err);
        })

    // let {name,email} = req.body;
    // contacts.push({name,email});
    // console.log(contacts);

    // res.render("success");

}

function index(req,res){
    // res.send(contacts);
    ContactModel.find()
    .then(contacts =>{
        res.json(contacts);
    })
    .catch(err =>{
        res.status(500).send(err);

    });
}


module.exports = {
    newResource,
    create,
    index
}