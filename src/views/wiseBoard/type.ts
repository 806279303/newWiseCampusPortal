import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import {WiseBoardTableData} from "../../type/wiseBoard/WiseBoardTableData";
import {RechargeRecordItem} from "../../type/wiseBoard/rechargeRecordLayer/rechargeRecordItem";

export const WiseBoardTable = createTableClass<WiseBoardTableData>()
export type WiseBoardTableDataDescribe = LgSimpleTableDataDescribe<WiseBoardTableData>

export const RechargeRecordTable = createTableClass<RechargeRecordItem>()
export type RechargeRecordTableDescribe = LgSimpleTableDataDescribe<RechargeRecordItem>