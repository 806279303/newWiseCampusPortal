import {NavTabsActionType} from "./navTabsActionType";
import {TabItem} from "./TabItem";


interface ChangeTab {
  type: NavTabsActionType.CHANGE_TAB,
  name: string
}

interface AddTab {
  type: NavTabsActionType.ADD_TAB
  tabItem: TabItem
}

interface RemoveTab {
  type: NavTabsActionType.REMOVE_TAB
  name: string
}

export type NavTabsAction =
  | ChangeTab
  | AddTab
  | RemoveTab