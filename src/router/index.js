import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

import NotFoundView from '../components/404'
import test from '../components/test'
import hello from '../components/hello'
import home from '../views/home'
import article from '../views/articles'

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
        path: '/test',
        name: 'mytest',
        component: test,
        children: [
        ]
    },
    {
        path: '/hello',
        name: 'hello',
        component: hello,
        children: [
        ]
    },
    {
        path: '/article',
        name: 'article',
        component: article,
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
