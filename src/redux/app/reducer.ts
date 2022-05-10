import {AppState} from "../../type/app/appState";
import {AppAction} from "../../type/app/appAction";
import {AppActionType} from "../../type/app/appActionType";


const initialState: AppState = {
  schoolSimpleInfos: []
}

export const appReducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type){
    case AppActionType.FETCH_SCHOOL_SIMPLE_INFO_SUCCESS:
      return {...state, schoolSimpleInfos: action.schoolSimpleInfos}
    default:
      return state
  }
}