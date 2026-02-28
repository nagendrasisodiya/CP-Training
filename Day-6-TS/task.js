var inputEl = document.getElementById("todo-input");
var addBtn = document.getElementById("add-btn");
var listEl = document.getElementById("todo-list");
function addTodo() {
    var task = inputEl.value.trim();
    if (task === "")
        return;
    var li = document.createElement("li");
    li.className = "todo-item";
    var span = document.createElement("span");
    span.textContent = task;
    var doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "done-btn";
    doneBtn.onclick = function () {
        span.classList.toggle("completed");
    };
    var pendingBtn = document.createElement("button");
    pendingBtn.textContent = "Pending";
    pendingBtn.className = "pending-btn";
    pendingBtn.onclick = function () {
        span.classList.toggle("pending");
        span.classList.remove("completed");
    };
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";
    delBtn.onclick = function () { return li.remove(); };
    li.appendChild(span);
    li.appendChild(pendingBtn);
    li.appendChild(doneBtn);
    li.appendChild(delBtn);
    listEl.appendChild(li);
    inputEl.value = "";
}
addBtn.addEventListener("click", addTodo);
inputEl.addEventListener("keypress", function (e) {
    if (e.key === "Enter")
        addTodo();
});
