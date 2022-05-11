import {AddLayerAction} from "../../../type/wiseBoard/AddLayer/AddLayerAction";
import {ServiceType} from "../../../type/wiseBoard/WiseBoardTableData";
import {AddLayerActionType} from "../../../type/wiseBoard/AddLayer/AddLayerActionType";
import {AddWiseBoardLayerState} from "../../../type/wiseBoard/AddLayer/AddWiseBoardLayerState";

const initialState: AddWiseBoardLayerState = {
  showAddWiseBoardLayer: false,
  addWiseBoardSchoolId: -1,
  addWiseBoardServiceType: ServiceType.TRIAL,
  addWiseBoardBuyCallTime: 1,
}


export const addLayerReducer = (state: AddWiseBoardLayerState = initialState, action: AddLayerAction): AddWiseBoardLayerState => {
  switch (action.type){
    case AddLayerActionType.OPEN_ADD_LAYER:
      return {...state, showAddWiseBoardLayer: true}
    case AddLayerActionType.CLOSE_ADD_LAYER:
      return {...state, showAddWiseBoardLayer: false}
    case AddLayerActionType.CLEAR_ADD_LAYER:
      return {
        ...state,
        addWiseBoardSchoolId: initialState.addWiseBoardSchoolId,
        addWiseBoardServiceType: initialState.addWiseBoardServiceType,
        addWiseBoardBuyCallTime: initialState.addWiseBoardBuyCallTime,
      }
    case AddLayerActionType.ADD_WISE_BOARD_SCHOOL_ID_CHANGE:
      return {...state, addWiseBoardSchoolId: action.schoolId}
    case AddLayerActionType.ADD_WISE_BOARD_SERVICE_TYPE_CHANGE:
      return {...state, addWiseBoardServiceType: action.serviceType}
    case AddLayerActionType.ADD_WISE_BOARD_BUY_CALL_TIME_CHANGE:
      return {...state, addWiseBoardBuyCallTime: action.buyCallTime}
    default:
      return state
  }
}