import {ExceptionStatisticalState} from "../../../type/home/exceptionStatistical/ExceptionStatisticalState";
import {ExceptionStatisticalAction} from "../../../type/home/exceptionStatistical/ExceptionStatisticalAction";
import {ExceptionStatisticalActionType} from "../../../type/home/exceptionStatistical/ExceptionStatisticalActionType";


const initialState: ExceptionStatisticalState = {
  searchDate: new Date(),
  items: [],
  loading: false,
}

export const exceptionStatisticalReducer = (state: ExceptionStatisticalState = initialState, action: ExceptionStatisticalAction): ExceptionStatisticalState => {
  switch (action.type){
    case ExceptionStatisticalActionType.CHANGE_SEARCH_DATE:
      return {...state, searchDate: action.searchDate}
    case ExceptionStatisticalActionType.LOAD_DATA:
      return {...state, loading: true}
    case ExceptionStatisticalActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, items: action.items}
    case ExceptionStatisticalActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}