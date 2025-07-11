import auth from "@/shared/directives/auth";

const directives: any = {
    auth
}

export default {
    install(app: any) {
        Object.keys(directives).forEach(key => {
            app.directive(key, directives[key])
        })
    }
}
