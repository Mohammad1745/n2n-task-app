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
export async function setTask(data) {
    try {
        let res = await axios({
            method: 'POST',
            url: `${apiBase}/task`,
            data
        })
        return res.data
    }
    catch(err) {
        return err.response.data
    }
}
export async function updateTask(data) {
    try {
        let res = await axios({
            method: 'POST',
            url: `${apiBase}/task/update`,
            data
        })
        return res.data
    }
    catch(err) {
        return err.response.data
    }
}
export async function deleteTask(id) {
    try {
        let res = await axios({
            method: 'GET',
            url: `${apiBase}/task/delete/${id}`
        })
        return res.data
    }
    catch(err) {
        return err.response.data
    }
}