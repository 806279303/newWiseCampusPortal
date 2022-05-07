import {Dispatch} from "redux";
import {WiseBoardAction} from "../../type/wiseBoard/WiseBoardAction";
import {WiseBoardActionType} from "../../type/wiseBoard/WiseBoardActionType";
import {delay} from "../../utils/delay";
import {WiseBoardTableData} from "../../type/wiseBoard/WiseBoardTableData";

export const fetchWiseBoardListAction = (page: number, limit: number) => {
  return async (dispatch: Dispatch<WiseBoardAction>) => {
    dispatch({type: WiseBoardActionType.FETCH_WISE_BOARD_LIST})
    console.log("fetchWiseBoardListAction", page, limit)
    await delay(1000 * 5)
    const tableData: WiseBoardTableData[] = []
    for (let i = 0; i < 10; i++) {
      tableData.push({
        schoolId: "id-" + (i + 1),
        schoolName: "蓝鸽中小学",
        useTime: "100",
        remainTime: "200",
        status: "欠费",
        createTime: "2010-02-01"
      })
    }
    dispatch({type: WiseBoardActionType.FETCH_WISE_BOARD_LIST_SUCCESS, tableData: tableData})
  }
}