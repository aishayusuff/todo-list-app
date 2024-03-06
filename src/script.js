const inputBox = document.getElementById("input-box");
const btn = document.querySelector(".btn");
const todoList = document.querySelector(".todo");




btn.addEventListener("click", () => {
    const html = ` 
        <li class="select-none px-3 pt-3 pb-4 ">
            <label class="">
                <input type="checkbox" class="form-checkbox h-3 w-3 cursor-pointer checked:line-through">
                <span class="select-none">${inputBox.value}</span>
            </label>
        </li>`
    
    todoList.insertAdjacentHTML("afterbegin", html);
})



