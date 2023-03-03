import {getTasks,setIndex,deleteTask} from './config'

const list = {
    setup: async () => {
        list.tasks = await getTasks()
        list.loadTasks()
        list.setDeleteBtnHandler ()
    },
    template:  `
        <div class="container">
            <div class="nav">
                <div class="logo">TASKS</div>
                <div class="menus">
                    <div class="left-menus">
                        <a href="" class="nav-item">Tasks</a>
                    </div>
                    <div class="right-menus">
                        <a href="" class="nav-item">Logout</a>
                    </div>
                </div>
            </div>
    
            <div class="task-list card">
                <div class="card-header">
                    <span>Task List</span>
                    <a href="/create">Create Task</a>
                </div>
                <div class="card-body">
                    <div class="tasks" id="tasks">
    
                    </div>
                </div>
            </div>
        </div>
    `,

    loadTasks: () =>  {
        let tasksDom = document.getElementById('tasks')
        if (list.tasks.length === 0) {
            tasksDom.innerHTML = 'No Task Available'
        } else {
            for (let i = 0; i < list.tasks.length; i++) {
                list.appendTask(list.tasks[i])
            }
        }
    },

    appendTask: (task)  => {
        let tasksDom = document.getElementById('tasks')
        tasksDom.insertAdjacentHTML('beforeend', `
        <div class="task-item">
            <div class="task-title">
                <a href="/${task.id}" class="details-btn cursor-pointer">${task.title}</a>
            </div>
            <div class="task-actions">
                <a  href="/edit/${task.id}" class="btn btn-info edit-btn"">Edit</a>
                <span class="btn btn-danger delete-btn" data-index="${task.id}">Delete</span>
            </div>
        </div>
    `)
    },

    setDeleteBtnHandler: () => {
        let deleteBtns = document.querySelectorAll('.delete-btn')
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener('click', function () {
                let index = deleteBtns[i].getAttribute('data-index')
                deleteTask(index)
                location.reload()
            })
        }
    }
}

export default list