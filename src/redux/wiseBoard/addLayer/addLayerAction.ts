import {Dispatch} from "redux";
import {WiseBoardAction} from "../../../type/wiseBoard/WiseBoardAction";
import {RootState} from "../../rootReducer";
import Pops from "../../../utils/pops";
import {addWiseBoardCall} from "../../../network/http";
import {AddLayerActionType} from "../../../type/wiseBoard/AddLayer/AddLayerActionType";
import {fetchWiseBoardListAction} from "../wiseBoardList/wiseBoardListAction";

export const submitAddWiseBoardCall = () => {
  return async (dispatch: Dispatch<WiseBoardAction>, getState: () => RootState) => {
    const state = getState();
    const {
      addWiseBoardSchoolId,
      addWiseBoardServiceType,
      addWiseBoardBuyCallTime
    } = state.wiseBoardState.addLayerState

    //数据校验
    if (addWiseBoardSchoolId === -1) {
      Pops.showError('请选择学校')
      return
    }

    if (addWiseBoardBuyCallTime < 1 || addWiseBoardBuyCallTime > 10000000) {
      Pops.showError('购买时长的取值范围是1 <= t <= 10000000')
    }

    try {
      await addWiseBoardCall({
        schoolInfoId: addWiseBoardSchoolId,
        buyCallTime: addWiseBoardBuyCallTime,
        serviceType: addWiseBoardServiceType
      })
      dispatch({type: AddLayerActionType.CLOSE_ADD_LAYER})
      await fetchWiseBoardListAction(1)(dispatch, getState)
    } catch (e) {
      Pops.showError(e instanceof Error && e.message ? '提交失败，' + e.message : "提交失败")
    }
  }
}