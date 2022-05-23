import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {ExceptionTableCardAction} from "../../../type/home/exceptionTableCard/ExceptionTableCardAction";
import {ExceptionTableCardActionType} from "../../../type/home/exceptionTableCard/ExceptionTableCardActionType";
import {getRealTimeExceptions} from "../../../network/http";

const limit = 6

export const loadData = () => {
  return async (dispatch: Dispatch<ExceptionTableCardAction>, getState: () => RootState) => {
    // const state = getState();
    // const exceptionTableCardState = state.homeState.exceptionTableCardState;
    // if(exceptionTableCardState.items.length){
    //   return
    // }

    dispatch({type: ExceptionTableCardActionType.LOAD_DATA})
    try {
      const exceptionTableItems = await getRealTimeExceptions(limit);
      dispatch({type: ExceptionTableCardActionType.LOAD_DATA_SUCCESS, items: exceptionTableItems})
    } catch {
      dispatch({type: ExceptionTableCardActionType.LOAD_DATA_ERROR})
    }
  }
}