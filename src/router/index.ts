import { createRouter, createWebHistory } from 'vue-router'
import type {App} from "vue";
import {basicRoutes} from "@/router/routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Luffy Admin'
  // if(to.path === '/login') { next()}
  // const token = localStorage.getItem('m-token')
  // if (!token) {
  //   next('/login')
  // } else {
    next();
  // }
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
