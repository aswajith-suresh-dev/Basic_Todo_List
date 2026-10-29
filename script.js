
function addTask() {
  let taskInput = document.getElementById("task");
  let data = taskInput.value.trim();   
  if (!data) {
    alert(" Enter a task");
    return;
  }
  let li = document.createElement("li");
  li.innerHTML =`<div class="flex items-center gap-2"><span>data</span><button onClick="editTask(this)" class="p-2 border bg-emerald-500 rounded-lg text-zinc-100 cursor-pointer">Edit</button> <button onClick="deleteTask(this)" class="p-2 border bg-red-500 rounded-lg text-zinc-100 cursor-pointer">delete</button></div>`
//   li.textContent = data; 
//   let ul = document.getElementById("taskList"); 
  
//   ul.appendChild(li);
taskList.appendChild(li)
  taskInput.value = "";
}
function editTask(button)
{
    let li = button.parentNode;
    let span = li.querySelector("span")
    let currentText = span.textContent
    let newText = prompt("enter task",currentText)
    if(newText!==null && newText.trim() !== "")
    {
        span.textContent = newText;
    }
}
function deleteTask(button)
{
let li = button.closest("li")
let condition = confirm("are you sure to delete")
if(condition)
{
li.remove()
}
}