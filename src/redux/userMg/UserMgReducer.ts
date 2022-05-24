import {UserMgState} from "../../type/userMg/UserMgState";
import {UserMgAction} from "../../type/userMg/UserMgAction";
import {UserMgActionType} from "../../type/userMg/UserMgActionType";


const initialState: UserMgState = {
  searchStr: "",
  schoolId: "",
  loading: false,
  currentPage: 0,
  totalPage: 0,
  total: 0,
  userMgTableItems: [],
}

export const userMgReducer = (state: UserMgState = initialState, action: UserMgAction): UserMgState => {
  switch (action.type){
    case UserMgActionType.CHANGE_SEARCH_STR:
      return {...state, searchStr: action.searchStr}
    case UserMgActionType.CHANGE_SCHOOL_ID:
      return {...state, schoolId: action.schoolId}
    case UserMgActionType.CHANGE_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case UserMgActionType.LOAD_DATA:
      return {...state, loading: true}
    case UserMgActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, total: action.total, totalPage: action.totalPage, userMgTableItems: action.userMgTableItems}
    case UserMgActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}