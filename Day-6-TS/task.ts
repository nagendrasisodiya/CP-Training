const inputEl = document.getElementById("todo-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const listEl = document.getElementById("todo-list") as HTMLUListElement;

function addTodo() {
  const task = inputEl.value.trim();
  if (task === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = task;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.className = "done-btn";
  doneBtn.onclick = () => {
    span.classList.toggle("completed"); 
  };

  const pendingBtn = document.createElement("button");
  pendingBtn.textContent = "Pending";
  pendingBtn.className = "pending-btn";
  pendingBtn.onclick = () => {
    span.classList.toggle("pending");
    span.classList.remove("completed");
  };

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(pendingBtn)
  li.appendChild(doneBtn);
  li.appendChild(delBtn);
  listEl.appendChild(li);

  inputEl.value = "";
}

addBtn.addEventListener("click", addTodo);
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});
