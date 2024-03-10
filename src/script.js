const inputBox = document.getElementById("input-box");
const btn = document.querySelector(".btn");
const todoList = document.querySelector(".todo");
const title = document.querySelector(".title")

//Prompt for user name
let userName = '';
do {
    userName = prompt("Hi new user! can you enter your name, please?");
    if (!userName) {
        alert("You cannot use the To-Do list without providing a name.");
    }

    if (!/^[a-zA-Z]+$/.test(userName)) {
        alert("Please enter a valid name containing ONLY letters of the alphabet.");
    }
} while (!userName || !/^[a-zA-Z]+$/.test(userName));

//Insert username and retains existing img element
const usernameTextNode = document.createTextNode(`${userName}'s `)
title.insertBefore(usernameTextNode, title.firstChild);


//Todo list logic
const getTasksFromLocalStorage = function () {
  const taskJSON = localStorage.getItem("tasks");
  const task = JSON.parse(taskJSON);
  return task || [];
};

const setTasksToLocalStorage = function (tasks) {
  const taskJSON = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskJSON);
};

const removesTaskFromLocalStorage = function (taskIndex) {
  const tasks = getTasksFromLocalStorage();

  tasks.splice(taskIndex, 1);
  setTasksToLocalStorage(tasks)
};

const displayTasksFromLocalStorage = function () {
  const tasks = getTasksFromLocalStorage();

  if (tasks.length > 0) {
    tasks.forEach((task, index) => {
      createsHTML(task, index);
    });
  }
};

const createsHTML = function (userInput, index) {
  const html = ` 
    <label>
        <input type="checkbox" class="form-checkbox h-3 w-3 mr-5 cursor-pointer checked:line-through">
        <span class="select-none cursor-pointer">${userInput}</span>
    </label>`;

  //Creates li element and add class styling
  let li = document.createElement("li");
  li.classList.add(
    "select-none",
    "px-3",
    "pt-3",
    "flex",
    "justify-between",
    "items-center"
  );

  //sets task index as an attribute 
  li.setAttribute("data-task-index", index)

  //Set innerHTML of new li element to html
  li.innerHTML = html;

  //Creates new span for delete btn and adds after text span
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.classList.add("close-btn", "text-tert-color", "text-center");
  li.appendChild(span);

  return todoList.insertAdjacentElement("afterbegin", li);
};

//adds new task to todoList
const addsTask = function () {
  let userInput = inputBox.value.trim();

  if (userInput === "") {
    alert("Input cannot be left blank!");
    return;
  } else {
    //stores input in local storage
    let tasks = getTasksFromLocalStorage();
    tasks.push(userInput);

    setTasksToLocalStorage(tasks);

    createsHTML(userInput, tasks.length - 1);
    inputBox.value = "";
  }
};

displayTasksFromLocalStorage();
//Adds new task on btn click
btn.addEventListener("click", addsTask);

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addsTask();
  }
});

//Deletes item when close btn clicked
todoList.addEventListener("click", (e) => {
  if (!e.target.classList.contains("close-btn")) {
    return;
  }
  
  const taskIndex = e.target.parentElement.getAttribute("data-task-index")
  removesTaskFromLocalStorage(taskIndex);

  e.target.parentElement.remove();
});
