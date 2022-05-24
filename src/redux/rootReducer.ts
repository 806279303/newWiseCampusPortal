import {combineReducers} from 'redux';
import {weappReducer} from './weapp/reducer';
import {wiseBoardReducer} from "./wiseBoard/reducer";
import {appReducer} from "./app/reducer";
import { connectRouter } from 'connected-react-router'
import {history} from "./router/history";
import {navTabsReducer} from "./navTabs/navTabsReducer";
import {SideBarReducer} from "./sideBar/sideBarReducer";
import {HomeReducer} from "./home/HomeReducer";
import {logMgReducer} from "./logMg/LogMgReducer";
import {userMgReducer} from "./userMg/UserMgReducer";
import {messageRecordReducer} from "./messageRecord/MessageRecordReducer";

// 拿到单个模块的reducer 进行合并 传给store
export const rootReducer = combineReducers({
  weappReducer,
  wiseBoardState: wiseBoardReducer,
  appReducer,
  router:connectRouter(history),
  navTabsState: navTabsReducer,
  sideBarState: SideBarReducer,
  homeState: HomeReducer,
  logMgState: logMgReducer,
  userMgState: userMgReducer,
  messageRecordState: messageRecordReducer
});

export type RootState = ReturnType<typeof rootReducer>
