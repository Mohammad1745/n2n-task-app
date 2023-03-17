import {getTask, logout, updateTask} from "../services/api_service";
import alert from "../components/alert";

const edit = {
    setup: async ({id}) => {
        edit.id = id
        edit.renderTask()
        edit.setLogoutBtnHandler()
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
                    <span>Edit Task</span>
                </div>
                <div class="card-body" id="card_body">
                    <form>
                        <div class="form-group">
                            <label>Title</label>
                            <input type="text" name="title" id="title" class="form-control" value="" placeholder="Enter task title">
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

    renderTask: async () => {
        let task = await getTask(edit.id)
        if (!task) {
            let cardBody = document.getElementById('card_body')
            cardBody.innerHTML = "<b>Task Not Found</b>"
        } else {
            let titleInput = document.getElementById('title')
            let descriptionInput = document.getElementById('description')
            titleInput.value = task.title
            descriptionInput.value = task.description

            edit.setEditBtnHandler()
        }
    },

    setEditBtnHandler: () => {
        let editBtn = document.getElementById('submit_btn')
        editBtn.addEventListener('click', async function () {
            let titleInput = document.getElementById('title')
            let descriptionInput = document.getElementById('description')
            let task = {
                id: edit.id,
                title: titleInput.value,
                description: descriptionInput.value
            }
            let response = await updateTask(task)
            if(response.success) {
                localStorage.setItem('success', response.message)
                document.location.href = "/task/" + edit.id
            } else if (res.data.message === "Unauthenticated") {
                localStorage.removeItem('token')
                return window.location.href = '/login'
            } else {
                localStorage.setItem('error', response.message)
                edit.showAlert()
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

export default edit