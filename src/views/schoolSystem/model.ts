export const MODULE_STATE = {

}

export interface ISystemInfo {
    baseWebUrl: string;
    baseWsUrl: string;
    createTime: string;
    id: number;
    lockState: number;
    lockStateString: string;
    lockerId: number;
    logoUrl: string;
    schoolId: string;
    systemGroupID: string;
    systemGroupName: string;
    systemId: string;
    systemName: string;
    systemState: number;
    updateTime: string;
    version: string;
    webSvrAddr: string;
    wsSvrAddr: string;
    wxSchoolSystemModuleList: Array<IModuleInfo>;
}

export interface IModuleInfo {
    appId: string;
    appUrl: string;
    belongAdmin: number;
    belongParent: number;
    belongStudent: number;
    belongTeacher: number;
    createTime: string;
    id: number;
    logoUrl: string;
    mobileAppState: number;
    moduleId: string;
    moduleName: string;
    moduleState: number;
    schoolId: string;
    sort: number;
    systemId: string;
    updateTime: string;
    version: string;
}