import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

import NotFoundView from '../components/404'
import home from '../views/home'
import vote from '../views/vote'
import user from '../views/user'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        children: [
        ]
    },
    {
        path: '/vote',
        name: 'vote',
        component: vote,
        children: [
        ]
    },
    {
        path: '/user',
        name: 'user',
        component: user,
        children: [
        ]
    },
    {
        path: '*',
        component: NotFoundView
    }
]

const router = new VueRouter({
    // mode: 'history',
    // linkActiveClass: 'active',
    // scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router
