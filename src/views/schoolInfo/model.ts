export interface ISchoolInfo {
    version: string;
    cityId: string;
    cityName: string;
    countryId: string;
    countryName: string;
    createTime: string;
    deleteState: number;
    endDate: string;
    envState: number;
    hostServerUrl: string;
    id: number;
    provinceId: string;
    provinceName: string;
    schoolCode: string;
    schoolId: string;
    schoolLogoUrl: string;
    schoolName: string;
    schoolType: number;
    serviceType: number;
    startDate: string;
    state: number;
    updateTime: string;
    gzhAppId:string
    gzhSecret:string
    appMgrAddr:string
    havingMultipleIdentity:0|1//多子女多家长
}