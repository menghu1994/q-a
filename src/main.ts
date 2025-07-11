import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import App from './App.vue'
import {setupRouter} from './router'
import components from "@/shared/components/index";
import directives from "@/shared/directives/index";
// import { addCollection } from 'iconify-icon'

function bootstrap() {
	const app = createApp(App);

	app.use(createPinia());
	app.use(components);
	app.use(directives);
	setupRouter(app)

	app.mount('#app')
}

bootstrap()
