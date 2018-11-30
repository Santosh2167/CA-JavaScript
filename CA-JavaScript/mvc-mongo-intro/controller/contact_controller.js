const contacts=[];

function newResource(req,res){
    res.render("form");
}

function create(req,res){

    let {name,email} = req.body;
    contacts.push({name,email});
    console.log(contacts);

    res.render("success");

}

function index(req,res){
    res.send(contacts);
}


module.exports = {
    newResource,
    create,
    index
}