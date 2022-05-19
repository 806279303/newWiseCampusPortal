import {RealtimePushTableCardActionType} from "./RealtimePushTableCardActionType";
import {RealtimePushTableItem} from "./RealtimePushTableItem";

interface LoadData{
  type: RealtimePushTableCardActionType.LOAD_DATA
}
interface LoadDataSuccess{
  type: RealtimePushTableCardActionType.LOAD_DATA_SUCCESS
  items: RealtimePushTableItem[]
}
interface LoadDataError{
  type: RealtimePushTableCardActionType.LOAD_DATA_ERROR
}

export type RealtimePushTableCardAction =
  | LoadData
  | LoadDataSuccess
  | LoadDataError