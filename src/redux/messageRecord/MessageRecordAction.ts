import {Dispatch} from "redux";
import {MessageRecordAction} from "../../type/messageRecord/MessageRecordAction";
import {RootState} from "../rootReducer";
import {getWxPushRecord} from "../../network/http";
import {MessageRecordActionType} from "../../type/messageRecord/MessageRecordActionType";


const pageSize = 10
export const loadData = (page: number) => {
  return async (dispatch: Dispatch<MessageRecordAction>, getState: () => RootState) => {
    dispatch({type: MessageRecordActionType.CHANGE_CURRENT_PAGE, currentPage: page})
    dispatch({type: MessageRecordActionType.LOAD_DATA})
    try {
      const messageRecordTableItemPageResult = await getWxPushRecord(page, pageSize);
      dispatch({
        type: MessageRecordActionType.LOAD_DATA_SUCCESS,
        total: messageRecordTableItemPageResult.total,
        totalPage: messageRecordTableItemPageResult.pages,
        messageRecordTableItems: messageRecordTableItemPageResult.list
      })
    } catch {
      dispatch({type: MessageRecordActionType.LOAD_DATA_ERROR})
    }
  }
}