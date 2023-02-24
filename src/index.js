import list from "./js/list"
document.addEventListener("DOMContentLoaded", (event) => {
    const uri = window.location.pathname
    window.addEventListener('popstate', () => renderRoute(uri));
// Render the initial route
    renderRoute(uri);
})
const renderRoute = (uri) => {
    if (uri === '/') {
        list.load(app)
    }
    if (uri === '/create') {
        const app = document.getElementById('app')
        app.innerHTML = "<h1>CREATE TASK</h1>"
    }
    if (uri === '/details') {
        const app = document.getElementById('app')
        app.innerHTML = "<h1>TASK DETAILS</h1>"
    }
    if (uri === '/edit') {
        const app = document.getElementById('app')
        app.innerHTML = "<h1>EDIT TASK</h1>"
    }

};

