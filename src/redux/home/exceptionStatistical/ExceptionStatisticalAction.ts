import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {ExceptionStatisticalAction} from "../../../type/home/exceptionStatistical/ExceptionStatisticalAction";
import {ExceptionStatisticalActionType} from "../../../type/home/exceptionStatistical/ExceptionStatisticalActionType";
import dayjs from "dayjs";
import {getSchoolExceptionStatics} from "../../../network/http";

const limit = 6
export const loadData = (searchDate: Date) => {
  return async (dispatch: Dispatch<ExceptionStatisticalAction>, getState: () => RootState) => {
    const state = getState();
    const exceptionStatisticalState = state.homeState.exceptionStatisticalState;
    const oldSearchDate = exceptionStatisticalState.searchDate;
    const newDate = dayjs(searchDate);
    const oldDate = dayjs(oldSearchDate);
    if (newDate.format("YYYY-MM") === oldDate.format("YYYY-MM") && exceptionStatisticalState.items.length) {
      return
    }
    dispatch({type: ExceptionStatisticalActionType.CHANGE_SEARCH_DATE, searchDate})
    dispatch({type: ExceptionStatisticalActionType.LOAD_DATA})
    try {
      const exceptionStatisticalItems = await getSchoolExceptionStatics(dayjs(searchDate).format("YYYY-MM"), limit);
      dispatch({type: ExceptionStatisticalActionType.LOAD_DATA_SUCCESS, items: exceptionStatisticalItems})
    } catch {
      dispatch({type: ExceptionStatisticalActionType.LOAD_DATA_ERROR})
    }
  }
}