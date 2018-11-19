let heading = document.querySelector(".heading");
heading.textContent = "Ajax, Cors, Promises, Fetch API";


//Ajax stands for async JavaScript and XML
//update the page without refereshing the page
//all modern webpages have ajax on it
//document.querySelector("button").addEventListener("click",getUserData);


// function getUserData() {
//     alert("starting the request");

//     let request = new XMLHttpRequest();
//     request.open("GET","https://randomuser.me/api",true);
//     request.onload = () => {
//         if (request.status >= 200 && request.status ,400) {
//             alert(request.responseText);
//         } else {
//             alert("Error");
//             alert(request);
//         }
//     }
//     request.onerror = () => {
//         alert("Connection error");
//     }

//     request.send();
// }

//let us do the above exercise using Jquery, third party library is created to abstract the above code. but under the hood
//it is creating XHR

// function getUserData(){
//     $.ajax({
//         url: 'http://localhost:3000/students.json',
//         type: 'POST',
//         data: {student: {name:'John',locatoin:'Brisbane'}},
//         success: (data) =>{
//             console.log(data);
//         },
//         error: (error) => {
//             console.log("Error");
//             console.log(error);
//         }
//     })
// }
// function getUserData() {
//         // alert("starting request");
    
//         $.ajax({
//             url:'https://localhost:3000/students.json',
//             type: 'POST',
//             data: {students:{name:"John",locatoin:"Brisbane"}},
//             success: (data) =>{
//                 console.log(data);
//             },
//             error: (error) =>{
//                 console.log("Error");
//                 console.log(error);
//             }
//         })
// }

//dong promises
// document.querySelector("button").addEventListener("click",getJokes);

// function getJokes() {
//     let url = "https://api.chuchnorris.io/jokes/random";

//     $.get(url, (joke1) =>{
//         $.get(url,joke2) =>{
//             $.get(url,joke3) =>{

//             }
//                     }
//     })
// }

// console.log(joke1);
//             console.log(joke2);


//inside promises we dont have return. we either reject or resolve. That is how we get value out of promise. 

let x =2;
let y = 3;
let calculation = new Promise((resolve,reject)=>{
    let answer = x + y;
    if (isNaN(answer)) {
        reject("input needs to be a number");
    }
    resolve(answer); // this is the value that comes out of the promise if resolve
});

//we are doing calculation.then().catch()
calculation
 .then(data => {
     console.log(data);
 })
 .catch(error => {
     console.log(error);
 });

 console.log(1);

//  refacturing above code

function adder(x,y) {

    return new Promise((resolve,reject) => {
        let answer = x + y;
        
        if (isNaN(answer)) {
            reject("input needs to be a number");
        }
        resolve(answer);
    });
    
}

//call adder 3 times. each time taking the previous answer as the first input for the next call 
//adder(2,5) -> 7
//adder (7,4) -> 11
//adder (11,5) -> 16


adder(2,5)
    .then(answer1 =>{
        adder(answer1,4)
        .then(answer2 =>{
            adder(answer2,5)
            .then(answer3=>{
                console.log(answer3);
            })
            .catch(error=> {
                console.log("3rd catch statement ran");
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        });
        .catch(error => {
            console.log("1st Catch statement Ran");
            console.log(error);
        })
    })

    function getJoke() {
        return new Promise((resolve,reject)) => {
            let url="https://api.chucknorris.io/jokes/random";

            $.get(url, joke => {
                if(joke && joke.value) {
                    resolve(joke.value);
                }
                reject(new Error("could not retrieve joke"));
            });
        });
    }