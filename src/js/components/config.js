export const apiBase = `http://127.0.0.1:8001/api`

export async function getTasks() {
    try {
        let res = await axios({
            method: 'GET',
            url: `${apiBase}/task`
        })
        if (res.data.success) {
            return res.data.data.tasks
        } else {
            console.log(res.data.message)
            return []
        }
    }
    catch(err) {
        console.log('err: ', err)
        return []
    }
}
export async function getTask(id) {
    try {
        let res = await axios({
            method: 'GET',
            url: `${apiBase}/task/${id}`
        })
        if (res.data.success) {
            return res.data.data.task
        } else {
            console.log(res.data.message)
            return null
        }
    }
    catch(err) {
        console.log('err: ', err)
        return null
    }
}
export async function setTask(task) {
    try {
        let res = await axios({
            method: 'POST',
            url: `${apiBase}/task`,
            data: task
        })
        if (res.data.success) {
            console.log(res.data.message)
        } else {
            console.log(res.data.message)
        }
    }
    catch(err) {
        console.log('err: ', err)
    }
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