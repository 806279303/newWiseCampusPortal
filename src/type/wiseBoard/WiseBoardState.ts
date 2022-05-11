import {ServiceType, WiseBoardTableData} from "./WiseBoardTableData";

export interface WiseBoardState{
  //列表
  listState: WiseBoardListState,
  //添加音视频弹窗
  addLayerState: AddWiseBoardLayerState
  //充值弹窗
  rechargeLayerState: RechargeLayerState
}

//列表
export interface WiseBoardListState{
  loading: boolean
  currentPage: number
  totalPage: number
  serviceType: ServiceType
  searchSchoolName: string
  tableData: WiseBoardTableData[]
  total: number
}

//添加音视频弹窗
export interface AddWiseBoardLayerState{
  showAddWiseBoardLayer: boolean
  addWiseBoardSchoolId: number
  addWiseBoardServiceType: ServiceType
  addWiseBoardBuyCallTime: number
}

//充值弹窗
export interface RechargeLayerState {
  showRechargeLayer: boolean
  rechargeSchool: WiseBoardTableData | null
  rechargeTime: number
  rechargeRemark: string
}