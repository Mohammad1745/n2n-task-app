import {verifyUser} from "../../services/api_service";
import alert from "../../components/alert";
import nav from "../../components/nav";

const verification = {
    setup: () => {
        verification.showNavbar()
        verification.setSubmitBtnHandler()
        verification.showAlert()
    },
    template:  `
        <div class="container">
            <div class="nav" id="nav"></div>
            <div id="alert_wrapper"></div>
    
            <div class="task-list card">
                <div class="card-header">
                    <span>Verification</span>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label>Code</label>
                            <input type="text" name="code" id="code" class="form-control" placeholder="Enter code">
                        </div>
                        <button type="button" class="btn btn-primary" id="submit_btn">Verify</button>
                    </form>
                </div>
            </div>
        </div>
    `,

    setSubmitBtnHandler: () => {
        let loginBtn = document.getElementById('submit_btn')
        loginBtn.addEventListener('click', async function () {
            let emailInput = document.getElementById('email')
            let codeInput = document.getElementById('code')
            let data = {
                email: emailInput.value,
                code: codeInput.value,
            }
            let response = await verifyUser(data)
            if (response.success) {
                localStorage.setItem('success', response.message)
                document.location.href = window.location.origin+"/login"
            }
            else {
                localStorage.setItem('error', response.message)
                verification.showAlert()
            }
        })
    },

    showNavbar: () => {
        let navDom = document.getElementById('nav')
        nav.render(navDom)
    },

    showAlert: () => {
        let alertWrapper = document.getElementById('alert_wrapper')
        alert.render(alertWrapper)
    }
}

export default verification