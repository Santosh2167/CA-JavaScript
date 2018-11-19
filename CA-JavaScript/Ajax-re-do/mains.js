heading = document.querySelector(".heading");
heading.textContent = "Ajax re do";
document.querySelector("button").addEventListener("click", getUserData);
document.querySelector(".button2").addEventListener("click",getUserData2);
document.querySelector(".saveButton").addEventListener("click",saveData);
document.querySelector(".getJokes").addEventListener("click",getJokes);
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

// We start promises
function getJokes() {}
//     alert("till here");
//     let url= "https://api.chucknorris.io/jokes/random";
//     $.get(url,(joke1)=>{
//         $.get(url,(joke2)=>{
//             $.get(url,(joke3)=>{
//                 $.get(url,(joke4)=>{
//                     $.get(url,(joke5)=>{
//                         let jokeArray = [joke1.value, joke2.value, joke3.value,joke4.value,joke5.value];
//                         console.log(jokeArray);
        
//                     });
//                 });
//             });
//         }); 
//     });
// }

//above is call back hell
//answer to call back hell is Promise

//lets create our first promise

let x = 2;
//let y = 5;
let y = "test";
let calculation = new Promise((resolve,reject)=>{
    let answer = x + y;

    if(isNaN(answer)){
        reject("input needs to be a number");
    }

    resolve(answer);

});

calculation
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    });

    console.log(1);

    //write a promise that take two arguments x and y and returns a promise.
    function adder(x,y){
        return new Promise((resolve,reject)=>{
            let answer = x+y;
            if(isNaN(answer)){
                reject("input needs to be a number");
            }
            resolve(answer);
        })
    }

    adder(6,5)
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log(error);
    });

    console.log(10);
