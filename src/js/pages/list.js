import {getTasks,deleteTask} from '../services/api_service'
import alert from "../components/alert";

const list = {
    setup: async () => {
        list.tasks = await getTasks()
        list.loadTasks()
        list.setDeleteBtnHandler ()
        list.showAlert()
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
            <div id="alert_wrapper"></div>
    
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
                <span class="btn btn-danger delete-btn" data-id="${task.id}">Delete</span>
            </div>
        </div>
    `)
    },

    setDeleteBtnHandler: () => {
        let deleteBtns = document.querySelectorAll('.delete-btn')
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].addEventListener('click', async function () {
                let id = deleteBtns[i].getAttribute('data-id')
                let response = await deleteTask(id)
                if (response.success) {
                    localStorage.setItem('success', response.message)
                    location.reload()
                }
                else {
                    localStorage.setItem('error', response.message)
                    list.showAlert()
                }
            })
        }
    },

    showAlert: () => {
        let alertWrapper = document.getElementById('alert_wrapper')
        alert.render(alertWrapper)
    }
}

export default list