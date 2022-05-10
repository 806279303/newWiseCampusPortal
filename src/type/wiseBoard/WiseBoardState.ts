import {ServiceType, WiseBoardTableData} from "./WiseBoardTableData";

export interface WiseBoardState{
  loading: boolean,
  currentPage: number,
  totalPage: number,
  serviceType: ServiceType,
  searchSchoolName: string
  tableData: WiseBoardTableData[]
  total: number
  showAddWiseBoardLayer: boolean
  addWiseBoardSchoolId: number
  addWiseBoardServiceType: ServiceType
  addWiseBoardBuyCallTime: number
}