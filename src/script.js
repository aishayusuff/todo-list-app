const inputBox = document.getElementById("input-box");
const btn = document.querySelector(".btn");
const todoList = document.querySelector(".todo");


//Sets todoList to empty
todoList.innerHTML = '';

//To store tasks
let tasks = [];

//adds new task to todoList
const addsTask = function() {
    let userInput = inputBox.value.trim();

    //stores input in array
    tasks.push(userInput);

    if(userInput === '') {
        alert("Input cannot be left blank!")
        return;
    } else {
        const html = ` 
        <label>
            <input type="checkbox" class="form-checkbox h-3 w-3 mr-5 cursor-pointer checked:line-through">
            <span class="select-none cursor-pointer">${userInput}</span>
        </label>`

        //Creates li element and add class styling
        let li = document.createElement("li");
        li.classList.add("select-none", "px-3", "pt-3", "flex", "justify-between", "items-center");

        //Set innerHTML of new li element to html
        li.innerHTML = html;

        //Creates new span for delete btn and adds after text span
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("close-btn","text-tert-color", "text-center")
        li.appendChild(span);

        todoList.insertAdjacentElement("afterbegin", li);
        inputBox.value = '';
    }
}


btn.addEventListener("click", addsTask)

//Deletes item when close btn clicked
todoList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("close-btn")) {
       return
    } 
    
    e.target.parentElement.remove();
})


