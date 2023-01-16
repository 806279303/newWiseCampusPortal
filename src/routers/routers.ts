export const allPath = {
  HOME: '/home',
  WEAPP: '/weappMg',
  SCHOOL_INFO: '/schoolInfo',
  SCHOOL_SYSTEM: '/schoolSystem/:schoolId/:version',
  SCHOOL_OLD_SYSTEM: '/schoolOldSystem/:schoolId',
  MESSAGE_RECORD: '/messageRecord',
  MESSAGE_MODEL: '/messageModel',
  WISEBOARD: '/wiseBoard',
  LOG_MANAGEMENT: '/logMg',
  USER_MANAGEMENT: '/userMg',
  THIRD_PUSH_MANAGEMENT: '/thirdPushMg',
  ADVERTISES: '/advertises',
  SCHOOL_GZH_MG: '/schoolGzhMg',
}

export interface NameAndPath {
  name: string
  path: string
}

export const namePathArray: NameAndPath[] = [
  {
    name: "首页",
    path: allPath.HOME
  },
  {
    name: "小程序管理",
    path: allPath.WEAPP
  },
  {
    name: "推送记录管理",
    path: allPath.MESSAGE_RECORD
  },
  {
    name: "推送模板",
    path: allPath.MESSAGE_MODEL
  },
  {
    name: "学校档案管理",
    path: allPath.SCHOOL_INFO
  },
  {
    name: "班牌音视频通话",
    path: allPath.WISEBOARD
  },
  {
    name: "微信用户管理",
    path: allPath.USER_MANAGEMENT
  },
  {
    name: "日志管理",
    path: allPath.LOG_MANAGEMENT
  },
  {
    name: "第三方推送管理",
    path: allPath.THIRD_PUSH_MANAGEMENT
  },
  {
    name: "广告轮播管理",
    path: allPath.ADVERTISES
  },
  {
    name: "学校公众号模板管理",
    path: allPath.SCHOOL_GZH_MG
  },
]

export const namePathMap = namePathArray.reduce((map, item) => {
  map.set(item.name, item.path)
  return map
}, new Map<string, string>())

export const pathNameMap = namePathArray.reduce((map, item) => {
  map.set(item.path, item.name)
  return map
}, new Map<string, string>())