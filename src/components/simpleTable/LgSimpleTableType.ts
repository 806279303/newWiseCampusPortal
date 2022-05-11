import {ReactNode} from "react";

export interface LgSimpleTableDataDescribe<DataType> {
  field: string
  headName: string
  isId?: boolean
  width?: string
  color?: string
  render?(data: DataType, index: number): ReactNode
  headRender?(): ReactNode
}

export interface LgSimpleTableData{
  [key: string]: any
}

export interface LgSimpleTableProps<DataType> {
  loading?: boolean
  dataDescribe?: LgSimpleTableDataDescribe<DataType>[]
  dataArray?: DataType[]
  rowRender?(data: DataType): ReactNode
}