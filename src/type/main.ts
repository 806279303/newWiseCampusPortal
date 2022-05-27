
export interface TokenCheckParams {
    token : string
}

export interface LogoutParams{
    token : string
}

export interface UserInfoParams {
    token : string
}

export interface GetMainAddress {
    address : string
}

export interface TokenCheckResult{
    result : boolean
}


export interface UserInfoResult {
    gender: string;
    globalGrade: string;
    gradeId: string;
    gradeName: string;
    groupId: string;
    groupName: string;
    lockerState: string;
    loginInfo: string;
    photoPath: string;
    preLoginIp: string;
    preLoginTime: string;
    schoolId: string;
    schoolName: string;
    shortName: string;
    sign: string;
    studyLevel: string;
    subjectIds: string;
    subjectNames: string;
    updateTime: string;
    userClass: string;
    userId: string;
    userName: string;
    userType: string;
}


export interface LogoutResult{
    result : boolean
}