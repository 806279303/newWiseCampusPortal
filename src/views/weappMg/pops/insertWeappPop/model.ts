export interface InsertWeappInfo {
    roles: any[]
    defaultAppUrl: string;
    defaultVersion: string;
    id: number;
    moduleLogoUrl: string;
    moduleName: string;
    schoolType: number;
    systemId: string;
}


export interface insideWeappPopProps {
    data: object
    onRef?: any
}

export interface insideWeappPopState {
    data: object
    schoolTypes: any[]
}

export const defaultInsideWeappProps = {
    data: {
        defaultAppUrl: "",
        defaultVersion: "1.0",
        moduleLogoUrl: "",
        moduleName: "",
        roles: [
            {
                isExist: 1,
                moduleDesc: "",
                moduleName: "",
                type: 0
            }
        ],
        schoolType: 0,
        systemId: ""
    }
}

export const uploadImgTypes = ['image/jpeg', 'image/jpg', 'image/png']