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
  total: 0
}

export const wiseBoardReducer = (state: WiseBoardState = initialState, action: WiseBoardAction) => {
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
    default:
      return state
  }
}