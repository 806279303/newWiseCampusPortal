export function _concatIdentityStr(obj: any): string {
    return [
        obj.belongAdmin === 1 ? '管理员' : '',
        obj.belongTeacher === 1 ? '老师' : '',
        obj.belongStudent === 1 ? '学生' : '',
        obj.belongParent === 1 ? '家长' : '',
    ].filter(i => i && i.trim()).join('|')
}