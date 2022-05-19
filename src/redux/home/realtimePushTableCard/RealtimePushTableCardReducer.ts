import {RealtimePushTableCardState} from "../../../type/home/realtimePushTableCard/RealtimePushTableCardState";
import {RealtimePushTableCardAction} from "../../../type/home/realtimePushTableCard/RealtimePushTableCardAction";
import {
  RealtimePushTableCardActionType
} from "../../../type/home/realtimePushTableCard/RealtimePushTableCardActionType";


const initialState: RealtimePushTableCardState = {
  loading: false,
  items: []
}

export const realtimePushTableCardReducer = (state: RealtimePushTableCardState = initialState, action: RealtimePushTableCardAction): RealtimePushTableCardState => {
  switch (action.type) {
    case RealtimePushTableCardActionType.LOAD_DATA:
      return {...state, loading: true}
    case RealtimePushTableCardActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, items: action.items}
    case RealtimePushTableCardActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}