import {Dispatch} from "redux";
import {WiseBoardAction} from "../../type/wiseBoard/WiseBoardAction";
import {WiseBoardActionType} from "../../type/wiseBoard/WiseBoardActionType";
import {getWiseBoardList} from "../../network/http";

export const fetchWiseBoardListAction = (page: number) => {
  return async (dispatch: Dispatch<WiseBoardAction>) => {
    dispatch({type: WiseBoardActionType.FETCH_WISE_BOARD_LIST})
    dispatch({type: WiseBoardActionType.CHANGE_CURRENT_PAGE, currentPage: page})
    try {
      let wiseBoardListResult = await getWiseBoardList(page, 10);
      dispatch({
        type: WiseBoardActionType.FETCH_WISE_BOARD_LIST_SUCCESS,
        tableData: wiseBoardListResult.list,
        totalPage: wiseBoardListResult.size
      })
    } catch (e) {
      console.error(e)
      dispatch({
        type: WiseBoardActionType.FETCH_WISE_BOARD_LIST_ERROR
      })
    }

  }
}