export enum SysyemStates{
    USELESS=0,
    USEFUL=1,
    MAINTENANCE=2
}
export interface ISystemInfo {
    id: number;
    lockerId: number;
    primaryAppId: string;
    primaryAppSecret: string;
    primaryDefaultAppUrl: string;
    systemId: string;
    systemLogoUrl: string;
    systemName: string;
    systemState: number;
    universityAppId: string;
    universityAppSecret: string;
    universityDefaultAppUrl: string;
    version: string;
    wxSystemModules: any[];
}

export interface ISystemInsideInfo {
    belongAdmin: number;
    belongParent: number;
    belongStudent: number;
    belongTeacher: number;
    defaultAppUrl: string;
    defaultVersion: string;
    id: number;
    moduleLogoUrl: string;
    moduleName: string;
    schoolType: number;
    systemId: string;

}