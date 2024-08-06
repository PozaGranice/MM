document.getElementById("add-todo").addEventListener("click", function () {
  const newTodoText = document.getElementById("new-todo").value;
  if (newTodoText) {
    addTodoItem(newTodoText);
    document.getElementById("new-todo").value = "";
  }
});

function addTodoItem(text) {
  const todoList = document.getElementById("todo-list");
  const listItem = document.createElement("li");
  listItem.className = "todo-item";

  const todoText = document.createElement("input");
  todoText.type = "text";
  todoText.value = text;
  todoText.readOnly = true;

  const editBtn = document.createElement("button");
  editBtn.innerText = "Edytuj";
  editBtn.className = "edit-btn";
  editBtn.addEventListener("click", function () {
    if (editBtn.innerText === "Edytuj") {
      todoText.readOnly = false;
      todoText.focus();
      editBtn.innerText = "Zatwierdź zmniany";
    } else {
      todoText.readOnly = true;
      editBtn.innerText = "Edytuj";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Usuń";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  listItem.appendChild(todoText);
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);
  todoList.appendChild(listItem);
}
