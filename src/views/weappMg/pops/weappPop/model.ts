export interface InsertWeappInfo{
    moduleName:string
    defaultVersion:string
    defaultAppUrl:string
    schoolType:number
    belongAdmin:number
    belongTeacher:number
    belongStudent:number
    belongParent:number
}

export interface AddWeappSystem {
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
}


export type SystemPopProps = {
    data: object
    onRef?: any
} & Partial<typeof defaultProps>

// type SystemPopProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & SystemPopCombineProps

export interface SystemPopState {
    weappStates: any[]
    data?: PropsData | {}
    insertColumns: any[]
    isOpenInsertSystemPop: boolean
    insertWeappData: object
}

export interface PropsData {
    systemLogoUrl: string;
    systemId: string;
    systemName: string;
    lockerId: string;
    systemState: number;
    hasPush: number;
    version: string;
    primaryAppId: string;
    primaryAppSecret: string;
    primaryDefaultAppUrl: string;
    universityAppId: string;
    universityAppSecret: string;
    universityDefaultAppUrl: string;
}
export const defaultProps = {
    data: {
        systemLogoUrl: "",
        systemId: "",
        systemName: "",
        lockerId: "",
        systemState: 1,
        hasPush: 0,
        version: '',
        primaryAppId: '',
        primaryAppSecret: '',
        primaryDefaultAppUrl: '',
        universityAppId: '',
        universityAppSecret: '',
        universityDefaultAppUrl: '',
    }
}
export const WIDTH_MATCHES = {
    id: '5%',
    moduleName: '25%',
    identity: '25%',
    schoolType: '10%',
    defaultAppUrl: '15%',
    defaultVersion: '10%',
    handles: '10%',
}

export const uploadImgTypes = ['image/jpeg', 'image/jpg', 'image/png']