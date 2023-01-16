export interface ThirdPushList{
    id: number;
    companyName: string;
    schoolName: string;
    accessId: string;
    accessSecret: string;
    remark: string;
}


export interface ThirdPushState{
    list:ThirdPushList[]
}


export interface RegisteThirdPushParams{
    companyName: string;
    schoolName: string;
    systemName: string
    remark: string;
}
export interface DelThirdPushParams{
    ids:number[]
}

export interface ThirdPushLayerState{
    companyName: string;
    schoolName: string;
    systemName: string
    remark: string;
}

export interface ThirdPushLayerProps{
    closeThirdPushLayer:()=>void
    loadThirdPushData:()=>void
    isOpen: boolean
}