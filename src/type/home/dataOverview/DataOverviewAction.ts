import {DataOverviewActionType} from "./DataOverviewActionType";

interface ChangeSearchDate {
  type: DataOverviewActionType.CHANGE_SEARCH_DATE
  searchDate: Date
}

interface LoadData {
  type: DataOverviewActionType.LOAD_DATA
}

interface LoadDataSuccess {
  type: DataOverviewActionType.LOAD_DATA_SUCCESS
  loginNumber: number
  pushNumber: number
  exceptionNumber: number
}

interface LoadDataError {
  type: DataOverviewActionType.LOAD_DATA_ERROR
}

export type DataOverviewAction =
  | ChangeSearchDate
  | LoadData
  | LoadDataSuccess
  | LoadDataError