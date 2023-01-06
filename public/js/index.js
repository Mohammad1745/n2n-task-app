let tasks = getTasks()

document.addEventListener('DOMContentLoaded', function () {
    loadTasks()
    setDetailsBtnHandler ()
    setEditBtnHandler()
    setDeleteBtnHandler ()
})

function loadTasks () {
    let tasksDom = document.getElementById('tasks')
    if (tasks.length===0) {
        tasksDom.innerHTML = 'No Task Available'
    }
    else {
        for (let i=0; i<tasks.length; i++) {
            appendTask(tasks[i], i)
        }
    }
}

function appendTask (task, index) {
    let tasksDom = document.getElementById('tasks')
    tasksDom.insertAdjacentHTML('beforeend', `
        <div class="task-item">
            <div class="task-title">
                <span class="details-btn cursor-pointer" data-index="${index}">${task.title}</a>
            </div>
            <div class="task-actions">
                <span class="btn btn-info edit-btn" data-index="${index}">Edit</span>
                <span class="btn btn-danger delete-btn" data-index="${index}">Delete</span>
            </div>
        </div>
    `)
}

function setDetailsBtnHandler() {
    let detailsBtns = document.querySelectorAll('.details-btn')
    for (let i=0; i<detailsBtns.length; i++) {
        detailsBtns[i].addEventListener('click', function () {
            let index = detailsBtns[i].getAttribute('data-index')
            setIndex(index)
            document.location.href = "task_details.html"
        })
    }
}

function setEditBtnHandler() {
    let editBtns = document.querySelectorAll('.edit-btn')
    for (let i=0; i<editBtns.length; i++) {
        editBtns[i].addEventListener('click', function () {
            let index = editBtns[i].getAttribute('data-index')
            setIndex(index)
            document.location.href = "edit_task.html"
        })
    }
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
