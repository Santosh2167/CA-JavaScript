let heading = document.querySelector(".heading");
heading.textContent = "Colures";

// function init() {
//     let name = "Santosh";
    
//     function displayName(){
//         console.log(name);
//     }
//     displayName();
// }

// init();

// function makeFunc() {
//     let name = "Santosh";

//     function displayName() {
//         console.log(name);
//     }

//     return displayName;
// }

// let myFunc = makeFunc();

// myFunc();

// function makeAdder(x) {
//     return function(y){
//         return x+y;
//     }
// }

// let add5 = makeAdder(5);
// let add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

//make adder is a function factory

// function makeSize(size){
   
//     return function(){
//         document.body.style.fontSize = size +"px";
//     }
// }

// var size12 = makeSize(12);
// var size14 = makeSize(14);
// var size16 = makeSize(16);

// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

// var counter = (function() {
//     var privateCounter = 0;
    
//     function changeBy(val){
//         privateCounter +=val;
//     }
//     return {
//         increment: function(){
//             changeBy(1);
//         },
//         decrement: function(){
//             changeBy(-1);
//         },
//         value:function(){
//             return privateCounter;
//         }
//     }
// })();

// var e =10;
// function sum(a) {
//     return function sum2(b){
//         return function sum3(c){
//             return function sum4(d){
//                 return a+b+c+d+e;
//             }
//         }
//     }
// }

// console.log("sum: "+sum(1)(2)(3)(4));

function showHelp(help) {
    document.getElementById("help").innerHTML = help;
}

function makeHelpCallback(help){
    return function() {
        showHelp(help);
    }
}

function setupHelp() {
    var helpText = [
        {"id":"email","help":"Your email address"},
        {"id":"name","help":"Your full name"},
        {"id":"age","help":"Your age (you must be over 16)"}

    ];

    for(var i=0;i<helpText.length;i++){
        var item = helpText[i];
            document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
}

setupHelp();