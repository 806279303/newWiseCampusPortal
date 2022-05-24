import {MessageRecordState} from "../../type/messageRecord/MessageRecordState";
import {MessageRecordAction} from "../../type/messageRecord/MessageRecordAction";
import {MessageRecordActionType} from "../../type/messageRecord/MessageRecordActionType";

const initialState: MessageRecordState = {
  loading: false,
  currentPage: 0,
  total: 0,
  totalPage: 0,
  messageRecordTableItems: []
}

export const messageRecordReducer = (state: MessageRecordState = initialState, action: MessageRecordAction): MessageRecordState => {
  switch (action.type) {
    case MessageRecordActionType.CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case MessageRecordActionType.LOAD_DATA:
      return {...state, loading: true}
    case MessageRecordActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, total: action.total, totalPage: action.totalPage, messageRecordTableItems: action.messageRecordTableItems}
    case MessageRecordActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}