// 获取小程序列表某一数据
export function getSpecifiedWeappData() {
    return {
        type: "GETWEAPPDATA"
    }
}

//设置小程序列表某一数据
export function setSpecifiedWeappData(data:any) {
    return {
        type: "SETWEAPPDATA",
        payload:data
    }
}