import {WiseBoardActionType} from "./WiseBoardActionType";
import {ServiceType, WiseBoardTableData} from "./WiseBoardTableData";

interface FetchWiseBoardListAction{
  type: WiseBoardActionType.FETCH_LIST
  currentPage: number
}

interface FetchWiseBoardListSuccessAction{
  type: WiseBoardActionType.FETCH_LIST_SUCCESS
  tableData: WiseBoardTableData[],
  totalPage: number
  total: number
}

interface FetchWiseBoardListError{
  type: WiseBoardActionType.FETCH_LIST_ERROR
}

interface ChangeSearchSchoolName{
  type: WiseBoardActionType.CHANGE_SEARCH_SCHOOL_NAME
  searchSchoolName: string
}

interface ChangeServiceType{
  type: WiseBoardActionType.CHANGE_SERVICE_TYPE,
  serviceType: ServiceType
}

export type WiseBoardAction =
  | FetchWiseBoardListAction
  | FetchWiseBoardListSuccessAction
  | FetchWiseBoardListError
  | ChangeSearchSchoolName
  | ChangeServiceType