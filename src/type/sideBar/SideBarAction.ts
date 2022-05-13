import {SideBarActionType} from "./SideBarActionType";
import {SideBarParentItem} from "./SideBarParentItem";

interface ChangeSelect {
  type: SideBarActionType.CHANGE_SELECT
  sideBarItemName: string
}

interface Expand {
  type: SideBarActionType.EXPAND
  sideBarParentItem: SideBarParentItem
}

export type SideBarAction =
  | ChangeSelect
  | Expand