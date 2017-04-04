// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import store from './store'
import { sync } from 'vuex-router-sync'

import FastClick from 'fastclick'
import router from './router'

import VueResource from 'vue-resource'
// 安装Resource模块
Vue.use(VueResource)

import { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

FastClick.attach(document.body)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
// Now the app has started!
