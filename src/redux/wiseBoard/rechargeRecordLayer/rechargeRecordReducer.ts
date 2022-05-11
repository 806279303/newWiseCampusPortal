import {RechargeRecordState} from "../../../type/wiseBoard/rechargeRecordLayer/rechargeRecordState";
import {RechargeRecordAction} from "../../../type/wiseBoard/rechargeRecordLayer/rechargeRecordAction";
import {RechargeRecordActionType} from "../../../type/wiseBoard/rechargeRecordLayer/rechargeRecordActionType";

const initialState: RechargeRecordState = {
  showLayer: false,
  loading: false,
  currentPage: 1,
  querySchool: null,
  recordResult: null
}

export const rechargeRecordReducer = (state: RechargeRecordState = initialState, action: RechargeRecordAction) => {
  switch (action.type) {
    case RechargeRecordActionType.OPEN_LAYER:
      return {...state, showLayer: true, querySchool: action.querySchool}
    case RechargeRecordActionType.CLOSE_LAYER:
      return {...state, showLayer: false}
    case RechargeRecordActionType.FETCH_LIST:
      return {...state, loading: true, currentPage: action.currentPage}
    case RechargeRecordActionType.FETCH_LIST_SUCCESS:
      return {...state, loading: false, recordResult: action.recordResult}
    case RechargeRecordActionType.FETCH_LIST_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}