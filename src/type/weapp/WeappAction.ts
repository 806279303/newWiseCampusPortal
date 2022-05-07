import {WeappActionType} from "./WeappActionType";

export interface FetchWeappListAction{
  type: WeappActionType.FETCH_WEAPP_LIST
}

export interface FetchWeappListSuccessAction{
  type: WeappActionType.FETCH_WEAPP_LIST_SUCCESS
}

export type WeappAction = FetchWeappListAction | FetchWeappListSuccessAction