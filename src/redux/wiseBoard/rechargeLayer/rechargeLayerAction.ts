import {Dispatch} from "redux";
import {WiseBoardAction} from "../../../type/wiseBoard/WiseBoardAction";
import {RootState} from "../../rootReducer";
import {rechargeWiseBoardCall} from "../../../network/http";
import Pops from "../../../utils/pops";
import {fetchWiseBoardListAction} from "../wiseBoardList/wiseBoardListAction";
import {RechargeLayerActionType} from "../../../type/wiseBoard/rechargeLayer/rechargeLayerActionType";

export function recharge() {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {

    const {
      rechargeSchool,
      rechargeTime,
      rechargeRemark
    } = getState().wiseBoardState.rechargeLayerState

    //数据校验
    if (!rechargeSchool){
      Pops.showError("没有选择学校")
      return
    }

    if(rechargeTime < 1){
      Pops.showError("充值时长不能小于1")
      return
    }

    if(!rechargeRemark){
      Pops.showError("备注必填")
      return
    }

    try {
      await rechargeWiseBoardCall({
        wiseBoardCallId: rechargeSchool.id,
        addCallTime: rechargeTime,
        remark: rechargeRemark
      })
      Pops.showSuccess("充值成功")
      dispatch({type: RechargeLayerActionType.CLOSE_RECHARGE_LAYER})
      await fetchWiseBoardListAction(1)(dispatch, getState)
    } catch (e) {

    }
  }
}