let taskInputvalue = document.getElementById("new-task");
let addtaskBtn = document.getElementById("addtask");
 

function getStorage(){
    let tasksobj;
    let webTasks = localStorage.getItem('localtask');
    if(webTasks == null){
        tasksobj = [];
    }else{
        tasksobj = JSON.parse(webTasks);
    }
    return tasksobj;
}

function setStorage(data){
    localStorage.setItem('localtask',JSON.stringify(data))
}

addtaskBtn.addEventListener('click',addToStorage)

function addToStorage(){
    let addTaskInputVal = taskInputvalue.value;
    let tasksobj = getStorage();
    tasksobj.push(addTaskInputVal);
    setStorage(tasksobj);
    taskInputvalue.value = "";
    displayTask();
}

function displayTask()
{
    let addedTaskslist = document.getElementById("task");
    let tasksobj = getStorage();
    let html = "";
    tasksobj.forEach((item,index) => {
        html +=  `<div class="list">
        <div id="task">
            <div id ="Tasklist">
            ${index + 1}.${item}
            <input type="text" id="old-task">
            <div class ="action">
                <button class ="delete" onclick="deleteTasks(${index})">Delete</button>
                <button class ="edit" onclick="editTasks(${index})">Edit</button>
            </div>
            </div>
        </div>
    </div>`
    })
    addedTaskslist.innerHTML = html;
}

function deleteTasks(index){
    let tasksobj = getStorage();
    tasksobj.splice(index,1);
    setStorage(tasksobj);
    displayTask();
}

function editTasks(index){
    let tasksobj = getStorage();
    taskInputvalue.value = tasksobj[index];
    let save = document.getElementById('save');
    save.value = index;
    addtaskBtn.style.display = "none";
    saveTaskBtn.style.display = "block"
}
