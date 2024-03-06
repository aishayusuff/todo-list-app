const inputBox = document.getElementById("input-box");
const btn = document.querySelector(".btn");
const todoList = document.querySelector(".todo");


//Sets todoList to empty
todoList.innerHTML = '';

//adds new task to todoList
const addsTask = function() {
    let html = ''

    //edge case
    if(inputBox.value === '') {
        alert("Input cannot be left blank!")
        return;
    } else {
        html = ` 
        <li class="select-none px-3 pt-3 pb-4 ">
            <label class="">
                <input type="checkbox" class="form-checkbox h-3 w-3 cursor-pointer checked:line-through">
                <span class="select-none">${inputBox.value}</span>
            </label>
        </li>`
    }

    
    todoList.insertAdjacentHTML("afterbegin", html);
}


btn.addEventListener("click", addsTask )



