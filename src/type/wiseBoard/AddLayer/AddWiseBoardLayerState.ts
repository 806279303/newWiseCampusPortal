//添加音视频弹窗
import {ServiceType} from "../WiseBoardTableData";

export interface AddWiseBoardLayerState {
  showAddWiseBoardLayer: boolean
  addWiseBoardSchoolId: number
  addWiseBoardServiceType: ServiceType
  addWiseBoardBuyCallTime: number
}