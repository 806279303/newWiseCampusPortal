import {ServiceType} from "../WiseBoardTableData";
import {AddLayerActionType} from "./AddLayerActionType";

interface CloseAddLayer {
  type: AddLayerActionType.CLOSE_ADD_LAYER
}

interface OpenAddLayer {
  type: AddLayerActionType.OPEN_ADD_LAYER
}

interface ClearAddLayer {
  type: AddLayerActionType.CLEAR_ADD_LAYER
}

interface AddWiseBoardSchoolIdChange {
  type: AddLayerActionType.ADD_WISE_BOARD_SCHOOL_ID_CHANGE
  schoolId: number
}

interface AddWiseBoardServiceTypeChange {
  type: AddLayerActionType.ADD_WISE_BOARD_SERVICE_TYPE_CHANGE,
  serviceType: ServiceType
}

interface AddWiseBoardBuyCallTimeChange {
  type: AddLayerActionType.ADD_WISE_BOARD_BUY_CALL_TIME_CHANGE,
  buyCallTime: number
}

export type AddLayerAction =
  | CloseAddLayer
  | OpenAddLayer
  | ClearAddLayer
  | AddWiseBoardSchoolIdChange
  | AddWiseBoardServiceTypeChange
  | AddWiseBoardBuyCallTimeChange