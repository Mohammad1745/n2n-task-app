import {loginUser} from "../../services/api_service";
import alert from "../../components/alert";
import nav from "../../components/nav";

const login = {
    setup: () => {
        login.showNavbar()
        login.setSubmitBtnHandler()
        login.showAlert()
    },
    template:  `
        <div class="container">
            <div class="nav" id="nav"></div>
            <div id="alert_wrapper"></div>
    
            <div class="task-list card">
                <div class="card-header">
                    <span>Login</span>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Enter password">
                        </div>
                        <button type="button" class="btn btn-primary" id="submit_btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    `,

    setSubmitBtnHandler: () => {
        let loginBtn = document.getElementById('submit_btn')
        loginBtn.addEventListener('click', async function () {
            let emailInput = document.getElementById('email')
            let passwordInput = document.getElementById('password')
            let data = {
                email: emailInput.value,
                password: passwordInput.value,
            }
            let response = await loginUser(data)
            if (response.success) {
                localStorage.setItem('success', response.message)
                localStorage.setItem('token', response.data.authorization.token)
                document.location.href = window.location.origin+"/"
            }
            else {
                localStorage.setItem('error', response.message)
                login.showAlert()
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

export default login