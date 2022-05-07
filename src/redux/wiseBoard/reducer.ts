import {WiseBoardState} from "../../type/wiseBoard/WiseBoardState";
import {WiseBoardAction} from "../../type/wiseBoard/WiseBoardAction";
import {WiseBoardActionType} from "../../type/wiseBoard/WiseBoardActionType";

const initialState: WiseBoardState = {
  loading: true,
  currentPage: 1,
  tableData: [],
  totalPage: 0,
}

export const wiseBoardReducer = (state: WiseBoardState = initialState, action: WiseBoardAction) => {
  switch (action.type) {
    case WiseBoardActionType.FETCH_WISE_BOARD_LIST:
      return {...state, loading: true}
    case WiseBoardActionType.FETCH_WISE_BOARD_LIST_SUCCESS:
      return {...state, loading: false, tableData: action.tableData, totalPage: action.totalPage}
    case WiseBoardActionType.FETCH_WISE_BOARD_LIST_ERROR:
      return {... state, loading: false}
    case WiseBoardActionType.CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    default:
      return state
  }
}