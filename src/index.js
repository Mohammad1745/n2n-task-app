import router from './core/router'

import list from "./js/components/list"
import create from "./js/components/create"
import details from "./js/components/details"
import edit from "./js/components/edit"

router.setup({
    '/': list,
    '/create': create,
    '/edit/{id}': edit,
    '/{id}': details,
})