import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFoundPage from '@/js/pages/404'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        component: NotFoundPage
    }
]

export default new VueRouter({
    routes
})