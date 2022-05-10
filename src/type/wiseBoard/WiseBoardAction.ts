import {WiseBoardActionType} from "./WiseBoardActionType";
import {ServiceType, WiseBoardTableData} from "./WiseBoardTableData";

interface FetchWiseBoardListAction {
  type: WiseBoardActionType.FETCH_LIST
  currentPage: number
}

interface FetchWiseBoardListSuccessAction {
  type: WiseBoardActionType.FETCH_LIST_SUCCESS
  tableData: WiseBoardTableData[],
  totalPage: number
  total: number
}

interface FetchWiseBoardListError {
  type: WiseBoardActionType.FETCH_LIST_ERROR
}

interface ChangeSearchSchoolName {
  type: WiseBoardActionType.CHANGE_SEARCH_SCHOOL_NAME
  searchSchoolName: string
}

interface ChangeServiceType {
  type: WiseBoardActionType.CHANGE_SERVICE_TYPE
  serviceType: ServiceType
}

interface CloseAddLayer {
  type: WiseBoardActionType.CLOSE_ADD_LAYER
}

interface OpenAddLayer {
  type: WiseBoardActionType.OPEN_ADD_LAYER
}

interface ClearAddLayer{
  type: WiseBoardActionType.CLEAR_ADD_LAYER
}

interface AddWiseBoardSchoolIdChange {
  type: WiseBoardActionType.ADD_WISE_BOARD_SCHOOL_ID_CHANGE
  schoolId: number
}

interface AddWiseBoardServiceTypeChange {
  type: WiseBoardActionType.ADD_WISE_BOARD_SERVICE_TYPE_CHANGE,
  serviceType: ServiceType
}


interface AddWiseBoardBuyCallTimeChange {
  type: WiseBoardActionType.ADD_WISE_BOARD_BUY_CALL_TIME_CHANGE,
  buyCallTime: number
}

export type WiseBoardAction =
  | FetchWiseBoardListAction
  | FetchWiseBoardListSuccessAction
  | FetchWiseBoardListError
  | ChangeSearchSchoolName
  | ChangeServiceType
  | CloseAddLayer
  | OpenAddLayer
  | ClearAddLayer
  | AddWiseBoardSchoolIdChange
  | AddWiseBoardServiceTypeChange
  | AddWiseBoardBuyCallTimeChange
