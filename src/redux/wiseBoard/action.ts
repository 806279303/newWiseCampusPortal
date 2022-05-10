import {Dispatch} from "redux";
import {WiseBoardAction} from "../../type/wiseBoard/WiseBoardAction";
import {WiseBoardActionType} from "../../type/wiseBoard/WiseBoardActionType";
import {addWiseBoardCall, getWiseBoardList} from "../../network/http";
import {ServiceType} from "../../type/wiseBoard/WiseBoardTableData";
import {RootState} from "../rootReducer";
import Pops from "../../utils/pops";


const wiseBoardListPageSize = 9
export const fetchWiseBoardListAction = (page?: number, nextServiceType?: ServiceType) => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    //从state中取出查询参数
    const state = getState()
    const currentPage = page ? page : state.wiseBoardReducer.currentPage
    const serviceType = nextServiceType || nextServiceType === 0 ? nextServiceType : state.wiseBoardReducer.serviceType
    const searchSchoolName = state.wiseBoardReducer.searchSchoolName

    dispatch({type: WiseBoardActionType.FETCH_LIST, currentPage})
    try {
      let wiseBoardListResult = await getWiseBoardList(currentPage, wiseBoardListPageSize, serviceType, searchSchoolName);
      dispatch({
        type: WiseBoardActionType.FETCH_LIST_SUCCESS,
        tableData: wiseBoardListResult.list,
        totalPage: wiseBoardListResult.pages,
        total: wiseBoardListResult.total
      })
    } catch (e) {
      console.error(e)
      dispatch({
        type: WiseBoardActionType.FETCH_LIST_ERROR
      })
    }
  }
}

export const wiseBoardSearchAction = () => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    await fetchWiseBoardListAction(1)(dispatch, getState)
  }
}

export const onSelectedServiceTypeChange = (serviceType: ServiceType) => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    dispatch({type: WiseBoardActionType.CHANGE_SERVICE_TYPE, serviceType})
    await fetchWiseBoardListAction(1, serviceType)(dispatch, getState)
  }
}

export const submitAddWiseBoardCall = () => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    const state = getState();
    const {
      addWiseBoardSchoolId,
      addWiseBoardServiceType,
      addWiseBoardBuyCallTime
    } = state.wiseBoardReducer

    //数据校验
    if(addWiseBoardSchoolId === -1){
      Pops.showError('请选择学校')
      return
    }

    if(addWiseBoardBuyCallTime < 1 || addWiseBoardBuyCallTime > 10000000){
      Pops.showError('购买时长的取值范围是1 <= t <= 10000000')
    }

    try {
      await addWiseBoardCall({
        schoolInfoId: addWiseBoardSchoolId,
        buyCallTime: addWiseBoardBuyCallTime,
        serviceType: addWiseBoardServiceType
      })
      dispatch({type: WiseBoardActionType.CLOSE_ADD_LAYER})
      await fetchWiseBoardListAction(1)(dispatch, getState)
    }catch(e) {
      Pops.showError(e instanceof Error && e.message? '提交失败，' + e.message: "提交失败")
    }
  }
}