import {SideBarItem} from "./SideBarItem";

export interface SideBarParentItem extends SideBarItem {
  expand?: boolean
  subItem?: SideBarItem[]
}