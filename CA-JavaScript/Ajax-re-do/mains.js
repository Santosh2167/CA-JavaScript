heading = document.querySelector(".heading");
heading.textContent = "Ajax re do";
document.querySelector("button").addEventListener("click", getUserData);
document.querySelector(".button2").addEventListener("click",getUserData2);
document.querySelector(".saveButton").addEventListener("click",saveData);
// myTextBox = document.querySelector(".1")
// myTextBox.value;
//this is hardcoaded JS for XMLHttpRequest
function getUserData() {
    console.log("starting our request");

    //now we are writing XHR request
    //XHR request start by creating an object
    let request = new XMLHttpRequest();
    //take that object and open up a request
    //open up the GET request
    request.open("GET","https://randomuser.me/api",true);
    request.onload = () =>{
        if(request.status >= 200 && request.status <400) {
            console.log(request.responseText);
        }else {
            console.log("error");
            console.log(request);
        }
    }
    request.onerror = ()=>{
        console.log("Connection error");
    }
    request.send();
    
}
//we will now use Jquery thrid party request to abstract the above code.
//still it makes xhr request. and provides data in different format
function getUserData2(){
    alert("show data");
    //we use ajax method of jquery
    $.ajax({
        url: "http://localhost:3000/students.json",
        type: "GET",
        success: (data) =>{
            console.log(data);
        },
        error: (error) => {
            console.log("Error");
            console.log(error);
        }
    })
}


function saveData(){

    $.ajax({
        url: "http://localhost:3000/students.json",
        type: "POST",
        data: {student:{name:"Santosh", location:"Brisbane"}},
        success: (data) =>{
            console.log(data);
        },
        error: (error) => {
            console.log("Error");
            console.log(error);
        }
    })
}