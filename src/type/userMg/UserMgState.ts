import {UserMgTableItem} from "./UserMgTableItem";

export interface UserMgState{
  searchStr: string
  schoolId: string
  loading: boolean
  currentPage: number
  totalPage: number
  total: number
  userMgTableItems: UserMgTableItem[]
}