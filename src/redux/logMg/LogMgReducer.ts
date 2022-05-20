import {LogMgState} from "../../type/logMg/LogMgState";
import {LogMgAction} from "../../type/logMg/LogMgAction";
import {LogMgActionType} from "../../type/logMg/LogMgActionType";


const initialState: LogMgState = {
  searchStr: "",
  loading: false,
  currentPage: 1,
  operationLogItems: [],
  total: 0,
  totalPage: 0
}

export const logMgReducer = (state: LogMgState = initialState, action: LogMgAction): LogMgState => {
  switch (action.type) {
    case LogMgActionType.CHANGE_SEARCH_STR:
      return {...state, searchStr: action.searchStr}
    case LogMgActionType.CHANGE_CURRENT_PAGE:
      return {...state,currentPage: action.currentPage}
    case LogMgActionType.LOAD_DATA:
      return {...state, loading: true}
    case LogMgActionType.LOAD_SUCCESS:
      return {...state, loading: false, operationLogItems: action.operationLogItems , totalPage: action.totalPage, total: action.total}
    case LogMgActionType.LOAD_ERROR:
      return {...state, loading: false}
    default:
      return initialState
  }
}