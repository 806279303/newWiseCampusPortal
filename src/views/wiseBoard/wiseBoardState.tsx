import {WiseBoardTableData} from "../../type/wiseBoard/WiseBoardTableData";

export interface WiseBoardProps {
  loading: boolean
  dataArray: WiseBoardTableData[]
  fetchWiseBoardListAction: (page: number, limit: number) => void
}