// let heading = document.querySelector(".heading");
// heading.textContent= "Call back";
// let myButton = document.querySelector(".btn1");
// myButton.addEventListener('click',()=>{
//     alert("you clicked");
// });

// var friends = ["mike","stacy","santosh","karuna"];

// friends.forEach((eachName,index)=>{
//     console.log(index+1+". "+eachName);
// })
// //another example
// let allUserData = [];

// function logStuff (userData) {
//     if(typeof userData === "string"){
//         console.log(userData);
//     }else if (typeof userData ==="object"){
//         for(let x in userData){
//             console.log(x+": "+userData[x]);
//         }
//     }
// }

// function getInput(option, callback) {
//     allUserData.push(option);
//     callback(option);
// }

// getInput ({name:"Santosh",surname:"poudyal"},logStuff);
var getLastName = "clinton";
function getInput(options, callback) {
    allUserData.push(options);

    if (typeof callback ==="function") {
        callback(getLastName,options);
    }

    
}