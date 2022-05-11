import {WiseBoardListState} from "./wiseBoardList/WiseBoardListState";
import {AddWiseBoardLayerState} from "./AddLayer/AddWiseBoardLayerState";
import {RechargeLayerState} from "./rechargeLayer/RechargeLayerState";
import {RechargeRecordState} from "./rechargeRecordLayer/rechargeRecordState";

export interface WiseBoardState{
  //列表
  listState: WiseBoardListState,
  //添加音视频弹窗
  addLayerState: AddWiseBoardLayerState
  //充值弹窗
  rechargeLayerState: RechargeLayerState
  //充值记录弹窗
  rechargeRecordLayerState: RechargeRecordState
}