import {MiniProgramStatisticalActionType} from "./MiniProgramStatisticalActionType";
import {MiniProgramStatisticalItem} from "./MiniProgramStatisticalItem";

interface ChangeSearchDate{
  type: MiniProgramStatisticalActionType.CHANGE_SEARCH_DATE
  searchDate: Date
}


interface LoadData{
  type: MiniProgramStatisticalActionType.LOAD_DATA
}


interface LoadDataSuccess{
  type: MiniProgramStatisticalActionType.LOAD_DATA_SUCCESS
  items: MiniProgramStatisticalItem[]
}


interface LoadDataError{
  type: MiniProgramStatisticalActionType.LOAD_DATA_ERROR

}

export type MiniProgramStatisticalAction =
  | ChangeSearchDate
  | LoadData
  | LoadDataSuccess
  | LoadDataError