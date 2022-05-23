import {OperationLogItem} from "./OperationLogItem";

export interface LogMgState{
  searchStr: string
  loading: boolean
  currentPage: number
  totalPage: number
  total: number
  operationLogItems: OperationLogItem[]
}