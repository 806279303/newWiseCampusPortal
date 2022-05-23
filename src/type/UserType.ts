export enum UserType{
  ADMIN,
  TEACHER,
  STUDENT,
  PARENTS
}

export const userTypeNameMap: Map<UserType, string> = new Map<UserType, string>()
userTypeNameMap.set(UserType.ADMIN, "学校管理员")
userTypeNameMap.set(UserType.TEACHER, "教师")
userTypeNameMap.set(UserType.ADMIN, "学生")
userTypeNameMap.set(UserType.ADMIN, "家长")
