import {WiseBoardActionType} from "./WiseBoardActionType";
import {WiseBoardTableData} from "./WiseBoardTableData";

interface FetchWiseBoardListAction{
  type: WiseBoardActionType.FETCH_WISE_BOARD_LIST
}

interface FetchWiseBoardListSuccessAction{
  type: WiseBoardActionType.FETCH_WISE_BOARD_LIST_SUCCESS
  tableData: WiseBoardTableData[],
  totalPage: number
}

interface FetchWiseBoardListError{
  type: WiseBoardActionType.FETCH_WISE_BOARD_LIST_ERROR
}

interface WiseBoardChangeCurrentPageAction{
  type: WiseBoardActionType.CHANGE_CURRENT_PAGE
  currentPage: number
}


export type WiseBoardAction = FetchWiseBoardListAction
  | FetchWiseBoardListSuccessAction
  | WiseBoardChangeCurrentPageAction
  | FetchWiseBoardListError