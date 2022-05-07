import {del, get, post, put} from './api'
import Pops from "../utils/pops";
import {WiseBoardListResult} from "../type/wiseBoard/WiseBoardListResult";
import {ServiceType} from "../type/wiseBoard/WiseBoardTableData";

type ResultType<T> = { error: number, msg: string, data: T };

//统一处理http&业务response
async function responseHandler<T>(response: Promise<ResultType<any>>, showToast: boolean = false): Promise<T> {
    //HTTP请求层response统一处理
    let res: ResultType<T> | null = null
    try {
        res = await response;
    } catch (err) {
        //默认无异常弹窗提示
        if (showToast) {
            Pops.showError('网络错误')
        }
        throw new Error("网络错误")//与业务（接口）层统一catch处理异常
    }

    //业务（接口）层result返回统一处理
    if (res.error === 0 || res.error === 1) {
        return res.data
    }
    let message = res.msg || "服务器异常";
    if (showToast) {
        Pops.showError(message)
    }
    throw new Error(message)//与http层统一catch处理异常
}

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

//同步学校信息（仅仅同步学校）
export const synSchoolInfo = () => post('wxSchoolInfo/synSchoolInfo', {secret:'lancoo'})
//同步校园通和各个学校移动端的模块
export const synchronization = () => post('wxSchoolInfo/synchronization', {secret:'lancoo'})

//根据学校ID同步系统
export const synSchoolSystem = ({ schoolId } : any) => post('wxSchoolInfo/synSchoolSystem', {secret:'lancoo', schoolId})
//根据学校ID同步系统和模块
export const synSchoolSystemAndModule = ({ schoolId } : any) => post('wxSchoolInfo/synSchoolSystemAndModule', {secret:'lancoo', schoolId})
//根据学校ID同步模块
export const synSchoolSystemModule = ({ schoolId } : any) => post('wxSchoolInfo/synSchoolSystemModule', {secret:'lancoo', schoolId})

//获取小程序子系统
export const getWeapp = (params: any) => {
    return get('wxSystem', params).then((res: any) => {
        return res.data
    })
}
//添加小程序子系统
export const addWeapp = (data: any) => post('wxSystem', data)
//编辑小程序子系统
export const putWeapp = (data: any) => put('wxSystem', data)
//删除小程序子系统
export const delWeapp = (params: any) => del('wxSystem', params)
//添加小程序内置子模块
export const addModule = (data: any) => post('wxSystemModule', data)
//编辑小程序内置子模块
export const putModule = (data: any) => put('wxSystemModule', data)
//删除小程序内置子模块
export const delModules = (params: any) => del('wxSystemModule', params)

//学校档案-编辑学校子模块列表
export const putWxSchoolModule = (data: any) => put('wxSchoolModule', data)

export const getWiseBoardList = (pageNum: number, pageSize: number,  serviceType?: ServiceType, schoolName?: string) => responseHandler<WiseBoardListResult>(get('/wiseboard/list/page', {pageSize, pageNum, serviceType, schoolName}), true)