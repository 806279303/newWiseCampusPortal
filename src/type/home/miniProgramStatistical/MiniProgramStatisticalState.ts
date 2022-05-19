import {MiniProgramStatisticalItem} from "./MiniProgramStatisticalItem";

export interface MiniProgramStatisticalState {
  searchDate: Date
  items: MiniProgramStatisticalItem[]
  loading: boolean
}