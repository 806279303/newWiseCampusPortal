import {getSchoolInfo, loadPushModelLists} from "@/network/http";
import {PushModelList, PushModelListParam} from "@/type/pushModel/PushModelState";
import {PageResult} from "@/type/pageResult";
import {ISchoolInfo} from "@/views/schoolInfo/model";
import {dataItem} from "lancoo-web-ui/dist/types/select/select/select";


export const openAddLayer = () => ({
    type: "openAddLayer"
})

export const closeAddLayer = () => ({
    type: "closeAddLayer"
})

export const getPushModelAction = (data: PageResult<PushModelList>) => ({
    type: "getPushModelList",
    data
})

export const getSchoolListAction = (data: ISchoolInfo[]) => {
    const showData: (ISchoolInfo & dataItem)[] = data.map(item=>{
        return {
            ...item,
            text: item.schoolName
        }
    })
    return {
        type: "getSchoolList",
        data:showData
    }
}

export const changeCurrentSchoolAction = (data: ISchoolInfo) => ({
    type: "changeCurrentSchoolInfo",
    data
})

export const loadPushModelData = (props : PushModelListParam) => {
    return async (dispatch: any) => {
        const data = await loadPushModelLists(props)
        dispatch(getPushModelAction(data))
    }
}

export const  loadSchoolList = (searchName: string) => {
    return async (dispatch: any) => {
        const data = await getSchoolInfo({
            envState: '',
            state: 1,//可用
            searchStr: searchName
        })
        dispatch(getSchoolListAction(data))
    }
}