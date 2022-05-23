import {Dispatch} from "redux";
import {RootState} from "../../rootReducer";
import {DataOverviewAction} from "../../../type/home/dataOverview/DataOverviewAction";
import {DataOverviewActionType} from "../../../type/home/dataOverview/DataOverviewActionType";
import {delay} from "../../../utils/delay";
import dayjs from "dayjs";
import {getDataOverview} from "../../../network/http";

export const loadData = (searchDate: Date) => {
  return async (dispatch: Dispatch<DataOverviewAction>, getState: () => RootState) => {

    const state = getState();
    const dataOverviewState = state.homeState.dataOverviewState;
    const oldSearchDate = dataOverviewState.searchDate;

    const newDate = dayjs(searchDate);
    const oldDate = dayjs(oldSearchDate);
    if (newDate.format("YYYY-MM") === oldDate.format("YYYY-MM")
      && (dataOverviewState.loginNumber || dataOverviewState.exceptionNumber || dataOverviewState.pushNumber)) {
      return
    }

    dispatch({type: DataOverviewActionType.CHANGE_SEARCH_DATE, searchDate})
    dispatch({type: DataOverviewActionType.LOAD_DATA})
    try {
      const result = await getDataOverview(dayjs(searchDate).format("YYYY-MM"));
      dispatch({
        type: DataOverviewActionType.LOAD_DATA_SUCCESS,
        loginNumber: result.viewNumber,
        pushNumber: result.pushMessageNumber,
        exceptionNumber: result.exceptionNumber
      })
    } catch {
      dispatch({type: DataOverviewActionType.LOAD_DATA_ERROR})
    }
  }
}