import {DefaultState} from "@/type/pushModel/PushModelState";

const defaultState: DefaultState = {
    pageNum: 1,
    pageSize: 10,
    isOpenAddLayer: false,
    currentSchoolInfo: {},
    pushModelLists: [],
    schoolList: []
}

export const pushModelReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'openAddLayer': {
            return {
                ...state,
                isOpenAddLayer: true
            }
        }
        case 'closeAddLayer': {
            return {
                ...state,
                isOpenAddLayer: false
            }
        }
        case 'getPushModelList': {
            return {
                ...state,
                pushModelLists: action.data.list,
                pageNum: action.data.pageNum,
                pageSize: action.data.pageSize,
            }
        }
        case 'getSchoolList': {
            return {
                ...state,
                schoolList: action.data
            }
        }
        case 'changeCurrentSchoolInfo' : {
            return {
                ...state,
                currentSchoolInfo: action.data
            }
        }
        default:
            return state
    }
}