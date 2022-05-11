import {AppActionType} from "./appActionType";
import {WxSchoolSimpleInfo} from "../WxSchoolSimpleInfo";

interface FetchAllSchoolSimpleInfo {
  type: AppActionType.FETCH_ALL_SCHOOL_SIMPLE_INFO
}

interface FetchALLSchoolSimpleInfoSuccess {
  type: AppActionType.FETCH_ALL_SCHOOL_SIMPLE_INFO_SUCCESS
  allSchoolSimpleInfos: WxSchoolSimpleInfo[]
}

interface FetchUnpurchasedSchoolSimpleInfo {
  type: AppActionType.FETCH_UNPURCHASED_SCHOOL_SIMPLE_INFO
}

interface FetchUnpurchasedSchoolSimpleInfoSuccess {
  type: AppActionType.FETCH_UNPURCHASED_SCHOOL_SIMPLE_INFO_SUCCESS
  unpurchasedSchoolSimpleInfos: WxSchoolSimpleInfo[]
}

export type AppAction =
  | FetchAllSchoolSimpleInfo
  | FetchALLSchoolSimpleInfoSuccess
  | FetchUnpurchasedSchoolSimpleInfo
  | FetchUnpurchasedSchoolSimpleInfoSuccess