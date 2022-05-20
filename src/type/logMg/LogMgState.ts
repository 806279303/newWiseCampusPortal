import {OperationLogItem} from "./OperationLogItem";

export interface LogMgState{
  searchStr: string
  loading: boolean
  currentPage: number
  operationLogItems: OperationLogItem[]
  totalPage: number
  total: number
}