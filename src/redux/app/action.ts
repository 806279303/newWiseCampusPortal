import {getWxSchoolSimpleInfo} from "../../network/http";
import {Dispatch} from "redux";
import {AppAction} from "../../type/app/appAction";
import {RootState} from "../rootReducer";
import {AppActionType} from "../../type/app/appActionType";

export const fetchSchoolSimpleInfo = () => {
  return async (dispatch: Dispatch<AppAction>, getState: () => RootState) => {
    let state = getState();
    if(state.appReducer.schoolSimpleInfos.length > 0){
      return
    }
    console.log("to load school")
    try{
      let wxSchoolSimpleInfo = await getWxSchoolSimpleInfo();
      dispatch({type: AppActionType.FETCH_SCHOOL_SIMPLE_INFO_SUCCESS, schoolSimpleInfos: wxSchoolSimpleInfo})
    }catch (e){
      console.error(e)
    }
  }
}