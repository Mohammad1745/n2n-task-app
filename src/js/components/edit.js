import {getTask, updateTask} from "./config";

const edit = {
    setup: ({id}) => {
        edit.index = id
        edit.renderTask()
        edit.setEditBtnHandler()
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
                        <button type="button" class="btn btn-primary" id="edit_btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    `,

    renderTask: () => {
        let task = getTask(edit.index)
        if (!task) {
            let cardBody = document.getElementById('card_body')
            cardBody.innerHTML = "<b>Task Not Found</b>"
        } else {
            let titleInput = document.getElementById('title')
            let descriptionInput = document.getElementById('description')
            titleInput.value = task.title
            descriptionInput.value = task.description
        }
    },

    setEditBtnHandler: () => {
        let editBtn = document.getElementById('edit_btn')
        editBtn.addEventListener('click', function () {
            let titleInput = document.getElementById('title')
            let descriptionInput = document.getElementById('description')
            let task = {
                title: titleInput.value,
                description: descriptionInput.value
            }
            updateTask(task, edit.index)
            document.location.href = "/"+edit.index
        })
    }
}

export default edit