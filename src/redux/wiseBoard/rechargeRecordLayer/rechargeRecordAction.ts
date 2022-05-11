import {Dispatch} from "redux";
import {WiseBoardAction} from "../../../type/wiseBoard/WiseBoardAction";
import {RootState} from "../../rootReducer";
import {RechargeRecordActionType} from "../../../type/wiseBoard/rechargeRecordLayer/rechargeRecordActionType";
import {getRechargeRecord} from "../../../network/http";
import Pops from "../../../utils/pops";

const pageSize = 7

export const fetchRechargeRecord = (page?: number) => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    console.log("fetchRechargeRecord")
    //从state中取出查询参数
    const state = getState()

    if(!state.wiseBoardState.rechargeRecordLayerState.querySchool){
      Pops.showError("请选择需要查询的学校")
      return
    }

    const currentPage = page ? page : state.wiseBoardState.listState.currentPage
    dispatch({type: RechargeRecordActionType.FETCH_LIST, currentPage})
    try {
      let recordResult = await getRechargeRecord({
        wiseBoardCallId: state.wiseBoardState.rechargeRecordLayerState.querySchool.id,
        pageNum: currentPage,
        pageSize: pageSize
      });
      dispatch({type: RechargeRecordActionType.FETCH_LIST_SUCCESS, recordResult})
    }catch{
      dispatch({type: RechargeRecordActionType.FETCH_LIST_ERROR})
    }
  }
}