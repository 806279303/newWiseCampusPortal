import {WiseBoardActionType} from "./WiseBoardActionType";
import {WiseBoardTableData} from "./WiseBoardTableData";

interface FetchWiseBoardListAction{
  type: WiseBoardActionType.FETCH_WISE_BOARD_LIST
}

interface FetchWiseBoardListSuccessAction{
  type: WiseBoardActionType.FETCH_WISE_BOARD_LIST_SUCCESS
  tableData: WiseBoardTableData[]
}

export type WiseBoardAction = FetchWiseBoardListAction | FetchWiseBoardListSuccessAction