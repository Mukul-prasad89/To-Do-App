

document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementById("taskInput");
  let addBtn = document.getElementById("addTaskButton");
  let taskList = document.getElementById("taskList");
  let emptyState = document.getElementById("emptyState");
  let taskCount = document.getElementById("taskCount");

  addBtn.addEventListener("click", (e) => {
    

    let task = input.value.trim();
    if (task === "") return;

    // Create list item
    let li = document.createElement("li");
    li.textContent = task;
    li.className = "list-item";

    // Append to list
    taskList.appendChild(li);

    // Clear input
    input.value = "";

    // Update total count
    updateTaskCount();

    // Hide empty state
    emptyState.style.display = "none";
  });

  function updateTaskCount() {
    let count = taskList.querySelectorAll("li").length;
    taskCount.textContent = count;

    if (count === 0) emptyState.style.display = "block";
  }
});
