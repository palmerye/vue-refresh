import { loginApi, registerApi } from '../../api'
import * as types from '../mutation-types'

const state = {
    userInfo: {}
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
            })
            .catch(err => {
                console.log(err)
            })
    },
    register ({ commit, username, password }) {
        registerApi({
            username: username,
            password: password
        })
            .then(res => {
                commit(types.REGISTER_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

// mutations
const mutations = {
    [types.LOGIN_SUCCESS] (state, data) {
        state.userInfo = data
        console.log(state.userInfo)
        window.sessionStorage.setItem('token', JSON.stringify(state.userInfo.token))
    },
    [types.REGISTER_SUCCESS] (state, data) {
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
