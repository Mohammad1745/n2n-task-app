let tasks = getTasks()

let tasksDom = document.getElementById('tasks')

if (tasks.length===0) {
    tasksDom.innerHTML = 'No Task Available'
}
else {
    for (let i=0; i<tasks.length; i++) {
        appendTask(tasks[i], i)
    }
}
setDeleteBtnHandler ()

function appendTask(task, index) {
    tasksDom.insertAdjacentHTML('beforeend', `
        <div class="task-item">
            <div class="task-title">
                <a href="task_details.html">${task.title}</a>
            </div>
            <div class="task-actions">
                <a href="edit_task.html" class="btn btn-info">Edit</a>
                <span class="btn btn-danger delete-btn" data-index="${index}">Delete</span>
            </div>
        </div>
    `)
}

function setDeleteBtnHandler() {
    let deleteBtns = document.querySelectorAll('.delete-btn')
    for (let i=0; i<deleteBtns.length; i++) {
        deleteBtns[i].addEventListener('click', function () {
            let index = deleteBtns[i].getAttribute('data-index')
            deleteTask(index)
            location.reload()
        })
    }
}
