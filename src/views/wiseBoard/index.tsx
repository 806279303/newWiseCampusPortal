import {WiseBoardHeader, WiseBoardHeaderComponent} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";
import {ReactNode} from "react";
import {BaseProps} from "../../type/BaseProps";
import {WiseBoardProps, WiseBoardTable, WiseBoardTableDataDescribe} from "./type";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {RootState} from "../../redux/rootReducer";
import {serviceTypeOptionMap, WiseBoardTableData} from "../../type/wiseBoard/WiseBoardTableData";
import {FunctionProperties, NonFunctionProperties} from "../../type/util";
import {bindActionCreators} from "redux";
import {fetchWiseBoardListAction} from "../../redux/wiseBoard/action";
import {WiseBoardFooterComponent} from "@/views/wiseBoard/components/footer/footer";


class WiseBoard extends BaseComponent<WiseBoardProps> {

  constructor(props: WiseBoardProps & BaseProps) {
    super(props);
    this.renderOperation = this.renderOperation.bind(this)
  }

  componentDidMount() {
    super.componentDidMount();
    this.props.fetchWiseBoardListAction(1)
  }

  render() {
    return (
      <MainContentView className={this.rootClass()} header={<WiseBoardHeaderComponent/>} footer={<WiseBoardFooterComponent/>}>
        <WiseBoardTable dataDescribe={this.getDataDescribe()} dataArray={this.props.dataArray} loading={this.props.loading}/>
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
        field: "usedCallTime",
        headName: "已使用总时长(分钟)",
      },
      {
        field: "restCallTime",
        headName: "剩余通话试剂盒",
      },
      {
        field: "serviceType",
        headName: "状态",
        render(data: WiseBoardTableData): ReactNode {
          return (
            <WiseBoardTable.Column key={"serviceType"}>
              {
                serviceTypeOptionMap.get(data.serviceType)
              }
            </WiseBoardTable.Column>
          )
        }
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

  renderOperation(data: WiseBoardTableData): ReactNode {
    return (
      <WiseBoardTable.Column key={"operation"}>
        <div className={this.class("operation")}>
          <div className={this.class("recharge")} onClick={() => alert("充值:" + data.schoolId)}>充值</div>
          <div className={this.class("split")}/>
          <div className={this.class("recharge-record")} onClick={() => alert("充值记录:" + data.schoolId)}>充值记录</div>
        </div>
      </WiseBoardTable.Column>
    )
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<WiseBoardProps>, WiseBoardProps, RootState> = (state) => {
  return {
    loading: state.wiseBoardReducer.loading,
    dataArray: state.wiseBoardReducer.tableData
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<WiseBoardProps>, any> = (dispatch) => {
  return bindActionCreators({fetchWiseBoardListAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WiseBoard);