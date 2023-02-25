const router = {
    setup: (routes) => {
        router.routes = routes
        document.addEventListener("DOMContentLoaded", (event) => {
            window.addEventListener('popstate', router.renderRoute);
            router.renderRoute();
        })
    },
    renderRoute: () => {
        let uri = window.location.pathname
        for (let key of Object.keys(router.routes)) {
            let component = router.routes[key]
            let urlParams = {}
            let varIndex = key.indexOf('/{id}')
            if (varIndex > -1) {
                key = key.substring(0,varIndex)
                urlParams.id = uri.substring(varIndex+1)
                uri = uri.substring(0,varIndex)
            }
            console.log(uri, key, urlParams)
            if (uri === key) {
                const app = document.getElementById('app')
                app.innerHTML = component.template
                component.setup(urlParams)
                break;
            }
        }
    }
}

export default router