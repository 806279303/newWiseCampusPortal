// 将state导入 建立reducer函数
import _state from './state';
import {AnyAction} from "redux";

export default function (state=_state,action:AnyAction){
    let newState = {...state};
    switch (action.type){
        case 'SETWEAPPDATA':{
            return { data:action.payload }
        }
        case 'GETWEAPPDATA':{
            return newState
        }
        default:return newState
    }
}