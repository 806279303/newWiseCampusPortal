import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import {publicIp} from './apiURL'
import {LOGIN} from './apiURL'
import {Message as message} from 'element-react'
import {lgAlert} from "@/components/alert";
import Pops from "../utils/pops";
import {getCookie} from "../utils/cookie";

let tipIndex:any
const instance = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
    timeout: 60000, // 设置超时时间10s
    baseURL: publicIp   //根据自己配置的反向代理去设置不同环境的baeUrl
})
// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
instance.defaults.headers.post['Content-Type'] = 'application/json'

let httpCode:any = {        //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
}

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
    if(!config.headers){
        config.headers = {}
    }
     config.headers['token'] = getCookie("lg_tk")
    // // hide = message.loading({content: 'Loading...', duration: 0});
    // tipIndex = lgAlert.show({ content: '数据加载中', tipType: 'loading', position: { xAxis: 'center', yAxis: 'center' } });
    // // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
    // if (config.url && config.url.includes('pur/contract/export')) {
    //     config.headers && (config.headers['responseType'] = 'blob')
    // }
    // // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
    // if (config.url && config.url.includes('pur/contract/upload')) {
    //     config.headers && (config.headers['Content-Type'] = 'multipart/form-data')
    // }
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
    // lgAlert.close(tipIndex.index);
    // if (response.statusText === 'ok') {     // 响应结果里的statusText: ok是我与后台的约定，大家可以根据实际情况去做对应的判断
        return Promise.resolve(response.data)
    // } else {
    //     message.error('响应超时')
    //     return Promise.reject(response.data.message)
    // }
}, error => {
    // lgAlert.close(tipIndex);
    // hide()
    if (error.response) {
        // // 根据请求失败的http状态码去给用户相应的提示
        // let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
        // message.error(tips)
        // if (error.response.status === 401) {    // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
        //     //针对框架跳转到登陆页面
        //     this.props.history.push(LOGIN);
        // }
        return Promise.reject(error)
    } else {
        lgAlert.show({ tipType: 'error', content: "请求超时, 请刷新重试", position: { xAxis: 'center', yAxis: 'top' } })
        return Promise.reject('请求超时, 请刷新重试')
    }
})

interface BaseOptions {
    method:string
    url:string
    loading?:any
    [propName: string]: any;
}
export function baseOptions(options:BaseOptions & AxiosRequestConfig){
    return new Promise<any>((resolve, reject) => {
        const { loading } = options
        if(loading)Pops.showLoading(loading.length?loading:'请稍后')
        instance(options).then(response => {
            if(loading)Pops.hideLoading()
            resolve(response)
        }).catch(error => {
            if(loading)Pops.hideLoading()
            reject(error)
        })
    })
}


/* 统一封装get请求 */
export const get = (url:string, params:object={}, config = {}, loading:any = false) => {
    return baseOptions({
        method: 'get',
        url,
        params,
        ...config,
        loading
    })
}

/* 统一封装post请求  */
export const post = (url:string, data:object = {}, config = {}, loading:any = false) => {
    return baseOptions({
        method: 'post',
        url,
        data,
        ...config,
        loading
    })
}
/* 统一封装delete请求  */
export const put = (url:string, data:object = {}, config = {}, loading:any = false) => {
    return baseOptions({
        method: 'put',
        url,
        data,
        ...config,
        loading
    })
}
/* 统一封装post请求  */
export const del = (url:string, params:object, config = {}, loading:any = false) => {
    return baseOptions({
        method: 'delete',
        url,
        params,
        ...config,
        loading
    })
}