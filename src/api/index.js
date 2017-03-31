// import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// axios.interceptors.request.use(res => {
//     return res
// }, error => {
//     return Promise.reject(error)
// })

// axios.interceptors.response.use(res => {
//     console.log('1111111233')
//     return res
// }, error => {
//     return Promise.reject(error)
// })

// export const testApi = () => {
//     return axios.get('http://7le.online/vote/show/1')
// }
// export const loginApi = (params) => {
//     return axios.post('http://7le.online/user/login', params)
// }
// export const registerApi = (params) => {
//     return axios.post('http://7le.online/user/register', params)
// }

import Vue from 'vue'
import VueResource from 'vue-resource'
import store from '../store'

Vue.use(VueResource)

Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
  const auth = store.state.userInfo
  console.log(auth)
    if (auth) {
        const accessToken = window.sessionStorage.getItem('token')
        console.log(accessToken, 'token')
        Vue.http.headers.common.Authorization = accessToken
    } else {
        delete Vue.http.headers.common.Authorization
    }
  // if (auth.check()) {
  //   const accessToken = auth.jwt_token.access_token;
  //   Vue.http.headers.common.Authorization = `Bearer ${accessToken}`;
  // } else {
  //   delete Vue.http.headers.common.Authorization;
  // }
    next()
})

export const testApi = () => {
    return Vue.http.get('http://7le.online/vote/show/1')
}
export const loginApi = (params) => {
    return Vue.http.post('http://7le.online/user/login', params)
}
