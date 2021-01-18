const todos = [
  { todo: "Wash the dishes" },
  { todo: "Walk the dog" },
  { todo: "Learn javascript" },
  { todo: "Go shopping" },
  { todo: "Wash the dishes" },
  { todo: "Walk the dog" },
  { todo: "Learn javascript" },
  { todo: "Go shopping" },
  { todo: "Wash the dishes" },
  { todo: "Walk the dog" },
  { todo: "Learn javascript" },
  { todo: "Go shopping" },
];

function todoList(todos) {
  let div = document.getElementById("content");
  let h1 = document.createElement("h1");
  h1.innerText = "To Do List";
  div.appendChild(h1);
  let ul = document.createElement("ul");
  div.appendChild(ul);
  div.style.margin = "2em";
  div.style.fontSize = "1.5em";

  todos.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item.todo;
    ul.appendChild(li);
  });

  let li = document.querySelectorAll("li");
  li.forEach((item) => {
    item.addEventListener("click", function () {
      if (item.style.textDecoration === "line-through") {
        item.style.textDecoration = "";
      } else {
        item.style.textDecoration = "line-through";
      }
    });
  });
};

todoList(todos);


