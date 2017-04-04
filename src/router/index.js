import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '../store'

import NotFoundView from '../components/404'
import home from '../views/home'
import classifyhome from '../views/classify'
import classify from '../views/classifyDetail'
import vote from '../views/vote'
import votedetail from '../views/voteDetail'
import user from '../views/user'
import login from '../views/login'
import register from '../views/register'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        // redirect: '/login',
        children: [
        ]
    },
    {
        path: '/classifyhome',
        name: 'classifyhome',
        component: classifyhome,
        children: [
        ]
    },
    {
        path: '/classify/:id',
        name: 'classify',
        component: classify,
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
        path: '/votedetail/:id',
        name: 'votedetail',
        component: votedetail,
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
        path: '/login',
        name: 'login',
        component: login,
        children: [
        ]
    },
    {
        path: '/register',
        name: 'register',
        component: register,
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

router.beforeEach((to, from, next) => {
    // console.log(window.sessionStorage.getItem('token'))
    // if (!window.sessionStorage.getItem('token')) {
    //     return to('/login')
    // }
    next()
})

export default router
