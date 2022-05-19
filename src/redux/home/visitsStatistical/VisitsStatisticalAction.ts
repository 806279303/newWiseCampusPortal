import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {VisitsStatisticalAction} from "../../../type/home/visitsStatistical/VisitsStatisticalAction";
import {VisitsStatisticalActionType} from "../../../type/home/visitsStatistical/VisitsStatisticalActionType";
import {delay} from "../../../utils/delay";
import {VisitsStatisticalItem} from "../../../type/home/visitsStatistical/VisitsStatisticalItem";
import dayjs from "dayjs";

export const loadData = (searchDate: Date) => {
  return async (dispatch: Dispatch<VisitsStatisticalAction>, getState: () => RootState) => {
    const state = getState();
    const visitsStatisticalState = state.homeState.visitsStatisticalState;

    const oldSearchDate = visitsStatisticalState.searchDate;

    const newDate = dayjs(searchDate);
    const oldDate = dayjs(oldSearchDate);
    if(newDate.format("YYYY-MM") === oldDate.format("YYYY-MM") && visitsStatisticalState.items.length){
      return
    }


    dispatch({type: VisitsStatisticalActionType.CHANGE_SEARCH_DATE, searchDate})
    dispatch({type: VisitsStatisticalActionType.LOAD_DATA})
    await delay(1000)
    const visitsStatisticalData: VisitsStatisticalItem[] = [
      {
        schoolName: "智慧学校1",
        num: 9
      },
      {
        schoolName: "智慧学校2",
        num: 13
      },
      {
        schoolName: "智慧学校3",
        num: 16
      },
      {
        schoolName: "智慧学校4",
        num: 12
      },
      {
        schoolName: "智慧学校5",
        num: 15
      },
      {
        schoolName: "智慧学校6",
        num: 13
      },
    ]
    dispatch({type: VisitsStatisticalActionType.LOAD_DATA_SUCCESS, items: visitsStatisticalData})
  }
}