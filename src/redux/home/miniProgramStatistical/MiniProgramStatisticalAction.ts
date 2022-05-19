import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {delay} from "../../../utils/delay";
import {MiniProgramStatisticalItem} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalItem";
import {MiniProgramStatisticalAction} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalAction";
import {
  MiniProgramStatisticalActionType
} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalActionType";
import dayjs from "dayjs";

export const loadData = (searchDate: Date) => {
  return async (dispatch: Dispatch<MiniProgramStatisticalAction>, getState: () => RootState) => {
    const state = getState();
    const miniProgramStatisticalState = state.homeState.miniProgramStatisticalState;

    const oldSearchDate = miniProgramStatisticalState.searchDate;
    const newDate = dayjs(searchDate);
    const oldDate = dayjs(oldSearchDate);
    if(newDate.format("YYYY-MM") === oldDate.format("YYYY-MM") && miniProgramStatisticalState.items.length){
      return
    }


    dispatch({type: MiniProgramStatisticalActionType.CHANGE_SEARCH_DATE, searchDate})
    dispatch({type: MiniProgramStatisticalActionType.LOAD_DATA})
    await delay(1000)
    const miniProgramStatisticalData: MiniProgramStatisticalItem[] = [
      {
        miniProgramName: "车辆管理",
        num: 9
      },
      {
        miniProgramName: "智慧班牌",
        num: 13
      },
      {
        miniProgramName: "办事大厅",
        num: 16
      },
      {
        miniProgramName: "通知公告",
        num: 12
      },
      {
        miniProgramName: "校园广播",
        num: 15
      },
      {
        miniProgramName: "智能宿舍",
        num: 13
      },
    ]
    dispatch({type: MiniProgramStatisticalActionType.LOAD_DATA_SUCCESS, items: miniProgramStatisticalData})
  }
}