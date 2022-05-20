import {Dispatch} from "redux";
import {RootState} from "../rootReducer";
import {LogMgAction} from "../../type/logMg/LogMgAction";
import {getOperationLog} from "../../network/http";
import {LogMgActionType} from "../../type/logMg/LogMgActionType";

const pageSize = 10
export const loadData = (newSearchStr?: string, loadPage?: number) => {
  return async (dispatch: Dispatch<LogMgAction>, getState: () => RootState) => {
    const state = getState();
    const {
      searchStr: oldSearchStr,
      currentPage
    } = state.logMgState

    const searchStr = newSearchStr ? newSearchStr : oldSearchStr
    const nextPage = loadPage ? loadPage : currentPage
    dispatch({type: LogMgActionType.CHANGE_CURRENT_PAGE, currentPage: nextPage})

    try {
      const operationLogItemPageResult = await getOperationLog({
        searchStr,
        pageNum: nextPage,
        pageSize: pageSize
      });
      dispatch({
        type: LogMgActionType.LOAD_SUCCESS,
        operationLogItems: operationLogItemPageResult.list,
        total: operationLogItemPageResult.total,
        totalPage: operationLogItemPageResult.pages
      })
    } catch {
      dispatch({type: LogMgActionType.LOAD_ERROR})
    }

  }
}