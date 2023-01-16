import {loadThirdPushLists} from "@/network/http";
import {ThirdPushList} from "@/type/thirdPushMg/thirdPushState";


export const openNewThirdPushLayer = () => ({
    type: "openNewThirdPushLayer"
})

export const closeNewThirdPushLayer = () => ({
    type: "closeNewThirdPushLayer"
})

export const getThirdPushAction = (data: ThirdPushList) => ({
    type: "getThirdPushList",
    data
})

export const loadThirdPushData = () => {
    return async (dispatch: any) => {
        const data = await loadThirdPushLists()
        dispatch(getThirdPushAction(data))
    }
}