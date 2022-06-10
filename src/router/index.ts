import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../view/index/LoginPage.vue'
import RootPage from '../view/index/RootPage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: RootPage },
        { path: "/login", component: LoginPage }
    ]
})
export default router;