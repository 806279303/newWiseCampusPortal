import {WiseBoardHeader} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";
import {ReactNode} from "react";
import {BaseProps} from "../../type/BaseProps";
import {
  WiseBoardData,
  WiseBoardTable as WiseBoardTable1,
  WiseBoardTable,
  WiseBoardTableDataDescribe
} from "@/views/wiseBoard/type";
import {WiseBoardState} from "@/views/wiseBoard/wiseBoardState";


class WiseBoard extends BaseComponent<{}, WiseBoardState> {

  constructor(props: BaseProps | Readonly<BaseProps>, context: any) {
    super(props, context);
    this.renderOperation = this.renderOperation.bind(this)
    const dataArray: WiseBoardData[] = []
    for (let i = 0; i < 10; i++) {
      dataArray.push({
        schoolId: "id-" + (i + 1),
        schoolName: "蓝鸽中小学",
        useTime: "100",
        remainTime: "200",
        status: "欠费",
        createTime: "2010-02-01"
      })
    }
    this.state = {
      dataArray: dataArray
    }
  }

  render() {
    return (
      <MainContentView className={this.rootClass()} header={<WiseBoardHeader/>} footer={<div>paging</div>}>
        <WiseBoardTable dataDescribe={this.getDataDescribe()} dataArray={this.state.dataArray} />
      </MainContentView>
    );
  }

  private getDataDescribe() {
    const dataDescribe: WiseBoardTableDataDescribe[] = [
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
    return dataDescribe;
  }

  renderOperation(data: WiseBoardData): ReactNode {
    return (
      <WiseBoardTable1 key={"operation"}>
        <div className={this.class("operation")}>
          <div className={this.class("recharge")} onClick={() => alert("充值:" + data.schoolId)}>充值</div>
          <div className={this.class("split")} />
          <div className={this.class("recharge-record")} onClick={() => alert("充值记录:" + data.schoolId)}>充值记录</div>
        </div>
      </WiseBoardTable1>
    )
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

export default WiseBoard;