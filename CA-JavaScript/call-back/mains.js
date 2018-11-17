heading = document.querySelector(".heading");
heading.textContent="doing fat arrow";

// let array1 = ["santosh","poudyal","class","group","hippopotamus"];

// let array1 = [1,2,3,4,5];

// const filter1 = array1.forEach(item => item *2);

// console.log(filter1);

// let stock = [{x:2,y:3,z:4},{x:2,y:3,z:4}, {x:2,y:3,z:4}, {x:2,y:3,z:4}];

// let resultStock = stock.reduce((accu,currentValue) => {
//     accu = accu + currentValue.x;

//     return accu;
// }, 0);

// console.log('resultStock:', resultStock);


// let array1 =[1,2,3,4];

// let result = array1.reduce((accu,currentValue) => accu+currentValue);
// console.log(result);

 let array1 = [{
    name: "Santosh",
    age: 32
},
{
    name: "Karuna",
    age:30
},
{
    name:"Slesha",
    age: 16
}];

// let result1 = array1.reduce((accu,currentValue) => {
//     accu += (currentValue.age);

//     return accu;

// }, 0);
// console.log(result1);

let result1 = array1.some(item => {
    return parseInt(item.age7y)%2 !==0;

}); 

console.log(result1);