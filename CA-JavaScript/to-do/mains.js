let heading = document.querySelector(".heading");
let saveButton = document.querySelector(".saveButton");
let inputBox = document.querySelector(".inputBox");
let toDoList = document.createElement("ol");
let listArray = [];
// localStorage.clear();

inputBox.focus();
heading.textContent = "to-do list";
document.body.appendChild(toDoList);

if(localStorage.getItem("list")){
   
    let storedItems = localStorage.getItem("list");
    let tempArray = storedItems.split(',');

    for(let i=0;i<tempArray.length;i++){
        let toDoItems = document.createElement("li");
        toDoItems.textContent = tempArray[i];
        toDoList.appendChild(toDoItems);
        
    }
    inputBox.focus();
    
}


function setToDoList(event){
    event.preventDefault();
    let toDoItems = document.createElement("li");
    toDoItems.textContent = inputBox.value;
    toDoList.appendChild(toDoItems);

    if(inputBox.value!==""){
        listArray.push(inputBox.value);
        localStorage.setItem("list",listArray);
    }
    
    inputBox.value = "";
    inputBox.focus();

}


saveButton.addEventListener("click",setToDoList);

// function appendToDoList(event){
    
    

    // let toDoItems = document.createElement("li");
    // toDoItems.textContent = inputBox.value;
    // toDoList.appendChild(toDoItems);
    // inputBox.value = "";
    // inputBox.focus();
    // localStorage.setItem("list",toDoList);
    
// }