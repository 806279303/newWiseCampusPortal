import {combineReducers} from 'redux';
import weappReducer from './weapp/reducer';
// 拿到单个模块的reducer 进行合并 传给store
let reducer = combineReducers({
    weapp:weappReducer
});

export default reducer;