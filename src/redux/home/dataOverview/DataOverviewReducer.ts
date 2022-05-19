import {DataOverviewState} from "../../../type/home/dataOverview/DataOverviewState";
import {DataOverviewAction} from "../../../type/home/dataOverview/DataOverviewAction";
import {DataOverviewActionType} from "../../../type/home/dataOverview/DataOverviewActionType";


const initialState: DataOverviewState = {
  searchDate: new Date(),
  loginNumber: 0,
  pushNumber: 0,
  exceptionNumber: 0,
  loading: false,
}


export const dataOverviewReducer = ( state: DataOverviewState = initialState, action: DataOverviewAction ): DataOverviewState => {
  switch (action.type){
    case DataOverviewActionType.CHANGE_SEARCH_DATE:
      return {...state, searchDate: action.searchDate}
    case DataOverviewActionType.LOAD_DATA:
      return {...state, loading: true}
    case DataOverviewActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, loginNumber: action.loginNumber, pushNumber: action.pushNumber, exceptionNumber: action.exceptionNumber}
    case DataOverviewActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}