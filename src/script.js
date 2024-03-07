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
        <label>
            <input type="checkbox" class="form-checkbox h-3 w-3 cursor-pointer checked:line-through">
            <span class="select-none">${inputBox.value}</span>
        </label>`

        //Creates li element and add class styling
        let li = document.createElement("li");
        li.classList.add("select-none px-3 pt-3 pb-4");

        //Set innerHTML of new li element to html
        li.innerHTML = html;

        //Creates new span for delete btn and adds after text span
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.querySelector("span").appendChild(span);
    }

    todoList.insertAdjacentHTML("afterbegin", html);
    inputBox.value = '';
}


btn.addEventListener("click", addsTask )



