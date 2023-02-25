export const apiBase = `http://127.0.0.1:8001/api/`

export function getTasks() {
    let tasks =  localStorage.getItem('tasks')
    if (tasks) {
        return JSON.parse(tasks)
    }
    return [];
}
export function getTask(index) {
    let tasks =  getTasks()
    if (index < tasks.length) {
        return tasks[index]
    }
    return null
}
export function setTask(task) {
    let tasks =  getTasks()
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return true
}
export function updateTask(task, index) {
    let tasks =  getTasks()
    if (index >= tasks.length) {
        return false
    }
    tasks[index] = task
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return true
}
export function deleteTask(index) {
    let tasks = getTasks()
    if (index >= tasks.length) {
        return false
    }
    tasks.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(tasks))
    return true
}
export function getIndex() {
    let index = localStorage.getItem('task-index')
    return index ? index : null
}
export function setIndex(index) {
    localStorage.setItem('task-index', index)
    return true
}