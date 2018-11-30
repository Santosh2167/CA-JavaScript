let heading = document.querySelector(".heading");
heading.textContent = "Wednesday Challenge";

//answer to question 1

//Program three different ways to log each individual item in the array.
/*
let myArray = ["one", 2, true, 4];
myArray.forEach(item => {
    console.log(item);
});


for(let i=0;i<myArray.length;i++) {
    console.log(myArray[i]);
}

for(let item of myArray) {
    console.log(item);
}

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
*/

//Write a function that adds all numbers together. If any argument is not a number return false

// function adder(...args){
//     // console.log(args);
//     let total = 0;

//     for(let i=0;i<args.length;i++) {
//         if (typeof args[i] !== "number") {
//             total = false;
//             break;
//         }else {
//             total +=args[i];
//         }
//     }

//     return(total);
    

// }

  
// console.log(adder(1,2,3,"a"));

//Set 3 variables (you may call them whatever you want) to the first three elements of myArray using destructing
// let myArray = ["one", 2, true, 4];
// [a,b,c,...rest] = myArray;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

//Create a object from a class named Fruit. When an object is instantiated from the 
// class set 3 properties on the object (name, color, bites). 
// Also have a function in the class that when called takes a bite of the fruit and 
// decrements the bites property. If there are no bites left in the fruit log to the console 
// “All gone!”, if there was a bite log “So yummy”.

// let fruit1 = {};

// fruit1.name = "apple";
// fruit1.color = "red";
// fruit1.bites = 3;

// fruit1.takeABite = function() {
// //    const keys = Object.keys(fruit1);
//     if(this.bites ===0){
//         console.log("All Gone")
//         this.bites = "So yummy";
//     }else {
//         this.bites -=1;
//         console.log(this.bites);
//     }
    
       
   

// //    console.log(keys);
// } 

// fruit1.takeABite();

//doing call back
// function adder(x,y,callback){
//     let answer = x+y;
//     if(callback){
//         return callback(answer);
//     }

//     return answer;
// }

// function shout(input){
//     console.log(`${input}!`);
// }

// function unrelated(){
//     console.log(answer);
// }

// let answer = adder(1,2,unrelated);
// console.log(answer);

// document.getElementById("button").addEventListener("click",()=> {wait(10000);
// alert("this ran")});

// function wait(ms) {
//     let start = Date.now();
//     let now = start;

//     while(now - start <ms){
//         now = Date.now();
//     }
// }

// wait(5000);
// console.log("finished");

console.log(1);

setTimeout(()=>{
    console.log(2)
},5000);

console.log(3);