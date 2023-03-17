const nav = {
    template: `
        <div class="logo">TASKS</div>
        <div class="menus" id="menus">
            
        </div>
    `,
    render: (dom) => {
        dom.innerHTML = nav.template
        let menus = document.getElementById('menus')
        if (localStorage.getItem('token')) {
            menus.innerHTML = `
                <div class="left-menus">
                </div>
                <div class="right-menus">
                    <a href="/task" class="nav-item">Tasks</a>
                    <span class="nav-item cursor-pointer" id="logout_btn" style="font-weight: bold">Logout</span>
                </div>
            `
        }
        else {
            menus.innerHTML = `
                <div class="left-menus">
                </div>
                <div class="right-menus">
                    <a href="/login" class="nav-item">Login</a>
                    <a href="/register" class="nav-item">Register</a>
                </div>
            `;
        }
    }
}

export default nav