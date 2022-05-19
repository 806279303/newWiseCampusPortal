import {DataOverviewState} from "./dataOverview/DataOverviewState";
import {ExceptionStatisticalState} from "./exceptionStatistical/ExceptionStatisticalState";
import {VisitsStatisticalState} from "./visitsStatistical/VisitsStatisticalState";
import {MiniProgramStatisticalState} from "./miniProgramStatistical/MiniProgramStatisticalState";
import {ExceptionTableCardState} from "./exceptionTableCard/ExceptionTableCardState";
import {RealtimePushTableCardState} from "./realtimePushTableCard/RealtimePushTableCardState";

export interface HomeState{
  dataOverviewState: DataOverviewState,
  exceptionStatisticalState: ExceptionStatisticalState
  visitsStatisticalState: VisitsStatisticalState
  miniProgramStatisticalState: MiniProgramStatisticalState
  exceptionTableCardState: ExceptionTableCardState
  realtimePushTableCardState: RealtimePushTableCardState
}