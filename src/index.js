import router from './core/router'

import list from "./js/pages/list"
import create from "./js/pages/create"
import details from "./js/pages/details"
import edit from "./js/pages/edit"

router.setup({
    '/': list,
    '/create': create,
    '/edit/{id}': edit,
    '/{id}': details,
})