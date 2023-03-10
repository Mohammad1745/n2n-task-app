import router from './core/router'

import list from "./js/pages/list"
import create from "./js/pages/create"
import details from "./js/pages/details"
import edit from "./js/pages/edit"
import register from "./js/pages/auth/register";
import login from "./js/pages/auth/login";

router.setup({
    '/': list,
    '/register': register,
    '/login': login,
    '/create': create,
    '/edit/{id}': edit,
    '/{id}': details,
})