import {WiseBoardTableData} from "./WiseBoardTableData";

export interface WiseBoardListResult {
  total: number,
  list: WiseBoardTableData[],
  pageNum: number,
  pageSize: number,
  pages: number
}