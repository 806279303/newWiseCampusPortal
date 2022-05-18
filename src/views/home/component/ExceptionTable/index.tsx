import {BaseComponent} from "../../../../type/BaseComponent";
import {DataCard} from "@/views/home/component/DataCard";
import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import "./index.scss"

const ExceptionTableClass = createTableClass<ExceptionTableItem>();
type ExceptionTableDescribe = LgSimpleTableDataDescribe<ExceptionTableItem>

export interface ExceptionTableItem{
  schoolId: string
  schoolName: string
  exceptionPath: string
  ip: string
  date: string
}

export interface ExceptionTableProps{
  items: ExceptionTableItem[]
}

export class ExceptionTable extends BaseComponent<ExceptionTableProps>{

  render() {
    return(
      <DataCard title="实时异常" className={this.rootClass()}>
        <ExceptionTableClass
          dataArray={this.props.items}
          dataDescribe={this.getDataDescribe()}
          loading={false}
        />
      </DataCard>
    )
  }

  private getDataDescribe() {
    const dataDescribe: ExceptionTableDescribe[] = [
      {
        isId: true,
        field: "schoolId",
        headName: "学校ID",
      },
      {
        field: "schoolName",
        headName: "学校名称",
      },
      {
        field: "exceptionPath",
        headName: "异常路径",
      },
      {
        field: "exceptionPath",
        headName: "IP",
      },
      {
        field: "date",
        headName: "时间",
        width: "150px",
        color: "#999"
      },
    ]
    return dataDescribe;
  }

  getClassNamePrefix(): string {
    return "ExceptionTable";
  }
}