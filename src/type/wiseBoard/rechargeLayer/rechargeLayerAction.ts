import {WiseBoardTableData} from "../WiseBoardTableData";
import {RechargeLayerActionType} from "./rechargeLayerActionType";

interface OpenRechargeLayer {
  type: RechargeLayerActionType.OPEN_RECHARGE_LAYER,
  rechargeSchool: WiseBoardTableData
}

interface CloseRechargeLayer {
  type: RechargeLayerActionType.CLOSE_RECHARGE_LAYER
}

interface ClearRechargeLayer {
  type: RechargeLayerActionType.CLEAR_RECHARGE_LAYER
}

interface RechargeLayerRechargeTimeChange {
  type: RechargeLayerActionType.RECHARGE_LAYER_RECHARGE_TIME_CHANGE
  rechargeTime: number
}

interface RechargeLayerRechargeRemarkChange {
  type: RechargeLayerActionType.RECHARGE_LAYER_RECHARGE_REMARK_CHANGE,
  rechargeRemark: string
}

export type RechargeLayerAction =
  | OpenRechargeLayer
| CloseRechargeLayer
| ClearRechargeLayer
| RechargeLayerRechargeTimeChange
| RechargeLayerRechargeRemarkChange