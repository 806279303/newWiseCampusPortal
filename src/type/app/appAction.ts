import {AppActionType} from "./appActionType";
import {WxSchoolSimpleInfo} from "../WxSchoolSimpleInfo";

interface FetchSchoolSimpleInfo{
  type: AppActionType.FETCH_SCHOOL_SIMPLE_INFO
}

interface FetchSchoolSimpleInfoSuccess{
  type: AppActionType.FETCH_SCHOOL_SIMPLE_INFO_SUCCESS
  schoolSimpleInfos: WxSchoolSimpleInfo[]
}

export type AppAction =
  | FetchSchoolSimpleInfo
  | FetchSchoolSimpleInfoSuccess