import {combineReducers} from "redux";
import {wiseBoardListReducer} from "./wiseBoardList/wiseBoardListReducer";
import {addLayerReducer} from "./addLayer/addLayerReducer";
import {rechargeLayerReducer} from "./rechargeLayer/rechargeLayerReducer";

export const wiseBoardReducer = combineReducers({
  listState: wiseBoardListReducer,
  //添加音视频弹窗
  addLayerState: addLayerReducer,
  //充值弹窗
  rechargeLayerState: rechargeLayerReducer
})
