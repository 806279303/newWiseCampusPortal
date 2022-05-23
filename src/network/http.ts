import {del, get, post, put} from './api'
import Pops from "../utils/pops";
import {WiseBoardListResult} from "../type/wiseBoard/WiseBoardListResult";
import {ServiceType} from "../type/wiseBoard/WiseBoardTableData";
import {WxSchoolSimpleInfo} from "../type/WxSchoolSimpleInfo";
import {AddWiseBoardCallParams} from "../type/wiseBoard/addWiseBoardCallParams";
import {WxSchoolSimpleInfoParam} from "../type/app/WxSchoolSimpleInfoParam";
import {RechargeParam} from "../type/wiseBoard/rechargeLayer/rechargeParam";
import {RechargeRecordParam} from "../type/wiseBoard/rechargeRecordLayer/RechargeRecordParam";
import {RechargeRecordResult} from "../type/wiseBoard/rechargeRecordLayer/rechargeRecordResult";
import {OperationLogParam} from "../type/logMg/operationLogParam";
import {PageResult} from "../type/pageResult";
import {OperationLogItem} from "../type/logMg/OperationLogItem";
import {ExceptionStatisticalItem} from "../type/home/exceptionStatistical/ExceptionStatisticalItem";
import {VisitsStatisticalItem} from "../type/home/visitsStatistical/VisitsStatisticalItem";
import {MiniProgramStatisticalItem} from "../type/home/miniProgramStatistical/MiniProgramStatisticalItem";
import {ExceptionTableItem} from "../type/home/exceptionTableCard/ExceptionTableItem";
import {RealtimePushTableItem} from "../type/home/realtimePushTableCard/RealtimePushTableItem";
import {UserMgListParam} from "../type/userMg/UserMgListParam";
import {UserMgTableItem} from "../type/userMg/UserMgTableItem";
import {MessageRecordTableItem} from "../type/messageRecord/MessageRecordTableItem";

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
  let message = typeof res.data === "string" ? res.data : res.msg || "服务器异常";
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
export const synSchoolInfo = () => post('wxSchoolInfo/synSchoolInfo', {secret: 'lancoo'})
//同步校园通和各个学校移动端的模块
export const synchronization = () => post('wxSchoolInfo/synchronization', {secret: 'lancoo'})

//根据学校ID同步系统
export const synSchoolSystem = ({schoolId}: any) => post('wxSchoolInfo/synSchoolSystem', {secret: 'lancoo', schoolId})
//根据学校ID同步系统和模块
export const synSchoolSystemAndModule = ({schoolId}: any) => post('wxSchoolInfo/synSchoolSystemAndModule', {
  secret: 'lancoo',
  schoolId
})
//根据学校ID同步模块
export const synSchoolSystemModule = ({schoolId}: any) => post('wxSchoolInfo/synSchoolSystemModule', {
  secret: 'lancoo',
  schoolId
})

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

//获取学校简要信息
export const getWxSchoolSimpleInfo = (param?: WxSchoolSimpleInfoParam) => responseHandler<WxSchoolSimpleInfo[]>(get('/wxSchoolInfo/simple', param), true)

//获取班牌视频通话列表，分页查询
export const getWiseBoardList = (pageNum: number, pageSize: number, serviceType?: ServiceType, schoolName?: string) => responseHandler<WiseBoardListResult>(get('/wiseboard/list/page', {
  pageSize,
  pageNum,
  serviceType,
  schoolName
}), true)

//添加班牌视频通话
export const addWiseBoardCall = (params: AddWiseBoardCallParams) => responseHandler<string>(post("/wiseboard/addWiseBoardCall", {...params}))

export const rechargeWiseBoardCall = (param: RechargeParam) => responseHandler<string>(put("/wiseboard/addCallTime", param))

export const getRechargeRecord = (param: RechargeRecordParam) => responseHandler<RechargeRecordResult>(get("wiseboard/page/getRecords", param), true)

export const getOperationLog = (param: OperationLogParam) => responseHandler<PageResult<OperationLogItem>>(get("/manage/log/list/page", param), true)

export const getDataOverview = (date: string) => responseHandler<{viewNumber: number, pushMessageNumber: number, exceptionNumber: number}>(get("/wxManage/getDataOverview", {secret: "lancoo", date}))

export const getSchoolExceptionStatics = (date: string, limit: number) => responseHandler<ExceptionStatisticalItem[]>(get("/wxManage/getSchoolExceptionStatics", {secret: "lancoo", date, limit}))

export const getSchoolViewStatics = (date: string, limit: number) => responseHandler<VisitsStatisticalItem[]>(get("/wxManage/getSchoolViewStatics", {secret: "lancoo", date, limit}))

export const getMostUsedWxApplet = (date: string, limit: number) => responseHandler<MiniProgramStatisticalItem[]>(get("/wxManage/getMostUsedWxApplet", {secret: "lancoo", date, limit}))

export const getRealTimeExceptions = (limit: number) => responseHandler<ExceptionTableItem[]>(get("/wxManage/getRealTimeExceptions", {secret: "lancoo", limit}))

export const getRealTimeWxPushRecord = (limit: number) => responseHandler<RealtimePushTableItem[]>(get("/wxManage/getRealTimeWxPushRecord", {secret: "lancoo", limit}))

export const getWxUserList = (param: UserMgListParam) => responseHandler<PageResult<UserMgTableItem>>(get("/manage/wxUser/list/page", param), true)

export const wxUnbindUser = (id: number) => responseHandler<{success: boolean, content: string}>(del("/manage/wxUser/unNewbind", {id}), true)

export const getWxPushRecord = (pageNum: number, pageSize: number) => responseHandler<PageResult<MessageRecordTableItem>>(get("/wxPushRecord/list/page", {pageNum, pageSize}), true)