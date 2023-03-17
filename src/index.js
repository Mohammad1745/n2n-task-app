import router from './core/router'

import home from "./js/pages/home"
import list from "./js/pages/list"
import create from "./js/pages/create"
import details from "./js/pages/details"
import edit from "./js/pages/edit"
import register from "./js/pages/auth/register"
import login from "./js/pages/auth/login"

router.setup({
    '/': home,
    '/task': list,
    '/register': register,
    '/login': login,
    '/task/create': create,
    '/task/edit/{id}': edit,
    '/task/{id}': details,
})