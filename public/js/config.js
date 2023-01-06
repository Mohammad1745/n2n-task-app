function getTasks() {
    let tasks =  localStorage.getItem('tasks')
    if (tasks) {
        return JSON.parse(tasks)
    }
    return [];
}
function getTask(index) {
    let tasks =  getTasks()
    if (index < tasks.length) {
        return tasks[index]
    }
    return null
}
function setTask(task) {
    let tasks =  getTasks()
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return true
}
function updateTask(task, index) {
    let tasks =  getTasks()
    if (index >= tasks.length) {
        return false
    }
    tasks[index] = task
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return true
}
function deleteTask(index) {
    let tasks = getTasks()
    if (index >= tasks.length) {
        return false
    }
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return true
}
function getIndex() {
    let index = localStorage.getItem('task-index')
    return index ? index : null
}
function setIndex(index) {
    localStorage.setItem('task-index', index)
    return true
}