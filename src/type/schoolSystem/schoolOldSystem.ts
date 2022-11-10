export interface SchoolOldSystem{
    appId: null;
    description: null;
    lockState: number;
    moduleId: number;
    moduleLogoUrl: string;
    moduleName: string;
    modulePosition: number;
    navigateUrl: null;
    newLockState: number;
    newLockStateString: string;
    schoolId: string;
    show: boolean;
    showName: null;
    state: number;
    subsystemId: number;
    systemId: string;
    url: null;
    version: string;
    webServerAddr: string;
    wsServerAddr: string;
    wsUrl: null;
}

export interface PutSchoolOldSystem{
    subsystemId: number;
    url: string;
    wsUrl: string;
    state: number;
    show: boolean;
    version: string;
    userType: number[];
}

export interface SchoolOldSystemDetail {
    appId: string;
    description: null;
    lockState: number;
    moduleId: number;
    moduleLogoUrl: string;
    moduleName: string;
    modulePosition: number;
    navigateUrl: null;
    newLockState: null;
    newLockStateString: null;
    schoolId: string;
    show: boolean;
    showName: null;
    state: number;
    subsystemId: number;
    systemId: string;
    url: string;
    userType: number[];
    version: string;
    webServerAddr: string;
    wsServerAddr: string;
    wsUrl: string;
}
