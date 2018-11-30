// let cookies = document.cookie;

// let expiry = new Date();
// let days = 2;

// expiry.setTime(expiry.getTime()+(days * 24 *60 * 60 * 1000));

// document.cookie = "javascript=amazing"; //key value pair
// document.cookie = `coderAcademy=Awesome;expire=${expiry.toUTCString()}`;//key value pair again
// //lert("working");

// console.log(cookies);

// function getCookie(name) {
//     let cookie = {};
//     document.cookie.split(";").forEach(item => {
//         let [key,value] = item.split("=");
//         cookie[key.trim()] = value;
        
//     });
//     return cookie[name];
// }

// function removeCookie(name){
//     let expiry = new Date();
//     expiry.setTime(expiry.getTime()-100);
//     document.cookie=`${name}=';expires=${expiry.toUTCString()}`;
// }

// // removeCookie("javascript");

// console.log(getCookie("javascript"));

localStorage.setItem("name","Santosh");
sessionStorage.setItem("address","123 Fake Street");
console.log(localStorage.getItem("name"));
