import {UserMgActionType} from "./UserMgActionType";
import {UserMgTableItem} from "./UserMgTableItem";

interface ChangeSearchStr{
  type: UserMgActionType.CHANGE_SEARCH_STR
  searchStr: string
}
interface ChangeSchoolId{
  type: UserMgActionType.CHANGE_SCHOOL_ID
  schoolId: string
}
interface ChangeCurrentPage{
  type: UserMgActionType.CHANGE_CURRENT_PAGE
  currentPage: number
}
interface LoadData{
  type: UserMgActionType.LOAD_DATA
}
interface LoadDataSuccess{
  type: UserMgActionType.LOAD_DATA_SUCCESS
  totalPage: number
  total: number
  userMgTableItems: UserMgTableItem[]
}
interface LoadDataError{
  type: UserMgActionType.LOAD_DATA_ERROR
}

export type UserMgAction =
  | ChangeSearchStr
  | ChangeSchoolId
  | ChangeCurrentPage
  | LoadData
  | LoadDataSuccess
  | LoadDataError