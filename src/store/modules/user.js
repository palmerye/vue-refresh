import Vue from 'vue'
import { loginApi, registerApi, allUserApi, deleteUserApi } from '../../api'
import * as types from '../mutation-types'
import router from '../../router'

const state = {
    userInfo: {},
    allUser: [],
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
                commit(types.LOGIN_SUCCESS, res.data)
                Vue.$vux.toast.show({
                    text: '登录成功',
                    type: 'default'
                })
                if (res.data.data.type) {
                    router.push({name: 'admin'})
                } else {
                    router.push({name: 'user'})
                }
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
                commit(types.REGISTER_SUCCESS, res.data)
                Vue.$vux.toast.show({
                    text: '注册成功',
                    type: 'default'
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
    getAllUser ({ commit }) {
        allUserApi()
            .then(res => {
                commit(types.GETALLUSER_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteUser ({ commit }, id) {
        deleteUserApi(id)
            .then(res => {
                Vue.$vux.toast.show({
                    text: '删除用户成功',
                    type: 'default'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '删除用户失败',
                    type: 'warn'
                })
            })
    }
}

// mutations
const mutations = {
    [types.LOGIN_SUCCESS] (state, data) {
        console.log(data)
        window.sessionStorage.setItem('token', data.data.token)
        state.userInfo = data.data
        state.authlock = true
    },
    [types.REGISTER_SUCCESS] (state, data) {
        state.userInfo = data
        console.log(state.userInfo)
    },
    [types.GETALLUSER_SUCCESS] (state, data) {
        state.allUser = data.data
        console.log(state.allUser, '所有用户')
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
