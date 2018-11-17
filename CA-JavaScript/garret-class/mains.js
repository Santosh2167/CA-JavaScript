// //call backs

// function adder(x,y,callback){
//     let answer = x + y;

//     if(callback) {
//         return callback(answer);
//     }

//     return answer;
// }

// function shout(input) {
//     console.log(`${input}`);
    
// }

// // let answer = adder(1,2); //js does not care if you dont give all the arguments 

// // now place shout inside answer
// let answer = adder(1,2,shout); //this gives 3 with exclamation !. why is exclamation ?we are just passing shout function we are not ivoking the function
// //
// console.log(answer); 

// let myButton = document.querySelector(".click");
// let jokes=[];
// myButton.addEventListener("click",()=>{
    
//     for(let i=0;i<5;i++){
//         jokes[i]= $.get("https://api.chucknorris.io/jokes/random",(joke)=>{joke.value});
//     }
//     console.log(jokes);
// }

// );




// $.get("https://api.chucknorris.io/jokes/random",(data)=>{
//     console.log(data.value);
// })



// function eraser(text, callback){
//     text = text.substr(0,3);

//     return callback(text);
// }

// function checkText(text){
//     console.log(`Oh no what happened to: ${text}`);
// }

// eraser("class is awesome",checkText);

//another example
// function addAndThenHalveAtSomePoint(a,b,callback) {
//     setTimeout(() =>{
//         let answer = a+b;

//         setTimeout((answer)=>{
//             answer = answer/2;
//             return callback(answer);
//         },2000);
//     },3000);
// }

// function displayAnswer(text){
//     console.log(value);
// }

// let calculation = addAndThenHalveAtSomePoint(10,20,displayAnswer);


