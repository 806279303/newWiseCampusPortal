import {SchoolType} from "./schoolType";


export interface WxSchoolSimpleInfo{
  id: number,
  schoolId: string,
  schoolName: string,
  schoolType: SchoolType,
  hostServerUrl: string
}