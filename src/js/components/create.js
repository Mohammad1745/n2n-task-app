import {setTask} from "./config";

const create = {
    setup: () => {
        create.setCreateBtnHandler()
    },
    template:  `
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
                    <span>Create Task</span>
                    <a href="/">Task List</a>
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
                        <button type="button" class="btn btn-primary" id="create_btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    `,

    setCreateBtnHandler: () => {
        let createBtn = document.getElementById('create_btn')
        createBtn.addEventListener('click', function () {
            let titleInput = document.getElementById('title')
            let descriptionInput = document.getElementById('description')
            let task = {
                title: titleInput.value,
                description: descriptionInput.value
            }
            setTask(task)
            document.location.href = '/'
        })
    }
}

export default create