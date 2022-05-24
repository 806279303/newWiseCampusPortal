import {UserType} from "./UserType";

export interface OperationLogItem{
  logId: number
  userId: string
  userName: string
  userType: UserType
  content: string
  createTime: string
}