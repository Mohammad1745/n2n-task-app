import {deleteTask, getTask} from "./config";

const details = {
    setup: ({id}) => {
        details.index = id
        details.renderTask()
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
                        <a class="btn btn-info" id="edit_btn">Edit</a>
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
        let editButton = document.getElementById('edit_btn')
        let titleDom = document.getElementById('title')
        let descriptionDom = document.getElementById('description')
        if (!task) {
            titleDom.innerHTML = "<b>Task Not Found</b>"
        } else {
            editButton.href = '/edit/'+details.index
            titleDom.innerHTML = task.title
            descriptionDom.innerHTML = task.description
        }
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