// let heading = document.querySelector(".heading");
// let saveButton = document.querySelector(".saveButton");
// let showButton = document.querySelector(".showButton");
// let listOfBlogs = document.querySelector(".listOfBlogs");

// // saveButton.addEventListener("click",saveNameBlog);
// showButton.addEventListener("click",showBlogs);
// heading.textContent = "Record Tweet";


// function saveNameBlog(){
//     alert("you clicked save Name Blog Button");
//     $.ajax({
//         url: "http://localhost:3000/tweets.json",
//         type: "POST",
//         data: {tweets:{name:"santosh1", blog:"Sydney"}},
//         success: (data) =>{
//             console.log(data);
//         },
//         error: (error) => {
//             console.log("Error");
//             console.log(error);
//         }
//     })
// }

// let blog =[];
// function showBlogs(){
//     //alert("you clicked show Blog Button");

//     // alert("you clicked save Name Blog Button");
//     $.ajax({
//         url: "http://localhost:3000/tweets.json",
//         type: "GET",
//         success: (data) =>{
//             blog = data;
//             console.log(blog);
//             console.log(blog[0]["name"]);
//             appendBlogs();
//         },
//         error: (error) => {
//             console.log("Error");
//             console.log(error);
//         }
//     });

// }

// function appendBlogs(){
//     blog.forEach(item =>{
//         let myBr = document.createElement("br");
//         let myBr1 = document.createElement("br");
//         let myP = document.createElement("p");
        
//         listOfBlogs.innerHTML +="Name: "+ item.name;
//         listOfBlogs.appendChild(myBr);
//         listOfBlogs.appendChild(myBr1);
//         listOfBlogs.innerHTML += "Blog: ";
//         listOfBlogs.innerHTML += item.blog;
//         listOfBlogs.appendChild(myP);
//         listOfBlogs.appendChild(myBr);
//     }); 
     
// }











//challenge on 20 Nov 2018

/* CHALLENGE 9 - Object Destructuring

Declare mult() function that will multiply values
of the x, y, z properties of the passed object.
*/

// "use strict";

// var obj = {
//   x: 5,
//   y: 20,
//   z: 3
// };

// Write mult() function here

//console.log(mult(obj));
// 300
//answer: 
// var obj = {
//     x:5,
//     y:20,
//     z:3
// };

// function mult(obj) {
//     return obj.x * obj.y * obj.z;
// }

// console.log(mult(obj));

//resolving same problem with descructuring

// var obj = {
//     x:5,
//     y:20,
//     z:3
// };

// function mult(obj) {
//     let {y,x,z} = obj;
//     return x*y*z;
// }

// console.log(mult(obj));

// var obj = {
//     x:5,
//     y:20,
//     z:3
// };


// function mult({x,y,z}) { //we destructure in the argument
//     return x,y,z;
// }
// just multiply  numbers 
// var obj={
 
//     a:"test",
//     b:true,
//     c:"3",
   
// }


// function mult(obj) {

//     let total;

//     for(let key in obj)
//     {
//         if (typeof obj[key]!== "number") {
//             total =0;
//         }
//     }
    
//     for(let key in obj) {
//         if (typeof obj[key]=== "number") {
            
//             total *=obj[key];
//         }
        
//     }
//     console.log(total);
//     if (total === NaN)
//     {
//         total =0;
    
//     }


// console.log(total);

// }

// console.log(mult(obj));


// Assign Values to the a,b,c variable us
//use the rest operator and rest operator to get a, b 

var a,b,c;
arrayTemp = [1,2,3,4,5,6];

// a = arrayTemp.shift();
// b = arrayTemp.shift();
// c =arrayTemp;
[a,b,...c] = [1,2,3,4,5,6,7];
console.log(a);


console.log(b);

console.log(c);