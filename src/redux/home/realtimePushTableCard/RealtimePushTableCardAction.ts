import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {RealtimePushTableCardAction} from "../../../type/home/realtimePushTableCard/RealtimePushTableCardAction";
import {
  RealtimePushTableCardActionType
} from "../../../type/home/realtimePushTableCard/RealtimePushTableCardActionType";
import {delay} from "../../../utils/delay";
import {RealtimePushTableItem} from "../../../type/home/realtimePushTableCard/RealtimePushTableItem";

export const loadData = () => {
  return async (dispatch: Dispatch<RealtimePushTableCardAction>, getState: () => RootState) => {
    // const state = getState();
    // const realtimePushTableCardState = state.homeState.realtimePushTableCardState;
    // if (realtimePushTableCardState.items.length){
    //   return
    // }

    dispatch({type: RealtimePushTableCardActionType.LOAD_DATA})
    await delay(1000)
    const realtimePushData: RealtimePushTableItem[] = [
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
    ]
    dispatch({type: RealtimePushTableCardActionType.LOAD_DATA_SUCCESS, items: realtimePushData})
  }
}