import {WiseBoardState} from "../../type/wiseBoard/WiseBoardState";
import {WiseBoardAction} from "../../type/wiseBoard/WiseBoardAction";
import {WiseBoardActionType} from "../../type/wiseBoard/WiseBoardActionType";

const initialState: WiseBoardState = {
  loading: true,
  tableData: []
}

export const wiseBoardReducer = (state: WiseBoardState = initialState, action: WiseBoardAction) => {
  switch (action.type) {
    case WiseBoardActionType.FETCH_WISE_BOARD_LIST:
      return {...state, loading: true}
    case WiseBoardActionType.FETCH_WISE_BOARD_LIST_SUCCESS:
      return {...state, loading: false, tableData: action.tableData}
    default:
      return state
  }
}