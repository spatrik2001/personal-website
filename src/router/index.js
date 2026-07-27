import { createRouter, createWebHistory } from 'vue-router'
import PageView from '@/views/PageView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'page',
            component: PageView,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                top: 70,
                behavior: 'smooth', 
            }
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 }
        }
    }
})

export default router