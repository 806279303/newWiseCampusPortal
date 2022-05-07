import {LgSimpleTableData} from "@/components/simpleTable";

export interface WiseBoardTableData extends LgSimpleTableData{
  schoolId: string,
  schoolName: string,
  useTime: string,
  remainTime: string,
  status: string,
  createTime: string
}