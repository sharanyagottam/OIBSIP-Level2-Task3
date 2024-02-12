//Elements requried:
const inputField = document.querySelector(".input-field textarea");
(todoLists = document.querySelector(".todoLists")),
  (pendingNum = document.querySelector(".pending-num")),
  (clearButton = document.querySelector(".clear-button"));

//We'll call this function while adding, deleting and checking-unchecking the task
function allTasks() {
  let tasks = document.querySelectorAll(".pending");

  //if tasks' length is 0 then padding num text content will be no, if not then pending num value will be
  pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;
  let allLists = document.querySelectorAll(".list");
  if (allLists.length > 0) {
    todoLists.style.marginTop = "20px";
    clearButton.style.pointerEvents = "auto";
    return;
  }
  todoLists.style.marginTop = "0px";
  clearButton.style.pointerEvents = "none";
}

/* add task while we put value in text area and press enter
 1)trim= trim function removes space of front and back of inputed value*/

inputField.addEventListener("keyup", (e) => {
  let inputVal = inputField.value.trim();

  //if enter button is clicked and inputed length is greater than 0.
  if (e.key === "Enter" && inputVal.length > 0) {
    let liTag = `<li class="list pending" onclick="handleStatus(this)">
    <input type="checkbox" />
    <span class="task">${inputVal}</span>
    <i class="gg-trash" onclick="deleteTask(this)" ></i>
  </li>`;

    //To insert liTag inside todoList div
    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = ""; //to remove value from input field
    allTasks();
  }
});

//checking and unchecking checkbox while we click on the task
function handleStatus(e) {
  const checkbox = e.querySelector("input");
  checkbox.checked = checkbox.checked ? false : true;
  e.classList.toggle("pending");
  allTasks();
}

//deleting all tasks while we click on trash button
function deleteTask(e) {
  e.parentElement.remove;
  allTasks();
}

//deleting all tasks while we click on clear button
clearButton.addEventListener("click", () => {
  todoLists.innerHTML = "";
  allTasks();
});
