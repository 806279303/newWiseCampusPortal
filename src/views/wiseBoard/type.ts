import {createTableClass, LgSimpleTableData, LgSimpleTableDataDescribe} from "@/components/simpleTable";

export interface WiseBoardData extends LgSimpleTableData {
  schoolId: string,
  schoolName: string,
  useTime: string,
  remainTime: string,
  status: string,
  createTime: string
}

export const WiseBoardTable = createTableClass<WiseBoardData>()
export type WiseBoardTableDataDescribe = LgSimpleTableDataDescribe<WiseBoardData>