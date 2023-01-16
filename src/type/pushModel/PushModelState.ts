import {DelThirdPushParams} from "@/type/thirdPushMg/thirdPushState";
import {ISchoolInfo} from "@/views/schoolInfo/model";
import {dataItem} from "lancoo-web-ui/dist/types/select/select/select";

export interface PushModelState{
    seleSchoolName:string
}

export interface PushModelList{
    id: number;
    schoolId: string;
    schoolName: string;
    campusTemplateId: string;
    replaceTemplateId: string;
    remark: string;
    createTime: string;
    updateTime: string;
}

export interface PushModelListParam{
    pageNum: number
    pageSize: number
    schoolId?: string
    schoolName?: number
    campusTemplateId?: number
    replaceTemplateId?: number
    remark?: string
}

export interface DelModelListParams{
    ids: number[]
}

export interface DefaultState{
    pageNum: number
    pageSize: number
    isOpenAddLayer: boolean
    currentSchoolInfo: (ISchoolInfo & dataItem) | {},
    pushModelLists: PushModelList[],
    schoolList:(ISchoolInfo & dataItem)[]
}