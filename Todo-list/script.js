

let tasks = ["do homework" , "clean bathroom drawer"];
function showTasks() {
	let taskListUl = document.getElementById("task-list");
	taskListUl.innerHTML = "";
	
	for(let i = 0; i < tasks.length; i++){
		let li = document.createElement("li");
		li.innerText = tasks[i];
		taskListUl.appendChild(li);
	}
}

function addTask() {
	let task = prompt("Enter your task: ");
	tasks.push(task);
	showTasks();
}

function clearTasks() {
	tasks = [];
	showTasks();
}


function removeTask(){
	let taskRemove = Number(prompt("Enter the task # you want to remove: "));
	let taskRemove1 = taskRemove - 1;
	tasks.splice(taskRemove1, 1);
	showTasks();
}


function highlightTask(){
	let taskImportant = Number(prompt("Enter the task # you want to prioritze: "));
	let taskImportant1 = taskImportant - 1;
	let addBack = tasks[taskImportant1].style.color = "yellow";
	tasks.splice(taskImportant1,1, addBack);
	showTasks();
	
}