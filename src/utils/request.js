import axios from 'axios'
import {config} from '@/common/config'

const service = axios.create({
    baseURL: config.VUE_WIKI_BASEURL,
    withCredentials: true,
    timeout: 30000
})

// service.interceptors.request.use(
//
//     error => {
//         console.log(error)
//         return Promise.reject(error);
//     }
// )

export default service;
