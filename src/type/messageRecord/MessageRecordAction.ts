import {MessageRecordActionType} from "./MessageRecordActionType";
import {MessageRecordTableItem} from "./MessageRecordTableItem";

interface ChangeCurrentPage{
  type: MessageRecordActionType.CHANGE_CURRENT_PAGE
  currentPage: number
}

interface LoadData{
  type: MessageRecordActionType.LOAD_DATA
}
interface LoadDataSuccess{
  type: MessageRecordActionType.LOAD_DATA_SUCCESS
  total: number
  totalPage: number
  messageRecordTableItems: MessageRecordTableItem[]
}
interface LoadDataError{
  type: MessageRecordActionType.LOAD_DATA_ERROR
}

export type MessageRecordAction =
  | ChangeCurrentPage
  | LoadData
  | LoadDataSuccess
  | LoadDataError