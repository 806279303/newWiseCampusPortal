import {VisitsStatisticalActionType} from "./VisitsStatisticalActionType";
import {VisitsStatisticalItem} from "./VisitsStatisticalItem";

interface ChangeSearchDate {
  type: VisitsStatisticalActionType.CHANGE_SEARCH_DATE
  searchDate: Date
}

interface LoadData {
  type: VisitsStatisticalActionType.LOAD_DATA
}

interface LoadDataSuccess {
  type: VisitsStatisticalActionType.LOAD_DATA_SUCCESS
  items: VisitsStatisticalItem[]
}

interface LoadDataError {
  type: VisitsStatisticalActionType.LOAD_DATA_ERROR
}

export type VisitsStatisticalAction =
  | ChangeSearchDate
  | LoadData
  | LoadDataSuccess
  | LoadDataError