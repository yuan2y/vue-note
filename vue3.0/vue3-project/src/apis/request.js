import axios from 'axios'
import qs from 'qs'
import {ElMessage} from "element-plus";

const $axios = axios.create({
    timeout: 3000,
    withCredentials: true,
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : process.env.VUE_APP_BASE_API
})
let requestList = {}
const CancelToken = axios.CancelToken
//请求拦截
$axios.interceptors.request.use(config => {
    let data
    if (config.method === 'post') {
        data = config.data
    } else {
        data = config.params
    }
    let cancelMultiple = data && data.cancelMultiple
    let requestName = data && data.requestName

    //if need cancelMultiple
    if (cancelMultiple && requestName) {
        requestList[config.url] = requestList[config.url] || {}
        const cancel = requestList[config.url][requestName]
        if (cancel) {
            cancel('[cancel]' + requestName)
        }
        config.cancelToken = new CancelToken(c => {
            requestList[config.url][requestName] = c
        })

        config.cancelMultiple = cancelMultiple
        config.requestName = requestName
    }
    if (data) {
        delete data.cancelMultiple
        delete data.requestName
    }

    return config
}, error => {
    return Promise.reject(error)
})

//响应拦截
$axios.interceptors.response.use(response => {
    const config = response.config
    let cancelMultiple = config.cancelMultiple
    let requestName = config.requestName
    if (cancelMultiple && requestName) {
        requestList[config.url][requestName] = null
    }
    const status = response.status
    if ((status >= 200 && status < 300) || status === 304) {
        return Promise.resolve(response.data)
    } else {
        return Promise.reject(response)
    }
}, error => {
    if (error && error.message && error.message.indexOf("[cancel") === 0) {
        return Promise.reject(error)
    }
    if (error.response) {
        switch (error.response.status) {
            case 401:
                ElMessage({
                    message: '未授权',
                    type: 'error'
                });
                break
            case 404:
                ElMessage({
                    message: '未找到访问地址',
                    type: 'error'
                });
                break
            case 500:
                ElMessage({
                    message: '服务器内部错误',
                    type: 'error'
                });
                break
            default:
                ElMessage({
                    message: '接口异常，请联系管理员',
                    type: 'error'
                });
        }
    } else {
        if (error.message.include('timeout')) {
            ElMessage({
                message: '请求超时',
                type: 'error'
            });
        } else {
            ElMessage({
                message: '请求失败',
                type: 'error'
            });
        }
    }
    return Promise.reject(error)
})

export default {
    post(url, data = null) {
        return $axios.post(url, data, {headers: {'Content-Type': 'application/json'}})
            .then(res => {
                const {data, code, msg} = res
                if (code === 200 || code === 0) {
                    return data
                } else {
                    return Promise.reject(msg)
                }
            })
    },
    post2(url, data = null) {
        return $axios.post(url, qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(res => {
                const {data, code, msg} = res
                if (code === 200) {
                    return data
                } else {
                    return Promise.reject(msg)
                }
            })
    },
    get(url, params = '') {
        return $axios.get(url, {params})
    }
}



