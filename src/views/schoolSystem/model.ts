export const MODULE_STATE = {

}

export enum SystemState {

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
    hasWxApplet:number
}


export interface IModuleInfo {
    adminModuleDesc: string;
    adminModuleName: string;
    adminModuleUrl: string;
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
    moduleDesc: string;
    moduleId: string;
    moduleName: string;
    moduleState: number;
    parentModuleDesc: string;
    parentModuleName: string;
    parentModuleUrl: string;
    schoolId: string;
    sort: number;
    studentModuleDesc: string;
    studentModuleName: string;
    studentModuleUrl: string;
    systemId: string;
    teacherModuleDesc: string;
    teacherModuleName: string;
    teacherModuleUrl: string;
    updateTime: string;
    version: string;
}