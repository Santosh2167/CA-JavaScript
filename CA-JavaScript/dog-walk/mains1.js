// try {
//     throw "oops error";
// }catch(error) {
//     console.log("the error was "+ error);
// }

// try {
//     console.log("try block ran");
//     throw "oops";
//     console.log(1);
// }catch(error) {
//     console.log(`Caught this error: ${error}`)
// }finally {
//     console.log("finally block ran");
// }


// function subtractTwoThings(thing1,thing2){
//     let answer;

//     try {
//         answer = thing1-thing2;
//         if(isNaN(answer)) {
//             throw "Invalid Input";
//         }
//         return answer;
//     }catch (error) {
//         console.log(error);
//         return null;
//     }
// }

// let calculation = subtractTwoThings(43, "bobby");
// console.log(calculation);

// function subtractTwoThings(thing1,thing2){
//     let answer;
//     answer = thing1-thing2;

//     if(isNaN(answer)){
//         throw "invalid input";
//     }
//     return answer;
// }


//     try {
//         let calculation = subtractTwoThings(43,"asdb");
//         console.log(calculation);    
//     }
//         return answer;
//     }catch (error) {
//         console.log(error);
        
//     }
// }

// let calculation = subtractTwoThings(43, "bobby");
// console.log(calculation);

// try {
//     throw new Error("my error");
// }catch(error) {
//     console.log(error.message);
//     console.log(error.name);
// }

//extending Error class and creating customised error


// class GarretError extends Error {
//     constructor(...params){ //...params conpacts all the argument passed to the costructor and put it on array
//         super(...params); //spreads the items in the array
//         this.name = "GarretError";

//         if(Error.captureStackTrace) {
//             Error.captureStackTrace(this,GarretError);
//         }
//     }
// }

// try {
//     throw new GarretError("my error");
// }catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// function scope

// function myDog(){
//     var dog = "fido";
//     console.log(dog);
// }

// myDog();

// bad practise, variable is mutated. you can get into this problem 
// let cat = "Fluffy";

// function haircut() {
//     cat="hairless";
// }

// haircut();
// console.log(cat);

//this is a good practise
// let cat = "Fluffy";

// function haircut(cat){ //if we pass object or array then it would change it
//     cat = "hairless";
// }

// haricut(cat);
// console.log(cat);

// nested function
// function parentFunc(a) {
//     let b=1;
//     function nestedFunction(d,e) {
//         return d+e;
//     }
//     return nestedFunction(a,b);
// }

// let answer = parentFunc(5,9);
// console.log(answer);

//it works even if let b=1 is out of function in the document

//colusre is something that wraps and returns a function 

// function makeAdder(a) {
//     return function(b){
//         return a+b;
//     }
// }

// let addFive = makeAdder(5);
// let addTen = makeAdder(10);

// let answer = addFive(6);
// let answer2 = addTen(6);

// console.log(answer);
// console.log(answer2);

//it still has access to a when function was assigned to addFive

//multiple inheritance
// class Shape {
//     constructor(height, width){
//         this.height = height;
//         this.width = width;
//     }

//     talk(input){
//         return `Hey i am a talking ${input}`;
//     }
// }


// class Square extends Shape {
//     constructor(height, width) {
//         super(height, width);
//     }
//     shout(){
//         return super.talk("square";)
//     }
// }

// let square = new Square(10,10);

// console.log(sqlary.height, square.width);
// console.log(square.shout());

// //mixin

// let calculatorMixin = function(Base) {
//     return class extends Base {
//         area() {
//             return this.width * this.height;
//         }
//     }
// }

// chass shape {
//     //look video
// }

//xml

// /* <cohort>
//     <student>
//         <name>Sanotsh</name>
//         <nickname>San</name>
//         <dateOfBirth>1980-06-08</dataOfBirth>
//     </student>
//     <student>
//         <name>Sanotsh</name>
//         <nickname>San</name>
//         <dateOfBirth>1980-06-08</dataOfBirth>
//     </student>

// </cohort> */

//lets rewrite this xml as Json

//following is just a Javascript
// let cohort = [
//     {name: "Santosh", nickname:"San", dataOfBirth: "1977-06-08"},
//     {name: "Shakti", nickname:"Shak",dateOfBirth:"1986-10-24"}
// ];

// following is Json:


let cohort = "[{ \"name\": \"K. West\", \"nickname\": \"Ye\", \"dateOfBirth\": \"1977-06-08\"},{ \"name\": \"A. Grham\", \"nickname\": \"Drake\", \"dateOfBirth\": \"1986-10-24\"}]"

let parsed = JSON.parse(cohort);

console.log(parsed[0].name);

jsonString = JSON.stringify(parsed);
console.log("JSON: "+jsonString);parsed[0].name;

