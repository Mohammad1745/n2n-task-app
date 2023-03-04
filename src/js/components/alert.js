const alert = {
    template: `
        <div class="alert" id="alert">
            <div class="container">
                <div id="alert_message"></div>
            <div class="container">
        </div>
    `,
    render: (dom) => {
        let successMsg = localStorage.getItem('success')
        let errorMsg = localStorage.getItem('error')
        if (successMsg) {
            dom.innerHTML = alert.template
            let alertDom = document.getElementById('alert')
            let alertMessage = document.getElementById('alert_message')
            alertMessage.innerHTML = successMsg
            alertDom.classList.add('alert-success')
            localStorage.removeItem('success')

            setTimeout(() => {
                alertDom.remove()
            }, 3000)
        }
        else if (errorMsg) {
            dom.innerHTML = alert.template
            let alertDom = document.getElementById('alert')
            let alertMessage = document.getElementById('alert_message')
            alertMessage.innerHTML = errorMsg
            alertDom.classList.add('alert-danger')
            localStorage.removeItem('error')

            setTimeout(() => {
                alertDom.remove()
            }, 3000)
        }
    }
}

export default alert