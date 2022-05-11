//充值弹窗
import {WiseBoardTableData} from "../WiseBoardTableData";

export interface RechargeLayerState {
  showRechargeLayer: boolean
  rechargeSchool: WiseBoardTableData | null
  rechargeTime: number
  rechargeRemark: string
}