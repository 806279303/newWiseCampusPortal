import {LgSimpleTableData} from "@/components/simpleTable";

export enum ServiceType{
  // 全部状态
  ALL = -1,
  //未购买
  NOT_PURCHASED,
  //试用
  TRIAL,
  //购买
  PURCHASED,
  //过期
  EXCEED
}

export const serviceTypeOptions: {value: ServiceType, name: string}[] = [
  {
    value: ServiceType.ALL,
    name: "全部状态",
  },
  {
    value: ServiceType.NOT_PURCHASED,
    name: "未购买",
  },
  {
    value: ServiceType.TRIAL,
    name: "试用",
  },
  {
    value: ServiceType.PURCHASED,
    name: "已购买",
  },
  {
    value: ServiceType.EXCEED,
    name: "已过期",
  },
]

export const serviceTypeOptionMap = serviceTypeOptions.reduce((map, item) => {
  map.set(item.value, item.name)
  return map
}, new Map<ServiceType, string>());


export interface WiseBoardTableData extends LgSimpleTableData{
  id: number
  schoolId: string,
  schoolName: string,
  //学校已用通话时长，单位：分钟
  usedCallTime: number,
  //学校购买通话时长，单位：分钟
  buyCallTime: number,
  // 学校剩余通话时长，单位：分钟
  restCallTime: number
  serviceType: ServiceType,
  createTime: string
  updateTime: string
}