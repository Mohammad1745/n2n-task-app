import {registerUser} from "../../services/api_service";
import alert from "../../components/alert";
import nav from "../../components/nav";

const register = {
    setup: () => {
        register.showNavbar()
        register.setSubmitBtnHandler()
    },
    template:  `
        <div class="container">
            <div class="nav" id="nav"></div>
            <div id="alert_wrapper"></div>
    
            <div class="task-list card">
                <div class="card-header">
                    <span>Register</span>
                </div>
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" id="name" class="form-control" placeholder="Enter name">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" name="email" id="email" class="form-control" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Enter password">
                        </div>
                        <div class="form-group">
                            <label>Passport Cofirmation</label>
                            <input type="password" name="password_confirmation" id="password_confirmation" class="form-control" placeholder="Enter password again">
                        </div>
                        <button type="button" class="btn btn-primary" id="submit_btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    `,

    setSubmitBtnHandler: () => {
        let registerBtn = document.getElementById('submit_btn')
        registerBtn.addEventListener('click', async function () {
            let nameInput = document.getElementById('name')
            let emailInput = document.getElementById('email')
            let passwordInput = document.getElementById('password')
            let passwordConfirmationInput = document.getElementById('password_confirmation')
            let data = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                password_confirmation: passwordConfirmationInput.value
            }
            let response = await registerUser(data)
            if (response.success) {
                localStorage.setItem('success', response.message)
                document.location.href = window.location.origin+"/verification"
            }
            else {
                localStorage.setItem('error', response.message)
                register.showAlert()
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

export default register