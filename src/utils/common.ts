import Pops from "./pops";

export function _concatIdentityStr(obj: any): string {
    return [
        obj.belongAdmin === 1 ? '管理员' : '',
        obj.belongTeacher === 1 ? '老师' : '',
        obj.belongStudent === 1 ? '学生' : '',
        obj.belongParent === 1 ? '家长' : '',
    ].filter(i => i && i.trim()).join('|')
}

export function _concatIdentityFromType(obj: any): string {
    const roles:any = obj.roles || []
    let showRoles = []
    for(let i=0;i<roles.length;i++){
        switch (roles[i].type){
            case 0 : {
                if(roles[i].isExist == 1){
                    showRoles.push('管理员')
                }
                break;
            }
            case 1 : {
                if(roles[i].isExist == 1){
                    showRoles.push('教师')
                }
                break;
            }
            case 2 : {
                if(roles[i].isExist == 1){
                    showRoles.push('学生')
                }
                break;
            }
            case 3 : {
                if(roles[i].isExist == 1){
                    showRoles.push('家长')
                }
                break;
            }
        }
    }
    return showRoles.join('、')
}

export function _handleHttpResponse(data:any, resolve:any, reject?:any){

    if(data.error === 0){
        if(data.data && data.data.success){
            resolve()
        }else{
            const err = data.data.msg || '操作失败'
            reject && reject(err) || Pops.showError(err)
        }
    }else{
        const err = data.msg || '操作失败'
        reject && reject(err) || Pops.showError(err)
    }
}