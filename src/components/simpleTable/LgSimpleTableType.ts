import {ReactNode} from "react";

export interface LgSimpleTableDataDescribe<DataType> {
  field: string
  headName: string
  isId?: boolean
  width?: string
  render?(data: DataType): ReactNode
  headRender?(): ReactNode
}

export interface LgSimpleTableData{
  [key: string]: any
}

export interface LgSimpleTableProps<DataType> {
  dataDescribe?: LgSimpleTableDataDescribe<DataType>[]
  dataArray?: DataType[]
  rowRender?(data: DataType): ReactNode
}