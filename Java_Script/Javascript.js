document.getElementById("addTaskButton").addEventListener("click", addTask);

function addTask() {
    let task = document.getElementById("taskInput").value;
    // Only add task if input is not empty
    if (task.trim() !== "") {
        let listItem = document.createElement("li");
        listItem.textContent = task;

        // Add delete button for each task
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(listItem);

        // Clear input after adding task
        document.getElementById("taskInput").value = "";
    }
}

// Add ability to press Enter to add task
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});