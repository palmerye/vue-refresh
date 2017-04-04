import Vue from 'vue'
import { hotVoteApi, myinterestedApi, classifyVoteApi, publishApi, voteDetailApi, myjoinVoteApi, mypublishVoteApi, postVodeApi } from '../../api'
import * as types from '../mutation-types'

const state = {
    hotVoteinfo: [],
    interestVoteinfo: [],
    classifyVoteinfo: [],
    myjoinVoteinfo: [],
    mypublishVoteinfo: [],
    votedetail: {}
}

// getters
const getters = {
    // testDataGet (state) {
    //     return state.testData
    // }
}

// actions
const actions = {
    gethotVote ({ commit }) {
        hotVoteApi()
            .then(res => {
                console.log(res.data)
                commit(types.GETHOTVOTE_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    getinterestVote ({ commit }) {
        myinterestedApi()
            .then(res => {
                console.log(res.data)
                commit(types.GETINTERESTED_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    getclassifyVote ({ commit }, id) {
        classifyVoteApi(id)
            .then(res => {
                console.log(res.data)
                commit(types.GETCLASSIFYVOTE_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    myjoinVote ({ commit }) {
        myjoinVoteApi()
            .then(res => {
                console.log(res.data)
                commit(types.GETMYJOIN_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    mypublishVote ({ commit }) {
        mypublishVoteApi()
            .then(res => {
                console.log(res.data)
                commit(types.GETMYPUBLISH_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    voteDetail ({ commit }, id) {
        voteDetailApi(id)
            .then(res => {
                console.log(res.data)
                commit(types.GETHOTVOTEDETAIL_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    publishVote ({ commit }, params) {
        publishApi(params)
            .then(res => {
                console.log(res.data)
                commit(types.PUBLISH_SUCCESS, res.data)
                Vue.$vux.toast.show({
                    text: '发布成功'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '发布失败',
                    type: 'warn'
                })
            })
    },
    postVode ({ commit }, params) {
        postVodeApi(params)
            .then(res => {
                console.log(res.data)
                commit(types.POSTVOTE_SUCCESS, res.data)
                Vue.$vux.toast.show({
                    text: '投票成功'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '投票失败',
                    type: 'warn'
                })
            })
    }
}

// mutations
const mutations = {
    [types.GETHOTVOTE_SUCCESS] (state, data) {
        state.hotVoteinfo = data.data
    },
    [types.GETINTERESTED_SUCCESS] (state, data) {
        state.interestVoteinfo = data.data
        console.log(data.data)
    },
    [types.GETCLASSIFYVOTE_SUCCESS] (state, data) {
        state.classifyVoteinfo = data.data
    },
    [types.GETMYJOIN_SUCCESS] (state, data) {
        state.myjoinVoteinfo = data.data
        console.log(data.data, 'myjoinVote')
    },
    [types.GETMYPUBLISH_SUCCESS] (state, data) {
        state.mypublishVoteinfo = data.data
        console.log(data.data, 'publishVote')
    },
    [types.GETHOTVOTEDETAIL_SUCCESS] (state, data) {
        state.votedetail = data
    },
    [types.PUBLISH_SUCCESS] (state, data) {
        // state.mypublishVoteinfo = data
    },
    [types.POSTVOTE_SUCCESS] (state, data) {
        // state.mypublishVoteinfo = data
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
