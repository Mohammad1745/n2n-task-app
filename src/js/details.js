import {deleteTask, getIndex, getTask, setIndex} from "./config";

const details = {
    load : () => {
        details.index = getIndex()
        if (!details.index ) {
            document.location.href = "/"
        }
        const app = document.getElementById('app')
        app.innerHTML = details.template
        details.renderTask()
        details.setEditBtnHandler()
        details.setDeleteBtnHandler()
    },

    template: `
         <div class="container">
            <div class="nav">
                <div class="logo">TASKS</div>
                <div class="menus">
                    <div class="left-menus">
                        <a href="/" class="nav-item">Tasks</a>
                    </div>
                    <div class="right-menus">
                        <a href="" class="nav-item">Logout</a>
                    </div>
                </div>
            </div>
    
            <div class="task-list card">
                <div class="card-header">
                    <span>Task Details</span>
                    <div class="task-actions">
                        <span class="btn btn-info" id="edit_btn">Edit</span>
                        <span class="btn btn-danger" id="delete_btn">Delete</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-header" id="title">Task Title</div>
                    <div class="card-body" id="description">-</div>
                </div>
            </div>
        </div>
    `,

    renderTask: () => {
        let task = getTask(details.index)
        let titleDom = document.getElementById('title')
        let descriptionDom = document.getElementById('description')
        if (!task) {
            titleDom.innerHTML = "<b>Task Not Found</b>"
        } else {
            titleDom.innerHTML = task.title
            descriptionDom.innerHTML = task.description
        }
    },


    setEditBtnHandler: () => {
        let editBtn = document.getElementById('edit_btn')
        editBtn.addEventListener('click', function () {
            setIndex(details.index)
            document.location.href = "/edit"
        })
    },

    setDeleteBtnHandler: () => {
        let deleteBtn = document.getElementById('delete_btn')
        deleteBtn.addEventListener('click', function () {
            deleteTask(details.index)
            document.location.href = "/"
        })
    }
}

export default details