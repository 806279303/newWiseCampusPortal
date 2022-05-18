import {BaseComponent} from "../../../../type/BaseComponent";
import {DataCard} from "@/views/home/component/DataCard";
import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";

const RealtimePushTableClass = createTableClass<RealtimePushTableItem>()
type RealtimePushTableDescribe = LgSimpleTableDataDescribe<RealtimePushTableItem>


export interface RealtimePushTableItem{
  schoolId: string
  schoolName: string
  sysId: string
  sysName: string
  date: string
}

export interface RealtimePushTableProps{
  items: RealtimePushTableItem[]
}

export class RealtimePushTable extends BaseComponent<RealtimePushTableProps>{

  render() {
    return(
      <DataCard title="即时推送" className={this.rootClass()}>
        <RealtimePushTableClass
          dataArray={this.props.items}
          dataDescribe={this.getDataDescribe()}
          loading={false}
        />
      </DataCard>
    )
  }

  private getDataDescribe() {
    const dataDescribe: RealtimePushTableDescribe[] = [
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
        field: "sysId",
        headName: "系统ID",
      },
      {
        field: "sysName",
        headName: "系统名称",
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
    return "RealtimePushTable";
  }
}