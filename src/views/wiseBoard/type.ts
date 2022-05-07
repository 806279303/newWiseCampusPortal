import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import {WiseBoardTableData} from "../../type/wiseBoard/WiseBoardTableData";

export const WiseBoardTable = createTableClass<WiseBoardTableData>()
export type WiseBoardTableDataDescribe = LgSimpleTableDataDescribe<WiseBoardTableData>

export interface WiseBoardProps {
  loading: boolean
  dataArray: WiseBoardTableData[]
  fetchWiseBoardListAction: (page: number, limit: number) => void
}