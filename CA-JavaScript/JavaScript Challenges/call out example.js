console.log("1");

setTimeout(function timer() {
    console.log("3");
    
    setTimeout(function timer() {
        console.log("5");
    }, 0);
    
    console.log("4");
}, 0);

console.log("2");