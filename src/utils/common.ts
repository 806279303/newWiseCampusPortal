import Pops from "./pops";
import {SysyemStates} from "@/views/weappMg/model";

export function _concatIdentityStr(obj: any): string {
    return [
        obj.belongAdmin === 1 ? '管理员' : '',
        obj.belongTeacher === 1 ? '老师' : '',
        obj.belongStudent === 1 ? '学生' : '',
        obj.belongParent === 1 ? '家长' : '',
    ].filter(i => i && i.trim()).join('|') || '-'
}

//小程序状态
export function _showSystemStateTxt(systemState: number) {
    let showTxt: string
    switch (SysyemStates[systemState]) {
        case 'USEFUL':
            showTxt = '可用';
            break;
        case 'USELESS':
            showTxt = '不可用';
            break;
        case 'MAINTENANCE':
            showTxt = '维护中';
            break;
        default:
            showTxt = '未知';
            break;
    }
    return showTxt
}

//学校类型
export function _showSchoolTypeTxt(schoolType: number) {
    let showTxt: string
    switch (schoolType) {
        case 0 :
            showTxt = '中小学/大学';
            break;
        case 2 :
            showTxt = '仅大学';
            break;
        case 1 :
            showTxt = '仅中小学';
            break;
        default:
            showTxt = '未知';
            break;
    }
    return showTxt
}

//学校状态
export function _showSchoolStateTxt(schoolState: number) {
    let showTxt: string
    switch (schoolState) {
        case 0 :
            showTxt = '不可用';
            break;
        case 1 :
            showTxt = '可用';
            break;
        case 2 :
            showTxt = '维护中';
            break;
        default:
            showTxt = '未知';
            break;
    }
    return showTxt
}

//学校所处环境
export enum SchoolEnvStates {
    TEST = 0,
    SALES = 1
}
export function _showSchoolEnvStateTxt(envState: number) {
    let showTxt: string
    switch (envState) {
        case SchoolEnvStates.TEST :
            showTxt = '测试';
            break;
        case SchoolEnvStates.SALES :
            showTxt = '在售';
            break;
        default:
            showTxt = '未知';
            break;
    }
    return showTxt
}

//学校校园通版本（新版2.0/旧版1.0）
export function _showSchoolVersionTxt(version: string) {
    let showTxt: string
    switch (version) {
        case '1.0' :
            showTxt = '旧版';
            break;
        case '2.0' :
            showTxt = '新版';
            break;
        default:
            showTxt = version;
            break;
    }
    return showTxt
}

//小程序锁控状态
export function _showSystemLockStateTxt(lockState: number) {
    let showTxt: string
    switch (lockState) {
        case -1:
            showTxt = '异常';
            break;
        case 0:
            showTxt = '未购买';
            break;
        case 1:
            showTxt = '正常';
            break;
        case 5: case -2:
            showTxt = '过期';
            break;
        default:
            showTxt = '未知';
            break;
    }
    return showTxt
}

export function _concatIdentityFromType(obj: any): string {
    const roles: any = obj.roles || []
    let showRoles = []
    for (let i = 0; i < roles.length; i++) {
        switch (roles[i].type) {
            case 0 : {
                if (roles[i].isExist == 1) {
                    showRoles.push('管理员')
                }
                break;
            }
            case 1 : {
                if (roles[i].isExist == 1) {
                    showRoles.push('教师')
                }
                break;
            }
            case 2 : {
                if (roles[i].isExist == 1) {
                    showRoles.push('学生')
                }
                break;
            }
            case 3 : {
                if (roles[i].isExist == 1) {
                    showRoles.push('家长')
                }
                break;
            }
        }
    }
    return showRoles.join('、')
}

export function _handleHttpResponse(data: any, resolve: any, reject?: any) {

    if (data.error === 0) {
        if (data.data && data.data.success) {
            resolve()
        } else {
            const err = data.data.msg || '操作失败'
            reject && reject(err) || Pops.showError(err)
        }
    } else {
        const err = data.msg || '操作失败'
        reject && reject(err) || Pops.showError(err)
    }
}


//校验ip地址是否有效
export function _isValidIP(ip:string) {
    var reg =
        /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    return reg.test(ip);
}

export function _checkLegalUrl(url:string) {
    var reg =
        /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
    if (!reg.test(url)) {
        return false;
    } else {
        return true;
    }
}

//获取url中的ip 有则.input 无则null
// export function _filterIPFromUrl(url:string) {
//     var ip = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;
//     var res = ip.exec(url);
//     if (res && res[0]) {
//         return res[0];
//     } else {
//         return "";
//     }
// }
export function _filterIPFromUrl(url:any) {
    const { host='' } = parseUrl(url || '')
    return host
}

//解析URL
export function parseUrl(str:any):any{//JS正则表达式解析URL(协议/域名/端口/路径/参数/锚点)
    const options = {
        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
        q: {
            name: "queryKey",
            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
        },
        parser: {
            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
        }
    }

    if (!str) {
        return '';
    }

    let m = options.parser.loose.exec(str) as any
    let uri:any = {}
    let i = 14

    while (i--) uri[options.key[i]] = m[i] || "";

    uri[options.q.name] = {};
    uri[options.key[12]].replace(options.q.parser, function (_:string, $1:string, $2:string) {
        if ($1) uri[options.q.name][$1] = $2;
    });

    return uri;
}