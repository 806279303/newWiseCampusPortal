import {VisitsStatisticalItem} from "./VisitsStatisticalItem";

export interface VisitsStatisticalState{
  searchDate: Date
  loading: boolean
  items: VisitsStatisticalItem[]
}