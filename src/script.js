const inputBox = document.getElementById("input-box");
const btn = document.querySelector(".btn");
const todoList = document.querySelector(".todo");


//Sets todoList to empty
todoList.innerHTML = '';

//adds new task to todoList
const addsTask = function() {

    //edge case
    if(inputBox.value === '') {
        alert("Input cannot be left blank!")
        return;
    } else {
        const html = ` 
        <label class="flex items-center">
            <input type="checkbox" class="form-checkbox h-3 w-3 mr-5 cursor-pointer checked:line-through">
            <span class="select-none">${inputBox.value}</span>
        </label>`

        //Creates li element and add class styling
        let li = document.createElement("li");
        li.classList.add("select-none", "px-3", "pt-3", "flex", "justify-between", "items-center");

        //Set innerHTML of new li element to html
        li.innerHTML = html;

        //Creates new span for delete btn and adds after text span
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.classList.add("close-btn","text-tert-color")
        li.appendChild(span);

        todoList.insertAdjacentElement("afterbegin", li);
        inputBox.value = '';
    }
}


btn.addEventListener("click", addsTask )



