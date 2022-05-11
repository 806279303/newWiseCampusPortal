import {WiseBoardTableData} from "../WiseBoardTableData";
import {RechargeRecordResult} from "./rechargeRecordResult";

export interface RechargeRecordState{
  showLayer: boolean
  loading: boolean
  currentPage: number
  querySchool: WiseBoardTableData | null
  recordResult: RechargeRecordResult | null
}