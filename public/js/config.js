function getTasks() {
    let tasks =  localStorage.getItem('tasks')
    if (tasks) {
        return JSON.parse(tasks)
    }
    return [];
}
function setTask(task) {
    let tasks =  getTasks()
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
function deleteTask(index) {
    let tasks = getTasks()
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}