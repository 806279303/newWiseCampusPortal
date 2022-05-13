export interface TabItem {
  name: string
  selected: boolean
}

export interface TabItemState extends TabItem{
  path?: string
}

export const tabItemEquals = (item1: TabItem, item2: TabItem): boolean => {
  return item1.name === item2.name
}