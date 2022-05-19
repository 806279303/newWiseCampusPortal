import {VisitsStatisticalState} from "../../../type/home/visitsStatistical/VisitsStatisticalState";
import {VisitsStatisticalAction} from "../../../type/home/visitsStatistical/VisitsStatisticalAction";
import {VisitsStatisticalActionType} from "../../../type/home/visitsStatistical/VisitsStatisticalActionType";


const initialState: VisitsStatisticalState = {
  searchDate: new Date(),
  loading: false,
  items: []
}

export const visitsStatisticalReducer = (state: VisitsStatisticalState = initialState, action: VisitsStatisticalAction): VisitsStatisticalState => {
  switch (action.type) {
    case VisitsStatisticalActionType.CHANGE_SEARCH_DATE:
      return {...state, searchDate: action.searchDate}
    case VisitsStatisticalActionType.LOAD_DATA:
      return {...state, loading: true}
    case VisitsStatisticalActionType.LOAD_DATA_SUCCESS:
      return {...state, loading: false, items: action.items}
    case VisitsStatisticalActionType.LOAD_DATA_ERROR:
      return {...state, loading: false}
    default:
      return state
  }
}