import Vue from 'vue'
import { allVideoApi, detailVideoApi, collectVideoApi, deleteCollectVideoApi, toCollectVideoApi, deleteVideoApi } from '../../api'
import * as types from '../mutation-types'

const state = {
    allVideo: [],
    detailVideo: {},
    allCollectVideo: []
}

// getters
const getters = {
    // testDataGet (state) {
    //     return state.testData
    // }
}

// actions
const actions = {
    getallVideo ({ commit }, text) {
        allVideoApi(text)
            .then(res => {
                console.log(res.data)
                commit(types.GETALLVIDEO_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    getDetailVideo ({ commit }, id) {
        detailVideoApi(id)
            .then(res => {
                console.log(res.data)
                commit(types.GETDETAILVIDEO_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    getallCollectVideo ({ commit }) {
        collectVideoApi()
            .then(res => {
                console.log(res.data)
                commit(types.GETALLCOLLECTVIDEO_SUCCESS, res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    deleteCollectVideo ({ commit }, id) {
        deleteCollectVideoApi(id)
            .then(res => {
                Vue.$vux.toast.show({
                    text: '删除收藏视频成功',
                    type: 'default'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '删除收藏视频失败',
                    type: 'warn'
                })
            })
    },
    toCollectVideo ({ commit }, id) {
        toCollectVideoApi(id)
            .then(res => {
                Vue.$vux.toast.show({
                    text: '收藏视频成功',
                    type: 'default'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '收藏视频失败',
                    type: 'warn'
                })
            })
    },
    deleteVideo ({ commit }, id) {
        deleteVideoApi(id)
            .then(res => {
                Vue.$vux.toast.show({
                    text: '删除视频成功',
                    type: 'default'
                })
            })
            .catch(err => {
                console.log(err)
                Vue.$vux.toast.show({
                    text: '删除视频失败',
                    type: 'warn'
                })
            })
    }
}

// mutations
const mutations = {
    [types.GETALLVIDEO_SUCCESS] (state, data) {
        state.allVideo = data.data
        console.log(data, '所有视频')
    },
    [types.GETDETAILVIDEO_SUCCESS] (state, data) {
        state.detailVideo = data.data
    },
    [types.GETALLCOLLECTVIDEO_SUCCESS] (state, data) {
        state.allCollectVideo = data.data
        console.log(state.allCollectVideo)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
