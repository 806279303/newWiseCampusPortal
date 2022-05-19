import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {ExceptionStatisticalAction} from "../../../type/home/exceptionStatistical/ExceptionStatisticalAction";
import {ExceptionStatisticalActionType} from "../../../type/home/exceptionStatistical/ExceptionStatisticalActionType";
import {delay} from "../../../utils/delay";
import {ExceptionStatisticalItem} from "../../../type/home/exceptionStatistical/ExceptionStatisticalItem";
import dayjs from "dayjs";

export const loadData = (searchDate: Date) => {
  return async (dispatch: Dispatch<ExceptionStatisticalAction>, getState: () => RootState) => {
    const state = getState();
    const exceptionStatisticalState = state.homeState.exceptionStatisticalState;
    const oldSearchDate = exceptionStatisticalState.searchDate;
    const newDate = dayjs(searchDate);
    const oldDate = dayjs(oldSearchDate);
    if(newDate.format("YYYY-MM") === oldDate.format("YYYY-MM") && exceptionStatisticalState.items.length){
      return
    }

    dispatch({type: ExceptionStatisticalActionType.CHANGE_SEARCH_DATE, searchDate})
    dispatch({type: ExceptionStatisticalActionType.LOAD_DATA})
    await delay(1000)
    const exceptionStatisticalData: ExceptionStatisticalItem[] = [
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
    dispatch({type: ExceptionStatisticalActionType.LOAD_DATA_SUCCESS, items: exceptionStatisticalData})
  }
}