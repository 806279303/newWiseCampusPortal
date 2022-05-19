import {combineReducers} from "redux";
import {dataOverviewReducer} from "./dataOverview/DataOverviewReducer";
import {HomeState} from "../../type/home/HomeState";
import {exceptionStatisticalReducer} from "./exceptionStatistical/ExceptionStatisticalReducer";
import {visitsStatisticalReducer} from "./visitsStatistical/VisitsStatisticalReducer";
import {miniProgramStatisticalReducer} from "./miniProgramStatistical/MiniProgramStatisticalReducer";
import {exceptionTableCardReducer} from "./exceptionTableCard/ExceptionTableCardReducer";
import {realtimePushTableCardReducer} from "./realtimePushTableCard/RealtimePushTableCardReducer";

export const HomeReducer = combineReducers<HomeState>({
  dataOverviewState: dataOverviewReducer,
  exceptionStatisticalState: exceptionStatisticalReducer,
  visitsStatisticalState: visitsStatisticalReducer,
  miniProgramStatisticalState: miniProgramStatisticalReducer,
  exceptionTableCardState: exceptionTableCardReducer,
  realtimePushTableCardState: realtimePushTableCardReducer
})