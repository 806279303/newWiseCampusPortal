import {IModuleInfo, ISystemInfo} from "@/views/schoolSystem/model";
import {SchoolOldSystem} from "@/type/schoolSystem/schoolOldSystem";

export interface FastReplaceUrlData {
    beforeReplaceUrl: string
    afterReplaceUrl: string
}

export interface OldFastReplaceUrlData {
    lists:Array<SchoolOldSystem>
    beforeReplaceUrl: string
    afterReplaceUrl: string
}

export interface OldFastReplaceUrParams {
    subsystemId:number
    url:string
    wsUrl:string
}

export interface IOldWeappMgState {
    systemSearch: string
    thColumns: Array<any>
    data: Array<SchoolOldSystem>
    showWeappLayer: boolean
    currentWeappLayerData: ISystemInfo | {}
    showFastReplaceUrlLayer: boolean
    fastReplaceUrlData: OldFastReplaceUrlData
}

export interface IWeappMgState {
    systemSearch: string
    thColumns: Array<any>
    data: Array<ISystemInfo>
    showModuleLayer: boolean
    currentModuleLayerData: IModuleInfo | {}
    showWeappLayer: boolean
    currentWeappLayerData: ISystemInfo | {}
    showFastReplaceUrlLayer: boolean
    fastReplaceUrlData: FastReplaceUrlData
}