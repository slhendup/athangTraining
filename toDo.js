let tasks = [];

function addToList() {
  const input = document.getElementById("name");
  const text = input.value;

  if (!text) {
    alert("The task cannot be empty");
    return;
  }
  const task = {
    id: Date.now(),
    createdDate: new Date().toISOString(),
    text: text,
  };
 
  tasks.push(task);
  renderTasks();
  input.value = "";
}


function formatDate(iso) {
  console.log(iso);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  return new Date(iso).toLocaleString(undefined, options);
}

function renderTasks() {
  const list = document.getElementById("tasklist");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement("li");

    const date = document.createElement("span");
    date.textContent = `${formatDate(task.createdDate)}-`;

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    
    const button = document.createElement("button");
    button.textContent= "Remove";
    
    button.onclick=function(){
        deleteTask(task.id);
    };


    
    li.appendChild(date);
    li.appendChild(taskText);
    li.appendChild(button)
    list.appendChild(li);
  }
}

function deleteTask(id) {
    tasks=tasks.filter(function (item){
        if (item.id === id){
            return false;
        } else{
            return true;
        }
    });
    renderTasks();
}

console.log("1");
console.log("2");
console.log("3");

console.log("food is ready");
setTimeout(() =>{
  console.log("okay coming");
}, 2000);
