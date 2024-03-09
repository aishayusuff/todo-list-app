const inputBox = document.getElementById("input-box");
const btn = document.querySelector(".btn");
const todoList = document.querySelector(".todo");


const getTasksFromLocalStorage = function() {
    const taskJSON = localStorage.getItem("tasks");
    const task = JSON.parse(taskJSON)
    return task || []
}

const setTasksToLocalStorage = function(tasks){
    const taskJSON = JSON.stringify(tasks);
    localStorage.setItem("tasks", taskJSON)
}

const displayTasksFromLocalStorage = function() {
    const tasks = getTasksFromLocalStorage();
 
    if (tasks.length > 0) {
        tasks.forEach(task => {
            createsHTML(task)
        })
    }
}

const createsHTML = function(userInput) {
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

    return todoList.insertAdjacentElement("afterbegin", li);
}

//adds new task to todoList
const addsTask = function() {
    let userInput = inputBox.value.trim();

    if(userInput === '') {
        alert("Input cannot be left blank!")
        return;
    } else {

        //stores input in local storage
        let tasks = getTasksFromLocalStorage();
        tasks.push(userInput);
        console.log(tasks)
        setTasksToLocalStorage(tasks);

       createsHTML(userInput);
       inputBox.value = '';
    }
}

//Adds new task on btn click
btn.addEventListener("click", addsTask)

//Deletes item when close btn clicked
todoList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("close-btn")) {
       return
    }    
    e.target.parentElement.remove();
})
