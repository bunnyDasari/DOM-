let toDoIteamlist = document.getElementById("todoItemsContainer");
let toDo = document.createElement("li");
toDo.classList.add("todo-iteam", "d-flex", "flex-row");
todoItemsContainer.appendChild(toDo);
console.log(toDoIteamlist)

let inputTypeCheckBox = document.createElement("input");
inputTypeCheckBox.type = "checkbox";
inputTypeCheckBox.id = "checkboxInput";
console.log(inputTypeCheckBox);

let labelContainer = document.createElement("div");
labelContainer.classList.add("label-conatiner", "d-flex", "flex-row");
console.log(labelContainer)


let labelElement = document.createElement("label");
labelElement.setAttribute("for", "checkboxInput");
labelElement.classList.add("checkbox-label");
labelElement.textContent = "Learn HTML";
labelContainer.appendChild(labelElement)
console.log(labelContainer)


let delateElemet = document.createElement("div");
delateElemet.classList.add("delate-conatiner");
labelContainer.appendChild(delateElemet);
console.log(labelContainer)




let todoList = [
    {
        text : "Rohan"
    },
    {
        text : "Dasari"
    }  
    ]
    
    
    
    
let myArry = [1,2,3,4,5];
for (let i of myArry ){
    console.log((i));
}