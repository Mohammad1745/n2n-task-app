import router from './core/router'

import home from "./js/pages/home"
import list from "./js/pages/task/list"
import create from "./js/pages/task/create"
import details from "./js/pages/task/details"
import edit from "./js/pages/task/edit"
import register from "./js/pages/auth/register"
import login from "./js/pages/auth/login"
import verification from "./js/pages/auth/verification";

router.setup({
    '/': home,
    '/register': register,
    '/verification': verification,
    '/login': login,
    '/task': list,
    '/task/create': create,
    '/task/edit/{id}': edit,
    '/task/{id}': details,
})