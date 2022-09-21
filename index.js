const newTaskForm = document.getElementById("new-task-form")
const formTaskName = document.getElementById("taskname")
const formTaskDesc = document.getElementById("taskdesc")
const formTaskDate = document.getElementById("taskdate")

const createTaskBtn = document.getElementById("create-task-btn")



const taskList = document.getElementById("task-list")
const completedTaskList = document.getElementById("completed-task-list")


createTaskBtn.addEventListener("click", function() {
    createTask(formTaskName.value, formTaskDesc.value, formTaskDate.value)
    renderTasks()
    newTaskForm.reset()
})

let taskArray = []


function renderTasks() {
    taskList.innerHTML = ""
    
    for (let i=0; i < taskArray.length; i++) {
        taskList.innerHTML += `
        <li>
            Task: ${taskArray[i].name}<br/>
            Description: ${taskArray[i].description}<br/>
            Date: ${taskArray[i].date}
        </li>`
    }
}

function createTask(name, description, date) {
    let newTask = {
        "name": name,
        "description": description,
        "date": new Date(date),
        "completed": false
    }
    taskArray.push(newTask)
}

function populateTaskArray(data) {
    // refactor this function to initialise taskArray with stored data
    let newTask = {
        "name": "Sample",
        "description": "Test sentence for description",
        "date": new Date("2022-09-21"),
        "completed": false
    }
    taskArray.push(newTask)
}

populateTaskArray()
renderTasks()
