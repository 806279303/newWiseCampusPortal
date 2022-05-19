import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {ExceptionTableCardAction} from "../../../type/home/exceptionTableCard/ExceptionTableCardAction";
import {ExceptionTableCardActionType} from "../../../type/home/exceptionTableCard/ExceptionTableCardActionType";
import {delay} from "../../../utils/delay";
import {ExceptionTableItem} from "../../../type/home/exceptionTableCard/ExceptionTableItem";

export const loadData = () => {
  return async (dispatch: Dispatch<ExceptionTableCardAction>, getState: () => RootState) => {
    // const state = getState();
    // const exceptionTableCardState = state.homeState.exceptionTableCardState;
    // if(exceptionTableCardState.items.length){
    //   return
    // }

    dispatch({type: ExceptionTableCardActionType.LOAD_DATA})
    await delay(1000)
    const exceptionData: ExceptionTableItem[] = [
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
    ]
    dispatch({type: ExceptionTableCardActionType.LOAD_DATA_SUCCESS, items: exceptionData})
  }
}