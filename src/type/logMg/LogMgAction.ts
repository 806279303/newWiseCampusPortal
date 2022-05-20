import {LogMgActionType} from "./LogMgActionType";
import {OperationLogItem} from "./OperationLogItem";

interface ChangeSearchStr{
  type: LogMgActionType.CHANGE_SEARCH_STR
  searchStr: string
}
interface LoadData{
  type: LogMgActionType.LOAD_DATA
}
interface LoadSuccess{
  type: LogMgActionType.LOAD_SUCCESS
  operationLogItems: OperationLogItem[]
  totalPage: number
  total: number
}
interface LoadError{
  type: LogMgActionType.LOAD_ERROR
}

interface ChangeCurrentPage{
  type: LogMgActionType.CHANGE_CURRENT_PAGE
  currentPage: number
}


export type LogMgAction =
  | ChangeSearchStr
  | LoadData
  | LoadSuccess
  | LoadError
  | ChangeCurrentPage