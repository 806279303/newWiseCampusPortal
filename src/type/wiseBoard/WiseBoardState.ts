import {WiseBoardTableData} from "./WiseBoardTableData";

export interface WiseBoardState{
  loading: boolean,
  currentPage: number,
  totalPage: number
  tableData: WiseBoardTableData[]
}