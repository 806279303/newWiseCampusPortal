import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {VisitsStatisticalAction} from "../../../type/home/visitsStatistical/VisitsStatisticalAction";
import {VisitsStatisticalActionType} from "../../../type/home/visitsStatistical/VisitsStatisticalActionType";
import dayjs from "dayjs";
import {getSchoolViewStatics} from "../../../network/http";

const limit = 6
export const loadData = (searchDate: Date) => {
  return async (dispatch: Dispatch<VisitsStatisticalAction>, getState: () => RootState) => {
    const state = getState();
    const visitsStatisticalState = state.homeState.visitsStatisticalState;

    const oldSearchDate = visitsStatisticalState.searchDate;

    const newDate = dayjs(searchDate);
    const oldDate = dayjs(oldSearchDate);
    if (newDate.format("YYYY-MM") === oldDate.format("YYYY-MM") && visitsStatisticalState.items.length) {
      return
    }


    dispatch({type: VisitsStatisticalActionType.CHANGE_SEARCH_DATE, searchDate})
    dispatch({type: VisitsStatisticalActionType.LOAD_DATA})
    try {
      const visitsStatisticalItems = await getSchoolViewStatics(dayjs(searchDate).format("YYYY-MM"), limit);
      dispatch({type: VisitsStatisticalActionType.LOAD_DATA_SUCCESS, items: visitsStatisticalItems})
    } catch {
      dispatch({type: VisitsStatisticalActionType.LOAD_DATA_ERROR})
    }
  }
}