export const apiBase = `http://127.0.0.1:8002/api`

export async function loginUser(data) {
    try {
        let res = await axios({
            method: 'POST',
            url: `${apiBase}/login`,
            data
        })
        return res.data
    }
    catch(err) {
        return err.response.data
    }
}
export async function registerUser(data) {
    try {
        let res = await axios({
            method: 'POST',
            url: `${apiBase}/register`,
            data
        })
        return res.data
    }
    catch(err) {
        return err.response.data
    }
}
export async function getTasks() {
    try {
        let token = localStorage.getItem('token')
        if (!token) return []
        let res = await axios({
            method: 'GET',
            url: `${apiBase}/task`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.data.success) {
            return res.data.data.tasks
        } else if (res.data.message === "Unauthenticated") {
            return window.location.href = '/login'
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
        let token = localStorage.getItem('token')
        if (!token) return []
        let res = await axios({
            method: 'GET',
            url: `${apiBase}/task/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
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
export async function createTask(data) {
    try {
        let token = localStorage.getItem('token')
        if (!token) return []
        console.log(token)
        let res = await axios({
            method: 'POST',
            url: `${apiBase}/task/store`,
            headers: {
                Authorization: `Bearer ${token}`
            },
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
        let token = localStorage.getItem('token')
        if (!token) return []
        let res = await axios({
            method: 'POST',
            url: `${apiBase}/task/update`,
            headers: {
                Authorization: `Bearer ${token}`
            },
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
        let token = localStorage.getItem('token')
        if (!token) return []
        let res = await axios({
            method: 'GET',
            url: `${apiBase}/task/delete/${id}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return res.data
    }
    catch(err) {
        return err.response.data
    }
}