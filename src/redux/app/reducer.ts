import {AppState} from "../../type/app/appState";
import {AppAction} from "../../type/app/appAction";
import {AppActionType} from "../../type/app/appActionType";


const initialState: AppState = {
  allSchoolSimpleInfos: [],
  unpurchasedSchoolSimpleInfos: []
}

export const appReducer = (state: AppState = initialState, action: AppAction) => {
  switch (action.type){
    case AppActionType.FETCH_ALL_SCHOOL_SIMPLE_INFO_SUCCESS:
      return {...state, allSchoolSimpleInfos: action.allSchoolSimpleInfos}
    case AppActionType.FETCH_UNPURCHASED_SCHOOL_SIMPLE_INFO_SUCCESS:
      return {...state, unpurchasedSchoolSimpleInfos: action.unpurchasedSchoolSimpleInfos}
    default:
      return state
  }
}