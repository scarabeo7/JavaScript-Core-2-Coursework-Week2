let todos = [
    { task: "Wash the dishes", completed: false },
    { task: "Do the shopping", completed: false },
];

function populateTodoList() {
    let list = document.getElementById("todo-list");
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        let liEl = document.createElement("li");
        liEl.className = "list-group-item d-flex justify-content-between align-items-center";
        liEl.innerHTML = todo.task;

        let spanEl = document.createElement("span");
        spanEl.className = "badge bg-primary rounded-pill";

        let checkIcon = document.createElement("i");
        checkIcon.className = "fa fa-check";
        checkIcon.setAttribute("aria-hidden", true);
        checkIcon.addEventListener("click", () => {
            liEl.style.textDecoration = "line-through";
        });

        let deleteIcon = document.createElement("i");
        deleteIcon.className = "fa fa-trash";
        deleteIcon.setAttribute("aria-hidden", true);
        deleteIcon.addEventListener("click", () => {
            delete todos[index];
            populateTodoList();
        });

        spanEl.appendChild(checkIcon);
        spanEl.appendChild(deleteIcon);
        liEl.appendChild(spanEl);
        list.appendChild(liEl);
    });
}

populateTodoList();


function addNewTodo(event) {

    event.preventDefault();
    let taskName = document.getElementById("todoInput");
    let newTodo = { task: taskName.value, completed: false };
    todos.push(newTodo);
    taskName.value = "";

    populateTodoList();

}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
    // Write your code here...
}