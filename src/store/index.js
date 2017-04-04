import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import test from './modules/test.js'
import user from './modules/user.js'
import vote from './modules/vote.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    mutations,
    modules: {
        test,
        user,
        vote
    },
    strict: debug
})
