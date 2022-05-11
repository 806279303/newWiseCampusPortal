import {ServiceType, WiseBoardTableData} from "../WiseBoardTableData";
import {WiseBoardListActionType} from "./WiseBoardListActionType";

interface FetchWiseBoardListAction {
  type: WiseBoardListActionType.FETCH_LIST
  currentPage: number
}

interface FetchWiseBoardListSuccessAction {
  type: WiseBoardListActionType.FETCH_LIST_SUCCESS
  tableData: WiseBoardTableData[],
  totalPage: number
  total: number
}

interface FetchWiseBoardListError {
  type: WiseBoardListActionType.FETCH_LIST_ERROR
}

interface ChangeSearchSchoolName {
  type: WiseBoardListActionType.CHANGE_SEARCH_SCHOOL_NAME
  searchSchoolName: string
}

interface ChangeServiceType {
  type: WiseBoardListActionType.CHANGE_SERVICE_TYPE
  serviceType: ServiceType
}

export type WiseBoardListAction =
  | FetchWiseBoardListAction
  | FetchWiseBoardListSuccessAction
  | FetchWiseBoardListError
  | ChangeSearchSchoolName
  | ChangeServiceType