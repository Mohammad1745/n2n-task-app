import nav from "../components/nav";
import alert from "../components/alert";
import {logout} from "../services/api_service";

const home = {
    setup: () => {
        home.showNavbar ()
        home.setLogoutBtnHandler()
        home.showAlert()
    },
    template:  `
        <div class="container">
            <div class="nav" id="nav"></div>
            <div id="alert_wrapper"></div>
    
            <div class="task-list card">
                <div class="card-header">
                    <span>Home Page</span>
                </div>
            </div>
        </div>
    `,

    setMenus: () => {
        let menus = document.getElementById('menus')
        if (!localStorage.getItem('token')) {
            menus.innerHTML = `
                <div class="left-menus">
                </div>
                <div class="right-menus">
                    <a href="/login" class="nav-item">Login</a>
                    <a href="/register" class="nav-item">Register</a>
                </div>
            `;
        }
    },

    setLogoutBtnHandler: () => {
        let logoutBtn = document.getElementById('logout_btn')
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async function () {
                let response = await logout()
                if (response.success) {
                    localStorage.setItem('success', response.message)
                    localStorage.removeItem('token')
                    document.location.href = window.location.origin+"/"
                } else {
                    localStorage.setItem('error', response.message)
                    home.showAlert()
                }
            })
        }
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

export default home