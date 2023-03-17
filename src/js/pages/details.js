import {deleteTask, getTask, logout} from "../services/api_service";
import alert from "../components/alert";

const details = {
    setup: ({id}) => {
        details.id = id
        details.renderTask()
        details.setDeleteBtnHandler()
        details.setLogoutBtnHandler()
        details.showAlert()
    },

    template: `
         <div class="container">
            <div class="nav">
                <div class="logo">TASKS</div>
                <div class="menus" id="menus">
                    <div class="left-menus">
                        <a href="/task" class="nav-item">Tasks</a>
                    </div>
                    <div class="right-menus">
                        <span class="nav-item cursor-pointer" id="logout_btn">Logout</span>
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
            editButton.href = '/task/edit/'+details.id
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
                document.location.href = "/list"
            } else if (res.data.message === "Unauthenticated") {
                localStorage.removeItem('token')
                return window.location.href = '/login'
            } else {
                localStorage.setItem('error', response.message)
                details.showAlert()
            }
        })
    },

    setLogoutBtnHandler: () => {
        let logoutBtn = document.getElementById('logout_btn')
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async function () {
                let response = await logout()
                if (response.success) {
                    localStorage.setItem('success', response.message)
                    localStorage.removeItem('token')
                    document.location.href = "/"
                } else {
                    localStorage.setItem('error', response.message)
                    home.showAlert()
                }
            })
        }
    },
    showAlert: () => {
        let alertWrapper = document.getElementById('alert_wrapper')
        alert.render(alertWrapper)
    }
}

export default details