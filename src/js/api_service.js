document.addEventListener('DOMContentLoaded', () => {
    let apiBtn = document.getElementById('check_api_btn')
    apiBtn.addEventListener('click', async () => {
        try {
            let res = await axios({
                method: 'GET',
                withCredentials: true,
                url: `${apiBase}`
            })
            console.log(res)
            // res = res.data
            // if (res.success) {
            //     loadPosts()
            // } else {
            //     console.log(res.message)
            // }
        }
        catch(err) {
            console.log('err: ', err)
        }
    })
})