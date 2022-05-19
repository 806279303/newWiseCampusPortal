import {ExceptionTableCardState} from "../../../type/home/exceptionTableCard/ExceptionTableCardState";
import {ExceptionTableCardAction} from "../../../type/home/exceptionTableCard/ExceptionTableCardAction";
import {ExceptionTableCardActionType} from "../../../type/home/exceptionTableCard/ExceptionTableCardActionType";


const initialState: ExceptionTableCardState = {
  loading: false,
  items: []
}

export const exceptionTableCardReducer = (state: ExceptionTableCardState = initialState, action: ExceptionTableCardAction): ExceptionTableCardState => {
  switch (action.type) {
    case ExceptionTableCardActionType.LOAD_DATA:
      return {...state, loading: true}
    case ExceptionTableCardActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, items: action.items}
    case ExceptionTableCardActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}