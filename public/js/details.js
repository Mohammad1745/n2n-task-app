let index = getIndex()
if (!index) {
    document.location.href = "index.html"
}
document.addEventListener('DOMContentLoaded', function () {
    renderTask()
    setEditBtnHandler()
    setDeleteBtnHandler()
})

function renderTask () {
    let task = getTask(index)
    let titleDom = document.getElementById('title')
    let descriptionDom = document.getElementById('description')
    if (!task) {
        titleDom.innerHTML = "<b>Task Not Found</b>"
    } else {
        titleDom.innerHTML = task.title
        descriptionDom.innerHTML = task.description
    }
}


function setEditBtnHandler() {
    let editBtn = document.getElementById('edit_btn')
    editBtn.addEventListener('click', function () {
        setIndex(index)
        document.location.href = "edit_task.html"
    })
}

function setDeleteBtnHandler() {
    let deleteBtn = document.getElementById('delete_btn')
    deleteBtn.addEventListener('click', function () {
        deleteTask(index)
        document.location.href = "index.html"
    })
}