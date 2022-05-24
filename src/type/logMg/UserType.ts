export enum UserType{
  SCHOOL_ADMIN = 0,
  EDUCATION_BUREAU_ADMIN = 6,
}


export const nameMap: Map<UserType, string> = new Map()

nameMap.set(UserType.SCHOOL_ADMIN, "学校管理员")
nameMap.set(UserType.EDUCATION_BUREAU_ADMIN, "教育局管理员")