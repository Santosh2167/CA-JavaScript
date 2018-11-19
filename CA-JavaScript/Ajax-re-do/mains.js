heading = document.querySelector(".heading");
heading.textContent = "Ajax re do";
document.querySelector("button").addEventListener("click", getUserData);
document.querySelector(".button2").addEventListener("click",getUserData2);
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

function getUserData2(){
    alert("show data");
}


