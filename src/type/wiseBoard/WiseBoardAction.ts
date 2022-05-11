import {WiseBoardListAction} from "./wiseBoardList/WiseBoardListAction";
import {AddLayerAction} from "./AddLayer/AddLayerAction";
import {RechargeLayerAction} from "./rechargeLayer/rechargeLayerAction";

export type WiseBoardAction =
  | WiseBoardListAction
  | AddLayerAction
  | RechargeLayerAction
