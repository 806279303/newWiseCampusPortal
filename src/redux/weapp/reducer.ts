import {WeappState} from "../../type/weapp/WeappState";
import {WeappActionType} from "../../type/weapp/WeappActionType";
import {WeappAction} from "../../type/weapp/WeappAction";

const initialState: WeappState = {
  loading: false
}

export const weappReducer = (state = initialState, action: WeappAction) => {
  switch (action.type) {
    case WeappActionType.FETCH_WEAPP_LIST:
      return {...state, loading: true}
    case WeappActionType.FETCH_WEAPP_LIST_SUCCESS:
      return {...state, loading: false}
    default:
      return state
  }
}