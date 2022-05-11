import {WiseBoardListState} from "../../../type/wiseBoard/WiseBoardState";
import {ServiceType} from "../../../type/wiseBoard/WiseBoardTableData";
import {WiseBoardListAction} from "../../../type/wiseBoard/wiseBoardList/WiseBoardListAction";
import {WiseBoardListActionType} from "../../../type/wiseBoard/wiseBoardList/WiseBoardListActionType";

const initialState: WiseBoardListState = {
  loading: true,
  currentPage: 1,
  tableData: [],
  totalPage: 0,
  serviceType: ServiceType.ALL,
  searchSchoolName: "",
  total: 0,
}

export const wiseBoardListReducer= (state: WiseBoardListState = initialState, action: WiseBoardListAction): WiseBoardListState => {
  switch (action.type) {
    case WiseBoardListActionType.FETCH_LIST:
      return {...state, loading: true, currentPage: action.currentPage}
    case WiseBoardListActionType.FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tableData: action.tableData,
        totalPage: action.totalPage,
        total: action.total
      }
    case WiseBoardListActionType.FETCH_LIST_ERROR:
      return {...state, loading: false}
    case WiseBoardListActionType.CHANGE_SEARCH_SCHOOL_NAME:
      return {...state, searchSchoolName: action.searchSchoolName}
    case WiseBoardListActionType.CHANGE_SERVICE_TYPE:
      return {...state, serviceType: action.serviceType}
    default:
      return state
  }
}