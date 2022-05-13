import {SideBarState} from "../../type/sideBar/SideBarState";
import {SideBarAction} from "../../type/sideBar/SideBarAction";
import icon from "../../images/default_icon.png"
import {SideBarActionType} from "../../type/sideBar/SideBarActionType";
import {SideBarItem} from "../../type/sideBar/SideBarItem";

const initialState: SideBarState = {
  sideBarParentItems: [
    {
      name: "首页",
      icon: icon,
      selected: false
    },
    {
      name: "小程序管理",
      icon: icon,
    },
    {
      name: "消息推送管理",
      icon: icon,
      subItem: [
        {
          name: "推送记录管理",
          icon: icon,
        },
        {
          name: "推送模板",
          icon: icon,
        }
      ]
    },
    {
      name: "学校档案管理",
      icon: icon,
    },
    {
      name: "班牌音视频通话",
      icon: icon,
    },
    {
      name: "微信用户管理",
      icon: icon,
    },
    {
      name: "日志管理",
      icon: icon
    }
  ]
}

export function clearSelected(state: SideBarState) {
  const newSideBarParentItems = [...state.sideBarParentItems]
  newSideBarParentItems.forEach(item => {
    item.selected = false
    item.subItem?.forEach(subItem => subItem.selected = false)
  })
  return newSideBarParentItems;
}

export const SideBarReducer = (state: SideBarState = initialState, action: SideBarAction): SideBarState => {
  switch (action.type) {
    case SideBarActionType.CHANGE_SELECT: {
      let sideBarParentStateItem = state.sideBarParentItems.find(item => item.name === action.sideBarItemName);
      if(sideBarParentStateItem){
        //处理父节点
        if (sideBarParentStateItem) {
          const newSideBarParentItems = clearSelected(state)
          sideBarParentStateItem.selected = true
          return {...state, sideBarParentItems: newSideBarParentItems}
        }
      }else{
        //处理子节点
        let allSideBarItems = state.sideBarParentItems.reduce((array, item) => {
          if(item.subItem){
            array = array.concat(item.subItem)
          }
          return array
        }, new Array<SideBarItem>());
        let selectedItem = allSideBarItems.find(item => item.name === action.sideBarItemName);
        if (selectedItem) {
          const newSideBarParentItems = clearSelected(state);
          selectedItem.selected = true
          return {...state, sideBarParentItems: newSideBarParentItems}
        }
      }

      return state
    }
    case SideBarActionType.EXPAND: {
      let sideBarParentStateItem1 = state.sideBarParentItems.find(item => item.name === action.sideBarParentItem.name);
      if (!sideBarParentStateItem1) {
        return state
      }

      sideBarParentStateItem1.expand = !sideBarParentStateItem1.expand
      return {...state, sideBarParentItems: [...state.sideBarParentItems]}
    }
    default:
      return state
  }
}