import {ExceptionStatisticalActionType} from "./ExceptionStatisticalActionType";
import {ExceptionStatisticalItem} from "./ExceptionStatisticalItem";

interface ChangeSearchDate{
  type: ExceptionStatisticalActionType.CHANGE_SEARCH_DATE
  searchDate: Date
}


interface LoadData{
  type: ExceptionStatisticalActionType.LOAD_DATA
}


interface LoadDataSuccess{
  type: ExceptionStatisticalActionType.LOAD_DATA_SUCCESS
  items: ExceptionStatisticalItem[]
}


interface LoadDataError{
  type: ExceptionStatisticalActionType.LOAD_DATA_ERROR

}

export type ExceptionStatisticalAction =
  | ChangeSearchDate
  | LoadData
  | LoadDataSuccess
  | LoadDataError