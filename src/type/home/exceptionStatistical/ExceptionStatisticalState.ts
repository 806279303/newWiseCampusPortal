import {ExceptionStatisticalItem} from "./ExceptionStatisticalItem";

export interface ExceptionStatisticalState{
  searchDate: Date
  items: ExceptionStatisticalItem[]
  loading: boolean
}