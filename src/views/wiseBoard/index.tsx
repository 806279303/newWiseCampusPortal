import {WiseBoardHeader} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";
import {LgSimpleTable, LgSimpleTableData, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import { ReactNode } from "react";
import { BaseProps } from "../../type/BaseProps";


interface WiseBoardData extends LgSimpleTableData{
  schoolId: string,
  schoolName: string,
  useTime: string,
  remainTime: string,
  status: string,
  createTime: string
}



class WiseBoard extends BaseComponent {

  constructor(props: BaseProps | Readonly<BaseProps>, context: any) {
    super(props, context);
    this.renderOperation = this.renderOperation.bind(this)
  }


  renderOperation(data: WiseBoardData): ReactNode {
    return (
      <LgSimpleTable.Column key={"operation"}>
        <div className={this.class("operation")}>
          <div className={this.class("recharge")} onClick={() => alert("充值:" + data.schoolId)}>充值</div>
          <div className={this.class("split")} />
          <div className={this.class("recharge-record")} onClick={() => alert("充值记录:" + data.schoolId)}>充值记录</div>
        </div>
      </LgSimpleTable.Column>
    )
  }

  render() {
    const dataDescribe: LgSimpleTableDataDescribe<WiseBoardData>[] = [
      {
        isId: true,
        field: "schoolId",
        headName: "学校ID",
        width: "7%",
      },
      {
        field: "schoolName",
        headName: "学校名称",
      },
      {
        field: "useTime",
        headName: "已使用总时长(分钟)",
      },
      {
        field: "remainTime",
        headName: "剩余通话试剂盒",
      },
      {
        field: "status",
        headName: "状态",
      },
      {
        field: "createTime",
        headName: "创建时间",
      },
      {
        field: "",
        headName: "操作",
        render: this.renderOperation
      }
    ]

    const datas: WiseBoardData[] = []
    for (let i = 0; i < 10; i++) {
      datas.push({
        schoolId: "id-" + (i + 1),
        schoolName: "蓝鸽中小学",
        useTime: "100",
        remainTime: "200",
        status: "欠费",
        createTime: "2010-02-01"
      })
    }

    return (
      <MainContentView className={this.rootClass()} header={<WiseBoardHeader/>} footer={<div>paging</div>}>
        <LgSimpleTable<WiseBoardData> dataDescribe={dataDescribe} dataArray={datas} />
      </MainContentView>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

export default WiseBoard;