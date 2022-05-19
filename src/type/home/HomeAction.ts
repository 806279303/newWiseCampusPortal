import {DataOverviewAction} from "./dataOverview/DataOverviewAction";
import {VisitsStatisticalAction} from "./visitsStatistical/VisitsStatisticalAction";
import {ExceptionStatisticalAction} from "./exceptionStatistical/ExceptionStatisticalAction";
import {ExceptionTableCardAction} from "./exceptionTableCard/ExceptionTableCardAction";
import {MiniProgramStatisticalAction} from "./miniProgramStatistical/MiniProgramStatisticalAction";
import {RealtimePushTableCardAction} from "./realtimePushTableCard/RealtimePushTableCardAction";

export type HomeAction =
  | DataOverviewAction
  | ExceptionStatisticalAction
  | VisitsStatisticalAction
  | MiniProgramStatisticalAction
  | ExceptionTableCardAction
  | RealtimePushTableCardAction