import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'
import {rootReducer} from './rootReducer'
import {routerMiddleware} from 'connected-react-router'
import {history} from "./router/history";
import {NavTabsActionType} from "../type/navTabs/navTabsActionType";
import {pathNameMap} from "../routers/routers";
import {SideBarActionType} from "../type/sideBar/SideBarActionType";
import {Location} from "history";


// 引入后的reducer store是唯一的
const store = createStore(rootReducer, applyMiddleware(thunk, routerMiddleware(history)));

export default store;


function dispatchRouterAction(location: Location) {
    let path = location.pathname
    let nextName = pathNameMap.get(path)
    if (nextName) {
        store.dispatch({
            type: NavTabsActionType.ADD_TAB, tabItem: {
                name: nextName,
                selected: true
            }
        })
        store.dispatch({type: SideBarActionType.CHANGE_SELECT, sideBarItemName: nextName})
    }
}

//监听路由变化
history.listen((location) => {
    dispatchRouterAction(location);
})

//路由初始化的时候也需要判断当前状态
let path = history.location.pathname;
if (path !== "/") {
    dispatchRouterAction(history.location)
}