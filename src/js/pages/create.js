import {createTask, logout} from "../services/api_service";
import alert from "../components/alert";

const create = {
    setup: () => {
        create.setCreateBtnHandler()
        create.setLogoutBtnHandler()
    },
    template:  `
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
                    <span>Create Task</span>
                    <a href="/task">Task List</a>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" name="title" id="title" class="form-control" placeholder="Enter task title">
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <textarea name="description" id="description" class="form-control" placeholder="Enter task description"></textarea>
                        </div>
                        <button type="button" class="btn btn-primary" id="submit_btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    `,

    setCreateBtnHandler: () => {
        let createBtn = document.getElementById('submit_btn')
        createBtn.addEventListener('click', async function () {
            let titleInput = document.getElementById('title')
            let descriptionInput = document.getElementById('description')
            let task = {
                title: titleInput.value,
                description: descriptionInput.value
            }
            let response = await createTask(task)
            if (response.success) {
                localStorage.setItem('success', response.message)
                document.location.href = "/task"
            } else if (res.data.message === "Unauthenticated") {
                localStorage.removeItem('token')
                return window.location.href = '/login'
            }
            else {
                localStorage.setItem('error', response.message)
                create.showAlert()
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

export default create