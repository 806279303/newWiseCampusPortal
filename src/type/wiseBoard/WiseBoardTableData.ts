import {LgSimpleTableData} from "@/components/simpleTable";


export enum ServiceType{
  //未购买
  NOT_PURCHASED,
  //试用
  TRIAL,
  //购买
  PURCHASED,
  //过期
  EXCEED
}

export interface WiseBoardTableData extends LgSimpleTableData{
  id: number
  schoolId: string,
  schoolName: string,
  usedCallTime: number, //单位：分钟
  buyCallTime: number, //单位：分钟
  restCallTime: number //单位：分钟
  serviceType: ServiceType,
  createTime: string
  updateTime: string
}