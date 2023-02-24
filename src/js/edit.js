let index = getIndex()
if (!index) {
    document.location.href = "index.html"
}
document.addEventListener('DOMContentLoaded', function () {
    renderTask()
    setEditBtnHandler()
})

function renderTask () {
    let task = getTask(index)
    if (!task) {
        let cardBody = document.getElementById('card_body')
        cardBody.innerHTML = "<b>Task Not Found</b>"
    } else {
        let titleInput = document.getElementById('title')
        let descriptionInput = document.getElementById('description')
        titleInput.value = task.title
        descriptionInput.value = task.description
    }
}

function setEditBtnHandler () {
    let editBtn = document.getElementById('edit_btn')
    editBtn.addEventListener('click', function () {
        let titleInput = document.getElementById('title')
        let descriptionInput = document.getElementById('description')
        let task = {
            title: titleInput.value,
            description: descriptionInput.value
        }
        updateTask(task, index)
        document.location.href = "task_details.html"
    })
}

