import {MiniProgramStatisticalState} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalState";
import {MiniProgramStatisticalAction} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalAction";
import {
  MiniProgramStatisticalActionType
} from "../../../type/home/miniProgramStatistical/MiniProgramStatisticalActionType";


const initialState: MiniProgramStatisticalState = {
  searchDate: new Date(),
  items: [],
  loading: false,
}

export const miniProgramStatisticalReducer = (state: MiniProgramStatisticalState = initialState, action: MiniProgramStatisticalAction): MiniProgramStatisticalState => {
  switch (action.type){
    case MiniProgramStatisticalActionType.CHANGE_SEARCH_DATE:
      return {...state, searchDate: action.searchDate}
    case MiniProgramStatisticalActionType.LOAD_DATA:
      return {...state, loading: true}
    case MiniProgramStatisticalActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, items: action.items}
    case MiniProgramStatisticalActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}