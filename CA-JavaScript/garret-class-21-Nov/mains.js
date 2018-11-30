let heading = document.querySelector(".heading");
heading.textContent="DOM TODAY";

let p = document.getElementById(".my-paragraph");

let formButton = document.querySelector("input[type=submit]"); // to select button in the form

formButton.value = "Dont click me"; //you are chaging the text on the button 


let input = document.querySelector("input");

Object.assign(formButton,{
    value:"Iguess you can click",
    id: "my-form-button"
});
//object.assign help to assign properties to the object

let title = document.querySelector("h1");
title.style.marginLeft = "100px";

//animation 
for(let i=0;i<2000;i++) {
    if(i%10===0){
        title.style.marginLeft=`${i}px`;
    }
    
};

window.getComputedStyle(title).getPropertyValue("color"); // you get reply in rgb(0,0,255)
title.classList.add("blue");//to add class blue in the classlist

// DOM notes come with three properties
// title.innerHTML
// div.innerHTML = null;
// div.innerHTML = "<p>here</p>";
//button.addEventListener("click",function(event){
    console.log(event);
})

myButton.addEventListener("click",function(event){
    event.preventDefault();
    myButton.value +="!";


});

//event bubbling
event