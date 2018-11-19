let heading = document.querySelector(".heading");
heading.textContent = "Comparing Object Properties";

let objectOne = { age: 25, hair: 'long', beard: true };
let objectTwo = { hair: 'long', beard: true };

let objectOneKeys = Object.keys(objectOne);
let objectOneValues = Object.values(objectOne);

let objectTwoKeys = Object.keys(objectTwo);
let objectTwoValues = Object.values(objectTwo);

let isKey, isValue;

console.log(objectOneKeys);
console.log(objectOneValues);

objectOnekeys.forEach(items => {
    isKey.push() 
})
// console.log(_.isEqual(objectOne,objectTwo));

for(let i=0;i<objectOneValues.length,i++){
    objectOneKeys[i] === objectTwoKeys[i]  
}

// console.log(Object.is(objectOne,objectTwo));