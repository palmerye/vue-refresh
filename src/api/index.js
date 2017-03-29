import axios from 'axios'

export const testApi = () => {
    return axios.get('https://cnodejs.org/api/v1/topic/57cc38f46f7069ce262d0599')
}
export const loginApi = () => {
    return axios.post('http://7le.online/user/login')
}
export const registerApi = () => {
    return axios.post('http://7le.online/user/register')
}
