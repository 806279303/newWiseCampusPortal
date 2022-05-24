import {Dispatch} from "redux";
import {UserMgAction} from "../../type/userMg/UserMgAction";
import {RootState} from "../rootReducer";
import {getWxUserList, wxUnbindUser} from "../../network/http";
import {UserMgActionType} from "../../type/userMg/UserMgActionType";
import Pops from "../../utils/pops";

const pageSize = 10
export const loadData = (newPage: number, newSchoolId?: string) => {
  return async (dispatch: Dispatch<UserMgAction>, getState: () => RootState)=>{
    const state = getState();
    const {
      schoolId: oldSchoolId,
      searchStr: oldSearchStr,
    } = state.userMgState

    const schoolId = newSchoolId? newSchoolId: oldSchoolId
    const pageNum = newPage
    const searchStr = oldSearchStr
    dispatch({type: UserMgActionType.CHANGE_CURRENT_PAGE, currentPage: pageNum})
    dispatch({type: UserMgActionType.LOAD_DATA})

    try {
      const userMgTableItemPageResult = await getWxUserList({
        schoolId,
        searchStr,
        pageNum,
        pageSize
      });
      dispatch({type: UserMgActionType.LOAD_DATA_SUCCESS, total: userMgTableItemPageResult.total, totalPage: userMgTableItemPageResult.pages, userMgTableItems: userMgTableItemPageResult.list})
    }catch {
      dispatch({type: UserMgActionType.LOAD_DATA_ERROR})
    }
  }
}

export const unBindUser = (id: number) => {
  return async (dispatch: Dispatch<UserMgAction>, getState: () => RootState)=>{
    try {
      const result = await wxUnbindUser(id);
      if(!result.success){
        Pops.showError(result.content? result.content: "解绑失败")
      }else {
        Pops.showSuccess("解绑成功")
        await loadData(1)(dispatch, getState)
      }
    }catch(e) {
      console.error(e)
    }
  }
}