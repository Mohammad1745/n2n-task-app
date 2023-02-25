import list from "./js/list"
import create from "./js/create";
import details from "./js/details";
import edit from "./js/edit";

document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener('popstate', renderRoute);
// Render the initial route
    renderRoute();
})
const renderRoute = () => {
    const uri = window.location.pathname
    if (uri === '/') {
        list.load()
    }
    if (uri === '/create') {
        create.load()
    }
    if (uri === '/details') {
        details.load()
    }
    if (uri === '/edit') {
        edit.load()
    }
};

