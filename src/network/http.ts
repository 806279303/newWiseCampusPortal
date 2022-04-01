import {get, post, put} from './api'

export const getWxSchoolSystem = (params: any) => {
    return get('wxSchoolSystem', params).then((res: any) => {
        return res.data
    })
}
export const getSchoolInfo = (params: any) => {
    return get('wxSchoolInfo', params).then((res: any) => {
        return res.data
    })
}
//获取小程序子系统
export const getWeapp = (params: any) => {
    return get('wxSystem', params).then((res: any) => {
        return res.data
    })
}
//添加小程序子系统
export const addWeapp = (data: any) => {
    return post('wxSystem', data).then((res: any) => {
        return res.data
    })
}
//编辑小程序子系统
export const putWeapp = (data: any) => {
    return put('wxSystem', data).then((res: any) => {
        return res.data
    })
}