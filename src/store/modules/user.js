import Vue from 'vue'
import { loginApi, registerApi, addTagApi, getUserInfoApi } from '../../api'
import * as types from '../mutation-types'
import router from '../../router'

const state = {
    userInfo: {},
    authlock: false
}

// getters
const getters = {
    // testDataGet (state) {
    //     return state.testData
    // }
}

// actions
const actions = {
    login ({ commit }, params) {
        loginApi(params)
            .then(res => {
                console.log(res.data)
                commit(types.LOGIN_SUCCESS, res.data)
                Vue.$vux.toast.show({
                    text: '登录成功',
                    type: 'default'
                })
                router.push({name: 'user'})
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '登录失败',
                    type: 'warn'
                })
            })
    },
    register ({ commit }, params) {
        registerApi(params)
            .then(res => {
                console.log(res.data)
                commit(types.REGISTER_SUCCESS, res.data)
                Vue.$vux.toast.show({
                    text: '注册成功，请登录'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '注册失败',
                    type: 'warn'
                })
            })
    },
    addTag ({ commit }, params) {
        addTagApi(params)
            .then(res => {
                console.log(res.data)
                commit(types.ADDTAG_SUCCESS, res.data)
                Vue.$vux.toast.show({
                    text: '添加成功'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '添加失败',
                    type: 'warn'
                })
            })
    },
    getUserInfo ({ commit }) {
        getUserInfoApi()
            .then(res => {
                console.log(res.data)
                commit(types.GETUSERINFO_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// mutations
const mutations = {
    [types.LOGIN_SUCCESS] (state, data) {
        window.sessionStorage.setItem('token', data.token)
        state.userInfo = data
        state.authlock = true
        // window.sessionStorage.setItem('token', JSON.stringify(state.userInfo.token))
        console.log(state.userInfo.token, '带token')
        console.log(data.token, '带token')
    },
    [types.REGISTER_SUCCESS] (state, data) {
        state.userInfo = data
        console.log(state.userInfo)
    },
    [types.ADDTAG_SUCCESS] (state, data) {
        console.log(state.userInfo)
    },
    [types.GETUSERINFO_SUCCESS] (state, data) {
        state.userInfo = data
        console.log(state.userInfo)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
