// 获取小程序列表某一数据
import {Dispatch} from "react";
import {WeappAction} from "../../type/weapp/WeappAction";
import {WeappActionType} from "../../type/weapp/WeappActionType";
import {delay} from "../../utils/delay";

export function fetchWeappList() {
    return async (dispatch: Dispatch<WeappAction>) => {
        await delay(1000 * 3)
        dispatch({type: WeappActionType.FETCH_WEAPP_LIST_SUCCESS})
    }
}