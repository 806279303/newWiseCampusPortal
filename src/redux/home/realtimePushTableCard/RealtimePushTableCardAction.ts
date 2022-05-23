import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {RealtimePushTableCardAction} from "../../../type/home/realtimePushTableCard/RealtimePushTableCardAction";
import {
  RealtimePushTableCardActionType
} from "../../../type/home/realtimePushTableCard/RealtimePushTableCardActionType";
import {getRealTimeWxPushRecord} from "../../../network/http";


const limit = 6

export const loadData = () => {
  return async (dispatch: Dispatch<RealtimePushTableCardAction>, getState: () => RootState) => {
    // const state = getState();
    // const realtimePushTableCardState = state.homeState.realtimePushTableCardState;
    // if (realtimePushTableCardState.items.length){
    //   return
    // }

    dispatch({type: RealtimePushTableCardActionType.LOAD_DATA})

    try {
      const realtimePushTableItems = await getRealTimeWxPushRecord(limit);
      dispatch({type: RealtimePushTableCardActionType.LOAD_DATA_SUCCESS, items: realtimePushTableItems})
    } catch {
      dispatch({type: RealtimePushTableCardActionType.LOAD_DATA_ERROR})
    }

  }
}