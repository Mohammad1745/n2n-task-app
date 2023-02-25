import {getTasks,setIndex,deleteTask} from './config'

const list = {
    load: () => {
        list.tasks = getTasks()
        const app = document.getElementById('app')
        app.innerHTML = list.template
        list.loadTasks()
        list.setDetailsBtnHandler ()
        list.setEditBtnHandler()
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
                    <button id="check_api_btn">Check API</button>
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
                list.appendTask(list.tasks[i], i)
            }
        }
    },

    appendTask: (task, index)  => {
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
    },

    setDetailsBtnHandler: () => {
        let detailsBtns = document.querySelectorAll('.details-btn')
        for (let i = 0; i < detailsBtns.length; i++) {
            detailsBtns[i].addEventListener('click', function () {
                let index = detailsBtns[i].getAttribute('data-index')
                setIndex(index)
                document.location.href = "/details"
            })
        }
    },

    setEditBtnHandler: () => {
        let editBtns = document.querySelectorAll('.edit-btn')
        for (let i = 0; i < editBtns.length; i++) {
            editBtns[i].addEventListener('click', function () {
                let index = editBtns[i].getAttribute('data-index')
                setIndex(index)
                document.location.href = "/edit"
            })
        }
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