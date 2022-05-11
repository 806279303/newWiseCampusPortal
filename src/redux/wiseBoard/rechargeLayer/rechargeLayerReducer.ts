import {RechargeLayerState} from "../../../type/wiseBoard/WiseBoardState";
import {RechargeLayerAction} from "../../../type/wiseBoard/rechargeLayer/rechargeLayerAction";
import {RechargeLayerActionType} from "../../../type/wiseBoard/rechargeLayer/rechargeLayerActionType";

const initialState: RechargeLayerState = {
  showRechargeLayer: false,
  rechargeSchool: null,
  rechargeTime: 1,
  rechargeRemark: ""
}

export const rechargeLayerReducer = (state: RechargeLayerState = initialState, action: RechargeLayerAction): RechargeLayerState => {
  switch (action.type){
    case RechargeLayerActionType.OPEN_RECHARGE_LAYER:
      return {...state, showRechargeLayer: true, rechargeSchool: action.rechargeSchool}
    case RechargeLayerActionType.CLOSE_RECHARGE_LAYER:
      return {...state, showRechargeLayer: false}
    case RechargeLayerActionType.CLEAR_RECHARGE_LAYER:
      return {...state, rechargeSchool: initialState.rechargeSchool, rechargeTime: initialState.rechargeTime, rechargeRemark: initialState.rechargeRemark}
    case RechargeLayerActionType.RECHARGE_LAYER_RECHARGE_TIME_CHANGE:
      return {...state, rechargeTime: action.rechargeTime}
    case RechargeLayerActionType.RECHARGE_LAYER_RECHARGE_REMARK_CHANGE:
      return {...state, rechargeRemark: action.rechargeRemark}
    default:
      return state
  }
}