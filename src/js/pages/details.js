import {deleteTask, getTask} from "../services/api_service";
import alert from "../components/alert";

const details = {
    setup: ({id}) => {
        details.id = id
        details.renderTask()
        details.setDeleteBtnHandler()
        details.showAlert()
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
            <div id="alert_wrapper"></div>
    
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

    renderTask: async () => {
        let task = await getTask(details.id)
        let editButton = document.getElementById('edit_btn')
        let deleteButton = document.getElementById('delete_btn')
        let titleDom = document.getElementById('title')
        let descriptionDom = document.getElementById('description')
        if (!task) {
            titleDom.innerHTML = "<b>Task Not Found</b>"
        } else {
            editButton.href = '/edit/'+details.id
            deleteButton.setAttribute('data-id', details.id)
            titleDom.innerHTML = task.title
            descriptionDom.innerHTML = task.description
        }
    },

    setDeleteBtnHandler: () => {
        let deleteBtn = document.getElementById('delete_btn')
        deleteBtn.addEventListener('click', async function () {
            let id = deleteBtn.getAttribute('data-id')
            let response = await deleteTask(id)
            if (response.success) {
                localStorage.setItem('success', response.message)
                document.location.href = "/"
            }
            else {
                localStorage.setItem('error', response.message)
                details.showAlert()
            }
        })
    },
    showAlert: () => {
        let alertWrapper = document.getElementById('alert_wrapper')
        alert.render(alertWrapper)
    }
}

export default details