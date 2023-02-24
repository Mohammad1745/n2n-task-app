document.addEventListener('DOMContentLoaded', function () {
    setCreateBtnHandler()
})

function setCreateBtnHandler () {
    let createBtn = document.getElementById('create_btn')
    createBtn.addEventListener('click', function () {
        let titleInput = document.getElementById('title')
        let descriptionInput = document.getElementById('description')
        let task = {
            title: titleInput.value,
            description: descriptionInput.value
        }
        setTask(task)
        document.location.href = 'index.html'
    })
}