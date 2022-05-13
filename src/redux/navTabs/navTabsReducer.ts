import {NavTabsState} from "../../type/navTabs/navTabsState";
import {NavTabsAction} from "../../type/navTabs/navTabsAction";
import {NavTabsActionType} from "../../type/navTabs/navTabsActionType";
import {tabItemEquals} from "../../type/navTabs/TabItem";

const initialState: NavTabsState = {
  tabs: [
  ]
}

export const navTabsReducer = (state: NavTabsState = initialState, action: NavTabsAction) => {
  switch (action.type){
    case NavTabsActionType.CHANGE_TAB:{
      let tabItemState = state.tabs.find(item => item.name === action.name);
      if(tabItemState){
        const newTabs = [...state.tabs]
        newTabs.forEach(item => item.selected = false)
        tabItemState.selected = true
        return {...state, tabs: newTabs}
      }
      return state
    }
    case NavTabsActionType.ADD_TAB:{
      let tabItem = state.tabs.find(item => tabItemEquals(item, action.tabItem));
      if(tabItem){
        const newTabs = [...state.tabs]
        newTabs.forEach(item => item.selected = false)
        tabItem.selected = true
        return {...state, tabs: newTabs}
      }
      const newTabs = [...state.tabs]
      newTabs.forEach(item => item.selected = false)
      newTabs.push(action.tabItem)
      return {...state, tabs: newTabs}
    }
    case NavTabsActionType.REMOVE_TAB:{
      let tabItem = state.tabs.find(item => item.name === action.name);
      if(!tabItem){
        return state
      }
      const newTabs = state.tabs.filter(item => item.name !== action.name)
      return {...state, tabs: newTabs}
    }
    default:
      return state
  }
}