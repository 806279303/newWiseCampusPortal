import {WiseBoardState} from "../../type/wiseBoard/WiseBoardState";
import {WiseBoardAction} from "../../type/wiseBoard/WiseBoardAction";
import {WiseBoardActionType} from "../../type/wiseBoard/WiseBoardActionType";
import {ServiceType} from "../../type/wiseBoard/WiseBoardTableData";

const initialState: WiseBoardState = {
  loading: true,
  currentPage: 1,
  tableData: [],
  totalPage: 0,
  serviceType: ServiceType.ALL,
  searchSchoolName: "",
  total: 0,
  showAddWiseBoardLayer: false,
  addWiseBoardSchoolId: -1,
  addWiseBoardServiceType: ServiceType.TRIAL,
  addWiseBoardBuyCallTime: 1,
}

export const wiseBoardReducer = (state: WiseBoardState = initialState, action: WiseBoardAction): WiseBoardState => {
  switch (action.type) {
    case WiseBoardActionType.FETCH_LIST:
      return {...state, loading: true, currentPage: action.currentPage}
    case WiseBoardActionType.FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tableData: action.tableData,
        totalPage: action.totalPage,
        total: action.total
      }
    case WiseBoardActionType.FETCH_LIST_ERROR:
      return {...state, loading: false}
    case WiseBoardActionType.CHANGE_SEARCH_SCHOOL_NAME:
      return {...state, searchSchoolName: action.searchSchoolName}
    case WiseBoardActionType.CHANGE_SERVICE_TYPE:
      return {...state, serviceType: action.serviceType}
    case WiseBoardActionType.OPEN_ADD_LAYER:
      return {...state, showAddWiseBoardLayer: true}
    case WiseBoardActionType.CLOSE_ADD_LAYER:
      return {...state, showAddWiseBoardLayer: false}
    case WiseBoardActionType.CLEAR_ADD_LAYER:
      return {
        ...state,
        addWiseBoardSchoolId: initialState.addWiseBoardSchoolId,
        addWiseBoardServiceType: initialState.addWiseBoardServiceType,
        addWiseBoardBuyCallTime: initialState.addWiseBoardBuyCallTime,
      }
    case WiseBoardActionType.ADD_WISE_BOARD_SCHOOL_ID_CHANGE:
      return {...state, addWiseBoardSchoolId: action.schoolId}
    case WiseBoardActionType.ADD_WISE_BOARD_SERVICE_TYPE_CHANGE:
      return {...state, addWiseBoardServiceType: action.serviceType}
    case WiseBoardActionType.ADD_WISE_BOARD_BUY_CALL_TIME_CHANGE:
      return {...state, addWiseBoardBuyCallTime: action.buyCallTime}
    default:
      return state
  }
}