let header = document.querySelector(".header");
let colorChose = document.querySelector(".colourChooser");
header.textContent = "!!Welcome!!";

let initialHeaderText = header.textContent;
let colourChose = colorChose.value;

alert(initialHeaderText);
alert("colour chose: "+colourChose);

colourChose.addEventListner("click",alert("hi"));