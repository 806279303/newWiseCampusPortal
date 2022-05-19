import {ExceptionTableCardActionType} from "./ExceptionTableCardActionType";
import {ExceptionTableItem} from "./ExceptionTableItem";

interface LoadData{
  type: ExceptionTableCardActionType.LOAD_DATA
}
interface LoadDataSuccess{
  type: ExceptionTableCardActionType.LOAD_DATA_SUCCESS
  items: ExceptionTableItem[]
}
interface LoadDataError{
  type: ExceptionTableCardActionType.LOAD_DATA_ERROR
}

export type ExceptionTableCardAction =
  | LoadData
  | LoadDataSuccess
  | LoadDataError