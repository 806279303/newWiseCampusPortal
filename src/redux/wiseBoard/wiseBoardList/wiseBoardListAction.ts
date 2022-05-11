import {ServiceType} from "../../../type/wiseBoard/WiseBoardTableData";
import {Dispatch} from "redux";
import {WiseBoardAction} from "../../../type/wiseBoard/WiseBoardAction";
import {RootState} from "../../rootReducer";
import {getWiseBoardList} from "../../../network/http";
import {WiseBoardListActionType} from "../../../type/wiseBoard/wiseBoardList/WiseBoardListActionType";

const wiseBoardListPageSize = 10
export const fetchWiseBoardListAction = (page?: number, nextServiceType?: ServiceType) => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    //从state中取出查询参数
    const state = getState()
    const currentPage = page ? page : state.wiseBoardState.listState.currentPage
    const serviceType = nextServiceType || nextServiceType === 0 ? nextServiceType : state.wiseBoardState.listState.serviceType
    const searchSchoolName = state.wiseBoardState.listState.searchSchoolName

    dispatch({type: WiseBoardListActionType.FETCH_LIST, currentPage})
    try {
      let wiseBoardListResult = await getWiseBoardList(currentPage, wiseBoardListPageSize, serviceType, searchSchoolName);
      dispatch({
        type: WiseBoardListActionType.FETCH_LIST_SUCCESS,
        tableData: wiseBoardListResult.list,
        totalPage: wiseBoardListResult.pages,
        total: wiseBoardListResult.total
      })
    } catch (e) {
      console.error(e)
      dispatch({
        type: WiseBoardListActionType.FETCH_LIST_ERROR
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
    dispatch({type: WiseBoardListActionType.CHANGE_SERVICE_TYPE, serviceType})
    await fetchWiseBoardListAction(1, serviceType)(dispatch, getState)
  }
}