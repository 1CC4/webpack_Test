import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router);
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main.vue'),
    }
]
const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})
export default router;