const ContactModel = require("./../database/models/contact_model");

// let moreInfo = document.querySelector(".moreInfo");


function newResource(req,res) {
    
    res.render("form");
   
}

function index(req,res) {
    ContactModel.find()
        .then(contacts =>{
            res.render("contacts",{contacts});
        })
        .catch(err =>{
            res.status(500).send(err);
        });
    //res.send(students);
    //res.send(contacts);
    //another method
    // res.json(contacts);

   
}


function create(req,res) {
    console.log(req.body);

    //let name = req.body.name;
    //let email = req. body.email;

    let {name, email,enquiry} = req.body;
    // contacts.push({name,email});

    ContactModel.create({name,email,enquiry})
        .then(contact =>{
            res.render("success");
        })
        .catch(err =>{
            res.status(500).send(err);
        })
    

    // contacts.push({
    //     name:name,
    //     email:email
    // })
}
function getEnquiry(req,res){

    console.log("till here");
    
}

function deleteEnquiry(req,res){
    console.log("inside Delete Enquiry function");
}

module.exports = {
    newResource,
    create,
    index,
    getEnquiry
}