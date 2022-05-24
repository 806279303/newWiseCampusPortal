import {MessageRecordTableItem} from "./MessageRecordTableItem";

export interface MessageRecordState{
  loading: boolean
  currentPage: number
  total: number
  totalPage: number
  messageRecordTableItems: MessageRecordTableItem[]
}