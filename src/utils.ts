export const stopProps = (e: any) => {
    e = e || window.event;
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    e.nativeEvent.stopImmediatePropagation();
}

export const getSkin = () => {
    var skin = localStorage.getItem("skinName");
    if (!skin) {
        skin = "lg-skin-s1";
        localStorage.setItem("skinName", skin)
    }
    return skin;
}

export const getUrlParams = ()=> {
    var urlParamsStr = window.location.search;
    if (!urlParamsStr) return null;
    urlParamsStr = urlParamsStr.substring(1);
    if (!urlParamsStr) return null;
    var urlParamsArr = urlParamsStr.split('&');
    var urlParamsObj: {[k:string] : string} = {};
 
    for(var i = 0; i < urlParamsArr.length; i++){
        var index = urlParamsArr[i].indexOf('=');
        var key = urlParamsArr[i].substring(0, index);
        var value = urlParamsArr[i].substring(index + 1);
        urlParamsObj[key] = value;
    }

    return urlParamsObj;
}