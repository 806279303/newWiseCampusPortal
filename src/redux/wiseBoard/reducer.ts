import {combineReducers} from "redux";
import {wiseBoardListReducer} from "./wiseBoardList/wiseBoardListReducer";
import {addLayerReducer} from "./addLayer/addLayerReducer";
import {rechargeLayerReducer} from "./rechargeLayer/rechargeLayerReducer";
import {rechargeRecordReducer} from "./rechargeRecordLayer/rechargeRecordReducer";

export const wiseBoardReducer = combineReducers({
  //列表
  listState: wiseBoardListReducer,
  //添加音视频弹窗
  addLayerState: addLayerReducer,
  //充值弹窗
  rechargeLayerState: rechargeLayerReducer,
  //充值记录弹窗
  rechargeRecordLayerState: rechargeRecordReducer
})
