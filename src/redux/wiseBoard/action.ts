import {Dispatch} from "redux";
import {WiseBoardAction} from "../../type/wiseBoard/WiseBoardAction";
import {WiseBoardActionType} from "../../type/wiseBoard/WiseBoardActionType";
import {getWiseBoardList} from "../../network/http";
import {ServiceType} from "../../type/wiseBoard/WiseBoardTableData";
import {RootState} from "../rootReducer";

export const fetchWiseBoardListAction = (page?: number, nextServiceType?: ServiceType) => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    //从state中取出查询参数
    const state = getState()
    const currentPage = page? page: state.wiseBoardReducer.currentPage
    const serviceType = nextServiceType || nextServiceType === 0? nextServiceType:  state.wiseBoardReducer.serviceType
    const searchSchoolName = state.wiseBoardReducer.searchSchoolName

    dispatch({type: WiseBoardActionType.FETCH_LIST, currentPage})
    try {
      let wiseBoardListResult = await getWiseBoardList(currentPage - 1, 10, serviceType, searchSchoolName);
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