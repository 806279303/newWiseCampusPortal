import {WiseBoardListAction} from "./wiseBoardList/WiseBoardListAction";
import {AddLayerAction} from "./AddLayer/AddLayerAction";
import {RechargeLayerAction} from "./rechargeLayer/rechargeLayerAction";
import {RechargeRecordAction} from "./rechargeRecordLayer/rechargeRecordAction";

export type WiseBoardAction =
  | WiseBoardListAction
  | AddLayerAction
  | RechargeLayerAction
  | RechargeRecordAction
