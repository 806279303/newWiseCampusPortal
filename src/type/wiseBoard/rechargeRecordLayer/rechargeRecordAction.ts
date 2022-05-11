import {RechargeRecordActionType} from "./rechargeRecordActionType";
import {WiseBoardTableData} from "../WiseBoardTableData";
import {RechargeRecordResult} from "./rechargeRecordResult";

interface OpenLayer {
  type: RechargeRecordActionType.OPEN_LAYER
  querySchool: WiseBoardTableData
}

interface CloseLayer {
  type: RechargeRecordActionType.CLOSE_LAYER
}

interface FetchList {
  type: RechargeRecordActionType.FETCH_LIST
  currentPage: number
}

interface FetchListError {
  type: RechargeRecordActionType.FETCH_LIST_ERROR
}

interface FetchListSuccess {
  type: RechargeRecordActionType.FETCH_LIST_SUCCESS
  recordResult: RechargeRecordResult
}


export type RechargeRecordAction =
  | OpenLayer
  | CloseLayer
  | FetchList
  | FetchListError
  | FetchListSuccess