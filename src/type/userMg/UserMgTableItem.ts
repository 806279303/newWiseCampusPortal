import {UserType} from "../UserType";

export interface UserMgTableItem{
  wxUserId: number
  wxName: string
  wxPhoto: string
  unionId: string
  userId: string
  username: string
  userType: UserType
  userPhoto: string
  schoolId: string
  schoolName: string
  phone: string
  // phoneModel: null
}