import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import {rootReducer} from './rootReducer'
// 引入后的reducer store是唯一的
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
