
const defaultState = {
    isOpenThirdPushLayer: false,
    thirdPushLists: []
}

export const thirdPushReducer = (state = defaultState, action:any) => {
    switch (action.type) {
        case 'openNewThirdPushLayer': {
            return {
                ...state,
                isOpenThirdPushLayer: true
            }
        }
        case 'closeNewThirdPushLayer': {
            return {
                ...state,
                isOpenThirdPushLayer: false
            }
        }
        case 'getThirdPushList': {
            return {
                ...state,
                thirdPushLists:action.data
            }
        }
        default:
            return state
    }
}