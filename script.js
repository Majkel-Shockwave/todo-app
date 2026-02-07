let input = document.querySelector("#taskInput");
let btn = document.querySelector("#addBtn");
let list = document.querySelector("#taskList");

let tasks = [];

let saved = localStorage.getItem("tasks");
if (saved) {
        tasks = JSON.parse(saved);
}

renderTask();

function renderTask() {
    list.innerHTML = "";
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}



function addTask() {
    let text = input.value;
    text = text.trim();
    if (text === "") {
       return
    }
    tasks.push(text);
    input.value = "";
    localStorage.setItem("tasks", JSON.stringify(tasks))
    renderTask();
}

btn.addEventListener("click", addTask)