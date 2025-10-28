const inputEl = document.getElementById("todoInput");
const addBtn = document.getElementById("addTask");
const listEl = document.getElementById("taskItem");


addBtn.addEventListener("click", () => {
    const taskText = inputEl.value.trim();

    if (taskText === "") {
     alert("pls enter a task");
     return;
    }

    const li = document.createElement("li"); 
      li.textContent = taskText;
     
      const delBtn = document.createElement("button");
      delBtn.textContent = "delete";
      delBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(delBtn);
      listEl.appendChild(li);

      inputEl.value = "";



});



const box = document.getElementById("myPrompt");

box.addEventListener("click", () => {
    const box = prompt("enter name here");

    if (box === "chris") {
        alert("your name is chris");
    } else {
        alert("your name is not chris");
    }
})

