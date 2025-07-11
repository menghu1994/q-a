const components: any = {

}

export default {
    install(app: any) {

        Object.keys(components).forEach(key => {
            app.component(key, components[key])
        })
    }
}
