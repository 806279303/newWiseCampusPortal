import {createStore} from 'redux';
import reducer from './reducer'
// 引入后的reducer store是唯一的
const store = createStore(reducer);

export default store;