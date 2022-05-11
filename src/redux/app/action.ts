import {getWxSchoolSimpleInfo} from "../../network/http";
import {Dispatch} from "redux";
import {AppAction} from "../../type/app/appAction";
import {RootState} from "../rootReducer";
import {AppActionType} from "../../type/app/appActionType";

export const fetchAllSchoolSimpleInfo = () => {
  return async (dispatch: Dispatch<AppAction>, getState: () => RootState) => {
    let state = getState();
    if(state.appReducer.allSchoolSimpleInfos.length > 0){
      return
    }
    console.log("to load school")
    try{
      let wxSchoolSimpleInfo = await getWxSchoolSimpleInfo();
      dispatch({type: AppActionType.FETCH_ALL_SCHOOL_SIMPLE_INFO_SUCCESS, allSchoolSimpleInfos: wxSchoolSimpleInfo})
    }catch (e){
      console.error(e)
    }
  }
}

export const fetchUnpurchasedSchoolSimpleInfos = () => {
  console.log("fetchUnpurchasedSchoolSimpleInfos")
  return async (dispatch: Dispatch<AppAction>, getState: () => RootState) => {
    try{
      let wxSchoolSimpleInfo = await getWxSchoolSimpleInfo({
        filterWiseBoardCall: 1
      });
      dispatch({type: AppActionType.FETCH_UNPURCHASED_SCHOOL_SIMPLE_INFO_SUCCESS, unpurchasedSchoolSimpleInfos: wxSchoolSimpleInfo})
    }catch (e){
      console.error(e)
    }
  }
}