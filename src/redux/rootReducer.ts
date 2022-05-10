import {combineReducers} from 'redux';
import {weappReducer} from './weapp/reducer';
import {wiseBoardReducer} from "./wiseBoard/reducer";
import {appReducer} from "./app/reducer";
// 拿到单个模块的reducer 进行合并 传给store
export const rootReducer = combineReducers({
  weappReducer,
  wiseBoardReducer,
  appReducer
});

export type RootState = ReturnType<typeof rootReducer>
