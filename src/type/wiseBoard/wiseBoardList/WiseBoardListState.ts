//列表
import {ServiceType, WiseBoardTableData} from "../WiseBoardTableData";

export interface WiseBoardListState {
  loading: boolean
  currentPage: number
  totalPage: number
  serviceType: ServiceType
  searchSchoolName: string
  tableData: WiseBoardTableData[]
  total: number
}