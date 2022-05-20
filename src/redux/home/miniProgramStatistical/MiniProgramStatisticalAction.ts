import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {MiniProgramStatisticalAction} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalAction";
import {
  MiniProgramStatisticalActionType
} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalActionType";
import dayjs from "dayjs";
import {getMostUsedWxApplet} from "../../../network/http";

const limit = 6
export const loadData = (searchDate: Date) => {
  return async (dispatch: Dispatch<MiniProgramStatisticalAction>, getState: () => RootState) => {
    const state = getState();
    const miniProgramStatisticalState = state.homeState.miniProgramStatisticalState;

    const oldSearchDate = miniProgramStatisticalState.searchDate;
    const newDate = dayjs(searchDate);
    const oldDate = dayjs(oldSearchDate);
    if (newDate.format("YYYY-MM") === oldDate.format("YYYY-MM") && miniProgramStatisticalState.items.length) {
      return
    }

    dispatch({type: MiniProgramStatisticalActionType.CHANGE_SEARCH_DATE, searchDate})
    dispatch({type: MiniProgramStatisticalActionType.LOAD_DATA})
    try {
      const miniProgramStatisticalItems = await getMostUsedWxApplet(dayjs(searchDate).format("YYYY-MM"), limit);
      dispatch({type: MiniProgramStatisticalActionType.LOAD_DATA_SUCCESS, items: miniProgramStatisticalItems})
    } catch {
      dispatch({type: MiniProgramStatisticalActionType.LOAD_DATA_ERROR})
    }
  }
}